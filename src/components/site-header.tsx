"use client";

import Link from "next/link";
import { BrandLogo } from "./brand-logo";
import { useLanguage } from "@/context/language-context";

function FlagVN({ active }: { active: boolean }) {
  return (
    <svg 
      viewBox="0 0 30 20" 
      className={`h-5 w-7 rounded-sm shadow-sm transition-all ${active ? 'opacity-100 ring-2 ring-[var(--color-brand)] ring-offset-1 scale-105' : 'opacity-40 hover:opacity-80'}`} 
      aria-label="Tiếng Việt"
    >
      <rect width="30" height="20" fill="#DA251D" />
      <polygon
        points="15,5 16.18,8.64 20,8.64 16.91,10.86 18.09,14.5 15,12.28 11.91,14.5 13.09,10.86 10,8.64 13.82,8.64"
        fill="#FFFF00"
      />
    </svg>
  );
}

function FlagEN({ active }: { active: boolean }) {
  return (
    <svg 
      viewBox="0 0 60 30" 
      className={`h-5 w-7 rounded-sm shadow-sm transition-all ${active ? 'opacity-100 ring-2 ring-[var(--color-brand)] ring-offset-1 scale-105' : 'opacity-40 hover:opacity-80'}`} 
      aria-label="English"
    >
      <clipPath id="t">
        <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z" />
      </clipPath>
      <path d="M0,0 v30 h60 v-30 z" fill="#012169" />
      <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
      <path d="M0,0 L60,30 M60,0 L0,30" clipPath="url(#t)" stroke="#C8102E" strokeWidth="4" />
      <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10" />
      <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6" />
    </svg>
  );
}

export function SiteHeader() {
  const { language, setLanguage, t } = useLanguage();

  const navItems = [
    { href: "/ve-chung-toi", label: t("nav.about") },
    { href: "/san-pham", label: t("nav.products") },
    { href: "/trang-mieng", label: t("nav.desserts") },
    { href: "/blog", label: t("nav.blog") },
    { href: "/lien-he", label: t("nav.contact") },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-line)] bg-white/95 backdrop-blur transition-shadow duration-300">
      <div className="container-page flex h-16 items-center justify-between gap-6">
        <BrandLogo />

        <nav className="hidden items-center gap-7 text-[13px] font-semibold tracking-wide text-[var(--color-ink)] lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="nav-link transition-colors hover:text-[var(--color-brand)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button 
            type="button" 
            aria-label="Tiếng Việt" 
            className="focus:outline-none"
            onClick={() => setLanguage("vi")}
          >
            <FlagVN active={language === "vi"} />
          </button>
          <button 
            type="button" 
            aria-label="English" 
            className="focus:outline-none"
            onClick={() => setLanguage("en")}
          >
            <FlagEN active={language === "en"} />
          </button>
        </div>
      </div>
    </header>
  );
}
