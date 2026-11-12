import Link from "next/link";
import {
  ArrowUpRight,
  ArrowRight,
  ArrowDown,
  Code2,
  ShieldCheck,
  Layers,
  Database,
  Workflow,
} from "lucide-react";
import {
  profile,
  featuredProjects,
  orderedProjects,
  careers,
  projectHref,
} from "@/lib/portfolio";
import ProjectCard from "@/components/project-card";
import ContactActions from "@/components/contact-actions";
import HeroVisual from "@/components/hero-visual";

export default function HomePage() {
  const upload = orderedProjects.find(
    (project) => project.id === "upload-server",
  )!;
  const inProgress = orderedProjects.find(
    (project) => project.id === "ai-ad-generator",
  )!;
  return (
    <div className="home-editorial">
      <section className="home-intro" aria-labelledby="home-title">
        <div className="home-topline">
          <span className="eyebrow">
            <i />
            LEE KIMOON / FRONTEND DEVELOPER
          </span>
          <span className="home-edition">SELECTED WORK — 2026</span>
        </div>
        <div className="home-hero-layout">
          <div className="home-hero-copy">
            <h1 id="home-title">
              업무의 복잡함을,
              <br />
              <span>
                사용하기 쉬운
                <br className="hero-title-break" /> 화면으로.
              </span>
            </h1>
            <p>{profile.summary}</p>
            <div className="home-hero-actions">
              <a href="#selected-work" className="button button-primary">
                대표 프로젝트 보기 <ArrowDown size={17} />
              </a>
              <Link href="/resume/" className="home-resume-link">
                경력 요약 <ArrowUpRight size={17} />
              </Link>
            </div>
            <div className="home-hero-meta">
              <strong>{profile.experience} 개발 경험</strong>
              <span />
              <p>React · Next.js · TypeScript</p>
            </div>
          </div>
          <HeroVisual />
        </div>
        <div className="experience-strip" aria-label="직접 맡은 개발 경험">
          {[
            {
              id: "erp-ai",
              label: "업무를 조회하는 화면",
              detail: "ERP 챗봇 · 기능 권한 연동",
            },
            {
              id: "legacy-snap",
              label: "운영을 유지하는 전환",
              detail: "PHP → React · Node.js",
            },
            {
              id: "commerce",
              label: "구매를 연결하는 흐름",
              detail: "로그인 · 본인인증 · 결제",
            },
          ].map((item, index) => (
            <Link key={item.id} href={projectHref(item.id)}>
              <span className="strip-index">0{index + 1}</span>
              <div>
                <strong>{item.label}</strong>
                <p>{item.detail}</p>
              </div>
              <ArrowUpRight size={17} />
            </Link>
          ))}
        </div>
      </section>

      <section
        id="selected-work"
        className="editorial-work"
        aria-labelledby="selected-work-title"
      >
        <div className="editorial-section-heading">
          <div>
            <span className="eyebrow">01 / SELECTED WORK</span>
            <h2 id="selected-work-title">
              직접 만든 흐름,
              <br />
              <span>구체적인 기여.</span>
            </h2>
          </div>
          <div>
            <p>
              챗봇 화면부터 운영 중인 서비스 전환까지.
              <br />
              맡은 역할과 구현 과정을 정리했습니다.
            </p>
            <Link className="text-link" href="/projects/">
              전체 프로젝트 <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
        <div className="featured-grid">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} heading="h3" />
          ))}
        </div>
      </section>

      <section
        className="engineering-feature"
        aria-labelledby="engineering-title"
      >
        <div className="engineering-feature-top">
          <span className="eyebrow">02 / ENGINEERING IN PRACTICE</span>
          <span>PHP 8.3 · DDD · SQS</span>
        </div>
        <div className="engineering-layout">
          <div className="engineering-copy">
            <span className="engineering-kicker">PHP 업로드 서버 리팩토링</span>
            <h2 id="engineering-title">
              코드를 바꾸고,
              <br />
              처리의 책임을
              <br />
              <span>나눴습니다.</span>
            </h2>
            <p>
              PHP 7.3 레거시를 PHP 8.3·DDD로 재구성하고, 파일 검사·미디어
              처리·DB 반영을 SQS로 연결했습니다.
            </p>
            <div className="engineering-role">
              <Code2 size={19} />
              <div>
                <span>직접 담당</span>
                <strong>{upload.role}</strong>
              </div>
            </div>
            <Link className="engineering-link" href={projectHref(upload.id)}>
              구현 판단과 검증 사례 읽기 <ArrowUpRight size={19} />
            </Link>
          </div>
          <div className="engineering-flow">
            <div className="engineering-flow-heading">
              <span>UPLOAD PROCESS</span>
              <span>검사 → 처리 → 반영</span>
            </div>
            <ol>
              {[
                {
                  actor: "컨버터 서버",
                  title: "파일 수신·저장·검사",
                  icon: ShieldCheck,
                },
                {
                  actor: "업로드 서버",
                  title: "Vimeo 연동·이미지 후처리",
                  icon: Layers,
                },
                {
                  actor: "API 서버",
                  title: "크론 메시지 소비·DB 반영",
                  icon: Database,
                },
              ].map(({ actor, title, icon: Icon }, index) => (
                <li key={actor}>
                  <span className="engineering-step">0{index + 1}</span>
                  <Icon size={23} strokeWidth={1.5} />
                  <div>
                    <span>{actor}</span>
                    <strong>{title}</strong>
                  </div>
                  {index < 2 && (
                    <span className="engineering-queue">
                      <ArrowDown size={15} />
                      SQS {index === 0 ? "작업 전달" : "완료 알림"}
                    </span>
                  )}
                </li>
              ))}
            </ol>
            <div className="engineering-result">
              <ShieldCheck size={17} />
              <span>업로드 서버의 DB 직접 접근 제거</span>
            </div>
            <p className="engineering-scope">
              인프라·보안팀과 협업했습니다. 서버·AWS·rsync 구축은 전담팀, PHP
              처리 코드와 서비스 연동은 본인 담당입니다.
            </p>
          </div>
        </div>
      </section>

      <section className="editorial-progress" aria-labelledby="progress-title">
        <div>
          <span className="eyebrow">CURRENTLY BUILDING</span>
          <h2 id="progress-title">지금도, 경험을 넓히는 중입니다.</h2>
        </div>
        <Link href={projectHref(inProgress.id)} className="progress-project">
          <span className="progress-project-icon">
            <Workflow size={25} strokeWidth={1.5} />
          </span>
          <div>
            <span className="progress-project-status">
              <i />
              진행 중
            </span>
            <h3>{inProgress.name}</h3>
            <p>{inProgress.subtitle}</p>
            <span className="progress-project-stack">
              NestJS · Python · FastAPI · LLM
            </span>
          </div>
          <ArrowUpRight size={24} />
        </Link>
      </section>

      <section className="editorial-career" aria-labelledby="career-title">
        <div className="editorial-section-heading">
          <div>
            <span className="eyebrow">03 / EXPERIENCE</span>
            <h2 id="career-title">
              설계와 구현,
              <br />
              <span>그다음의 개선까지.</span>
            </h2>
          </div>
          <Link className="text-link" href="/about/">
            소개 · 경력 <ArrowUpRight size={16} />
          </Link>
        </div>
        <div className="editorial-career-grid">
          {careers.map((career, index) => (
            <article key={career.company}>
              <div className="career-row-top">
                <span>{career.period}</span>
                <span>0{index + 1}</span>
              </div>
              <h3>{career.company}</h3>
              <span className="career-row-role">{career.role}</span>
              <p>{career.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="contact-panel editorial-contact">
        <div>
          <span className="eyebrow">NEXT, LET’S BUILD.</span>
          <h2>
            다음 문제를,
            <br />
            <span>함께 풀어볼까요?</span>
          </h2>
          <p>프로젝트와 채용에 관한 이야기를 기다립니다.</p>
          <a className="contact-email" href={`mailto:${profile.email}`}>
            {profile.email} <ArrowUpRight size={19} />
          </a>
        </div>
        <ContactActions />
      </section>
    </div>
  );
}
