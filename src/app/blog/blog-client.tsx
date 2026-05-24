"use client";

import { PageBanner } from "@/components/page-banner";
import { BLOG_POSTS } from "@/data/blog";
import { BlogCard } from "@/components/blog/blog-card";
import { BlogSidebar } from "@/components/blog/blog-sidebar";
import { UspStrip } from "@/components/usp-strip";
import { Reveal } from "@/components/ui/reveal";
import { useLanguage } from "@/context/language-context";

export function BlogPageClient() {
  const { language, t } = useLanguage();

  return (
    <>
      <PageBanner
        title={t("blog.title")}
        subtitle={t("blog.subtitle")}
        image="/images/hero-com-chien.png"
        breadcrumbs={[
          { label: t("nav.home"), href: "/" },
          { label: t("nav.blog") },
        ]}
        align="left"
      />

      <section className="bg-[var(--color-bg-soft)] py-10 md:py-14">
        <div className="container-page grid gap-8 md:grid-cols-12">
          <div className="space-y-5 md:col-span-8">
            {BLOG_POSTS.map((post, i) => (
              <Reveal key={post.slug} direction="up" delay={(i % 4) * 80}>
                <BlogCard post={post} />
              </Reveal>
            ))}

            <nav className="mt-8 flex items-center justify-center gap-2" aria-label="Pagination">
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
              {[2, 3].map((n) => (
                <button
                  key={n}
                  type="button"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-line)] text-sm font-semibold text-[var(--color-ink)] transition-colors hover:border-[var(--color-brand)] hover:text-[var(--color-brand)]"
                >
                  {n}
                </button>
              ))}
              <span className="px-1 text-[var(--color-ink-muted)]">...</span>
              <button
                type="button"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-line)] text-sm font-semibold text-[var(--color-ink)] transition-colors hover:border-[var(--color-brand)] hover:text-[var(--color-brand)]"
              >
                8
              </button>
              <button
                type="button"
                aria-label={language === "vi" ? "Trang sau" : "Next Page"}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-line)] text-[var(--color-ink-muted)] transition-colors hover:border-[var(--color-brand)] hover:text-[var(--color-brand)]"
              >
                ›
              </button>
            </nav>
          </div>

          <div className="md:col-span-4">
            <BlogSidebar />
          </div>
        </div>
      </section>

      <UspStrip />
    </>
  );
}
