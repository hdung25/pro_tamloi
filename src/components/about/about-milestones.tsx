"use client";

import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";
import { useLanguage } from "@/context/language-context";

type Milestone = {
  yearsKey: string;
  titleKey: string;
  descKey: string;
  image: string;
};

const MILESTONES: Milestone[] = [
  {
    yearsKey: "about.milestones.10years.years",
    titleKey: "about.milestones.10years.title",
    descKey: "about.milestones.10years.desc",
    image: "/images/factory.png",
  },
  {
    yearsKey: "about.milestones.12years.years",
    titleKey: "about.milestones.12years.title",
    descKey: "about.milestones.12years.desc",
    image: "/images/hero-com-chien.png",
  },
];

export function AboutMilestones() {
  const { t } = useLanguage();

  return (
    <section className="bg-white py-12 md:py-16">
      <div className="container-page grid gap-6 md:grid-cols-2">
        {MILESTONES.map((m, i) => (
          <Reveal key={m.yearsKey} direction="up" delay={i * 150}>
            <div className="group relative h-full overflow-hidden rounded-2xl bg-[var(--color-cream)] p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg md:p-8">
              <div className="relative z-10 max-w-[60%]">
                <div className="font-serif text-3xl font-bold text-[var(--color-brand)] md:text-4xl">
                  {t(m.yearsKey)}
                </div>
                <h3 className="mt-2 text-base font-semibold text-[var(--color-ink)] md:text-lg">
                  {t(m.titleKey)}
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-[var(--color-ink-muted)]">
                  {t(m.descKey)}
                </p>
              </div>
              <div className="absolute bottom-0 right-0 h-full w-2/5 opacity-90 transition-transform duration-500 group-hover:scale-105">
                <Image
                  src={m.image}
                  alt=""
                  fill
                  sizes="200px"
                  className="object-cover object-left"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(90deg, var(--color-cream) 0%, rgba(255,248,240,0.4) 50%, rgba(255,248,240,0) 100%)",
                  }}
                />
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
