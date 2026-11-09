"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Search, X } from "lucide-react";
import { orderedProjects, projectHref } from "@/lib/portfolio";
import ProjectCard from "./project-card";
import { EmptyState } from "./ui";

const filters = ["전체", "Web", "Platform", "Mobile", "Infrastructure"];

export default function ProjectsExplorer() {
  const router = useRouter();
  const [filter, setFilter] = useState("전체");
  const [query, setQuery] = useState("");
  useEffect(() => {
    const legacyId = new URLSearchParams(window.location.search).get("project");
    if (legacyId && orderedProjects.some((project) => project.id === legacyId))
      router.replace(projectHref(legacyId));
  }, [router]);

  const filtered = orderedProjects.filter(
    (project) =>
      (filter === "전체" || project.category === filter) &&
      `${project.name} ${project.subtitle} ${project.company} ${project.stack.join(" ")} ${project.features.join(" ")}`
        .toLowerCase()
        .includes(query.trim().toLowerCase()),
  );

  return (
    <>
      <div className="explorer-toolbar">
        <div className="filter-tabs" role="group" aria-label="프로젝트 분류">
          {filters.map((value) => (
            <button
              key={value}
              onClick={() => setFilter(value)}
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
            onChange={(event) => setQuery(event.target.value)}
            placeholder="프로젝트, 기술 검색"
            aria-label="프로젝트, 기술 검색"
          />
          {query && (
            <button aria-label="검색어 지우기" onClick={() => setQuery("")}>
              <X size={14} />
            </button>
          )}
        </label>
      </div>
      <p className="result-count" role="status">
        {filtered.length}개의 프로젝트 <span>· 대표 사례부터 살펴보세요</span>
      </p>
      {filtered.length ? (
        <div className="projects-grid">
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
