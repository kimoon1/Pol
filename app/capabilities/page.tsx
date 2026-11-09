import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Badge, PageHeading } from "@/components/ui";
import { implementedFeatures, projectHref } from "@/lib/portfolio";
export const metadata: Metadata = { title: "구현 기능" };
export default function CapabilitiesPage() {
  return (
    <>
      <PageHeading
        eyebrow="CAPABILITIES & IMPLEMENTATION"
        title="기능에 담은 실무 경험."
        description="사용자의 화면부터 데이터 흐름과 서버 구조까지, 직접 구현한 영역을 소개합니다."
        aside={<span className="page-index">BUILD / CONNECT / IMPROVE</span>}
      />
      <section aria-label="실무 구현 기능" className="implemented-grid">
        {implementedFeatures.map((f, i) => (
          <article className="panel implemented-card" key={f.title}>
            <div className="implemented-card-top">
              <span className="eyebrow">{f.category}</span>
              <span>0{i + 1}</span>
            </div>
            <h2>{f.title}</h2>
            <p>{f.description}</p>
            <div className="tech-tags">
              {f.tags.map((t) => (
                <Badge key={t}>{t}</Badge>
              ))}
            </div>
            <Link className="text-link" href={projectHref(f.project)}>
              관련 프로젝트 보기
              <ArrowUpRight size={14} />
            </Link>
          </article>
        ))}
      </section>
    </>
  );
}
