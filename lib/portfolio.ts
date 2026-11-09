/** Professional content curated from the resume supplied on 2026-11-06.
 * Contact details and the original PDF are intentionally excluded. */
export const profile = {
  name: "이기문",
  handle: "kimoon1",
  github: "https://github.com/kimoon1",
  repository: "https://github.com/kimoon1/Pol",
  title: "Frontend Developer",
  experience: "4년",
  backendExperience: "1–2년",
  sourceDate: "2026.11",
  introduction:
    "React·Next.js·TypeScript로 업무에 필요한 화면을 만드는 프론트엔드 개발자 이기문입니다.",
  summary:
    "SI와 서비스 회사에서 웹 서비스를 개발해 왔습니다. NestJS·FastAPI 기반 백엔드 경험을 바탕으로 화면과 API, 권한과 운영 흐름까지 함께 고려합니다.",
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
  link?: { label: string; href: string };
};
export const projects: Project[] = [
  {
    id: "erp-ai",
    number: "01",
    name: "권한 기반 ERP 챗봇",
    subtitle: "사내 조직·정책 조회를 연결한 화면과 Python 챗봇",
    category: "Platform",
    description:
      "ERP에서 사내 조직과 정책을 자연어로 조회하는 챗봇의 프론트엔드와 Python·LangGraph 구현을 담당했습니다. 사용자 권한에 따라 조회 범위를 구분하며, 벡터 검색은 사용하지 않았습니다.",
    stack: ["Next.js", "Python", "FastAPI", "LangGraph"],
    features: [
      "ERP 챗봇 프론트엔드 개발",
      "Python·LangGraph 기반 챗봇 구축",
      "사내 조직 및 정책 조회",
      "LangGraph 내 user_pk 기반 권한 검사 툴",
      "노드별 조회를 병행하도록 설계",
      "업무 규칙 기반 Slack 알림 개발",
    ],
    challenge:
      "사내 조직과 정책을 자연어로 조회하면서 사용자별로 허용된 정보 범위를 반영해야 했습니다.",
    solution:
      "ERP 챗봇 화면과 Python·LangGraph를 구현했습니다. LangGraph 내 권한 검사 툴에서 user_pk로 사용자 권한을 확인하며, 노드별 조회를 병행하도록 설계했습니다. 벡터 검색은 사용하지 않았습니다.",
    result:
      "사용자 권한에 따라 사내 조직과 정책을 조회할 수 있는 챗봇을 구현했습니다.",
    period: "2025.09 — 2025.12",
    company: "(주)스냅컴퍼니",
    role: "챗봇 프론트엔드 · Python·LangGraph 개발",
    kind: "workspace",
    visualSteps: ["ERP 화면", "LangGraph", "조직·정책 조회"],
    featured: true,
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
    name: "보안을 위한 업로드 서버 재구축",
    subtitle: "검증과 공개 제공의 책임을 분리한 서버 구조",
    category: "Infrastructure",
    description:
      "단일 업로드 서버의 보안 및 리소스 문제를 개선하기 위해 인프라 설계부터 개발까지 단일 담당자로 진행했습니다.",
    stack: ["PHP", "rsync", "AWS SQS"],
    features: [
      "검증 서버와 퍼블릭 서버의 책임 분리",
      "rsync를 통한 서버 이중화와 리소스 분산 설계",
      "SQS 큐 서비스 추가",
    ],
    challenge: "단일 업로드 서버에 보안과 리소스 문제가 집중되어 있었습니다.",
    solution:
      "서버의 책임을 분리하고, rsync 기반 이중화 및 SQS 큐를 추가하는 방향으로 인프라와 업로드 서버를 재구축했습니다.",
    result:
      "검증과 퍼블릭 제공의 책임을 분리하고 리소스를 분산하는 구조를 설계·개발했습니다.",
    period: "2025.07 — 2025.12",
    company: "(주)스냅컴퍼니",
    role: "풀스택 팀원 · 인프라 설계·개발 단일 담당",
    kind: "system",
    visualSteps: ["책임 분리", "rsync 이중화", "SQS 큐 추가"],
    featured: true,
  },
  {
    id: "legacy-snap",
    number: "04",
    name: "PHP 레거시 React 전환",
    subtitle: "서비스 운영을 유지하며 단계적으로 구조 전환",
    category: "Web",
    description:
      "결제·쇼핑몰·게시판 기능을 React UI와 Node.js API 구조로 단계적으로 재구성했습니다.",
    stack: ["PHP", "React", "Node.js"],
    features: [
      "React UI와 Node.js API 구조로 기능 전환",
      "결제·쇼핑몰·게시판 기존 기능 검증",
      "운영을 유지하며 단계적으로 리팩토링",
    ],
    challenge:
      "기존 서비스 기능과 운영을 유지하면서 PHP 레거시 구조를 전환해야 했습니다.",
    solution:
      "기존 기능을 검증하며 React·Node.js 기반으로 기능 단위 전환을 구현했습니다.",
    result:
      "운영 중인 결제·쇼핑몰·게시판 기능을 검증하며 React UI와 Node.js API 구조로 단계적으로 전환했습니다.",
    period: "2025.03 — 2025.05",
    company: "(주)스냅컴퍼니",
    role: "프론트 팀원 · React·Node.js 전환 구현",
    kind: "system",
    visualSteps: ["기존 기능 검증", "React UI", "Node.js API"],
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
    subtitle: "로그인·본인인증·결제를 연결하는 구매 흐름",
    category: "Web",
    description:
      "쇼핑몰 구축 프로젝트의 팀장 및 주요 개발자로 React 화면 구조와 핵심 UI, 인증·결제 흐름을 설계·구현했습니다.",
    stack: ["React", "OAuth", "PG 결제", "SEO"],
    features: [
      "구글·카카오·페이스북 OAuth 도입",
      "포트원·나이스 본인인증 흐름 도입",
      "PG 결제 연동과 결제 오류 대응 로직",
      "SEO 메타 태그 정비 및 페이지 로딩 성능 개선",
    ],
    challenge:
      "사용자의 로그인부터 인증, 결제까지 이어지는 쇼핑몰의 핵심 흐름을 구축해야 했습니다.",
    solution:
      "React 기반 UI를 설계하고 외부 인증 및 결제 서비스를 연동하면서 결제 오류 대응 로직을 구현했습니다.",
    result: "로그인·인증·결제를 포함한 쇼핑몰 핵심 흐름을 구축했습니다.",
    period: "2024.01 — 2024.06",
    company: "봄바람",
    role: "풀스택 팀장 · 주요 개발·UI 설계",
    kind: "commerce",
    visualSteps: ["OAuth 로그인", "본인인증", "PG 결제"],
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
    name: "AI 광고 이미지·영상 생성",
    subtitle: "광고 소재 생성부터 매체 등록·대시보드·LLM 성과 분석까지",
    category: "Platform",
    description:
      "NestJS와 Python·FastAPI를 사용해 외부 API 기반 광고 이미지·영상 생성, 광고매체 사이트 등록, 대시보드와 LLM 성과 분석을 개발하고 있습니다.",
    stack: ["NestJS", "Python", "FastAPI", "외부 API", "LLM"],
    features: [
      "외부 API 기반 광고 이미지·영상 생성",
      "광고매체 사이트에 광고 등록",
      "광고 운영 대시보드 개발",
      "LLM을 활용한 광고 성과 분석",
    ],
    challenge:
      "광고 소재의 생성·제작에 이어 광고 등록, 대시보드와 성과 분석을 다루는 프로젝트를 개발하고 있습니다.",
    solution:
      "NestJS와 Python·FastAPI로 외부 생성 API를 연동하고, 광고매체 등록·대시보드·LLM 성과 분석 기능을 개발하고 있습니다.",
    result:
      "광고 소재 생성·매체 등록·대시보드·성과 분석을 개발 중입니다. 완료된 범위와 운영 결과는 진행 상황에 맞춰 업데이트합니다.",
    period: "진행 중",
    company: "업무 프로젝트",
    role: "NestJS·FastAPI 기반 광고 생성·운영 기능 개발",
    kind: "workspace",
    visualSteps: ["소재 생성", "매체 등록", "성과 분석"],
    status: "in-progress",
    featured: true,
    updatedAt: "2026-11-09",
  },
];
export const careers = [
  {
    company: "(주)스냅컴퍼니",
    period: "2024.12 — 재직 중",
    role: "정규직 · 풀스택 팀원",
    description:
      "ERP AI 챗봇·Slack 알림, S3 파일 전달 구조 개선, 업로드 서버 재구축, PHP 레거시 전환, MSA 서비스 초기 구조 구성.",
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
    title: "파일 전달·업로드 인프라",
    category: "SERVICE INFRASTRUCTURE",
    description:
      "S3 기반 파일 전달 구조 개선과 업로드 서버 책임 분리, rsync 이중화, SQS 큐 추가를 수행했습니다.",
    tags: ["AWS S3", "rsync", "SQS"],
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
    title: "레거시 전환·기능 분리",
    category: "REFACTORING",
    description:
      "PHP의 결제·쇼핑몰·게시판 기능을 React UI와 Node.js API로 전환하며 공통 로직과 책임을 분리했습니다.",
    tags: ["PHP", "React", "Node.js"],
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
  "upload-server",
  "ai-ad-generator",
  "legacy-snap",
  "commerce",
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
export function projectHref(id: string) {
  return `/projects/${id}/`;
}
export function projectStatus(project: Project) {
  return project.status === "in-progress" ? "진행 중" : "구현 완료";
}
