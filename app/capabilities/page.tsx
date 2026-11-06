import type { Metadata } from 'next';
import { PageHeading } from '@/components/ui';
import FeaturePlayground from '@/components/feature-playground';
export const metadata: Metadata = { title: '구현 기능' };
export default function CapabilitiesPage() {
  return <><PageHeading eyebrow="CAPABILITIES & INTERACTIONS" title="기능에 담은 디테일." description="무엇을 만들 수 있는지, 직접 사용하며 확인해 보세요." aside={<span className="page-index">PLAY / EXPLORE</span>}/><FeaturePlayground/></>;
}
