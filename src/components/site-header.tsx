import Link from "next/link";
import { BrandLogo } from "./brand-logo";

const NAV_ITEMS = [
  { href: "/ve-chung-toi", label: "VỀ CHÚNG TÔI" },
  { href: "/san-pham", label: "SẢN PHẨM VIÊN" },
  { href: "/trang-mieng", label: "TRÁNG MIỆNG" },
  { href: "/blog", label: "BLOG" },
  { href: "/lien-he", label: "LIÊN HỆ" },
];

function FlagVN() {
  return (
    <svg viewBox="0 0 30 20" className="h-5 w-7 rounded-sm shadow-sm" aria-label="Tiếng Việt">
      <rect width="30" height="20" fill="#DA251D" />
      <polygon
        points="15,5 16.18,8.64 20,8.64 16.91,10.86 18.09,14.5 15,12.28 11.91,14.5 13.09,10.86 10,8.64 13.82,8.64"
        fill="#FFFF00"
      />
    </svg>
  );
}

function FlagEN() {
  return (
    <svg viewBox="0 0 60 30" className="h-5 w-7 rounded-sm shadow-sm opacity-50" aria-label="English">
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
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-line)] bg-white/95 backdrop-blur transition-shadow duration-300">
      <div className="container-page flex h-16 items-center justify-between gap-6">
        <BrandLogo />

        <nav className="hidden items-center gap-7 text-[13px] font-semibold tracking-wide text-[var(--color-ink)] lg:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="nav-link transition-colors hover:text-[var(--color-brand)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button type="button" aria-label="Tiếng Việt" className="rounded-sm transition-transform hover:scale-110">
            <FlagVN />
          </button>
          <button type="button" aria-label="English" className="rounded-sm transition-all hover:scale-110 hover:opacity-100">
            <FlagEN />
          </button>
        </div>
      </div>
    </header>
  );
}
