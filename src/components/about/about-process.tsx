import { Reveal } from "@/components/ui/reveal";

type Step = { title: string; icon: React.ReactNode };

const ICON = "h-8 w-8 text-[var(--color-brand)]";

const STEPS: Step[] = [
  {
    title: "Nhập nguyên liệu",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={ICON} aria-hidden>
        <path d="M1 7h13v10H1z" />
        <path d="M14 10h5l3 3v4h-8" />
        <circle cx="6" cy="19" r="2" />
        <circle cx="18" cy="19" r="2" />
      </svg>
    ),
  },
  {
    title: "Kiểm định chất lượng",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={ICON} aria-hidden>
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
        <path d="M14 2v6h6" />
        <path d="m9 14 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Sơ chế",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={ICON} aria-hidden>
        <path d="M6 2v8a4 4 0 0 0 8 0V2" />
        <path d="M10 14v8" />
        <path d="M18 4c2 0 3 2 3 4s-1 4-3 4v8" />
      </svg>
    ),
  },
  {
    title: "Cấp đông nhanh",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={ICON} aria-hidden>
        <path d="M12 2v20" />
        <path d="M2 12h20" />
        <path d="m4.93 4.93 14.14 14.14" />
        <path d="m19.07 4.93-14.14 14.14" />
      </svg>
    ),
  },
  {
    title: "Đóng gói",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={ICON} aria-hidden>
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
        <path d="m3.27 6.96 8.73 5.05 8.73-5.05" />
        <path d="M12 22V12" />
      </svg>
    ),
  },
];

export function AboutProcess() {
  return (
    <section className="bg-[var(--color-cream)] py-16 md:py-20">
      <div className="container-page">
        <Reveal>
          <h2 className="text-center font-serif text-3xl font-semibold text-[var(--color-brand)] md:text-4xl">
            Quy trình sản xuất
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-center text-sm text-[var(--color-ink-muted)] md:text-base">
            5 bước khép kín — kiểm soát chất lượng từ đầu vào đến thành phẩm
          </p>
        </Reveal>

        <ol className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-5 md:gap-4">
          {STEPS.map((s, i) => (
            <Reveal key={s.title} direction="up" delay={i * 120}>
              <li className="group relative flex flex-col items-center text-center">
                <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-sm ring-2 ring-[var(--color-cream-dark)] transition-all duration-300 group-hover:-translate-y-1 group-hover:ring-[var(--color-brand)]">
                  {s.icon}
                  <span className="absolute -bottom-2 left-1/2 flex h-7 w-7 -translate-x-1/2 items-center justify-center rounded-full bg-[var(--color-brand)] text-[11px] font-bold text-white shadow">
                    {i + 1}
                  </span>
                </div>
                <h3 className="mt-6 text-[13px] font-semibold text-[var(--color-ink)] md:text-sm">
                  {s.title}
                </h3>
                {i < STEPS.length - 1 && (
                  <span
                    aria-hidden
                    className="absolute right-[-15px] top-10 hidden h-px w-8 bg-[var(--color-brand)]/30 md:block"
                  />
                )}
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
