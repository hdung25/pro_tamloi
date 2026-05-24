"use client";

import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";
import { useLanguage } from "@/context/language-context";

export function AboutIntro() {
  const { language, t } = useLanguage();

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="container-page grid items-center gap-10 md:grid-cols-2 md:gap-14">
        <Reveal direction="right">
          <div>
            <h2 className="font-serif text-3xl font-semibold text-[var(--color-brand)] md:text-4xl">
              {t("about.intro.tag")}
            </h2>
            <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-[var(--color-ink-muted)]">
              <p>{t("about.intro.p1")}</p>
              <p>{t("about.intro.p2")}</p>
              <p>{t("about.intro.p3")}</p>
            </div>
          </div>
        </Reveal>

        <Reveal direction="left" delay={150}>
          <div className="relative">
            <div className="overflow-hidden rounded-2xl shadow-lg transition-transform duration-500 hover:scale-[1.02]">
              <Image
                src="/images/factory.png"
                alt="Nhà máy Tâm Lợi Foods"
                width={1200}
                height={1000}
                className="h-[420px] w-full object-cover md:h-[480px]"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden w-36 flex-col overflow-hidden rounded-2xl bg-white shadow-xl ring-1 ring-[var(--color-cream-dark)] md:flex">
              <div className="flex flex-1 flex-col items-center justify-center px-4 pt-7 pb-5">
                <span className="font-mono text-lg sm:text-2xl md:text-xl lg:text-2xl xl:text-3xl font-bold tracking-tight text-[var(--color-brand)] leading-none">
                  30+
                </span>
              </div>
              <div className="bg-[var(--color-brand)] py-1.5 text-center leading-none">
                <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-white block">
                  {t("about.intro.badgeText")}
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
