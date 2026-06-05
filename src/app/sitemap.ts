import type { MetadataRoute } from "next";
import { COUNTRIES } from "@/lib/countries";
import { FAMILY_VISA_SLUGS } from "@/lib/family-visa-content";
import { BLOG_SLUGS, getBlogPost } from "@/lib/blog-posts";
import { SITE_ORIGIN } from "@/lib/site-meta";

const MIGRATION_PROGRAMS = ["canada-pr", "australia-pr"] as const;

const STUDY_PRIORITY: Record<string, number> = {
  canada: 0.8,
  australia: 0.8,
  uk: 0.8,
  germany: 0.8,
  "new-zealand": 0.7,
  france: 0.7,
  poland: 0.7,
};

const VISA_PRIORITY: Record<string, number> = {
  "spouse-visa": 0.8,
  "parent-visa": 0.8,
  "student-dependent-visa": 0.7,
};

function url(path: string): string {
  return `${SITE_ORIGIN}${path}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: url("/"), lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: url("/migration"), lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: url("/study-abroad"), lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: url("/blog"), lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: url("/services"), lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: url("/contact"), lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: url("/about"), lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: url("/testimonials"), lastModified: now, changeFrequency: "monthly", priority: 0.5 },
  ];

  const migrationPages: MetadataRoute.Sitemap = MIGRATION_PROGRAMS.map((program) => ({
    url: url(`/migration/${program}`),
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  const studyPages: MetadataRoute.Sitemap = COUNTRIES.map(({ slug }) => ({
    url: url(`/study-abroad/${slug}`),
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: STUDY_PRIORITY[slug] ?? 0.7,
  }));

  const visaPages: MetadataRoute.Sitemap = FAMILY_VISA_SLUGS.map((visa) => ({
    url: url(`/services/${visa}`),
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: VISA_PRIORITY[visa] ?? 0.7,
  }));

  const blogPages: MetadataRoute.Sitemap = BLOG_SLUGS.map((slug) => {
    const post = getBlogPost(slug);
    return {
      url: url(`/blog/${slug}`),
      lastModified: post ? new Date(post.publishedAt) : now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    };
  });

  return [...staticPages, ...migrationPages, ...studyPages, ...visaPages, ...blogPages];
}
