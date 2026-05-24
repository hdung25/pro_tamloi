import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";

export function AboutIntro() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="container-page grid items-center gap-10 md:grid-cols-2 md:gap-14">
        <Reveal direction="right">
          <div>
            <h2 className="font-serif text-3xl font-semibold text-[var(--color-brand)] md:text-4xl">
              GIỚI THIỆU
            </h2>
            <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-[var(--color-ink-muted)]">
              <p>
                Thành lập từ năm 1987, Tâm Lợi Foods là doanh nghiệp hàng đầu
                trong lĩnh vực sản xuất và phân phối thực phẩm chế biến tại Việt
                Nam.
              </p>
              <p>
                Với hệ thống nhà máy hiện đại, quy trình sản xuất khép kín đạt
                chuẩn quốc tế và đội ngũ hơn 500 nhân viên giàu kinh nghiệm,
                chúng tôi không ngừng đưa sản phẩm chất lượng đến mọi gia đình
                Việt — đảm bảo dinh dưỡng, ngon miệng và tiện lợi.
              </p>
              <p>
                Sứ mệnh của Tâm Lợi Foods là mang lại bữa ăn an toàn, hợp khẩu vị
                và giá phải chăng, đồng hành cùng sức khỏe và niềm vui của hàng
                triệu người tiêu dùng Việt mỗi ngày.
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
                height={1000}
                className="h-[420px] w-full object-cover md:h-[480px]"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden w-36 flex-col overflow-hidden rounded-2xl bg-white shadow-xl ring-1 ring-[var(--color-cream-dark)] md:flex">
              <div className="flex flex-1 flex-col items-center justify-center px-4 pt-7 pb-5">
                <span className="font-mono text-lg sm:text-2xl md:text-xl lg:text-2xl xl:text-3xl font-bold tracking-tight text-[var(--color-brand)] leading-none">
                  30+
                </span>
              </div>
              <div className="bg-[var(--color-brand)] py-1.5 text-center leading-none">
                <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-white block">
                  NĂM KINH NGHIỆM
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
