import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHeading } from "@/components/ui";
import { projects, projectHref } from "@/lib/portfolio";

export const metadata: Metadata = { title: "기술별 경험" };

const areas = [
  {
    title: "화면과 사용자 흐름",
    description: "챗봇, 인증·결제와 콘텐츠 관리, 운영 중인 React 전환 사례입니다.",
    tags: ["React", "Next.js", "OAuth", "PG 결제"],
    projects: ["erp-ai", "legacy-snap", "commerce", "education"],
  },
  {
    title: "API와 데이터 연결",
    description: "화면과 연결되는 API, 업무 정보 조회와 서비스 간 파일 전달 경험입니다.",
    tags: ["Node.js", "NestJS", "FastAPI", "MySQL"],
    projects: ["education", "s3-transfer", "ai-ad-generator"],
  },
  {
    title: "운영 구조와 자동화",
    description: "업로드 처리의 역할 분리, 메시지 연동과 AI 업무 기능을 다룹니다.",
    tags: ["AWS SQS", "AWS S3", "LangGraph", "LLM"],
    projects: ["upload-server", "erp-ai", "ai-ad-generator"],
  },
  {
    title: "모바일과 서비스 연동",
    description: "Android·iOS 앱 출시와 인증·결제·영상 등 외부 서비스 연동 경험입니다.",
    tags: ["Flutter", "express", "Vimeo"],
    projects: ["helfu", "commerce", "education"],
  },
];
export default function CapabilitiesPage() {
  return (
    <>
      <PageHeading
        eyebrow="FIND EXPERIENCE BY TECHNOLOGY"
        title="궁금한 기술에서, 실제 사례로."
        description="기술을 선택하면 적용한 프로젝트만 모아 볼 수 있습니다. 사례에서 직접 담당한 범위와 구현 내용을 확인하세요."
      />
      <section aria-label="기술별 프로젝트 찾기" className="technology-index">
        {areas.map((area) => (
          <article className="panel technology-card" key={area.title}>
            <h2>{area.title}</h2>
            <p>{area.description}</p>
            <div className="technology-tags">
              {area.tags.map((tag) => (
                <Link key={tag} href={`/projects/?q=${encodeURIComponent(tag)}`}>
                  {tag}
                  <ArrowUpRight size={13} aria-hidden="true" />
                </Link>
              ))}
            </div>
            <div className="technology-projects">
              {area.projects.map((id) => (
                <Link key={id} href={projectHref(id)}>
                  {projects.find((project) => project.id === id)!.name}
                  <ArrowUpRight size={15} aria-hidden="true" />
                </Link>
              ))}
            </div>
          </article>
        ))}
      </section>
    </>
  );
}
