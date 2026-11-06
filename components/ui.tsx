import Link from 'next/link';
import { ArrowUpRight, type LucideIcon } from 'lucide-react';
import type { ReactNode } from 'react';

export function Badge({ children, blue = false }: { children: ReactNode; blue?: boolean }) {
  return <span className={`badge ${blue ? 'badge-blue' : ''}`}>{children}</span>;
}
export function PageHeading({ eyebrow, title, description, aside }: { eyebrow: string; title: string; description: string; aside?: ReactNode }) {
  return <div className="page-heading"><div><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p className="page-description">{description}</p></div>{aside}</div>;
}
export function SectionHeading({ title, subtitle, href, linkText = '전체 보기' }: { title: string; subtitle?: string; href?: string; linkText?: string }) {
  return <div className="section-heading"><div><h2>{title}</h2>{subtitle && <p>{subtitle}</p>}</div>{href && <Link className="text-link" href={href}>{linkText}<ArrowUpRight size={15}/></Link>}</div>;
}
export function MetricCard({ icon: Icon, value, label, detail }: { icon: LucideIcon; value: string; label: string; detail: string }) {
  return <div className="metric-card"><div className="metric-top"><span>{label}</span><Icon size={19}/></div><div className="metric-value">{value}<span>{detail}</span></div></div>;
}
export function EmptyState({ title, description }: { title: string; description: string }) {
  return <div className="empty-state"><span className="empty-symbol">↳</span><h3>{title}</h3><p>{description}</p></div>;
}
export function SampleNote({ compact = false }: { compact?: boolean }) {
  return <p className={`sample-note ${compact ? 'compact' : ''}`}><span/>샘플 콘텐츠{!compact && ' · 프로젝트와 역량은 구성 예시이며, 실제 이력으로 교체할 수 있습니다.'}</p>;
}
