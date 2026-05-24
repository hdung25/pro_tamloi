"use client";

import { Reveal } from "@/components/ui/reveal";
import { CountUp } from "@/components/ui/count-up";
import { useLanguage } from "@/context/language-context";

type Animate = {
  to: number;
  from?: number;
  suffix?: string;
  separator?: string;
};

type Stat = {
  labelKey: string;
  value?: string;
  animate?: Animate;
};

const STATS: Stat[] = [
  {
    labelKey: "about.stats.1987",
    animate: { to: 1987, from: 1900, separator: "" },
  },
  {
    labelKey: "about.stats.25000",
    animate: { to: 25000, suffix: "+", separator: "." },
  },
  {
    labelKey: "about.stats.iso",
    value: "ISO 22000:2018",
  },
  {
    labelKey: "about.stats.500",
    animate: { to: 500, suffix: "+", separator: "" },
  },
];

export function AboutStats() {
  const { t } = useLanguage();

  return (
    <section className="bg-[var(--color-cream)] py-12">
      <div className="container-page grid grid-cols-2 gap-6 md:grid-cols-4">
        {STATS.map((s, i) => (
          <Reveal key={s.labelKey} direction="up" delay={i * 100}>
            <div className="flex h-full flex-col items-center justify-center rounded-xl bg-white px-2 py-6 sm:px-3 text-center shadow-sm ring-1 ring-[var(--color-cream-dark)] transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
              <div className="whitespace-nowrap font-mono font-bold text-lg sm:text-2xl md:text-xl lg:text-2xl xl:text-3xl tracking-tight text-[var(--color-brand)] leading-none">
                {s.animate ? (
                  <CountUp
                    to={s.animate.to}
                    from={s.animate.from ?? 0}
                    suffix={s.animate.suffix ?? ""}
                    separator={s.animate.separator ?? "."}
                  />
                ) : (
                  s.value
                )}
              </div>
              <div className="mt-3 text-[12px] leading-snug text-[var(--color-ink-muted)] md:text-[13px]">
                {t(s.labelKey)}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
