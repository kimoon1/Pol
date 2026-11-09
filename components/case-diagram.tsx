import {
  ArrowRight,
  ShieldCheck,
  Workflow,
  Code2,
  Database,
} from "lucide-react";
import UploadArchitecture from "./upload-architecture";

export default function CaseDiagram({ id }: { id: string }) {
  if (id === "erp-ai")
    return (
      <figure className="case-diagram panel">
        <figcaption>
          담당한 조회 흐름<span>화면 · 챗봇 · 업무 정보</span>
        </figcaption>
        <div className="diagram-flow">
          <div>
            <Code2 aria-hidden="true" />
            <strong>ERP 챗봇 화면</strong>
            <span>조직·정책에 대한 질문</span>
          </div>
          <ArrowRight className="diagram-arrow" aria-hidden="true" />
          <div>
            <Workflow aria-hidden="true" />
            <strong>슈퍼바이저 구성</strong>
            <span>Python · LangGraph</span>
          </div>
          <ArrowRight className="diagram-arrow" aria-hidden="true" />
          <div>
            <Database aria-hidden="true" />
            <strong>노드별 기능</strong>
            <span>조직·정책 조회 · 권한 검사</span>
          </div>
        </div>
        <p className="diagram-boundary">
          <ShieldCheck size={18} aria-hidden="true" />
          노드 기능 사용 시 사용자별 권한 검사 · 노드별 조회 병행 설계
        </p>
      </figure>
    );
  if (id === "commerce")
    return (
      <figure className="case-diagram panel">
        <figcaption>
          담당한 구매 흐름<span>React 화면 · 인증 · 결제 연동</span>
        </figcaption>
        <div className="diagram-flow">
          <div>
            <Code2 aria-hidden="true" />
            <strong>소셜 로그인</strong>
            <span>구글 · 카카오 · 페이스북 OAuth</span>
          </div>
          <ArrowRight className="diagram-arrow" aria-hidden="true" />
          <div>
            <ShieldCheck aria-hidden="true" />
            <strong>본인확인</strong>
            <span>포트원 · 나이스 연동</span>
          </div>
          <ArrowRight className="diagram-arrow" aria-hidden="true" />
          <div>
            <Workflow aria-hidden="true" />
            <strong>구매 · 결제</strong>
            <span>PG 결제 · 결제 오류 대응</span>
          </div>
        </div>
        <p className="diagram-boundary">
          <Code2 size={18} aria-hidden="true" />
          React 화면 구조와 핵심 UI 설계 · 외부 인증 및 결제 연동 구현
        </p>
      </figure>
    );
  if (id === "legacy-snap")
    return (
      <figure className="case-diagram panel">
        <figcaption>
          화면과 API의 전환 범위<span>운영 유지 · 기능 단위 전환</span>
        </figcaption>
        <div className="comparison-grid">
          <div>
            <span className="eyebrow">BEFORE</span>
            <h3>기존 PHP 기능</h3>
            <p>결제 · 쇼핑몰 · 게시판</p>
          </div>
          <div>
            <span className="eyebrow">AFTER</span>
            <h3>React UI + Node.js API</h3>
            <p>화면과 API 구조로 기능을 단계적으로 전환</p>
          </div>
        </div>
        <p className="diagram-boundary">
          <ShieldCheck size={18} aria-hidden="true" />
          기존 기능을 검증하면서 서비스 운영을 이어가는 전환 구현
        </p>
      </figure>
    );
  if (id === "upload-server") return <UploadArchitecture />;
  if (id === "ai-ad-generator")
    return (
      <figure className="case-diagram panel">
        <figcaption>
          개발 범위 요약<span>NestJS · Python · FastAPI / IN PROGRESS</span>
        </figcaption>
        <div className="comparison-grid">
          <div>
            <span className="eyebrow">01 / GENERATE</span>
            <h3>광고 소재 생성</h3>
            <p>외부 API를 통한 이미지·영상 생성</p>
          </div>
          <div>
            <span className="eyebrow">02 / REGISTER</span>
            <h3>광고매체 등록</h3>
            <p>광고매체 사이트에 광고 등록</p>
          </div>
          <div>
            <span className="eyebrow">03 / MONITOR</span>
            <h3>운영 대시보드</h3>
            <p>광고 운영 정보를 확인하는 화면</p>
          </div>
          <div>
            <span className="eyebrow">04 / ANALYZE</span>
            <h3>LLM 성과 분석</h3>
            <p>LLM을 활용한 광고 성과 분석</p>
          </div>
        </div>
      </figure>
    );
  return null;
}
