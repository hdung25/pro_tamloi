import type { Metadata } from "next";
import { PageBanner } from "@/components/page-banner";
import { ProductsPageClient } from "@/components/products/products-page-client";
import { UspStrip } from "@/components/usp-strip";

export const metadata: Metadata = {
  title: "Sản phẩm — Tâm Lợi Foods",
  description:
    "Khám phá đa dạng sản phẩm Tâm Lợi Foods: cơm chiên, chả giò, há cảo, xíu mại, tôm chiên xù — thơm ngon, tiện lợi, an toàn cho mọi bữa ăn gia đình.",
};

export default function ProductsPage() {
  return (
    <>
      <PageBanner
        title="Sản phẩm"
        subtitle="Tâm Lợi Foods mang đến đa dạng sản phẩm thơm ngon, tiện lợi và giàu dinh dưỡng — đồng hành mỗi bữa ăn gia đình Việt."
        image="/images/hero-com-chien.png"
        breadcrumbs={[
          { label: "Trang chủ", href: "/" },
          { label: "Sản phẩm" },
        ]}
        align="left"
      />
      <ProductsPageClient />
      <UspStrip />
    </>
  );
}
