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

import type { FaqItem } from "@/lib/faq-types";

export type StudyPageContent = {
  /** DATA: Confirm tuition, processing times, and IELTS with client */
  heroFacts: StudyHeroFact[];
  whyReasons: string[];
  popularCourses: StudyPopularCourse[];
  visaTimeline: StudyVisaTimelineStep[];
  orbixHelps: string[];
  faq: FaqItem[];
};

export const STUDY_COUNTRY_H1: Record<CountrySlug, string> = {
  canada: "Study in Canada from Kerala — University Admissions & Student Visa",
  uk: "Study in the UK from Kerala — Student Route Visa & University Guide",
  australia: "Study in Australia from Kerala — Admissions, Visa & PSWR Guide",
  germany: "Study in Germany from Kerala — Free Tuition & Job Seeker Visa Guide",
  "new-zealand": "Study in New Zealand from Kerala — Admissions, Visa & Post-Study Work Guide",
  france: "Study in France from Kerala — Campus France Visa & University Guide",
  poland: "Study in Poland from Kerala — EU Degree & Student Visa Guide",
};

export function getStudyCountryHeroTitle(slug: CountrySlug): string {
  return STUDY_COUNTRY_H1[slug];
}

export function studyCountryFinalCta(countryName: string): string {
  return `Start your ${countryName} study abroad journey — free first consultation`;
}

const ORBIX_HELPS_DEFAULT = [
  "University shortlisting matched to your grades, budget, and career goals",
  "SOP and personal statement guidance aligned to each institution",
  "Application submission and document consistency checks",
  "Student visa filing, funds proof, and interview prep where required",
  "Pre-departure briefing — travel, accommodation, and first-semester expectations",
] as const;

