import { COMPANY_NAME, COMPANY_NAME_SHORT } from "@/lib/contact-info";
import { getAcademicYearLabel } from "@/lib/year";
import type { BlogPost } from "../types";

export function buildGermanyStudyVisaPost(): BlogPost {
  const academicYear = getAcademicYearLabel();

  return {
    slug: "germany-study-visa-guide",
    title: "Germany Study Visa from India — Requirements & Process",
    metaTitle: "Germany Study Visa from India — Requirements | OrbiX Overseas Careers",
    metaDescription: `Germany student visa requirements for Indian students in ${academicYear} — blocked account, admission letter, IELTS/German language, visa appointment, and post-study work options.`,
    keywords: [
      "germany study visa india",
      "german student visa kerala",
      "blocked account germany",
      "study in germany from india",
      "germany student visa requirements",
    ],
    category: "study-abroad",
    categoryLabel: "Study in Germany",
    publishedAt: "2026-06-03",
    readingTime: 8,
    heroText:
      "Germany offers tuition-free education at most public universities — making it one of the most cost-effective study destinations for Indian students. This guide covers the student visa requirements, blocked account, language tests, and the application process from India.",
    relatedServiceHref: "/study-abroad/germany",
    relatedServiceLabel: "Germany Study Counselling",
    sections: [
      {
        heading: "Why Study in Germany?",
        paragraphs: [
          "Most public universities in Germany charge no tuition fees (only a semester contribution of roughly €150–350). Programs in engineering, computer science, business, and natural sciences are taught in English at many universities.",
          `For Kerala students comparing costs in ${academicYear}, Germany often works out cheaper than UK, Canada, or Australia — even after accounting for living expenses in cities like Berlin, Munich, or Hamburg.`,
        ],
      },
      {
        heading: "Admission Requirements",
        paragraphs: ["Before applying for a visa, you need a confirmed place at a German university:"],
        listItems: [
          "University admission letter (Zulassungsbescheid) — Apply directly or through Uni-Assist for most universities.",
          "Academic qualifications — Bachelor's degree for master's programs; APS certificate required for Indian degrees (verify credentials through Academic Evaluation Centre).",
          "Language — English-taught programs: IELTS 6.0–6.5 or TOEFL equivalent. German-taught programs: TestDaF or DSH at B2/C1 level.",
          "Motivation letter and CV — Standard requirements for most German university applications.",
        ],
      },
      {
        heading: "Blocked Account (Sperrkonto)",
        paragraphs: [
          "Germany requires proof of financial resources of approximately €11,904 per year (2024 figure — updated annually). The standard method is a blocked account (Sperrkonto) with providers like Expatrio, Fintiba, or Deutsche Bank.",
          "You deposit the full annual amount; funds are released monthly (roughly €992/month) once you arrive in Germany. This replaces the need for a formal sponsor in most cases.",
        ],
      },
      {
        heading: "Student Visa Application Process",
        paragraphs: ["Kerala students typically apply through the German Consulate General in Bangalore:"],
        listItems: [
          "Step 1 — Secure university admission and APS certificate.",
          "Step 2 — Open a blocked account and deposit required funds.",
          "Step 3 — Book a visa appointment at the German Embassy in New Delhi or the Consulate General in Bangalore (Kerala residents typically use Bangalore).",
          "Step 4 — Submit passport, admission letter, blocked account confirmation, travel health insurance, motivation letter, and academic documents.",
          "Step 5 — Attend visa interview. Processing typically takes 4–8 weeks after submission.",
        ],
      },
      {
        heading: "Post-Study Options and How Orbix Helps",
        paragraphs: [
          "After graduation, international students can apply for an 18-month job-seeking residence permit. Finding skilled employment can lead to an EU Blue Card and long-term settlement.",
          `${COMPANY_NAME_SHORT} helps Kerala students shortlist English-taught programs, navigate APS and blocked account setup, and prepare visa documentation for the Bangalore consulate appointment.`,
        ],
      },
    ],
    faq: [
      {
        question: "Is IELTS required for Germany student visa?",
        answer:
          "For English-taught programs, yes — most universities require IELTS 6.0–6.5. German-taught programs require TestDaF or DSH instead. The embassy may ask for proof of language proficiency regardless.",
      },
      {
        question: "What is the APS certificate?",
        answer:
          "The Academic Evaluation Centre (APS) in New Delhi verifies Indian academic documents for German institutions. It is mandatory for most Indian applicants and takes 3–4 weeks to process.",
      },
      {
        question: "How much does a blocked account cost?",
        answer:
          "You deposit approximately €11,904 for one year plus a setup fee (€49–150 depending on provider). The money is yours — released monthly once you are in Germany.",
      },
      {
        question: "Can I work while studying in Germany?",
        answer:
          "Yes — international students can work 120 full days or 240 half days per year without additional permission. Many Kerala students take part-time jobs to supplement living costs.",
      },
    ],
  };
}
