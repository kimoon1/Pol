"use client";

import { useEffect, useRef, useState } from "react";
import { Copy, Check } from "lucide-react";

export default function CopyProfile({
  value = "https://github.com/kimoon1",
  label = "GitHub 주소 복사",
}: {
  value?: string;
  label?: string;
}) {
  const [state, setState] = useState<"idle" | "copied" | "error">("idle");
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => () => clearTimeout(timer.current), []);

  async function copy() {
    clearTimeout(timer.current);
    try {
      await navigator.clipboard.writeText(value);
      setState("copied");
      timer.current = setTimeout(() => setState("idle"), 2500);
    } catch {
      setState("error");
    }
  }

  return (
    <div className="copy-contact">
      <button className="button button-secondary" onClick={copy}>
        {state === "copied" ? <Check size={15} /> : <Copy size={15} />}
        {state === "copied" ? "복사했어요" : label}
      </button>
      <span className="copy-status" role="status">
        {state === "copied" && "주소가 복사되었습니다."}
        {state === "error" && `직접 복사해 주세요: ${value}`}
      </span>
    </div>
  );
}
