import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/data/products";

type Props = {
  product: Product;
};

function CartIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden>
      <circle cx="9" cy="20" r="1.5" />
      <circle cx="18" cy="20" r="1.5" />
      <path d="M3 4h2l2.5 12.5a2 2 0 0 0 2 1.5h8a2 2 0 0 0 2-1.5L21 8H6" />
    </svg>
  );
}

export function ProductCard({ product }: Props) {
  return (
    <Link
      href={`/san-pham/${product.slug}`}
      className="group relative block overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-[var(--color-line)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
      aria-label={product.name}
    >
      {product.bestSeller && (
        <span className="absolute left-3 top-3 z-10 rounded-full bg-[var(--color-brand)] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-sm">
          Best Seller
        </span>
      )}
      <Image
        src={product.image}
        alt={product.name}
        width={600}
        height={750}
        sizes="(max-width: 768px) 50vw, 33vw"
        className="h-auto w-full transition-transform duration-500 group-hover:scale-[1.04]"
      />
      <span
        aria-label="Thêm vào giỏ"
        className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-[var(--color-brand)] text-white shadow-md transition-all duration-300 group-hover:scale-110 group-hover:bg-[var(--color-brand-dark)]"
      >
        <CartIcon />
      </span>
    </Link>
  );
}
