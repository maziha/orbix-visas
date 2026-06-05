import type { FaqItem } from "@/lib/faq-types";
import { FAMILY_VISA_FAQ } from "@/lib/family-visa-faq-content";
import { getFamilyVisaCostDisclaimer } from "@/lib/year";

export type ProcessStep = {
  step: number;
  title: string;
  detail: string;
};

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
  /** SEO H1 — keyword-rich, distinct from document title */
  heroH1: string;
  previewLine: string;
  heroSubtitle: string;
  overview: string;
  /** Additional intro copy for on-page depth and SEO */
  introduction: string;
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
  faq: FaqItem[];
  primaryCtaLabel: string;
  secondaryCtaLabel: string;
};

const spouseVisaProcessSteps: ProcessStep[] = [
  {
    step: 1,
    title: "Sponsor & relationship check",
    detail:
      "We verify your sponsor’s citizenship, PR, or visa status and whether your marriage or de facto partnership meets the country’s definition — before you pay government fees.",
  },
  {
    step: 2,
    title: "Relationship evidence plan",
    detail:
      "You receive a tailored list of photos, communications, joint finances, and travel history that visa officers expect — weak evidence is the most common refusal reason for Kerala applicants.",
  },
  {
    step: 3,
    title: "Document preparation",
    detail:
      "Marriage certificates, police clearances, medicals, and sponsor financials are checked for matching names, dates, and addresses across every form.",
  },
  {
    step: 4,
    title: "Lodgement & biometrics",
    detail:
      "We guide online or paper submission to IRCC, UKVI, or Home Affairs, biometrics appointments, and any follow-up document requests.",
  },
  {
    step: 5,
    title: "After grant & arrival",
    detail:
      "Pointers on travel, conditional periods, open work rights, and eventual permanent residence linkage where your stream allows.",
  },
];

const parentVisaProcessSteps: ProcessStep[] = [
  {
    step: 1,
    title: "Stream selection",
    detail:
      "We compare permanent parent visas, contributory routes, Super Visa, and long-stay visit options — and tell you honestly which is realistic for your family.",
  },
  {
    step: 2,
    title: "Balance-of-family & income review",
    detail:
      "For Australia and similar tests, we map where siblings live and whether your sponsor meets income or assurance-of-support thresholds.",
  },
  {
    step: 3,
    title: "Document gathering",
    detail:
      "Birth certificates linking parent and sponsor, family composition proof, sponsor employment, and parent medical and police certificates.",
  },
  {
    step: 4,
    title: "Application lodgement",
    detail:
      "Forms, fees, and bonds lodged correctly — including lottery or queue registration for capped programs like Canada PGP.",
  },
  {
    step: 5,
    title: "Queue tracking & visits",
    detail:
      "While permanent queues run, we advise on interim visit visas so parents in Kochi can travel safely when appropriate.",
  },
];

