"use client";

import { PageBanner } from "@/components/page-banner";
import { ProductsPageClient } from "@/components/products/products-page-client";
import { UspStrip } from "@/components/usp-strip";
import { useLanguage } from "@/context/language-context";

export function ProductsPageContent() {
  const { t } = useLanguage();

  return (
    <>
      <PageBanner
        title={t("products.title")}
        subtitle={t("products.subtitle")}
        image="/images/hero-com-chien.png"
        breadcrumbs={[
          { label: t("nav.home"), href: "/" },
          { label: t("products.title") },
        ]}
        align="left"
      />
      <ProductsPageClient />
      <UspStrip />
    </>
  );
}
