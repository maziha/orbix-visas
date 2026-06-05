import { COMPANY_NAME, COMPANY_NAME_SHORT } from "@/lib/contact-info";
import { getCurrentYear } from "@/lib/year";
import type { BlogPost } from "../types";

export function buildCanadaPrNursesKeralaPost(): BlogPost {
  const yearLabel = String(getCurrentYear());

  return {
    slug: "canada-pr-nurses-kerala",
    title: "Canada PR for Nurses from Kerala — Full Pathway",
    metaTitle: "Canada PR for Nurses from Kerala — Complete Pathway | OrbiX",
    metaDescription: `How nurses from Kerala can get Canada PR in ${yearLabel} — NNAS registration, NOC codes, Express Entry healthcare draws, PNP options, IELTS requirements, and timelines.`,
    keywords: [
      "canada pr nurses kerala",
      "nurse immigration canada india",
      "nnas canada nurses",
      "healthcare express entry",
      "nursing jobs canada kerala",
    ],
    category: "migration",
    categoryLabel: "Canada PR",
    publishedAt: "2026-05-28",
    readingTime: 9,
    heroText: `Canada has a sustained shortage of registered nurses — and Kerala-trained nurses are well positioned to qualify. This guide covers the full pathway in ${yearLabel}: credential assessment, language requirements, Express Entry healthcare category draws, and provincial options.`,
    relatedServiceHref: "/migration/canada-pr",
    relatedServiceLabel: "Nurse PR Assessment",
    sections: [
      {
        heading: "Why Canada Needs Kerala Nurses",
        paragraphs: [
          "Canada's ageing population and healthcare system expansion create ongoing demand for registered nurses and licensed practical nurses. Indian nurses — particularly those with BSc Nursing, GNM, or Post Basic BSc from Kerala — are among the largest groups entering Canada's healthcare workforce.",
          "Nursing occupations fall under NOC TEER 1 (Registered Nurses) and TEER 2 (Licensed Practical Nurses), both eligible for Express Entry and many Provincial Nominee Program streams.",
        ],
      },
      {
        heading: "Credential Assessment for Nurses",
        paragraphs: ["Indian nursing credentials must be assessed before Express Entry:"],
        listItems: [
          "NNAS (National Nursing Assessment Service) — Required for most provinces except Quebec. Submit your Kerala nursing degree, registration certificate, and employment history. Processing typically takes 3–6 months.",
          "Provincial regulatory body — After NNAS, you apply to the provincial college of nurses (e.g., CNO for Ontario, BCCNM for BC) for registration eligibility.",
          "Educational Credential Assessment (ECA) — A separate ECA from WES, IQAS, or another designated body is also needed for Express Entry points.",
        ],
      },
      {
        heading: "Express Entry for Healthcare Workers",
        paragraphs: [
          "IRCC runs category-based selection draws targeting healthcare occupations, including registered nurses (NOC 31301) and licensed practical nurses (NOC 32101). These draws often have CRS cutoffs significantly lower than all-programs draws — sometimes 430–470.",
          "To be eligible for healthcare category draws, you must have at least 6 months of cumulative skilled work experience in a healthcare occupation within the past 3 years, in addition to meeting FSW, CEC, or FSTP criteria.",
        ],
      },
      {
        heading: "Language and IELTS for Nurses",
        paragraphs: [
          "Express Entry requires CLB 7 minimum (IELTS General 6.0 each band). However, provincial nursing regulators often require higher scores — Ontario's CNO typically requires IELTS Academic 7.0 in speaking and 6.5 in other bands, or equivalent.",
          "Plan your IELTS strategy carefully: you may need Academic IELTS for provincial registration and General Training for Express Entry. Some nurses take both.",
        ],
      },
      {
        heading: `How ${COMPANY_NAME_SHORT} Supports Kerala Nurses`,
        paragraphs: [
          `${COMPANY_NAME} in Vyttila helps Kerala nurses navigate NNAS, Express Entry profile creation, healthcare category draw strategy, and PNP applications for provinces actively recruiting nurses (Ontario, BC, Alberta, Manitoba, Nova Scotia).`,
        ],
      },
    ],
    faq: [
      {
        question: "Can GNM nurses from Kerala apply for Canada PR?",
        answer:
          "Yes — GNM with sufficient skilled nursing work experience can qualify. NNAS assesses your credentials against Canadian standards; some nurses may need additional bridging education depending on the province.",
      },
      {
        question: "What is the CRS score for nurses in healthcare draws?",
        answer:
          "Healthcare category draws have seen cutoffs of 430–470 — lower than all-programs draws. Exact cutoffs change each round; entering the pool early is critical.",
      },
      {
        question: "Do nurses need a job offer for Canada PR?",
        answer:
          "Not for Express Entry or most PNP streams. A job offer adds CRS points but is not mandatory. Some provinces have dedicated nurse recruitment streams without employer sponsorship.",
      },
      {
        question: "How long does the nurse PR pathway take from Kerala?",
        answer:
          "Typically 18–24 months: 3–6 months for NNAS, 2–3 months for IELTS, then Express Entry pool wait and 6-month post-ITA processing. Timelines vary by province and draw frequency.",
      },
    ],
  };
}
