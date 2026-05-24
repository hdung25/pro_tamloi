import type { Metadata } from "next";
import { AboutPageClient } from "./about-client";

export const metadata: Metadata = {
  title: "Về chúng tôi — Tâm Lợi Foods",
  description:
    "Tâm Lợi Foods — hơn 30 năm sản xuất thực phẩm Việt. Nhà máy đạt chuẩn ISO 22000:2018, đội ngũ 500+ nhân viên, phân phối tại hệ thống siêu thị lớn.",
};

export default function AboutPage() {
  return <AboutPageClient />;
}
