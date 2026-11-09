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
        description="ERP 챗봇, 업로드 서버, AI 광고 생성부터 React 서비스 개발까지. 직접 담당한 역할과 구현 내용을 담았습니다."
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
