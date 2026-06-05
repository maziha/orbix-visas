import { COMPANY_NAME_SHORT } from "@/lib/contact-info";
import { getAcademicYearLabel } from "@/lib/year";
import type { BlogPost } from "../types";

export function buildUkVsCanadaStudyPost(): BlogPost {
  const academicYear = getAcademicYearLabel();

  return {
    slug: "uk-vs-canada-study-abroad",
    title: "Study in UK vs Canada for Kerala Students",
    metaTitle: "Study in UK vs Canada — Comparison for Kerala Students | OrbiX",
    metaDescription: `UK vs Canada for study abroad from Kerala — tuition, post-study work visas, IELTS requirements, PR pathways, and which destination fits your goals in ${academicYear}.`,
    keywords: [
      "study in uk vs canada",
      "uk or canada for indian students",
      "study abroad kerala comparison",
      "post study work visa uk canada",
      "cheaper study abroad uk canada",
    ],
    category: "study-abroad",
    categoryLabel: "Study Abroad",
    publishedAt: "2026-06-02",
    readingTime: 8,
    heroText:
      "UK and Canada are the two most popular study destinations for Kerala students — but they lead to very different outcomes. This guide compares tuition, work rights, post-study visas, and long-term settlement options so you can choose with clarity.",
    relatedServiceHref: "/study-abroad",
    relatedServiceLabel: "Study Abroad Counselling",
    sections: [
      {
        heading: "Tuition and Living Costs",
        paragraphs: [
          `Costs below are approximate guides in INR (${academicYear}); actual fees vary by university and city.`,
        ],
        listItems: [
          "UK — Master's tuition: roughly ₹12–25 lakh/year. Living costs highest in London (₹10–14 lakh/year); lower in Scotland, Wales, and northern cities.",
          "Canada — Master's tuition: roughly ₹8–18 lakh/year. Living costs: ₹8–12 lakh/year in Toronto/Vancouver; lower in smaller cities and provinces.",
          "Scholarships — Both countries offer university-specific scholarships; Canada also has provincial graduate funding. Neither is fully funded by default.",
        ],
      },
      {
        heading: "Post-Study Work Rights",
        paragraphs: ["Both countries let graduates work after completing their degree — but the duration and PR pathway differ significantly:"],
        listItems: [
          "UK Graduate Route — 2 years post-study work (3 years for PhD graduates). No job offer required. Does not directly lead to PR.",
          "Canada PGWP — Length matches study duration (up to 3 years for programs of 2+ years). PGWP work experience feeds directly into Express Entry (CEC) and PNP pathways to PR.",
          "Key difference — Canada's post-study work visa is widely regarded as the stronger pathway to permanent residency. UK's Graduate Route is primarily a work permit, not a PR route.",
        ],
      },
      {
        heading: "IELTS and Admission Requirements",
        paragraphs: ["English proficiency is required for admission to universities in both countries:"],
        listItems: [
          "UK — Most universities accept IELTS Academic 6.0–6.5 overall (some require 7.0 for nursing, law, or medicine). PTE and TOEFL also accepted.",
          "Canada — IELTS Academic 6.0–6.5 for most programs; some require 7.0. A study permit also requires proof of funds and a letter of acceptance.",
          "Both — Kerala students with strong English from school often need focused IELTS prep for the writing and speaking bands.",
        ],
      },
      {
        heading: "PR and Long-Term Settlement",
        paragraphs: [
          "Canada: Study → PGWP → Express Entry (CEC) or PNP → PR is a well-documented pathway. Nurses, IT professionals, and engineers from Kerala who study in Canada often transition to PR within 2–4 years of graduation.",
          "UK: PR (Indefinite Leave to Remain) requires 5 years on eligible visas (e.g., Skilled Worker). The Graduate Route does not count toward ILR. Settlement is possible but slower and less predictable than Canada.",
        ],
      },
      {
        heading: `Which Should Kerala Students Choose?`,
        paragraphs: [
          "Choose Canada if your goal includes permanent residency, lower tuition relative to earning potential, and a clear post-study work-to-PR pathway.",
          "Choose UK if you want a shorter master's (1 year vs 2), prestigious university brands, or plan to return to India or work internationally — not necessarily settle abroad.",
          `${COMPANY_NAME_SHORT} helps you compare specific programs, not just countries — book a free consultation in Vyttila to map your profile to the right destination.`,
        ],
      },
    ],
    faq: [
      {
        question: "Is UK or Canada cheaper for Indian students?",
        answer:
          "Canada is generally lower for tuition and living costs outside major cities. UK's 1-year master's can reduce total spend, but per-year costs are often higher — especially in London.",
      },
      {
        question: "Which country is better for PR after studying?",
        answer:
          "Canada has a much clearer pathway: PGWP → Express Entry/PNP → PR. UK requires switching to a Skilled Worker visa after the Graduate Route and waiting 5 years for ILR.",
      },
      {
        question: "Can I work while studying in UK or Canada?",
        answer:
          "Yes — both allow part-time work during studies (typically 20 hours/week during term). Canada also allows full-time work during scheduled breaks.",
      },
      {
        question: "Which IELTS do I need — Academic or General?",
        answer:
          "University admission requires IELTS Academic for both countries. Canada PR (Express Entry) later requires IELTS General Training — plan for both if settlement is your goal.",
      },
    ],
  };
}
