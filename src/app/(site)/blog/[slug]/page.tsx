import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BLOG_POSTS, BLOG_SLUGS, getBlogPost } from "@/lib/blog-posts";
import { BlogArticlePage } from "@/components/site/BlogArticlePage";
import { createPageMetadata } from "@/lib/metadata";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return BLOG_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};

  return createPageMetadata({
    title: post.metaTitle,
    description: post.metaDescription,
    absoluteTitle: true,
    canonicalPath: `/blog/${post.slug}`,
    keywords: post.keywords,
    ogType: "article",
  });
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  return <BlogArticlePage post={post} />;
}
