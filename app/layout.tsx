import type { Metadata, Viewport } from 'next';
import Shell from '@/components/shell';
import './globals.css';
export const metadata: Metadata = {
  title: { default: '이기문 — Full-stack Developer | pol.', template: '%s | pol.' },
  description: 'Next.js·NestJS·FastAPI 기반 풀스택 개발자 이기문의 포트폴리오. ERP AI 챗봇, 업로드 인프라, 쇼핑몰, Flutter 앱 개발 경험을 소개합니다.',
  icons: { icon: '/icon.svg' },
};
export const viewport: Viewport = { width: 'device-width', initialScale: 1 };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ko"><body><Shell>{children}</Shell></body></html>;
}
