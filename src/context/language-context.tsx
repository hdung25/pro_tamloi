"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type Language = "vi" | "en";

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const TRANSLATIONS: Record<Language, Record<string, string>> = {
  vi: {
    // Navigation
    "nav.home": "TRANG CHỦ",
    "nav.about": "VỀ CHÚNG TÔI",
    "nav.products": "SẢN PHẨM VIÊN",
    "nav.desserts": "TRÁNG MIỆNG",
    "nav.blog": "BLOG",
    "nav.contact": "LIÊN HỆ",
    
    // Header & Footer
    "footer.tagline": "Tâm Lợi Foods — Ngon lành từ tâm, an toàn cho sức khỏe",
    "footer.title": "TÂM LỢI FOODS",
    "footer.intro": "Tâm Lợi Foods tự hào là thương hiệu thực phẩm đông lạnh Việt Nam chất lượng cao. Chúng tôi luôn cải tiến quy trình công nghệ và kỹ thuật để mang đến sản phẩm an toàn và trọn vẹn dinh dưỡng nhất.",
    "footer.quickLinks": "Liên kết nhanh",
    "footer.contact": "Thông tin liên hệ",
    "footer.address": "Địa chỉ: Đường số 8, KCN Trảng Bàng, Tây Ninh",
    "footer.phone": "Điện thoại: 0276.389.8888",
    "footer.email": "Email: info@tamloifoods.vn",
    "footer.copyright": "© 2026 Tâm Lợi Foods. Bảo lưu mọi quyền.",

    // Home Page - Hero
    "home.hero.title": "TÂM LỢI FOODS",
    "home.hero.subtitle": "Ngon lành từ tâm\nAn toàn cho sức khỏe",
    "home.hero.desc": "Thực phẩm chất lượng, tiện lợi, đảm bảo dinh dưỡng — mang đến cuộc sống lành mạnh đầy đủ cho mọi gia đình Việt.",
    "home.hero.cta": "KHÁM PHÁ SẢN PHẨM",

    // Home Page - USP Strip
    "home.usp.ingredient.title": "NGUYÊN LIỆU CHỌN LỌC",
    "home.usp.ingredient.desc": "Từ nguồn cung uy tín, kiểm soát chặt chẽ",
    "home.usp.safety.title": "AN TOÀN & CHẤT LƯỢNG",
    "home.usp.safety.desc": "Đạt chuẩn HACCP, ISO 22000:2018",
    "home.usp.convenience.title": "TIỆN LỢI & NGON MIỆNG",
    "home.usp.convenience.desc": "Sản phẩm đa dạng, dễ chế biến tại nhà",
    "home.usp.community.title": "TRÁCH NHIỆM CỘNG ĐỒNG",
    "home.usp.community.desc": "Vì sức khỏe người Việt và cộng đồng",

    // Home Page - Brand Story
    "home.story.tag": "Câu chuyện thương hiệu",
    "home.story.title": "Vì bữa ăn ngon lành\nvà cuộc sống lành mạnh",
    "home.story.p1": "Tâm Lợi Foods tự hào là thương hiệu thực phẩm Việt với hơn 30 năm đồng hành cùng người tiêu dùng — mang đến những bữa ăn ngon lành, tiện lợi, an toàn cho mọi gia đình Việt.",
    "home.story.p2": "Từ nguyên liệu chọn lọc kỹ lưỡng, quy trình sản xuất khép kín đạt chuẩn HACCP và ISO 22000:2018, đến từng sản phẩm trên kệ — chúng tôi cam kết giữ trọn hương vị truyền thống và giá trị dinh dưỡng cho cuộc sống lành mạnh hơn.",
    "home.story.ceo": "VS. Thị Mai Hương",
    "home.story.ceoTitle": "Tổng Giám đốc",

    // Home Page - Featured Products
    "home.featured.title": "Sản Phẩm Nổi Bật",
    "home.featured.desc": "Được hàng triệu gia đình Việt lựa chọn và tin dùng mỗi ngày nhờ hương vị thơm ngon đặc trưng và chất lượng tuyệt hảo.",
    "home.featured.viewAll": "XEM TẤT CẢ SẢN PHẨM",
    "home.featured.bestSeller": "BÁN CHẠY",

    // About Us Page
    "about.title": "Về chúng tôi",
    "about.subtitle": "Tâm Lợi Foods mang đến đa dạng sản phẩm chất lượng — đảm bảo ngon, tiện lợi và an toàn cho cuộc sống của mọi gia đình Việt.",
    "about.intro.tag": "GIỚI THIỆU",
    "about.intro.p1": "Thành lập từ năm 1987, Tâm Lợi Foods là doanh nghiệp hàng đầu trong lĩnh vực sản xuất và phân phối thực phẩm chế biến tại Việt Nam.",
    "about.intro.p2": "Với hệ thống nhà máy hiện đại, quy trình sản xuất khép kín đạt chuẩn quốc tế và đội ngũ hơn 500 nhân viên giàu kinh nghiệm, chúng tôi không ngừng đưa sản phẩm chất lượng đến mọi gia đình Việt — đảm bảo dinh dưỡng, ngon miệng và tiện lợi.",
    "about.intro.p3": "Sứ mệnh của Tâm Lợi Foods là mang lại bữa ăn an toàn, hợp khẩu vị và giá phải chăng, đồng hành cùng sức khỏe và niềm vui của hàng triệu người tiêu dùng Việt mỗi ngày.",
    "about.intro.badgeText": "NĂM KINH NGHIỆM",

    // About Us - Stats
    "about.stats.1987": "Năm thành lập",
    "about.stats.25000": "Tấn sản phẩm mỗi năm",
    "about.stats.iso": "Chứng nhận quốc tế",
    "about.stats.500": "Nhân viên & đối tác",

    // About Us - Core Values
    "about.values.tag": "Giá trị cốt lõi",
    "about.values.title": "Nền tảng của sự phát triển bền vững",
    "about.values.quality.title": "Chất lượng thượng hạng",
    "about.values.quality.desc": "Cam kết mang đến những sản phẩm thơm ngon nhất từ nguyên liệu chọn lọc cao cấp.",
    "about.values.safety.title": "An toàn tuyệt đối",
    "about.values.safety.desc": "Quy trình khép kín, đạt chuẩn HACCP và ISO 22000:2018 quốc tế.",
    "about.values.innovation.title": "Cải tiến liên tục",
    "about.values.innovation.desc": "Không ngừng đổi mới công nghệ và sáng tạo hương vị để đáp ứng xu hướng ẩm thực.",
    "about.values.responsibility.title": "Trách nhiệm xã hội",
    "about.values.responsibility.desc": "Phát triển bền vững gắn liền với trách nhiệm bảo vệ môi trường và đóng góp cộng đồng.",

    // About Us - Process
    "about.process.tag": "Quy trình sản xuất",
    "about.process.title": "Khép kín từ trang trại đến bàn ăn",
    "about.process.step1.title": "1. Nguyên liệu",
    "about.process.step1.desc": "Nguồn nguyên liệu tươi sạch được tuyển chọn nghiêm ngặt từ các nông trang chuẩn VietGAP.",
    "about.process.step2.title": "2. Chế biến",
    "about.process.step2.desc": "Sử dụng công nghệ tiên tiến hàng đầu, dây chuyền chế biến hiện đại đảm bảo dinh dưỡng.",
    "about.process.step3.title": "3. Cấp đông siêu tốc",
    "about.process.step3.desc": "Công nghệ cấp đông nhanh IQF giữ nguyên cấu trúc tế bào, bảo toàn trọn vẹn vị tươi ngon.",
    "about.process.step4.title": "4. Đóng gói & phân phối",
    "about.process.step4.desc": "Đóng gói theo tiêu chuẩn an toàn, vận chuyển bằng xe đông lạnh chuyên dụng đến điểm bán lẻ.",

    // About Us - Milestones
    "about.milestones.10years.years": "10 năm",
    "about.milestones.10years.title": "Đồng hành cùng người tiêu dùng Việt",
    "about.milestones.10years.desc": "Hơn một thập kỷ chinh phục bữa ăn của hàng triệu gia đình bằng chất lượng và sự tận tâm.",
    "about.milestones.12years.years": "12 năm",
    "about.milestones.12years.title": "Đối tác chiến lược của hệ thống bán lẻ",
    "about.milestones.12years.desc": "Phân phối tại các chuỗi siêu thị lớn AEON, LOTTE Mart, Big C, Co.opmart, Bách hoá XANH…",

    // Products Page
    "products.title": "Sản phẩm của chúng tôi",
    "products.subtitle": "Khám phá đa dạng các món ăn ngon lành, chất lượng từ Tâm Lợi Foods — luôn chuẩn bị sẵn sàng, tiện lợi cho bữa ăn gia đình.",
    "products.all": "Tất cả",
    "products.com-chien": "Cơm chiên",
    "products.cha-gio": "Chả giò",
    "products.dimsum": "Há cảo & Xíu mại",
    "products.do-chien": "Đồ chiên",
    "products.do-an-lien": "Đồ ăn liền",
    "products.empty": "Không tìm thấy sản phẩm nào trong danh mục này.",
    "products.details.cta": "Xem Chi Tiết",
    "products.bestSeller": "BÁN CHẠY",
    "products.related": "Sản phẩm liên quan",
    "products.details.title": "Chi tiết sản phẩm",
    "products.weight": "Trọng lượng",
    "products.unit": "Quy cách",
    "products.price": "Giá",
    "products.order.cta": "Đặt Hàng Ngay",
    "products.desc.title": "Mô tả sản phẩm",
    "products.desc.default": "Sản phẩm cao cấp được sản xuất trên dây chuyền hiện đại chuẩn HACCP và ISO 22000 của Tâm Lợi Foods. Nguyên liệu tuyển chọn kỹ lưỡng, giữ trọn vẹn hương vị tươi ngon và giàu dinh dưỡng, rất tiện lợi cho bữa ăn gia đình.",

    // Desserts Page (Tráng miệng)
    "desserts.title": "Tráng miệng thanh mát",
    "desserts.subtitle": "Các món tráng miệng, nước mát, bánh ngọt ngọt lành thanh mát giúp bữa ăn thêm trọn vẹn.",
    "desserts.empty": "Các sản phẩm tráng miệng đang được chuẩn bị và sẽ sớm ra mắt trong thời gian tới. Xin vui lòng quay lại sau!",
    "desserts.comingSoon": "Sắp ra mắt",

    // Blog Page
    "blog.title": "Cẩm nang dinh dưỡng & ẩm thực",
    "blog.subtitle": "Bí quyết nấu ăn, mẹo vặt nhà bếp và các tin tức, hoạt động cộng đồng nổi bật nhất từ gia đình Tâm Lợi Foods.",
    "blog.categories.all": "Tất cả bài viết",
    "blog.categories.bi-kip": "Bí kíp nấu ăn",
    "blog.categories.meo-vat": "Mẹo vặt nhà bếp",
    "blog.categories.tin-tuc": "Tin tức",
    "blog.categories.cong-dong": "Hoạt động cộng đồng",
    "blog.readMore": "ĐỌC TIẾP",
    "blog.empty": "Không tìm thấy bài viết nào trong danh mục này.",
    "blog.sidebar.title": "Bài viết nổi bật",
    "blog.sidebar.categories": "Danh mục",
    "blog.details.back": "← Quay lại danh sách",
    "blog.details.author": "Tác giả",
    "blog.details.date": "Ngày đăng",

    // Contact Page
    "contact.title": "Liên hệ với chúng tôi",
    "contact.subtitle": "Tâm Lợi Foods luôn sẵn lòng lắng nghe ý kiến phản hồi và giải đáp thắc mắc của quý khách hàng, đối tác.",
    "contact.info.title": "Thông tin liên hệ",
    "contact.info.address": "Đường số 8, KCN Trảng Bàng, Thị xã Trảng Bàng, Tỉnh Tây Ninh",
    "contact.info.phone": "Hotline hỗ trợ",
    "contact.info.email": "Email hỗ trợ",
    "contact.info.hours": "Giờ làm việc",
    "contact.info.hours1": "Thứ 2 - Thứ 7: 7:30 - 17:00",
    "contact.info.hours2": "Chủ nhật: nghỉ",
    "contact.form.title": "Gửi tin nhắn cho chúng tôi",
    "contact.form.name": "Họ và tên",
    "contact.form.email": "Địa chỉ Email",
    "contact.form.phone": "Số điện thoại",
    "contact.form.message": "Nội dung lời nhắn",
    "contact.form.submit": "Gửi lời nhắn",
    "contact.form.sending": "Đang gửi...",
    "contact.form.success": "Gửi lời nhắn thành công! Chúng tôi sẽ phản hồi lại bạn sớm nhất có thể.",
    "contact.form.error": "Có lỗi xảy ra khi gửi tin nhắn. Vui lòng thử lại sau.",
  },
  en: {
    // Navigation
    "nav.home": "HOME",
    "nav.about": "ABOUT US",
    "nav.products": "PRODUCTS",
    "nav.desserts": "DESSERTS",
    "nav.blog": "BLOG",
    "nav.contact": "CONTACT",
    
    // Header & Footer
    "footer.tagline": "Tam Loi Foods — Delicious from heart, safe for health",
    "footer.title": "TAM LOI FOODS",
    "footer.intro": "Tam Loi Foods is proud to be a high-quality Vietnamese frozen food brand. We constantly improve our technology and techniques to bring the safest and most nutritionally complete products.",
    "footer.quickLinks": "Quick Links",
    "footer.contact": "Contact Info",
    "footer.address": "Address: Road 8, Trang Bang IP, Tay Ninh",
    "footer.phone": "Phone: 0276.389.8888",
    "footer.email": "Email: info@tamloifoods.vn",
    "footer.copyright": "© 2026 Tam Loi Foods. All rights reserved.",

    // Home Page - Hero
    "home.hero.title": "TAM LOI FOODS",
    "home.hero.subtitle": "Delicious from Heart\nSafe for Health",
    "home.hero.desc": "High quality, convenient, nutritious foods — bringing a healthy and complete life to every Vietnamese family.",
    "home.hero.cta": "EXPLORE PRODUCTS",

    // Home Page - USP Strip
    "home.usp.ingredient.title": "SELECTED INGREDIENTS",
    "home.usp.ingredient.desc": "From reputable sources, strictly controlled",
    "home.usp.safety.title": "SAFETY & QUALITY",
    "home.usp.safety.desc": "HACCP & ISO 22000:2018 Certified",
    "home.usp.convenience.title": "CONVENIENT & DELICIOUS",
    "home.usp.convenience.desc": "Diverse products, easy to cook at home",
    "home.usp.community.title": "COMMUNITY RESPONSIBILITY",
    "home.usp.community.desc": "For Vietnamese health and community",

    // Home Page - Brand Story
    "home.story.tag": "Brand Story",
    "home.story.title": "For delicious meals\nand a healthy life",
    "home.story.p1": "Tam Loi Foods is proud to be a Vietnamese food brand with over 30 years of accompanying consumers — bringing delicious, convenient, safe meals to every Vietnamese family.",
    "home.story.p2": "From carefully selected ingredients, a closed production process certified under HACCP and ISO 22000:2018 standards, to every product on the shelves — we commit to keeping the traditional flavor and nutritional value for a healthier life.",
    "home.story.ceo": "Mrs. Thi Mai Huong",
    "home.story.ceoTitle": "General Director",

    // Home Page - Featured Products
    "home.featured.title": "Featured Products",
    "home.featured.desc": "Chosen and trusted by millions of Vietnamese families every day thanks to its uniquely delicious flavor and excellent quality.",
    "home.featured.viewAll": "VIEW ALL PRODUCTS",
    "home.featured.bestSeller": "BEST SELLER",

    // About Us Page
    "about.title": "About Us",
    "about.subtitle": "Tam Loi Foods offers a wide variety of quality products — ensuring delicious, convenient and safe meals for every Vietnamese family.",
    "about.intro.tag": "INTRODUCTION",
    "about.intro.p1": "Established in 1987, Tam Loi Foods is a leading enterprise in the field of production and distribution of processed foods in Vietnam.",
    "about.intro.p2": "With modern factory systems, internationally standardized closed production lines, and a team of over 500 experienced staff, we constantly bring high-quality products to every Vietnamese family — ensuring nutrition, taste, and convenience.",
    "about.intro.p3": "The mission of Tam Loi Foods is to bring safe, tasty, and affordable meals, accompanying the health and joy of millions of Vietnamese consumers every day.",
    "about.intro.badgeText": "YEARS EXPERIENCE",

    // About Us - Stats
    "about.stats.1987": "Founded year",
    "about.stats.25000": "Tons of products per year",
    "about.stats.iso": "International standard",
    "about.stats.500": "Employees & partners",

    // About Us - Core Values
    "about.values.tag": "Core Values",
    "about.values.title": "The foundation of sustainable development",
    "about.values.quality.title": "Premium Quality",
    "about.values.quality.desc": "Committed to delivering the most delicious products from premium, selected ingredients.",
    "about.values.safety.title": "Absolute Safety",
    "about.values.safety.desc": "Closed processes, certified under HACCP and ISO 22000:2018 standards.",
    "about.values.innovation.title": "Continuous Innovation",
    "about.values.innovation.desc": "Constantly updating technology and creating flavors to keep up with culinary trends.",
    "about.values.responsibility.title": "Social Responsibility",
    "about.values.responsibility.desc": "Sustainable development goes hand-in-hand with environmental protection and social contribution.",

    // About Us - Process
    "about.process.tag": "Production Process",
    "about.process.title": "Closed from farm to table",
    "about.process.step1.title": "1. Ingredients Selection",
    "about.process.step1.desc": "Fresh, clean ingredients strictly selected from standardized VietGAP farms.",
    "about.process.step2.title": "2. Processing",
    "about.process.step2.desc": "Using leading-edge technologies and modern processing lines to preserve nutrition.",
    "about.process.step3.title": "3. IQF Quick Freezing",
    "about.process.step3.desc": "Ultra-fast freezing technology keeps cell structures intact, preserving absolute freshness.",
    "about.process.step4.title": "4. Packaging & Distribution",
    "about.process.step4.desc": "Safe standardized packaging, transported by specialized refrigerated trucks to retailers.",

    // About Us - Milestones
    "about.milestones.10years.years": "10 years",
    "about.milestones.10years.title": "Accompanying Vietnamese consumers",
    "about.milestones.10years.desc": "Over a decade conquering the meals of millions of families with quality and dedication.",
    "about.milestones.12years.years": "12 years",
    "about.milestones.12years.title": "Strategic retail partner",
    "about.milestones.12years.desc": "Distributed at major retail chains: AEON, LOTTE Mart, Big C, Co.opmart, Bach hoa XANH...",

    // Products Page
    "products.title": "Our Products",
    "products.subtitle": "Explore our wide range of delicious, quality dishes from Tam Loi Foods — always ready, convenient for family meals.",
    "products.all": "All",
    "products.com-chien": "Fried Rice",
    "products.cha-gio": "Spring Rolls",
    "products.dimsum": "Dimsum & Dumplings",
    "products.do-chien": "Fried Foods",
    "products.do-an-lien": "Ready to Eat",
    "products.empty": "No products found in this category.",
    "products.details.cta": "View Details",
    "products.bestSeller": "BEST SELLER",
    "products.related": "Related Products",
    "products.details.title": "Product Details",
    "products.weight": "Weight",
    "products.unit": "Specification",
    "products.price": "Price",
    "products.order.cta": "Order Now",
    "products.desc.title": "Product Description",
    "products.desc.default": "High-quality products manufactured on modern HACCP and ISO 22000 certified lines of Tam Loi Foods. Carefully selected ingredients, preserving fresh taste and rich nutrition, highly convenient for family meals.",

    // Desserts Page (Tráng miệng)
    "desserts.title": "Refreshing Desserts",
    "desserts.subtitle": "Sweet, refreshing desserts, herbal drinks, and cakes to complete your meal beautifully.",
    "desserts.empty": "Dessert products are being prepared and will be launched soon. Please check back later!",
    "desserts.comingSoon": "Coming Soon",

    // Blog Page
    "blog.title": "Nutrition & Culinary Guide",
    "blog.subtitle": "Cooking secrets, kitchen tips, and outstanding news and community activities from the Tam Loi Foods family.",
    "blog.categories.all": "All Posts",
    "blog.categories.bi-kip": "Cooking Guide",
    "blog.categories.meo-vat": "Kitchen Tips",
    "blog.categories.tin-tuc": "News",
    "blog.categories.cong-dong": "Community",
    "blog.readMore": "READ MORE",
    "blog.empty": "No articles found in this category.",
    "blog.sidebar.title": "Featured Posts",
    "blog.sidebar.categories": "Categories",
    "blog.details.back": "← Back to list",
    "blog.details.author": "Author",
    "blog.details.date": "Date",

    // Contact Page
    "contact.title": "Contact Us",
    "contact.subtitle": "Tam Loi Foods is always happy to hear your feedback and answer any questions from customers and partners.",
    "contact.info.title": "Contact Information",
    "contact.info.address": "Road 8, Trang Bang IP, Trang Bang Town, Tay Ninh Province",
    "contact.info.phone": "Hotline Support",
    "contact.info.email": "Email Support",
    "contact.info.hours": "Working Hours",
    "contact.info.hours1": "Monday - Saturday: 7:30 AM - 5:00 PM",
    "contact.info.hours2": "Sunday: Closed",
    "contact.form.title": "Send Us A Message",
    "contact.form.name": "Full Name",
    "contact.form.email": "Email Address",
    "contact.form.phone": "Phone Number",
    "contact.form.message": "Message",
    "contact.form.submit": "Send Message",
    "contact.form.sending": "Sending...",
    "contact.form.success": "Message sent successfully! We will get back to you as soon as possible.",
    "contact.form.error": "An error occurred while sending the message. Please try again later.",
  }
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("vi");

  useEffect(() => {
    const stored = localStorage.getItem("language") as Language;
    if (stored === "vi" || stored === "en") {
      setLanguageState(stored);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("language", lang);
  };

  const t = (key: string): string => {
    return TRANSLATIONS[language]?.[key] ?? TRANSLATIONS["vi"]?.[key] ?? key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
