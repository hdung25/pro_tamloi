import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/reveal";

export function HeroHome() {
  return (
    <section className="relative overflow-hidden bg-[#F4E9D8]">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-com-chien.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-right"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(244,233,216,0.95) 0%, rgba(244,233,216,0.75) 40%, rgba(244,233,216,0) 65%)",
          }}
        />
      </div>

      <div className="container-page relative grid min-h-[520px] items-center py-16 md:py-24">
        <div className="max-w-xl">
          <Reveal direction="up" delay={100}>
            <h1 className="font-sans text-5xl font-extrabold uppercase leading-none tracking-tight text-[var(--color-brand)] md:text-7xl">
              Tâm Lợi
              <br />
              Foods
            </h1>
          </Reveal>
          <Reveal direction="up" delay={250}>
            <p className="mt-6 font-serif text-2xl italic leading-snug text-[var(--color-ink)] md:text-3xl">
              Ngon lành từ tâm
              <br />
              An toàn cho sức khỏe
            </p>
          </Reveal>
          <Reveal direction="up" delay={400}>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-[var(--color-ink-muted)] md:text-base">
              Thực phẩm chất lượng, tiện lợi, đảm bảo dinh dưỡng — mang đến cuộc
              sống lành mạnh đầy đủ cho mọi gia đình Việt.
            </p>
          </Reveal>
          <Reveal direction="up" delay={550}>
            <Link
              href="/san-pham"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--color-brand)] px-7 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--color-brand-dark)] hover:shadow-lg"
            >
              Khám phá sản phẩm
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden>
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
