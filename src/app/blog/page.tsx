import type { Metadata } from "next";
import { BlogPageClient } from "./blog-client";

export const metadata: Metadata = {
  title: "Blog & Tin tức — Tâm Lợi Foods",
  description:
    "Cẩm nang kiến thức hữu ích về ẩm thực, sức khỏe và các hoạt động mới nhất của Tâm Lợi Foods.",
};

export default function BlogPage() {
  return <BlogPageClient />;
}
