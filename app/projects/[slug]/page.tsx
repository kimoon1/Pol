import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";
import { projects, projectStatus } from "@/lib/portfolio";
import { caseStudies } from "@/lib/case-studies";
import { Badge } from "@/components/ui";
import CaseDiagram from "@/components/case-diagram";
import ProjectCard from "@/components/project-card";

export const dynamicParams = false;
export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.id }));
}

type Props = { params: Promise<{ slug: string }> };
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.id === slug);
  if (!project) return { title: "프로젝트를 찾을 수 없습니다" };
  return {
    title: project.name,
    description: project.description,
    openGraph: {
      title: `${project.name} · 이기문`,
      description: project.description,
      type: "article",
      locale: "ko_KR",
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((item) => item.id === slug);
  if (!project) notFound();
  const study = caseStudies[slug];
  const related =
    study?.related.flatMap(
      (id) => projects.find((item) => item.id === id) ?? [],
    ) ?? [];
  const inProgress = project.status === "in-progress";
  return (
    <article className="case-study">
      <Link className="text-link case-back" href="/projects/">
        <ArrowLeft size={16} />
        프로젝트 목록
      </Link>
      <header className="case-header">
        <div className="project-meta">
          <span className="eyebrow">PROJECT CASE STUDY</span>
          <Badge blue>{projectStatus(project)}</Badge>
        </div>
        <h1>{project.name}</h1>
        <p className="case-lead">{project.subtitle}</p>
        <div className="tech-tags">
          {project.stack.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>
        <dl className="case-facts">
          <div>
            <dt>기간</dt>
            <dd>{project.period}</dd>
          </div>
          <div>
            <dt>소속 · 구분</dt>
            <dd>{project.company}</dd>
          </div>
          <div>
            <dt>담당 역할</dt>
            <dd>{project.role}</dd>
          </div>
        </dl>
      </header>
      <section className="case-overview panel">
        <span className="eyebrow">OVERVIEW</span>
        <h2>{study?.focus ?? project.subtitle}</h2>
        <p>{project.description}</p>
      </section>
      {(project.environment || project.collaboration) && (
        <section
          className="case-context panel"
          aria-label="운영 환경과 협업 범위"
        >
          {project.environment && (
            <div>
              <h2>운영 환경</h2>
              <p>{project.environment}</p>
            </div>
          )}
          {project.collaboration && (
            <div>
              <h2>협업과 담당 범위</h2>
              <p>{project.collaboration}</p>
            </div>
          )}
        </section>
      )}
      <CaseDiagram id={slug} />
      {inProgress ? (
        <section className="case-overview panel progress-summary">
          <span className="eyebrow">IN PROGRESS</span>
          <h2>현재 개발 중입니다.</h2>
          <p>{study?.scope ?? project.result}</p>
          <div className="responsibility-list progress-responsibilities">
            {study?.responsibilities.map((item) => (
              <div key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
          {project.updatedAt && (
            <p className="case-updated">
              최근 업데이트{" "}
              <time dateTime={project.updatedAt}>
                {project.updatedAt.replaceAll("-", ".")}
              </time>
            </p>
          )}
        </section>
      ) : (
        <div className="case-body-grid">
          <nav className="case-toc" aria-label="프로젝트 목차">
            <a href="#problem">해결할 문제</a>
            <a href="#role">담당 범위</a>
            <a href="#implementation">구현 내용</a>
            <a href="#outcome">결과</a>
          </nav>
          <div className="case-body">
            <section id="problem">
              <span className="eyebrow">01 / CONTEXT</span>
              <h2>해결할 문제</h2>
              <p>{project.challenge}</p>
            </section>
            <section id="role">
              <span className="eyebrow">02 / CONTRIBUTION</span>
              <h2>직접 담당한 범위</h2>
              {study ? (
                <div className="responsibility-list">
                  {study.responsibilities.map((item) => (
                    <div key={item.title}>
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <p>{project.role}</p>
              )}
            </section>
            <section id="implementation">
              <span className="eyebrow">03 / IMPLEMENTATION</span>
              <h2>구현 내용과 구조</h2>
              <p>{project.solution}</p>
              {study?.decisions.map((item) => (
                <div className="decision" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              ))}
              <ul className="check-list">
                {project.features.map((feature) => (
                  <li key={feature}>
                    <Check size={17} aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
            </section>
            <section id="outcome">
              <span className="eyebrow">04 / OUTCOME</span>
              <h2>결과</h2>
              <p>{project.result}</p>
              {study && <p className="case-scope">{study.scope}</p>}
              {project.updatedAt && (
                <p className="case-updated">
                  최근 업데이트{" "}
                  <time dateTime={project.updatedAt}>
                    {project.updatedAt.replaceAll("-", ".")}
                  </time>
                </p>
              )}
              {project.link && (
                <a
                  className="button button-primary"
                  href={project.link.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {project.link.label}
                  <ArrowUpRight size={16} />
                </a>
              )}
            </section>
          </div>
        </div>
      )}
      {related.length > 0 && (
        <section className="related-projects">
          <div className="section-heading">
            <h2>이어지는 경험</h2>
            <Link className="text-link" href="/projects/">
              전체 프로젝트
              <ArrowUpRight size={16} />
            </Link>
          </div>
          <div className="related-grid">
            {related.map((item) => (
              <ProjectCard key={item.id} project={item} heading="h3" />
            ))}
          </div>
        </section>
      )}
      <div className="case-end">
        <Link className="button button-secondary" href="/resume/">
          경력 요약 보기
          <ArrowUpRight size={16} />
        </Link>
        <Link className="text-link" href="/projects/">
          프로젝트 목록
          <ArrowUpRight size={16} />
        </Link>
      </div>
    </article>
  );
}
