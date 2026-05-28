import { createFileRoute, notFound } from "@tanstack/react-router";
import { StudyCountryPageContent } from "@/components/site/StudyCountryPageContent";
import type { CountrySlug } from "@/lib/countries";
import { STUDY_COUNTRY_CONTENT } from "@/lib/study-country-content";
import { STUDY_COUNTRY_DESCRIPTIONS } from "@/lib/page-descriptions";
import { STUDY_COUNTRY_TITLES } from "@/lib/page-titles";
import { COMPANY_NAME } from "@/lib/contact-info";
import { buildPageHead } from "@/lib/site-meta";

export const Route = createFileRoute("/study-abroad/$country")({
  loader: ({ params }) => {
    const content = STUDY_COUNTRY_CONTENT[params.country as CountrySlug];
    if (!content) throw notFound();
    return content;
  },
  head: ({ params, loaderData }) => {
    const country = params.country;
    const title =
      STUDY_COUNTRY_TITLES[country] ??
      `Study in ${loaderData?.name ?? "Abroad"} | ${COMPANY_NAME}`;
    const description =
      STUDY_COUNTRY_DESCRIPTIONS[country] ??
      `Study in ${loaderData?.name ?? "abroad"} consultant in Kochi, Kerala — consultation with ${COMPANY_NAME}.`;

    return buildPageHead({
      title,
      description,
      canonicalPath: `/study-abroad/${country}`,
    });
  },
  component: CountryPage,
});

function CountryPage() {
  const content = Route.useLoaderData();
  return <StudyCountryPageContent content={content} />;
}
