import { CANADA_EXPRESS_ENTRY_GUIDE_SLUG } from "@/lib/year";
import { AUSTRALIA_PR_GUIDE_SLUG } from "./posts/australia-pr-guide";
import { buildAustraliaPrGuidePost } from "./posts/australia-pr-guide";
import { buildCanadaExpressEntryPost } from "./posts/canada-express-entry";
import { buildCanadaPrNursesKeralaPost } from "./posts/canada-pr-nurses-kerala";
import { buildGermanyStudyVisaPost } from "./posts/germany-study-visa";
import { buildHowToCheckCrsScorePost } from "./posts/how-to-check-crs-score";
import { buildIeltsScoreCanadaPrPost } from "./posts/ielts-score-canada-pr";
import { buildSpouseVisaCanadaPost } from "./posts/spouse-visa-canada";
import { buildUkVsCanadaStudyPost } from "./posts/uk-vs-canada-study";
import type { BlogPost } from "./types";

function buildAllBlogPosts(): BlogPost[] {
  return [
    buildCanadaExpressEntryPost(),
    buildAustraliaPrGuidePost(),
    buildHowToCheckCrsScorePost(),
    buildCanadaPrNursesKeralaPost(),
    buildIeltsScoreCanadaPrPost(),
    buildUkVsCanadaStudyPost(),
    buildSpouseVisaCanadaPost(),
    buildGermanyStudyVisaPost(),
  ].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}

export const BLOG_POSTS: BlogPost[] = buildAllBlogPosts();

export const BLOG_SLUGS = BLOG_POSTS.map((p) => p.slug);

/** Featured in footer — keep short; full list on /blog */
export const BLOG_FOOTER_FEATURED_SLUGS = [
  CANADA_EXPRESS_ENTRY_GUIDE_SLUG,
  AUSTRALIA_PR_GUIDE_SLUG,
  "how-to-check-crs-score",
  "canada-pr-nurses-kerala",
] as const;

export function getBlogPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function getFeaturedBlogPosts(): BlogPost[] {
  return BLOG_FOOTER_FEATURED_SLUGS.map((slug) => BLOG_POSTS.find((p) => p.slug === slug)).filter(
    (p): p is BlogPost => p !== undefined,
  );
}

export type { BlogPost, BlogSection } from "./types";
