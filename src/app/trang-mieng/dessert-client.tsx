"use client";

import Link from "next/link";
import { PageBanner } from "@/components/page-banner";
import { UspStrip } from "@/components/usp-strip";
import { Reveal } from "@/components/ui/reveal";
import { useLanguage } from "@/context/language-context";

const UPCOMING = [
  { nameVi: "Bánh ngọt truyền thống", nameEn: "Traditional Cakes", emoji: "🍰" },
  { nameVi: "Chè đông lạnh", nameEn: "Frozen Sweet Soups", emoji: "🍮" },
  { nameVi: "Trái cây sấy", nameEn: "Dried Fruits", emoji: "🥭" },
  { nameVi: "Bánh trung thu", nameEn: "Mooncakes", emoji: "🥮" },
];

export function DessertPageClient() {
  const { language, t } = useLanguage();

  return (
    <>
      <PageBanner
        title={t("desserts.title")}
        subtitle={t("desserts.subtitle")}
        image="/images/hero-com-chien.png"
        breadcrumbs={[
          { label: t("nav.home"), href: "/" },
          { label: t("desserts.title") },
        ]}
        align="left"
      />

      <section className="bg-white py-20 md:py-24">
        <div className="container-page">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[var(--color-cream)] text-3xl shadow-sm ring-1 ring-[var(--color-cream-dark)]">
                🍰
              </div>
              <p className="mt-6 text-xs font-bold uppercase tracking-[0.3em] text-[var(--color-brand)]">
                {t("desserts.comingSoon")}
              </p>
              <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight text-[var(--color-ink)] md:text-4xl">
                {language === "vi" ? "Bộ sưu tập tráng miệng đang hoàn thiện" : "Dessert Collection under development"}
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-[var(--color-ink-muted)]">
                {language === "vi" 
                  ? "Đội ngũ Tâm Lợi Foods đang miệt mài nghiên cứu những món tráng miệng thơm ngon, an toàn và giữ trọn hương vị truyền thống Việt. Mời bạn quay lại sớm để khám phá."
                  : "Tam Loi Foods team is passionately researching delicious, safe desserts that preserve traditional Vietnamese flavors. Please come back soon to explore."}
              </p>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="mx-auto mt-12 grid max-w-3xl grid-cols-2 gap-5 sm:grid-cols-4">
              {UPCOMING.map((u, i) => (
                <Reveal key={u.nameVi} direction="up" delay={i * 100}>
                  <div className="group flex flex-col items-center rounded-2xl bg-[var(--color-cream)] p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                    <span className="text-4xl transition-transform duration-500 group-hover:scale-110">
                      {u.emoji}
                    </span>
                    <p className="mt-4 text-[13px] font-semibold text-[var(--color-ink)]">
                      {language === "vi" ? u.nameVi : u.nameEn}
                    </p>
                    <span className="mt-2 text-[11px] uppercase tracking-wide text-[var(--color-brand)]">
                      {t("desserts.comingSoon")}
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>
          </Reveal>

          <Reveal delay={400}>
            <div className="mt-14 flex flex-col items-center gap-4">
              <p className="text-sm text-[var(--color-ink-muted)]">
                {language === "vi" 
                  ? "Trong thời gian chờ, bạn có thể tham khảo các sản phẩm hiện có"
                  : "In the meantime, you can explore our available products"}
              </p>
              <Link
                href="/san-pham"
                className="group inline-flex items-center gap-2 rounded-full bg-[var(--color-brand)] px-7 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--color-brand-dark)] hover:shadow-lg"
              >
                {language === "vi" ? "Xem sản phẩm chính" : "View main products"}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden>
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <UspStrip />
    </>
  );
}
