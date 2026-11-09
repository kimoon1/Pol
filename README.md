# pol. — Developer Portfolio

React·Next.js·TypeScript 프론트엔드 개발자 이기문의 포트폴리오입니다. ERP 권한 기반 챗봇, 보안을 위한 업로드 서버 재구축, 진행 중인 AI 광고 이미지·영상 생성과 기존 React 서비스 경험을 소개합니다.

## 시작하기

Node.js 22 이상을 권장합니다.

```bash
npm ci
npm run dev
```

개발 주소: http://localhost:3000

```bash
npm run typecheck
npm run build
npm run test:export
```

`npm run build`는 정적 배포용 `out/`을 생성합니다. Next.js의 [static export](https://nextjs.org/docs/app/guides/static-exports)를 사용하므로 정적 호스팅에서도 동작합니다. Vercel에서는 Next.js 프로젝트로 가져올 수 있습니다. 정적 결과를 확인할 때는 파일을 직접 열지 말고 HTTP 서버를 사용하세요. `npm start`는 static export에 사용하지 않습니다.

## 페이지

| 경로                | 내용                                                       |
| ------------------- | ---------------------------------------------------------- |
| `/`                 | 프론트엔드 소개, 대표 사례 3개, React 경험, 경력 요약      |
| `/projects/`        | 분류·검색 필터와 프로젝트 목록                             |
| `/projects/[slug]/` | 정적으로 생성되는 프로젝트별 상세 페이지와 공유 메타데이터 |
| `/capabilities/`    | 실무 구현 경험 6개 영역과 관련 프로젝트 링크               |
| `/about/`           | 소개, 경력·학력, 기술과 적용 사례, GitHub 연결             |
| `/resume/`          | 인쇄·PDF 저장 가능한 공개 경력 요약                        |

기존 `/projects/?project=erp-ai` 형태의 링크도 해당 상세 페이지로 연결합니다. 공개 사이트 주소나 개인 연락처는 추정해 추가하지 않았습니다.

## 콘텐츠와 수정 방법

2026년 11월 6일 이력서 기반의 기존 콘텐츠에 2026년 11월 9일 사용자 설명을 반영했습니다. 총 경력 4년은 기존 표기를 유지하고 NestJS·FastAPI 1–2년 경험은 총 경력 안의 경험으로 표시합니다. 근거가 없는 성과 수치는 노출하지 않습니다.

- `lib/portfolio.ts`: 프로필, 프로젝트 10개, 경력·교육, 기술 그룹, 대표 여부·진행 상태·표시 순서. AI 광고 생성기는 NestJS·FastAPI 기반 외부 API 생성, 광고매체 등록, 대시보드와 LLM 성과 분석을 개발 중입니다. 기간·완료 범위·성과를 추정하지 않습니다.
- `lib/case-studies.ts`: 담당 범위, 구현 판단과 범위, 관련 프로젝트. ERP의 벡터 검색 미사용과 권한별 조직·정책 조회를 명시합니다.
- `docs/content-checklist.md`: 화면 자료·실제 데이터 흐름·검증 결과 등 다음 콘텐츠 업데이트에 필요한 편집용 메모.
- `app/projects/[slug]/page.tsx`: `generateStaticParams` 기반 상세 경로 생성과 프로젝트별 메타데이터.
- `app/about/page.tsx`, `app/resume/page.tsx`: 공통 경력 데이터로 소개와 인쇄용 요약을 구성합니다.
- 실제 서비스 화면을 제공받지 않아 프로젝트 비주얼은 구성 개념도로 표시합니다. 개념도를 실제 UI나 상세 시스템 설계로 해석하지 않습니다.
- `/capabilities/`는 이력서의 실무 구현 경험만 표시합니다. 포트폴리오용 인터랙션 데모는 제거했습니다.
- 공개 서비스 링크는 기존 helfu Google Play 링크를 사용합니다. 현재 서비스 전체 기능을 과거 개인 기여로 추가하지 않았습니다.
- 전화번호·개인 이메일·이력서 원본 PDF와 경력증명서는 공개하지 않습니다. 경력 요약은 기존 공개 프로필 데이터로 생성하며, 비어 있는 증빙 목록은 제거했습니다.
- MSA 사례는 이력서에 구체적인 기술·수치가 없어 초기 구조 구성 범위로만 소개합니다. 교육 과정의 CCNA·CCNP는 자격증 취득으로 표현하지 않습니다.

## 공용 컴포넌트

- `components/shell.tsx`: 사이드바, 활성 메뉴, 모바일 메뉴, 헤더, 푸터.
- `components/ui.tsx`: 공용 Badge, 제목, 지표 카드, 빈 상태. 버튼은 `.button` 공용 클래스와 변형으로 구성합니다.
- `components/project-visual.tsx`: 외부 이미지에 의존하지 않는 프로젝트 구성 개념도.
- `components/projects-explorer.tsx`: 검색·필터와 기존 쿼리 링크 호환 처리.
- `components/project-card.tsx`: 상세 페이지로 연결되는 공통 프로젝트 카드.
- `components/case-diagram.tsx`: 확인된 사실만 표시하는 프로젝트별 범위·구조 요약. 실제 UI나 상세 내부 설계를 재현한 자료가 아닙니다.
- `components/print-resume.tsx`: 브라우저의 인쇄·PDF 저장 기능.

## 디자인

Material 팔레트의 5개 원색만 사용합니다. 추가 강조·경계색은 아래 색상의 투명도로 표현합니다.

| 토큰                | 색상      |
| ------------------- | --------- |
| Primary / Blue A700 | `#2962FF` |
| Ink / Grey 900      | `#212121` |
| Muted / Grey 600    | `#757575` |
| Canvas / Grey 50    | `#FAFAFA` |
| Surface             | `#FFFFFF` |

본문은 16px, 보조 문구와 라벨은 최소 13px이며 모바일을 포함한 모든 글자 크기를 12px보다 크게 유지합니다.

서체는 패키지에서 가져와 사이트와 함께 자체 호스팅합니다. 외부 Google Fonts/CDN 요청 없이 동작하며 모두 `font-display: swap`을 사용합니다.

| 용도                  | 폰트                    | 공급 패키지                           |
| --------------------- | ----------------------- | ------------------------------------- |
| 한글 본문·UI          | Pretendard Variable     | `pretendard`                          |
| 영문 제목·브랜드·숫자 | Space Grotesk Variable  | `@fontsource-variable/space-grotesk`  |
| 코드 영역             | JetBrains Mono Variable | `@fontsource-variable/jetbrains-mono` |

폰트별 라이선스 원문은 `public/font-licenses.txt`에 포함했습니다. 서체 설정은 `app/layout.tsx`의 CSS import와 `app/globals.css`의 `--font-sans`, `--font-display`, `--font-mono` 토큰에서 관리합니다.

사이트에는 이력서를 기반으로 정리했다는 제작 설명 문구를 표시하지 않습니다. 자료 기준과 편집 방법은 이 문서에서 관리합니다.

`app/globals.css`가 `app/styles/`의 공통 구조, 프로젝트 개념도, 반응형 글꼴 크기, 서체, 포트폴리오 상세 스타일을 순서대로 불러옵니다. 기존 스타일의 적용 순서를 보존했습니다. 작은 화면에서는 메뉴가 접히고 카드가 한 열로 전환됩니다. 키보드 포커스, 본문 바로가기, 폼 라벨, 모바일 메뉴 포커스 순환과 Escape 닫기, reduced-motion을 지원합니다.

GitHub Actions에서 push/PR 시 `npm ci`, 타입 검사, production build, 정적 결과 검증을 실행합니다. `npm run test:export`는 생성된 상세 페이지, 고유 제목과 공유 설명, 내부 링크·앵커, 경력 요약 경로를 검증합니다. 별도 서버, 계정, 데이터베이스는 필요하지 않습니다.
