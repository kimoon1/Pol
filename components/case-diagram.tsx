import {
  ArrowRight,
  ShieldCheck,
  Workflow,
  Code2,
  Database,
} from "lucide-react";

export default function CaseDiagram({ id }: { id: string }) {
  if (id === "erp-ai")
    return (
      <figure className="case-diagram panel">
        <figcaption>
          구현 범위 요약<span>화면 · 챗봇 · 업무 정보</span>
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
            <strong>Python · LangGraph</strong>
            <span>권한 검사 툴 · user_pk</span>
          </div>
          <ArrowRight className="diagram-arrow" aria-hidden="true" />
          <div>
            <Database aria-hidden="true" />
            <strong>노드별 조회</strong>
            <span>사내 조직 · 정책 · 병행 설계</span>
          </div>
        </div>
        <p className="diagram-boundary">
          <ShieldCheck size={18} aria-hidden="true" />
          LangGraph 내 권한 검사 · 노드별 조회 병행 설계 · 벡터 검색 미사용
        </p>
      </figure>
    );
  if (id === "upload-server")
    return (
      <figure className="case-diagram panel">
        <figcaption>
          구조 변경 요약<span>보안 · 책임 분리 · 리소스 분산</span>
        </figcaption>
        <div className="comparison-grid">
          <div>
            <span className="eyebrow">BEFORE</span>
            <h3>단일 업로드 서버</h3>
            <p>보안과 리소스 문제가 한 서버에 집중</p>
          </div>
          <div>
            <span className="eyebrow">AFTER</span>
            <h3>검증 · 퍼블릭 서버 분리</h3>
            <p>검증과 공개 제공의 책임 분리</p>
            <p>rsync 기반 이중화 · SQS 큐 추가</p>
          </div>
        </div>
      </figure>
    );
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
