import { COMPANY_NAME, COMPANY_NAME_SHORT } from "@/lib/contact-info";

/** Document title tags — pattern: [keyword] | {COMPANY_NAME} (home uses bespoke format). */

export const HOME_TITLE = `${COMPANY_NAME} | Canada PR, Australia PR & Study Abroad — Kochi`;

export const PAGE_TITLES = {
  about: `About ${COMPANY_NAME} | Immigration Consultants, Kochi`,
  contact: `Contact ${COMPANY_NAME} | Book a Free Consultation, Kochi`,
  services: `Visa Services Kerala | Spouse, Parent & Family Visa | ${COMPANY_NAME_SHORT}`,
  migration: `Migration & PR Consultants Kerala | ${COMPANY_NAME}`,
  studyAbroad: `Study Abroad Consultant Kochi | UK, Canada, Germany & More | ${COMPANY_NAME_SHORT}`,
  testimonials: `Consultation | ${COMPANY_NAME}`,
} as const;

export const MIGRATION_PROGRAM_TITLES: Record<string, string> = {
  "canada-pr": `Canada PR Consultant in Kerala | ${COMPANY_NAME}`,
  "australia-pr": `Australia PR Consultant in Kerala | ${COMPANY_NAME}`,
};

export const FAMILY_VISA_TITLES: Record<string, string> = {
  "spouse-visa": "Spouse Visa Consultant Kochi, Kerala | OrbiX Overseas Careers",
  "parent-visa": "Parent Visa Consultant Kerala | Bring Parents Abroad | OrbiX",
  "student-dependent-visa": "Student Dependent Visa Kerala | Take Family While Studying | OrbiX",
};

export const STUDY_COUNTRY_TITLES: Record<string, string> = {
  canada: "Study in Canada from Kerala | Admissions & Visa Consultant Kochi",
  uk: "Study in the UK from Kerala | Student Route Visa Consultant Kochi",
  australia: "Study in Australia from Kerala | Visa & PSWR Consultant Kochi",
  germany: "Study in Germany from Kerala | Free Tuition Consultant Kochi",
  "new-zealand": "Study in New Zealand from Kerala | Visa Consultant Kochi",
  france: "Study in France from Kerala | Campus France Consultant Kochi",
  poland: "Study in Poland from Kerala | EU Degree Consultant Kochi",
};
