import type { ProcessStep } from "@/lib/migration-program-content";

export type FamilyVisaSlug = "spouse-visa" | "parent-visa" | "student-dependent-visa";

export type FamilyVisaDestination = {
  country: string;
  visaLabel: string;
  timeline: string;
  costNote: string;
  requirements: string[];
};

export type FamilyVisaContent = {
  slug: FamilyVisaSlug;
  name: string;
  previewLine: string;
  heroSubtitle: string;
  overview: string;
  quickFacts: { label: string; value: string }[];
  eligibility: string[];
  documents: string[];
  destinations: FamilyVisaDestination[];
  processSteps: ProcessStep[];
  timeline: { label: string; duration: string }[];
  timelineNote: string;
  costDisclaimer: string;
  keralaContext?: string;
  orbixRole: string[];
  primaryCtaLabel: string;
  secondaryCtaLabel: string;
};

export const FAMILY_VISA_COST_DISCLAIMER =
  "Fee figures are approximate guides in INR (as of 2026) and vary by exchange rate, embassy fees, medicals, translations, and whether you use a consultant. Confirm current amounts before you apply.";

const sharedProcessSteps: ProcessStep[] = [
  {
    step: 1,
    title: "Relationship & sponsor review",
    detail:
      "We confirm sponsor status, relationship type, and which country’s rules apply — and flag gaps before you spend on applications.",
  },
  {
    step: 2,
    title: "Document checklist",
    detail:
      "You receive a tailored list: civil status proofs, financials, police certificates, medicals, and relationship evidence.",
  },
  {
    step: 3,
    title: "Application preparation",
    detail:
      "Forms, cover letters, and supporting documents are aligned so dates, names, and addresses match across every paper.",
  },
  {
    step: 4,
    title: "Lodgement & tracking",
    detail:
      "We guide online or paper submission, biometrics, and responding to any additional document requests from the visa office.",
  },
  {
    step: 5,
    title: "After grant",
    detail:
      "Pointers on travel, arrival compliance, and next steps (e.g. open work rights, extension, or eventual PR linkage where relevant).",
  },
];

export const FAMILY_VISA_SLUGS: FamilyVisaSlug[] = [
  "spouse-visa",
  "parent-visa",
  "student-dependent-visa",
];

