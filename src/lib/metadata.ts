import type { Metadata } from "next";
import { PAGE_META, getOgImageUrl, SITE_NAME, SITE_ORIGIN, type PageMetaInput } from "@/lib/site-meta";

export function createPageMetadata(input: PageMetaInput): Metadata {
  const ogImage = getOgImageUrl();

  return {
    title: input.absoluteTitle ? { absolute: input.title } : input.title,
    description: input.description,
    keywords: input.keywords,
    authors: [{ name: SITE_NAME }],
    robots: { index: true, follow: true },
    openGraph: {
      title: input.title,
      description: input.description,
      url: input.canonicalPath ? `${SITE_ORIGIN}${input.canonicalPath}` : SITE_ORIGIN,
      siteName: SITE_NAME,
      locale: "en_IN",
      type: input.ogType ?? "website",
      images: [{ url: ogImage, width: 1200, height: 630, type: "image/jpeg" }],
    },
    twitter: {
      card: "summary_large_image",
      title: input.title,
      description: input.description,
      images: [ogImage],
    },
    alternates: input.canonicalPath
      ? { canonical: `${SITE_ORIGIN}${input.canonicalPath}` }
      : undefined,
  };
}

export function metadataForPage(key: keyof typeof PAGE_META): Metadata {
  return createPageMetadata(PAGE_META[key]);
}

export function createDynamicPageMetadata(input: PageMetaInput): Metadata {
  return createPageMetadata(input);
}
