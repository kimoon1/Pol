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
    focus: "대화 이력·응답 속도·부서별 권한을 함께 다룬 ERP 챗봇",
    responsibilities: [
      {
        title: "프론트엔드 · 스트리밍 채팅과 응답 상태 안내",
        description:
          "ERP에서 조직과 정책에 대한 질문을 입력하고 조회하는 챗봇 화면을 Next.js로 개발했습니다. 응답의 첫 글자가 도착할 때까지 로딩 인디케이터를 표시하고, 이후 채팅을 스트리밍으로 출력했습니다. 조회 실패 시에도 채팅창 안에서 대화형 안내를 제공하도록 구현했습니다.",
      },
      {
        title: "채팅 처리 · 메시지 저장과 SSE 응답 연결",
        description:
          "메시지를 DB에 저장하고 도구 관련 내용을 기록하는 처리와, LangGraph 노드·툴의 응답을 SSE로 연결해 수신하는 흐름을 직접 구현했습니다.",
      },
      {
        title: "백엔드 · 조회 흐름 분리와 응답 속도 개선",
        description:
          "하나의 LLM이 전체 흐름을 판단하던 LangChain 에이전트를 Python·LangGraph의 슈퍼바이저와 기능별 노드로 전환했습니다. 초기 분류 단계에서 공개 정보와 부서별 민감 정보의 조회 흐름을 나눠 응답 속도를 개선했습니다.",
      },
      {
        title: "권한 · 사용자 정보 전달과 조회 코드의 접근 검사",
        description:
          "프론트엔드 요청에 포함된 사용자 식별자(user_pk)로 부서·직책을 조회하는 툴을 구현했습니다. 슈퍼바이저가 해당 정보를 각 에이전트에 전달하고, 조회 툴·API 코드에서 권한을 검사해 허용되지 않은 요청을 차단하도록 구현했습니다.",
      },
      {
        title: "기획 협업 · 대화 컨텍스트와 부서별 권한 기준",
        description:
          "기획자와 여러 차례 R&D를 진행해 최근 대화의 컨텍스트 범위와 과거 조회에 대한 재확인 기준을 정했습니다. 해당 범위를 벗어난 과거 조회를 참조하는 요청에는 확인 질문을 하도록 구현하고, 부서별 요구사항과 세분화된 권한 조건을 정리했습니다.",
      },
    ],
    decisions: [
      {
        title: "초기 분류로 공개 정보와 부서별 민감 정보의 조회 흐름 분리",
        description:
          "기존 LangChain 에이전트에서는 하나의 LLM이 전체 흐름을 판단해, 권한 검사와 조회 기능이 늘어날수록 응답 속도를 개선하기 어려웠습니다. LangGraph 슈퍼바이저 구성에서는 먼저 질문을 가볍게 분류하고, 단순 공개 정보 조회인지 부서별 민감 정보 조회인지에 따라 처리 흐름을 나눴습니다. 기능별 노드로 책임을 나누고 노드별 조회를 병행하도록 설계했습니다.",
      },
      {
        title: "최근 대화로 컨텍스트 범위를 정하고 과거 조회는 재확인",
        description:
          "특정 기간의 데이터를 조회한 뒤 다른 작업의 대화를 이어 가다가, 초기 조회 결과를 정리해 알림으로 등록하거나 Slack에 추가해 달라는 요청을 처리해야 했습니다. 기획자와 R&D를 거쳐 컨텍스트에 포함할 최근 대화 범위를 정하고, 그 범위를 벗어난 과거 조회를 참조하면 사용자에게 확인 질문을 하도록 구현했습니다.",
      },
      {
        title: "부서별 권한 조건을 조회 툴·API 코드에서 검사",
        description:
          "인사·회계·일반 부서·개발·기획 등 부서별 요구사항과 권한 조건을 기획자와 정리했습니다. 슈퍼바이저가 요청자의 부서·직책을 조회해 각 에이전트에 전달하고, 실제 데이터 조회를 담당하는 툴·API 코드에서 권한을 검사해 허용되지 않은 요청을 차단하도록 구성했습니다.",
      },
    ],
    scope:
      "조직·정책 조회 기능을 연결한 챗봇으로, 벡터 검색은 사용하지 않았습니다. 별도 업무 기능으로 업무 규칙 기반 Slack 알림도 개발했습니다.",
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
    focus: "React 초기 코드 구조 설계와 신규 화면·PHP API 연동",
    responsibilities: [
      {
        title: "React 초기 코드 구조 설계",
        description:
          "React 프론트엔드의 초기 코드 구조를 설계하고 개발 기반을 마련했습니다.",
      },
      {
        title: "React 신규 화면 개발",
        description:
          "React 기반 신규 화면의 기능을 구현했습니다.",
      },
      {
        title: "PHP API와 연결하는 React 통신 로직",
        description:
          "PHP 백엔드를 유지하고, 프론트엔드 기능과 기존 API에 연결하는 통신 로직을 React로 구현했습니다.",
      },
    ],
    decisions: [
      {
        title: "팀 역할 분리에 맞춘 코드 책임 구분",
        description:
          "PHP 개발팀을 PHP 백엔드와 React 프론트엔드로 나누는 방향에 맞춰 React 초기 코드 구조를 설계했습니다. 프론트엔드와 백엔드 코드의 책임을 구분하고 개발 속도를 개선하는 것이 목적이었습니다.",
      },
      {
        title: "기존 PHP 백엔드와 연결하는 React 신규 개발",
        description:
          "기존 PHP 백엔드를 유지한 상태에서 React 신규 화면과 API 통신 로직을 구현했습니다. 프론트엔드의 초기 기반과 화면 개발을 함께 담당한 사례입니다.",
      },
    ],
    related: ["commerce", "legacy-bom"],
  },
  commerce: {
    focus: "여러 고객사의 쇼핑몰 개발과 국내·해외 결제 연동",
    responsibilities: [
      {
        title: "고객용 화면부터 관리자까지 전체 개발",
        description:
          "골프웨어·건강기능식품 등 일반 소비자 대상 쇼핑몰을 여러 고객사에 맞춰 개발했습니다. 별도 기획자와 협업하며 고객용 React 화면과 관리자 기능, Node.js·Express API와 MySQL DB를 포함한 전체 개발을 맡았습니다. 초기 쇼핑몰은 PHP로 개발했습니다.",
      },
      {
        title: "기본 코드 재사용과 고객사별 수정",
        description:
          "관리자·로그인·회원가입의 기본 코드를 재사용했습니다. 로그인·회원가입의 디자인, 상품 옵션·카테고리·할인 프로모션을 고객사마다 다르게 구현하고, 주문·배송·결제는 처리 방식을 유지하면서 디자인을 수정했습니다.",
      },
      {
        title: "인증·본인확인",
        description:
          "구글·카카오·페이스북 OAuth와 포트원·나이스 본인인증을 도입했습니다.",
      },
      {
        title: "국내·해외 결제와 오류 대응",
        description:
          "국내 결제는 포트원, 해외 결제는 PayPal로 연동하고 결제 처리에 트랜잭션을 적용했습니다. 승인 전 실패한 요청을 정리하고, 승인 후 주문 처리에 실패하면 결제 서비스의 취소 API를 호출했습니다. 실패 시 모달로 안내하고 결제 전 페이지로 이동하도록 구현했습니다.",
      },
      {
        title: "Linux 서버 세팅·Nginx 배포·도메인 설정",
        description:
          "외부 클라우드의 Linux 서버를 직접 세팅하고 Nginx 기반으로 쇼핑몰을 배포했습니다. 가비아를 통한 도메인 설정까지 맡아 고객사에 배포 환경을 제공했습니다.",
      },
    ],
    decisions: [
      {
        title: "기본 코드 재사용과 고객사별 판매 기능 구현",
        description:
          "관리자·로그인·회원가입은 기본 코드를 활용하고, 로그인·회원가입 디자인과 상품 옵션·카테고리·할인 프로모션은 고객사별로 수정했습니다. 주문·배송·결제는 처리 방식을 유지하면서 고객사에 맞춰 디자인을 변경했습니다.",
      },
      {
        title: "React 화면과 외부 인증 서비스 연결",
        description:
          "구글·카카오·페이스북 OAuth와 포트원·나이스 본인인증을 React 화면에 연결했습니다. 로그인과 본인확인이 구매 흐름 안에서 이어지도록 구성했습니다.",
      },
      {
        title: "국내 포트원·해외 PayPal 결제 연동",
        description:
          "국내 결제에는 포트원을, 해외 결제에는 PayPal을 연동했습니다. 결제 처리에 트랜잭션을 적용하고, 승인 전 실패와 승인 후 주문 처리 실패를 나눠 대응했습니다.",
      },
      {
        title: "결제 승인 후 주문 처리 실패에 취소 API로 대응",
        description:
          "승인 전 실패한 요청을 정리하는 처리와 별도로, 결제가 승인된 뒤 주문 처리에 실패하면 결제 서비스의 취소 API를 호출했습니다. 실패 시 고객에게 모달로 안내한 뒤 결제 전 페이지로 이동하도록 구현했습니다.",
      },
    ],
    verification: {
      title: "결제 실패 상황별 처리",
      summary:
        "승인 전 실패와 승인 후 주문 처리 실패에 각각 대응하고, 고객에게 모달로 안내한 뒤 결제 전 페이지로 복귀하도록 구현했습니다.",
      cases: [
        {
          scenario: "결제 승인 전 실패",
          result:
            "실패한 요청을 정리하고, 모달 안내 후 결제 전 페이지로 이동합니다.",
        },
        {
          scenario: "결제 승인 후 주문 처리 실패",
          result:
            "결제 서비스의 취소 API를 호출합니다. 모달로 안내한 뒤 결제 전 페이지로 이동합니다.",
        },
      ],
    },
    scope:
      "SEO 메타 태그 정비와 페이지 로딩 성능 개선도 담당했습니다. HelfU 링크는 현재 운영 사이트이며, 위 내용은 당시 담당한 개발 범위입니다.",
    related: ["helfu", "legacy-bom"],
  },
};
