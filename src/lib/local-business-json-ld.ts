import {
  COMPANY_NAME,
  CONTACT_EMAIL,
  CONTACT_PHONE_TEL,
  GSTIN,
} from "@/lib/contact-info";
import { OG_IMAGE_URL, SITE_ORIGIN } from "@/lib/site-meta";

/** Stable entity ID for LocalBusiness schema — matches Google's entity graph anchor. */
export const LOCAL_BUSINESS_ID = `${SITE_ORIGIN}/#business`;

/** Vyttila office coordinates — verify on Google Maps before major local SEO push. */
export const LOCAL_BUSINESS_GEO = {
  latitude: "9.9653",
  longitude: "76.3116",
} as const;

const LOCAL_BUSINESS_DESCRIPTION =
  "OrbiX Overseas Careers is an immigration and study abroad consultancy in Vyttila, Ernakulam, Kerala. We guide professionals from Kerala through Canada PR, Australia PR, and study abroad pathways.";

/** LocalBusiness schema for local SEO and Google Map pack signals — render once in root layout. */
export function buildLocalBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": LOCAL_BUSINESS_ID,
    name: COMPANY_NAME,
    image: OG_IMAGE_URL,
    url: SITE_ORIGIN,
    telephone: CONTACT_PHONE_TEL,
    email: CONTACT_EMAIL,
    taxID: GSTIN,
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "7th Floor, Jomer Symphony, Ponnurunni East, Ponnurunni, Vyttila",
      addressLocality: "Ernakulam",
      addressRegion: "Kerala",
      postalCode: "682019",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: LOCAL_BUSINESS_GEO.latitude,
      longitude: LOCAL_BUSINESS_GEO.longitude,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    priceRange: "Free first consultation",
    description: LOCAL_BUSINESS_DESCRIPTION,
    areaServed: ["Kochi", "Ernakulam", "Kerala", "India"],
    serviceType: [
      "Canada PR Consultation",
      "Australia PR Consultation",
      "Study Abroad Guidance",
      "Spouse Visa",
      "Family Visa",
    ],
  };
}
