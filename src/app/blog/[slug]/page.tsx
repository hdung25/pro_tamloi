import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BLOG_POSTS } from "@/data/blog";
import { BlogDetailPageClient } from "./detail-client";

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

export default async function BlogDetailPage({ params }: Params) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  const related = BLOG_POSTS.filter(
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

  return <BlogDetailPageClient post={post} fillRelated={fillRelated} />;
}
