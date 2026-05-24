export type Product = {
  slug: string;
  name: string;
  image: string;
  price: number;
  weight: string;
  unit?: string;
  category: ProductCategory;
  bestSeller?: boolean;
};

export type ProductCategory =
  | "com-chien"
  | "cha-gio"
  | "dimsum"
  | "do-chien"
  | "do-an-lien";

export const CATEGORIES: { id: ProductCategory; label: string }[] = [
  { id: "com-chien", label: "Cơm chiên" },
  { id: "cha-gio", label: "Chả giò" },
  { id: "dimsum", label: "Há cảo & Xíu mại" },
  { id: "do-chien", label: "Đồ chiên" },
  { id: "do-an-lien", label: "Đồ ăn liền" },
];

export const PRODUCTS: Product[] = [
  {
    slug: "com-chien-trai-thom",
    name: "Cơm chiên trái thơm",
    image: "/images/products/com-chien-trai-thom.png",
    price: 89000,
    weight: "300g",
    category: "com-chien",
    bestSeller: true,
  },
  {
    slug: "com-chien-duong-chau",
    name: "Cơm chiên dương châu",
    image: "/images/products/com-chien-duong-chau.png",
    price: 79000,
    weight: "300g",
    category: "com-chien",
  },
  {
    slug: "com-chien-hai-san",
    name: "Cơm chiên hải sản",
    image: "/images/products/com-chien-hai-san.png",
    price: 89000,
    weight: "300g",
    category: "com-chien",
  },
  {
    slug: "com-chien-ga-xoi-mo",
    name: "Cơm chiên gà xối mỡ",
    image: "/images/products/com-chien-ga-xoi-mo.png",
    price: 75000,
    weight: "300g",
    category: "com-chien",
  },
  {
    slug: "com-ga-teriyaki",
    name: "Cơm gà teriyaki",
    image: "/images/products/com-ga-teriyaki.png",
    price: 89000,
    weight: "350g",
    category: "do-an-lien",
  },
  {
    slug: "cha-gio-truyen-thong",
    name: "Chả giò truyền thống",
    image: "/images/products/cha-gio-truyen-thong.png",
    price: 69000,
    weight: "500g",
    unit: "10 cuốn",
    category: "cha-gio",
  },
  {
    slug: "ha-cao-tom",
    name: "Há cảo tôm",
    image: "/images/products/ha-cao-tom.png",
    price: 75000,
    weight: "300g",
    unit: "10 viên",
    category: "dimsum",
  },
  {
    slug: "xiu-mai-tom-thit",
    name: "Xíu mại tôm thịt",
    image: "/images/products/xiu-mai-tom-thit.png",
    price: 75000,
    weight: "300g",
    unit: "10 viên",
    category: "dimsum",
    bestSeller: true,
  },
  {
    slug: "tom-chien-xu",
    name: "Tôm chiên xù",
    image: "/images/products/tom-chien-xu.png",
    price: 99000,
    weight: "250g",
    unit: "5 con",
    category: "do-chien",
  },
];

export function formatPrice(price: number): string {
  return `${price.toLocaleString("vi-VN")} VNĐ`;
}
