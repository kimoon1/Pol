'use client';
import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Search, X, Check, FolderKanban } from 'lucide-react';
import { projects, type Project } from '@/lib/portfolio';
import { Badge, EmptyState } from './ui';
import ProjectVisual from './project-visual';
const filters = ['전체', 'Web', 'Platform', 'UI System'];
export default function ProjectsExplorer() {
  const [filter, setFilter] = useState('전체');
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState<Project | null>(null);
  const modal = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const id = new URLSearchParams(window.location.search).get('project');
    if (id) setSelected(projects.find(p => p.id === id) ?? null);
  }, []);
  useEffect(() => {
    const dialog = modal.current;
    if (selected && dialog && !dialog.open) dialog.showModal();
    else if (!selected && dialog?.open) dialog.close();
    if (selected) document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, [selected]);
  const filtered = projects.filter(p => (filter === '전체' || p.category === filter) && `${p.name} ${p.subtitle} ${p.stack.join(' ')} ${p.features.join(' ')}`.toLowerCase().includes(query.trim().toLowerCase()));
  return <><div className="explorer-toolbar"><div className="filter-tabs" aria-label="프로젝트 분류">{filters.map(f=><button key={f} onClick={()=>setFilter(f)} aria-pressed={filter===f} className={filter===f?'selected':''}>{f}{f==='전체'&&<span>{projects.length}</span>}</button>)}</div><label className="search-field"><Search size={17}/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="프로젝트, 기술 검색" aria-label="프로젝트, 기술 검색"/>{query&&<button aria-label="검색어 지우기" onClick={()=>setQuery('')}><X size={14}/></button>}</label></div>
    <p className="result-count" role="status">{filtered.length}개의 프로젝트 <span>· 구성 예시</span></p>
    {filtered.length ? <div className="projects-grid">{filtered.map(p=><button className="project-card" key={p.id} onClick={()=>setSelected(p)} aria-label={`${p.name} 상세 보기`}><ProjectVisual kind={p.kind}/><div className="project-card-content"><div className="project-meta"><Badge blue={p.category==='Platform'}>{p.category}</Badge><span>PROJECT {p.number}</span></div><h2>{p.name}<ArrowUpRight size={21}/></h2><p>{p.subtitle}</p><div className="tech-tags">{p.stack.map(t=><Badge key={t}>{t}</Badge>)}</div><div className="project-card-bottom"><span>샘플 프로젝트</span><span>자세히 보기<ArrowUpRight size={14}/></span></div></div></button>)}</div> : <EmptyState title="일치하는 프로젝트가 없어요" description="다른 검색어를 입력하거나 분류를 변경해 보세요."/>}
    <div className="project-process panel"><div><FolderKanban size={22}/><h2>문제에서 시작해, 경험으로 완성합니다.</h2></div><div className="process-steps">{[['01','문제 정의','무엇을 해결할 것인가'],['02','구조 설계','어떻게 연결할 것인가'],['03','구현과 검증','제대로 작동하는가']].map(([n,title,desc])=><div key={n}><span>{n}</span><div><h3>{title}</h3><p>{desc}</p></div></div>)}</div></div>
    <dialog ref={modal} className="project-dialog" aria-labelledby="project-dialog-title" onCancel={()=>setSelected(null)} onClose={()=>setSelected(null)} onClick={e=>{if(e.target===e.currentTarget)setSelected(null);}}>{selected&&<div className="dialog-inner"><div className="dialog-top"><span className="eyebrow">PROJECT {selected.number} / SAMPLE CASE STUDY</span><button autoFocus className="icon-button" aria-label="상세 보기 닫기" onClick={()=>setSelected(null)}><X size={21}/></button></div><ProjectVisual kind={selected.kind}/><div className="dialog-content"><Badge blue>{selected.category}</Badge><h2 id="project-dialog-title">{selected.name}</h2><p className="dialog-subtitle">{selected.subtitle}</p><p>{selected.description}</p><div className="dialog-info"><div><small>프로젝트 구분</small><strong>포트폴리오 구성 예시</strong></div><div><small>진행 기간</small><strong>{selected.period}</strong></div></div><h3>문제 정의</h3><p>{selected.challenge}</p><h3>구현 방향</h3><p>{selected.solution}</p><h3>핵심 기능</h3><ul className="check-list">{selected.features.map(f=><li key={f}><Check size={16}/>{f}</li>)}</ul><div className="tech-tags">{selected.stack.map(t=><Badge key={t}>{t}</Badge>)}</div><p className="dialog-disclaimer">이 사례는 편집용 샘플입니다. 실제 수행 내용, 기여도, 결과와 링크를 등록해 완성하세요.</p></div></div>}</dialog>
  </>;
}
