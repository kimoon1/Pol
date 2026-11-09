import Link from "next/link";
import {
  ArrowUpRight,
  ArrowRight,
  Code2,
  Layers,
  ShieldCheck,
} from "lucide-react";
import {
  profile,
  featuredProjects,
  orderedProjects,
  careers,
  projectHref,
} from "@/lib/portfolio";
import { SectionHeading } from "@/components/ui";
import ProjectCard from "@/components/project-card";

export default function HomePage() {
  const frontendProjects = orderedProjects.filter((project) =>
    ["legacy-snap", "commerce"].includes(project.id),
  );
  return (
    <>
      <div className="dashboard-welcome">
        <div>
          <span className="eyebrow">LEE KIMOON / SELECTED WORK</span>
          <p>안녕하세요, 프론트엔드 개발자 이기문입니다.</p>
        </div>
        <span className="edition-label">PORTFOLIO — 2026</span>
      </div>
      <section className="portfolio-hero">
        <div className="portfolio-hero-copy">
          <span className="eyebrow">FRONTEND DEVELOPER</span>
          <h1>
            업무의 복잡함을,
            <br />
            <span>사용하기 쉬운 화면으로.</span>
          </h1>
          <p>{profile.summary}</p>
          <div className="hero-tech">
            <b>React</b>
            <i />
            <b>Next.js</b>
            <i />
            <b>TypeScript</b>
          </div>
          <div className="hero-actions">
            <a href="#selected-work" className="button button-primary">
              대표 프로젝트 보기
              <ArrowRight size={17} />
            </a>
            <Link href="/resume/" className="button button-secondary">
              경력 요약
              <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
        <aside className="hero-focus" aria-label="개발 경험 요약">
          <div className="hero-focus-heading">
            <Code2 size={23} />
            <span>
              FRONTEND
              <br />
              <strong>+ SERVICE CONTEXT</strong>
            </span>
          </div>
          <div>
            <span>주력 분야</span>
            <strong>화면 · 사용자 흐름 · API 연동</strong>
          </div>
          <div>
            <span>총 개발 경력</span>
            <strong>
              {profile.experience}
              <small>SI → 서비스 회사</small>
            </strong>
          </div>
          <div>
            <span>백엔드 경험</span>
            <strong>
              NestJS · FastAPI
              <small>총 경력 내 {profile.backendExperience}</small>
            </strong>
          </div>
        </aside>
      </section>
      <section id="selected-work" className="selected-work">
        <SectionHeading
          title="대표 프로젝트"
          subtitle="화면과 데이터, 권한과 운영을 연결한 실무 경험입니다."
          href="/projects/"
          linkText="전체 프로젝트"
        />
        <div className="featured-grid">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} heading="h3" />
          ))}
        </div>
      </section>
      <section className="frontend-work">
        <SectionHeading
          title="React로 쌓아 온 경험"
          subtitle="운영 중인 서비스의 전환과 인증·결제 흐름 구현."
        />
        <div className="frontend-project-list">
          {frontendProjects.map((project, index) => (
            <Link href={projectHref(project.id)} key={project.id}>
              <span className="project-list-number">0{index + 1}</span>
              <div>
                <h3>{project.name}</h3>
                <p>{project.subtitle}</p>
                <span>{project.role}</span>
              </div>
              <ArrowUpRight size={23} />
            </Link>
          ))}
        </div>
      </section>
      <section className="home-career panel">
        <SectionHeading
          title="설계하고, 구현하고, 개선해 왔습니다."
          href="/about/"
          linkText="소개 · 경력"
        />
        <div className="home-career-grid">
          {careers.map((career, index) => (
            <div key={career.company}>
              {index === 0 ? <ShieldCheck size={23} /> : <Layers size={23} />}
              <span>{career.period}</span>
              <h3>{career.company}</h3>
              <p>{career.description}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="contact-panel">
        <div>
          <span className="eyebrow">LET’S BUILD TOGETHER</span>
          <h2>더 자세한 경험이 궁금하다면</h2>
          <p>경력 요약과 프로젝트별 담당 범위를 확인하세요.</p>
        </div>
        <div className="contact-actions">
          <Link href="/resume/" className="button button-primary">
            경력 요약 보기
            <ArrowUpRight size={16} />
          </Link>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="button button-secondary"
          >
            GitHub
            <ArrowUpRight size={16} />
          </a>
        </div>
      </section>
    </>
  );
}
