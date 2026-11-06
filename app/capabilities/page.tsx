import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Badge, PageHeading, SectionHeading } from '@/components/ui';
import FeaturePlayground from '@/components/feature-playground';
import { implementedFeatures } from '@/lib/portfolio';
export const metadata: Metadata = { title: '구현 기능' };
export default function CapabilitiesPage() {
  return <><PageHeading eyebrow="CAPABILITIES & IMPLEMENTATION" title="기능에 담은 실무 경험." description="사용자의 화면부터 데이터 흐름과 서버 구조까지, 직접 구현한 영역을 소개합니다." aside={<span className="page-index">BUILD / CONNECT / IMPROVE</span>}/>
    <section aria-label="실무 구현 기능" className="implemented-grid">{implementedFeatures.map((f,i)=><article className="panel implemented-card" key={f.title}><div className="implemented-card-top"><span className="eyebrow">{f.category}</span><span>0{i+1}</span></div><h2>{f.title}</h2><p>{f.description}</p><div className="tech-tags">{f.tags.map(t=><Badge key={t}>{t}</Badge>)}</div><Link className="text-link" href={`/projects/?project=${f.project}`}>관련 프로젝트 보기<ArrowUpRight size={14}/></Link></article>)}</section>
    <section className="ui-demo-section"><SectionHeading title="작은 인터랙션도 직접 살펴보세요." subtitle="포트폴리오용 UI 데모입니다. 실서비스 데이터, 인증·결제, AI 백엔드는 연결하지 않았습니다."/><FeaturePlayground/></section>
  </>;
}
