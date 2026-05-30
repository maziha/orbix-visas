import { createFileRoute, notFound } from "@tanstack/react-router";
import { FamilyVisaPageContent } from "@/components/site/FamilyVisaPageContent";
import { FAMILY_VISA_CONTENT, isFamilyVisaSlug } from "@/lib/family-visa-content";
import { FAMILY_VISA_DESCRIPTIONS } from "@/lib/page-descriptions";
import { COMPANY_NAME } from "@/lib/contact-info";
import { FAMILY_VISA_TITLES } from "@/lib/page-titles";
import { buildPageHead } from "@/lib/site-meta";

export const Route = createFileRoute("/_site/services/$visa")({
  loader: ({ params }) => {
    if (!isFamilyVisaSlug(params.visa)) throw notFound();
    return FAMILY_VISA_CONTENT[params.visa];
  },
  head: ({ params, loaderData }) => {
    const visa = params.visa;
    const title =
      FAMILY_VISA_TITLES[visa] ??
      `${loaderData?.name ?? "Family Visa"} | ${COMPANY_NAME}`;
    const description =
      FAMILY_VISA_DESCRIPTIONS[visa] ??
      `${loaderData?.name ?? "Family visa"} guidance in Kochi, Kerala — consultation with ${COMPANY_NAME}.`;

    return buildPageHead({
      title,
      description,
      canonicalPath: `/services/${visa}`,
    });
  },
  component: VisaPage,
});

function VisaPage() {
  const content = Route.useLoaderData();
  return <FamilyVisaPageContent content={content} />;
}
