import type { Metadata, Viewport } from 'next';
import Shell from '@/components/shell';
import './globals.css';
export const metadata: Metadata = {
  title: { default: 'pol. — Developer Portfolio', template: '%s | pol.' },
  description: '개발 역량, 프로젝트, 구현 기능을 한눈에 살펴보는 kimoon1의 포트폴리오. 현재 프로젝트와 이력은 편집용 예시입니다.',
  icons: { icon: '/icon.svg' },
};
export const viewport: Viewport = { width: 'device-width', initialScale: 1 };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ko"><body><Shell>{children}</Shell></body></html>;
}
