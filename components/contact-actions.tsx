import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";
import { profile } from "@/lib/portfolio";
import CopyProfile from "./copy-profile";

export default function ContactActions() {
  return (
    <div className="contact-actions">
      <a href={`mailto:${profile.email}`} className="button button-primary">
        <Mail size={17} aria-hidden="true" />
        이메일 보내기
      </a>
      <CopyProfile value={profile.email} label="이메일 주소 복사" />
      <Link href="/resume/" className="text-link">
        경력 요약 보기
        <ArrowUpRight size={15} aria-hidden="true" />
      </Link>
    </div>
  );
}
