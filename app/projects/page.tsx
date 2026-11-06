import type { Metadata } from 'next';
import { PageHeading, SampleNote } from '@/components/ui';
import ProjectsExplorer from '@/components/projects-explorer';
export const metadata: Metadata = { title: '프로젝트' };
export default function ProjectsPage() {
  return <><PageHeading eyebrow="SELECTED WORK" title="만들어 온 것들." description="문제를 발견하고, 구조를 설계하고, 경험으로 완성하는 과정." aside={<span className="page-index">01 — 03</span>}/><SampleNote/><ProjectsExplorer/></>;
}
