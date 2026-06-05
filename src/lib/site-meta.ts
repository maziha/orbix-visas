/**
 * Site-wide SEO and Open Graph defaults. Each route calls `buildPageHead()` to override
 * title, description, and OG tags while inheriting shared image and Twitter card settings.
 */

import { COMPANY_NAME, COMPANY_NAME_SHORT } from "./contact-info";

export const SITE_NAME = COMPANY_NAME;

/** Authoritative public origin — canonical, Open Graph, and Twitter absolute URLs. */
export const SITE_ORIGIN = "https://orbixvisas.com";

export const OG_IMAGE_PATH = "/og-image.jpg";

/** Absolute OG thumbnail URL — always orbixvisas.com, never a stale env override. */
export const OG_IMAGE_URL = `${SITE_ORIGIN}${OG_IMAGE_PATH}`;

/** Stable public logo for Organization schema (not a hashed build asset). */
export const ORGANIZATION_LOGO_PATH = "/assets/logo_blue_white_background.webp";

export const ORGANIZATION_LOGO_URL = `${SITE_ORIGIN}${ORGANIZATION_LOGO_PATH}`;

export function getOgImageUrl(): string {
  return OG_IMAGE_URL;
}

export type PageMetaInput = {
  /** Document `<title>` */
  title: string;
  /** `<meta name="description">` */
  description: string;
  /** When true, use title as-is (no root layout `%s | Site Name` suffix). */
  absoluteTitle?: boolean;
  /** `og:title` — defaults to `title` */
  ogTitle?: string;
  /** `og:description` — defaults to `description` */
  ogDescription?: string;
  /** Optional canonical path, e.g. `/about` */
  canonicalPath?: string;
  /** `<meta name="keywords">` — comma-separated relevance signals for crawlers */
  keywords?: string[];
  /** `og:type` — defaults to "website"; use "article" for blog posts */
  ogType?: "website" | "article";
};

export type PageHeadResult = {
  meta: Array<
    | { title: string }
    | { name: string; content: string }
    | { property: string; content: string }
  >;
  links?: Array<{ rel: string; href: string }>;
};

/** Build per-route meta tags (title, description, Open Graph, Twitter). */
export function buildPageHead(input: PageMetaInput): PageHeadResult {
  const ogTitle = input.ogTitle ?? input.title;
  const ogDescription = input.ogDescription ?? input.description;
  const ogImage = getOgImageUrl();

  const meta: PageHeadResult["meta"] = [
    { title: input.title },
    { name: "description", content: input.description },
    { property: "og:title", content: ogTitle },
    { property: "og:description", content: ogDescription },
    { property: "og:image", content: ogImage },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },
    { property: "og:image:type", content: "image/jpeg" },
    { name: "twitter:title", content: ogTitle },
    { name: "twitter:description", content: ogDescription },
    { name: "twitter:image", content: ogImage },
  ];

  const result: PageHeadResult = { meta };

  if (input.canonicalPath) {
    result.links = [
      {
        rel: "canonical",
        href: `${SITE_ORIGIN.replace(/\/$/, "")}${input.canonicalPath}`,
      },
    ];
  }

  return result;
}

