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
  "spouse-visa": `Spouse Visa Consultant Kochi | ${COMPANY_NAME}`,
  "parent-visa": `Parent Visa Consultant Kerala | ${COMPANY_NAME}`,
  "student-dependent-visa": `Student Dependent Visa Kochi | ${COMPANY_NAME}`,
};

export const STUDY_COUNTRY_TITLES: Record<string, string> = {
  canada: `Study in Canada | ${COMPANY_NAME}`,
  australia: `Study in Australia | ${COMPANY_NAME}`,
  "new-zealand": `Study in New Zealand | ${COMPANY_NAME}`,
  uk: `Study in the UK | ${COMPANY_NAME}`,
  france: `Study in France | ${COMPANY_NAME}`,
  germany: `Study in Germany | ${COMPANY_NAME}`,
  poland: `Study in Poland | ${COMPANY_NAME}`,
};