export const FAMILY_VISA_CONTENT: Record<FamilyVisaSlug, FamilyVisaContent> = {
  "spouse-visa": {
    slug: "spouse-visa",
    name: "Spouse Visa",
    previewLine: "Sponsor PR/citizen · 12–24 mo typical · relationship evidence required",
    heroSubtitle:
      "Reunite with your spouse abroad — eligibility, documents, timelines, and typical costs for Canada, UK, and Australia sponsors.",
    overview:
      "A spouse or partner visa lets a married or de facto partner join someone who already lives abroad as a citizen, permanent resident, or eligible temporary resident. Each country tests whether the relationship is genuine and whether the sponsor can support you financially. Orbix helps families from Kerala prepare a complete file the first time — not a rushed submission that triggers delays or refusals.",
    quickFacts: [
      { label: "Who sponsors", value: "Citizen, PR, or eligible visa holder abroad" },
      { label: "Relationship", value: "Marriage or 12+ months de facto (country rules vary)" },
      { label: "Typical timeline", value: "12–24 months end-to-end" },
      { label: "Cost band (approx.)", value: "₹1.5–4L total prep + govt fees" },
      { label: "English", value: "Often not required for spouse; sponsor may need proof" },
    ],
    eligibility: [
      "Legally married or in a recognised de facto/partner relationship with the sponsor",
      "Sponsor holds eligible status (citizenship, PR, or qualifying temporary visa — rules differ by country)",
      "Genuine and continuing relationship — not entered into primarily for immigration benefit",
      "Sponsor meets minimum income or financial undertaking requirements where applicable",
      "Both partners meet health and character requirements (medicals, police certificates)",
      "Any previous visa refusals or immigration breaches disclosed honestly",
    ],
    documents: [
      "Valid passports and passport-size photographs",
      "Marriage certificate (and translation if not in English/French)",
      "Relationship evidence: photos, chat logs, travel history, joint finances, lease or utility bills",
      "Sponsor’s status proof: PR card, citizenship, or visa grant letter",
      "Police clearance certificates from countries lived in (typically 6+ months)",
      "Medical examination by an approved panel physician",
      "Sponsor’s employment, tax, or bank statements for financial undertaking",
      "Completed application forms and receipt of government fees",
    ],
    destinations: [
      {
        country: "Canada",
        visaLabel: "Spousal Sponsorship (inland or overseas)",
        timeline: "12–18 months typical processing after complete application",
        costNote: "Govt sponsorship fee ~₹85k–1L + medicals/translations; total prep often ₹2–4L",
        requirements: [
          "Sponsor is Canadian citizen or PR aged 18+",
          "Undertaking to provide financial support for 3 years (spouse) or longer for dependants",
          "Relationship proof and cohabitation history if applicable",
          "Outcomes depend on genuine relationship and complete documentation — no guaranteed approval",
        ],
      },
      {
        country: "United Kingdom",
        visaLabel: "Spouse / Partner visa (Family route)",
        timeline: "3–6 months standard processing; priority options may be faster",
        costNote: "Visa fee + IHS health surcharge often ₹4–8L+ depending on duration and dependants",
        requirements: [
          "Sponsor is British citizen, settled person, or eligible refugee",
          "Minimum income threshold or adequate savings (rules updated periodically — verify at consultation)",
          "English A1 for initial entry (higher for extensions/settlement later)",
          "Genuine relationship evidence and suitable accommodation",
        ],
      },
      {
        country: "Australia",
        visaLabel: "Partner visa (Subclass 820/801 or 309/100)",
        timeline: "12–24+ months for many partner streams; two-stage process common",
        costNote: "Primary applicant fee often ₹3–4L+; second stage additional; medicals extra",
        requirements: [
          "Sponsor is Australian citizen, PR, or eligible NZ citizen",
          "De facto 12 months or married — relationship registered where relevant",
          "Sponsor meets assurance of support / financial criteria",
          "Health, character, and relationship genuineness assessed by Department of Home Affairs",
        ],
      },
    ],
    processSteps: sharedProcessSteps,
    timeline: [
      { label: "Document gathering", duration: "1–3 months" },
      { label: "Visa office processing", duration: "6–18 months" },
      { label: "Total (typical)", duration: "12–24 months" },
    ],
    timelineNote:
      "Processing times are published ranges only — they change with visa office workload. Outcomes depend on genuine relationship, sponsor eligibility, and a complete, consistent application.",
    costDisclaimer: FAMILY_VISA_COST_DISCLAIMER,
    keralaContext:
      "Many Kerala families reunite after one spouse obtains Canada PR or an Australia skilled visa while the other remains in India. We commonly prepare files where the sponsor is already working in Toronto, Melbourne, or London and the partner is in Kochi or the Gulf — coordinating police certificates, marriage registration, and evidence across countries is where mistakes happen without guidance.",
    orbixRole: [
      "Confirm which country and visa subclass fits your sponsor’s status",
      "Build a relationship evidence plan (what to collect, what weak files look like)",
      "Prepare document checklists aligned to IRCC, UKVI, or Home Affairs requirements",
      "Review forms and cover letters for consistency before lodgement",
      "Track biometrics, medicals, and any additional document requests",
      "Honest advice if the case needs more evidence or is not ready to lodge yet",
    ],
    primaryCtaLabel: "Check Your Eligibility",
    secondaryCtaLabel: "Call Our Kochi Office",
  },
  "parent-visa": {
    slug: "parent-visa",
    name: "Parent Visa",
    previewLine: "Sponsor citizen/PR · long queues in some countries · balance-of-family tests",
    heroSubtitle:
      "Bring parents to join you abroad — who can sponsor, typical queues, documents, and costs for Canada, UK, and Australia.",
    overview:
      "Parent visas let adult children who are citizens or permanent residents sponsor their mother or father to live abroad. These streams are often slower and more selective than spouse visas — some countries cap places or require balance-of-family tests. Orbix explains realistic timelines so families in Kerala can plan finances and expectations before applying.",
    quickFacts: [
      { label: "Who sponsors", value: "Adult citizen or PR child abroad" },
      { label: "Who can join", value: "Parent(s) — biological or adoptive per country rules" },
      { label: "Typical timeline", value: "2–10+ years (country & stream dependent)" },
      { label: "Cost band (approx.)", value: "₹2–6L+ govt + preparation" },
      { label: "Key test", value: "Balance of family / financial undertaking" },
    ],
    eligibility: [
      "Sponsor is a citizen or permanent resident (or meets country-specific settled status)",
      "Parent meets age definition (often 65+ for contributory streams, or any age for visitor-parent routes)",
      "Balance-of-family or similar test met where required (e.g. majority of children in Australia)",
      "Sponsor signs financial undertaking and meets income thresholds",
      "Health and character requirements for the parent applicant",
      "Medical insurance or assurance of support where mandatory",
    ],
    documents: [
      "Valid passports for parent and sponsor",
      "Birth certificates linking parent and sponsor child",
      "Sponsor’s proof of citizenship or PR (passport, PR card, visa grant)",
      "Evidence of sponsor’s residence, employment, and income",
      "Parent’s police certificates and medical examination results",
      "Family composition evidence (siblings’ locations for balance-of-family tests)",
      "Completed forms, fees, and any assurance of support bonds",
    ],
    destinations: [
      {
        country: "Canada",
        visaLabel: "Parent and Grandparent Program (PGP) / Super Visa",
        timeline: "PGP: lottery-based; processing often 2–4+ years when invited. Super Visa: months for temporary stays",
        costNote: "PGP sponsorship ~₹1L+ govt; Super Visa lower but requires insurance",
        requirements: [
          "PGP: sponsor must meet income LICO thresholds; limited annual intake",
          "Super Visa: long-stay visitor for parents; valid medical insurance required",
          "Medical and police checks for all streams",
        ],
      },
      {
        country: "United Kingdom",
        visaLabel: "Adult Dependent Relative (very limited) / long-stay visit",
        timeline: "ADR: extremely difficult; visit routes: weeks to months",
        costNote: "Visit visa fees lower; ADR requires substantial ongoing care proof in UK",
        requirements: [
          "ADR: parent must require long-term personal care only available in UK",
          "Most families use repeated visit visas with strong ties evidence instead",
          "Sponsor must show accommodation and financial support for visits",
        ],
      },
      {
        country: "Australia",
        visaLabel: "Contributory Parent (143) / Aged Parent / Visitor",
        timeline: "Contributory parent: ~12–30 months processing; non-contributory queues far longer",
        costNote: "Contributory visa: large second visa charge often ₹25L+ (AUD bond component) — verify current schedule",
        requirements: [
          "Balance of family: at least half of children live in Australia permanently",
          "Assurance of Support and health insurance for contributory streams",
          "Aged vs non-aged parent categories affect which subclass applies",
        ],
      },
    ],
    processSteps: sharedProcessSteps,
    timeline: [
      { label: "Eligibility & stream choice", duration: "1–2 months" },
      { label: "Queue / processing", duration: "1–10+ years" },
      { label: "Visit routes (if used)", duration: "2–8 weeks" },
    ],
    timelineNote:
      "Parent migration is often the slowest family stream. We will tell you honestly if a temporary visit visa is more realistic than a permanent parent visa in your situation.",
    costDisclaimer: FAMILY_VISA_COST_DISCLAIMER,
    keralaContext:
      "Kerala families frequently explore parent visas after a child settles in Canada or Australia on PR. We help compare contributory vs non-contributory Australia routes, Canada Super Visa for extended visits, and when a straightforward visit visa is the practical first step for parents still in Kochi.",
    orbixRole: [
      "Compare permanent parent vs long-stay visit options honestly",
      "Assess balance-of-family and income tests before you commit fees",
      "Prepare birth links, family composition, and financial evidence",
      "Coordinate medicals and police certificates for older applicants",
      "Explain queue times so families can plan without false promises",
      "Lodge and track applications; respond to visa office requests",
    ],
    primaryCtaLabel: "Check Your Eligibility",
    secondaryCtaLabel: "Call Our Kochi Office",
  },
  "student-dependent-visa": {
    slug: "student-dependent-visa",
    name: "Student Dependent Visa",
    previewLine: "Tied to main student visa · spouse/children · funds proof required",
    heroSubtitle:
      "Bring your spouse or children while you study abroad — eligibility, documents, and timelines linked to your student visa.",
    overview:
      "A student dependent visa lets the spouse or children of an international student live in the same country for the duration of the main student’s course. Rules mirror the primary student visa: if the student’s visa lapses or is cancelled, dependants must usually leave or change status. Orbix helps study-abroad families from Kerala plan dependant applications together with the main student file.",
    quickFacts: [
      { label: "Who sponsors", value: "International student (main applicant)" },
      { label: "Who can join", value: "Spouse/partner and dependent children" },
      { label: "Typical timeline", value: "4–12 weeks with main application" },
      { label: "Cost band (approx.)", value: "₹50k–2L per dependant" },
      { label: "Work rights", value: "Varies by country (often limited hours)" },
    ],
    eligibility: [
      "Main applicant holds or is applying for a valid student visa",
      "Relationship proven: marriage certificate or birth certificates for children",
      "Dependants declared on student visa application or added via subsequent application",
      "Combined funds to cover tuition, living costs, and dependants (country-specific amounts)",
      "Health insurance for dependants where required (e.g. OSHC in Australia)",
      "Health and character checks for each dependant applicant",
    ],
    documents: [
      "Main student’s Confirmation of Enrolment (CoE) or CAS",
      "Passports and photographs for each dependant",
      "Marriage or birth certificates with translations if needed",
      "Proof of relationship and genuine marriage/partnership",
      "Financial evidence showing funds for student + dependants",
      "Dependant health insurance policy (where mandatory)",
      "Police certificates for adult dependants if required",
    ],
    destinations: [
      {
        country: "Canada",
        visaLabel: "Study permit — family members",
        timeline: "Processed with study permit; allow 8–12+ weeks",
        costNote: "Study permit ~₹9k govt + biometrics; dependants pay separate fees",
        requirements: [
          "Student must study at a DLI; dependants may apply for open work/study permits where eligible",
          "Proof of funds includes dependants in living cost calculation",
          "Medical exam for dependants staying 6+ months",
        ],
      },
      {
        country: "United Kingdom",
        visaLabel: "Student dependant (Student Route)",
        timeline: "Usually decided with main Student visa; 3–8 weeks typical",
        costNote: "Dependant visa fee + IHS per person — budget ₹2–4L+ per dependant",
        requirements: [
          "Only certain course levels allow dependants (e.g. postgraduate, government-sponsored)",
          "Maintenance funds multiplied by number of family members in London or outside London rates",
          "Each dependant completes immigration health surcharge",
        ],
      },
      {
        country: "Australia",
        visaLabel: "Student visa (Subclass 500) — dependants",
        timeline: "4–8 weeks typical when lodged together",
        costNote: "Separate visa application charge per person + OSHC for family",
        requirements: [
          "Genuine temporary entrant test applies to whole family unit",
          "OSHC family cover for course duration",
          "Partner may have work rights depending on student’s course level",
        ],
      },
    ],
    processSteps: sharedProcessSteps,
    timeline: [
      { label: "Plan with student file", duration: "2–4 weeks" },
      { label: "Lodgement together", duration: "Same day as student" },
      { label: "Decision", duration: "4–12 weeks" },
    ],
    timelineNote:
      "Dependant visas are refused when funds are understated or the main student’s course does not allow family members. We review both files together before submission.",
    costDisclaimer: FAMILY_VISA_COST_DISCLAIMER,
    orbixRole: [
      "Confirm whether your course and country allow dependants",
      "Calculate combined funds required for student + family",
      "Align dependant documents with the main student GTE/SOP narrative",
      "Prepare marriage and birth certificates with correct translations",
      "Lodge linked applications and track decisions for all family members",
      "Advise on work/study rights for dependants after arrival",
    ],
    primaryCtaLabel: "Check Your Eligibility",
    secondaryCtaLabel: "Call Our Kochi Office",
  },
};

export function getFamilyPreviewLine(slug: FamilyVisaSlug): string {
  return FAMILY_VISA_CONTENT[slug].previewLine;
}

export function isFamilyVisaSlug(slug: string): slug is FamilyVisaSlug {
  return FAMILY_VISA_SLUGS.includes(slug as FamilyVisaSlug);
}
