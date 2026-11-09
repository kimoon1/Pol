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
import ContactActions from "@/components/contact-actions";

export default function HomePage() {
  const serviceProjects = orderedProjects.filter((project) =>
    ["upload-server", "ai-ad-generator"].includes(project.id),
  );
  return (
    <>
      <div className="dashboard-welcome">
        <div>
          <span className="eyebrow">LEE KIMOON / SELECTED WORK</span>
          <p>이기문 · React / Next.js / TypeScript</p>
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
        </aside>
      </section>
      <section id="selected-work" className="selected-work">
        <SectionHeading
          title="대표 프로젝트"
          subtitle="챗봇 화면, 운영 중인 React 전환, 인증부터 결제까지. 직접 맡은 화면과 흐름입니다."
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
          title="화면을 넘어 서비스까지"
          subtitle="백엔드와 운영 구조를 이해하며 넓혀 온 개발 경험입니다."
        />
        <div className="frontend-project-list">
          {serviceProjects.map((project, index) => (
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
          <h2>함께 만들 서비스가 있나요?</h2>
          <p>프로젝트와 채용에 관한 이야기는 이메일로 편하게 보내주세요.</p>
          <a className="contact-email" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
        </div>
        <ContactActions />
      </section>
    </>
  );
}
