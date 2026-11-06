import type { Metadata } from 'next';
import { PageHeading, SourceNote } from '@/components/ui';
import { projects } from '@/lib/portfolio';
import ProjectsExplorer from '@/components/projects-explorer';
export const metadata: Metadata = { title: '프로젝트' };
export default function ProjectsPage() {
  return <><PageHeading eyebrow="SELECTED WORK" title="만들어 온 것들." description="ERP·인프라·쇼핑몰·모바일 앱. 역할과 구현 내용을 중심으로 정리한 실무 경험." aside={<span className="page-index">01 — {String(projects.length).padStart(2,'0')}</span>}/><SourceNote/><ProjectsExplorer/></>;
}
