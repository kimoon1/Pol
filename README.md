# pol. — Developer Portfolio

React·Next.js·TypeScript 프론트엔드 개발자 이기문의 포트폴리오입니다. ERP 챗봇 화면, 운영 중인 React 전환, 쇼핑몰의 인증·결제 흐름을 대표 사례로 소개하고 서버·AI 개발 경험을 연결합니다.

## 시작하기

Node.js 22 이상을 권장합니다.

```bash
npm ci
npm run dev
```

개발 주소: http://localhost:3000

```bash
npm run typecheck
npm run test:search
npm run build
npm run test:export
```

`npm run build`는 정적 배포용 `out/`을 생성합니다. Next.js의 [static export](https://nextjs.org/docs/app/guides/static-exports)를 사용하므로 정적 호스팅에서도 동작합니다. Vercel에서는 Next.js 프로젝트로 가져올 수 있습니다. 정적 결과를 확인할 때는 파일을 직접 열지 말고 HTTP 서버를 사용하세요. `npm start`는 static export에 사용하지 않습니다.

## 페이지

| 경로                | 내용                                                       |
| ------------------- | ---------------------------------------------------------- |
| `/` | 프론트엔드 소개, 대표 사례 3개, 서비스 확장 경험, 이메일 연락 |
| `/projects/`        | 분류·검색 필터와 프로젝트 목록                             |
| `/projects/[slug]/` | 정적으로 생성되는 프로젝트별 상세 페이지와 공유 메타데이터 |
| `/capabilities/` | 기술을 선택해 적용 프로젝트를 찾는 기술별 경험 인덱스 |
| `/about/`           | 소개, 경력·학력, 기술과 적용 사례, GitHub 연결             |
| `/resume/`          | 인쇄·PDF 저장 가능한 공개 경력 요약                        |

기존 `/projects/?project=erp-ai` 형태의 링크도 해당 상세 페이지로 연결합니다. `/projects/?filter=Web&q=React`처럼 분류·검색 조건을 URL에 저장하며, 상세 페이지에서 브라우저 뒤로 가기를 하면 조건과 목록 위치를 복원합니다. 공개 이메일은 2026년 11월 10일 사용자가 제공한 주소만 사용합니다.

## 콘텐츠와 수정 방법

2026년 11월 6일 이력서 기반의 기존 콘텐츠에 2026년 11월 9일 사용자 설명을 반영했습니다. 총 경력 4년은 기존 표기를 유지하고 NestJS·FastAPI 1–2년 경험은 총 경력 안의 경험으로 표시합니다. 근거가 없는 성과 수치는 노출하지 않습니다.

- `lib/portfolio.ts`: 프로필, 프로젝트 10개, 경력·교육, 기술 그룹, 대표 여부·진행 상태·표시 순서. AI 광고 생성기는 NestJS·FastAPI 기반 외부 API 생성, 광고매체 등록, 대시보드와 LLM 성과 분석을 개발 중입니다. 기간·완료 범위·성과를 추정하지 않습니다.
- `lib/case-studies.ts`: 담당 범위, 구현 판단과 범위, 관련 프로젝트. ERP의 벡터 검색 미사용과 권한별 조직·정책 조회를 명시합니다.
- 업로드 상세는 요약 → 문제 → 담당 범위 → 코드 구성·처리 흐름·설계 판단 → 검증 사례 → 결과 순서로 구성합니다. 상세 사례가 있는 프로젝트는 같은 내용의 요약·기능 체크리스트를 반복하지 않습니다.
- 업로드의 코드 구성 예시는 DTO·Repository·Service 분리와 Service의 외부 연동 호출을 설명합니다. 검증 사례는 사용자 설명으로 확인한 파일 검사 거부·프론트 알림·큐 등록 분기이며, 자동화 테스트 결과나 공개 소스 코드로 제시하지 않습니다.
- 업로드 사례는 컨버터의 수신·Private S3 저장·검사 → SQS 작업 전달 → 업로드 서버의 미디어 처리 → SQS 완료 알림 → API 서버의 크론·DB 반영을 다룹니다. PHP 코드 전반과 연동 구현을 본인 기여로, 서버·AWS·rsync 구축은 전담팀 역할로 구분합니다.
- `docs/content-checklist.md`: 화면 자료·실제 데이터 흐름·검증 결과 등 다음 콘텐츠 업데이트에 필요한 편집용 메모.
- `app/projects/[slug]/page.tsx`: `generateStaticParams` 기반 상세 경로 생성과 프로젝트별 메타데이터.
- `app/about/page.tsx`, `app/resume/page.tsx`: 공통 경력 데이터로 소개와 인쇄용 요약을 구성합니다.
- 실제 서비스 화면을 제공받지 않아 프로젝트 비주얼은 구성 개념도로 표시합니다. 개념도를 실제 UI나 상세 시스템 설계로 해석하지 않습니다.
- `/capabilities/`는 기술별 검색 링크와 관련 사례를 연결합니다. 기술 태그는 실제 프로젝트에 기록된 기술을 사용하며, 별도의 구현 데모는 만들지 않습니다.
- 공개 서비스 링크는 기존 helfu Google Play 링크를 사용합니다. 현재 서비스 전체 기능을 과거 개인 기여로 추가하지 않았습니다.
- 사용자가 공개 연락처로 제공한 이메일을 홈·소개·메뉴·경력 요약에 표시합니다. 전화번호·이력서 원본 PDF와 경력증명서는 공개하지 않습니다. 경력 요약은 공개 프로필 데이터로 생성합니다.
- MSA 사례는 이력서에 구체적인 기술·수치가 없어 초기 구조 구성 범위로만 소개합니다. 교육 과정의 CCNA·CCNP는 자격증 취득으로 표현하지 않습니다.

## 공용 컴포넌트

- `components/shell.tsx`: 상단 내비게이션, 활성 메뉴, 네이티브 dialog 기반 모바일 메뉴, 헤더, 푸터.
- `components/ui.tsx`: 공용 Badge, 제목, 지표 카드, 빈 상태. 버튼은 `.button` 공용 클래스와 변형으로 구성합니다.
- `components/project-visual.tsx`: 확인된 담당 흐름을 표시하는 구성 개념도. 실제 서비스 화면 캡처로 표현하지 않습니다.
- `components/projects-explorer.tsx`: URL 기반 검색·필터, 목록 스크롤 복원과 기존 쿼리 링크 호환 처리. `lib/project-search.ts`의 URL 변환을 `npm run test:search`로 검증합니다.
- `components/project-card.tsx`: 상세 페이지로 연결되는 공통 프로젝트 카드.
- `components/case-diagram.tsx`: 확인된 사실만 표시하는 프로젝트별 범위·구조 요약. 실제 UI나 상세 내부 설계를 재현한 자료가 아닙니다.
- `components/upload-architecture.tsx`: 업로드 서버의 변경 전후와 서버별 처리 책임·SQS 메시지 흐름. SQS는 용도로 표시하며 실제 큐 개수를 뜻하지 않습니다.
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

`app/globals.css`가 `app/styles/`의 공통 구조, 프로젝트 개념도, 반응형 글꼴 크기, 서체, 포트폴리오 상세 스타일을 순서대로 불러옵니다. `app/styles/editorial.css`에서 상단 메뉴와 메인 화면의 여백·시각 계층을 조정합니다. 기존 스타일의 적용 순서를 보존했습니다. 작은 화면에서는 메뉴가 접히고 카드가 한 열로 전환됩니다. 키보드 포커스, 본문 바로가기, 폼 라벨, 모바일 메뉴 포커스 순환과 Escape 닫기, reduced-motion을 지원합니다.

GitHub Actions에서 push/PR 시 `npm ci`, 타입 검사, production build, 정적 결과 검증을 실행합니다. `npm run test:export`는 생성된 상세 페이지, 고유 제목과 공유 설명, 내부 링크·앵커, 경력 요약 경로를 검증합니다. 별도 서버, 계정, 데이터베이스는 필요하지 않습니다.

## 메인 디자인 개선

- 넓은 사이드바를 상단 내비게이션으로 바꾸고 모든 기존 페이지 경로를 유지했습니다.
- 현재 프론트엔드 소개와 최신 콘텐츠를 유지하며 화면·API·권한을 고려하는 개발 경험 개념도를 추가했습니다.
- ERP, React 전환, 쇼핑몰 대표 사례의 시각 표현을 서로 다르게 구성했습니다. 실제 서비스 화면은 아닙니다.
- 업로드 서버 사례는 PHP 8.3·DDD, SQS 연동, DB 접근 제거와 본인·전담팀의 역할 구분을 메인에서도 요약합니다. 상세 사례와 S3 파일 전달 프로젝트는 별도로 유지합니다.
- 모바일에서는 실제 담당 경험을 장식 그래픽 앞에 배치합니다. 네이티브 dialog가 메뉴의 포커스 순환과 Escape 닫기를 처리합니다.
- `lib/portfolio.ts`, `lib/case-studies.ts`의 최신 데이터와 검색·필터·목록 복원 코드는 변경하지 않았습니다.
