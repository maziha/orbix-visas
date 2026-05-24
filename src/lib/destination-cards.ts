import type { CountrySlug } from "@/lib/countries";

export type DestinationCardConfig = {
  slug: CountrySlug;
  accentColor: string;
  metric: string;
  hasMigration: boolean;
  watermark?: "maple";
};

export const DESTINATION_CARD_CONFIG: Record<CountrySlug, DestinationCardConfig> = {
  canada: {
    slug: "canada",
    accentColor: "#CC0001",
    metric: "Post-study work up to 3 years · PR pathway via Express Entry",
    hasMigration: true,
    watermark: "maple",
  },
  uk: {
    slug: "uk",
    accentColor: "#003087",
    metric: "Graduate Route: 2 years post-study · Skilled Worker Visa",
    hasMigration: false,
  },
  australia: {
    slug: "australia",
    accentColor: "#B8610A",
    metric: "Post-study work up to 4 years · Subclass 485",
    hasMigration: true,
  },
  germany: {
    slug: "germany",
    accentColor: "#3D4F5C",
    metric: "No tuition fees at public universities · Job Seeker Visa post-study",
    hasMigration: false,
  },
  "new-zealand": {
    slug: "new-zealand",
    accentColor: "#1B2A41",
    metric: "Post-study work up to 3 years · Points-based PR",
    hasMigration: false,
  },
  france: {
    slug: "france",
    accentColor: "#002395",
    metric: "Post-study work 12 months · Campus France process",
    hasMigration: false,
  },
  poland: {
    slug: "poland",
    accentColor: "#C8102E",
    metric: "Lowest cost in Europe · English-taught programs available",
    hasMigration: false,
  },
};
