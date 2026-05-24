import type { CountryCode, CountrySlug } from "@/lib/countries";

export type StudyQuickFact = { label: string; value: string };

export type StudyUniversityCategory = {
  category: string;
  feeRangeInr: string;
  universities: { name: string; note?: string }[];
};

export type StudyProcessStep = {
  step: number;
  title: string;
  detail: string;
};

export type StudyCountryContent = {
  slug: CountrySlug;
  name: string;
  countryCode: CountryCode;
  previewLine: string;
  heroSubtitle: string;
  overview: string;
  quickFacts: StudyQuickFact[];
  universityCategories: StudyUniversityCategory[];
  livingCostsInr: string[];
  visaSection: { title: string; bullets: string[] };
  processSteps: StudyProcessStep[];
  keralaContext: string;
  orbixRole: string[];
  primaryCtaLabel: string;
  secondaryCtaLabel: string;
};

export const STUDY_FEE_DISCLAIMER =
  "Tuition and living costs are approximate guides in INR (2025–26). Actual fees vary by university, city, and intake.";

/** One-line stat revealed on homepage destination card hover (data-stat) */
export const DESTINATION_HOVER_STATS: Record<CountrySlug, string> = {
  canada: "Post-study work: up to 3 years",
  uk: "Graduate Route: 2 years post-study",
  germany: "No tuition fees for most public universities",
  australia: "Post-study work: 2–4 years",
  "new-zealand": "Post-study work: up to 3 years",
  france: "Low tuition at public universities",
  poland: "Among the lowest tuition fees in the EU",
};

const ORBIX_STUDY_STEPS: StudyProcessStep[] = [
  {
    step: 1,
    title: "Profile & budget review",
    detail:
      "We review your academics, English scores, finances, and career goals to shortlist realistic countries and programs.",
  },
  {
    step: 2,
    title: "University shortlist",
    detail:
      "You receive a curated list of institutions matching your grades, field, and budget — not a generic brochure list.",
  },
  {
    step: 3,
    title: "Applications & documents",
    detail:
      "SOP, LOR, and form guidance; we check consistency before submissions to reduce avoidable rejections.",
  },
  {
    step: 4,
    title: "Offer & visa file",
    detail:
      "Once you hold an offer, we help structure funds proof, medicals, and interview prep where required.",
  },
  {
    step: 5,
    title: "Pre-departure briefing",
    detail:
      "Accommodation pointers, travel checklist, and what to expect in your first semester abroad.",
  },
];

