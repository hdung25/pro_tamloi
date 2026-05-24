export type Product = {
  slug: string;
  name: string;
  nameEn: string;
  image: string;
  price: number;
  weight: string;
  unit?: string;
  unitEn?: string;
  category: ProductCategory;
  bestSeller?: boolean;
};

export type ProductCategory =
  | "com-chien"
  | "cha-gio"
  | "dimsum"
  | "do-chien"
  | "do-an-lien";

export const CATEGORIES: { id: ProductCategory; label: string; labelEn: string }[] = [
  { id: "com-chien", label: "Cơm chiên", labelEn: "Fried Rice" },
  { id: "cha-gio", label: "Chả giò", labelEn: "Spring Rolls" },
  { id: "dimsum", label: "Há cảo & Xíu mại", labelEn: "Dimsum & Shumai" },
  { id: "do-chien", label: "Đồ chiên", labelEn: "Fried Foods" },
  { id: "do-an-lien", label: "Đồ ăn liền", labelEn: "Ready to Eat" },
];

export const PRODUCTS: Product[] = [
  {
    slug: "com-chien-trai-thom",
    name: "Cơm chiên trái thơm",
    nameEn: "Pineapple Fried Rice",
    image: "/images/products/com-chien-trai-thom.png",
    price: 89000,
    weight: "300g",
    category: "com-chien",
    bestSeller: true,
  },
  {
    slug: "com-chien-duong-chau",
    name: "Cơm chiên dương châu",
    nameEn: "Yangzhou Fried Rice",
    image: "/images/products/com-chien-duong-chau.png",
    price: 79000,
    weight: "300g",
    category: "com-chien",
  },
  {
    slug: "com-chien-hai-san",
    name: "Cơm chiên hải sản",
    nameEn: "Seafood Fried Rice",
    image: "/images/products/com-chien-hai-san.png",
    price: 89000,
    weight: "300g",
    category: "com-chien",
  },
  {
    slug: "com-chien-ga-xoi-mo",
    name: "Cơm chiên gà xối mỡ",
    nameEn: "Crispy Chicken Fried Rice",
    image: "/images/products/com-chien-ga-xoi-mo.png",
    price: 75000,
    weight: "300g",
    category: "com-chien",
  },
  {
    slug: "com-ga-teriyaki",
    name: "Cơm gà teriyaki",
    nameEn: "Teriyaki Chicken Rice",
    image: "/images/products/com-ga-teriyaki.png",
    price: 89000,
    weight: "350g",
    category: "do-an-lien",
  },
  {
    slug: "cha-gio-truyen-thong",
    name: "Chả giò truyền thống",
    nameEn: "Traditional Spring Rolls",
    image: "/images/products/cha-gio-truyen-thong.png",
    price: 69000,
    weight: "500g",
    unit: "10 cuốn",
    unitEn: "10 pcs",
    category: "cha-gio",
  },
  {
    slug: "ha-cao-tom",
    name: "Há cảo tôm",
    nameEn: "Shrimp Dumplings",
    image: "/images/products/ha-cao-tom.png",
    price: 75000,
    weight: "300g",
    unit: "10 viên",
    unitEn: "10 pcs",
    category: "dimsum",
  },
  {
    slug: "xiu-mai-tom-thit",
    name: "Xíu mại tôm thịt",
    nameEn: "Shrimp & Pork Shumai",
    image: "/images/products/xiu-mai-tom-thit.png",
    price: 75000,
    weight: "300g",
    unit: "10 viên",
    unitEn: "10 pcs",
    category: "dimsum",
    bestSeller: true,
  },
  {
    slug: "tom-chien-xu",
    name: "Tôm chiên xù",
    nameEn: "Crispy Panko Shrimps",
    image: "/images/products/tom-chien-xu.png",
    price: 99000,
    weight: "250g",
    unit: "5 con",
    unitEn: "5 pcs",
    category: "do-chien",
  },
];

export function formatPrice(price: number, lang: "vi" | "en" = "vi"): string {
  if (lang === "en") {
    // Standard USD conversion or just keep in VND but translate format
    return `${price.toLocaleString("en-US")} VND`;
  }
  return `${price.toLocaleString("vi-VN")} VNĐ`;
}
