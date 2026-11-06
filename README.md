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
| `/capabilities/` | 검색, 폼 검증, 수량 상태 관리, 차트, 공용 버튼, 반응형 레이아웃 데모 |
| `/about/` | 자기소개, 개발 가치관, 경력·학력, 증빙 자료, GitHub 연결 |

## 내 정보로 변경하기

**프로젝트, 역량, 자기소개 문구는 구성 예시입니다. 실제 경력이나 성과를 주장하지 않습니다.** GitHub 계정과 저장소 링크만 확인된 정보를 사용했습니다.

- `lib/portfolio.ts`: 프로필, 프로젝트 3개, 개발 영역 4개, 구현 기능 6개.
- `app/about/page.tsx`: 소개 문구, 실제 회사·기간·역할·학력으로 교체할 경력 영역.
- 증빙 자료는 아직 제공되지 않아 `등록 예정`으로 표시합니다. 개인정보를 검토한 PDF를 `public/documents/`에 추가한 후 해당 문서 행을 `<a href="/documents/resume.pdf" download>` 등으로 바꾸세요. 이 저장소는 공개 상태이므로 업로드하는 문서는 공개됩니다.
- 실제 프로젝트로 교체한 뒤 관련 샘플 표시를 함께 수정하세요. 통계 카드는 고정된 초기 구성 수치이므로 프로젝트 개수가 바뀌면 `app/page.tsx`도 수정하세요.
- 연락처는 제공되지 않았으므로 임의 이메일 대신 실제 GitHub 프로필을 연결했습니다.

## 공용 컴포넌트

- `components/shell.tsx`: 사이드바, 활성 메뉴, 모바일 메뉴, 헤더, 푸터.
- `components/ui.tsx`: Button 외 공용 Badge, 제목, 지표 카드, 빈 상태, 샘플 안내. 버튼은 `.button` 공용 클래스와 변형으로 구성합니다.
- `components/project-visual.tsx`: 외부 이미지에 의존하지 않는 CSS 프로젝트 목업.
- `components/projects-explorer.tsx`: 검색·필터와 네이티브 `<dialog>` 기반 상세 보기. 모달 포커스 관리, Escape 닫기를 지원합니다.
- `components/feature-playground.tsx`: 실제로 동작하는 클라이언트 데모. 입력 정보는 서버로 전송하거나 저장하지 않습니다.

## 디자인

Material 팔레트의 5개 원색만 사용합니다. 추가 강조·경계색은 아래 색상의 투명도로 표현합니다.

| 토큰 | 색상 |
| --- | --- |
| Primary / Blue A700 | `#2962FF` |
| Ink / Grey 900 | `#212121` |
| Muted / Grey 600 | `#757575` |
| Canvas / Grey 50 | `#FAFAFA` |
| Surface | `#FFFFFF` |

CSS 토큰과 공용 스타일은 `app/globals.css`에서 관리합니다. 작은 화면에서는 메뉴가 접히고 카드가 한 열로 전환됩니다. 키보드 포커스, 본문 바로가기, 의미 있는 폼 라벨, 모달, reduced-motion을 지원합니다.

GitHub Actions에서 push/PR 시 `npm ci`, 타입 검사와 production build를 실행합니다. 별도 서버, 계정, 데이터베이스는 필요하지 않습니다.
