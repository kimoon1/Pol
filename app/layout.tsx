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
    "React·Next.js·TypeScript 프론트엔드 개발자 이기문. ERP 챗봇 화면, 운영 중인 React 전환과 쇼핑몰 인증·결제 흐름을 중심으로 API와 서비스 운영까지 연결한 경험을 소개합니다.",
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
