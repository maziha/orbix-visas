import { COMPANY_NAME, COMPANY_NAME_SHORT } from "@/lib/contact-info";
import { getCurrentYear } from "@/lib/year";
import type { BlogPost } from "../types";

export const AUSTRALIA_PR_GUIDE_SLUG = "australia-pr-guide-2026" as const;

export function buildAustraliaPrGuidePost(): BlogPost {
  const yearLabel = String(getCurrentYear());

  return {
    slug: AUSTRALIA_PR_GUIDE_SLUG,
    title: `Australia PR Requirements for Indians ${yearLabel}`,
    metaTitle: `Australia PR Requirements for Indians ${yearLabel} | OrbiX Overseas Careers`,
    metaDescription: `Australia skilled migration requirements for Indian professionals in ${yearLabel} — points test, Subclass 189/190/491, skills assessment, English scores, and timelines from Kochi.`,
    keywords: [
      "australia pr requirements india",
      `australia pr ${yearLabel}`,
      "australia skilled migration kerala",
      "subclass 189 india",
      "australia pr points test",
    ],
    category: "migration",
    categoryLabel: "Australia PR",
    publishedAt: "2026-05-24",
    readingTime: 9,
    heroText: `Australia's skilled migration program offers permanent residency through a points-tested system. This guide explains the requirements Indian professionals — including those from Kerala — need to meet in ${yearLabel}: occupation lists, skills assessment, English tests, and the three main visa subclasses.`,
    relatedServiceHref: "/migration/australia-pr",
    relatedServiceLabel: "Australia PR Consultation",
    sections: [
      {
        heading: "How Australia Skilled Migration Works",
        paragraphs: [
          "Australia selects skilled migrants through a points-tested system managed by the Department of Home Affairs. You must nominate an occupation on the relevant skilled occupation list, obtain a positive skills assessment, meet English requirements, and score enough points to receive an invitation.",
          "Unlike Canada's CRS pool, Australia's SkillSelect Expression of Interest (EOI) requires a minimum of 65 points to lodge — but invitations for popular occupations often need 75–85+ points for Subclass 189.",
        ],
      },
      {
        heading: "The Three Main Visa Subclasses",
        paragraphs: ["Choose the subclass that matches your points score and willingness to live in a nominated state or region:"],
        listItems: [
          "Subclass 189 — Skilled Independent: Permanent residency with no state sponsor. Highest points requirement; no obligation to live in a specific state.",
          "Subclass 190 — Skilled Nominated: Requires nomination from an Australian state or territory (+5 points). You commit to living in that state for two years.",
          "Subclass 491 — Skilled Work Regional (Provisional): Requires regional nomination (+15 points). Provisional visa with a pathway to PR after meeting residence and income conditions.",
        ],
      },
      {
        heading: "Points Test Breakdown",
        paragraphs: ["Your points are calculated across these factors:"],
        listItems: [
          "Age — Maximum points at 25–32 years; decreases after 33.",
          "English — Competent (IELTS 6.0 each), Proficient (7.0 each), or Superior (8.0 each) — each tier adds more points.",
          "Skilled employment — Points for years of skilled work experience, with more weight for Australian experience.",
          "Education — Bachelor's, master's, or doctoral qualifications assessed against Australian standards.",
          "Australian study — Bonus for completing eligible qualifications in Australia.",
          "Partner skills — Additional points if your spouse meets age, English, and skills criteria.",
          "State/territory nomination — +5 for 190, +15 for 491.",
        ],
      },
      {
        heading: "Skills Assessment — The Mandatory First Step",
        paragraphs: [
          "Before submitting an EOI, almost every occupation requires a positive skills assessment from the relevant assessing authority. Engineers use Engineers Australia; nurses use ANMAC; accountants use CPA/CA/IPA; IT professionals have occupation-specific bodies.",
          "The assessor verifies that your Indian or Kerala qualifications and work experience match Australian standards. Without a valid assessment, you cannot receive an invitation — regardless of your points score.",
          `${COMPANY_NAME} identifies your ANZSCO code and assessing authority before you invest in assessments and visa fees.`,
        ],
      },
      {
        heading: `How ${COMPANY_NAME_SHORT} Helps from Kochi`,
        paragraphs: [
          "Our Vyttila team reviews your occupation list status, calculates your points, recommends the right subclass (189, 190, or 491), and coordinates skills assessment preparation. We track state nomination openings and invitation rounds relevant to your profile.",
        ],
      },
    ],
    faq: [
      {
        question: "What is the minimum points score for Australia PR?",
        answer:
          "65 points to lodge an EOI — but Subclass 189 invitations for popular occupations often require 75–85+. State nomination on 190 or 491 adds points and improves chances.",
      },
      {
        question: "Which Kerala professions are in demand for Australia PR?",
        answer:
          "Registered nurses, software engineers, civil and mechanical engineers, accountants, teachers, and chefs frequently appear on skilled lists. Healthcare and IT remain strong for Kerala graduates with positive assessments.",
      },
      {
        question: "How long does Australia PR take from India?",
        answer:
          "Typically 12–24 months from skills assessment to visa grant. Skills assessment alone takes 2–4 months; invitation wait depends on points and occupation ceilings.",
      },
      {
        question: "Do I need a job offer for Australia PR?",
        answer:
          "Not for Subclass 189, 190, or 491 in most cases. Some employer-sponsored subclasses (482, 186) require sponsorship, but points-tested visas do not.",
      },
      {
        question: "What English test does Australia accept?",
        answer:
          "IELTS Academic or General, PTE Academic, TOEFL iBT, and Cambridge C1 Advanced. Competent English is IELTS 6.0 in each band; higher scores earn more points.",
      },
    ],
  };
}
