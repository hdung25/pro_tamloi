import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PRODUCTS, formatPrice } from "@/data/products";
import { ProductDetailPageClient } from "./detail-client";

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

  return <ProductDetailPageClient product={product} fillRelated={fillRelated} />;
}
