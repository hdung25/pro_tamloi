import Image from "next/image";
import Link from "next/link";
import {
  BLOG_CATEGORIES,
  BLOG_POSTS,
  formatBlogDate,
} from "@/data/blog";

export function BlogSidebar() {
  const featured = BLOG_POSTS.filter((p) => p.featured).slice(0, 3);

  return (
    <aside className="space-y-5">
      <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-[var(--color-line)]">
        <form>
          <div className="flex overflow-hidden rounded-full border border-[var(--color-line)] focus-within:border-[var(--color-brand)]">
            <input
              type="search"
              placeholder="Tìm bài viết..."
              className="flex-1 bg-white px-4 py-2.5 text-[13px] text-[var(--color-ink)] placeholder:text-[var(--color-ink-soft)] focus:outline-none"
              aria-label="Tìm bài viết"
            />
            <button
              type="submit"
              aria-label="Tìm"
              className="flex w-12 items-center justify-center bg-[var(--color-brand)] text-white transition-colors hover:bg-[var(--color-brand-dark)]"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden>
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
            </button>
          </div>
        </form>
      </div>

      <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-[var(--color-line)]">
        <h3 className="border-b border-[var(--color-line)] pb-3 text-sm font-bold uppercase tracking-wide text-[var(--color-brand)]">
          Danh mục
        </h3>
        <ul className="mt-3 space-y-2.5">
          {BLOG_CATEGORIES.map((c) => {
            const count = BLOG_POSTS.filter((p) => p.category === c.id).length;
            return (
              <li key={c.id}>
                <Link
                  href={`/blog?category=${c.id}`}
                  className="flex items-center justify-between gap-2 text-[14px] text-[var(--color-ink)] transition-colors hover:text-[var(--color-brand)]"
                >
                  <span>{c.label}</span>
                  <span className="rounded-full bg-[var(--color-cream)] px-2 py-0.5 text-[11px] font-semibold text-[var(--color-brand)]">
                    {count}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-[var(--color-line)]">
        <h3 className="border-b border-[var(--color-line)] pb-3 text-sm font-bold uppercase tracking-wide text-[var(--color-brand)]">
          Bài viết nổi bật
        </h3>
        <ul className="mt-3 space-y-3">
          {featured.map((p) => (
            <li key={p.slug}>
              <Link
                href={`/blog/${p.slug}`}
                className="group flex items-start gap-3"
              >
                <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-lg bg-[var(--color-cream)]">
                  <Image
                    src={p.thumbnail}
                    alt=""
                    fill
                    sizes="64px"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="min-w-0">
                  <h4 className="line-clamp-2 text-[12px] font-semibold leading-snug text-[var(--color-ink)] transition-colors group-hover:text-[var(--color-brand)]">
                    {p.title}
                  </h4>
                  <time className="mt-1 block text-[11px] text-[var(--color-ink-muted)]">
                    {formatBlogDate(p.publishedAt)}
                  </time>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-2xl bg-[var(--color-brand)] p-5 text-white shadow-sm">
        <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wide">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden>
            <path d="m22 2-7 20-4-9-9-4 20-7Z" />
          </svg>
          Đăng ký nhận tin
        </h3>
        <p className="mt-2 text-[12px] leading-snug opacity-95">
          Nhận thông tin sản phẩm và bí kíp ẩm thực mới nhất
        </p>
        <form className="mt-3 flex overflow-hidden rounded-full bg-white">
          <input
            type="email"
            placeholder="Email của bạn"
            className="flex-1 bg-transparent px-4 py-2 text-[13px] text-[var(--color-ink)] placeholder:text-[var(--color-ink-soft)] focus:outline-none"
            aria-label="Email"
          />
          <button
            type="submit"
            className="bg-[var(--color-brand-dark)] px-4 text-[12px] font-semibold uppercase text-white transition-opacity hover:opacity-90"
          >
            Gửi
          </button>
        </form>
      </div>
    </aside>
  );
}
