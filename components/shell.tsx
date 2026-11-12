"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Github, Menu, X, Command } from "lucide-react";
import { profile } from "@/lib/portfolio";

const links = [
  { href: "/projects/", label: "프로젝트" },
  { href: "/capabilities/", label: "기술별 경험" },
  { href: "/about/", label: "소개 · 경력" },
  { href: "/resume/", label: "경력 요약" },
];

export default function Shell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const menuButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);
  useEffect(() => {
    const menu = dialog.current;
    if (!open || !menu) return;
    menu.showModal();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const closeOnDesktop = () => {
      if (window.innerWidth >= 900) setOpen(false);
    };
    window.addEventListener("resize", closeOnDesktop);
    return () => {
      menu.close();
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("resize", closeOnDesktop);
      if (window.innerWidth < 900) menuButton.current?.focus();
    };
  }, [open]);

  const isCurrent = (href: string) => pathname.startsWith(href.slice(0, -1));
  const navigationLinks = links.map(({ href, label }) => (
    <Link
      key={href}
      href={href}
      aria-current={isCurrent(href) ? "page" : undefined}
      onClick={() => setOpen(false)}
    >
      {label}
      <ArrowUpRight size={16} aria-hidden="true" />
    </Link>
  ));

  return (
    <div className="editorial-shell">
      <a className="skip-link" href="#main">
        본문으로 바로가기
      </a>
      <header className="portfolio-header">
        <div className="portfolio-header-inner">
          <Link
            href="/"
            className="pol-brand"
            aria-label="pol. 홈"
            aria-current={pathname === "/" ? "page" : undefined}
          >
            <span className="pol-symbol">
              <Command size={21} aria-hidden="true" />
            </span>
            <span className="pol-wordmark">
              pol<span>.</span>
            </span>
            <span className="pol-signature">
              {profile.name}
              <span>FRONTEND DEVELOPER</span>
            </span>
          </Link>
          <nav className="desktop-site-nav" aria-label="주 메뉴">
            {navigationLinks}
          </nav>
          <div className="header-contact">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="icon-button"
              aria-label="GitHub 둘러보기"
            >
              <Github size={19} />
            </a>
            <a className="header-email" href={`mailto:${profile.email}`}>
              함께 이야기해요 <ArrowUpRight size={16} />
            </a>
          </div>
          <button
            ref={menuButton}
            className="icon-button editorial-menu-toggle"
            aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
            aria-expanded={open}
            aria-controls="mobile-site-navigation"
            onClick={() => setOpen(!open)}
          >
            <Menu size={23} />
          </button>
        </div>
      </header>
      <main id="main" className="main-content editorial-content" tabIndex={-1}>
        {children}
      </main>
      <footer className="portfolio-footer">
        <span>
          © {new Date().getFullYear()} {profile.name}
        </span>
        <span className="footer-motto">BUILD. CONNECT. IMPROVE.</span>
        <a href={profile.repository} target="_blank" rel="noreferrer">
          이 사이트의 코드 <ArrowUpRight size={15} />
        </a>
      </footer>
      <dialog
        ref={dialog}
        id="mobile-site-navigation"
        className="mobile-site-menu"
        aria-label="사이트 메뉴"
        onCancel={() => setOpen(false)}
        onClick={(event) => {
          if (event.target === event.currentTarget) setOpen(false);
        }}
      >
        <div className="mobile-menu-heading">
          <span className="eyebrow">EXPLORE / PORTFOLIO</span>
          <button
            className="icon-button"
            aria-label="메뉴 닫기"
            onClick={() => setOpen(false)}
          >
            <X size={23} />
          </button>
        </div>
        <nav aria-label="모바일 메뉴">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            aria-current={pathname === "/" ? "page" : undefined}
          >
            홈 <ArrowUpRight size={17} />
          </Link>
          {navigationLinks}
        </nav>
        <a className="mobile-menu-email" href={`mailto:${profile.email}`}>
          {profile.email} <ArrowUpRight size={17} />
        </a>
      </dialog>
    </div>
  );
}
