import type { LucideIcon } from "lucide-react";
import { GraduationCap, Heart, MapPin } from "lucide-react";

export type HeroRoutingCard = {
  label: string;
  description: string;
  exploreLabel: string;
  to: string;
  hash?: string;
  icon: LucideIcon;
  freeAssessmentBadge?: boolean;
};

export const heroRoutingCards: HeroRoutingCard[] = [
  {
    label: "Migrate & Get PR",
    description: "Canada and Australia permanent residency pathways",
    exploreLabel: "Explore Migration →",
    to: "/migration",
    icon: MapPin,
    freeAssessmentBadge: true,
  },
  {
    label: "Study Abroad",
    description: "Undergraduate and postgraduate programs across 7 countries",
    exploreLabel: "Explore Study Abroad →",
    to: "/study-abroad",
    icon: GraduationCap,
  },
  {
    label: "Family & Spouse Visa",
    description: "Reunite with your spouse, parents, or dependents overseas",
    exploreLabel: "Explore Visa Services →",
    to: "/services",
    hash: "family-visa",
    icon: Heart,
  },
];
