import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/reveal";

type Product = {
  slug: string;
  name: string;
  image: string;
};

const PRODUCTS: Product[] = [
  {
    slug: "com-chien-trai-thom",
    name: "Cơm chiên trái thơm",
    image: "/images/products/com-chien-trai-thom.png",
  },
  {
    slug: "xiu-mai-tom-thit",
    name: "Xíu mại tôm thịt",
    image: "/images/products/xiu-mai-tom-thit.png",
  },
  {
    slug: "ha-cao-tom",
    name: "Há cảo tôm",
    image: "/images/products/ha-cao-tom.png",
  },
  {
    slug: "cha-gio-truyen-thong",
    name: "Chả giò truyền thống",
    image: "/images/products/cha-gio-truyen-thong.png",
  },
];

function CartIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden>
      <circle cx="9" cy="20" r="1.5" />
      <circle cx="18" cy="20" r="1.5" />
      <path d="M3 4h2l2.5 12.5a2 2 0 0 0 2 1.5h8a2 2 0 0 0 2-1.5L21 8H6" />
    </svg>
  );
}

export function FeaturedProducts() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="container-page">
        <Reveal>
          <div className="text-center">
            <h2 className="font-serif text-3xl font-semibold text-[var(--color-brand)] md:text-4xl">
              Sản phẩm nổi bật
            </h2>
            <p className="mt-2 text-sm text-[var(--color-ink-muted)] md:text-base">
              Đa dạng · Tiện lợi · Dinh dưỡng
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid grid-cols-2 gap-5 md:grid-cols-4 md:gap-6">
          {PRODUCTS.map((p, i) => (
            <Reveal key={p.slug} direction="up" delay={i * 100}>
              <Link
                href={`/san-pham/${p.slug}`}
                className="group relative block overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-[var(--color-line)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                aria-label={p.name}
              >
                <Image
                  src={p.image}
                  alt={p.name}
                  width={600}
                  height={750}
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="h-auto w-full transition-transform duration-500 group-hover:scale-[1.04]"
                />
                <span
                  aria-label="Thêm vào giỏ"
                  className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-[var(--color-brand)] text-white shadow-md transition-all duration-300 group-hover:scale-110 group-hover:bg-[var(--color-brand-dark)]"
                >
                  <CartIcon />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <div className="mt-10 text-center">
            <Link
              href="/san-pham"
              className="group inline-flex items-center gap-2 rounded-full border-2 border-[var(--color-brand)] px-7 py-3 text-sm font-semibold uppercase tracking-wide text-[var(--color-brand)] transition-all duration-300 hover:bg-[var(--color-brand)] hover:text-white"
            >
              Xem tất cả sản phẩm
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden>
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