export const STUDY_COUNTRY_CONTENT: Record<CountrySlug, StudyCountryContent> = {
  canada: {
    slug: "canada",
    name: "Canada",
    countryCode: "CA",
    previewLine: "~₹10–18L/yr tuition · IELTS 6.0+ · PGWP up to 3 years",
    heroSubtitle:
      "Tuition bands in rupees, popular universities for Indian students, study permit timelines, and post-graduation work — explained clearly from Kochi.",
    overview:
      "Canada remains one of the most chosen destinations for Indian students because of post-study work rights, transparent visa rules, and a wide mix of colleges and universities. Programs are not one-size-fits-all: a diploma in a college and a master's at a research university have very different costs and outcomes. Orbix helps families compare options honestly before fees are paid.",
    quickFacts: [
      { label: "Tuition (typical)", value: "₹10–18L / year" },
      { label: "IELTS (common)", value: "6.0–6.5 overall" },
      { label: "Study permit", value: "4–12 weeks typical" },
      { label: "Post-study work", value: "PGWP up to 3 years" },
      { label: "Safety", value: "High; multicultural cities" },
    ],
    universityCategories: [
      {
        category: "Engineering & IT",
        feeRangeInr: "₹12–20L / year (UG & PG varies)",
        universities: [
          { name: "University of Toronto", note: "Research-intensive; competitive entry" },
          { name: "University of Waterloo", note: "Strong co-op and tech pathways" },
          { name: "University of Alberta", note: "Popular for engineering" },
          { name: "Conestoga College", note: "Practical diplomas; popular intake" },
          { name: "Seneca Polytechnic", note: "Toronto-area college pathway" },
        ],
      },
      {
        category: "Nursing & Health",
        feeRangeInr: "₹14–22L / year",
        universities: [
          { name: "McMaster University", note: "Nursing programs; competitive" },
          { name: "University of British Columbia", note: "Health sciences" },
          { name: "Humber College", note: "Practical nursing pathways" },
          { name: "Centennial College", note: "Health programs in GTA" },
        ],
      },
      {
        category: "Business & Management",
        feeRangeInr: "₹10–16L / year",
        universities: [
          { name: "York University — Schulich", note: "MBA and business" },
          { name: "University of Ottawa", note: "BCom and analytics" },
          { name: "Fanshawe College", note: "Affordable business diplomas" },
          { name: "Georgian College", note: "Popular college business programs" },
        ],
      },
    ],
    livingCostsInr: [
      "Toronto / Vancouver: ~₹1.0–1.4L / month living (rent is the largest cost)",
      "Smaller cities (e.g. Winnipeg, Halifax): often ~₹70k–1.0L / month",
      "GIC (Guaranteed Investment Certificate): required funds proof for many study permits",
    ],
    visaSection: {
      title: "Study permit & English requirements",
      bullets: [
        "Valid Letter of Acceptance from a Designated Learning Institution (DLI)",
        "IELTS Academic commonly 6.0+ each band (program-specific; some accept PTE/TOEFL)",
        "Proof of funds: tuition + living costs + travel (GIC route for many applicants)",
        "Medical exam and police clearance when requested",
        "Study permit processing often 4–12 weeks after biometrics — timelines vary by volume and file quality",
        "Outcome depends on genuine study intent and complete documentation — we do not quote approval percentages",
      ],
    },
    processSteps: ORBIX_STUDY_STEPS,
    keralaContext:
      "Students from Kerala commonly pursue nursing, IT, business, and hospitality programs in Ontario, Alberta, and British Columbia. Families often compare college diplomas (lower upfront cost) with university degrees (stronger long-term PR pathways). Orbix explains trade-offs before you commit — including whether your profile suits Express Entry later.",
    orbixRole: [
      "Match college vs university pathways to your budget and PR goals",
      "Shortlist DLIs with realistic entry based on your grades",
      "GIC and funds documentation guidance",
      "SOP review aligned to your actual academic history",
      "Study permit file preparation and interview prep if required",
    ],
    primaryCtaLabel: "Get a University Shortlist",
    secondaryCtaLabel: "Call Our Kochi Office",
  },

  uk: {
    slug: "uk",
    name: "UK",
    countryCode: "GB",
    previewLine: "~₹12–28L/yr tuition · IELTS 6.0–6.5 · Graduate Route 2 years",
    heroSubtitle:
      "Russell Group options, one-year master's pathways, visa funds requirements, and Graduate Route work rights — with realistic fee bands for Indian families.",
    overview:
      "The UK offers shorter degree timelines (especially one-year master's) and globally recognised qualifications. Costs vary sharply between London and regional cities, and between classroom-based vs research universities. Students need to plan for the Immigration Health Surcharge and maintenance funds shown upfront in visa applications.",
    quickFacts: [
      { label: "Tuition (typical)", value: "₹12–28L / year" },
      { label: "IELTS (common)", value: "6.0–6.5 overall" },
      { label: "Student visa", value: "3–8 weeks typical" },
      { label: "Post-study work", value: "Graduate Route 2 years" },
      { label: "Safety", value: "Generally high; check city housing" },
    ],
    universityCategories: [
      {
        category: "Engineering & Computing",
        feeRangeInr: "₹18–28L / year",
        universities: [
          { name: "University of Manchester" },
          { name: "University of Birmingham" },
          { name: "Coventry University", note: "Popular with Indian students" },
          { name: "University of Hertfordshire", note: "Strong computing intake" },
          { name: "Teesside University", note: "Value-focused engineering" },
        ],
      },
      {
        category: "Nursing & Health",
        feeRangeInr: "₹16–24L / year",
        universities: [
          { name: "University of West London", note: "Health programs" },
          { name: "University of Sunderland", note: "Nursing pathways" },
          { name: "Anglia Ruskin University", note: "Allied health" },
        ],
      },
      {
        category: "Business & MBA",
        feeRangeInr: "₹14–35L / year",
        universities: [
          { name: "University of Leeds" },
          { name: "University of Exeter" },
          { name: "University of Greenwich", note: "Popular business intake" },
          { name: "London Metropolitan University", note: "Central London option" },
        ],
      },
    ],
    livingCostsInr: [
      "London: ~₹1.2–1.6L / month living (higher rent)",
      "Regional cities (Manchester, Birmingham, Leeds): ~₹80k–1.1L / month",
      "Visa maintenance funds must be shown for 9 months (amount set by UKVI rules)",
    ],
    visaSection: {
      title: "Student visa (formerly Tier 4) essentials",
      bullets: [
        "CAS (Confirmation of Acceptance for Studies) from licensed sponsor university",
        "IELTS UKVI or approved English test at required level (varies by level and institution)",
        "Maintenance funds + tuition deposit evidence as per current UKVI rules",
        "TB test from approved clinic (required for India)",
        "Immigration Health Surcharge paid as part of application",
        "Processing often 3–8 weeks — allow time before course start date",
      ],
    },
    processSteps: ORBIX_STUDY_STEPS,
    keralaContext:
      "Kerala students often target one-year MSc programs in computing, business analytics, and nursing conversion courses. Parents appreciate the shorter time away from home but must budget for London vs regional cost differences. We help families avoid choosing a university only by ranking without checking total cost of attendance.",
    orbixRole: [
      "Compare 1-year vs 2-year programs for total cost and career fit",
      "CAS and funds documentation checklist",
      "University shortlist balancing ranking, city cost, and entry requirements",
      "SOP tailored to UK academic tone",
      "Visa application review before submission",
    ],
    primaryCtaLabel: "Get a University Shortlist",
    secondaryCtaLabel: "Call Our Kochi Office",
  },

  germany: {
    slug: "germany",
    name: "Germany",
    countryCode: "DE",
    previewLine: "Low public tuition · IELTS/TestDaF varies · 18-month job seeker visa",
    heroSubtitle:
      "Tuition-free public universities, blocked account requirements, German vs English-taught programs, and post-study residence options — explained for Indian students and parents.",
    overview:
      "Germany attracts STEM-focused students because many public universities charge low or no tuition (semester contributions still apply). English-taught programs exist but are competitive. Students must plan for a blocked account (Sperrkonto), health insurance, and often APS certificate verification for Indian academic documents.",
    quickFacts: [
      { label: "Tuition (public)", value: "Often ₹1–3L / yr fees*" },
      { label: "English programs", value: "IELTS 6.0–6.5 typical" },
      { label: "Visa / residence", value: "6–12 weeks typical" },
      { label: "After study", value: "18-month job seeker permit" },
      { label: "Safety", value: "High overall" },
    ],
    universityCategories: [
      {
        category: "Engineering & STEM",
        feeRangeInr: "Semester fees ~₹1–3L / year at public unis",
        universities: [
          { name: "TU Munich (TUM)", note: "Top technical university" },
          { name: "RWTH Aachen", note: "Engineering focus" },
          { name: "University of Stuttgart", note: "Automotive & mechanical" },
          { name: "TU Berlin", note: "English MSc options" },
          { name: "University of Applied Sciences — Munich", note: "Practical programs" },
        ],
      },
      {
        category: "Business & Management",
        feeRangeInr: "₹8–18L / year (private schools higher)",
        universities: [
          { name: "Mannheim Business School", note: "Competitive" },
          { name: "ESMT Berlin", note: "MBA focus" },
          { name: "University of Cologne", note: "Economics & management" },
        ],
      },
      {
        category: "Health & Life Sciences",
        feeRangeInr: "Varies; many programs in German",
        universities: [
          { name: "Heidelberg University", note: "Research strength" },
          { name: "Charité — Berlin", note: "Medical sciences (highly competitive)" },
          { name: "University of Göttingen", note: "Life sciences" },
        ],
      },
    ],
    livingCostsInr: [
      "Blocked account: required funds proof (amount set by German authorities — check current annual requirement)",
      "Munich / Frankfurt: higher rent than eastern cities",
      "Health insurance mandatory for all students",
      "*Semester contribution includes transit pass and admin fees at many public universities",
    ],
    visaSection: {
      title: "Student residence permit requirements",
      bullets: [
        "University admission letter (Zulassungsbescheid) or conditional offer",
        "APS certificate for Indian academic documents (verify current APS process)",
        "Blocked account (Sperrkonto) or equivalent financial proof",
        "Health insurance valid in Germany",
        "English: IELTS/TOEFL for English-taught programs; German programs need TestDaF/DSH",
        "Embassy appointment wait times can add weeks — apply early",
      ],
    },
    processSteps: ORBIX_STUDY_STEPS,
    keralaContext:
      "Engineering graduates from Kerala often explore Germany for MSc programs in mechanical, automotive, and computer science. Families should understand that low tuition does not mean low total cost — living expenses in cities like Munich are significant. We clarify German-taught vs English-taught pathways early.",
    orbixRole: [
      "Identify English-taught programs matching your academic background",
      "APS and document timeline planning",
      "Blocked account and insurance guidance",
      "Motivation letter structure for German admissions",
      "Visa appointment preparation",
    ],
    primaryCtaLabel: "Get a University Shortlist",
    secondaryCtaLabel: "Call Our Kochi Office",
  },

  australia: {
    slug: "australia",
    name: "Australia",
    countryCode: "AU",
    previewLine: "~₹15–25L/yr tuition · IELTS 6.0–6.5 · PSWR 2–4 years",
    heroSubtitle:
      "Group of Eight universities, vocational pathways, Genuine Student requirement, and post-study work rights — with fee and living cost bands in rupees.",
    overview:
      "Australia combines university and vocational (VET) pathways. The Genuine Student (GS) requirement means visa officers assess whether your course choice fits your background and career plan — not just your funds. Post-study work rights depend on qualification level and location (regional bonuses may apply).",
    quickFacts: [
      { label: "Tuition (typical)", value: "₹15–25L / year" },
      { label: "IELTS (common)", value: "6.0–6.5 overall" },
      { label: "Student visa", value: "4–8 weeks typical" },
      { label: "Post-study work", value: "2–4 years (PSWR)" },
      { label: "Safety", value: "High; student cities well serviced" },
    ],
    universityCategories: [
      {
        category: "Engineering & IT",
        feeRangeInr: "₹18–26L / year",
        universities: [
          { name: "University of Melbourne" },
          { name: "Monash University" },
          { name: "University of Technology Sydney (UTS)" },
          { name: "Deakin University", note: "Popular Indian intake" },
          { name: "Victoria University", note: "Pathway programs" },
        ],
      },
      {
        category: "Nursing & Health",
        feeRangeInr: "₹18–28L / year",
        universities: [
          { name: "University of Sydney", note: "Competitive health programs" },
          { name: "Griffith University", note: "Nursing strength" },
          { name: "Federation University", note: "Regional option" },
        ],
      },
      {
        category: "Business & Hospitality",
        feeRangeInr: "₹14–22L / year",
        universities: [
          { name: "University of Queensland" },
          { name: "RMIT University", note: "Melbourne" },
          { name: "Torrens University", note: "Hospitality focus" },
        ],
      },
    ],
    livingCostsInr: [
      "Sydney / Melbourne: ~₹1.1–1.5L / month",
      "Adelaide / Perth: often ~₹85k–1.2L / month",
      "OSHC (health cover) mandatory for student visa duration",
    ],
    visaSection: {
      title: "Student visa (Subclass 500) essentials",
      bullets: [
        "CoE (Confirmation of Enrolment) from registered provider",
        "Genuine Student (GS) statement — course must make sense for your profile",
        "IELTS/PTE at required level (institution-specific)",
        "Financial capacity evidence per Department of Home Affairs guidelines",
        "OSHC health insurance for full visa period",
        "Processing varies; incomplete GS statements are a common refusal reason",
      ],
    },
    processSteps: ORBIX_STUDY_STEPS,
    keralaContext:
      "Australian intakes are popular for nursing, IT, and hospitality among Kerala students. Regional campus options can affect post-study work length — we explain this when comparing Sydney vs regional universities. Parents should budget for OSHC and higher city rents separately from tuition.",
    orbixRole: [
      "GS statement drafting aligned to your real study plan",
      "University vs VET pathway comparison",
      "Funds and OSHC documentation",
      "Course change implications explained before you apply",
      "Visa lodgement review",
    ],
    primaryCtaLabel: "Get a University Shortlist",
    secondaryCtaLabel: "Call Our Kochi Office",
  },

  "new-zealand": {
    slug: "new-zealand",
    name: "New Zealand",
    countryCode: "NZ",
    previewLine: "~₹12–20L/yr tuition · IELTS 6.0–6.5 · PSW up to 3 years",
    heroSubtitle:
      "Eight universities nationwide, practical programs, funds proof, and post-study work — a quieter alternative to Australia with its own visa rules.",
    overview:
      "New Zealand offers a smaller university system with strong quality assurance. Indian students often choose it for agriculture, hospitality, IT, and business. Total cost is usually lower than Australia, but scholarship competition exists and students must show genuine study intent and funds for the full program.",
    quickFacts: [
      { label: "Tuition (typical)", value: "₹12–20L / year" },
      { label: "IELTS (common)", value: "6.0–6.5 overall" },
      { label: "Student visa", value: "4–8 weeks typical" },
      { label: "Post-study work", value: "Up to 3 years (level-dependent)" },
      { label: "Safety", value: "Very high" },
    ],
    universityCategories: [
      {
        category: "Engineering & IT",
        feeRangeInr: "₹14–20L / year",
        universities: [
          { name: "University of Auckland" },
          { name: "University of Canterbury", note: "Christchurch" },
          { name: "Auckland University of Technology (AUT)" },
        ],
      },
      {
        category: "Business & Tourism",
        feeRangeInr: "₹12–18L / year",
        universities: [
          { name: "Victoria University of Wellington" },
          { name: "Massey University" },
          { name: "Southern Institute of Technology", note: "Value pathways" },
        ],
      },
      {
        category: "Agriculture & Health",
        feeRangeInr: "₹14–22L / year",
        universities: [
          { name: "Lincoln University", note: "Agriculture focus" },
          { name: "Otago Polytechnic", note: "Practical health" },
          { name: "Waikato University" },
        ],
      },
    ],
    livingCostsInr: [
      "Auckland: ~₹90k–1.2L / month",
      "Christchurch / Dunedin: often lower rent",
      "Funds proof must cover full tuition + living for visa",
    ],
    visaSection: {
      title: "Fee Paying Student Visa essentials",
      bullets: [
        "Offer of place from approved education provider",
        "Evidence of funds for tuition + living expenses",
        "IELTS or approved English test at required level",
        "Medical and police certificates if requested",
        "Genuine intent to study — course aligned to background",
        "Partner/child visas have separate rules — ask us early if applicable",
      ],
    },
    processSteps: ORBIX_STUDY_STEPS,
    keralaContext:
      "New Zealand suits students seeking a smaller, quieter environment than Australia. Kerala families often consider it for hospitality and agriculture-related programs. We set realistic expectations on part-time work hours and post-study visa rules before application.",
    orbixRole: [
      "University shortlist across North and South Island",
      "Funds documentation planning",
      "Offer acceptance and visa timeline coordination",
      "SOP and study plan alignment",
      "Pre-departure checklist",
    ],
    primaryCtaLabel: "Get a University Shortlist",
    secondaryCtaLabel: "Call Our Kochi Office",
  },

  france: {
    slug: "france",
    name: "France",
    countryCode: "FR",
    previewLine: "Low public tuition · IELTS/TEF varies · Schengen access",
    heroSubtitle:
      "Affordable public university fees, grandes écoles, Campus France process, and English-taught master's — with living costs and visa steps explained.",
    overview:
      "France offers low tuition at public universities compared to UK/US, but living costs in Paris are high. Most students apply through Campus France (Etudes en France) for visa facilitation. Business schools (grandes écoles) charge higher fees but have strong corporate networks.",
    quickFacts: [
      { label: "Tuition (public)", value: "Often ₹3–8L / year" },
      { label: "English MSc", value: "IELTS 6.0–6.5" },
      { label: "Visa", value: "2–6 weeks after Campus France" },
      { label: "After study", value: "APS residence permit possible" },
      { label: "Safety", value: "High; urban awareness as in any city" },
    ],
    universityCategories: [
      {
        category: "Engineering & Science",
        feeRangeInr: "₹3–10L / year public; higher at grandes écoles",
        universities: [
          { name: "École Polytechnique", note: "Highly selective" },
          { name: "Sorbonne University" },
          { name: "Université Paris-Saclay" },
          { name: "INSA Lyon", note: "Engineering grande école" },
        ],
      },
      {
        category: "Business & Management",
        feeRangeInr: "₹15–35L / year at top schools",
        universities: [
          { name: "HEC Paris", note: "Elite; competitive" },
          { name: "ESSEC Business School" },
          { name: "NEOMA Business School", note: "Accessible intake" },
          { name: "KEDGE Business School" },
        ],
      },
      {
        category: "Hospitality & Culinary",
        feeRangeInr: "₹12–25L / year",
        universities: [
          { name: "Le Cordon Bleu Paris", note: "Specialist" },
          { name: "Institut Paul Bocuse", note: "Hospitality" },
        ],
      },
    ],
    livingCostsInr: [
      "Paris: ~₹1.0–1.4L / month",
      "Lyon / Toulouse / Lille: often ~₹65k–95k / month",
      "Campus France fee and visa insurance required",
    ],
    visaSection: {
      title: "Student visa via Campus France",
      bullets: [
        "Campus France account and academic file upload",
        "Admission from French institution",
        "Proof of funds (~€7,400+ living costs per year — verify current requirement)",
        "Health insurance valid in France",
        "English programs: IELTS; French programs: TEF/TCF/DELF",
        "Interview at Campus France may be required",
      ],
    },
    processSteps: ORBIX_STUDY_STEPS,
    keralaContext:
      "France appeals to budget-conscious families exploring EU study with Schengen travel access. Kerala students often target business schools or English MSc programs in management and engineering. We explain Paris vs provincial city living costs early to avoid financial stress after arrival.",
    orbixRole: [
      "Campus France process navigation",
      "Public university vs grande école comparison",
      "Motivation letter and CV for French admissions",
      "Funds and insurance checklist",
      "Visa appointment preparation",
    ],
    primaryCtaLabel: "Get a University Shortlist",
    secondaryCtaLabel: "Call Our Kochi Office",
  },

  poland: {
    slug: "poland",
    name: "Poland",
    countryCode: "PL",
    previewLine: "~₹4–10L/yr tuition · IELTS 6.0+ · EU degree · Schengen",
    heroSubtitle:
      "EU-recognised degrees at lower tuition, medicine and engineering pathways, and residence rules for graduates — a value option worth understanding properly.",
    overview:
      "Poland has become a value destination for medicine, dentistry, engineering, and business. Tuition is lower than Western Europe, but programs are rigorous — especially medical degrees in English. Degrees are EU-recognised; post-study residence rules apply for job search. Living costs are moderate compared to Western EU.",
    quickFacts: [
      { label: "Tuition (typical)", value: "₹4–10L / year" },
      { label: "Medicine (English)", value: "₹40–70L total program" },
      { label: "National visa", value: "4–8 weeks typical" },
      { label: "EU degree", value: "Schengen access while studying" },
      { label: "Safety", value: "Generally high" },
    ],
    universityCategories: [
      {
        category: "Medicine & Dentistry",
        feeRangeInr: "₹40–70L total (6-year programs)",
        universities: [
          { name: "Medical University of Warsaw", note: "English medicine" },
          { name: "Jagiellonian University — Collegium Medicum", note: "Kraków" },
          { name: "Poznan University of Medical Sciences" },
        ],
      },
      {
        category: "Engineering & IT",
        feeRangeInr: "₹4–8L / year",
        universities: [
          { name: "Warsaw University of Technology" },
          { name: "Wrocław University of Science and Technology" },
          { name: "Lodz University of Technology" },
        ],
      },
      {
        category: "Business",
        feeRangeInr: "₹3–7L / year",
        universities: [
          { name: "Kozminski University", note: "Warsaw; business focus" },
          { name: "University of Economics in Katowice" },
          { name: "Vistula University", note: "English programs" },
        ],
      },
    ],
    livingCostsInr: [
      "Warsaw / Kraków: ~₹50k–80k / month",
      "Smaller cities: often ~₹40k–60k / month",
      "Proof of funds required for national visa (verify current PLN amount)",
    ],
    visaSection: {
      title: "National visa (Type D) for study",
      bullets: [
        "Letter of acceptance from Polish university",
        "Proof of tuition payment or deposit as required",
        "Funds for living expenses in Poland",
        "Health insurance covering stay",
        "IELTS for English-taught programs (university-specific)",
        "Medical programs may have entrance exams — prepare early",
      ],
    },
    processSteps: ORBIX_STUDY_STEPS,
    keralaContext:
      "Poland is increasingly discussed among Kerala families comparing affordable EU options, especially for medicine. We stress entrance exam preparation and total program cost (not just year-one tuition). Students should understand licensing pathways if returning to practice in India.",
    orbixRole: [
      "Honest comparison: medicine in Poland vs other destinations",
      "University and entrance exam timeline",
      "Visa funds documentation",
      "Accommodation and city cost guidance",
      "Pre-departure compliance checklist",
    ],
    primaryCtaLabel: "Get a University Shortlist",
    secondaryCtaLabel: "Call Our Kochi Office",
  },
};

export function getStudyPreviewLine(slug: CountrySlug): string {
  return STUDY_COUNTRY_CONTENT[slug]?.previewLine ?? "";
}
