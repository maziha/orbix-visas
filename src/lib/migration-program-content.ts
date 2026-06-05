import type { CountryCode } from "@/lib/countries";
import type { FaqItem } from "@/lib/faq-types";
import { AUSTRALIA_PR_FAQ, CANADA_PR_FAQ } from "@/lib/migration-faq-content";

export type MigrationPathwayCard = {
  id: string;
  title: string;
  whoQualifies: string;
  timeline: string;
  /** Destination for the pathway “First step” CTA — never the current page. */
  firstStepHref: string;
};

export type MigrationExpectStep = {
  step: number;
  title: string;
  detail: string;
  duration: string;
};

export type MigrationProgramContent = {
  slug: string;
  name: string;
  countryCode: CountryCode;
  heroH1: string;
  heroH2: string;
  /** DATA: Confirm draw scores and processing times with client */
  heroStatPills: string[];
  pathwayCards: MigrationPathwayCard[];
  expectSteps: MigrationExpectStep[];
  documents: string[];
  documentsNote: string;
  primaryCtaLabel: string;
  finalCtaTitle: string;
  finalCtaSubtitle: string;
  faq: FaqItem[];
};

export const MIGRATION_PROGRAM_CONTENT: Record<string, MigrationProgramContent> = {
  "canada-pr": {
    slug: "canada-pr",
    name: "Canada PR",
    countryCode: "CA",
    heroH1: "Canada Permanent Residency — Expert Consultant in Kochi, Kerala",
    heroH2: "The fastest pathway to Canadian PR for skilled professionals from Kerala.",
    heroStatPills: [
      "Processing time: 6–12 months for Express Entry",
      "Minimum CRS score: currently ~480–500 for FSW",
    ],
    pathwayCards: [
      {
        id: "express-entry",
        title: "Express Entry",
        whoQualifies:
          "Skilled workers with a degree-level qualification, at least one year of skilled work experience, and English or French at CLB 7+ (roughly IELTS 6.0 each band). You compete on a CRS points score in the federal pool.",
        timeline: "Typically 12–18 months from a complete profile to confirmation of permanent residence, depending on CRS and draw frequency.",
        firstStepHref: "/blog/how-to-check-crs-score",
      },
      {
        id: "pnp",
        title: "Provincial Nominee Program (PNP)",
        whoQualifies:
          "Applicants with a valid job offer, prior study or work in a province, or an occupation on a provincial priority list. A nomination can add CRS points or provide a dedicated stream.",
        timeline: "Often 12–24 months including provincial processing and federal stages — varies significantly by province and stream.",
        firstStepHref: "/contact?service=pnp",
      },
      {
        id: "family",
        title: "Family Sponsorship",
        whoQualifies:
          "Canadian citizens and permanent residents sponsoring a spouse, partner, dependent child, or eligible parent. The sponsor must meet income and undertaking requirements.",
        timeline: "Typically 12–24+ months depending on relationship, whether the sponsor lives in Canada, and completeness of the file.",
        firstStepHref: "/contact?service=family-sponsorship",
      },
    ],
    expectSteps: [
      {
        step: 1,
        title: "Profile assessment",
        detail: "Orbix reviews your age, education, work history, and language results to estimate CRS potential and identify gaps before you pay application fees.",
        duration: "~1 month",
      },
      {
        step: 2,
        title: "Express Entry profile creation",
        detail: "Gather ECA, language tests, and employment letters; create your profile in the IRCC pool with the strongest score possible.",
        duration: "1–2 months",
      },
      {
        step: 3,
        title: "ITA (Invitation to Apply)",
        detail: "When your CRS meets or exceeds the draw cutoff, IRCC issues an Invitation to Apply — timing depends on draw frequency and your score.",
        duration: "3–12 months (varies)",
      },
      {
        step: 4,
        title: "Document submission",
        detail: "After ITA you have 60 days to submit a complete eAPR with medicals, police certificates, and aligned employment proofs.",
        duration: "2 months (deadline)",
      },
      {
        step: 5,
        title: "PR approval",
        detail: "IRCC processes your application; upon approval you receive confirmation of permanent residence (COPR) and can plan landing.",
        duration: "6–8 months (typical)",
      },
    ],
    documents: [
      "Valid passport and travel history",
      "IELTS (IELTS General) or CELPIP/TEF language results within validity",
      "Educational Credential Assessment (ECA) for foreign degrees",
      "Degree certificates and transcripts",
      "Employment reference letters (duties, salary, dates, full-time/part-time)",
      "Proof of funds (if required for your stream)",
      "Police clearance certificate(s) when requested",
      "Medical examination by an IRCC-approved panel physician",
      "Marriage or birth certificates if claiming spouse/dependants",
    ],
    documentsNote:
      "The exact document list depends on your pathway (Express Entry, PNP, or family sponsorship) and personal history. Orbix provides a tailored checklist after your profile assessment.",
    primaryCtaLabel: "Book a Free Profile Assessment",
    finalCtaTitle: "Book a Free Assessment",
    finalCtaSubtitle:
      "We will review your eligibility in your first session at no cost — including a realistic view of CRS, timelines, and whether Express Entry, PNP, or family sponsorship fits your profile.",
    faq: CANADA_PR_FAQ,
  },
  "australia-pr": {
    slug: "australia-pr",
    name: "Australia PR",
    countryCode: "AU",
    heroH1: "Australia Permanent Residency — Skilled Migration Consultant in Kochi",
    heroH2: "Skilled migration pathways for professionals from Kerala — points-tested and state-nominated routes explained clearly.",
    heroStatPills: [
      "Processing time: 6–12 months after invitation (typical)",
      "Minimum points: 65+ to lodge; invitations often need higher",
    ],
    pathwayCards: [
      {
        id: "subclass-189",
        title: "Subclass 189 — Skilled Independent",
        whoQualifies:
          "Occupation on the relevant skilled list, positive skills assessment, competent English, and a competitive points score — no employer or state sponsor required.",
        timeline: "Often 12–24 months from skills assessment through invitation and visa grant; occupation ceilings and points cut-offs affect timing.",
        firstStepHref: "/contact?service=subclass-189",
      },
      {
        id: "subclass-190",
        title: "Subclass 190 — Skilled Nominated",
        whoQualifies:
          "Applicants who receive nomination from an Australian state or territory and commit to living in that state. Extra nomination points can improve invitation chances.",
        timeline: "Typically 12–24 months including state nomination processing and visa lodgement after invitation.",
        firstStepHref: "/contact?service=subclass-190",
      },
      {
        id: "subclass-491",
        title: "Subclass 491 — Skilled Work Regional",
        whoQualifies:
          "Skilled workers willing to live and work in designated regional areas. Provisional visa with a pathway to permanent residency when residence and income conditions are met.",
        timeline: "Often 15–30+ months including provisional period before eligible to apply for permanent residency.",
        firstStepHref: "/contact?service=subclass-491",
      },
    ],
    expectSteps: [
      {
        step: 1,
        title: "Skills & points assessment",
        detail: "Orbix checks your ANZSCO occupation, English scores, and skilled employment against the points test and state lists.",
        duration: "~1 month",
      },
      {
        step: 2,
        title: "Skills assessment",
        detail: "Lodge with the relevant assessing authority for your occupation — often mandatory before submitting an Expression of Interest (EOI).",
        duration: "2–4 months",
      },
      {
        step: 3,
        title: "EOI & invitation",
        detail: "Submit EOI in SkillSelect; receive invitation from Department of Home Affairs or a state — deadlines are strict once invited.",
        duration: "3–12+ months (varies)",
      },
      {
        step: 4,
        title: "Visa application lodgement",
        detail: "Prepare documents, health exams, and character checks; lodge within the invitation validity period.",
        duration: "1–2 months",
      },
      {
        step: 5,
        title: "Visa grant",
        detail: "Home Affairs processes your application; upon grant you can plan travel and meet initial visa conditions.",
        duration: "6–12 months (typical)",
      },
    ],
    documents: [
      "Valid passport",
      "English test results (IELTS, PTE, or accepted equivalent) within validity",
      "Positive skills assessment outcome letter",
      "Employment references and payslips aligned to ANZSCO duties",
      "Qualifications and academic transcripts",
      "State nomination documents (if Subclass 190 or 491)",
      "Police clearance certificates",
      "Health examinations for all applicants",
      "Partner/dependant documents if applicable",
    ],
    documentsNote:
      "Requirements differ by subclass and assessing authority. Orbix confirms your checklist after occupation and pathway are confirmed.",
    primaryCtaLabel: "Book a Free Profile Assessment",
    finalCtaTitle: "Book a Free Assessment",
    finalCtaSubtitle:
      "We will review your points, occupation list status, and realistic pathway (189, 190, or 491) in your first session at no cost.",
    faq: AUSTRALIA_PR_FAQ,
  },
};