export const STUDY_PAGE_CONTENT: Record<CountrySlug, StudyPageContent> = {
  canada: {
    heroFacts: [
      { label: "Tuition (typical)", value: "₹10–18L / year" },
      { label: "IELTS (common)", value: "6.0 overall minimum" },
      { label: "Post-study work", value: "PGWP up to 3 years" },
      { label: "Visa processing", value: "4–12 weeks typical" },
    ],
    whyReasons: [
      "Post-Graduation Work Permit (PGWP) gives Kerala graduates a clear bridge from study to skilled work — many families plan Canada study with PR in mind, not only a degree.",
      "Mix of affordable colleges and research universities lets students from Ernakulam and tier-2 Kerala towns choose diplomas or master's paths that match budget and marks.",
      "Transparent study permit rules and designated learning institutions (DLIs) make it easier to compare programs honestly before paying application fees.",
      "Large Indian and Malayali communities in Toronto, Vancouver, and Calgary help first-time travellers from Kerala adjust — while still requiring realistic budgeting for winter living costs.",
    ],
    popularCourses: [
      { category: "Nursing", outcomeNote: "Regulated pathways; licensing steps after graduation — popular with Kerala health graduates" },
      { category: "Engineering & IT", outcomeNote: "Strong co-op options; tech roles in Toronto and Vancouver corridors" },
      { category: "Business & Healthcare Management", outcomeNote: "PG diplomas and MBAs; employer-driven outcomes vary by city" },
      { category: "Hospitality & Culinary", outcomeNote: "College diplomas with work components; popular for career switchers" },
    ],
    visaTimeline: [
      { step: 1, title: "University shortlist & applications", detail: "Orbix shortlists DLIs matching your grades and budget; we guide SOP, LOR, and form submissions until you hold an offer." },
      { step: 2, title: "Offer acceptance & GIC", detail: "Accept your letter of acceptance, pay required deposits, and arrange funds proof including GIC where applicable." },
      { step: 3, title: "Study permit lodgement", detail: "Prepare biometrics, medicals, and a consistent SOP; lodge your study permit online with complete documentation." },
      { step: 4, title: "Decision, travel & arrival", detail: "Receive your permit, plan travel, and complete border formalities; maintain status throughout your program." },
    ],
    orbixHelps: [...ORBIX_HELPS_DEFAULT],
    faq: [
      {
        question: "What IELTS score do I need to study in Canada?",
        answer:
          "Most programs require IELTS Academic 6.0 overall with no band below 5.5–6.0. Competitive universities may ask for 6.5+. Some colleges accept PTE or Duolingo — we confirm per institution before you book a test in Kochi. Higher scores can strengthen your study permit file and scholarship chances.",
      },
      {
        question: "Can I work while studying in Canada?",
        answer:
          "Most full-time international students can work up to 24 hours per week off campus during academic sessions and full time during scheduled breaks. Work rights are printed on your study permit — follow them strictly. On-campus work may also be allowed. Orbix explains conditions during your consultation in Vyttila.",
      },
      {
        question: "What is the PGWP and how does it lead to Canada PR?",
        answer:
          "The Post-Graduation Work Permit lets eligible graduates work in Canada after study — up to three years for longer programs at eligible DLIs. Skilled work on a PGWP can count toward Express Entry CRS points, creating a common pathway from study to permanent residence. PGWP is not automatic PR; you must still meet CRS cut-offs or pursue PNP.",
      },
      {
        question: "How much does it cost to study in Canada from Kerala in INR?",
        answer:
          "Tuition typically runs ₹10–18 lakh per year depending on college vs university and city. Living costs add roughly ₹70k–1.4 lakh per month — Toronto and Vancouver are higher than smaller cities. Many students use a GIC for funds proof. Orbix compares total cost of attendance in rupees before you accept an offer.",
      },
      {
        question: "What is the processing time for a Canada student visa?",
        answer:
          "Study permit processing often takes 4–12 weeks after biometrics for Indian applicants, though peak intakes can run longer. Incomplete funds proof or SOPs cause delays. Apply as early as possible once you hold a letter of acceptance. Orbix tracks IRCC processing ranges and helps you lodge a complete file from Kerala.",
      },
      {
        question: "Can I study in Canada after 12th from Kerala?",
        answer:
          "Yes — many colleges accept Kerala state board and CBSE graduates for diplomas and undergraduate programs. Entry depends on marks, English scores, and the institution. Orbix compares college vs university pathways before you apply.",
      },
      {
        question: "Does Orbix help with GIC and study permit filing from Kochi?",
        answer:
          "Yes — we support university shortlisting, SOP review, GIC guidance, funds documentation, and study permit lodgement. Our counsellors are based in Vyttila, Ernakulam, serving families across Kerala.",
      },
    ],
  },

  uk: {
    heroFacts: [
      { label: "Tuition (typical)", value: "₹12–28L / year" },
      { label: "IELTS (common)", value: "6.0–6.5 overall" },
      { label: "Post-study work", value: "Graduate Route 2 years" },
      { label: "Visa processing", value: "3–8 weeks typical" },
    ],
    whyReasons: [
      "One-year master's programs appeal to Kerala students who want a UK qualification without a long time away from family — total cost must still include living expenses in London vs regional cities.",
      "Graduate Route allows post-study work without a sponsor for eligible courses — useful for students comparing UK vs Canada timelines.",
      "Large Indian student community and direct flight options make the UK a familiar choice for nursing, law, and business applicants from Kerala.",
      "Russell Group and modern universities offer varied entry requirements — strong students from Kerala can target ranked institutions while others find quality options in regional cities at lower rent.",
    ],
    popularCourses: [
      { category: "Nursing & Allied Health", outcomeNote: "Conversion courses and MSc routes; registration pathways after graduation" },
      { category: "Engineering", outcomeNote: "MEng and MSc routes; accreditation matters for some professional roles" },
      { category: "Business & Healthcare Management", outcomeNote: "One-year MSc popular with Kerala graduates; London vs regional cost varies sharply" },
      { category: "Computer Science & AI", outcomeNote: "Russell Group and modern universities; tech hiring in UK cities" },
    ],
    visaTimeline: [
      { step: 1, title: "Shortlist & apply", detail: "Orbix curates universities matching your grades and budget; we guide SOP and applications until you receive an offer." },
      { step: 2, title: "CAS & funds", detail: "Accept your offer, pay deposits, and receive a Confirmation of Acceptance for Studies (CAS); arrange maintenance funds per UKVI rules." },
      { step: 3, title: "Student Route visa", detail: "Pay Immigration Health Surcharge, complete TB test, and lodge your visa with consistent finances and documents." },
      { step: 4, title: "Arrival & enrolment", detail: "Travel before course start, complete university registration, and maintain attendance throughout your program." },
    ],
    orbixHelps: [...ORBIX_HELPS_DEFAULT],
    faq: [
      {
        question: "Is the UK good for Kerala students who want a one-year master's?",
        answer:
          "Yes — one-year MSc programs are a major draw. Families should budget for tuition plus 9–12 months of living costs, with London significantly more expensive than Manchester, Birmingham, or Leeds.",
      },
      {
        question: "What IELTS score do UK universities require?",
        answer:
          "Most ask for IELTS 6.0–6.5 overall. Some require UKVI IELTS for visa purposes. Nursing and law programs may need higher scores — we confirm before you book a test.",
      },
      {
        question: "What is the Graduate Route and can I work after my degree?",
        answer:
          "The Graduate Route gives eligible students up to two years of work permission after completing a degree (three years for PhD graduates). It does not require an employer sponsor initially.",
      },
      {
        question: "How much are UK tuition fees in rupees?",
        answer:
          "Undergraduate and postgraduate fees typically fall between ₹12–28 lakh per year depending on university and city. Orbix compares total cost of attendance, not just headline tuition.",
      },
      {
        question: "Do I need a TB test for a UK student visa from India?",
        answer:
          "Yes — applicants from India must obtain a TB clearance certificate from an approved clinic before applying. We include this in your visa timeline checklist.",
      },
      {
        question: "Can Orbix help with CAS and maintenance funds documentation?",
        answer:
          "Yes — we guide CAS steps, maintenance fund calculations, SOP tone for UK admissions, and visa application review before submission from our Kochi office.",
      },
      {
        question: "Which courses are most popular among Kerala students in the UK?",
        answer:
          "Nursing, business analytics, computer science, public health, and law are common choices. We match programs to your academic background and career plan — not just rankings.",
      },
    ],
  },

  australia: {
    heroFacts: [
      { label: "Tuition (typical)", value: "₹15–25L / year" },
      { label: "IELTS (common)", value: "6.0–6.5 overall" },
      { label: "Post-study work", value: "2–4 years (PSWR)" },
      { label: "Visa processing", value: "4–8 weeks typical" },
    ],
    whyReasons: [
      "Temporary Graduate visa (Subclass 485) gives post-study work rights linked to qualification level — Kerala students in IT and nursing often target Melbourne, Sydney, or regional campuses for cost and points balance.",
      "Strong vocational (VET) and university mix suits applicants with varied academic backgrounds from Kerala state board and CBSE streams.",
      "Genuine Student (GS) requirement means files must tell a coherent story — Orbix helps align SOP, funds, and course choice before lodgement.",
      "Regional study options can extend post-study work rights — we explain Sydney/Melbourne costs vs Adelaide or Perth when families compare total spend in rupees.",
    ],
    popularCourses: [
      { category: "Nursing", outcomeNote: "AHPRA registration steps after study; strong demand in regional areas" },
      { category: "Engineering & IT", outcomeNote: "Group of Eight and practical universities; 485 visa for post-study work" },
      { category: "Business & Healthcare Management", outcomeNote: "Professional year pathways for some accounting graduates" },
      { category: "Hospitality & Cookery", outcomeNote: "VET pathways; work in tourism and food service sectors" },
    ],
    visaTimeline: [
      { step: 1, title: "Course selection & applications", detail: "Orbix shortlists providers matching your profile; we guide applications and English requirements until you receive an offer." },
      { step: 2, title: "CoE & OSHC", detail: "Accept your offer, obtain Confirmation of Enrolment, and arrange Overseas Student Health Cover for the full visa period." },
      { step: 3, title: "Subclass 500 lodgement", detail: "Prepare Genuine Student statement, finances, and health checks; lodge your student visa with consistent documentation." },
      { step: 4, title: "Decision & arrival", detail: "Enter Australia before course start and comply with work, attendance, and OSHC conditions throughout your stay." },
    ],
    orbixHelps: [...ORBIX_HELPS_DEFAULT],
    faq: [
      {
        question: "What is the Genuine Student (GS) requirement for Australia?",
        answer:
          "Visa officers assess whether your course fits your background and career goals — not just your bank balance. A weak or generic SOP is a common refusal reason. Orbix drafts GS statements aligned to your real profile.",
      },
      {
        question: "How long can I work in Australia after graduation?",
        answer:
          "Post-study work rights depend on qualification level and location — typically two to four years on the Temporary Graduate visa (Subclass 485). Regional study may add extra time for eligible qualifications.",
      },
      {
        question: "What IELTS score do I need for Australia?",
        answer:
          "Most universities require IELTS 6.0–6.5 overall. Some accept PTE Academic. Nursing and education programs may need higher scores — we verify per course before you apply.",
      },
      {
        question: "How much does it cost to study in Australia from Kerala?",
        answer:
          "Tuition often runs ₹15–25 lakh per year plus ₹85k–1.5 lakh per month living costs depending on city. OSHC health insurance is mandatory and adds to total spend.",
      },
      {
        question: "Can I bring my spouse on a student visa to Australia?",
        answer:
          "Dependants may be included depending on your course level and provider. Rules and funds requirements differ — tell us early if family will accompany you so we plan the file correctly.",
      },
      {
        question: "Are regional universities worth it for Kerala students?",
        answer:
          "Regional campuses often have lower rent and may offer extended post-study work for eligible qualifications. Trade-offs include fewer job types locally — we compare options honestly.",
      },
      {
        question: "Does Orbix help with Subclass 500 visa filing from Kochi?",
        answer:
          "Yes — university shortlisting, GS statement support, OSHC setup, funds documentation, and visa lodgement review are all part of our study abroad service in Vyttila.",
      },
    ],
  },

  germany: {
    heroFacts: [
      { label: "Tuition (public)", value: "Often ₹1–3L / yr fees*" },
      { label: "IELTS (English programs)", value: "6.0+ typical" },
      { label: "Post-study work", value: "18-month job seeker permit" },
      { label: "Visa processing", value: "6–12 weeks typical" },
    ],
    whyReasons: [
      "Tuition-free or low-fee public universities reduce upfront cost for middle-income Kerala families — living costs in Munich or Berlin still require careful budgeting in rupees.",
      "Strong engineering and manufacturing reputation suits students from Kerala's technical diploma and B.Tech backgrounds targeting EU careers.",
      "English-taught master's programs have expanded, but German language still helps for part-time work and long-term integration — we flag this honestly.",
      "APS certificate verification for Indian documents is mandatory — Orbix plans this step early so Kerala students do not miss winter or summer intakes.",
    ],
    popularCourses: [
      { category: "Engineering (Mechanical & Automotive)", outcomeNote: "Industry links in Baden-Württemberg and Bavaria" },
      { category: "Computer Science & Data", outcomeNote: "English-taught MSc at TU Munich, RWTH Aachen, and others" },
      { category: "Business & Healthcare Management", outcomeNote: "Private schools charge more; public universities offer value routes" },
      { category: "Renewable Energy & Natural Sciences", outcomeNote: "Research-focused programs aligned to Germany's energy sector" },
    ],
    visaTimeline: [
      { step: 1, title: "Admission & APS", detail: "Secure admission and complete APS certificate verification for Indian academic documents; Orbix guides program selection and motivation letters." },
      { step: 2, title: "Blocked account & insurance", detail: "Open blocked account (Sperrkonto) or show equivalent funds; arrange health insurance valid in Germany." },
      { step: 3, title: "National visa appointment", detail: "Book embassy/VFS appointment and submit complete documentation including admission letter and financial proof." },
      { step: 4, title: "Arrival & registration", detail: "Travel to Germany, complete address registration (Anmeldung), and enrol at your university." },
    ],
    orbixHelps: [...ORBIX_HELPS_DEFAULT],
    faq: [
      {
        question: "Is university in Germany really tuition-free for Indian students?",
        answer:
          "Most public universities charge low or no tuition — but semester contributions (₹1–3 lakh per year) and living costs still apply. Private universities and some business schools charge full fees.",
      },
      {
        question: "What is a blocked account (Sperrkonto)?",
        answer:
          "It is proof you can cover living expenses in Germany. The required amount is set by authorities and changes periodically — we give you the current figure and banking steps.",
      },
      {
        question: "Do I need APS certificate to study in Germany from Kerala?",
        answer:
          "Yes — Indian students typically need APS verification of academic documents before visa application. Processing takes weeks; start early to protect your intake.",
      },
      {
        question: "Can I study in Germany without knowing German?",
        answer:
          "Many English-taught master's programs accept IELTS 6.0–6.5. Daily life, part-time jobs, and long-term roles still benefit from German language — we set realistic expectations.",
      },
      {
        question: "What happens after I graduate in Germany?",
        answer:
          "Graduates can apply for an 18-month job seeker residence permit to find skilled work. Transition to work permit depends on employer and occupation — not automatic PR.",
      },
      {
        question: "Which programs suit Kerala engineering graduates?",
        answer:
          "Mechanical, automotive, computer science, and renewable energy MSc programs are popular. We match TU9 and applied-science universities to your GPA and language scores.",
      },
      {
        question: "Does Orbix help with German university applications from Kochi?",
        answer:
          "Yes — English-program shortlisting, APS timeline planning, blocked account guidance, motivation letter structure, and visa appointment preparation.",
      },
    ],
  },

  "new-zealand": {
    heroFacts: [
      { label: "Tuition (typical)", value: "₹12–20L / year" },
      { label: "IELTS (common)", value: "6.0–6.5 overall" },
      { label: "Post-study work", value: "Up to 3 years" },
      { label: "Visa processing", value: "4–8 weeks typical" },
    ],
    whyReasons: [
      "Smaller, manageable cities and high safety ratings appeal to Kerala parents comparing New Zealand with Australia or Canada for a first overseas study experience.",
      "Post-study work rights depend on qualification level — we explain which diplomas and degrees qualify before you commit fees.",
      "Total tuition and living costs are often lower than Australia while still offering quality-assured universities — good for budget-conscious Kerala families.",
      "Eight universities nationwide means fewer choices but clearer comparison — Orbix helps students avoid applying blindly to the wrong level of qualification.",
    ],
    popularCourses: [
      { category: "IT & Software", outcomeNote: "Demand in Auckland and Wellington tech sectors" },
      { category: "Business & Healthcare Management", outcomeNote: "Practical diplomas and master's at AUT and Massey" },
      { category: "Nursing & Health Sciences", outcomeNote: "Registration pathways for some professions after graduation" },
      { category: "Agriculture & Tourism", outcomeNote: "NZ industry strengths; regional campuses often lower cost" },
    ],
    visaTimeline: [
      { step: 1, title: "Program shortlist & apply", detail: "Orbix identifies providers and levels matching your goals; we guide applications and offer acceptance." },
      { step: 2, title: "Funds & health checks", detail: "Prepare evidence of funds for tuition and living costs; complete medicals and police certificates if required." },
      { step: 3, title: "Fee Paying Student Visa", detail: "Lodge visa with genuine study intent, consistent finances, and complete supporting documents." },
      { step: 4, title: "Arrival & compliance", detail: "Travel for course start and maintain visa conditions including attendance and insurance." },
    ],
    orbixHelps: [...ORBIX_HELPS_DEFAULT],
    faq: [
      {
        question: "Is New Zealand cheaper than Australia for Kerala students?",
        answer:
          "Tuition and rent in cities like Christchurch or Dunedin are often lower than Sydney or Melbourne. Total cost still depends on course level and city — we compare both countries side by side.",
      },
      {
        question: "How long can I work after studying in New Zealand?",
        answer:
          "Post-study work visa length depends on qualification level — up to three years for eligible bachelor's or postgraduate qualifications. Diplomas may receive shorter rights.",
      },
      {
        question: "What IELTS score do NZ universities require?",
        answer:
          "Most programs ask for IELTS 6.0–6.5 overall. Some institutes accept PTE. Health programs may require higher scores and additional checks.",
      },
      {
        question: "Can I work part-time while studying in New Zealand?",
        answer:
          "Eligible student visa holders can usually work up to 20 hours per week during term and full time during scheduled breaks. Conditions are printed on your visa — follow them strictly.",
      },
      {
        question: "Is New Zealand good for students who want a quieter environment?",
        answer:
          "Yes — smaller cities, lower population density, and strong safety perceptions attract families from Kerala who prefer a calmer setting over large metros.",
      },
      {
        question: "Does study in New Zealand lead to PR?",
        answer:
          "Skilled migration is possible for some graduates but is not guaranteed from study alone. We explain points, occupation lists, and job market realities without overselling PR.",
      },
      {
        question: "Does Orbix help with NZ student visa applications from Kochi?",
        answer:
          "Yes — university shortlist, funds planning, SOP alignment, offer coordination, and visa lodgement review for students across Kerala.",
      },
    ],
  },

  france: {
    heroFacts: [
      { label: "Tuition (public)", value: "Often ₹3–8L / year" },
      { label: "IELTS (English MSc)", value: "6.0–6.5 typical" },
      { label: "Post-study work", value: "APS permit possible" },
      { label: "Visa processing", value: "2–6 weeks after Campus France" },
    ],
    whyReasons: [
      "Low public university fees attract cost-conscious Kerala families — living costs in Paris are high, so Lyon, Toulouse, and Lille must be part of the conversation.",
      "Grandes écoles and business schools offer elite pathways for high achievers; separate from standard public university routes.",
      "Campus France centralises the process — missing a step in Études en France can delay an entire intake; Orbix navigates this workflow.",
      "Schengen access while studying lets students experience Europe — appealing to Kerala students interested in EU exposure beyond France alone.",
    ],
    popularCourses: [
      { category: "Business & Healthcare Management", outcomeNote: "HEC, ESSEC, and accessible business schools; higher fees at elite schools" },
      { category: "Engineering (Grandes Écoles)", outcomeNote: "Competitive entry; strong French language component on many programs" },
      { category: "Computer Science", outcomeNote: "English-taught MSc at universities and specialist schools" },
      { category: "Hospitality & Culinary Arts", outcomeNote: "Industry-linked programs in tourism regions" },
    ],
    visaTimeline: [
      { step: 1, title: "Campus France & admission", detail: "Complete Campus France procedure and secure university admission; Orbix guides program choice and application documents." },
      { step: 2, title: "Visa dossier", detail: "Prepare finances, accommodation proof, and insurance; book VFS appointment with complete Campus France validation." },
      { step: 3, title: "Consulate decision", detail: "Attend interview if required; allow processing time before your intake date." },
      { step: 4, title: "Arrival & OFII", detail: "Enter France, validate long-stay visa, and complete local registrations including OFII steps where applicable." },
    ],
    orbixHelps: [...ORBIX_HELPS_DEFAULT],
    faq: [
      {
        question: "Is France affordable for Kerala students compared to the UK?",
        answer:
          "Public university tuition is much lower than UK fees, but Paris living costs are high. Provincial cities offer a better rupee balance — we model total cost before you choose.",
      },
      {
        question: "What is Campus France and do I need it?",
        answer:
          "Campus France (Études en France) is the mandatory gateway for most Indian students applying to French institutions. Skipping or incomplete files delay visas — we track each step.",
      },
      {
        question: "Can I study in France in English without French?",
        answer:
          "Many master's programs are English-taught and accept IELTS 6.0–6.5. Daily life and internships still benefit from basic French — especially outside Paris.",
      },
      {
        question: "What is the APS residence permit after graduation?",
        answer:
          "The Autorisation Provisoire de Séjour allows eligible graduates to stay and seek work for a limited period. Rules and eligibility change — we confirm current policy at consultation.",
      },
      {
        question: "How much living money must I show for a France student visa?",
        answer:
          "You must prove sufficient funds for tuition and living expenses — authorities publish minimum amounts that update periodically. Orbix uses current requirements for your dossier.",
      },
      {
        question: "Which cities are best for budget-conscious Kerala families?",
        answer:
          "Lyon, Toulouse, Lille, and Nantes often have lower rent than Paris while still offering strong universities and English-taught programs.",
      },
      {
        question: "Does Orbix help with Campus France from Kochi?",
        answer:
          "Yes — Campus France navigation, public vs grande école comparison, motivation letters, funds checklist, and visa appointment preparation.",
      },
    ],
  },

  poland: {
    heroFacts: [
      { label: "Tuition (typical)", value: "₹4–10L / year" },
      { label: "IELTS (English programs)", value: "6.0+ typical" },
      { label: "Post-study work", value: "9-month job search permit" },
      { label: "Visa processing", value: "4–8 weeks typical" },
    ],
    whyReasons: [
      "Among the lowest tuition in the EU for English-taught medicine, dentistry, and engineering — popular with Kerala students comparing Poland with other medical destinations.",
      "EU-recognised degrees and Schengen travel access while studying — valuable for students seeking European credentials at lower cost.",
      "Growing English program availability reduces language barriers for the first year, though Polish helps daily life in Warsaw and Kraków.",
      "Honest counselling matters — medical licensing in India requires follow-up exams; Orbix explains total program cost and career pathways before enrolment.",
    ],
    popularCourses: [
      { category: "Medicine & Dentistry", outcomeNote: "6-year English programs; licensing in India requires follow-up exams" },
      { category: "Engineering & IT", outcomeNote: "Warsaw and Wrocław tech universities; affordable EU degrees" },
      { category: "Business", outcomeNote: "Kozminski and public economics schools; among lowest fees in EU" },
      { category: "Nursing & Healthcare Management", outcomeNote: "Allied health pathways; compare with Canada/UK nursing routes" },
    ],
    visaTimeline: [
      { step: 1, title: "University admission", detail: "Apply to Polish universities — medical programs may require entrance exams; Orbix plans timelines and document prep." },
      { step: 2, title: "National visa (Type D)", detail: "Submit finances, accommodation, insurance, and admission letter at embassy/VFS." },
      { step: 3, title: "Visa decision & travel", detail: "Collect visa sticker and travel before course start; prepare for possible entrance assessments." },
      { step: 4, title: "Residence card in Poland", detail: "Apply for temporary residence permit after arrival to legally stay for your full program duration." },
    ],
    orbixHelps: [...ORBIX_HELPS_DEFAULT],
    faq: [
      {
        question: "Is Poland good for Kerala students who want to study medicine?",
        answer:
          "Poland offers English-taught medical degrees at lower total cost than many Western countries. Graduates must clear FMGE/NExT to practice in India — we explain the full pathway before you commit.",
      },
      {
        question: "How much does it cost to study in Poland in rupees?",
        answer:
          "Non-medical programs often run ₹4–10 lakh per year tuition. Medicine can total ₹40–70 lakh for the full program. Living costs in Warsaw are roughly ₹50k–80k per month.",
      },
      {
        question: "What IELTS score do Polish universities require?",
        answer:
          "English-taught programs commonly require IELTS 6.0 overall. Medical faculties may set higher standards or hold their own entrance exams.",
      },
      {
        question: "Is a Polish degree recognised in the EU?",
        answer:
          "Degrees from accredited Polish universities are recognised across the EU. Professional licensing (medicine, nursing) has separate country-by-country requirements.",
      },
      {
        question: "Can I work while studying in Poland?",
        answer:
          "Student residence permit holders can typically work part time with some restrictions. Rules depend on permit type — we confirm current conditions for your visa category.",
      },
      {
        question: "What happens after I graduate in Poland?",
        answer:
          "Graduates may apply for a temporary residence permit to seek work — often around nine months. Long-term EU settlement requires employment and further permits.",
      },
      {
        question: "Does Orbix help with Poland student visa from Kochi?",
        answer:
          "Yes — especially for medicine vs engineering comparisons, entrance exam timelines, funds documentation, and national visa filing support from Vyttila.",
      },
    ],
  },
};
