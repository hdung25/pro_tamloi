import type { Metadata } from "next";
import Link from "next/link";
import { PageBanner } from "@/components/page-banner";
import { UspStrip } from "@/components/usp-strip";
import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "Tráng miệng — Tâm Lợi Foods",
  description:
    "Bộ sưu tập tráng miệng Tâm Lợi Foods — đang được hoàn thiện. Hãy theo dõi để cập nhật sớm nhất.",
};

const UPCOMING = [
  { name: "Bánh ngọt truyền thống", emoji: "🍰" },
  { name: "Chè đông lạnh", emoji: "🍮" },
  { name: "Trái cây sấy", emoji: "🥭" },
  { name: "Bánh trung thu", emoji: "🥮" },
];

export default function DessertPage() {
  return (
    <>
      <PageBanner
        title="Tráng miệng"
        subtitle="Bộ sưu tập tráng miệng Tâm Lợi Foods — những hương vị ngọt ngào hoàn thiện trọn vẹn bữa ăn cho cả gia đình."
        image="/images/hero-com-chien.png"
        breadcrumbs={[
          { label: "Trang chủ", href: "/" },
          { label: "Tráng miệng" },
        ]}
        align="left"
      />

      <section className="bg-white py-20 md:py-24">
        <div className="container-page">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[var(--color-cream)] text-3xl shadow-sm ring-1 ring-[var(--color-cream-dark)]">
                🍰
              </div>
              <p className="mt-6 text-xs font-bold uppercase tracking-[0.3em] text-[var(--color-brand)]">
                Sắp ra mắt
              </p>
              <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight text-[var(--color-ink)] md:text-4xl">
                Bộ sưu tập tráng miệng đang hoàn thiện
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-[var(--color-ink-muted)]">
                Đội ngũ Tâm Lợi Foods đang miệt mài nghiên cứu những món tráng
                miệng thơm ngon, an toàn và giữ trọn hương vị truyền thống Việt.
                Mời bạn quay lại sớm để khám phá.
              </p>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="mx-auto mt-12 grid max-w-3xl grid-cols-2 gap-5 sm:grid-cols-4">
              {UPCOMING.map((u, i) => (
                <Reveal key={u.name} direction="up" delay={i * 100}>
                  <div className="group flex flex-col items-center rounded-2xl bg-[var(--color-cream)] p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                    <span className="text-4xl transition-transform duration-500 group-hover:scale-110">
                      {u.emoji}
                    </span>
                    <p className="mt-4 text-[13px] font-semibold text-[var(--color-ink)]">
                      {u.name}
                    </p>
                    <span className="mt-2 text-[11px] uppercase tracking-wide text-[var(--color-brand)]">
                      Sắp ra mắt
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>
          </Reveal>

          <Reveal delay={400}>
            <div className="mt-14 flex flex-col items-center gap-4">
              <p className="text-sm text-[var(--color-ink-muted)]">
                Trong thời gian chờ, bạn có thể tham khảo các sản phẩm hiện có
              </p>
              <Link
                href="/san-pham"
                className="group inline-flex items-center gap-2 rounded-full bg-[var(--color-brand)] px-7 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--color-brand-dark)] hover:shadow-lg"
              >
                Xem sản phẩm chính
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden>
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <UspStrip />
    </>
  );
}
