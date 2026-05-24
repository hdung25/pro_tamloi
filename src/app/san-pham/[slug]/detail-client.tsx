"use client";

import Link from "next/link";
import { type Product, formatPrice } from "@/data/products";
import { ProductGallery } from "@/components/products/product-gallery";
import { ProductDetailActions } from "@/components/products/product-detail-actions";
import { WhyChooseTamLoi } from "@/components/products/why-choose-tamloi";
import { RelatedProducts } from "@/components/products/related-products";
import { Reveal } from "@/components/ui/reveal";
import { useLanguage } from "@/context/language-context";

type Props = {
  product: Product;
  fillRelated: Product[];
};

function StarRating({ value }: { value: number }) {
  const stars = Array.from({ length: 5 }, (_, i) => i + 1);
  return (
    <div className="flex items-center gap-0.5 text-[var(--color-brand)]" aria-label={`Đánh giá ${value}/5`}>
      {stars.map((s) => (
        <svg
          key={s}
          viewBox="0 0 24 24"
          fill={s <= Math.round(value) ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth="1.5"
          className="h-4 w-4"
          aria-hidden
        >
          <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
        </svg>
      ))}
    </div>
  );
}

export function ProductDetailPageClient({ product, fillRelated }: Props) {
  const { language, t } = useLanguage();
  
  const productName = language === "vi" ? product.name : product.nameEn;
  const productUnit = language === "vi" ? product.unit : product.unitEn;

  const galleryImages = [product.image, product.image, product.image, product.image];

  const FEATURE_ICONS = [
    {
      label: t("home.usp.ingredient.title"),
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden>
          <path d="M12 2v20" />
          <path d="M5 8c0-3 3-6 7-6 0 4-3 7-7 6Z" />
          <path d="M19 8c0-3-3-6-7-6 0 4 3 7 7 6Z" />
        </svg>
      ),
    },
    {
      label: t("home.usp.safety.title"),
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden>
          <path d="M12 2 4 6v6c0 5 3.5 8.5 8 10 4.5-1.5 8-5 8-10V6l-8-4Z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      ),
    },
    {
      label: t("home.usp.convenience.title"),
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden>
          <path d="M3 11h18l-2 9H5l-2-9Z" />
          <path d="M7 11V8a5 5 0 0 1 10 0v3" />
        </svg>
      ),
    },
  ];

  const descParagraph1 = language === "vi" 
    ? `${product.name} là món ăn truyền thống được Tâm Lợi Foods chế biến từ nguyên liệu tươi chọn lọc kỹ lưỡng — kết hợp công thức gia truyền và công nghệ chế biến hiện đại để giữ trọn hương vị, dinh dưỡng và độ tươi ngon.`
    : `${product.nameEn} is a classic dish processed by Tam Loi Foods from strictly selected fresh ingredients — combining a traditional recipe with modern processing technology to keep the flavor, nutrition, and freshness.`;

  const descParagraph2 = language === "vi"
    ? `Sản phẩm được cấp đông nhanh ở nhiệt độ -40°C, đóng gói trong điều kiện vệ sinh nghiêm ngặt theo tiêu chuẩn HACCP và ISO 22000:2018. Chỉ cần làm nóng 3-5 phút bằng lò vi sóng hoặc chảo, bạn đã có ngay bữa ăn ngon lành cho cả gia đình.`
    : `The product is quickly frozen at -40°C, packaged under strict hygienic conditions according to HACCP and ISO 22000:2018 standards. Just heat for 3-5 minutes in the microwave or pan, and you will have a delicious meal for the whole family.`;

  const descriptionDefault = language === "vi"
    ? "Sản phẩm chế biến sẵn của Tâm Lợi Foods — chỉ cần làm nóng là dùng ngay. Giữ trọn hương vị truyền thống, đảm bảo dinh dưỡng và an toàn cho cả gia đình."
    : "Ready-to-eat product from Tam Loi Foods — just heat and serve. Preserves traditional flavor, ensures nutrition and safety for the whole family.";

  return (
    <>
      <nav className="bg-white py-3 text-[12px]" aria-label="Breadcrumb">
        <ol className="container-page flex flex-wrap items-center gap-1.5 text-[var(--color-ink-muted)]">
          <li>
            <Link href="/" className="transition-colors hover:text-[var(--color-brand)]">
              {t("nav.home")}
            </Link>
          </li>
          <li className="text-[var(--color-ink-soft)]">›</li>
          <li>
            <Link href="/san-pham" className="transition-colors hover:text-[var(--color-brand)]">
              {t("nav.products")}
            </Link>
          </li>
          <li className="text-[var(--color-ink-soft)]">›</li>
          <li className="text-[var(--color-ink)]">{productName}</li>
        </ol>
      </nav>

      <section className="bg-white py-10 md:py-12">
        <div className="container-page grid gap-10 md:grid-cols-2 md:gap-14">
          <Reveal direction="right">
            <ProductGallery images={galleryImages} alt={productName} />
          </Reveal>

          <Reveal direction="left" delay={150}>
            <div>
              <h1 className="font-serif text-3xl font-semibold leading-tight text-[var(--color-ink)] md:text-4xl">
                {productName}
              </h1>

              <div className="mt-3 flex items-center gap-3">
                <StarRating value={4.8} />
                <span className="text-[13px] text-[var(--color-ink-muted)]">
                  {language === "vi" ? "(4.8) · 120 đánh giá" : "(4.8) · 120 reviews"}
                </span>
              </div>

              <p className="mt-4 text-[14px] leading-relaxed text-[var(--color-ink-muted)]">
                {descriptionDefault}
              </p>

              <div className="mt-5 flex items-end gap-2">
                <span className="font-serif text-4xl font-bold text-[var(--color-brand)] md:text-5xl">
                  {formatPrice(product.price, language)}
                </span>
              </div>
              <p className="mt-1 text-[12px] text-[var(--color-ink-muted)]">
                ({language === "vi" ? "Khối lượng" : "Weight"} {product.weight}
                {productUnit ? ` · ${productUnit}` : ""})
              </p>

              <div className="mt-5 grid grid-cols-3 gap-3 border-y border-[var(--color-line)] py-4">
                {FEATURE_ICONS.map((f) => (
                  <div key={f.label} className="flex flex-col items-center text-center">
                    <span className="text-[var(--color-brand)]">{f.icon}</span>
                    <span className="mt-1 text-[11px] font-medium leading-snug text-[var(--color-ink)] uppercase">
                      {f.label}
                    </span>
                  </div>
                ))}
              </div>

              <ProductDetailActions productName={productName} />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-14 md:py-16">
        <div className="container-page grid gap-8 md:grid-cols-2 md:gap-12">
          <Reveal direction="right">
            <div className="rounded-2xl bg-white p-6 shadow-sm md:p-8">
              <h2 className="text-sm font-bold uppercase tracking-wide text-[var(--color-brand)]">
                {t("products.desc.title")}
              </h2>
              <div className="mt-4 space-y-3 text-[14px] leading-relaxed text-[var(--color-ink-muted)]">
                <p>{descParagraph1}</p>
                <p>{descParagraph2}</p>
              </div>
            </div>
          </Reveal>

          <Reveal direction="left" delay={150}>
            <div className="rounded-2xl bg-white p-6 shadow-sm md:p-8">
              <h2 className="text-sm font-bold uppercase tracking-wide text-[var(--color-brand)]">
                {t("products.details.title")}
              </h2>
              <dl className="mt-4 divide-y divide-[var(--color-line)] text-[14px]">
                <div className="flex justify-between py-2.5">
                  <dt className="text-[var(--color-ink-muted)]">{language === "vi" ? "Khối lượng" : "Weight"}</dt>
                  <dd className="font-medium text-[var(--color-ink)]">
                    {product.weight}
                    {productUnit ? ` (${productUnit})` : ""}
                  </dd>
                </div>
                <div className="flex justify-between py-2.5">
                  <dt className="text-[var(--color-ink-muted)]">{language === "vi" ? "Bảo quản" : "Storage"}</dt>
                  <dd className="font-medium text-[var(--color-ink)]">
                    {language === "vi" ? "-18°C trở xuống" : "-18°C or below"}
                  </dd>
                </div>
                <div className="flex justify-between py-2.5">
                  <dt className="text-[var(--color-ink-muted)]">{language === "vi" ? "Hạn sử dụng" : "Shelf life"}</dt>
                  <dd className="font-medium text-[var(--color-ink)]">
                    {language === "vi" ? "12 tháng kể từ NSX" : "12 months from MFG"}
                  </dd>
                </div>
                <div className="flex justify-between py-2.5">
                  <dt className="text-[var(--color-ink-muted)]">{language === "vi" ? "Tiêu chuẩn" : "Standards"}</dt>
                  <dd className="font-medium text-[var(--color-ink)]">
                    HACCP, ISO 22000:2018
                  </dd>
                </div>
                <div className="flex justify-between py-2.5">
                  <dt className="text-[var(--color-ink-muted)]">{language === "vi" ? "Nhà sản xuất" : "Manufacturer"}</dt>
                  <dd className="font-medium text-[var(--color-ink)]">
                    {language === "vi" ? "Tâm Lợi Foods" : "Tam Loi Foods"}
                  </dd>
                </div>
                <div className="flex justify-between py-2.5">
                  <dt className="text-[var(--color-ink-muted)]">{language === "vi" ? "Xuất xứ" : "Origin"}</dt>
                  <dd className="font-medium text-[var(--color-ink)]">
                    {language === "vi" ? "Việt Nam" : "Vietnam"}
                  </dd>
                </div>
              </dl>
            </div>
          </Reveal>
        </div>
      </section>

      <WhyChooseTamLoi />
      <RelatedProducts products={fillRelated} />
    </>
  );
}
