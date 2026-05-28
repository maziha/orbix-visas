import type { SubmitEnquiryInput } from "@/lib/enquiry-types";
import type { FamilyVisaContent } from "@/lib/family-visa-content";
import type { MigrationProgramContent } from "@/lib/migration-program-content";
import type { StudyCountryContent } from "@/lib/study-country-content";

export type EnquiryGoal = "migrate" | "study" | "family";

export type ConsultationPreset = {
  goal?: EnquiryGoal;
  migrateCountry?: string;
  studyCountry?: string;
  visaType?: string;
  qualification?: string;
  headline?: string;
};

export type PickOption = { value: string; label: string };

export const ENQUIRY_GOAL_OPTIONS: { value: EnquiryGoal; label: string; sentence: string }[] = [
  { value: "migrate", label: "Migrate / PR", sentence: "migrate or get permanent residency" },
  { value: "study", label: "Study abroad", sentence: "study abroad" },
  { value: "family", label: "Family visa", sentence: "join family abroad" },
];

export const MIGRATE_COUNTRY_OPTIONS: PickOption[] = [
  { value: "Canada", label: "Canada" },
  { value: "Australia", label: "Australia" },
  { value: "Other", label: "another country" },
];

export const STUDY_COUNTRY_OPTIONS: PickOption[] = [
  { value: "Canada", label: "Canada" },
  { value: "Australia", label: "Australia" },
  { value: "New Zealand", label: "New Zealand" },
  { value: "UK", label: "the UK" },
  { value: "France", label: "France" },
  { value: "Germany", label: "Germany" },
  { value: "Poland", label: "Poland" },
];

export const FAMILY_VISA_OPTIONS: PickOption[] = [
  { value: "Spouse Visa", label: "spouse visa" },
  { value: "Parent Visa", label: "parent visa" },
  { value: "Student Dependent Visa", label: "student dependent visa" },
];

export const QUALIFICATION_OPTIONS: PickOption[] = [
  { value: "Master's / Above", label: "Master's or above" },
  { value: "Degree", label: "a bachelor's degree" },
  { value: "Plus Two / Diploma / Others", label: "Plus Two, diploma, or other" },
];

export const CONTACT_SERVICE_OPTIONS: PickOption[] = [
  { value: "canada-pr", label: "Canada PR" },
  { value: "australia-pr", label: "Australia PR" },
  { value: "study-abroad", label: "study abroad" },
  { value: "spouse-family-visa", label: "spouse or family visa" },
  { value: "job-seekers-visa", label: "job seekers visa" },
  { value: "visit-visa", label: "visit visa" },
  { value: "ielts-language", label: "IELTS / language training" },
  { value: "other", label: "something else" },
];

const CONTACT_SERVICE_LABELS: Record<string, string> = Object.fromEntries(
  CONTACT_SERVICE_OPTIONS.map((o) => [o.value, o.label]),
);

export type SmartEnquiryFormState = {
  name: string;
  phone: string;
  email: string;
  goal: EnquiryGoal | "";
  migrateCountry: string;
  studyCountry: string;
  visaType: string;
  qualification: string;
  message: string;
};

export function defaultEnquiryFormState(preset?: ConsultationPreset | null): SmartEnquiryFormState {
  return {
    name: "",
    phone: "",
    email: "",
    goal: preset?.goal ?? "",
    migrateCountry: preset?.migrateCountry ?? "",
    studyCountry: preset?.studyCountry ?? "",
    visaType: preset?.visaType ?? "",
    qualification: preset?.qualification ?? "",
    message: "",
  };
}

export function buildEnquiryPayload(
  source: SubmitEnquiryInput["source"],
  form: SmartEnquiryFormState,
): SubmitEnquiryInput | null {
  if (!form.name.trim() || !form.phone.trim() || !form.goal) return null;

  const goal = form.goal as EnquiryGoal;
  const base: SubmitEnquiryInput = {
    source,
    name: form.name.trim(),
    phone: form.phone.trim(),
    email: form.email.trim() || undefined,
    qualification: form.qualification || undefined,
    message: form.message.trim() || undefined,
    goal,
  };

  switch (goal) {
    case "migrate":
      return {
        ...base,
        service: "Migration",
        migrateCountry: form.migrateCountry || undefined,
        country: form.migrateCountry || undefined,
      };
    case "study":
      return {
        ...base,
        service: "Study Abroad",
        studyCountry: form.studyCountry || undefined,
        country: form.studyCountry || undefined,
      };
    case "family":
      return {
        ...base,
        service: "Spouse / Family Visa",
        visaType: form.visaType || undefined,
      };
  }
}

export function confirmationForEnquiry(form: SmartEnquiryFormState): string {
  if (!form.goal) {
    return "Our team will call you within 24 hours.";
  }

  switch (form.goal) {
    case "migrate":
      if (form.migrateCountry === "Canada") {
        return "Our migration team will call you within 24 hours to discuss your Canada PR options.";
      }
      if (form.migrateCountry === "Australia") {
        return "Our migration team will call you within 24 hours to discuss your Australia PR options.";
      }
      return "Our migration team will call you within 24 hours to discuss your PR and migration options.";
    case "study":
      if (form.studyCountry) {
        const label =
          STUDY_COUNTRY_OPTIONS.find((c) => c.value === form.studyCountry)?.label ??
          form.studyCountry;
        return `Our study abroad team will call you within 24 hours to discuss studying in ${label}.`;
      }
      return "Our study abroad team will call you within 24 hours to discuss your study abroad options.";
    case "family":
      if (form.visaType) {
        const label =
          FAMILY_VISA_OPTIONS.find((v) => v.value === form.visaType)?.label ?? form.visaType;
        return `Our family visa team will call you within 24 hours about your ${label} enquiry.`;
      }
      return "Our family visa team will call you within 24 hours about your family visa options.";
  }
}

export function presetFromMigrationProgram(content: MigrationProgramContent): ConsultationPreset {
  const migrateCountry = content.slug.startsWith("canada")
    ? "Canada"
    : content.slug.startsWith("australia")
      ? "Australia"
      : undefined;

  return {
    goal: "migrate",
    migrateCountry,
    headline: `Consultation — ${content.name}`,
  };
}

export function presetFromStudyCountry(content: StudyCountryContent): ConsultationPreset {
  return {
    goal: "study",
    studyCountry: content.name,
    headline: `Study in ${content.name}`,
  };
}

export function presetFromFamilyVisa(content: FamilyVisaContent): ConsultationPreset {
  const visaBySlug: Record<string, string> = {
    "spouse-visa": "Spouse Visa",
    "parent-visa": "Parent Visa",
    "student-dependent-visa": "Student Dependent Visa",
  };

  return {
    goal: "family",
    visaType: visaBySlug[content.slug],
    headline: `Consultation — ${content.name}`,
  };
}

export function contactServiceLabel(value: string) {
  return CONTACT_SERVICE_LABELS[value] ?? value;
}
