import type { CountrySlug } from "@/lib/countries";

export type StudyHeroFact = { label: string; value: string };

export type StudyPopularCourse = {
  category: string;
  outcomeNote: string;
};

export type StudyVisaTimelineStep = {
  step: number;
  title: string;
  detail: string;
};

export type StudyPageContent = {
  heroTitle: string;
  /** DATA: Confirm tuition, processing times, and IELTS with client */
  heroFacts: StudyHeroFact[];
  whyReasons: string[];
  popularCourses: StudyPopularCourse[];
  visaTimeline: StudyVisaTimelineStep[];
  orbixHelps: string[];
  finalCtaLabel: string;
};

const ORBIX_HELPS_DEFAULT = [
  "University shortlisting matched to your grades, budget, and career goals",
  "SOP and personal statement guidance aligned to each institution",
  "Application submission and document consistency checks",
  "Student visa filing, funds proof, and interview prep where required",
  "Pre-departure briefing — travel, accommodation, and first-semester expectations",
] as const;

export const STUDY_PAGE_CONTENT: Record<CountrySlug, StudyPageContent> = {
  canada: {
    heroTitle: "Study in Canada — Universities, Visa & Guidance from Kochi",
    heroFacts: [
      { label: "Avg. tuition", value: "₹10–18L / year" },
      { label: "Visa processing", value: "4–12 weeks typical" },
      { label: "Post-study work", value: "PGWP up to 3 years" },
      { label: "IELTS", value: "6.0–6.5 overall (common)" },
    ],
    whyReasons: [
      "Post-Graduation Work Permit (PGWP) gives Kerala graduates a clear bridge from study to skilled work — many families plan Canada study with PR in mind, not only a degree.",
      "Mix of affordable colleges and research universities lets students from Ernakulam and tier-2 Kerala towns choose diplomas or master's paths that match budget and marks.",
      "Transparent study permit rules and designated learning institutions (DLIs) make it easier to compare programs honestly before paying application fees.",
    ],
    popularCourses: [
      { category: "Engineering & IT", outcomeNote: "Strong co-op options; tech roles in Toronto and Vancouver corridors" },
      { category: "Nursing & Health", outcomeNote: "Regulated pathways; licensing steps after graduation" },
      { category: "Business & Analytics", outcomeNote: "PG diplomas and MBAs; employer-driven outcomes vary by city" },
      { category: "Hospitality & Culinary", outcomeNote: "College diplomas with work components; popular for career switchers" },
      { category: "Supply Chain & Logistics", outcomeNote: "Practical diplomas with regional job demand" },
      { category: "Environmental Science", outcomeNote: "Research and applied programs at universities and colleges" },
    ],
    visaTimeline: [
      { step: 1, title: "Offer & acceptance", detail: "Secure admission from a DLI and pay required deposits to receive your letter of acceptance." },
      { step: 2, title: "Study permit application", detail: "Prepare funds proof, SOP, and biometrics; lodge online with complete, consistent documents." },
      { step: 3, title: "Decision & biometrics", detail: "IRCC reviews your file; respond promptly to any additional document requests." },
      { step: 4, title: "Travel & arrival", detail: "Receive permit, plan travel, and complete border formalities; maintain status throughout your program." },
    ],
    orbixHelps: [...ORBIX_HELPS_DEFAULT],
    finalCtaLabel: "Start your Canada application — free first consultation",
  },
  uk: {
    heroTitle: "Study in the UK — Universities, Visa & Guidance from Kochi",
    heroFacts: [
      { label: "Avg. tuition", value: "₹12–25L / year" },
      { label: "Visa processing", value: "3–8 weeks typical" },
      { label: "Post-study work", value: "Graduate Route up to 2 years" },
      { label: "IELTS", value: "6.0–6.5 overall (common)" },
    ],
    whyReasons: [
      "One-year master's programs appeal to Kerala students who want a UK qualification without a long time away from family — total cost must still include living expenses in London vs regional cities.",
      "Graduate Route allows post-study work without a sponsor for eligible courses — useful for students comparing UK vs Canada timelines.",
      "Large Indian student community and direct flights from Kerala make the UK a familiar choice for nursing, law, and business applicants.",
    ],
    popularCourses: [
      { category: "Nursing & Allied Health", outcomeNote: "Nursing → Pathway to PR via Health & Care Worker route (eligibility rules apply)" },
      { category: "Business & Finance", outcomeNote: "London and regional MBAs; graduate visa for work search" },
      { category: "Law (LLB / LLM)", outcomeNote: "SQE and training routes after degree — long qualification path" },
      { category: "Computer Science & AI", outcomeNote: "Russell Group and modern universities; tech hiring in UK cities" },
      { category: "Public Health", outcomeNote: "One-year MSc popular with Kerala health graduates" },
      { category: "Creative Arts & Design", outcomeNote: "Portfolio-led entry; course and city affect outcomes" },
      { category: "Engineering", outcomeNote: "MEng and MSc routes; accreditation matters for some roles" },
    ],
    visaTimeline: [
      { step: 1, title: "CAS & offer", detail: "Accept an offer and receive a Confirmation of Acceptance for Studies (CAS) from your university." },
      { step: 2, title: "Student Route application", detail: "Pay IHS, submit finances and documents online; attend biometrics if required." },
      { step: 3, title: "Visa decision", detail: "UKVI processes your application; allow time for document queries." },
      { step: 4, title: "Arrival & enrolment", detail: "Travel before course start, complete university registration, and maintain attendance." },
    ],
    orbixHelps: [...ORBIX_HELPS_DEFAULT],
    finalCtaLabel: "Start your UK application — free first consultation",
  },
  australia: {
    heroTitle: "Study in Australia — Universities, Visa & Guidance from Kochi",
    heroFacts: [
      { label: "Avg. tuition", value: "₹15–28L / year" },
      { label: "Visa processing", value: "4–8 weeks typical" },
      { label: "Post-study work", value: "Subclass 485 up to 4 years" },
      { label: "IELTS", value: "6.0–6.5 overall (common)" },
    ],
    whyReasons: [
      "Temporary Graduate visa (Subclass 485) gives post-study work rights linked to qualification level — Kerala students in IT and accounting often target Melbourne, Sydney, or regional campuses for points and cost balance.",
      "Strong vocational (TAFE) and university mix suits applicants with varied academic backgrounds from Kerala state board and CBSE streams.",
      "Genuine Temporary Entrant (GTE) requirement means files must tell a coherent story — Orbix helps align SOP, funds, and course choice before lodgement.",
    ],
    popularCourses: [
      { category: "IT & Cybersecurity", outcomeNote: "485 work rights; skilled migration points if occupation in demand" },
      { category: "Accounting & Finance", outcomeNote: "Professional year pathways for some graduates" },
      { category: "Nursing", outcomeNote: "AHPRA registration steps after study; regional demand" },
      { category: "Engineering", outcomeNote: "Washington Accord programs at universities" },
      { category: "Hospitality & Cookery", outcomeNote: "Vocational pathways; work in tourism sector" },
      { category: "Public Health & Social Work", outcomeNote: "Master's routes with regional sponsorship options" },
    ],
    visaTimeline: [
      { step: 1, title: "CoE & OSHC", detail: "Accept offer, obtain Confirmation of Enrolment, and arrange Overseas Student Health Cover." },
      { step: 2, title: "Subclass 500 application", detail: "Lodge student visa with GTE statement, finances, and health requirements." },
      { step: 3, title: "Decision", detail: "Department of Home Affairs assesses your application; respond to any requests." },
      { step: 4, title: "Arrival", detail: "Enter Australia before course start and comply with work and study conditions." },
    ],
    orbixHelps: [...ORBIX_HELPS_DEFAULT],
    finalCtaLabel: "Start your Australia application — free first consultation",
  },
  germany: {
    heroTitle: "Study in Germany — Universities, Visa & Guidance from Kochi",
    heroFacts: [
      { label: "Avg. tuition", value: "Low/no tuition at public unis" },
      { label: "Visa processing", value: "6–12 weeks typical" },
      { label: "Post-study work", value: "18-month job seeker permit" },
      { label: "IELTS", value: "6.0+ or TestDaF (program-dependent)" },
    ],
    whyReasons: [
      "Tuition-free or low-fee public universities reduce upfront cost for middle-income Kerala families — living costs in cities like Munich or Berlin still require careful budgeting in rupees.",
      "Strong engineering and manufacturing reputation suits students from Kerala's technical diploma and B.Tech backgrounds targeting EU careers.",
      "English-taught master's programs have expanded, but German language still helps for part-time work and long-term integration — we flag this honestly.",
    ],
    popularCourses: [
      { category: "Mechanical & Automotive Engineering", outcomeNote: "Industry links in Baden-Württemberg and Bavaria" },
      { category: "Computer Science & Data", outcomeNote: "English-taught MSc; Berlin and Munich tech hubs" },
      { category: "Business & Management", outcomeNote: "Private and public universities; fees vary" },
      { category: "Renewable Energy", outcomeNote: "Germany's energy sector research strengths" },
      { category: "Medicine (preparatory)", outcomeNote: "Studienkolleg and language prep often required" },
      { category: "Natural Sciences", outcomeNote: "Research-focused public universities" },
    ],
    visaTimeline: [
      { step: 1, title: "Admission & blocked account", detail: "Secure admission and open blocked account (Sperrkonto) or show equivalent funds proof." },
      { step: 2, title: "National visa application", detail: "Book visa appointment, submit documents at VFS/embassy with health insurance." },
      { step: 3, title: "Interview & decision", detail: "Attend interview if required; wait for visa sticker in passport." },
      { step: 4, title: "Registration in Germany", detail: "Arrive, register address (Anmeldung), and enrol at university." },
    ],
    orbixHelps: [...ORBIX_HELPS_DEFAULT],
    finalCtaLabel: "Start your Germany application — free first consultation",
  },
  "new-zealand": {
    heroTitle: "Study in New Zealand — Universities, Visa & Guidance from Kochi",
    heroFacts: [
      { label: "Avg. tuition", value: "₹12–22L / year" },
      { label: "Visa processing", value: "4–8 weeks typical" },
      { label: "Post-study work", value: "Up to 3 years (level-dependent)" },
      { label: "IELTS", value: "6.0–6.5 overall (common)" },
    ],
    whyReasons: [
      "Smaller, manageable cities and perceived safety appeal to parents in Kerala comparing NZ with Australia or Canada for a first overseas study experience.",
      "Post-study work rights depend on qualification level — we explain which diplomas and degrees qualify before you commit fees.",
      "Points-based skilled migration remains a long-term option for some graduates; honest counselling avoids overselling PR from study alone.",
    ],
    popularCourses: [
      { category: "IT & Software", outcomeNote: "Demand in Auckland and Wellington" },
      { category: "Agriculture & Food Science", outcomeNote: "NZ industry strengths; regional campuses" },
      { category: "Tourism & Hospitality", outcomeNote: "Practical diplomas; sector recovery affects jobs" },
      { category: "Construction & Project Management", outcomeNote: "Building sector demand in main cities" },
      { category: "Health Sciences", outcomeNote: "Registration pathways for some professions" },
      { category: "Environmental Management", outcomeNote: "Policy and science programs" },
    ],
    visaTimeline: [
      { step: 1, title: "Offer of place", detail: "Accept admission and receive offer documentation from a NZ education provider." },
      { step: 2, title: "Funds & visa lodge", detail: "Show funds, medicals, and genuine student evidence; apply for student visa." },
      { step: 3, title: "Decision", detail: "Immigration New Zealand processes your application." },
      { step: 4, title: "Arrival", detail: "Travel for course start and comply with visa conditions." },
    ],
    orbixHelps: [...ORBIX_HELPS_DEFAULT],
    finalCtaLabel: "Start your New Zealand application — free first consultation",
  },
  france: {
    heroTitle: "Study in France — Universities, Visa & Guidance from Kochi",
    heroFacts: [
      { label: "Avg. tuition", value: "₹2–15L / year (public)" },
      { label: "Visa processing", value: "2–6 weeks typical" },
      { label: "Post-study work", value: "APS permit ~12 months" },
      { label: "IELTS", value: "6.0+ or French B2 (varies)" },
    ],
    whyReasons: [
      "Low public university fees attract cost-conscious Kerala families — living costs in Paris are high, so regional cities (Lyon, Toulouse) need to be part of the conversation.",
      "Grandes écoles and business schools offer elite pathways for high achievers; separate from standard public university routes.",
      "Campus France process is centralised — missing a step in the Études en France workflow can delay an entire intake.",
    ],
    popularCourses: [
      { category: "Business & Luxury Management", outcomeNote: "Paris schools; international graduate roles" },
      { category: "Engineering (Grandes Écoles)", outcomeNote: "Competitive entry; strong French language component" },
      { category: "Hospitality & Culinary Arts", outcomeNote: "Industry-linked programs in tourism regions" },
      { category: "Fashion & Design", outcomeNote: "Paris ecosystem; portfolio requirements" },
      { category: "Computer Science", outcomeNote: "English-taught MSc at universities and schools" },
      { category: "Social Sciences", outcomeNote: "Public universities with low tuition" },
    ],
    visaTimeline: [
      { step: 1, title: "Campus France & admission", detail: "Complete Campus France procedure and secure university admission." },
      { step: 2, title: "Visa application", detail: "Book VFS appointment; submit finances, accommodation, and insurance proof." },
      { step: 3, title: "Decision", detail: "Consulate processes student visa; allow processing time before intake." },
      { step: 4, title: "Arrival & OFII", detail: "Enter France, validate long-stay visa, and complete local registrations." },
    ],
    orbixHelps: [...ORBIX_HELPS_DEFAULT],
    finalCtaLabel: "Start your France application — free first consultation",
  },
  poland: {
    heroTitle: "Study in Poland — Universities, Visa & Guidance from Kochi",
    heroFacts: [
      { label: "Avg. tuition", value: "₹3–8L / year" },
      { label: "Visa processing", value: "2–6 weeks typical" },
      { label: "Post-study work", value: "9-month job search permit" },
      { label: "IELTS", value: "6.0+ (English-taught programs)" },
    ],
    whyReasons: [
      "Among the lowest tuition in the EU for English-taught medicine, dentistry, and engineering — popular with Kerala students comparing Poland with Georgia or Philippines for medical degrees.",
      "EU-degree recognition and Schengen travel are advantages; post-study work rules are narrower than Canada or UK — we set expectations early.",
      "Growing number of English programs reduces Polish language barrier for the first year, though local language helps daily life.",
    ],
    popularCourses: [
      { category: "Medicine (English-taught)", outcomeNote: "Long programs; licensing in India requires follow-up exams" },
      { category: "Dentistry", outcomeNote: "Competitive entry; clinical hours in EU setting" },
      { category: "Computer Science & IT", outcomeNote: "Warsaw and Kraków tech growth" },
      { category: "Business & Economics", outcomeNote: "Affordable EU business degrees" },
      { category: "Architecture", outcomeNote: "Design-focused programs in major cities" },
      { category: "Aviation & Aerospace", outcomeNote: "Specialist institutes; niche employment paths" },
    ],
    visaTimeline: [
      { step: 1, title: "University admission", detail: "Apply and receive admission letter for national visa application." },
      { step: 2, title: "National visa (D-type)", detail: "Submit finances, accommodation, and insurance at embassy/VFS." },
      { step: 3, title: "Decision & travel", detail: "Collect visa and travel before course start date." },
      { step: 4, title: "Residence card", detail: "Apply for temporary residence permit after arrival in Poland." },
    ],
    orbixHelps: [...ORBIX_HELPS_DEFAULT],
    finalCtaLabel: "Start your Poland application — free first consultation",
  },
};
