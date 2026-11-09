"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import {
  LayoutDashboard,
  FolderKanban,
  Blocks,
  UserRound,
  ArrowUpRight,
  Github,
  Menu,
  X,
  ChevronRight,
  Command,
  FileText,
} from "lucide-react";
import { profile } from "@/lib/portfolio";
const links = [
  { href: "/", label: "홈", en: "Overview", icon: LayoutDashboard },
  { href: "/projects/", label: "프로젝트", en: "Projects", icon: FolderKanban },
  {
    href: "/capabilities/",
    label: "구현 기능",
    en: "Capabilities",
    icon: Blocks,
  },
  { href: "/resume/", label: "경력 요약", en: "Resume", icon: FileText },
  { href: "/about/", label: "소개 · 경력", en: "About me", icon: UserRound },
];
export default function Shell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const navigation = useRef<HTMLElement>(null);
  const menuButton = useRef<HTMLButtonElement>(null);
  const current = links.find(
    (l) =>
      l.href === pathname ||
      (l.href !== "/" && pathname.startsWith(l.href.slice(0, -1))),
  );
  useEffect(() => {
    setOpen(false);
  }, [pathname]);
  useEffect(() => {
    if (!open) return;
    const sidebar = navigation.current;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const items = () =>
      Array.from(
        sidebar?.querySelectorAll<HTMLElement>("a[href], button") ?? [],
      );
    items()[0]?.focus();
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
      if (event.key !== "Tab") return;
      const elements = items();
      const first = elements[0];
      const last = elements[elements.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    };
    const resize = () => {
      if (window.innerWidth > 640) setOpen(false);
    };
    window.addEventListener("keydown", close);
    window.addEventListener("resize", resize);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", close);
      window.removeEventListener("resize", resize);
      if (sidebar?.contains(document.activeElement))
        menuButton.current?.focus();
    };
  }, [open]);
  return (
    <div className="app-shell">
      <a className="skip-link" href="#main">
        본문으로 바로가기
      </a>
      {open && (
        <button
          className="mobile-overlay"
          aria-label="메뉴 닫기"
          onClick={() => setOpen(false)}
        />
      )}
      <aside
        ref={navigation}
        id="site-navigation"
        className={`sidebar ${open ? "is-open" : ""}`}
      >
        <button
          className="icon-button sidebar-close"
          aria-label="메뉴 닫기"
          onClick={() => setOpen(false)}
        >
          <X size={21} />
        </button>
        <Link href="/" className="brand" aria-label="pol. 홈">
          <span className="brand-mark">
            <Command size={20} />
          </span>
          <span>
            pol<span className="brand-dot">.</span>
          </span>
          <span className="brand-caption">PORTFOLIO</span>
        </Link>
        <p className="nav-caption">PORTFOLIO</p>
        <nav aria-label="주 메뉴">
          {links.map(({ href, label, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className={`nav-item ${current?.href === href ? "active" : ""}`}
              aria-current={current?.href === href ? "page" : undefined}
            >
              <Icon size={19} />
              <span>{label}</span>
              {current?.href === href && <span className="nav-active-dot" />}
            </Link>
          ))}
        </nav>
        <div className="sidebar-note">
          <span className="tiny-label">BUILDING WITH PURPOSE</span>
          <p>
            좋은 경험은
            <br />
            작은 디테일에서.
          </p>
          <div className="sidebar-note-line" />
          <span>Code. Create. Refine.</span>
        </div>
        <div className="sidebar-bottom">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="github-link"
          >
            <Github size={18} />
            <span>GitHub 둘러보기</span>
            <ArrowUpRight size={15} />
          </a>
          <div className="sidebar-profile">
            <div className="avatar">
              K<span />
            </div>
            <div>
              <strong>{profile.name}</strong>
              <span>{profile.title}</span>
            </div>
          </div>
        </div>
      </aside>
      <div className="main-wrap" inert={open || undefined}>
        <header className="topbar">
          <div className="breadcrumb">
            <button
              ref={menuButton}
              className="icon-button menu-toggle"
              aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
              aria-controls="site-navigation"
              aria-expanded={open}
              onClick={() => setOpen(!open)}
            >
              {open ? <X size={21} /> : <Menu size={21} />}
            </button>
            <span>Portfolio</span>
            <ChevronRight size={13} />
            <strong>{current?.en ?? "Overview"}</strong>
          </div>
          <div className="topbar-actions">
            <span className="preview-label">
              <span />
              {profile.title}
            </span>
            <a
              className="icon-button"
              aria-label="GitHub 저장소 열기"
              href={profile.repository}
              target="_blank"
              rel="noreferrer"
            >
              <Github size={19} />
            </a>
            <div className="topbar-avatar">K</div>
          </div>
        </header>
        <main id="main" className="main-content" tabIndex={-1}>
          {children}
        </main>
        <footer>
          <span>© {new Date().getFullYear()} kimoon1 · Built with care.</span>
          <span>
            Next.js <span className="footer-dot">·</span> TypeScript{" "}
            <span className="footer-dot">·</span> A little attention to detail{" "}
            <ArrowUpRight size={12} />
          </span>
        </footer>
      </div>
    </div>
  );
}
