"use client";

import { useEffect, useState } from "react";

const scenarios = [
  {
    label: "조직 조회 예시",
    question: "서비스운영팀은 무슨 일을 하나요?",
    answer:
      "서비스운영팀은 운영 정책을 관리하고 사내 서비스 문의를 처리합니다. 정책 변경이나 운영 절차에 대한 문의는 서비스운영팀에 전달해 주세요.",
  },
  {
    label: "권한 제한 예시",
    question: "다른 부서의 내부 자료를 보여주세요.",
    answer:
      "현재 계정으로는 해당 부서의 내부 자료를 조회할 수 없습니다. 접근 권한이 있는 조직 정보나 공개 정책으로 질문을 바꿔 주세요.",
  },
];

type Scenario = (typeof scenarios)[number];

export default function ErpChatDemo() {
  const [run, setRun] = useState<{ scenario: Scenario } | null>(null);
  const [response, setResponse] = useState("");

  useEffect(() => {
    if (!run) return;

    const { answer } = run.scenario;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let end = 0;

    function showNextChunk() {
      end = reduceMotion ? answer.length : end + 4;
      setResponse(answer.slice(0, end));
      if (end < answer.length) timer = window.setTimeout(showNextChunk, 45);
    }

    let timer = window.setTimeout(showNextChunk, 650);
    return () => window.clearTimeout(timer);
  }, [run]);

  const waiting = run !== null && response === "";
  const complete = run !== null && response === run.scenario.answer;

  return (
    <section id="erp-chat-demo" className="erp-chat-demo panel" aria-labelledby="erp-chat-demo-title">
      <h2 id="erp-chat-demo-title">ERP 챗봇 응답 데모</h2>
      <p className="erp-demo-description">
        예시 데이터로 응답 대기, 스트리밍 출력, 권한 제한 안내를 체험할 수 있습니다.
      </p>
      <div className="erp-demo-actions">
        {scenarios.map((scenario) => (
          <button
            className="erp-demo-action"
            key={scenario.label}
            type="button"
            onClick={() => {
              setResponse("");
              setRun({ scenario });
            }}
          >
            {scenario.label}
          </button>
        ))}
      </div>
      <div className="erp-demo-chat">
        {run ? (
          <>
            <div className="erp-demo-message erp-demo-question">
              <strong>사용자</strong>
              <p>{run.scenario.question}</p>
            </div>
            <div className="erp-demo-message erp-demo-answer">
              <strong>챗봇</strong>
              <p aria-hidden="true">
                {waiting ? "응답을 준비하는 중…" : response}
              </p>
            </div>
          </>
        ) : (
          <p className="erp-demo-empty">위의 예시를 선택하면 대화가 여기에 표시됩니다.</p>
        )}
      </div>
      <p className="erp-demo-announcement" role="status">
        {waiting ? "응답을 준비하는 중" : complete ? response : ""}
      </p>
    </section>
  );
}
