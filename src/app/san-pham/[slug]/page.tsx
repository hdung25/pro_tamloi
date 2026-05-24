import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PRODUCTS, formatPrice } from "@/data/products";
import { PageBanner } from "@/components/page-banner";
import { ProductGallery } from "@/components/products/product-gallery";
import { ProductDetailActions } from "@/components/products/product-detail-actions";
import { WhyChooseTamLoi } from "@/components/products/why-choose-tamloi";
import { RelatedProducts } from "@/components/products/related-products";
import { Reveal } from "@/components/ui/reveal";

type Params = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => p.slug === slug);
  if (!product) return { title: "Sản phẩm — Tâm Lợi Foods" };
  return {
    title: `${product.name} — Tâm Lợi Foods`,
    description: `${product.name} ${product.weight} — thơm ngon, tiện lợi, đảm bảo dinh dưỡng từ Tâm Lợi Foods. Giá ${formatPrice(product.price)}.`,
  };
}

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

const FEATURE_ICONS = [
  {
    label: "Nguyên liệu chọn lọc",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden>
        <path d="M12 2v20" />
        <path d="M5 8c0-3 3-6 7-6 0 4-3 7-7 6Z" />
        <path d="M19 8c0-3-3-6-7-6 0 4 3 7 7 6Z" />
      </svg>
    ),
  },
  {
    label: "An toàn chất lượng",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden>
        <path d="M12 2 4 6v6c0 5 3.5 8.5 8 10 4.5-1.5 8-5 8-10V6l-8-4Z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    label: "Tiện lợi & ngon miệng",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden>
        <path d="M3 11h18l-2 9H5l-2-9Z" />
        <path d="M7 11V8a5 5 0 0 1 10 0v3" />
      </svg>
    ),
  },
];

