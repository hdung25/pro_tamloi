import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";

export function BrandStory() {
  return (
    <section className="bg-[var(--color-bg-soft)] py-16 md:py-20">
      <div className="container-page grid items-center gap-10 md:grid-cols-2 md:gap-16">
        <Reveal direction="right">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[var(--color-brand)]">
              Câu chuyện thương hiệu
            </p>
            <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight text-[var(--color-ink)] md:text-4xl">
              Vì bữa ăn ngon lành
              <br />
              và cuộc sống lành mạnh
            </h2>
            <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-[var(--color-ink-muted)]">
              <p>
                Tâm Lợi Foods tự hào là thương hiệu thực phẩm Việt với hơn 30 năm
                đồng hành cùng người tiêu dùng — mang đến những bữa ăn ngon lành,
                tiện lợi, an toàn cho mọi gia đình Việt.
              </p>
              <p>
                Từ nguyên liệu chọn lọc kỹ lưỡng, quy trình sản xuất khép kín đạt
                chuẩn HACCP và ISO 22000:2018, đến từng sản phẩm trên kệ — chúng
                tôi cam kết giữ trọn hương vị truyền thống và giá trị dinh dưỡng
                cho cuộc sống lành mạnh hơn.
              </p>
            </div>
            <div className="mt-7">
              <svg viewBox="0 0 200 40" className="h-12 w-40 text-[var(--color-ink)]" aria-hidden>
                <path
                  d="M10 25 C 20 10, 40 10, 50 25 S 80 40, 95 25 S 130 15, 145 28 S 180 30, 195 22"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
              <p className="mt-2 text-[15px] font-semibold text-[var(--color-ink)]">
                VS. Thị Mai Hương
              </p>
              <p className="text-[13px] text-[var(--color-ink-muted)]">
                Tổng Giám đốc
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal direction="left" delay={150}>
          <div className="relative">
            <div className="overflow-hidden rounded-2xl shadow-lg transition-transform duration-500 hover:scale-[1.02]">
              <Image
                src="/images/factory.png"
                alt="Nhà máy Tâm Lợi Foods"
                width={1200}
                height={1200}
                className="h-auto w-full object-cover"
              />
            </div>
            <div className="absolute bottom-5 left-5 max-w-[60%] rounded-xl bg-[var(--color-brand)] px-5 py-4 text-white shadow-lg">
              <p className="font-serif text-base font-bold leading-tight md:text-lg">
                TÂM LỢI FOODS
              </p>
              <p className="mt-1 text-[11px] leading-snug opacity-90 md:text-xs">
                Trọn vẹn từng dòng thực phẩm
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
