import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  BLOG_POSTS,
  categoryLabel,
  formatBlogDate,
  type BlogPost,
} from "@/data/blog";
import { BlogSidebar } from "@/components/blog/blog-sidebar";
import { BlogCard } from "@/components/blog/blog-card";
import { UspStrip } from "@/components/usp-strip";
import { Reveal } from "@/components/ui/reveal";

type Params = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return { title: "Bài viết — Tâm Lợi Foods" };
  return {
    title: `${post.title} — Tâm Lợi Foods`,
    description: post.excerpt,
  };
}

function ShareIcons() {
  const items = [
    {
      label: "Facebook",
      svg: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5" aria-hidden>
          <path d="M13 22v-8h3l1-4h-4V7.5C13 6.4 13.4 6 14.5 6H17V2.3C16.5 2.2 15 2 13.7 2 10.8 2 9 3.8 9 6.9V10H6v4h3v8h4Z" />
        </svg>
      ),
    },
    {
      label: "Sao chép link",
      svg: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5" aria-hidden>
          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07L11.75 5.2" />
          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07L12.25 18.8" />
        </svg>
      ),
    },
  ];
  return (
    <div className="flex items-center gap-2">
      {items.map((it) => (
        <button
          key={it.label}
          type="button"
          aria-label={it.label}
          className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-cream)] text-[var(--color-brand)] transition-colors hover:bg-[var(--color-brand)] hover:text-white"
        >
          {it.svg}
        </button>
      ))}
    </div>
  );
}