const studentDependentProcessSteps: ProcessStep[] = [
  {
    step: 1,
    title: "Dependant eligibility check",
    detail:
      "We confirm your course level and country allow spouse or children — many UK and Australia programs restrict dependants to postgraduate or higher.",
  },
  {
    step: 2,
    title: "Combined funds calculation",
    detail:
      "Living costs, tuition, OSHC or IHS, and dependant fees are calculated together so neither file is refused for understated finances.",
  },
  {
    step: 3,
    title: "Linked document prep",
    detail:
      "Marriage and birth certificates, relationship proof, and dependant passports aligned with the main student’s CoE, CAS, or offer letter.",
  },
  {
    step: 4,
    title: "Joint lodgement",
    detail:
      "Student and dependant applications submitted together with a consistent study plan and Genuine Student / GTE narrative.",
  },
  {
    step: 5,
    title: "Decision & family arrival",
    detail:
      "Track outcomes for all family members and brief you on dependant work, study, and insurance conditions after arrival.",
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
    heroH1: "Spouse Visa Consultant in Kochi, Kerala — Reunite with Your Partner Abroad",
    previewLine: "Sponsor PR/citizen · 12–24 mo typical · relationship evidence required",
    heroSubtitle:
      "Reunite with your spouse abroad — eligibility, documents, timelines, and typical costs for Canada, UK, and Australia sponsors.",
    overview:
      "A spouse or partner visa lets a married or de facto partner join someone who already lives abroad as a citizen, permanent resident, or eligible temporary resident. Each country tests whether the relationship is genuine and whether the sponsor can support you financially. Orbix helps families from Kerala prepare a complete file the first time — not a rushed submission that triggers delays or refusals.",
    introduction:
      "If your husband or wife is already in Canada on PR, working in Australia on a skilled visa, or settled in the UK, the partner visa is usually the correct route — not a visitor visa with repeated extensions. Visa officers look for consistent timelines: when you met, when you married, when the sponsor emigrated, and how you maintain contact across Kochi, the Gulf, or India while apart. Orbix builds that narrative with evidence that survives scrutiny, whether your sponsor is in Toronto, Melbourne, London, or Birmingham.",
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
    processSteps: spouseVisaProcessSteps,
    timeline: [
      { label: "Document gathering", duration: "1–3 months" },
      { label: "Visa office processing", duration: "6–18 months" },
      { label: "Total (typical)", duration: "12–24 months" },
    ],
    timelineNote:
      "Processing times are published ranges only — they change with visa office workload. Outcomes depend on genuine relationship, sponsor eligibility, and a complete, consistent application.",
    costDisclaimer: getFamilyVisaCostDisclaimer(),
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
    faq: FAMILY_VISA_FAQ["spouse-visa"],
    primaryCtaLabel: "Check Your Eligibility",
    secondaryCtaLabel: "Call Our Kochi Office",
  },
  "parent-visa": {
    slug: "parent-visa",
    name: "Parent Visa",
    heroH1: "Parent Visa Consultant in Kerala — Bring Your Parents Abroad",
    previewLine: "Sponsor citizen/PR · long queues in some countries · balance-of-family tests",
    heroSubtitle:
      "Bring parents to join you abroad — who can sponsor, typical queues, documents, and costs for Canada, UK, and Australia.",
    overview:
      "Parent visas let adult children who are citizens or permanent residents sponsor their mother or father to live abroad. These streams are often slower and more selective than spouse visas — some countries cap places or require balance-of-family tests. Orbix explains realistic timelines so families in Kerala can plan finances and expectations before applying.",
    introduction:
      "Parents in Kochi often ask whether they can move permanently to Canada or Australia after their child receives PR. The answer depends on the stream: Canada’s Parent and Grandparent Program runs a lottery with multi-year queues; Australia’s contributory parent visa moves faster but carries a significant second instalment; the UK’s permanent parent route is extremely narrow for most families. Orbix compares these honestly and helps you choose between permanent migration, Super Visa-style long visits, or repeated visit visas — without spending lakhs on the wrong application.",
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
    processSteps: parentVisaProcessSteps,
    timeline: [
      { label: "Eligibility & stream choice", duration: "1–2 months" },
      { label: "Queue / processing", duration: "1–10+ years" },
      { label: "Visit routes (if used)", duration: "2–8 weeks" },
    ],
    timelineNote:
      "Parent migration is often the slowest family stream. We will tell you honestly if a temporary visit visa is more realistic than a permanent parent visa in your situation.",
    costDisclaimer: getFamilyVisaCostDisclaimer(),
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
    faq: FAMILY_VISA_FAQ["parent-visa"],
    primaryCtaLabel: "Check Your Eligibility",
    secondaryCtaLabel: "Call Our Kochi Office",
  },
  "student-dependent-visa": {
    slug: "student-dependent-visa",
    name: "Student Dependent Visa",
    heroH1: "Student Dependent Visa in Kerala — Take Your Family While Studying Abroad",
    previewLine: "Tied to main student visa · spouse/children · funds proof required",
    heroSubtitle:
      "Bring your spouse or children while you study abroad — eligibility, documents, and timelines linked to your student visa.",
    overview:
      "A student dependent visa lets the spouse or children of an international student live in the same country for the duration of the main student’s course. Rules mirror the primary student visa: if the student’s visa lapses or is cancelled, dependants must usually leave or change status. Orbix helps study-abroad families from Kerala plan dependant applications together with the main student file.",
    introduction:
      "Families from Ernakulam and across Kerala often want the spouse or children to travel together when the main applicant starts a master’s in Canada, the UK, or Australia. That is only possible when the course level, provider, and funds meet dependant rules — lodging a separate visitor visa for family while the student holds a study permit is a common mistake. Orbix coordinates both files so your Genuine Student statement, maintenance funds, and marriage or birth certificates tell one consistent story to the visa officer.",
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
    processSteps: studentDependentProcessSteps,
    timeline: [
      { label: "Plan with student file", duration: "2–4 weeks" },
      { label: "Lodgement together", duration: "Same day as student" },
      { label: "Decision", duration: "4–12 weeks" },
    ],
    timelineNote:
      "Dependant visas are refused when funds are understated or the main student’s course does not allow family members. We review both files together before submission.",
    costDisclaimer: getFamilyVisaCostDisclaimer(),
    keralaContext:
      "We often work with students in Vyttila who receive a UK or Canada offer and want their spouse to join from Kerala within the same intake. Course level, funds in rupees, and OSHC or IHS for the whole family must be planned before the main student lodges — not after a refusal.",
    orbixRole: [
      "Confirm whether your course and country allow dependants",
      "Calculate combined funds required for student + family",
      "Align dependant documents with the main student GTE/SOP narrative",
      "Prepare marriage and birth certificates with correct translations",
      "Lodge linked applications and track decisions for all family members",
      "Advise on work/study rights for dependants after arrival",
    ],
    faq: FAMILY_VISA_FAQ["student-dependent-visa"],
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
