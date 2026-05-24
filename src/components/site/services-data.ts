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
  /** Shown on card hover, e.g. "Typical timeline: 8–16 weeks" (data-timeline) */
  hoverTimeline?: string;
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
    hoverTimeline: "Typical processing: 8–16 weeks",
    typicalProcessing: "Typical processing: 8–16 weeks",
    keyDocuments:
      "Key documents: marriage certificate, sponsor's residence proof, financial statements",
  },
  {
    id: "parent-visa",
    name: "Parent Visa",
    icon: Users,
    desc: "Bring your parents to join you in your new country with our parent visa services.",
    hoverTimeline: "Typical processing: 12–24 weeks",
    typicalProcessing: "Typical processing: 12–24 weeks",
    keyDocuments: "Key documents: birth certificate, sponsor's income proof",
  },
  {
    id: "job-seekers-visa",
    name: "Job Seekers Visa",
    icon: Briefcase,
    desc: "Explore global opportunities with a job seekers visa.",
    hoverTimeline: "Typical timeline: 4–12 weeks",
  },
  {
    id: "visit-visa",
    name: "Visit Visa",
    icon: Plane,
    desc: "Travel the world hassle-free with our streamlined visit visa processing.",
    hoverTimeline: "Typical timeline: 2–4 weeks",
  },
  {
    id: "student-dependent-visa",
    name: "Student Dependent Visa",
    icon: GraduationCap,
    desc: "Take your family with you while you study abroad.",
    hoverTimeline: "Typical timeline: 4–12 weeks",
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
