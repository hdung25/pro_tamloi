import type { Metadata } from "next";
import { ContactPageClient } from "./contact-client";

export const metadata: Metadata = {
  title: "Liên hệ — Tâm Lợi Foods",
  description:
    "Liên hệ Tâm Lợi Foods qua hotline 0915 015 115, email info@tamloi.com hoặc gửi tin nhắn trực tiếp. Địa chỉ: 377A Long Bình, Tây Ninh.",
};

export default function ContactPage() {
  return <ContactPageClient />;
}
