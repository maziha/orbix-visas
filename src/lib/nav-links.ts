import { navOtherServices, navVisaServices } from "@/components/site/services-data";

export const studyCountryLinks = [
  { name: "Canada", to: "/study-abroad/canada" },
  { name: "Australia", to: "/study-abroad/australia" },
  { name: "New Zealand", to: "/study-abroad/new-zealand" },
  { name: "UK", to: "/study-abroad/uk" },
  { name: "France", to: "/study-abroad/france" },
  { name: "Germany", to: "/study-abroad/germany" },
  { name: "Poland", to: "/study-abroad/poland" },
] as const;

export const migrationLinks = [
  { name: "Australia PR", to: "/migration/australia-pr" },
  { name: "Canada PR", to: "/migration/canada-pr" },
] as const;

export type NavServiceLink = {
  name: string;
  to: "/services" | `/services/${string}`;
  hash?: string;
};

/** Eight service links for nav (5 visa + 3 other; Language Training omitted from dropdown) */
export const serviceNavLinks: NavServiceLink[] = [
  ...navVisaServices.map((s) => ({
    name: s.name,
    to: s.to,
    ...("hash" in s && s.hash ? { hash: s.hash } : {}),
  })),
  ...navOtherServices.map((s) => ({
    name: s.name,
    to: s.to,
    hash: s.hash,
  })),
];
