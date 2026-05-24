export type BlogCategory = "bi-kip" | "meo-vat" | "tin-tuc" | "cong-dong";

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: BlogCategory;
  publishedAt: string;
  author: string;
  thumbnail: string;
  featured?: boolean;
};

export const BLOG_CATEGORIES: { id: BlogCategory; label: string }[] = [
  { id: "bi-kip", label: "Bí kíp nấu ăn" },
  { id: "meo-vat", label: "Mẹo vặt nhà bếp" },
  { id: "tin-tuc", label: "Tin tức" },
  { id: "cong-dong", label: "Hoạt động cộng đồng" },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "bi-quyet-lua-chon-thuc-pham-dong-lanh",
    title: "Bí quyết lựa chọn thực phẩm đông lạnh an toàn cho gia đình",
    excerpt:
      "Cẩm nang chi tiết giúp bạn nhận biết và lựa chọn thực phẩm đông lạnh an toàn, đảm bảo dinh dưỡng cho cả gia đình.",
    category: "bi-kip",
    publishedAt: "2026-05-12",
    author: "Tâm Lợi Foods",
    thumbnail: "/images/products/com-chien-trai-thom.png",
    featured: true,
  },
  {
    slug: "5-meo-bao-quan-thuc-pham-tu-lanh",
    title: "5 mẹo bảo quản thực phẩm tủ lạnh giữ tươi lâu nhất",
    excerpt:
      "Áp dụng đúng kỹ thuật bảo quản giúp thực phẩm tươi ngon, an toàn và giảm lãng phí đáng kể.",
    category: "meo-vat",
    publishedAt: "2026-04-28",
    author: "Tâm Lợi Foods",
    thumbnail: "/images/products/com-chien-duong-chau.png",
    featured: true,
  },
  {
    slug: "huong-dan-che-bien-com-chien",
    title: "Hướng dẫn chế biến cơm chiên trái thơm thơm ngon chuẩn vị",
    excerpt:
      "Chỉ với 5 phút và vài bước đơn giản, bạn đã có ngay đĩa cơm chiên trái thơm thơm lừng, đậm đà chuẩn vị.",
    category: "bi-kip",
    publishedAt: "2026-04-15",
    author: "Bếp Tâm Lợi",
    thumbnail: "/images/products/com-chien-hai-san.png",
  },
  {
    slug: "tam-loi-foods-mo-rong-nha-may",
    title: "Tâm Lợi Foods khởi công mở rộng nhà máy mới tại Tây Ninh",
    excerpt:
      "Dấu mốc quan trọng đánh dấu chặng đường phát triển và cam kết phục vụ thị trường rộng hơn của Tâm Lợi Foods.",
    category: "tin-tuc",
    publishedAt: "2026-03-30",
    author: "Tâm Lợi Foods",
    thumbnail: "/images/factory.png",
    featured: true,
  },
  {
    slug: "tam-loi-foods-trao-tang-1000-suat-an",
    title: "Tâm Lợi Foods trao tặng 1.000 suất ăn cho học sinh vùng cao",
    excerpt:
      "Chương trình thiện nguyện hằng năm tiếp tục lan toả yêu thương đến với các em nhỏ ở khu vực khó khăn.",
    category: "cong-dong",
    publishedAt: "2026-03-15",
    author: "Tâm Lợi Foods",
    thumbnail: "/images/products/cha-gio-truyen-thong.png",
  },
  {
    slug: "an-toan-thuc-pham-haccp-iso",
    title: "Hiểu đúng về tiêu chuẩn HACCP và ISO 22000 trong sản xuất thực phẩm",
    excerpt:
      "Cùng tìm hiểu vì sao các chứng nhận quốc tế này là yếu tố quan trọng đảm bảo an toàn thực phẩm.",
    category: "bi-kip",
    publishedAt: "2026-02-28",
    author: "Tâm Lợi Foods",
    thumbnail: "/images/products/xiu-mai-tom-thit.png",
  },
];

export function formatBlogDate(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleDateString("vi-VN", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}

export function categoryLabel(id: BlogCategory): string {
  return BLOG_CATEGORIES.find((c) => c.id === id)?.label ?? id;
}
