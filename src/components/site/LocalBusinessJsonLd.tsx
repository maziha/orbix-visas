import { buildLocalBusinessJsonLd } from "@/lib/local-business-json-ld";

/** Site-wide LocalBusiness JSON-LD — included once in the root layout. */
export function LocalBusinessJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(buildLocalBusinessJsonLd()) }}
    />
  );
}
