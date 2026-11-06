import { ArrowDown, ArrowUpRight, Code2, Database, Layers, Smartphone, Check, Workflow } from 'lucide-react';
import type { Project } from '@/lib/portfolio';
export default function ProjectVisual({ project, large = false }: { project: Project; large?: boolean }) {
  const Icon = project.kind === 'mobile' ? Smartphone : project.kind === 'system' ? Database : project.kind === 'commerce' ? Layers : Workflow;
  return <div className={`project-visual case-visual case-${project.kind} ${large ? 'visual-large' : ''}`} aria-hidden="true">
    <div className="case-grid"/><div className="case-frame"><div className="case-frame-top"><span><Icon size={13}/>{project.category.toUpperCase()} / {project.number}</span><Code2 size={13}/></div><div className="case-title"><span>{project.company}</span><strong>{project.name}</strong><ArrowUpRight size={24}/></div><div className="case-flow">{project.visualSteps.map((step,i)=><div className="case-step-wrap" key={step}><div className="case-step"><span>0{i+1}</span><strong>{step}</strong>{i===2&&<Check size={13}/>}</div>{i<project.visualSteps.length-1&&<ArrowDown size={12}/>}</div>)}</div><div className="case-tech">{project.stack.slice(0,3).map(t=><span key={t}>{t}</span>)}</div></div><span className="case-visual-note">구성 개념도</span>
  </div>;
}
