import { COMPANY_NAME } from "@/lib/contact-info";
import { ORGANIZATION_LOGO_URL, SITE_ORIGIN } from "@/lib/site-meta";
import type { BlogPost } from "@/lib/blog/types";

export function buildBlogArticleJsonLd(post: BlogPost) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    author: {
      "@type": "Organization",
      name: COMPANY_NAME,
      url: SITE_ORIGIN,
    },
    publisher: {
      "@type": "Organization",
      name: COMPANY_NAME,
      url: SITE_ORIGIN,
      logo: {
        "@type": "ImageObject",
        url: ORGANIZATION_LOGO_URL,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_ORIGIN}/blog/${post.slug}`,
    },
    url: `${SITE_ORIGIN}/blog/${post.slug}`,
    keywords: post.keywords.join(", "),
  };
}
