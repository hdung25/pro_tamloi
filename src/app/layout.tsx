import type { Metadata } from "next";
import { Be_Vietnam_Pro, Playfair_Display, Roboto_Mono } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const beVietnamPro = Be_Vietnam_Pro({
  variable: "--font-be-vietnam-pro",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tâm Lợi Foods — Ngon lành từ tâm, an toàn cho sức khỏe",
  description:
    "Tâm Lợi Foods — Thương hiệu thực phẩm đông lạnh Việt Nam. Cơm chiên, chả giò, hà lảo, dimsum… nguyên liệu chọn lọc, an toàn chất lượng.",
};

import { LanguageProvider } from "@/context/language-context";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className={`${beVietnamPro.variable} ${playfairDisplay.variable} ${robotoMono.variable}`}
      suppressHydrationWarning
    >
      <body 
        className="min-h-screen flex flex-col bg-white text-[var(--color-ink)]"
        suppressHydrationWarning
      >
        <LanguageProvider>
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </LanguageProvider>
      </body>
    </html>
  );
}
