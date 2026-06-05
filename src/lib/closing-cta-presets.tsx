import Link from "next/link";
import type { ClosingCtaPanelProps } from "@/components/site/ClosingCtaPanel";
import {
  presetFromFamilyVisa,
  presetFromMigrationProgram,
  presetFromStudyCountry,
} from "@/lib/enquiry-options";
import type { FamilyVisaContent } from "@/lib/family-visa-content";
import type { MigrationProgramContent } from "@/lib/migration-program-content";
import type { StudyCountryContent } from "@/lib/study-country-content";
import { studyCountryFinalCta } from "@/lib/study-country-page-content";
const STUDY_CLOSING_PRIMARY_LABEL = "Book free consultation";

export function familyVisaClosingCta(content: FamilyVisaContent): ClosingCtaPanelProps {
  return {
    title: "Ready to check your eligibility?",
    description:
      "Share your sponsor's status and relationship details — we will tell you what documents to gather and whether your file is ready to lodge.",
    primaryLabel: content.primaryCtaLabel,
    consultationPreset: presetFromFamilyVisa(content),
    secondary: { kind: "whatsapp" },
    footer: (
      <p>
        Comparing visa types?{" "}
        <Link href="/services#family-visa" className="closing-cta-panel__footer-link">
          View all family visa guides
        </Link>
      </p>
    ),
  };
}

export function studyCountryClosingCta(content: StudyCountryContent): ClosingCtaPanelProps {
  return {
    title: studyCountryFinalCta(content.name),
    description: `Share your marks, English score, and budget — we will suggest realistic options in ${content.name} before you pay any application fees.`,
    primaryLabel: STUDY_CLOSING_PRIMARY_LABEL,
    consultationPreset: presetFromStudyCountry(content),
    footer: (
      <p>
        Comparing countries?{" "}
        <Link href="/study-abroad" className="closing-cta-panel__footer-link">
          View all 7 study destinations
        </Link>
      </p>
    ),
  };
}

export function migrationProgramClosingCta(content: MigrationProgramContent): ClosingCtaPanelProps {
  return {
    title: content.finalCtaTitle,
    description: content.finalCtaSubtitle,
    primaryLabel: content.primaryCtaLabel,
    consultationPreset: presetFromMigrationProgram(content),
  };
}

export function consultationClosingCta(
  title = "Ready to Take the Next Step?",
  description = "Speak with our counsellors for a no-obligation session. We will help you understand your options for study abroad or migration and build a clear plan forward.",
): ClosingCtaPanelProps {
  return {
    title,
    description,
    primaryLabel: "Book a Consultation",
    secondary: { kind: "link", label: "Contact Us", to: "/contact" },
  };
}

export function testimonialsClosingCta(): ClosingCtaPanelProps {
  return {
    title: "Ready to take the first step?",
    description:
      "Client stories will be shared here as we grow. Book a consultation and our team will walk you through study abroad and migration options tailored to your profile.",
    secondary: { kind: "link", label: "Contact Us", to: "/contact" },
  };
}
