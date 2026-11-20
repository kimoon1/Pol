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
            <span>조회 툴·API의 권한 검사</span>
          </div>
        </div>
        <p className="diagram-boundary">
          <ShieldCheck size={18} aria-hidden="true" />
          사용자 부서·직책 전달 · 조회 툴·API 코드에서 접근 차단 · 노드별 조회 병행 설계
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
            <strong>국내·해외 결제</strong>
            <span>국내 포트원 · 해외 PayPal</span>
          </div>
        </div>
        <p className="diagram-boundary">
          <Code2 size={18} aria-hidden="true" />
          고객용 화면·관리자 전체 개발 · 고객사별 수정 · 국내·해외 결제 연동
        </p>
      </figure>
    );
  if (id === "legacy-snap")
    return (
      <figure className="case-diagram panel">
        <figcaption>
          React 프론트엔드 초기 구축<span>초기 구조 · 신규 화면 · PHP API 연동</span>
        </figcaption>
        <div className="comparison-grid">
          <div>
            <span className="eyebrow">BEFORE</span>
            <h3>기존 PHP 백엔드</h3>
            <p>PHP 중심의 개발 환경</p>
          </div>
          <div>
            <span className="eyebrow">AFTER</span>
            <h3>React 초기 구조·신규 화면</h3>
            <p>기존 PHP API에 연결하는 통신 로직 구현</p>
          </div>
        </div>
        <p className="diagram-boundary">
          <ShieldCheck size={18} aria-hidden="true" />
          초기 코드 구조 설계 · 신규 화면 개발 · PHP API 연동
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
            <p>참고 지식을 활용한 이미지·영상 생성</p>
          </div>
          <div>
            <span className="eyebrow">02 / EDIT</span>
            <h3>이미지 편집</h3>
            <p>배경·상품·텍스트 레이어 분리</p>
          </div>
          <div>
            <span className="eyebrow">03 / PUBLISH</span>
            <h3>광고 게재</h3>
            <p>Meta 광고 게재와 목록 조회</p>
          </div>
          <div>
            <span className="eyebrow">04 / REVIEW</span>
            <h3>성과 확인</h3>
            <p>성과 목록과 항목별 세부 내역</p>
          </div>
        </div>
      </figure>
    );
  return null;
}
