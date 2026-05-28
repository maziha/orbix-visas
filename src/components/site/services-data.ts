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
    previewLine: "Germany Chancenkarte · 6+ points · blocked account · no job offer to enter",
    desc: "A job seeker permit lets you enter a country to look for skilled work without a prior employer contract. Germany’s Opportunity Card (Chancenkarte) is the main route Indians use: up to 12 months in Germany, part-time work while searching, then a work permit once you are hired.",
    typicalProcessing:
      "Typical timeline: 4–12 weeks embassy processing after biometrics (varies by VFS city in India)",
    keyDocuments:
      "Key documents: recognised degree or vocational qualification, language proof (A1 German or B2 English), blocked account (~€1,091/month), health insurance, police clearance",
  },
  {
    id: "visit-visa",
    name: "Visit Visa",
    icon: Plane,
    previewLine: "Canada · UK · Schengen · Australia · tourism, business & family visits",
    desc: "Visitor visas are short-stay permits for tourism, business, or seeing family abroad. You must show a genuine trip purpose, enough funds, and strong ties to India. We help you prepare forms, cover letters, and supporting papers so the file is complete before biometrics.",
    typicalProcessing:
      "Typical timeline: ~3–4 weeks UK visitor (after biometrics); ~4 weeks Canada TRV; Schengen often 15 calendar days (may extend in peak season)",
    keyDocuments:
      "Key documents: valid passport, bank statements, travel itinerary, employment or business ties, invitation letter if visiting family or a host",
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
