/** ISO 3166-1 alpha-2 codes for countries shown on the site. */
export type CountryCode = "CA" | "AU" | "NZ" | "GB" | "FR" | "DE" | "PL";

export type CountrySlug =
  | "canada"
  | "australia"
  | "new-zealand"
  | "uk"
  | "france"
  | "germany"
  | "poland";

export type Country = {
  slug: CountrySlug;
  name: string;
  code: CountryCode;
};

export const COUNTRIES: Country[] = [
  { slug: "canada", name: "Canada", code: "CA" },
  { slug: "australia", name: "Australia", code: "AU" },
  { slug: "new-zealand", name: "New Zealand", code: "NZ" },
  { slug: "uk", name: "UK", code: "GB" },
  { slug: "france", name: "France", code: "FR" },
  { slug: "germany", name: "Germany", code: "DE" },
  { slug: "poland", name: "Poland", code: "PL" },
];

export const COUNTRY_BY_SLUG = Object.fromEntries(
  COUNTRIES.map((c) => [c.slug, c]),
) as Record<CountrySlug, Country>;

export function getCountryCodeForMigrationSlug(programSlug: string): CountryCode | undefined {
  if (programSlug.startsWith("canada")) return "CA";
  if (programSlug.startsWith("australia")) return "AU";
  return undefined;
}
