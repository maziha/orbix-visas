import { COMPANY_NAME, COMPANY_NAME_SHORT } from "@/lib/contact-info";
import {
  CANADA_EXPRESS_ENTRY_GUIDE_SLUG,
  getCurrentYear,
  getRecentYearRangeLabel,
} from "@/lib/year";
import type { BlogPost } from "../types";

export function buildCanadaExpressEntryPost(): BlogPost {
  const yearLabel = String(getCurrentYear());
  const recentDrawRange = getRecentYearRangeLabel();

  return {
    slug: CANADA_EXPRESS_ENTRY_GUIDE_SLUG,
    title: `Canada Express Entry ${yearLabel} — Complete Guide for Indians`,
    metaTitle: `Canada Express Entry ${yearLabel} Guide for Indians | OrbiX Overseas Careers`,
    metaDescription: `Complete guide to Canada Express Entry in ${yearLabel} for Indian professionals — CRS score, FSW vs CEC vs PNP, how to get an ITA, and processing timelines. Free assessment from Kochi.`,
    keywords: [
      "canada express entry india",
      `express entry ${yearLabel}`,
      "canada pr for indians",
      `crs score ${yearLabel}`,
      "canada immigration kerala",
    ],
    category: "migration",
    categoryLabel: "Canada PR",
    publishedAt: "2026-05-20",
    readingTime: 10,
    heroText: `Canada's Express Entry system is the most popular pathway to Canadian Permanent Residency for skilled professionals from India. This guide explains exactly how it works in ${yearLabel} — the CRS score, the three programs, how draws work, and what Kerala professionals need to do to get an Invitation to Apply.`,
    relatedServiceHref: "/migration/canada-pr",
    relatedServiceLabel: "Canada PR Consultation",
    sections: [
      {
        heading: "What is Canada Express Entry?",
        paragraphs: [
          "Canada Express Entry is an online immigration management system introduced by Immigration, Refugees and Citizenship Canada (IRCC) in January 2015. It manages applications for three federal economic immigration programs: the Federal Skilled Worker Program (FSWP), the Federal Skilled Trades Program (FSTP), and the Canadian Experience Class (CEC).",
          "Instead of waiting in a first-come, first-served queue, candidates create an online profile and receive a Comprehensive Ranking System (CRS) score. IRCC holds regular draws from this pool and sends Invitations to Apply (ITAs) to the highest-ranked candidates.",
          "For Indian professionals — particularly those from Kerala — Express Entry is the most direct, transparent, and achievable path to Canadian PR. It does not require a job offer, and it rewards education, language ability, and skilled work experience.",
        ],
      },
      {
        heading: "The Three Express Entry Programs",
        paragraphs: ["Most Kerala professionals apply under the Federal Skilled Worker Program."],
        listItems: [
          "Federal Skilled Worker Program (FSWP) — At least 1 year of skilled work experience (NOC TEER 0–3) in the past 10 years, plus CLB 7 in English. Nurses, engineers, accountants, and IT professionals from Kerala typically qualify here.",
          "Canadian Experience Class (CEC) — For those who have worked in Canada for at least 1 year under a valid work permit.",
          "Federal Skilled Trades Program (FSTP) — For skilled tradespeople with at least 2 years of trades experience; often requires a job offer or provincial certificate.",
        ],
      },
      {
        heading: "Understanding Your CRS Score",
        paragraphs: ["The CRS assigns a score out of 1,200 points across four factor groups:"],
        listItems: [
          "Core/Human Capital — Age, education, language, and Canadian work experience (up to 500 points without a spouse).",
          "Spouse Factors — Up to 40 points for an accompanying partner's credentials.",
          "Skill Transferability — Up to 100 points from education + language and experience combinations.",
          "Additional Points — Provincial nomination (+600), job offer (+50–200), sibling in Canada, French proficiency, and Canadian study experience.",
        ],
      },
      {
        heading: "How CRS Draws Work",
        paragraphs: ["IRCC holds draws approximately every two weeks with varying cutoffs:"],
        listItems: [
          "All-programs draws — Cutoffs in recent rounds have ranged from 480 to 540.",
          "Category-based draws — Healthcare, STEM, trades, transport, and French-language categories often have lower cutoffs (sometimes as low as 430).",
          "PNP draws — Candidates with a provincial nomination; cutoff is effectively 600+.",
        ],
      },
      {
        heading: `How ${COMPANY_NAME_SHORT} Helps Kerala Professionals`,
        paragraphs: [
          `${COMPANY_NAME} in Vyttila, Ernakulam provides end-to-end Express Entry guidance. We assess your profile, calculate your CRS score, identify your optimal draw type, and build a step-by-step timeline to your ITA.`,
          "We monitor every Express Entry draw and notify you when a draw relevant to your profile occurs.",
        ],
      },
    ],
    faq: [
      {
        question: "What is the minimum CRS score to get an Express Entry ITA?",
        answer: `There is no fixed minimum — the cutoff changes with every draw. All-programs draws in ${recentDrawRange} have ranged from 480 to 540. Category-based draws for healthcare and STEM have had cutoffs as low as 430.`,
      },
      {
        question: "Can I apply for Canada PR without a job offer?",
        answer:
          "Yes. Most Express Entry invitations go to candidates without a job offer. Strong IELTS scores, a master's degree, and a PNP nomination are reliable ways to achieve a competitive score.",
      },
      {
        question: "What IELTS score do I need for Express Entry?",
        answer:
          "FSWP requires CLB 7 (IELTS 6.0 in each band). Targeting CLB 9 (IELTS 7.0+ each band) significantly increases your CRS score.",
      },
      {
        question: "How long does Canada Express Entry take from Kerala?",
        answer:
          "Typically 12–18 months from profile creation to Confirmation of Permanent Residence (COPR). After an ITA, you have 60 days to submit; IRCC targets 6-month processing.",
      },
      {
        question: "Can my family come with me on Canada PR?",
        answer:
          "Yes. Your spouse and dependent children can be included in your PR application and receive the same status on approval.",
      },
    ],
  };
}