export default async function ProductDetailPage({ params }: Params) {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => p.slug === slug);
  if (!product) notFound();

  const related = PRODUCTS.filter(
    (p) => p.category === product.category && p.slug !== product.slug,
  ).slice(0, 4);
  const fillRelated =
    related.length < 4
      ? [
          ...related,
          ...PRODUCTS.filter(
            (p) =>
              p.slug !== product.slug && !related.some((r) => r.slug === p.slug),
          ).slice(0, 4 - related.length),
        ]
      : related;

  const galleryImages = [product.image, product.image, product.image, product.image];

  return (
    <>
      <nav className="bg-white py-3 text-[12px]" aria-label="Breadcrumb">
        <ol className="container-page flex flex-wrap items-center gap-1.5 text-[var(--color-ink-muted)]">
          <li>
            <Link href="/" className="transition-colors hover:text-[var(--color-brand)]">
              Trang chủ
            </Link>
          </li>
          <li className="text-[var(--color-ink-soft)]">›</li>
          <li>
            <Link href="/san-pham" className="transition-colors hover:text-[var(--color-brand)]">
              Sản phẩm
            </Link>
          </li>
          <li className="text-[var(--color-ink-soft)]">›</li>
          <li className="text-[var(--color-ink)]">{product.name}</li>
        </ol>
      </nav>

      <section className="bg-white py-10 md:py-12">
        <div className="container-page grid gap-10 md:grid-cols-2 md:gap-14">
          <Reveal direction="right">
            <ProductGallery images={galleryImages} alt={product.name} />
          </Reveal>

          <Reveal direction="left" delay={150}>
            <div>
              <h1 className="font-serif text-3xl font-semibold leading-tight text-[var(--color-ink)] md:text-4xl">
                {product.name}
              </h1>

              <div className="mt-3 flex items-center gap-3">
                <StarRating value={4.8} />
                <span className="text-[13px] text-[var(--color-ink-muted)]">
                  (4.8) · 120 đánh giá
                </span>
              </div>

              <p className="mt-4 text-[14px] leading-relaxed text-[var(--color-ink-muted)]">
                Sản phẩm chế biến sẵn của Tâm Lợi Foods — chỉ cần làm nóng là
                dùng ngay. Giữ trọn hương vị truyền thống, đảm bảo dinh dưỡng và
                an toàn cho cả gia đình.
              </p>

              <div className="mt-5 flex items-end gap-2">
                <span className="font-serif text-4xl font-bold text-[var(--color-brand)] md:text-5xl">
                  {product.price.toLocaleString("vi-VN")}đ
                </span>
              </div>
              <p className="mt-1 text-[12px] text-[var(--color-ink-muted)]">
                (Khối lượng {product.weight}
                {product.unit ? ` · ${product.unit}` : ""})
              </p>

              <div className="mt-5 grid grid-cols-3 gap-3 border-y border-[var(--color-line)] py-4">
                {FEATURE_ICONS.map((f) => (
                  <div key={f.label} className="flex flex-col items-center text-center">
                    <span className="text-[var(--color-brand)]">{f.icon}</span>
                    <span className="mt-1 text-[11px] font-medium leading-snug text-[var(--color-ink)]">
                      {f.label}
                    </span>
                  </div>
                ))}
              </div>

              <ProductDetailActions productName={product.name} />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-14 md:py-16">
        <div className="container-page grid gap-8 md:grid-cols-2 md:gap-12">
          <Reveal direction="right">
            <div className="rounded-2xl bg-white p-6 shadow-sm md:p-8">
              <h2 className="text-sm font-bold uppercase tracking-wide text-[var(--color-brand)]">
                Mô tả sản phẩm
              </h2>
              <div className="mt-4 space-y-3 text-[14px] leading-relaxed text-[var(--color-ink-muted)]">
                <p>
                  {product.name} là món ăn truyền thống được Tâm Lợi Foods chế
                  biến từ nguyên liệu tươi chọn lọc kỹ lưỡng — kết hợp công
                  thức gia truyền và công nghệ chế biến hiện đại để giữ trọn
                  hương vị, dinh dưỡng và độ tươi ngon.
                </p>
                <p>
                  Sản phẩm được cấp đông nhanh ở nhiệt độ -40°C, đóng gói trong
                  điều kiện vệ sinh nghiêm ngặt theo tiêu chuẩn HACCP và ISO
                  22000:2018. Chỉ cần làm nóng 3-5 phút bằng lò vi sóng hoặc
                  chảo, bạn đã có ngay bữa ăn ngon lành cho cả gia đình.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal direction="left" delay={150}>
            <div className="rounded-2xl bg-white p-6 shadow-sm md:p-8">
              <h2 className="text-sm font-bold uppercase tracking-wide text-[var(--color-brand)]">
                Thông tin sản phẩm
              </h2>
              <dl className="mt-4 divide-y divide-[var(--color-line)] text-[14px]">
                <div className="flex justify-between py-2.5">
                  <dt className="text-[var(--color-ink-muted)]">Khối lượng</dt>
                  <dd className="font-medium text-[var(--color-ink)]">
                    {product.weight}
                    {product.unit ? ` (${product.unit})` : ""}
                  </dd>
                </div>
                <div className="flex justify-between py-2.5">
                  <dt className="text-[var(--color-ink-muted)]">Bảo quản</dt>
                  <dd className="font-medium text-[var(--color-ink)]">
                    -18°C trở xuống
                  </dd>
                </div>
                <div className="flex justify-between py-2.5">
                  <dt className="text-[var(--color-ink-muted)]">Hạn sử dụng</dt>
                  <dd className="font-medium text-[var(--color-ink)]">
                    12 tháng kể từ NSX
                  </dd>
                </div>
                <div className="flex justify-between py-2.5">
                  <dt className="text-[var(--color-ink-muted)]">Tiêu chuẩn</dt>
                  <dd className="font-medium text-[var(--color-ink)]">
                    HACCP, ISO 22000:2018
                  </dd>
                </div>
                <div className="flex justify-between py-2.5">
                  <dt className="text-[var(--color-ink-muted)]">Nhà sản xuất</dt>
                  <dd className="font-medium text-[var(--color-ink)]">
                    Tâm Lợi Foods
                  </dd>
                </div>
                <div className="flex justify-between py-2.5">
                  <dt className="text-[var(--color-ink-muted)]">Xuất xứ</dt>
                  <dd className="font-medium text-[var(--color-ink)]">Việt Nam</dd>
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
