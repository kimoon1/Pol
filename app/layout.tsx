import type { Metadata, Viewport } from "next";
import Shell from "@/components/shell";
import "pretendard/dist/web/variable/pretendardvariable-dynamic-subset.css";
import "@fontsource-variable/space-grotesk";
import "@fontsource-variable/jetbrains-mono";
import "./globals.css";
export const metadata: Metadata = {
  title: {
    default: "이기문 — Frontend Developer | pol.",
    template: "%s | pol.",
  },
  description:
    "React·Next.js·TypeScript 프론트엔드 개발자 이기문. 권한 기반 ERP 챗봇, 보안을 위한 업로드 서버 재구축, AI 광고 생성과 React 서비스 개발 경험을 소개합니다.",
  icons: { icon: "/icon.svg" },
};
export const viewport: Viewport = { width: "device-width", initialScale: 1 };
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body>
        <Shell>{children}</Shell>
      </body>
    </html>
  );
}
