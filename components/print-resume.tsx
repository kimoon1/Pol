"use client";
import { Printer } from "lucide-react";
export default function PrintResume() {
  return (
    <button
      className="button button-primary no-print"
      onClick={() => window.print()}
    >
      <Printer size={16} />
      인쇄 · PDF 저장
    </button>
  );
}
