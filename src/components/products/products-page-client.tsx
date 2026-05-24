"use client";

import { useMemo, useState } from "react";
import { CATEGORIES, PRODUCTS, type ProductCategory } from "@/data/products";
import { ProductCard } from "./product-card";
import { Reveal } from "@/components/ui/reveal";
import { useLanguage } from "@/context/language-context";

type SortKey = "newest" | "price-asc" | "price-desc";

const BRANDS_VI = ["Tâm Lợi Foods", "Tâm Lợi Premium", "Tâm Lợi Express"];
const BRANDS_EN = ["Tam Loi Foods", "Tam Loi Premium", "Tam Loi Express"];

const FEATURES_VI = ["Đông lạnh", "Sẵn sàng dùng", "Không chất bảo quản", "Hữu cơ"];
const FEATURES_EN = ["Frozen", "Ready to eat", "No preservatives", "Organic"];

const PRICE_MIN = 50000;
const PRICE_MAX = 200000;

export function ProductsPageClient() {
  const { language, t } = useLanguage();

  const BRANDS = language === "vi" ? BRANDS_VI : BRANDS_EN;
  const FEATURES = language === "vi" ? FEATURES_VI : FEATURES_EN;

  const [selectedCats, setSelectedCats] = useState<Set<ProductCategory>>(
    new Set(),
  );
  const [priceMax, setPriceMax] = useState<number>(PRICE_MAX);
  const [brands, setBrands] = useState<Set<string>>(new Set());
  const [features, setFeatures] = useState<Set<string>>(new Set());
  const [sort, setSort] = useState<SortKey>("newest");

  const toggleCat = (id: ProductCategory) => {
    setSelectedCats((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };
  const toggleBrand = (b: string) => {
    setBrands((prev) => {
      const next = new Set(prev);
      if (next.has(b)) next.delete(b);
      else next.add(b);
      return next;
    });
  };
  const toggleFeature = (f: string) => {
    setFeatures((prev) => {
      const next = new Set(prev);
      if (next.has(f)) next.delete(f);
      else next.add(f);
      return next;
    });
  };
  const clearFilters = () => {
    setSelectedCats(new Set());
    setPriceMax(PRICE_MAX);
    setBrands(new Set());
    setFeatures(new Set());
  };

  const filtered = useMemo(() => {
    let list = PRODUCTS.slice();
    if (selectedCats.size > 0) {
      list = list.filter((p) => selectedCats.has(p.category));
    }
    list = list.filter((p) => p.price <= priceMax);
    if (sort === "price-asc") list.sort((a, b) => a.price - b.price);
    else if (sort === "price-desc") list.sort((a, b) => b.price - a.price);
    return list;
  }, [selectedCats, priceMax, sort]);

  return (
    <section className="bg-white py-10 md:py-12">
      <div className="container-page grid gap-8 md:grid-cols-12">
        <aside className="md:col-span-3">
          <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-[var(--color-line)]">
            <h3 className="border-b border-[var(--color-line)] pb-3 text-sm font-bold uppercase tracking-wide text-[var(--color-brand)]">
              {language === "vi" ? "Danh mục sản phẩm" : "Product Categories"}
            </h3>
            <ul className="mt-4 space-y-2.5">
              {CATEGORIES.map((c) => {
                const active = selectedCats.has(c.id);
                const categoryLabel = language === "vi" ? c.label : c.labelEn;
                return (
                  <li key={c.id}>
                    <button
                      type="button"
                      onClick={() => toggleCat(c.id)}
                      className="flex w-full items-center gap-2.5 text-left text-[14px] text-[var(--color-ink)] transition-colors hover:text-[var(--color-brand)]"
                    >
                      <span
                        className={`flex h-4 w-4 items-center justify-center rounded-full border-2 transition-colors ${
                          active
                            ? "border-[var(--color-brand)] bg-[var(--color-brand)]"
                            : "border-[var(--color-cream-dark)]"
                        }`}
                      >
                        {active && (
                          <span className="h-1.5 w-1.5 rounded-full bg-white" />
                        )}
                      </span>
                      {categoryLabel}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="mt-5 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-[var(--color-line)]">
            <h3 className="border-b border-[var(--color-line)] pb-3 text-sm font-bold uppercase tracking-wide text-[var(--color-brand)]">
              {language === "vi" ? "Bộ lọc sản phẩm" : "Product Filters"}
            </h3>

            <div className="mt-4">
              <p className="text-[13px] font-semibold text-[var(--color-ink)]">
                {language === "vi" ? "Khoảng giá" : "Price Range"}
              </p>
              <input
                type="range"
                min={PRICE_MIN}
                max={PRICE_MAX}
                step={5000}
                value={priceMax}
                onChange={(e) => setPriceMax(Number(e.target.value))}
                className="mt-3 w-full accent-[var(--color-brand)]"
              />
              <div className="mt-1 flex justify-between text-[11px] text-[var(--color-ink-muted)]">
                <span>{PRICE_MIN.toLocaleString(language === "vi" ? "vi-VN" : "en-US")}{language === "vi" ? "đ" : " VND"}</span>
                <span className="font-semibold text-[var(--color-brand)]">
                  {priceMax.toLocaleString(language === "vi" ? "vi-VN" : "en-US")}{language === "vi" ? "đ" : " VND"}
                </span>
              </div>
            </div>

            <div className="mt-5">
              <p className="text-[13px] font-semibold text-[var(--color-ink)]">
                {language === "vi" ? "Thương hiệu" : "Brands"}
              </p>
              <ul className="mt-2 space-y-2">
                {BRANDS.map((b) => (
                  <li key={b}>
                    <label className="flex cursor-pointer items-center gap-2 text-[13px] text-[var(--color-ink-muted)] hover:text-[var(--color-brand)]">
                      <input
                        type="checkbox"
                        checked={brands.has(b)}
                        onChange={() => toggleBrand(b)}
                        className="h-4 w-4 accent-[var(--color-brand)]"
                      />
                      {b}
                    </label>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-5">
              <p className="text-[13px] font-semibold text-[var(--color-ink)]">
                {language === "vi" ? "Đặc điểm" : "Features"}
              </p>
              <ul className="mt-2 space-y-2">
                {FEATURES.map((f) => (
                  <li key={f}>
                    <label className="flex cursor-pointer items-center gap-2 text-[13px] text-[var(--color-ink-muted)] hover:text-[var(--color-brand)]">
                      <input
                        type="checkbox"
                        checked={features.has(f)}
                        onChange={() => toggleFeature(f)}
                        className="h-4 w-4 accent-[var(--color-brand)]"
                      />
                      {f}
                    </label>
                  </li>
                ))}
              </ul>
            </div>

            <button
              type="button"
              onClick={clearFilters}
              className="mt-6 w-full rounded-full border-2 border-[var(--color-brand)] py-2 text-[12px] font-bold uppercase tracking-wide text-[var(--color-brand)] transition-colors hover:bg-[var(--color-brand)] hover:text-white"
            >
              {language === "vi" ? "Xoá bộ lọc" : "Clear Filters"}
            </button>
          </div>
        </aside>

        <div className="md:col-span-9">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="text-[13px] text-[var(--color-ink-muted)]">
              {language === "vi" ? (
                <>Hiển thị <span className="font-semibold text-[var(--color-ink)]">{filtered.length}</span> trong {PRODUCTS.length} sản phẩm</>
              ) : (
                <>Showing <span className="font-semibold text-[var(--color-ink)]">{filtered.length}</span> of {PRODUCTS.length} products</>
              )}
            </p>
            <label className="flex items-center gap-2 text-[13px] text-[var(--color-ink-muted)]">
              {language === "vi" ? "Sắp xếp:" : "Sort by:"}
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value as SortKey)}
                className="rounded-md border border-[var(--color-line)] bg-white px-3 py-1.5 text-[13px] text-[var(--color-ink)] focus:border-[var(--color-brand)] focus:outline-none"
              >
                <option value="newest">{language === "vi" ? "Mới nhất" : "Newest"}</option>
                <option value="price-asc">{language === "vi" ? "Giá thấp → cao" : "Price: Low to High"}</option>
                <option value="price-desc">{language === "vi" ? "Giá cao → thấp" : "Price: High to Low"}</option>
              </select>
            </label>
          </div>

          {filtered.length === 0 ? (
            <div className="mt-12 rounded-xl border-2 border-dashed border-[var(--color-cream-dark)] bg-[var(--color-cream)] py-16 text-center text-[var(--color-ink-muted)]">
              <p className="text-base font-medium">
                {t("products.empty")}
              </p>
              <button
                type="button"
                onClick={clearFilters}
                className="mt-3 text-sm font-semibold text-[var(--color-brand)] hover:underline"
              >
                {language === "vi" ? "Xoá tất cả bộ lọc" : "Clear all filters"}
              </button>
            </div>
          ) : (
            <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-5">
              {filtered.map((p, i) => (
                <Reveal key={p.slug} direction="up" delay={(i % 6) * 80}>
                  <ProductCard product={p} />
                </Reveal>
              ))}
            </div>
          )}

          {filtered.length > 0 && (
            <nav className="mt-10 flex items-center justify-center gap-2" aria-label="Pagination">
              <button
                type="button"
                aria-label={language === "vi" ? "Trang trước" : "Previous Page"}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-line)] text-[var(--color-ink-muted)] transition-colors hover:border-[var(--color-brand)] hover:text-[var(--color-brand)]"
              >
                ‹
              </button>
              <button
                type="button"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--color-brand)] text-sm font-semibold text-white"
              >
                1
              </button>
              <button
                type="button"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-line)] text-sm font-semibold text-[var(--color-ink)] transition-colors hover:border-[var(--color-brand)] hover:text-[var(--color-brand)]"
              >
                2
              </button>
              <button
                type="button"
                aria-label={language === "vi" ? "Trang sau" : "Next Page"}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-line)] text-[var(--color-ink-muted)] transition-colors hover:border-[var(--color-brand)] hover:text-[var(--color-brand)]"
              >
                ›
              </button>
            </nav>
          )}
        </div>
      </div>
    </section>
  );
}
