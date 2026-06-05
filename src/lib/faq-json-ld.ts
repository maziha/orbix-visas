import type { FaqItem } from "@/lib/faq-types";

/** FAQPage schema object for JSON-LD — one block per page with an FAQ section. */
export function buildFaqPageJsonLd(faq: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: {
        "@type": "Answer",
        text: answer,
      },
    })),
  };
}
