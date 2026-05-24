import type { Metadata } from "next";
import { ProductsPageContent } from "./products-client";

export const metadata: Metadata = {
  title: "Sản phẩm — Tâm Lợi Foods",
  description:
    "Khám phá đa dạng sản phẩm Tâm Lợi Foods: cơm chiên, chả giò, há cảo, xíu mại, tôm chiên xù — thơm ngon, tiện lợi, an toàn cho mọi bữa ăn gia đình.",
};

export default function ProductsPage() {
  return <ProductsPageContent />;
}
