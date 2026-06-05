import { buildOrganizationJsonLd } from "@/lib/organization-json-ld";

/** Site-wide Organization JSON-LD — included once in the root layout. */
export function OrganizationJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(buildOrganizationJsonLd()) }}
    />
  );
}
