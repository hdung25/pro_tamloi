import { ProductCard } from "./product-card";
import type { Product } from "@/data/products";
import { Reveal } from "@/components/ui/reveal";

type Props = {
  products: Product[];
};

export function RelatedProducts({ products }: Props) {
  if (products.length === 0) return null;
  return (
    <section className="bg-white py-14 md:py-16">
      <div className="container-page">
        <Reveal>
          <h2 className="text-center font-serif text-2xl font-semibold text-[var(--color-brand)] md:text-3xl">
            Sản phẩm liên quan
          </h2>
        </Reveal>

        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-5">
          {products.map((p, i) => (
            <Reveal key={p.slug} direction="up" delay={i * 100}>
              <ProductCard product={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
