import type { Metadata } from "next";
import { PageBanner } from "@/components/page-banner";
import { AboutIntro } from "@/components/about/about-intro";
import { AboutStats } from "@/components/about/about-stats";
import { AboutCoreValues } from "@/components/about/about-core-values";
import { AboutProcess } from "@/components/about/about-process";
import { AboutMilestones } from "@/components/about/about-milestones";
import { UspStrip } from "@/components/usp-strip";

export const metadata: Metadata = {
  title: "Về chúng tôi — Tâm Lợi Foods",
  description:
    "Tâm Lợi Foods — hơn 30 năm sản xuất thực phẩm Việt. Nhà máy đạt chuẩn ISO 22000:2018, đội ngũ 500+ nhân viên, phân phối tại hệ thống siêu thị lớn.",
};

export default function AboutPage() {
  return (
    <>
      <PageBanner
        title="Về chúng tôi"
        subtitle="Tâm Lợi Foods mang đến đa dạng sản phẩm chất lượng — đảm bảo ngon, tiện lợi và an toàn cho cuộc sống của mọi gia đình Việt."
        image="/images/factory.png"
        breadcrumbs={[
          { label: "Trang chủ", href: "/" },
          { label: "Về chúng tôi" },
        ]}
        align="left"
      />
      <AboutIntro />
      <AboutStats />
      <AboutCoreValues />
      <AboutProcess />
      <AboutMilestones />
      <UspStrip />
    </>
  );
}
