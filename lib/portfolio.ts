/** Replace these clearly labeled examples with verified personal work. */
export const profile = {
  handle: 'kimoon1',
  github: 'https://github.com/kimoon1',
  repository: 'https://github.com/kimoon1/Pol',
  title: 'Developer Portfolio',
  isSample: true,
  introduction: '사용자의 문제를 이해하고, 작은 인터랙션부터 서비스의 구조까지 연결하는 개발을 지향합니다.',
};
export type Category = 'Web' | 'Platform' | 'UI System';
export type Project = {
  id: string; number: string; name: string; subtitle: string; category: Category;
  description: string; stack: string[]; features: string[]; challenge: string; solution: string;
  period: string; kind: 'workspace' | 'commerce' | 'system';
};
export const projects: Project[] = [
  {
    id: 'flow', number: '01', name: 'Flow workspace', subtitle: '일의 흐름을 정리하는 협업 공간', category: 'Platform',
    description: '프로젝트, 일정, 할 일을 하나의 화면에서 연결하는 대시보드형 협업 도구의 예시입니다.',
    stack: ['Next.js', 'TypeScript', 'React Query'], features: ['대시보드 데이터 시각화', '검색과 복합 필터', '권한별 화면 구성'],
    challenge: '여러 화면에 흩어진 프로젝트 상태를 어떻게 한눈에 파악할 수 있을까?',
    solution: '정보의 우선순위를 정리하고 재사용 가능한 카드와 리스트 패턴으로 화면을 구성합니다.',
    period: '기간 입력 예정', kind: 'workspace',
  },
  {
    id: 'form', number: '02', name: 'Form & function', subtitle: '탐색부터 선택까지, 자연스러운 커머스', category: 'Web',
    description: '상품 탐색과 장바구니 흐름을 중심으로 구성한 반응형 커머스의 예시입니다.',
    stack: ['React', 'TypeScript', 'Zustand'], features: ['상품 검색과 정렬', '장바구니 상태 관리', '폼 유효성 검사'],
    challenge: '상품을 비교하고 선택하는 과정의 불필요한 단계를 어떻게 줄일 수 있을까?',
    solution: '검색 결과와 필터 상태를 연결하고 장바구니 변경에 즉각적인 피드백을 제공합니다.',
    period: '기간 입력 예정', kind: 'commerce',
  },
  {
    id: 'blocks', number: '03', name: 'Blocks design system', subtitle: '일관된 제품을 만드는 작은 기준들', category: 'UI System',
    description: '디자인 토큰과 공용 컴포넌트를 중심으로 확장하는 디자인 시스템의 예시입니다.',
    stack: ['React', 'TypeScript', 'CSS Variables'], features: ['디자인 토큰 설계', '컴포넌트 상태 정의', '키보드 접근성'],
    challenge: '화면이 늘어나도 일관된 사용자 경험을 유지하려면 무엇이 필요할까?',
    solution: '색상·간격·타이포그래피를 토큰으로 관리하고 컴포넌트의 상태와 사용 규칙을 정의합니다.',
    period: '기간 입력 예정', kind: 'system',
  },
];
export const capabilities = [
  { id: 'search', title: '검색과 필터링', category: 'Data interaction', description: '입력과 선택에 맞춰 필요한 정보를 빠르게 찾는 경험', tags: ['검색', '복합 필터', '빈 결과 처리'] },
  { id: 'form', title: '폼과 유효성 검사', category: 'User input', description: '올바른 입력을 안내하고 결과를 명확하게 전달하는 흐름', tags: ['실시간 검증', '오류 안내', '제출 상태'] },
  { id: 'state', title: '상태 관리', category: 'Application logic', description: '사용자의 행동을 화면 전체에 일관되게 반영하는 구조', tags: ['공유 상태', '수량 변경', '파생 데이터'] },
  { id: 'dashboard', title: '데이터 대시보드', category: 'Data visualization', description: '복잡한 정보를 읽기 쉬운 지표와 시각적 구조로 표현', tags: ['지표 카드', '차트', '기간 전환'] },
  { id: 'ui', title: '공용 컴포넌트', category: 'Design engineering', description: '제품의 일관성과 개발 속도를 함께 만드는 UI 시스템', tags: ['디자인 토큰', '재사용', '인터랙션 상태'] },
  { id: 'accessibility', title: '반응형과 접근성', category: 'Inclusive experience', description: '다양한 기기와 입력 방식에서도 편안하게 사용할 수 있는 화면', tags: ['반응형 레이아웃', '키보드 탐색', '시맨틱 HTML'] },
] as const;
export const domains = [
  { name: 'Frontend', detail: '빠르고 명확한 사용자 인터페이스', tools: 'React · Next.js · TypeScript', icon: 'code' },
  { name: 'UI Engineering', detail: '일관성 있는 컴포넌트와 인터랙션', tools: 'Design tokens · Responsive UI', icon: 'layers' },
  { name: 'Data & State', detail: '데이터와 사용자 행동을 연결하는 구조', tools: 'API integration · State management', icon: 'database' },
  { name: 'Product Thinking', detail: '문제 정의부터 사용성 개선까지', tools: 'User flow · Accessibility', icon: 'sparkles' },
];
