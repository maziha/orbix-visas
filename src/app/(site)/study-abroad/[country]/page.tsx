import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { StudyCountryPageContent } from "@/components/site/StudyCountryPageContent";
import { COUNTRIES, type CountrySlug } from "@/lib/countries";
import { STUDY_COUNTRY_CONTENT } from "@/lib/study-country-content";
import { STUDY_COUNTRY_DESCRIPTIONS } from "@/lib/page-descriptions";
import { STUDY_COUNTRY_TITLES } from "@/lib/page-titles";
import { COMPANY_NAME } from "@/lib/contact-info";
import { createDynamicPageMetadata } from "@/lib/metadata";
import { STUDY_COUNTRY_KEYWORDS } from "@/lib/page-keywords";

type PageProps = {
  params: Promise<{ country: string }>;
};

export function generateStaticParams() {
  return COUNTRIES.map(({ slug }) => ({ country: slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { country } = await params;
  const content = STUDY_COUNTRY_CONTENT[country as CountrySlug];
  const title =
    STUDY_COUNTRY_TITLES[country] ?? `Study in ${content?.name ?? "Abroad"} | ${COMPANY_NAME}`;
  const description =
    STUDY_COUNTRY_DESCRIPTIONS[country] ??
    `Study in ${content?.name ?? "abroad"} consultant in Kochi, Kerala — consultation with ${COMPANY_NAME}.`;

  return createDynamicPageMetadata({
    title,
    description,
    canonicalPath: `/study-abroad/${country}`,
    absoluteTitle: true,
    keywords: STUDY_COUNTRY_KEYWORDS[country],
  });
}

export default async function StudyCountryPage({ params }: PageProps) {
  const { country } = await params;
  const content = STUDY_COUNTRY_CONTENT[country as CountrySlug];
  if (!content) notFound();

  return <StudyCountryPageContent content={content} />;
}
