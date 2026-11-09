import { ArrowDown } from "lucide-react";

const stages = [
  {
    actor: "컨버터 서버",
    title: "파일 수신 · Private S3 저장 · 검사",
    description: "검사를 통과한 파일과 업로드 정보를 후속 처리로 전달합니다.",
    type: "SERVER",
  },
  {
    actor: "SQS 작업 메시지",
    title: "검사 통과 작업 전달",
    description: "업로드 서버가 처리할 작업을 메시지로 연결합니다.",
    type: "MESSAGE",
  },
  {
    actor: "업로드 서버",
    title: "영상 Vimeo 연동 · 이미지 변환 · 썸네일 생성",
    description:
      "미디어 후처리를 수행하고 처리 완료 정보를 등록합니다. DB에는 직접 접근하지 않습니다.",
    type: "SERVER",
  },
  {
    actor: "SQS 완료 메시지",
    title: "미디어 처리 완료 알림",
    description: "후처리가 완료된 업로드 파일 정보를 API 서버에 전달합니다.",
    type: "MESSAGE",
  },
  {
    actor: "API 서버",
    title: "크론으로 메시지 소비 · 완료 파일 정보 DB 반영",
    description: "완료 메시지를 조회해 업로드 결과를 DB에 반영합니다.",
    type: "SERVER",
  },
];

export default function UploadArchitecture() {
  return (
    <figure className="case-diagram panel upload-architecture">
      <figcaption>
        업로드 처리 흐름<span>검사 → 미디어 처리 → DB 반영</span>
      </figcaption>
      <div className="comparison-grid upload-comparison">
        <div>
          <span className="eyebrow">BEFORE</span>
          <h3>PHP 7.3 · 단일 업로드 서버</h3>
          <p>레거시 코드 · DB 큐 기반 처리</p>
        </div>
        <div>
          <span className="eyebrow">AFTER</span>
          <h3>PHP 8.3 · DDD · 역할 분리</h3>
          <p>SQS 메시지 연동 · 업로드 서버의 DB 접근 제거</p>
        </div>
      </div>
      <ol
        className="upload-pipeline"
        aria-label="역할 분리 후 업로드 처리 순서"
      >
        {stages.map((stage, index) => (
          <li
            className={stage.type === "MESSAGE" ? "pipeline-message" : ""}
            key={stage.actor}
          >
            <span className="pipeline-number">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div className="pipeline-content">
              <span className="pipeline-actor">{stage.actor}</span>
              <h3>{stage.title}</h3>
              <p>{stage.description}</p>
            </div>
            <span className="pipeline-type">{stage.type}</span>
            {index < stages.length - 1 && (
              <ArrowDown
                className="pipeline-arrow"
                size={17}
                aria-hidden="true"
              />
            )}
          </li>
        ))}
      </ol>
      <p className="pipeline-caption">
        SQS는 작업 전달과 완료 알림의 메시지 용도로 구분해 표시했습니다.
      </p>
    </figure>
  );
}
