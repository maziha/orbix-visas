import type { Metadata } from "next";
import { BLOG_POSTS } from "@/lib/blog-posts";
import { BlogIndexPage } from "@/components/site/BlogIndexPage";
import { createPageMetadata } from "@/lib/metadata";
import { COMPANY_NAME, COMPANY_NAME_SHORT } from "@/lib/contact-info";

export const metadata: Metadata = createPageMetadata({
  title: `Immigration & Study Abroad Guides | ${COMPANY_NAME_SHORT}`,
  description: `In-depth guides on Canada PR, Australia PR, study abroad visas, and family visas — written for professionals and students from Kerala by ${COMPANY_NAME}.`,
  canonicalPath: "/blog",
  keywords: [
    "canada pr guide kerala",
    "express entry guide india",
    "study abroad guide kochi",
    "immigration guides kerala",
    "australia pr guide india",
  ],
});

export default function BlogPage() {
  return <BlogIndexPage posts={BLOG_POSTS} />;
}
