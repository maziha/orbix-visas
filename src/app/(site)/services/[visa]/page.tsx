import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FamilyVisaPageContent } from "@/components/site/FamilyVisaPageContent";
import { FAMILY_VISA_CONTENT, FAMILY_VISA_SLUGS, isFamilyVisaSlug } from "@/lib/family-visa-content";
import { FAMILY_VISA_DESCRIPTIONS } from "@/lib/page-descriptions";
import { COMPANY_NAME } from "@/lib/contact-info";
import { FAMILY_VISA_TITLES } from "@/lib/page-titles";
import { createDynamicPageMetadata } from "@/lib/metadata";
import { FAMILY_VISA_KEYWORDS } from "@/lib/page-keywords";

type PageProps = {
  params: Promise<{ visa: string }>;
};

export function generateStaticParams() {
  return FAMILY_VISA_SLUGS.map((visa) => ({ visa }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { visa } = await params;
  if (!isFamilyVisaSlug(visa)) return {};

  const content = FAMILY_VISA_CONTENT[visa];
  const title = FAMILY_VISA_TITLES[visa] ?? `${content?.name ?? "Family Visa"} | ${COMPANY_NAME}`;
  const description =
    FAMILY_VISA_DESCRIPTIONS[visa] ??
    `${content?.name ?? "Family visa"} guidance in Kochi, Kerala — consultation with ${COMPANY_NAME}.`;

  return createDynamicPageMetadata({
    title,
    description,
    canonicalPath: `/services/${visa}`,
    absoluteTitle: true,
    keywords: FAMILY_VISA_KEYWORDS[visa],
  });
}

export default async function VisaPage({ params }: PageProps) {
  const { visa } = await params;
  if (!isFamilyVisaSlug(visa)) notFound();

  const content = FAMILY_VISA_CONTENT[visa];
  return <FamilyVisaPageContent content={content} />;
}
