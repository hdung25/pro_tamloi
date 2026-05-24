"use client";

import Image from "next/image";
import Link from "next/link";
import { type BlogPost, formatBlogDate, categoryLabel } from "@/data/blog";
import { useLanguage } from "@/context/language-context";

type Props = {
  post: BlogPost;
};

export function BlogCard({ post }: Props) {
  const { language, t } = useLanguage();

  const title = language === "vi" ? post.title : post.titleEn;
  const excerpt = language === "vi" ? post.excerpt : post.excerptEn;

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col gap-4 overflow-hidden rounded-2xl bg-white p-4 shadow-sm ring-1 ring-[var(--color-line)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:flex-row sm:p-5"
    >
      <div className="relative aspect-[4/3] w-full shrink-0 overflow-hidden rounded-xl bg-[var(--color-cream)] sm:aspect-square sm:w-44 md:w-52">
        <Image
          src={post.thumbnail}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 220px"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.05]"
        />
      </div>
      <div className="flex min-w-0 flex-1 flex-col">
        <div className="flex flex-wrap items-center gap-3 text-[11px] uppercase tracking-wide text-[var(--color-ink-muted)]">
          <span className="font-semibold text-[var(--color-brand)]">
            {categoryLabel(post.category, language)}
          </span>
          <span className="text-[var(--color-ink-soft)]">·</span>
          <time dateTime={post.publishedAt}>{formatBlogDate(post.publishedAt, language)}</time>
        </div>
        <h3 className="mt-2 font-serif text-lg font-semibold leading-snug text-[var(--color-ink)] transition-colors group-hover:text-[var(--color-brand)] md:text-xl">
          {title}
        </h3>
        <p className="mt-2 line-clamp-2 text-[13px] leading-relaxed text-[var(--color-ink-muted)] md:line-clamp-3">
          {excerpt}
        </p>
        <span className="mt-auto inline-flex items-center gap-1 pt-3 text-[12px] font-semibold uppercase tracking-wide text-[var(--color-brand)]">
          {t("blog.readMore")}
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" aria-hidden>
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </span>
      </div>
    </Link>
  );
}