/** Page-specific OG copy (also used for document title/description where noted). */
export const PAGE_META = {
  home: {
    title: `${COMPANY_NAME} | Canada PR, Australia PR & Study Abroad — Kochi`,
    description:
      "Expert immigration and study abroad consultants in Vyttila, Ernakulam, Kerala. Canada PR, Australia PR, spouse visa, family visa, study in UK, Canada, Germany and more. Free first consultation.",
    canonicalPath: "/",
    keywords: [
      "immigration consultant kochi",
      "canada pr kerala",
      "australia pr consultant kochi",
      "study abroad kochi",
      "overseas careers ernakulam",
    ],
  },
  about: {
    title: `About ${COMPANY_NAME} | Immigration Consultants, Kochi`,
    description: `${COMPANY_NAME} is an Ernakulam-based immigration and study abroad consultancy in Vyttila. Clear guidance, honest advice, free first consultation.`,
    canonicalPath: "/about",
    keywords: [
      "orbix overseas careers",
      "immigration consultancy vyttila",
      "overseas education ernakulam",
    ],
  },
  contact: {
    title: `Contact ${COMPANY_NAME} | Book a Free Consultation, Kochi`,
    description:
      "Reach our immigration and study abroad counsellors in Vyttila, Ernakulam. Free first consultation for Canada PR, Australia PR, study abroad, and family visas.",
    canonicalPath: "/contact",
    keywords: [
      "immigration consultant kochi contact",
      "free consultation canada pr",
      "orbix vyttila ernakulam",
    ],
  },
  services: {
    title: `Visa Services Kerala | Spouse, Parent & Family Visa | ${COMPANY_NAME_SHORT}`,
    description: `Spouse visa, parent visa, student dependent visa and visit visa consultants in Kochi, Kerala. ${COMPANY_NAME} — free consultation.`,
    canonicalPath: "/services",
    keywords: [
      "spouse visa consultant kochi",
      "parent visa kerala",
      "family visa consultant ernakulam",
      "dependent visa kerala",
    ],
  },
  migration: {
    title: `Migration & PR Consultants Kerala | ${COMPANY_NAME}`,
    description: `Canada and Australia PR consultants in Kochi — ${COMPANY_NAME_SHORT} assesses Express Entry, PNP, and skilled migration paths. Serving Kerala from Vyttila.`,
    canonicalPath: "/migration",
    keywords: [
      "migration consultant kerala",
      "canada pr consultant kochi",
      "australia pr consultant kerala",
      "permanent residency consultant ernakulam",
    ],
  },
  migrationCanadaPr: {
    title: `Canada PR Consultant in Kerala | ${COMPANY_NAME}`,
    description:
      "Certified Canada PR consultants in Kochi — Express Entry, PNP, and family sponsorship guidance. Free profile assessment for Kerala professionals.",
    canonicalPath: "/migration/canada-pr",
    keywords: [
      "canada pr consultant kerala",
      "express entry india",
      "canada express entry kochi",
      "canada pr from kerala",
      "pnp consultant kerala",
    ],
  },
  migrationAustraliaPr: {
    title: `Australia PR Consultant in Kerala | ${COMPANY_NAME}`,
    description:
      "Australia skilled migration consultants in Kochi — subclass 189, 190, 491 guidance. Free eligibility assessment for Kerala professionals.",
    canonicalPath: "/migration/australia-pr",
    keywords: [
      "australia pr consultant kerala",
      "australia skilled migration kochi",
      "subclass 189 india",
      "subclass 190 kerala",
      "australia points test india",
    ],
  },
  studyAbroad: {
    title: `Study Abroad Consultant Kochi | UK, Canada, Germany & More | ${COMPANY_NAME_SHORT}`,
    description:
      "Study abroad guidance from Kochi, Kerala — university shortlisting, student visa, scholarships across 7 countries. Free counselling session.",
    canonicalPath: "/study-abroad",
    keywords: [
      "study abroad consultant kochi",
      "overseas education consultant ernakulam",
      "student visa consultant kerala",
      "uk student visa kochi",
      "canada student visa kerala",
    ],
  },
  testimonials: {
    title: `Consultation | ${COMPANY_NAME}`,
    description: `Book a consultation with ${COMPANY_NAME_SHORT} in Vyttila, Ernakulam — study abroad and immigration counsellors serving Kerala for PR, visas, and overseas education.`,
    canonicalPath: "/testimonials",
    keywords: [
      "immigration consultant kochi consultation",
      "orbix overseas careers review",
    ],
  },
} as const satisfies Record<string, PageMetaInput>;

export function headForPage(key: keyof typeof PAGE_META): PageHeadResult {
  return buildPageHead(PAGE_META[key]);
}
