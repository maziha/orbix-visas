import { COMPANY_NAME, COMPANY_NAME_SHORT } from "@/lib/contact-info";
import type { BlogPost } from "../types";

export function buildSpouseVisaCanadaPost(): BlogPost {
  return {
    slug: "spouse-visa-canada-guide",
    title: "Spouse Visa Canada — How to Sponsor Your Partner from India",
    metaTitle: "Spouse Visa Canada from India — Sponsorship Guide | OrbiX",
    metaDescription:
      "How to sponsor your spouse for Canada PR or a partner visa from India — eligibility, documents, inland vs overseas sponsorship, timelines, and common mistakes Kerala families make.",
    keywords: [
      "spouse visa canada india",
      "canada spouse sponsorship",
      "partner visa canada kerala",
      "sponsor spouse canada pr",
      "canada family sponsorship india",
    ],
    category: "visa",
    categoryLabel: "Family Visa",
    publishedAt: "2026-05-26",
    readingTime: 8,
    heroText:
      "If your spouse is a Canadian citizen or permanent resident, you can apply for permanent residency through family sponsorship. This guide explains eligibility, the inland vs overseas process, documents Kerala families need, and realistic timelines.",
    relatedServiceHref: "/services/spouse-visa",
    relatedServiceLabel: "Spouse Visa Consultation",
    sections: [
      {
        heading: "Who Can Sponsor a Spouse to Canada?",
        paragraphs: [
          "Canadian citizens and permanent residents aged 18+ can sponsor a spouse, common-law partner, or conjugal partner. The sponsor must prove the relationship is genuine and meet income requirements (for some sponsorship types).",
          "The sponsored person receives permanent residency on approval — not a temporary visa. This is different from a visitor visa or open work permit.",
        ],
      },
      {
        heading: "Inland vs Overseas Sponsorship",
        paragraphs: ["The processing stream depends on where your partner is living when you apply:"],
        listItems: [
          "Overseas sponsorship — The partner remains in India (or another country) while the application is processed. Processing typically takes 12–18 months. The partner can visit Canada on a visitor visa during processing but cannot work until PR is granted.",
          "Inland sponsorship — The partner is already in Canada on valid status (visitor, student, worker). They may be eligible for an open work permit while the PR application is processed. Processing takes 12–18 months.",
          "Spousal Open Work Permit (SOWP) — Available in both streams when the PR application is in processing. Allows the partner to work in Canada while waiting.",
        ],
      },
      {
        heading: "Documents Kerala Families Typically Need",
        listItems: [
          "Marriage certificate — Kerala registrar-issued certificate; may need apostille or certified translation.",
          "Relationship evidence — Photos, communication history, joint financial documents, affidavits from family, and proof of cohabitation if applicable.",
          "Sponsor documents — Proof of Canadian citizenship or PR, employment letter, tax returns (NOA), and undertaking to support the partner.",
          "Applicant documents — Passport, police clearance from India and every country lived 6+ months, medical examination from a panel physician.",
          "Common-law partners — Additional proof of 12+ months cohabitation if not legally married.",
        ],
        paragraphs: [],
      },
      {
        heading: "Timelines and Processing",
        paragraphs: [
          "IRCC's current service standard for spousal sponsorship is approximately 12 months for 80% of applications — but incomplete files, missing police certificates, or relationship scrutiny can extend this to 18–24 months.",
          "Kerala families should start gathering police clearances and relationship evidence early. Delays most often come from insufficient proof of a genuine relationship, not from processing backlogs alone.",
        ],
      },
      {
        heading: `How ${COMPANY_NAME_SHORT} Helps`,
        paragraphs: [
          `${COMPANY_NAME} in Vyttila prepares spousal sponsorship files for Kerala families — document checklists, relationship evidence structuring, and liaison through submission. We also handle cases where the sponsor is in Canada and the partner remains in Kerala during processing.`,
        ],
      },
    ],
    faq: [
      {
        question: "Can I sponsor my spouse if I am on a work permit in Canada?",
        answer:
          "You must be a Canadian citizen or permanent resident to sponsor. Work permit holders cannot sponsor until they obtain PR or citizenship.",
      },
      {
        question: "How much income does the sponsor need?",
        answer:
          "Spousal sponsorship of a partner without dependent children generally has no minimum income requirement. Sponsoring parents or other relatives does require meeting LICO income thresholds.",
      },
      {
        question: "Can my spouse visit Canada while the application is processing?",
        answer:
          "Yes on a visitor visa — but the officer must be satisfied they will leave if the PR is refused. Having a pending PR application can complicate visitor visa approvals.",
      },
      {
        question: "What if our marriage is recent?",
        answer:
          "Recent marriages are scrutinised more closely. Strong relationship evidence — photos, communication, joint finances, family affidavits — is essential regardless of how long you have been married.",
      },
    ],
  };
}
