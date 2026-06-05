import {
  COMPANY_NAME,
  CONTACT_PHONE_TEL,
  WHATSAPP_URL,
} from "@/lib/contact-info";
import { ORGANIZATION_LOGO_URL, SITE_ORIGIN } from "@/lib/site-meta";

/**
 * Profile URLs for Organization `sameAs` — extend when social accounts go live.
 * @example ORGANIZATION_SAME_AS.push("https://www.instagram.com/orbixvisas");
 */
export const ORGANIZATION_SAME_AS: string[] = [WHATSAPP_URL];

/** Organization schema for brand knowledge panel — render once in root layout. */
export function buildOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: COMPANY_NAME,
    url: SITE_ORIGIN,
    logo: ORGANIZATION_LOGO_URL,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: CONTACT_PHONE_TEL,
      contactType: "customer service",
      areaServed: "IN",
      availableLanguage: ["English", "Malayalam"],
    },
    sameAs: ORGANIZATION_SAME_AS,
  };
}
