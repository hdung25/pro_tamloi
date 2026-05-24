export type BlogCategory = "bi-kip" | "meo-vat" | "tin-tuc" | "cong-dong";

export type BlogPost = {
  slug: string;
  title: string;
  titleEn: string;
  excerpt: string;
  excerptEn: string;
  category: BlogCategory;
  publishedAt: string;
  author: string;
  authorEn: string;
  thumbnail: string;
  featured?: boolean;
};

export const BLOG_CATEGORIES: { id: BlogCategory; label: string; labelEn: string }[] = [
  { id: "bi-kip", label: "Bí kíp nấu ăn", labelEn: "Cooking Guide" },
  { id: "meo-vat", label: "Mẹo vặt nhà bếp", labelEn: "Kitchen Tips" },
  { id: "tin-tuc", label: "Tin tức", labelEn: "News" },
  { id: "cong-dong", label: "Hoạt động cộng đồng", labelEn: "Community" },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "bi-quyet-lua-chon-thuc-pham-dong-lanh",
    title: "Bí quyết lựa chọn thực phẩm đông lạnh an toàn cho gia đình",
    titleEn: "Secrets to choosing safe frozen food for your family",
    excerpt:
      "Cẩm nang chi tiết giúp bạn nhận biết và lựa chọn thực phẩm đông lạnh an toàn, đảm bảo dinh dưỡng cho cả gia đình.",
    excerptEn:
      "Detailed handbook to help you recognize and choose safe frozen foods, ensuring nutrition for the whole family.",
    category: "bi-kip",
    publishedAt: "2026-05-12",
    author: "Tâm Lợi Foods",
    authorEn: "Tam Loi Foods",
    thumbnail: "/images/products/com-chien-trai-thom.png",
    featured: true,
  },
  {
    slug: "5-meo-bao-quan-thuc-pham-tu-lanh",
    title: "5 mẹo bảo quản thực phẩm tủ lạnh giữ tươi lâu nhất",
    titleEn: "5 tips to preserve refrigerator food fresh for the longest time",
    excerpt:
      "Áp dụng đúng kỹ thuật bảo quản giúp thực phẩm tươi ngon, an toàn và giảm lãng phí đáng kể.",
    excerptEn:
      "Applying the correct preservation techniques keeps food fresh, safe, and significantly reduces waste.",
    category: "meo-vat",
    publishedAt: "2026-04-28",
    author: "Tâm Lợi Foods",
    authorEn: "Tam Loi Foods",
    thumbnail: "/images/products/com-chien-duong-chau.png",
    featured: true,
  },
  {
    slug: "huong-dan-che-bien-com-chien",
    title: "Hướng dẫn chế biến cơm chiên trái thơm thơm ngon chuẩn vị",
    titleEn: "Guide to making pineapple fried rice taste perfectly delicious",
    excerpt:
      "Chỉ với 5 phút và vài bước đơn giản, bạn đã có ngay đĩa cơm chiên trái thơm thơm lừng, đậm đà chuẩn vị.",
    excerptEn:
      "In just 5 minutes and a few simple steps, you have a fragrant, richly flavored pineapple fried rice plate.",
    category: "bi-kip",
    publishedAt: "2026-04-15",
    author: "Bếp Tâm Lợi",
    authorEn: "Tam Loi Kitchen",
    thumbnail: "/images/products/com-chien-hai-san.png",
  },
  {
    slug: "tam-loi-foods-mo-rong-nha-may",
    title: "Tâm Lợi Foods khởi công mở rộng nhà máy mới tại Tây Ninh",
    titleEn: "Tam Loi Foods breaks ground to expand new factory in Tay Ninh",
    excerpt:
      "Dấu mốc quan trọng đánh dấu chặng đường phát triển và cam kết phục vụ thị trường rộng hơn của Tâm Lợi Foods.",
    excerptEn:
      "A key milestone marking the development path and commitment to serve a broader market of Tam Loi Foods.",
    category: "tin-tuc",
    publishedAt: "2026-03-30",
    author: "Tâm Lợi Foods",
    authorEn: "Tam Loi Foods",
    thumbnail: "/images/factory.png",
    featured: true,
  },
  {
    slug: "tam-loi-foods-trao-tang-1000-suat-an",
    title: "Tâm Lợi Foods trao tặng 1.000 suất ăn cho học sinh vùng cao",
    titleEn: "Tam Loi Foods awards 1,000 meals to high-land students",
    excerpt:
      "Chương trình thiện nguyện hằng năm tiếp tục lan toả yêu thương đến với các em nhỏ ở khu vực khó khăn.",
    excerptEn:
      "The annual charity program continues to spread love to children in difficult areas.",
    category: "cong-dong",
    publishedAt: "2026-03-15",
    author: "Tâm Lợi Foods",
    authorEn: "Tam Loi Foods",
    thumbnail: "/images/products/cha-gio-truyen-thong.png",
  },
  {
    slug: "an-toan-thuc-pham-haccp-iso",
    title: "Hiểu đúng về tiêu chuẩn HACCP và ISO 22000 trong sản xuất thực phẩm",
    titleEn: "Understand correctly about HACCP and ISO 22000 in food production",
    excerpt:
      "Cùng tìm hiểu vì sao các chứng nhận quốc tế này là yếu tố quan trọng đảm bảo an toàn thực phẩm.",
    excerptEn:
      "Let's learn why these international certifications are key factors in ensuring food safety.",
    category: "bi-kip",
    publishedAt: "2026-02-28",
    author: "Tâm Lợi Foods",
    authorEn: "Tam Loi Foods",
    thumbnail: "/images/products/xiu-mai-tom-thit.png",
  },
];

export function formatBlogDate(iso: string, lang: "vi" | "en" = "vi"): string {
  const d = new Date(iso);
  if (lang === "en") {
    return d.toLocaleDateString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    });
  }
  return d.toLocaleDateString("vi-VN", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}

export function categoryLabel(id: BlogCategory, lang: "vi" | "en" = "vi"): string {
  const cat = BLOG_CATEGORIES.find((c) => c.id === id);
  if (!cat) return id;
  return lang === "vi" ? cat.label : cat.labelEn;
}
