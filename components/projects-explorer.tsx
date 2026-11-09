"use client";

import { Suspense, useEffect, useState, type MouseEvent } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Search, X } from "lucide-react";
import { orderedProjects, projectHref } from "@/lib/portfolio";
import {
  createProjectSearch,
  projectFilters,
  readProjectSearch,
  type ProjectFilter,
} from "@/lib/project-search";
import ProjectCard from "./project-card";
import { EmptyState } from "./ui";

type ExplorerViewProps = {
  filter: ProjectFilter;
  query: string;
  onChange?: (filter: ProjectFilter, query: string) => void;
  onProjectClick?: (event: MouseEvent<HTMLDivElement>) => void;
};

function ExplorerView({
  filter,
  query,
  onChange,
  onProjectClick,
}: ExplorerViewProps) {
  const filtered = orderedProjects.filter(
    (project) =>
      (filter === "전체" || project.category === filter) &&
      `${project.name} ${project.subtitle} ${project.company} ${project.stack.join(" ")} ${project.features.join(" ")}`
        .toLowerCase()
        .includes(query.trim().toLowerCase()),
  );
  const hasConditions = filter !== "전체" || query.trim().length > 0;

  return (
    <>
      <div className="explorer-toolbar">
        <div className="filter-tabs" role="group" aria-label="프로젝트 분류">
          {projectFilters.map((value) => (
            <button
              key={value}
              onClick={() => onChange?.(value, query)}
              aria-pressed={filter === value}
              className={filter === value ? "selected" : ""}
            >
              {value}
            </button>
          ))}
        </div>
        <label className="search-field">
          <Search size={17} aria-hidden="true" />
          <input
            value={query}
            onChange={(event) => onChange?.(filter, event.target.value)}
            placeholder="프로젝트, 기술 검색"
            aria-label="프로젝트, 기술 검색"
          />
          {query && (
            <button
              aria-label="검색어 지우기"
              onClick={() => onChange?.(filter, "")}
            >
              <X size={14} />
            </button>
          )}
        </label>
      </div>
      <p className="result-count" role="status">
        {filtered.length}개의 프로젝트{" "}
        <span>
          {filtered.length === 0
            ? "· 검색어나 분류를 바꿔보세요"
            : hasConditions
              ? "· 선택한 조건에 맞는 프로젝트입니다"
              : "· 대표 사례부터 살펴보세요"}
        </span>
      </p>
      {filtered.length ? (
        <div className="projects-grid" onClickCapture={onProjectClick}>
          {filtered.map((project) => (
            <ProjectCard project={project} key={project.id} />
          ))}
        </div>
      ) : (
        <EmptyState
          title="일치하는 프로젝트가 없어요"
          description="다른 검색어를 입력하거나 분류를 변경해 보세요."
        />
      )}
    </>
  );
}

function ProjectsExplorerWithLocation() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const search = searchParams.toString();
  const { filter, query } = readProjectSearch(search);
  const [inputQuery, setInputQuery] = useState(query);

  useEffect(() => {
    // Keep typing synchronous even while the router processes the URL update.
    setInputQuery(readProjectSearch(window.location.search).query);
    const legacyId = searchParams.get("project");
    if (legacyId && orderedProjects.some((project) => project.id === legacyId)) {
      router.replace(projectHref(legacyId));
      return;
    }

    // The position belongs to this history entry, so a shared URL starts at the top.
    const position = window.history.state?.portfolioListPosition;
    if (
      position?.url !== window.location.href ||
      !Number.isFinite(position.x) ||
      !Number.isFinite(position.y)
    )
      return;
    const frame = window.requestAnimationFrame(() => {
      window.scrollTo({ left: position.x, top: position.y, behavior: "instant" });
    });
    return () => window.cancelAnimationFrame(frame);
  }, [router, search, searchParams]);

  function updateConditions(nextFilter: ProjectFilter, nextQuery: string) {
    setInputQuery(nextQuery);
    const params = createProjectSearch(
      window.location.search,
      nextFilter,
      nextQuery,
    );
    const url = `${window.location.pathname}${params ? `?${params}` : ""}${window.location.hash}`;
    // Native history updates stay in sync with Next's search params without navigation.
    window.history.replaceState(null, "", url);
  }

  function rememberListPosition(event: MouseEvent<HTMLDivElement>) {
    if (
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey ||
      !(event.target instanceof Element) ||
      !event.target.closest('a[href^="/projects/"]')
    )
      return;
    window.history.replaceState(
      {
        portfolioListPosition: {
          url: window.location.href,
          x: window.scrollX,
          y: window.scrollY,
        },
      },
      "",
      window.location.href,
    );
  }

  return (
    <ExplorerView
      filter={filter}
      query={inputQuery}
      onChange={updateConditions}
      onProjectClick={rememberListPosition}
    />
  );
}

export default function ProjectsExplorer() {
  return (
    <Suspense fallback={<ExplorerView filter="전체" query="" />}>
      <ProjectsExplorerWithLocation />
    </Suspense>
  );
}
