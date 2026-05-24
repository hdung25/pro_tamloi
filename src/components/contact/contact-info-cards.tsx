"use client";

import { Reveal } from "@/components/ui/reveal";
import { useLanguage } from "@/context/language-context";

type Info = { 
  titleVi: string; 
  titleEn: string;
  linesVi: string[]; 
  linesEn: string[]; 
  icon: React.ReactNode 
};

const I = "h-6 w-6 text-[var(--color-brand)]";

const INFOS: Info[] = [
  {
    titleVi: "Địa chỉ",
    titleEn: "Address",
    linesVi: ["377A Long Bình, Ấp Long Bình,", "Xã Mỹ Yên, Tỉnh Tây Ninh, Việt Nam"],
    linesEn: ["377A Long Binh, Long Binh Hamlet,", "My Yen Commune, Tay Ninh Province, Vietnam"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={I} aria-hidden>
        <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0Z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    titleVi: "Hotline",
    titleEn: "Hotline",
    linesVi: ["0915 015 115", "0272 363 1665"],
    linesEn: ["0915 015 115", "0272 363 1665"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={I} aria-hidden>
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92Z" />
      </svg>
    ),
  },
  {
    titleVi: "Email",
    titleEn: "Email",
    linesVi: ["info@tamloi.com"],
    linesEn: ["info@tamloi.com"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={I} aria-hidden>
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-10 7L2 7" />
      </svg>
    ),
  },
  {
    titleVi: "Giờ làm việc",
    titleEn: "Working Hours",
    linesVi: ["Thứ 2 - Thứ 7: 7:30 - 17:00", "Chủ nhật: nghỉ"],
    linesEn: ["Monday - Saturday: 7:30 AM - 5:00 PM", "Sunday: Closed"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={I} aria-hidden>
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
  },
];

export function ContactInfoCards() {
  const { language } = useLanguage();

  return (
    <section className="bg-white py-10 md:py-12">
      <div className="container-page grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-5">
        {INFOS.map((info, i) => {
          const title = language === "vi" ? info.titleVi : info.titleEn;
          const lines = language === "vi" ? info.linesVi : info.linesEn;
          return (
            <Reveal key={info.titleVi} direction="up" delay={i * 100}>
              <div className="flex h-full flex-col rounded-xl bg-white p-5 shadow-sm ring-1 ring-[var(--color-line)] transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--color-cream)] ring-1 ring-[var(--color-cream-dark)]">
                  {info.icon}
                </div>
                <h3 className="mt-3 text-[13px] font-bold uppercase tracking-wide text-[var(--color-brand)]">
                  {title}
                </h3>
                <ul className="mt-2 space-y-1 text-[13px] leading-snug text-[var(--color-ink)]">
                  {lines.map((l) => (
                    <li key={l}>{l}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
