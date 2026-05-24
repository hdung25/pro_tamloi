import type { Metadata } from "next";
import { PageBanner } from "@/components/page-banner";
import { BLOG_POSTS } from "@/data/blog";
import { BlogCard } from "@/components/blog/blog-card";
import { BlogSidebar } from "@/components/blog/blog-sidebar";
import { UspStrip } from "@/components/usp-strip";
import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "Blog & Tin tức — Tâm Lợi Foods",
  description:
    "Cẩm nang kiến thức hữu ích về ẩm thực, sức khỏe và các hoạt động mới nhất của Tâm Lợi Foods.",
};

export default function BlogPage() {
  return (
    <>
      <PageBanner
        title="Blog & Tin tức"
        subtitle="Cẩm nang những kiến thức hữu ích về ẩm thực, sức khỏe và các hoạt động mới nhất của Tâm Lợi Foods."
        image="/images/hero-com-chien.png"
        breadcrumbs={[
          { label: "Trang chủ", href: "/" },
          { label: "Blog" },
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
                aria-label="Trang trước"
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
                aria-label="Trang sau"
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
