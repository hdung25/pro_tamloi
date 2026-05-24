"use client";

import Image from "next/image";
import { useLanguage } from "@/context/language-context";

const DISTRIBUTORS = [
  { name: "AEON", src: "/images/dist-aeon.png" },
  { name: "LOTTE Mart", src: "/images/dist-lottemart.png" },
  { name: "Big C", src: "/images/dist-bigc.png" },
  { name: "Bách hoá XANH", src: "/images/dist-bachhoaxanh.png" },
  { name: "emart", src: "/images/dist-emart.png" },
  { name: "MM Mega Market", src: "/images/dist-mm.png" },
  { name: "Co.opmart", src: "/images/dist-coopmart.png" },
  { name: "SATRA Mart", src: "/images/dist-satra.png" },
];

export function SiteFooter() {
  const { language, t } = useLanguage();

  return (
    <footer className="mt-20">
      <div className="bg-white">
        <div className="container-page grid gap-10 py-12 md:grid-cols-2">
          <div>
            <h3 className="text-sm font-bold tracking-wide text-[var(--color-brand)] uppercase">
              {t("footer.contact")}
            </h3>
            <ul className="mt-4 space-y-2 text-[13px] text-[var(--color-ink)]">
              <li>{language === "vi" ? "377A Long Bình, Ấp Long Bình," : "377A Long Binh, Long Binh Hamlet,"}</li>
              <li>{language === "vi" ? "Xã Mỹ Yên, Tỉnh Tây Ninh, Việt Nam" : "My Yen Commune, Tay Ninh Province, Vietnam"}</li>
              <li>
                <strong className="font-semibold">{language === "vi" ? "Hotline 1:" : "Hotline 1:"}</strong> 0915 015 115
              </li>
              <li>
                <strong className="font-semibold">{language === "vi" ? "Hotline 2:" : "Hotline 2:"}</strong> 0272 363 1665
              </li>
              <li>
                <strong className="font-semibold">Email:</strong> info@tamloi.com
              </li>
            </ul>
            <div className="mt-4 flex items-center gap-3">
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-brand)] text-white transition-opacity hover:opacity-90"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden>
                  <path d="M13 22v-8h3l1-4h-4V7.5C13 6.4 13.4 6 14.5 6H17V2.3C16.5 2.2 15 2 13.7 2 10.8 2 9 3.8 9 6.9V10H6v4h3v8h4Z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-brand)] text-white transition-opacity hover:opacity-90"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4" aria-hidden>
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold tracking-wide text-[var(--color-brand)] uppercase">
              {language === "vi" ? "HỆ THỐNG PHÂN PHỐI" : "DISTRIBUTION SYSTEM"}
            </h3>
            <div className="mt-4 grid grid-cols-4 gap-3">
              {DISTRIBUTORS.map((d) => (
                <div
                  key={d.name}
                  className="flex h-14 items-center justify-center rounded-md bg-white px-2 shadow-sm border border-gray-100"
                  title={d.name}
                >
                  <Image
                    src={d.src}
                    alt={d.name}
                    width={120}
                    height={48}
                    className="max-h-10 w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[var(--color-brand)] py-3 text-center text-[12px] text-white">
        {t("footer.copyright")}
      </div>
    </footer>
  );
}