export default async function BlogDetailPage({ params }: Params) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  const related: BlogPost[] = BLOG_POSTS.filter(
    (p) => p.category === post.category && p.slug !== post.slug,
  ).slice(0, 3);
  const fillRelated =
    related.length < 3
      ? [
          ...related,
          ...BLOG_POSTS.filter(
            (p) =>
              p.slug !== post.slug && !related.some((r) => r.slug === p.slug),
          ).slice(0, 3 - related.length),
        ]
      : related;

  return (
    <>
      <nav className="bg-white py-3 text-[12px]" aria-label="Breadcrumb">
        <ol className="container-page flex flex-wrap items-center gap-1.5 text-[var(--color-ink-muted)]">
          <li>
            <Link href="/" className="transition-colors hover:text-[var(--color-brand)]">
              Trang chủ
            </Link>
          </li>
          <li className="text-[var(--color-ink-soft)]">›</li>
          <li>
            <Link href="/blog" className="transition-colors hover:text-[var(--color-brand)]">
              Blog
            </Link>
          </li>
          <li className="text-[var(--color-ink-soft)]">›</li>
          <li className="line-clamp-1 text-[var(--color-ink)]">{post.title}</li>
        </ol>
      </nav>

      <section className="bg-white pb-6 pt-6 md:pb-8 md:pt-10">
        <div className="container-page">
          <Reveal direction="up">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-wide text-[var(--color-brand)] transition-colors hover:text-[var(--color-brand-dark)]"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden>
                <path d="m12 19-7-7 7-7" />
                <path d="M19 12H5" />
              </svg>
              Quay lại danh sách tin tức
            </Link>

            <h1 className="mt-5 font-serif text-3xl font-semibold leading-tight text-[var(--color-ink)] md:text-4xl">
              {post.title}
            </h1>
            <p className="mt-3 max-w-3xl text-[15px] leading-relaxed text-[var(--color-ink-muted)]">
              {post.excerpt}
            </p>

            <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-y border-[var(--color-line)] py-3">
              <div className="flex flex-wrap items-center gap-3 text-[12px] text-[var(--color-ink-muted)]">
                <time dateTime={post.publishedAt}>
                  {formatBlogDate(post.publishedAt)}
                </time>
                <span className="text-[var(--color-ink-soft)]">·</span>
                <span>{post.author}</span>
                <span className="text-[var(--color-ink-soft)]">·</span>
                <span className="rounded-full bg-[var(--color-cream)] px-2.5 py-0.5 font-semibold text-[var(--color-brand)]">
                  {categoryLabel(post.category)}
                </span>
              </div>
              <ShareIcons />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-[var(--color-bg-soft)] py-10 md:py-12">
        <div className="container-page grid gap-8 md:grid-cols-12">
          <article className="md:col-span-8">
            <Reveal>
              <div className="overflow-hidden rounded-2xl shadow-sm">
                <Image
                  src={post.thumbnail}
                  alt={post.title}
                  width={1200}
                  height={700}
                  className="h-auto w-full object-cover"
                />
              </div>
            </Reveal>

            <Reveal>
              <div className="prose-tamloi mt-8 space-y-5 text-[15px] leading-relaxed text-[var(--color-ink)]">
                <p>
                  Trong cuộc sống hiện đại, thực phẩm đông lạnh ngày càng trở
                  thành lựa chọn thông minh giúp tiết kiệm thời gian mà vẫn đảm
                  bảo dinh dưỡng cho cả gia đình. Tuy nhiên, không phải ai cũng
                  biết cách lựa chọn thực phẩm đông lạnh an toàn và chất lượng.
                </p>

                <h2 className="font-serif text-2xl font-semibold text-[var(--color-ink)]">
                  1. Vì sao nên chọn thực phẩm đông lạnh đúng cách?
                </h2>
                <p>
                  Thực phẩm cấp đông nhanh ở nhiệt độ thấp giúp giữ lại tối đa
                  hương vị, dinh dưỡng và độ tươi ngon. Khi được sản xuất và
                  bảo quản đúng chuẩn, các sản phẩm đông lạnh hoàn toàn an
                  toàn — thậm chí còn giữ được nhiều vitamin và khoáng chất
                  hơn so với thực phẩm tươi để lâu ngày.
                </p>

                <h2 className="font-serif text-2xl font-semibold text-[var(--color-ink)]">
                  2. Các tiêu chí lựa chọn thực phẩm đông lạnh an toàn
                </h2>
                <ul className="list-inside list-disc space-y-2">
                  <li>
                    <strong>Nguồn gốc rõ ràng:</strong> ưu tiên thương hiệu uy
                    tín, có chứng nhận quốc tế HACCP và ISO 22000:2018.
                  </li>
                  <li>
                    <strong>Bao bì nguyên vẹn:</strong> không rách, không có
                    dấu hiệu rã đông và đông lại.
                  </li>
                  <li>
                    <strong>Nhãn mác đầy đủ:</strong> ngày sản xuất, hạn sử
                    dụng, hướng dẫn bảo quản và chế biến rõ ràng.
                  </li>
                  <li>
                    <strong>Bảo quản ổn định:</strong> tủ lạnh siêu thị phải
                    duy trì nhiệt độ -18°C trở xuống.
                  </li>
                </ul>

                <h2 className="font-serif text-2xl font-semibold text-[var(--color-ink)]">
                  3. Quy trình sản xuất khép kín — chìa khoá chất lượng
                </h2>
                <p>
                  Tại Tâm Lợi Foods, mỗi sản phẩm đều trải qua quy trình sản
                  xuất khép kín 5 bước: nhập nguyên liệu, kiểm định chất
                  lượng, sơ chế, cấp đông nhanh và đóng gói. Toàn bộ quy trình
                  được giám sát chặt chẽ theo tiêu chuẩn quốc tế, đảm bảo an
                  toàn vệ sinh và giữ trọn hương vị truyền thống Việt.
                </p>
              </div>
            </Reveal>

            <Reveal delay={150}>
              <blockquote className="mt-10 rounded-2xl border-l-4 border-[var(--color-brand)] bg-[var(--color-cream)] p-6 md:p-8">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7 text-[var(--color-brand)] opacity-70" aria-hidden>
                  <path d="M9 7H4v6h3v4h2V7Zm11 0h-5v6h3v4h2V7Z" />
                </svg>
                <p className="mt-3 font-serif text-lg italic leading-relaxed text-[var(--color-ink)] md:text-xl">
                  Mỗi bữa ăn ngon lành là một lời cảm ơn dành cho gia đình. Chọn
                  thực phẩm đúng cách là cách chăm sóc người thân yêu một cách
                  trọn vẹn nhất.
                </p>
                <footer className="mt-4 text-[13px] font-semibold text-[var(--color-brand)]">
                  — Tâm Lợi Foods
                </footer>
              </blockquote>
            </Reveal>
          </article>

          <div className="md:col-span-4">
            <BlogSidebar />
          </div>
        </div>
      </section>

      {fillRelated.length > 0 && (
        <section className="bg-white py-14 md:py-16">
          <div className="container-page">
            <Reveal>
              <h2 className="font-serif text-2xl font-semibold text-[var(--color-brand)] md:text-3xl">
                Bài viết liên quan
              </h2>
            </Reveal>

            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {fillRelated.map((p, i) => (
                <Reveal key={p.slug} direction="up" delay={i * 100}>
                  <BlogCard post={p} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <UspStrip />
    </>
  );
}
