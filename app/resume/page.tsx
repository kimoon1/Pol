import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import {
  profile,
  careers,
  featuredProjects,
  recentProject,
  skillGroups,
  education,
  projectHref,
  projectStatus,
} from "@/lib/portfolio";
import { caseStudies } from "@/lib/case-studies";
import PrintResume from "@/components/print-resume";

export const metadata: Metadata = {
  title: "경력 요약",
  description:
    "이기문 · React, Next.js, TypeScript 프론트엔드 개발 경력과 대표 프로젝트 요약.",
};

const resumeProjects = [
  recentProject,
  ...featuredProjects.filter((project) => project.id !== recentProject.id),
];

export default function ResumePage() {
  return (
    <article className="resume-sheet">
      <header className="resume-header">
        <div>
          <span className="eyebrow">CAREER SUMMARY</span>
          <h1>
            {profile.name}
            <span>{profile.title}</span>
          </h1>
          <p>총 경력 {profile.experience} · React / Next.js / TypeScript</p>
          <p><a href={`mailto:${profile.email}`}>{profile.email}</a></p>
          <a href={profile.github}>{profile.github}</a>
        </div>
        <PrintResume />
      </header>
      <p className="resume-intro">{profile.summary}</p>
      <section>
        <h2>경력</h2>
        {careers.map((career) => (
          <div className="resume-entry" key={career.company}>
            <div>
              <h3>{career.company}</h3>
              <span>
                {career.period} · {career.role}
              </span>
            </div>
            <p>{career.description}</p>
          </div>
        ))}
      </section>
      <section>
        <h2>대표 프로젝트</h2>
        {resumeProjects.map((project) => {
          const study = caseStudies[project.id];
          return (
            <div className="resume-entry" key={project.id}>
              <div>
                <h3>
                  <Link href={projectHref(project.id)}>
                    {project.name}
                    <ArrowUpRight size={15} aria-hidden="true" />
                  </Link>
                </h3>
                <span>
                  {project.period} · {projectStatus(project)}
                </span>
              </div>
              <p>
                <strong>담당</strong> {study?.contribution ?? project.role}
              </p>
              {project.environment && (
                <p>
                  <strong>운영 환경</strong> {project.environment}
                </p>
              )}
              {project.collaboration && (
                <p>
                  <strong>협업</strong> {project.collaboration}
                </p>
              )}
              <p>
                <strong>구현 결과</strong> {study?.resumeResult ?? project.result}
              </p>
              {project.id === "erp-ai" && (
                <p className="no-print">
                  <Link
                    className="text-link"
                    href={`${projectHref(project.id)}#erp-chat-demo`}
                  >
                    챗봇 데모 체험 <ArrowUpRight size={15} aria-hidden="true" />
                  </Link>
                </p>
              )}
            </div>
          );
        })}
      </section>
      <section>
        <h2>기술과 경험</h2>
        {skillGroups.map((group) => (
          <div className="resume-entry" key={group.label}>
            <h3>{group.label}</h3>
            <p>{group.experience}</p>
            <p>{group.skills.join(" · ")}</p>
          </div>
        ))}
      </section>
      <section>
        <h2>학력 · 교육</h2>
        {education.map((item) => (
          <div className="resume-entry" key={item.name}>
            <h3>{item.name}</h3>
            <span>{item.period}</span>
            <p>{item.detail}</p>
          </div>
        ))}
      </section>
      <p className="resume-date">경력 정보 기준: {profile.sourceDate}</p>
    </article>
  );
}
