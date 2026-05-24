"use client";

import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";
import { useLanguage } from "@/context/language-context";

type Value = { 
  titleKey: string; 
  descVi: string;
  descEn: string;
  icon: React.ReactNode 
};

const I = "h-6 w-6 text-[var(--color-brand)]";

const VALUES: Value[] = [
  {
    titleKey: "home.usp.ingredient.title",
    descVi: "Từ nguồn cung uy tín trong nước và nhập khẩu, kiểm soát chặt chẽ từng lô hàng.",
    descEn: "From reputable domestic and imported sources, strictly controlled for every batch.",
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
    descVi: "Quy trình khép kín, đạt chuẩn HACCP và ISO 22000:2018 quốc tế.",
    descEn: "Closed processes, certified under HACCP and ISO 22000:2018 standards.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={I} aria-hidden>
        <path d="M12 2 4 6v6c0 5 3.5 8.5 8 10 4.5-1.5 8-5 8-10V6l-8-4Z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    titleKey: "home.usp.convenience.title",
    descVi: "Sản phẩm đa dạng, chế biến đơn giản nhưng giữ trọn hương vị truyền thống.",
    descEn: "Diverse products, simple processing but preserving traditional flavors.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={I} aria-hidden>
        <path d="M3 11h18l-2 9H5l-2-9Z" />
        <path d="M7 11V8a5 5 0 0 1 10 0v3" />
      </svg>
    ),
  },
  {
    titleKey: "home.usp.community.title",
    descVi: "Vì sức khỏe người Việt và phát triển bền vững cùng cộng đồng.",
    descEn: "For the health of Vietnamese consumers and sustainable development with the community.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={I} aria-hidden>
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78Z" />
      </svg>
    ),
  },
];

export function AboutCoreValues() {
  const { language, t } = useLanguage();

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="container-page">
        <Reveal>
          <h2 className="text-center font-serif text-3xl font-semibold text-[var(--color-brand)] md:text-4xl">
            {t("about.values.title")}
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-center text-sm text-[var(--color-ink-muted)] md:text-base">
            {language === "vi" ? "Những giá trị làm nên tinh thần Tâm Lợi Foods" : "The values that form the spirit of Tam Loi Foods"}
          </p>
        </Reveal>

        <div className="mt-10 grid items-center gap-10 md:grid-cols-2 md:gap-14">
          <Reveal direction="right">
            <div className="overflow-hidden rounded-2xl shadow-lg transition-transform duration-500 hover:scale-[1.02]">
              <Image
                src="/images/factory.png"
                alt="Đội ngũ Tâm Lợi Foods"
                width={900}
                height={700}
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2">
            {VALUES.map((v, i) => (
              <Reveal key={v.titleKey} direction="up" delay={i * 100}>
                <div className="h-full rounded-xl bg-[var(--color-cream)] p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-sm">
                    {v.icon}
                  </div>
                  <h3 className="mt-3 text-[15px] font-semibold text-[var(--color-ink)] uppercase">
                    {t(v.titleKey)}
                  </h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-[var(--color-ink-muted)]">
                    {language === "vi" ? v.descVi : v.descEn}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
