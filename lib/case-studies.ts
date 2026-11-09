export type CaseStudy = {
  focus: string;
  responsibilities: { title: string; description: string }[];
  decisions: { title: string; description: string }[];
  scope?: string;
  related: string[];
  diagramPlacement?: "overview" | "implementation";
  codeExample?: {
    title: string;
    summary: string;
    parts: { name: string; detail: string }[];
  };
  verification?: {
    title: string;
    summary: string;
    cases: { scenario: string; result: string }[];
  };
};

/** Only supplied project facts belong here. Evidence requests live in docs/content-checklist.md. */
export const caseStudies: Record<string, CaseStudy> = {
  "erp-ai": {
    focus: "질문하는 화면부터 권한을 반영하는 조회 기능까지",
    responsibilities: [
      {
        title: "프론트엔드 · ERP 챗봇 화면",
        description:
          "ERP에서 조직과 정책에 대한 질문을 입력하고 조회하는 챗봇 화면을 Next.js로 개발했습니다.",
      },
      {
        title: "백엔드 · 조회 기능 연결",
        description:
          "Python·LangGraph 구현을 맡아 조직·정책 조회 기능과 슈퍼바이저 형태의 노드를 구성했습니다.",
      },
      {
        title: "권한 · 노드 기능 사용 검사",
        description:
          "사용자가 LangGraph의 각 노드 기능을 사용할 때 해당 기능에 대한 권한을 검사하도록 구현했습니다.",
      },
    ],
    decisions: [
      {
        title: "조회 기능을 노드 단위로 구성",
        description:
          "조직·정책 조회 기능을 슈퍼바이저 형태의 LangGraph 노드로 구성했습니다. 노드별 조회를 병행하도록 설계해 업무 조회를 연결했습니다.",
      },
      {
        title: "권한 검사 위치를 기능 사용 지점에 반영",
        description:
          "사용자가 각 노드의 기능을 사용할 때 해당 권한을 검사하도록 구현했습니다. 노드별 조회 기능에 사용자마다 허용된 범위를 반영하는 구성입니다.",
      },
      {
        title: "벡터 검색 미사용",
        description:
          "이 사례는 Python·LangGraph로 조직·정책 조회 기능을 연결한 챗봇입니다. 벡터 검색 기반의 문서 검색 기능은 사용하지 않았습니다.",
      },
    ],
    scope:
      "별도 업무 기능으로 업무 규칙 기반 Slack 알림도 개발했습니다.",
    related: ["legacy-snap", "commerce"],
  },
  "upload-server": {
    focus: "PHP 8.3·DDD 리팩토링과 메시지 기반 업로드 처리",
    diagramPlacement: "implementation",
    responsibilities: [
      {
        title: "레거시 코드 재구성",
        description:
          "PHP 7.3 → 8.3 전환과 DDD 기반 리팩토링을 포함해 업로드 애플리케이션 코드 전반을 담당했습니다.",
      },
      {
        title: "파일 검사와 미디어 후처리",
        description:
          "컨버터의 파일 수신·저장·검사 코드와 업로드 서버의 Vimeo 연동·이미지 크기별 변환·썸네일 생성을 구현했습니다.",
      },
      {
        title: "SQS 연동과 API 서버의 완료 반영",
        description:
          "작업·완료 메시지의 SQS 연동과 API 서버의 크론 기반 메시지 소비·업로드 파일 DB 반영을 구현했습니다.",
      },
    ],
    decisions: [
      {
        title: "검사와 후처리의 책임 구분",
        description:
          "검사를 담당하는 컨버터와 미디어를 처리하는 업로드 서버를 나누고, 검사 통과 작업을 후속 단계로 넘기도록 구성했습니다.",
      },
      {
        title: "DB 반영 책임을 API 서버에 집중",
        description:
          "기존 DB 큐 의존을 SQS 메시지로 전환해 업로드 서버의 DB 직접 접근을 제거했습니다. 미디어 후처리와 업로드 결과 저장의 책임을 분리한 결정입니다.",
      },
    ],
    codeExample: {
      title: "DDD 적용 사례: 통신 규칙과 처리 코드 구분",
      summary:
        "DTO로 통신 규칙을 정의하고 Repository와 Service 코드를 분리했습니다. 외부 연동은 Service 코드에서 호출하는 형태로 구성했습니다.",
      parts: [
        { name: "DTO", detail: "전달하는 데이터의 통신 규칙을 정의합니다." },
        {
          name: "Repository · Service",
          detail: "Repository 코드와 Service 코드를 분리해 관리합니다.",
        },
        {
          name: "외부 연동 호출",
          detail: "Service 코드에서 외부 연동을 호출합니다.",
        },
      ],
    },
    verification: {
      title: "파일 검사와 큐 등록의 분기 확인",
      summary:
        "확장자를 먼저 검사하고, 통과한 파일에 용량·해시 등 파일 검사를 진행했습니다. 두 단계 모두 통과한 경우에만 후속 작업을 큐에 등록했습니다.",
      cases: [
        {
          scenario: "허용하지 않는 파일 확장자",
          result:
            "업로드를 거부하고 프론트 알림을 표시합니다. 큐에 등록하지 않습니다.",
        },
        {
          scenario: "확장자는 통과했지만 용량·해시 등 파일 검사에서 거부",
          result:
            "업로드를 거부하고 프론트 알림을 표시합니다. 큐에 등록하지 않습니다.",
        },
        {
          scenario: "확장자와 후속 파일 검사 모두 통과",
          result: "후속 처리를 위한 작업을 큐에 등록합니다.",
        },
      ],
    },
    scope:
      "서비스 간 바이너리 전송을 줄인 S3 파일 전달 구조 개선은 별도 프로젝트로 소개합니다.",
    related: ["s3-transfer", "legacy-snap"],
  },
  "ai-ad-generator": {
    focus: "생성·등록·운영·분석을 다루는 광고 AI 프로젝트",
    responsibilities: [
      {
        title: "외부 API로 소재 생성",
        description:
          "외부 API를 통해 광고 이미지와 영상을 생성하는 기능을 개발하고 있습니다.",
      },
      {
        title: "광고매체 등록",
        description:
          "광고매체 사이트에 광고를 등록하는 기능을 개발하고 있습니다.",
      },
      {
        title: "광고 운영 대시보드",
        description: "광고 운영 정보를 살펴보는 대시보드를 개발하고 있습니다.",
      },
      {
        title: "LLM 성과 분석",
        description:
          "LLM을 활용해 광고 성과를 분석하는 기능을 개발하고 있습니다.",
      },
    ],
    decisions: [],
    scope:
      "NestJS와 Python·FastAPI를 사용한 업무 프로젝트입니다. 외부 API 생성, 광고매체 등록, 대시보드와 LLM 성과 분석을 개발 중이며 기능별 완료 범위와 운영 결과는 진행 상황에 맞춰 업데이트합니다.",
    related: ["erp-ai", "commerce"],
  },
  "legacy-snap": {
    focus: "결제·쇼핑몰·게시판을 운영하며 바꾼 화면과 API",
    responsibilities: [
      {
        title: "React UI 전환",
        description:
          "PHP 레거시의 결제·쇼핑몰·게시판 기능을 React 화면으로 전환했습니다.",
      },
      {
        title: "기존 기능 검증",
        description:
          "서비스 운영을 유지하면서 기존 기능을 검증하고 기능 단위로 전환했습니다.",
      },
      {
        title: "Node.js API 연결",
        description:
          "화면 전환과 함께 Node.js API 기반으로 기능을 재구성했습니다.",
      },
    ],
    decisions: [
      {
        title: "운영을 이어가는 기능 단위 전환",
        description:
          "운영을 이어 가면서 기존 기능을 검증할 수 있도록 기능 단위로 구조 전환을 진행했습니다.",
      },
    ],
    related: ["commerce", "legacy-bom"],
  },
  commerce: {
    focus: "서로 다른 인증·결제 서비스를 하나의 구매 흐름으로",
    responsibilities: [
      {
        title: "화면 구조와 핵심 UI",
        description:
          "팀장 및 주요 개발자로 쇼핑몰의 React 화면 구조를 설계하고 핵심 UI를 구현했습니다.",
      },
      {
        title: "인증·본인확인",
        description:
          "구글·카카오·페이스북 OAuth와 포트원·나이스 본인인증을 도입했습니다.",
      },
      {
        title: "결제와 오류 대응",
        description: "PG 결제를 연동하고 결제 오류 대응 로직을 구현했습니다.",
      },
    ],
    decisions: [
      {
        title: "React 화면과 외부 인증 서비스 연결",
        description:
          "구글·카카오·페이스북 OAuth와 포트원·나이스 본인인증을 React 화면에 연결했습니다. 로그인과 본인확인이 구매 흐름 안에서 이어지도록 구성했습니다.",
      },
      {
        title: "결제 연동과 오류 대응을 함께 구현",
        description:
          "PG 결제 연동에 더해 결제 오류에 대응하는 로직을 구현했습니다. 외부 결제 서비스를 연결하는 범위와 오류 대응 로직을 모두 맡았습니다.",
      },
    ],
    scope:
      "이외에 SEO 메타 태그 정비와 페이지 로딩 성능 개선 작업을 담당했습니다.",
    related: ["legacy-snap", "education"],
  },
};
