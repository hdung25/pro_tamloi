import type { Metadata } from "next";
import { DessertPageClient } from "./dessert-client";

export const metadata: Metadata = {
  title: "Tráng miệng — Tâm Lợi Foods",
  description:
    "Bộ sưu tập tráng miệng Tâm Lợi Foods — đang được hoàn thiện. Hãy theo dõi để cập nhật sớm nhất.",
};

export default function DessertPage() {
  return <DessertPageClient />;
}
