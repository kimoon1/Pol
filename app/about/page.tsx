import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  Github,
  BriefcaseBusiness,
  GraduationCap,
  Code2,
  Focus,
  Layers,
} from "lucide-react";
import { Badge, PageHeading, SectionHeading } from "@/components/ui";
import CopyProfile from "@/components/copy-profile";
import {
  profile,
  careers,
  education,
  skillGroups,
  projects,
  projectHref,
} from "@/lib/portfolio";

export const metadata: Metadata = { title: "소개 · 경력" };

export default function AboutPage() {
  return (
    <>
      <PageHeading
        eyebrow="THE PERSON BEHIND THE CODE"
        title="화면에서 시작해, 서비스까지 이해합니다."
        description="React·Next.js·TypeScript를 중심으로 개발하는 이기문입니다."
      />
      <section className="about-intro panel">
        <div className="about-avatar">
          <span>
            K<span>.</span>
          </span>
          <div>
            <Code2 size={28} />
          </div>
          <small>LEE KIMOON / FRONTEND</small>
        </div>
        <div className="about-intro-content">
          <Badge blue>
            {profile.title} · 경력 {profile.experience}
          </Badge>
          <h2>
            안녕하세요,
            <br />
            개발자 <span>{profile.name}</span>입니다.
          </h2>
          <p>{profile.introduction}</p>
          <p>{profile.summary}</p>
          <Link className="text-link" href="/resume/">
            인쇄 가능한 경력 요약
            <ArrowUpRight size={15} />
          </Link>
        </div>
      </section>
      <section className="principles-section">
        <SectionHeading
          title="경험으로 쌓아 온 강점"
          subtitle="프론트엔드를 중심으로, 서비스의 맥락까지."
        />
        <div className="principles-grid">
          {[
            {
              icon: Focus,
              title: "사용자 흐름을 구현합니다.",
              text: "쇼핑몰의 로그인·본인확인·결제, 교육 콘텐츠 관리, ERP 챗봇 화면을 개발했습니다.",
            },
            {
              icon: Layers,
              title: "화면과 API를 연결합니다.",
              text: "NestJS·FastAPI 기반 백엔드 경험을 바탕으로 데이터 흐름과 권한을 함께 고려합니다.",
            },
            {
              icon: Code2,
              title: "운영 중인 서비스를 개선합니다.",
              text: "PHP 레거시를 React·Node.js로 전환하고, 보안을 위한 업로드 서버 재구축을 진행했습니다.",
            },
          ].map(({ icon: Icon, title, text }, index) => (
            <article className="principle-card" key={title}>
              <div>
                <Icon size={21} />
                <span>0{index + 1}</span>
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>
      <div className="about-columns">
        <section className="panel experience-panel">
          <SectionHeading
            title="경력과 발자취"
            subtitle={`총 경력 ${profile.experience}`}
          />
          {careers.map((career) => (
            <div className="timeline-placeholder" key={career.company}>
              <div className="timeline-icon">
                <BriefcaseBusiness size={20} />
              </div>
              <div>
                <div className="timeline-title">
                  <h3>{career.company}</h3>
                  {career.period.includes("재직") && (
                    <Badge blue>재직 중</Badge>
                  )}
                </div>
                <p>
                  {career.period} · {career.role}
                </p>
                <span>{career.description}</span>
                <div className="career-links">
                  {career.projects.slice(0, 3).map((id) => (
                    <Link key={id} href={projectHref(id)}>
                      {projects.find((project) => project.id === id)?.name}
                      <ArrowUpRight size={12} />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </section>
        <section className="panel documents-panel">
          <SectionHeading title="학력과 교육" />
          {education.map((item) => (
            <div className="education-item" key={item.name}>
              <GraduationCap size={19} />
              <div>
                <h3>{item.name}</h3>
                <span>{item.period}</span>
                <p>{item.detail}</p>
              </div>
            </div>
          ))}
        </section>
      </div>
      <section className="panel skills-panel">
        <SectionHeading
          title="기술과 실제 적용 경험"
          subtitle="주력 기술과 확장 경험을 프로젝트에 연결했습니다."
        />
        {skillGroups.map((group) => (
          <div className="skill-evidence" key={group.label}>
            <div>
              <h3>{group.label}</h3>
              <p>{group.experience}</p>
            </div>
            <div>
              <div className="tech-tags">
                {group.skills.map((tech) => (
                  <Badge key={tech}>{tech}</Badge>
                ))}
              </div>
              <div className="career-links">
                {group.projects.map((id) => (
                  <Link key={id} href={projectHref(id)}>
                    {projects.find((project) => project.id === id)?.name}
                    <ArrowUpRight size={12} />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>
      <section className="panel ai-experience about-ai">
        <SectionHeading title="업무에서 활용한 AI" />
        <ul className="ai-list">
          <li>ERP 챗봇 프론트엔드와 Python·LangGraph 기반 챗봇 구현</li>
          <li>사용자 권한에 따른 사내 조직·정책 조회 · 벡터 검색 미사용</li>
          <li>광고 이미지·영상 생성·제작 프로젝트 진행 중</li>
        </ul>
        <div className="external-work-links">
          <Link className="text-link" href={projectHref("erp-ai")}>
            ERP 챗봇 사례 읽기
            <ArrowUpRight size={14} />
          </Link>
          <Link className="text-link" href={projectHref("ai-ad-generator")}>
            광고 생성 프로젝트 보기
            <ArrowUpRight size={14} />
          </Link>
        </div>
      </section>
      <section className="contact-panel">
        <div>
          <span className="eyebrow">LET’S BUILD TOGETHER</span>
          <h2>경험을 더 자세히 살펴보세요.</h2>
          <p>경력 요약과 공개 작업은 아래에서 확인할 수 있습니다.</p>
        </div>
        <div className="contact-actions">
          <Link href="/resume/" className="button button-primary">
            경력 요약
            <ArrowUpRight size={16} />
          </Link>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="button button-secondary"
          >
            <Github size={17} />
            GitHub
          </a>
          <CopyProfile />
        </div>
      </section>
    </>
  );
}
