import { COMPANY_NAME_SHORT } from "@/lib/contact-info";
import type { BlogPost } from "../types";

export function buildIeltsScoreCanadaPrPost(): BlogPost {
  return {
    slug: "ielts-score-canada-pr",
    title: "IELTS Score for Canada PR — What You Need",
    metaTitle: "IELTS Score for Canada PR — CLB Requirements | OrbiX Overseas Careers",
    metaDescription:
      "IELTS score requirements for Canada PR and Express Entry — CLB 7 vs CLB 9 vs CLB 10, General vs Academic, how each band affects your CRS score, and booking tips from Kochi.",
    keywords: [
      "ielts score for canada pr",
      "ielts for express entry",
      "clb 7 ielts score",
      "ielts general training canada",
      "ielts score crs points",
    ],
    category: "migration",
    categoryLabel: "Canada PR",
    publishedAt: "2026-05-30",
    readingTime: 7,
    heroText:
      "Your IELTS score is the single biggest lever most Kerala applicants have for improving their CRS ranking. This guide explains the minimum scores, how each CLB level translates to CRS points, and whether you need General Training or Academic.",
    relatedServiceHref: "/migration/canada-pr",
    relatedServiceLabel: "IELTS & CRS Planning",
    sections: [
      {
        heading: "General Training vs Academic — Which One?",
        paragraphs: [
          "Canada Express Entry accepts IELTS General Training only — not Academic. General Training tests everyday English (work and social contexts), which matches immigration requirements.",
          "Academic IELTS is for university admissions and some professional licensing bodies (e.g., nursing regulators). If you are applying for both study and PR, you may need both test types.",
        ],
      },
      {
        heading: "CLB to IELTS Band Conversion",
        paragraphs: ["Canadian Language Benchmark (CLB) levels map to IELTS General Training scores:"],
        listItems: [
          "CLB 4 — Listening 4.5, Reading 3.5, Writing 4.0, Speaking 4.0 (minimum for some programs)",
          "CLB 7 — Listening 6.0, Reading 6.0, Writing 6.0, Speaking 6.0 (FSW minimum eligibility)",
          "CLB 9 — Listening 8.0, Reading 7.0, Writing 7.0, Speaking 7.0 (strong CRS boost)",
          "CLB 10 — Listening 8.5, Reading 8.0, Writing 7.5, Speaking 7.5 (maximum language points)",
        ],
      },
      {
        heading: "How IELTS Affects Your CRS Score",
        paragraphs: [
          "Language is worth up to 136 points in the core CRS factors (without a spouse). The jump from CLB 7 to CLB 9 in all four bands can add 50+ points — often the difference between receiving an ITA and waiting indefinitely.",
          "Skill transferability adds further points when high language scores combine with education or foreign work experience. A single band below CLB 9 caps your transferability points.",
        ],
      },
      {
        heading: "Practical Tips for Kerala Test-Takers",
        paragraphs: [
          "Book early — IELTS slots in Kochi and Ernakulam fill quickly, especially before university intake seasons. Results take 3–5 days (computer-delivered) or 13 days (paper-based).",
          "IELTS results are valid for 2 years for Express Entry. Time your test so results are valid when you create your profile and when you submit post-ITA.",
          "If one band is low, retake the full test — IRCC uses your most recent valid result, and you cannot combine scores from different test dates.",
        ],
      },
      {
        heading: `Plan Your IELTS Strategy with ${COMPANY_NAME_SHORT}`,
        paragraphs: [
          "Orbix calculates how many CRS points each CLB improvement would add to your specific profile — so you know whether retaking IELTS is worth the investment before booking your next slot.",
        ],
      },
    ],
    faq: [
      {
        question: "Is IELTS 6.0 enough for Canada PR?",
        answer:
          "6.0 in each band meets CLB 7 — the minimum for Federal Skilled Worker eligibility. However, most recent all-programs draws require CRS scores that are difficult to reach with CLB 7 alone. Aim for CLB 9.",
      },
      {
        question: "Does CELPIP replace IELTS for Express Entry?",
        answer:
          "Yes — CELPIP General is equally accepted. Some Kerala test-takers prefer CELPIP for its Canadian English context and computer-only format.",
      },
      {
        question: "Can I use OET for Canada PR?",
        answer:
          "OET is accepted for some healthcare category pathways but not as the primary language test for standard Express Entry profiles. Nurses should confirm requirements with their target stream.",
      },
      {
        question: "How many times can I retake IELTS?",
        answer:
          "No limit — but each attempt costs money and time. IRCC uses only your most recent valid result when you update your Express Entry profile.",
      },
    ],
  };
}
