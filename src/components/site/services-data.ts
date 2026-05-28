import type { LucideIcon } from "lucide-react";
import {
  Award,
  Briefcase,
  GraduationCap,
  Heart,
  Home,
  Languages,
  Plane,
  Users,
  Wallet,
} from "lucide-react";

export type ServiceItem = {
  id: string;
  name: string;
  desc: string;
  icon: LucideIcon;
  /** Sky accent line on visa cards — eligibility snapshot */
  previewLine?: string;
  /** Visible on card — DATA: Confirm with client before publishing */
  typicalProcessing?: string;
  keyDocuments?: string;
};

export const visaServices: ServiceItem[] = [
  {
    id: "spouse-visa",
    name: "Spouse Visa",
    icon: Heart,
    desc: "Reunite with your loved one abroad through expert-guided spouse visa processing.",
    typicalProcessing: "Typical processing: 8–16 weeks",
    keyDocuments:
      "Key documents: marriage certificate, sponsor's residence proof, financial statements",
  },
  {
    id: "parent-visa",
    name: "Parent Visa",
    icon: Users,
    desc: "Bring your parents to join you in your new country with our parent visa services.",
    typicalProcessing: "Typical processing: 12–24 weeks",
    keyDocuments: "Key documents: birth certificate, sponsor's income proof",
  },
  {
    id: "job-seekers-visa",
    name: "Job Seekers Visa",
    icon: Briefcase,
    previewLine: "Germany Chancenkarte · points-based entry · blocked account",
    desc: "Search for skilled work abroad without a job offer first — we guide eligibility, documents, and embassy filing.",
    typicalProcessing: "Typical processing: 4–12 weeks",
    keyDocuments:
      "Key documents: recognised qualification, language proof, blocked account, insurance",
  },
  {
    id: "visit-visa",
    name: "Visit Visa",
    icon: Plane,
    previewLine: "Canada · UK · Schengen · tourism, business & family visits",
    desc: "Short-stay visitor visas for tourism, business, or family trips abroad with complete ties evidence.",
    typicalProcessing: "Typical processing: 3–6 weeks (varies by country)",
    keyDocuments:
      "Key documents: passport, funds proof, itinerary, employment or invitation letter",
  },
  {
    id: "student-dependent-visa",
    name: "Student Dependent Visa",
    icon: GraduationCap,
    desc: "Take your family with you while you study abroad.",
    typicalProcessing: "Typical timeline: 4–12 weeks",
    keyDocuments: "Key documents: relationship proof, funds, main student's visa copy",
  },
];

export const otherServices: ServiceItem[] = [
  {
    id: "language-training",
    name: "Language Training",
    icon: Languages,
    desc: "IELTS, PTE, TOEFL and more — taught by certified trainers.",
  },
  {
    id: "ielts-booking",
    name: "IELTS Test Booking",
    icon: Award,
    desc: "Quick & easy IELTS slot bookings across India.",
  },
  {
    id: "loan-assistance",
    name: "Loan Assistance",
    icon: Wallet,
    desc: "Education and migration loan support with leading banks.",
  },
  {
    id: "post-landing-services",
    name: "Post Landing Services",
    icon: Home,
    desc: "Accommodation, SIM, bank account & airport pickup support.",
  },
];

const familyVisaGuideSlugs = new Set(["spouse-visa", "parent-visa", "student-dependent-visa"]);

/** Visa services linked from nav dropdown */
export const navVisaServices = visaServices.map(({ id, name }) =>
  familyVisaGuideSlugs.has(id)
    ? { name, to: `/services/${id}` as const }
    : { name, to: "/services" as const, hash: id },
);

/** Other services linked from nav dropdown (excludes Language Training) */
export const navOtherServices = otherServices
  .filter((s) => s.id !== "language-training")
  .filter((s) => ["ielts-booking", "loan-assistance", "post-landing-services"].includes(s.id))
  .map(({ id, name }) => ({
    name,
    to: "/services" as const,
    hash: id,
  }));

/** Homepage “Other Services” cards — visa types only */
export const homepageOtherServices = visaServices.filter((s) =>
  ["spouse-visa", "parent-visa", "job-seekers-visa", "visit-visa"].includes(s.id),
);
