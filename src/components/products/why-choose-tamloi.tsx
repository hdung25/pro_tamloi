"use client";

import { Reveal } from "@/components/ui/reveal";
import { useLanguage } from "@/context/language-context";

type Item = {
  titleKey: string;
  descKey: string;
  icon: React.ReactNode;
};

const I = "h-6 w-6 text-[var(--color-brand)]";

const ITEMS: Item[] = [
  {
    titleKey: "home.usp.ingredient.title",
    descKey: "home.usp.ingredient.desc",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={I} aria-hidden>
        <path d="M12 2v20" />
        <path d="M5 8c0-3 3-6 7-6 0 4-3 7-7 6Z" />
        <path d="M19 8c0-3-3-6-7-6 0 4 3 7 7 6Z" />
      </svg>
    ),
  },
  {
    titleKey: "home.usp.safety.title",
    descKey: "home.usp.safety.desc",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={I} aria-hidden>
        <path d="M12 2 4 6v6c0 5 3.5 8.5 8 10 4.5-1.5 8-5 8-10V6l-8-4Z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    titleKey: "home.usp.convenience.title",
    descKey: "home.usp.convenience.desc",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={I} aria-hidden>
        <path d="M3 11h18l-2 9H5l-2-9Z" />
        <path d="M7 11V8a5 5 0 0 1 10 0v3" />
      </svg>
    ),
  },
  {
    titleKey: "home.usp.community.title",
    descKey: "home.usp.community.desc",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={I} aria-hidden>
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78Z" />
      </svg>
    ),
  },
];

export function WhyChooseTamLoi() {
  const { language, t } = useLanguage();

  return (
    <section className="bg-[var(--color-cream)] py-14 md:py-16">
      <div className="container-page">
        <Reveal>
          <h2 className="text-center font-serif text-2xl font-semibold text-[var(--color-brand)] md:text-3xl">
            {language === "vi" ? "Vì sao chọn Tâm Lợi Foods?" : "Why Choose Tam Loi Foods?"}
          </h2>
        </Reveal>

        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-5">
          {ITEMS.map((it, i) => (
            <Reveal key={it.titleKey} direction="up" delay={i * 100}>
              <div className="flex h-full flex-col items-center rounded-xl bg-white p-5 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-cream)] ring-1 ring-[var(--color-cream-dark)]">
                  {it.icon}
                </div>
                <h3 className="mt-3 text-[14px] font-semibold text-[var(--color-ink)] uppercase">
                  {t(it.titleKey)}
                </h3>
                <p className="mt-1.5 text-[12px] leading-snug text-[var(--color-ink-muted)]">
                  {t(it.descKey)}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
