# pol. — Developer Portfolio

Next.js App Router와 TypeScript로 만든 반응형 개발자 포트폴리오입니다.

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
```

`npm run build`는 정적 배포용 `out/`을 생성합니다. Next.js의 [static export](https://nextjs.org/docs/app/guides/static-exports)를 사용하므로 정적 호스팅에서도 동작합니다. Vercel에서는 Next.js 프로젝트로 가져올 수 있습니다. 정적 결과를 확인할 때는 파일을 직접 열지 말고 HTTP 서버를 사용하세요. `npm start`는 static export에 사용하지 않습니다.

## 페이지

| 경로 | 내용 |
| --- | --- |
| `/` | 역량, 프로젝트, 기능을 요약한 대시보드 |
| `/projects/` | 분류·검색 필터, 프로젝트 상세 모달 |
| `/capabilities/` | 실무 구현 경험 6개 영역과 관련 프로젝트 링크 |
| `/about/` | 자기소개, 개발 가치관, 경력·학력, 증빙 자료, GitHub 연결 |

## 콘텐츠와 수정 방법

2026년 11월 6일 제공된 이력서의 경력·프로젝트·학력·기술을 정리했습니다. 총 경력 4년 및 성과 수치는 이력서 기재 기준이며 별도 산정하거나 검증하지 않았습니다.

- `lib/portfolio.ts`: 이기문 프로필, 실무 프로젝트 9개, 경력 2곳, 학력·교육 3개, 실무 구현 영역 6개, 기술 그룹.
- `app/about/page.tsx`: 자기소개, 경력·학력·기술·AI 활용 경험 및 증빙 자료 현황.
- 홈의 프로젝트·기능 수치는 데이터 배열에서 계산합니다.
- 실제 서비스 화면을 제공받지 않아 프로젝트 비주얼은 구성 개념도로 표시합니다. 개념도를 실제 UI나 상세 시스템 설계로 해석하지 않습니다.
- `/capabilities/`는 이력서의 실무 구현 경험만 표시합니다. 포트폴리오용 인터랙션 데모는 제거했습니다.
- 공개 링크는 이력서에 기재된 autoFlex와 helfu Google Play 링크만 사용했습니다. 현재 서비스 전체 기능을 과거 개인 기여로 추가하지 않았습니다.
- 전화번호·개인 이메일·이력서 원본 PDF는 사이트와 공개 저장소에서 제외했습니다. 경력증명서 및 자격 증빙은 제공되지 않아 미등록으로 표시합니다.
- MSA 사례는 이력서에 구체적인 기술·수치가 없어 초기 구조 구성 범위로만 소개합니다. 교육 과정의 CCNA·CCNP는 자격증 취득으로 표현하지 않습니다.

## 공용 컴포넌트

- `components/shell.tsx`: 사이드바, 활성 메뉴, 모바일 메뉴, 헤더, 푸터.
- `components/ui.tsx`: 공용 Badge, 제목, 지표 카드, 빈 상태. 버튼은 `.button` 공용 클래스와 변형으로 구성합니다.
- `components/project-visual.tsx`: 외부 이미지에 의존하지 않는 프로젝트 구성 개념도.
- `components/projects-explorer.tsx`: 검색·필터와 네이티브 `<dialog>` 기반 상세 보기. 모달 포커스 관리, Escape 닫기를 지원합니다.

## 디자인

Material 팔레트의 5개 원색만 사용합니다. 추가 강조·경계색은 아래 색상의 투명도로 표현합니다.

| 토큰 | 색상 |
| --- | --- |
| Primary / Blue A700 | `#2962FF` |
| Ink / Grey 900 | `#212121` |
| Muted / Grey 600 | `#757575` |
| Canvas / Grey 50 | `#FAFAFA` |
| Surface | `#FFFFFF` |

본문은 16px, 보조 문구와 라벨은 최소 13px이며 모바일을 포함한 모든 글자 크기를 12px보다 크게 유지합니다.

서체는 패키지에서 가져와 사이트와 함께 자체 호스팅합니다. 외부 Google Fonts/CDN 요청 없이 동작하며 모두 `font-display: swap`을 사용합니다.

| 용도 | 폰트 | 공급 패키지 |
| --- | --- | --- |
| 한글 본문·UI | Pretendard Variable | `pretendard` |
| 영문 제목·브랜드·숫자 | Space Grotesk Variable | `@fontsource-variable/space-grotesk` |
| 코드 영역 | JetBrains Mono Variable | `@fontsource-variable/jetbrains-mono` |

폰트별 라이선스 원문은 `public/font-licenses.txt`에 포함했습니다. 서체 설정은 `app/layout.tsx`의 CSS import와 `app/globals.css`의 `--font-sans`, `--font-display`, `--font-mono` 토큰에서 관리합니다.

사이트에는 이력서를 기반으로 정리했다는 제작 설명 문구를 표시하지 않습니다. 자료 기준과 편집 방법은 이 문서에서 관리합니다.

CSS 토큰과 공용 스타일은 `app/globals.css`에서 관리합니다. 작은 화면에서는 메뉴가 접히고 카드가 한 열로 전환됩니다. 키보드 포커스, 본문 바로가기, 의미 있는 폼 라벨, 모달, reduced-motion을 지원합니다.

GitHub Actions에서 push/PR 시 `npm ci`, 타입 검사와 production build를 실행합니다. 별도 서버, 계정, 데이터베이스는 필요하지 않습니다.
