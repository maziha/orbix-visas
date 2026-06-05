import type { FaqItem } from "@/lib/faq-types";

export type BlogSection = {
  heading: string;
  paragraphs: string[];
  listItems?: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  category: "migration" | "study-abroad" | "visa";
  categoryLabel: string;
  publishedAt: string;
  readingTime: number;
  heroText: string;
  relatedServiceHref: string;
  relatedServiceLabel: string;
  sections: BlogSection[];
  faq: FaqItem[];
};
