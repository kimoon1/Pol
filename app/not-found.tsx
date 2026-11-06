import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
export default function NotFound(){return <div className="not-found"><span className="eyebrow">404 / PAGE NOT FOUND</span><h1>잠깐, 길을 벗어났네요.</h1><p>요청한 페이지를 찾을 수 없습니다.</p><Link href="/" className="button button-primary"><ArrowLeft size={16}/>대시보드로 돌아가기</Link></div>;}
