/** Professional content curated from the resume supplied on 2026-11-06.
 * The public email was supplied on 2026-11-10. Phone and original PDF stay private. */
export const profile = {
  name: "이기문",
  handle: "kimoon1",
  email: "eekimoon123@naver.com",
  github: "https://github.com/kimoon1",
  repository: "https://github.com/kimoon1/Pol",
  title: "Frontend Developer",
  experience: "4년",
  backendExperience: "1–2년",
  sourceDate: "2026.11",
  introduction:
    "React·Next.js·TypeScript로 업무에 필요한 화면을 만드는 프론트엔드 개발자 이기문입니다.",
  summary:
    "React·Next.js·TypeScript로 ERP 챗봇과 쇼핑몰의 사용자 흐름을 만들고, React 프론트엔드 초기 코드 구조를 설계했습니다. 백엔드 개발 경험을 바탕으로 화면과 API, 권한을 함께 고려합니다.",
};
export type Category = "Web" | "Platform" | "Mobile" | "Infrastructure";
export type Project = {
  id: string;
  number: string;
  name: string;
  subtitle: string;
  category: Category;
  description: string;
  stack: string[];
  features: string[];
  challenge: string;
  solution: string;
  period: string;
  company: string;
  role: string;
  result: string;
  kind: "workspace" | "commerce" | "system" | "mobile";
  visualSteps: string[];
  status?: "completed" | "in-progress";
  featured?: boolean;
  updatedAt?: string;
  environment?: string;
  collaboration?: string;
  link?: { label: string; href: string };
};
export const projects: Project[] = [
  {
    id: "erp-ai",
    number: "01",
    name: "권한 기반 ERP 챗봇",
    subtitle: "업무 질문을 조직·정책 조회로 연결하는 Next.js 화면",
    category: "Platform",
    description:
      "Next.js 기반 ERP 챗봇 화면과 Python·LangGraph 조회 기능을 함께 개발했습니다. 사용자 부서·직책을 조회해 에이전트에 전달하고, 조회 툴·API 코드에서 권한을 검사해 허용되지 않은 요청을 차단했습니다.",
    stack: ["Next.js", "Python", "FastAPI", "LangGraph"],
    features: [
      "ERP 챗봇 프론트엔드 개발",
      "응답 첫 글자 수신 전 로딩 인디케이터 표시·SSE 기반 스트리밍 채팅 출력",
      "메시지 DB 저장·도구 관련 내용 기록 직접 구현",
      "조회 실패 시 채팅창 안에서 대화형 안내 제공",
      "Python·LangGraph 기반 챗봇 구축",
      "사내 조직 및 정책 조회",
      "슈퍼바이저 형태의 LangGraph 노드 구성",
      "사용자 부서·직책 조회 툴과 에이전트별 사용자 정보 전달",
      "조회 툴·API 코드의 권한 검사와 접근 차단",
      "노드별 조회를 병행하도록 설계",
      "공개 정보·부서별 민감 정보 분류에 따른 조회 흐름 분리와 응답 속도 개선",
      "기획자와 R&D를 통한 최근 대화 컨텍스트 범위·과거 조회 재확인 정책 수립",
      "부서별 요구사항과 세분화된 권한 조건 정리",
      "업무 규칙 기반 Slack 알림 개발",
    ],
    challenge:
      "ERP 챗봇에서 데이터 조회 후 다른 작업의 대화를 이어 가다가 초기 조회 결과를 알림·Slack 등록에 활용하는 후속 요청이 들어왔습니다. 이때 컨텍스트에 포함할 대화 범위와 과거 조회 대상을 확인하는 기준이 필요했습니다. 하나의 LLM이 전체 흐름을 판단하던 LangChain 에이전트의 응답 속도 개선과 부서별 권한 조건 세분화도 과제였습니다.",
    solution:
      "기획자와 R&D를 거쳐 최근 대화 기준으로 컨텍스트 범위를 정하고, 해당 범위를 벗어난 과거 조회를 참조하는 요청에는 사용자에게 확인 질문을 하도록 구현했습니다. LangGraph 슈퍼바이저의 초기 분류로 공개 정보와 부서별 민감 정보의 조회 흐름을 나눴습니다. 사용자 식별자로 부서·직책을 조회해 각 에이전트에 전달하고, 조회 툴·API 코드에서 권한을 검사해 허용되지 않은 요청을 차단했습니다. 노드별 조회를 병행하도록 설계했습니다.",
    result:
      "회사 내부 전체 부서에서 사용한 ERP 챗봇입니다. 공개 정보와 부서별 민감 정보의 조회 흐름을 분리해 응답 속도를 개선했습니다. 최근 대화 범위를 벗어난 조회 결과를 참조하는 후속 요청에는 재확인 질문을 하도록 구현했습니다. 사용자 부서·직책 정보를 에이전트에 연결하고 조회 툴·API 코드에서 권한을 검사해 접근을 제한했습니다.",
    period: "2025.09 — 2025.12",
    company: "(주)스냅컴퍼니",
    role: "챗봇 프론트엔드 · Python·LangGraph 개발",
    environment: "회사 내부 전체 부서에서 사용한 ERP 챗봇",
    kind: "workspace",
    visualSteps: ["ERP 화면", "LangGraph", "조직·정책 조회"],
    featured: true,
    updatedAt: "2026-11-16",
  },
  {
    id: "s3-transfer",
    number: "02",
    name: "S3 파일 전달 구조 개선",
    subtitle: "서비스 사이의 바이너리 직접 전송을 줄이는 구조",
    category: "Infrastructure",
    description:
      "서비스 간 파일을 바이너리로 직접 전달하면서 발생하던 서버 부하와 통신 로직을 개선했습니다.",
    stack: ["NestJS", "FastAPI", "AWS S3"],
    features: [
      "전체 서비스 파일 전달 흐름 개선",
      "S3 업로드 서버를 경유하는 구조로 전환",
      "서비스 간 바이너리 직접 전송과 통신 로직 축소",
    ],
    challenge:
      "서비스 간 파일의 바이너리 직접 전달로 서버 부하와 통신 로직의 복잡성이 발생했습니다.",
    solution:
      "프론트에서 전체 서비스의 파일 전달 구조와 통신 로직 개선을 담당하고, S3 업로드 서버를 경유하도록 흐름을 변경했습니다.",
    result:
      "서비스 사이의 바이너리 직접 전송과 파일 전달 통신 로직을 줄이는 구조로 개선했습니다.",
    period: "2026.07",
    company: "(주)스냅컴퍼니",
    role: "풀스택 팀원 · 파일 전달 구조·통신 로직 개선",
    kind: "system",
    visualSteps: ["파일 전달", "S3 업로드 서버", "서비스 간 연동"],
  },
  {
    id: "upload-server",
    number: "03",
    name: "PHP 업로드 서버 리팩토링",
    subtitle: "PHP 8.3·DDD와 SQS로 검사·미디어 처리·DB 반영 분리",
    category: "Platform",
    description:
      "인프라팀·보안팀과 협업해 PHP 7.3 레거시를 PHP 8.3·DDD 기반으로 재구성하고, 검사·미디어 처리·DB 반영을 SQS로 연결하는 애플리케이션 코드를 담당했습니다.",
    stack: ["PHP 8.3", "DDD", "AWS SQS", "AWS S3", "Vimeo"],
    features: [
      "PHP 7.3 → 8.3 전환 및 DDD 기반 코드 재구성",
      "컨버터 서버의 파일 수신·Private S3 저장·검사 처리",
      "검사 통과 작업의 SQS 연동과 업로드 서버 처리",
      "영상 Vimeo 연동·이미지 크기별 변환·썸네일 생성",
      "미디어 처리 완료 메시지의 SQS 등록",
      "API 서버의 크론 기반 메시지 소비·완료 파일 DB 반영",
      "DB 큐를 SQS로 전환하고 업로드 서버의 DB 직접 접근 제거",
      "이미지·영상 업로드 실패 작업 3회 재시도와 즉시 프론트엔드 응답 구조",
    ],
    challenge:
      "PHP 7.3 레거시와 DB 큐에 의존하던 단일 업로드 서버를 개선해야 했습니다. 보안 요구에 맞춰 검사·미디어 후처리·DB 반영의 책임과 권한을 나누는 것이 핵심 과제였습니다.",
    solution:
      "컨버터 서버는 업로드 수신·Private S3 저장·검사를 담당하고, 검사 통과 작업을 SQS로 전달하도록 구현했습니다. 업로드 서버는 Vimeo·이미지 후처리를 수행한 뒤 완료 메시지를 SQS에 등록합니다. API 서버는 크론으로 완료 메시지를 소비해 파일 정보를 DB에 반영합니다. 이미지·영상 업로드 실패 작업은 3회 재시도하도록 처리하고, 실패한 시점에 프론트엔드로 즉시 응답할 수 있는 구조를 설계했습니다.",
    result:
      "업로드 서버의 DB 직접 접근을 제거하고, 검사·미디어 처리·DB 반영의 책임을 서버별로 분리했습니다. 업로드 코드는 PHP 8.3·DDD 기반으로 전환했습니다. 실패 작업은 3회 재시도하며, 실패 시 프론트엔드로 즉시 응답할 수 있도록 설계했습니다.",
    period: "2025.07 — 2025.12",
    company: "(주)스냅컴퍼니",
    role: "PHP 처리 코드 전반 · SQS 연동 · API 완료 반영",
    environment:
      "컨버터·업로드·API 서버를 분리하고, Private S3·SQS·Vimeo를 연동한 비동기 처리 환경",
    collaboration:
      "인프라팀·보안팀과 협업했습니다. 서버·AWS 리소스·rsync 환경 구축은 전담팀이 맡았으며, 저는 PHP 애플리케이션 코드 전반과 서비스 연동을 담당했습니다.",
    kind: "system",
    visualSteps: ["파일 검사", "미디어 처리", "DB 반영"],
    updatedAt: "2026-11-21",
  },
  {
    id: "legacy-snap",
    number: "04",
    name: "React 프론트엔드 초기 구축",
    subtitle: "초기 코드 구조 설계·신규 화면·PHP API 연동",
    category: "Web",
    description:
      "React 프론트엔드의 초기 코드 구조를 설계하고, 신규 화면과 기존 PHP API의 통신 로직을 구현했습니다. PHP 백엔드를 유지하면서 프론트엔드 개발의 기반을 마련한 작업입니다.",
    stack: ["PHP", "React"],
    features: [
      "React 프론트엔드 초기 코드 구조 설계",
      "React 신규 화면 기능 개발·PHP API 통신 구현",
      "프론트엔드와 백엔드 코드의 책임 분리",
    ],
    challenge:
      "PHP 중심 개발팀을 PHP 백엔드와 React 프론트엔드로 나누는 방향에 맞춰 코드의 책임도 분리해야 했습니다. 프론트엔드와 백엔드의 역할을 구분하고 개발 속도를 개선하는 것이 목적이었으며, React 개발을 시작할 초기 코드 구조가 필요했습니다.",
    solution:
      "React 프론트엔드의 초기 코드 구조를 설계하고 신규 화면과 PHP API 통신 로직을 구현했습니다. 기존 PHP 백엔드는 유지하면서 프론트엔드에서 화면과 사용자 기능을 개발하는 기반을 마련했습니다.",
    result:
      "React 프론트엔드의 초기 구조를 마련하고 신규 화면과 PHP API 연동을 구현했습니다. PHP 백엔드를 유지하면서 프론트엔드와 백엔드의 코드 책임을 구분했습니다.",
    period: "2025.03 — 2025.05",
    company: "(주)스냅컴퍼니",
    role: "프론트 팀원 · React 초기 구조 설계·화면·API 연동",
    kind: "system",
    visualSteps: ["React 초기 구조 설계", "신규 화면 개발", "PHP API 연동"],
    featured: true,
    updatedAt: "2026-11-16",
  },
  {
    id: "msa",
    number: "05",
    name: "MSA 서비스 초기 구성",
    subtitle: "프로젝트 시작 단계의 서비스 구조 설계",
    category: "Infrastructure",
    description:
      "프로젝트 시작 단계에서 MSA 서비스들의 초기 구조 구성 전반을 담당했습니다.",
    stack: ["MSA", "서비스 구조 설계"],
    features: [
      "각 서비스의 개발 출발점 마련",
      "MSA 서비스 초기 구성",
      "프로젝트 초기 구조 설계",
    ],
    challenge:
      "새 프로젝트의 각 서비스가 개발을 시작할 수 있는 초기 구성과 구조가 필요했습니다.",
    solution:
      "MSA 서비스들의 초기 구성과 구조 설계를 수행하며 개발 출발점을 마련했습니다.",
    result: "각 서비스 개발의 기반이 되는 초기 구조를 구성했습니다.",
    period: "2026.10",
    company: "(주)스냅컴퍼니",
    role: "풀스택 팀원 · 초기 구조 구성 전반 담당",
    kind: "system",
    visualSteps: ["프로젝트 시작", "서비스 초기 구성", "구조 설계"],
  },
  {
    id: "commerce",
    number: "06",
    name: "쇼핑몰 웹 서비스",
    subtitle: "고객사별 쇼핑몰 SI 개발과 국내·해외 결제 연동",
    category: "Web",
    description:
      "골프웨어·건강기능식품 등 여러 고객사의 일반 소비자용 쇼핑몰을 SI 방식으로 개발했습니다. 별도 기획자와 협업하며 고객용 화면과 관리자 기능을 포함한 전체 개발을 맡았습니다. 기본 코드를 고객사별로 수정하고 국내 포트원·해외 PayPal 결제를 연동했으며, Linux 서버 세팅과 Nginx 배포, 가비아를 통한 도메인 설정까지 담당했습니다.",
    stack: ["React", "Node.js", "express", "MySQL", "PHP", "Linux", "Nginx", "OAuth", "포트원", "PayPal", "SEO"],
    features: [
      "고객용 화면과 관리자 기능을 포함한 쇼핑몰 전체 개발",
      "관리자·로그인·회원가입 기본 코드 재사용 및 고객사별 수정",
      "고객사별 로그인·회원가입 디자인과 상품 옵션·카테고리·할인 프로모션 구현",
      "주문·배송·결제의 처리 방식 유지 및 고객사별 디자인 수정",
      "구글·카카오·페이스북 OAuth 도입",
      "포트원·나이스 본인인증 흐름 도입",
      "국내 포트원·해외 PayPal 결제 연동과 결제 오류 대응 로직",
      "트랜잭션 기반 결제 처리 및 승인 후 주문 처리 실패 시 결제 취소 API 호출",
      "결제 실패 시 모달 안내와 결제 전 페이지 복귀",
      "외부 클라우드 Linux 서버 세팅과 Nginx 기반 배포",
      "가비아를 통한 도메인 설정 및 고객사 배포 환경 제공",
      "SEO 메타 태그 정비 및 페이지 로딩 성능 개선",
    ],
    challenge:
      "골프웨어·건강기능식품 등 여러 고객사의 쇼핑몰을 구축하면서 서로 다른 디자인과 상품 옵션·카테고리·할인 프로모션에 대응해야 했습니다. 고객용 화면과 관리자 기능을 함께 개발하고, 국내·해외 결제 연동뿐 아니라 승인 전 실패와 승인 후 주문 처리 실패에도 대응해야 했습니다.",
    solution:
      "기본 코드를 재사용해 로그인·회원가입 디자인과 상품 옵션·카테고리·할인 프로모션을 고객사별로 구현했습니다. 주문·배송·결제는 처리 방식을 유지하면서 디자인을 수정했고, 국내 결제는 포트원, 해외 결제는 PayPal로 연동했습니다.",
    result:
      "여러 고객사의 쇼핑몰 개발부터 외부 클라우드 Linux 서버 세팅, Nginx 배포와 도메인 설정까지 담당해 고객사에 제공했습니다. 국내·해외 결제 연동과 승인 전후 실패 대응, 모달 안내와 결제 전 페이지 복귀 흐름을 구현했습니다.",
    period: "프로젝트별 상이",
    company: "봄바람",
    role: "풀스택 팀장 · 전체 개발·서버 배포",
    environment:
      "쇼핑몰 서버·API는 Node.js·Express, DB는 MySQL을 사용했습니다. 초기 쇼핑몰은 PHP로 개발했습니다. 외부 클라우드의 Linux 서버에 Nginx 기반 배포 환경을 구성했고, 도메인은 가비아에서 설정했습니다.",
    collaboration:
      "기획은 별도 기획자가 담당했습니다. 본인은 고객용 화면·관리자·API·DB 개발과 서버 세팅·배포·도메인 설정을 맡아 고객사에 제공했습니다.",
    updatedAt: "2026-11-17",
    kind: "commerce",
    visualSteps: ["고객사별 화면", "상품·프로모션", "국내·해외 결제"],
    featured: true,
  },
  {
    id: "helfu",
    number: "07",
    name: "helfu · Flutter 앱",
    subtitle: "Android·iOS 앱 구조 설계부터 스토어 출시까지",
    category: "Mobile",
    description:
      "Flutter 기반 Android·iOS 앱 개발 팀장으로 앱 구조와 express API 연동을 설계하고, 서비스 기능 구현과 배포 절차를 관리했습니다.",
    stack: ["Flutter", "express", "OAuth", "PG 결제"],
    features: [
      "Flutter 앱과 express API 연동 설계",
      "OAuth·본인인증·PG 결제 연동",
      "택배 연동 기능 구현",
      "Android·iOS 배포 절차 관리 및 스토어 출시",
    ],
    challenge:
      "모바일 앱에서 인증·결제·배송 기능을 연결하고 두 플랫폼의 출시 절차를 관리해야 했습니다.",
    solution:
      "Flutter 앱과 API 연동 구조를 설계하고, 핵심 외부 연동 기능을 구현하며 Android·iOS 배포를 관리했습니다.",
    result: "Android·iOS 앱 배포 절차를 관리하고 스토어에 출시했습니다.",
    period: "2023.04 — 2024.08",
    company: "봄바람",
    role: "풀스택 팀장 · 앱 구조 설계·개발",
    kind: "mobile",
    visualSteps: ["Flutter 앱", "express API", "Android · iOS"],
    link: {
      label: "Google Play에서 보기",
      href: "https://play.google.com/store/apps/details?id=com.helfu",
    },
  },
  {
    id: "education",
    number: "08",
    name: "사내 교육 플랫폼",
    subtitle: "교육 콘텐츠 관리 화면·API·DB의 통합 설계",
    category: "Platform",
    description:
      "사내 교육 플랫폼 구축 팀장으로 React·Node.js·MySQL 기반의 콘텐츠 관리 화면, API와 DB 구조를 설계·구현했습니다.",
    stack: ["React", "Node.js", "MySQL", "Vimeo"],
    features: [
      "교육 콘텐츠 관리 화면 개발",
      "콘텐츠 API와 DB 구조 설계·구현",
      "Vimeo 연동 영상 제공 구조 설계",
    ],
    challenge:
      "교육 자료를 내부에서 관리하고 조회할 수 있는 플랫폼이 필요했습니다.",
    solution:
      "화면·API·DB를 함께 설계하고 Vimeo를 연동해 교육 영상을 제공하는 구조를 구성했습니다.",
    result: "교육 자료를 내부에서 관리·조회할 수 있는 플랫폼을 구축했습니다.",
    period: "2024.03 — 2024.05",
    company: "봄바람",
    role: "풀스택 팀장 · 플랫폼 설계·개발",
    kind: "workspace",
    visualSteps: ["콘텐츠 관리", "API · MySQL", "Vimeo 영상"],
  },
  {
    id: "legacy-bom",
    number: "09",
    name: "PHP → React / Node.js",
    subtitle: "공통 로직과 기능별 책임을 분리한 레거시 개선",
    category: "Web",
    description:
      "PHP 단일 구조에서 React 컴포넌트와 Node.js API를 분리하는 기술 방향을 결정하고 실무 구현을 진행했습니다.",
    stack: ["PHP", "React", "Node.js"],
    features: [
      "React 컴포넌트와 Node.js API 분리",
      "결제·쇼핑몰·게시판의 공통 로직 정리",
      "기능별 책임 분리",
    ],
    challenge:
      "PHP 단일 구조에서 기능 수정 범위가 크고 코드 파악이 어려웠습니다.",
    solution:
      "팀장으로 구조 전환의 기술 방향을 정하고, 공통 로직을 정리해 기능별 책임을 분리했습니다.",
    result:
      "유지보수와 기능 추가에 필요한 코드 이해 범위를 줄이고 신규 개발자의 적응을 지원했습니다.",
    period: "2024.01 — 2024.06",
    company: "봄바람",
    role: "풀스택 팀장 · 기술 방향 결정·실무 구현",
    kind: "system",
    visualSteps: ["PHP 단일 구조", "공통 로직 정리", "UI · API 분리"],
  },
  {
    id: "ai-ad-generator",
    number: "10",
    name: "AI 광고 자동화 SaaS PoC",
    subtitle: "AI 광고 소재 생성·편집부터 광고 게재와 성과 확인까지",
    category: "Platform",
    description:
      "AI 이미지·영상 광고 소재 생성부터 광고 게재와 성과 확인까지 연결하는 PoC입니다. 프론트엔드의 화면·공통 컴포넌트·API 경계를 나누고, 게이트웨이 기반 MSA 초기 구성과 NestJS·Python 서비스 템플릿 플러그인 구축 전반을 담당했습니다.",
    stack: ["NestJS", "Python", "FastAPI", "MSA", "Claude 플러그인", "ECS", "Docker", "GitLab CI", "KG이니시스", "외부 API", "LLM"],
    features: [
      "MSA 초기 구성과 게이트웨이 경유 내부 서비스 접근 구조",
      "NestJS·Python 서비스 생성 템플릿과 Claude 플러그인 구현",
      "Redis·SSM·DB 연결 공통 kit와 ECS용 빌드 구성 관리",
      "기존 저장소 서비스 추가·빈 폴더 신규 프로젝트 생성 지원",
      "기본 패키지 설치·health check API·Make·Docker 이미지 관련 뼈대 생성",
      "msa 명령을 통한 서비스 추가와 요청 기능 구현 연결",
      "프론트엔드 화면·공통 컴포넌트·API 경계 분리",
      "광고 소재 생성에 필요한 참고 지식의 검색 적중률 개선",
      "배경·상품·텍스트의 개별 이미지 레이어 분리",
      "Meta 광고 API 앱 심사 대응 및 광고 게재·목록 조회",
      "성과 대시보드 목록 테이블과 상세 조회 모달",
      "실패 작업 2회 재시도와 최종 실패 시 미청구 처리",
      "KG이니시스 단건·정기결제 로직 구현",
    ],
    challenge:
      "MSA 내부 서비스의 접근 경로와 새 서비스 개발을 시작할 초기 구조가 필요했습니다. 일반 백엔드와 크롤링·임베딩·pandas 활용 작업에 맞는 서비스 구성을 마련해야 했습니다. 초기 PoC에서는 소재 생성에 필요한 참고 지식의 검색 누락과 광고 기능별 권한 파악도 과제였습니다.",
    solution:
      "게이트웨이 경유 접근 구조와 NestJS·Python 서비스 템플릿을 구성했습니다. Redis·SSM·DB 연결과 ECS용 빌드 구성은 공통 kit로 관리하고, 기존 저장소의 서비스 추가와 빈 폴더의 신규 프로젝트 생성을 지원하는 Claude 플러그인을 구현했습니다. msa 명령은 서비스 추가에서 요청 기능 구현까지 연결합니다. GitLab CI에서 빌드·린트를 검증하고, 테스트는 Claude 스킬로 작성해 활용하고 있습니다. 소재 검색 개선·이미지 레이어 분리·Meta 광고 API·대시보드와 KG이니시스 단건·정기결제를 개발했습니다. 처리 비용과 시간을 고려해 실패 작업은 2회 재시도하고 최종 실패 시 비용을 청구하지 않도록 구현했습니다.",
    result:
      "MSA 초기 구조와 공통 kit, 두 가지 생성 방식을 갖춘 서비스 템플릿 플러그인을 구축했습니다. msa 명령으로 요청 서비스 추가와 기능 구현을 이어가는 흐름을 마련했습니다. 소재 생성 지식의 검색 적중률과 이미지 편집을 개선하고 Meta 앱 심사 승인, 광고 게재·목록·성과 상세 조회와 KG이니시스 단건·정기결제 구현을 완료했습니다.",
    period: "2026.02 — 현재",
    company: "업무 프로젝트",
    role: "MSA 초기 구성·서비스 템플릿 플러그인 전반 · 소재 생성·광고 API·대시보드·결제",
    environment:
      "게이트웨이 경유 MSA 구성 · ECS 배포 환경 · kit의 빌드 구성 · GitLab CI 빌드·린트 검증 · Claude 테스트 스킬 활용",
    kind: "workspace",
    visualSteps: ["소재 생성·편집", "광고 게재", "성과 확인"],
    status: "in-progress",
    updatedAt: "2026-11-21",
  },
];
export const careers = [
  {
    company: "(주)스냅컴퍼니",
    period: "2024.12 — 재직 중",
    role: "정규직 · 풀스택 팀원",
    description:
      "ERP AI 챗봇·Slack 알림, S3 파일 전달 구조 개선, PHP 8.3·DDD 업로드 리팩토링과 SQS 연동, React 프론트엔드 초기 구축, MSA 서비스 초기 구조 구성.",
    projects: ["erp-ai", "upload-server", "legacy-snap", "s3-transfer", "msa"],
  },
  {
    company: "봄바람",
    period: "2022.09 — 2024.08",
    role: "정규직 · 팀장",
    description:
      "쇼핑몰·Flutter 앱·사내 교육 플랫폼의 설계와 주요 개발, 외부 인증·결제 연동, React·Node.js 구조 전환과 모바일 앱 출시.",
    projects: ["commerce", "helfu", "education", "legacy-bom"],
  },
];
export const education = [
  {
    name: "전주공업고등학교",
    period: "2008.03 — 2011.02",
    detail: "전자계산기공학 · 졸업",
  },
  {
    name: "제로베이스 프론트엔드 스쿨 3기",
    period: "2022.04",
    detail:
      "HTML·CSS, JavaScript, React·React Router·React Query, Redux·Recoil, TypeScript, Vue 학습",
  },
  {
    name: "ITBANK ICT교육센터 · 정보보안과정",
    period: "2014.04 — 2015.10",
    detail: "C/C++, Java, Linux, CCNA·CCNP 네트워크 보안 과정 이수",
  },
];
export const skillGroups = [
  {
    label: "FRONTEND",
    experience: "주력 분야",
    projects: ["erp-ai", "commerce", "legacy-snap"],
    skills: ["Next.js", "React", "TypeScript", "JavaScript", "HTML", "CSS"],
  },
  {
    label: "BACKEND & DATA",
    experience: "NestJS·FastAPI 1–2년 · 총 경력 내 경험",
    projects: ["ai-ad-generator", "erp-ai", "s3-transfer"],
    skills: ["NestJS", "FastAPI", "Node.js", "Python", "MySQL", "SQL"],
  },
  {
    label: "AI & DELIVERY",
    experience: "프로젝트별 활용 경험",
    projects: ["erp-ai", "ai-ad-generator", "upload-server"],
    skills: ["LangGraph", "Flutter", "AWS", "Linux", "nginx", "PM2", "GitHub"],
  },
];
export const implementedFeatures = [
  {
    title: "권한 기반 조직·정책 조회",
    category: "AI & AUTOMATION",
    description:
      "ERP 챗봇 화면과 Python·LangGraph를 개발하고 사용자 권한에 따른 조직·정책 조회를 구현했습니다.",
    tags: ["Next.js", "FastAPI", "LangGraph"],
    project: "erp-ai",
  },
  {
    title: "업로드 처리·메시지 연동",
    category: "UPLOAD & MESSAGING",
    description:
      "PHP 8.3·DDD로 업로드 코드를 재구성하고 검사·미디어 후처리·API 서버의 DB 반영을 SQS로 연결했습니다. 인프라·보안팀과 협업하며 애플리케이션 코드를 담당했습니다.",
    tags: ["PHP 8.3", "DDD", "SQS"],
    project: "upload-server",
  },
  {
    title: "인증·본인확인·결제",
    category: "COMMERCE INTEGRATION",
    description:
      "구글·카카오·페이스북 OAuth, 포트원·나이스 본인인증, PG 결제와 결제 오류 대응을 구현했습니다.",
    tags: ["OAuth", "본인인증", "PG 결제"],
    project: "commerce",
  },
  {
    title: "모바일 앱·외부 서비스 연동",
    category: "CROSS-PLATFORM APP",
    description:
      "Flutter와 express API를 연결하고 인증·결제·택배 기능 구현 및 Android·iOS 출시를 진행했습니다.",
    tags: ["Flutter", "express", "Android · iOS"],
    project: "helfu",
  },
  {
    title: "React 초기 구조·화면·API 연동",
    category: "FRONTEND FOUNDATION",
    description:
      "React 프론트엔드의 초기 코드 구조를 설계하고 신규 화면과 기존 PHP API의 통신 로직을 구현했습니다.",
    tags: ["PHP", "React"],
    project: "legacy-snap",
  },
  {
    title: "서비스 초기 설계·플랫폼 구축",
    category: "ARCHITECTURE & PLATFORM",
    description:
      "MSA 서비스 초기 구조를 구성하고 교육 플랫폼의 관리 화면·API·MySQL DB 및 Vimeo 연동을 설계했습니다.",
    tags: ["MSA", "MySQL", "Vimeo"],
    project: "education",
  },
];
export const domains = [
  {
    name: "Frontend & Web",
    detail: "쇼핑몰·교육 플랫폼·ERP 화면 개발",
    tools: "Next.js · React · TypeScript",
  },
  {
    name: "Backend & Services",
    detail: "API 설계, 파일 전달 구조와 MSA 초기 구성",
    tools: "NestJS · FastAPI · Node.js",
  },
  {
    name: "AI & Data",
    detail: "권한 기반 조직·정책 조회 챗봇",
    tools: "Python · LangGraph",
  },
  {
    name: "Mobile & Delivery",
    detail: "모바일 앱 출시, Linux 서버 구성과 배포",
    tools: "Flutter · Linux · nginx · PM2",
  },
];

export const projectOrder = [
  "erp-ai",
  "legacy-snap",
  "commerce",
  "upload-server",
  "ai-ad-generator",
  "education",
  "s3-transfer",
  "legacy-bom",
  "helfu",
  "msa",
];
export const orderedProjects = projectOrder.map(
  (id) => projects.find((project) => project.id === id)!,
);
export const featuredProjects = orderedProjects.filter(
  (project) => project.featured,
);
export const recentProject = orderedProjects.find(
  (project) => project.id === "ai-ad-generator",
)!;
export function projectHref(id: string) {
  return `/projects/${id}/`;
}
export function projectStatus(project: Project) {
  return project.status === "in-progress" ? "진행 중" : "구현 완료";
}
