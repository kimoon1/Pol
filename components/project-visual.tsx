import {
  ArrowDown,
  ArrowRight,
  Code2,
  Database,
  Layers,
  MessageSquare,
  ShieldCheck,
  Smartphone,
  Workflow,
  CreditCard,
  UserRound,
  Check,
} from "lucide-react";
import type { Project } from "@/lib/portfolio";

function ChatConcept() {
  return (
    <div className="concept-chat">
      <div className="concept-window-bar">
        <span />
        <span />
        <span />
        <b>ERP / WORKSPACE</b>
      </div>
      <div className="concept-chat-body">
        <div className="concept-question">
          <MessageSquare size={18} />
          <span>조직·정책에 대한 질문</span>
        </div>
        <div className="concept-permission">
          <ShieldCheck size={17} />
          <span>기능 사용 권한 확인</span>
          <Check size={15} />
        </div>
        <div className="concept-answer">
          <span className="concept-star">✳</span>
          <div>
            <strong>조직·정책 조회</strong>
            <i />
            <i />
          </div>
        </div>
      </div>
    </div>
  );
}

function MigrationConcept() {
  return (
    <div className="concept-migration">
      <div className="migration-origin">
        <Code2 size={26} strokeWidth={1.4} />
        <strong>PHP</strong>
        <span>운영 중인 기능</span>
      </div>
      <ArrowRight className="migration-arrow" size={28} strokeWidth={1.2} />
      <div className="migration-targets">
        <div>
          <Code2 size={20} />
          <strong>React</strong>
          <span>UI</span>
        </div>
        <div>
          <Database size={20} />
          <strong>Node.js</strong>
          <span>API</span>
        </div>
      </div>
      <span className="migration-check">
        <Check size={14} />
        기존 기능 검증 · 단계적 전환
      </span>
    </div>
  );
}

function CommerceConcept() {
  return (
    <div className="concept-commerce">
      <div className="commerce-heading">
        <span>USER JOURNEY</span>
        <ArrowUpRightMark />
      </div>
      <div className="commerce-stages">
        {[
          { icon: UserRound, title: "소셜 로그인", step: "01" },
          { icon: ShieldCheck, title: "본인인증", step: "02" },
          { icon: CreditCard, title: "PG 결제", step: "03" },
        ].map(({ icon: Icon, title, step }) => (
          <div key={step}>
            <span>{step}</span>
            <Icon size={25} strokeWidth={1.4} />
            <strong>{title}</strong>
          </div>
        ))}
      </div>
      <div className="commerce-track">
        <i />
        <i />
        <i />
      </div>
      <p>인증에서 결제까지 이어지는 흐름</p>
    </div>
  );
}

function ArrowUpRightMark() {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path d="M6 18L18 6M6 6H18V18" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  );
}

export default function ProjectVisual({
  project,
  large = false,
}: {
  project: Project;
  large?: boolean;
}) {
  const specialized = ["erp-ai", "legacy-snap", "commerce"].includes(
    project.id,
  );
  const Icon =
    project.kind === "mobile"
      ? Smartphone
      : project.kind === "system"
        ? Database
        : project.kind === "commerce"
          ? Layers
          : Workflow;
  return (
    <div
      className={`project-visual narrative-visual ${specialized ? `narrative-${project.id}` : "narrative-flow"} ${large ? "visual-large" : ""}`}
      aria-hidden="true"
    >
      <div className="narrative-label">
        <span>
          {project.id === "erp-ai"
            ? "CONVERSATION & PERMISSION"
            : project.id === "legacy-snap"
              ? "INCREMENTAL MIGRATION"
              : project.id === "commerce"
                ? "COMMERCE INTEGRATION"
                : "CONNECTED EXPERIENCE"}
        </span>
        <span>{project.number}</span>
      </div>
      {project.id === "erp-ai" ? (
        <ChatConcept />
      ) : project.id === "legacy-snap" ? (
        <MigrationConcept />
      ) : project.id === "commerce" ? (
        <CommerceConcept />
      ) : (
        <div className="contribution-map">
          <div className="contribution-map-header">
            <span>
              <Icon size={17} />
              담당 흐름
            </span>
          </div>
          <ol className="contribution-flow">
            {project.visualSteps.map((step, i) => (
              <li key={step}>
                <span>0{i + 1}</span>
                <strong>{step}</strong>
                {i < project.visualSteps.length - 1 && <ArrowDown size={12} />}
              </li>
            ))}
          </ol>
        </div>
      )}
      <span className="narrative-caption">
        {project.status === "in-progress"
          ? "개발 주제 · 진행 중"
          : "구성 개념도"}
      </span>
    </div>
  );
}
