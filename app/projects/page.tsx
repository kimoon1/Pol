import type { Metadata } from "next";
import { PageHeading } from "@/components/ui";
import { projects } from "@/lib/portfolio";
import ProjectsExplorer from "@/components/projects-explorer";
export const metadata: Metadata = { title: "프로젝트" };
export default function ProjectsPage() {
  return (
    <>
      <PageHeading
        eyebrow="SELECTED WORK"
        title="만들어 온 것들."
        description="ERP 챗봇 화면, React 전환과 쇼핑몰 개발을 중심으로, API·서버·모바일까지 직접 맡은 일을 소개합니다."
        aside={
          <span className="page-index">
            01 — {String(projects.length).padStart(2, "0")}
          </span>
        }
      />
      <ProjectsExplorer />
    </>
  );
}
