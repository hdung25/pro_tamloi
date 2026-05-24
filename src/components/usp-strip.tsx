"use client";

import { Reveal } from "@/components/ui/reveal";
import { useLanguage } from "@/context/language-context";

type UspItem = {
  titleKey: string;
  descKey: string;
  icon: React.ReactNode;
};

const ICON_CLASS = "h-7 w-7 text-[var(--color-brand)]";

const ITEMS: UspItem[] = [
  {
    titleKey: "home.usp.ingredient.title",
    descKey: "home.usp.ingredient.desc",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={ICON_CLASS} aria-hidden>
        <path d="M12 2v20" />
        <path d="M5 8c0-3 3-6 7-6 0 4-3 7-7 6Z" />
        <path d="M19 8c0-3-3-6-7-6 0 4 3 7 7 6Z" />
        <path d="M5 14c0-3 3-6 7-6 0 4-3 7-7 6Z" />
        <path d="M19 14c0-3-3-6-7-6 0 4 3 7 7 6Z" />
      </svg>
    ),
  },
  {
    titleKey: "home.usp.safety.title",
    descKey: "home.usp.safety.desc",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={ICON_CLASS} aria-hidden>
        <path d="M12 2 4 6v6c0 5 3.5 8.5 8 10 4.5-1.5 8-5 8-10V6l-8-4Z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    titleKey: "home.usp.convenience.title",
    descKey: "home.usp.convenience.desc",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={ICON_CLASS} aria-hidden>
        <path d="M3 11h18l-2 9H5l-2-9Z" />
        <path d="M7 11V8a5 5 0 0 1 10 0v3" />
      </svg>
    ),
  },
  {
    titleKey: "home.usp.community.title",
    descKey: "home.usp.community.desc",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={ICON_CLASS} aria-hidden>
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78Z" />
      </svg>
    ),
  },
];

export function UspStrip() {
  const { t } = useLanguage();

  return (
    <section className="bg-[var(--color-cream)] py-7">
      <div className="container-page grid grid-cols-2 gap-6 md:grid-cols-4">
        {ITEMS.map((item, i) => (
          <Reveal key={item.titleKey} direction="up" delay={i * 80}>
            <div className="flex items-start gap-3">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-[var(--color-cream-dark)] transition-transform duration-300 hover:scale-110">
                {item.icon}
              </div>
              <div className="min-w-0">
                <div className="text-[11px] font-bold tracking-wide text-[var(--color-ink)] uppercase">
                  {t(item.titleKey)}
                </div>
                <p className="mt-1 text-[11px] leading-snug text-[var(--color-ink-muted)]">
                  {t(item.descKey)}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
