"use client";

import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";
import { useLanguage } from "@/context/language-context";

export function BrandStory() {
  const { language, t } = useLanguage();

  return (
    <section className="bg-[var(--color-bg-soft)] py-16 md:py-20">
      <div className="container-page grid items-center gap-10 md:grid-cols-2 md:gap-16">
        <Reveal direction="right">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[var(--color-brand)]">
              {t("home.story.tag")}
            </p>
            <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight text-[var(--color-ink)] md:text-4xl">
              {language === "vi" ? (
                <>
                  Vì bữa ăn ngon lành
                  <br />
                  và cuộc sống lành mạnh
                </>
              ) : (
                <>
                  For delicious meals
                  <br />
                  and a healthy life
                </>
              )}
            </h2>
            <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-[var(--color-ink-muted)]">
              <p>{t("home.story.p1")}</p>
              <p>{t("home.story.p2")}</p>
            </div>
            <div className="mt-7">
              <svg viewBox="0 0 200 40" className="h-12 w-40 text-[var(--color-ink)]" aria-hidden>
                <path
                  d="M10 25 C 20 10, 40 10, 50 25 S 80 40, 95 25 S 130 15, 145 28 S 180 30, 195 22"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
              <p className="mt-2 text-[15px] font-semibold text-[var(--color-ink)]">
                {t("home.story.ceo")}
              </p>
              <p className="text-[13px] text-[var(--color-ink-muted)]">
                {t("home.story.ceoTitle")}
              </p>
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
                height={1200}
                className="h-auto w-full object-cover"
              />
            </div>
            <div className="absolute bottom-5 left-5 max-w-[60%] rounded-xl bg-[var(--color-brand)] px-5 py-4 text-white shadow-lg">
              <p className="font-serif text-base font-bold leading-tight md:text-lg">
                {language === "vi" ? "TÂM LỢI FOODS" : "TAM LOI FOODS"}
              </p>
              <p className="mt-1 text-[11px] leading-snug opacity-90 md:text-xs">
                {language === "vi" ? "Trọn vẹn từng dòng thực phẩm" : "Pure quality in every food line"}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
