import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";

type Milestone = {
  years: string;
  title: string;
  desc: string;
  image: string;
};

const MILESTONES: Milestone[] = [
  {
    years: "10 năm",
    title: "Đồng hành cùng người tiêu dùng Việt",
    desc: "Hơn một thập kỷ chinh phục bữa ăn của hàng triệu gia đình bằng chất lượng và sự tận tâm.",
    image: "/images/factory.png",
  },
  {
    years: "12 năm",
    title: "Đối tác chiến lược của hệ thống bán lẻ",
    desc: "Phân phối tại các chuỗi siêu thị lớn AEON, LOTTE Mart, Big C, Co.opmart, Bách hoá XANH…",
    image: "/images/hero-com-chien.png",
  },
];

export function AboutMilestones() {
  return (
    <section className="bg-white py-12 md:py-16">
      <div className="container-page grid gap-6 md:grid-cols-2">
        {MILESTONES.map((m, i) => (
          <Reveal key={m.years} direction="up" delay={i * 150}>
            <div className="group relative h-full overflow-hidden rounded-2xl bg-[var(--color-cream)] p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg md:p-8">
              <div className="relative z-10 max-w-[60%]">
                <div className="font-serif text-3xl font-bold text-[var(--color-brand)] md:text-4xl">
                  {m.years}
                </div>
                <h3 className="mt-2 text-base font-semibold text-[var(--color-ink)] md:text-lg">
                  {m.title}
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-[var(--color-ink-muted)]">
                  {m.desc}
                </p>
              </div>
              <div className="absolute bottom-0 right-0 h-full w-2/5 opacity-90 transition-transform duration-500 group-hover:scale-105">
                <Image
                  src={m.image}
                  alt=""
                  fill
                  sizes="200px"
                  className="object-cover object-left"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(90deg, var(--color-cream) 0%, rgba(255,248,240,0.4) 50%, rgba(255,248,240,0) 100%)",
                  }}
                />
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
