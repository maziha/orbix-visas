import { COMPANY_NAME, COMPANY_NAME_SHORT } from "@/lib/contact-info";

/**
 * Meta descriptions (target ≤160 chars for Google SERP snippets).
 * Each description names Kerala or Kochi and the specific service.
 */

export const HOME_DESCRIPTION =
  "Expert immigration and study abroad consultants in Vyttila, Ernakulam, Kerala. Canada PR, Australia PR, spouse visa, family visa, study in UK, Canada, Germany and more. Free first consultation.";

export const PAGE_DESCRIPTIONS = {
  about: `${COMPANY_NAME} is an Ernakulam-based immigration and study abroad consultancy in Vyttila. Clear guidance, honest advice, free first consultation.`,
  contact:
    "Reach our immigration and study abroad counsellors in Vyttila, Ernakulam. Free first consultation for Canada PR, Australia PR, study abroad, and family visas.",
  services: `Spouse visa, parent visa, student dependent visa and visit visa consultants in Kochi, Kerala. ${COMPANY_NAME} — free consultation.`,
  migration: `Canada and Australia PR consultants in Kochi — ${COMPANY_NAME_SHORT} assesses Express Entry, PNP, and skilled migration paths. Serving Kerala from Vyttila.`,
  studyAbroad:
    "Study abroad guidance from Kochi, Kerala — university shortlisting, student visa, scholarships across 7 countries. Free counselling session.",
  testimonials: `Book a consultation with ${COMPANY_NAME_SHORT} in Vyttila, Ernakulam — study abroad and immigration counsellors serving Kerala for PR, visas, and overseas education.`,
} as const;

export const FAMILY_VISA_DESCRIPTIONS: Record<string, string> = {
  "spouse-visa": `Spouse visa consultant in Kochi — ${COMPANY_NAME_SHORT} explains eligibility, documents, timelines, and costs for Canada, UK, and Australia sponsors from Kerala.`,
  "parent-visa": `Parent visa consultant Kerala — ${COMPANY_NAME_SHORT} guides balance-of-family tests, documents, and realistic timelines for Canada, UK, and Australia from Kochi.`,
  "student-dependent-visa": `Student dependent visa Kochi — ${COMPANY_NAME_SHORT} helps families lodge spouse and child visas linked to study abroad applications from Kerala.`,
};

export const MIGRATION_PROGRAM_DESCRIPTIONS: Record<string, string> = {
  "canada-pr":
    "Certified Canada PR consultants in Kochi — Express Entry, PNP, and family sponsorship guidance. Free profile assessment for Kerala professionals.",
  "australia-pr":
    "Australia skilled migration consultants in Kochi — subclass 189, 190, 491 guidance. Free eligibility assessment for Kerala professionals.",
};

export const STUDY_COUNTRY_DESCRIPTIONS: Record<string, string> = {
  canada: `Study in Canada consultant Kochi — ${COMPANY_NAME_SHORT} helps with admissions, student visa, scholarships, and PGWP pathways. Expert study abroad guidance in Kerala.`,
  australia: `Study in Australia consultant Kerala — ${COMPANY_NAME_SHORT} guides university applications, student visa, and post-study work rights from Kochi.`,
  "new-zealand": `Study in New Zealand consultant Kochi — ${COMPANY_NAME_SHORT} supports admissions, student visa, and scholarships from Kerala.`,
  uk: `Study in UK consultant Kochi — ${COMPANY_NAME_SHORT} guides Russell Group applications, Student Route visa, and Graduate Route options from Kerala.`,
  france: `Study in France consultant Kerala — ${COMPANY_NAME_SHORT} helps with admissions, Campus France visa, and low-tuition programs from Kochi.`,
  germany: `Study in Germany consultant Kochi — ${COMPANY_NAME_SHORT} guides tuition-free universities, student visa, and STEM programs from Kerala.`,
  poland: `Study in Poland consultant Kochi — ${COMPANY_NAME_SHORT} supports EU degrees, affordable tuition, and student visa applications from Kerala.`,
};
