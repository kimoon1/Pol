'use client';
import { useState } from 'react';
import { Copy, Check } from 'lucide-react';
export default function CopyProfile() {
  const [state,setState]=useState<'idle'|'copied'|'error'>('idle');
  async function copy(){try{await navigator.clipboard.writeText('https://github.com/kimoon1');setState('copied');}catch{setState('error');}}
  return <div><button className="button button-secondary" onClick={copy}>{state==='copied'?<Check size={15}/>:<Copy size={15}/>} {state==='copied'?'복사했어요':'GitHub 주소 복사'}</button><span className="copy-status" role="status">{state==='error'?'주소를 직접 복사해 주세요: https://github.com/kimoon1':''}</span></div>;
}
