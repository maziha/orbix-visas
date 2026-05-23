import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { HOME_DESCRIPTION } from "@/lib/page-descriptions";
import {
  Hero,
  MigrationPrograms,
  BringingFamilyOverseas,
  Destinations,
  StudyAbroadSplit,
  OtherServices,
  Achievements,
  ConsultationCta,
} from "@/components/site/HomeSections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Orbix Overseas Careers | Immigration & Study Abroad Consultants, Kochi Kerala" },
      { name: "description", content: HOME_DESCRIPTION },
      { property: "og:description", content: HOME_DESCRIPTION },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <SiteLayout>
      <Hero />
      <MigrationPrograms />
      <BringingFamilyOverseas />
      <Destinations />
      <StudyAbroadSplit />
      <OtherServices />
      <Achievements />
      <ConsultationCta />
      {/* LeadershipTeaser, BrandPromise, Eligibility, ChoosingFuture — removed from homepage per site plan */}
      {/* <UniversityCarousel /> — enable when partner universities are confirmed */}
      {/* <Accreditations /> — enable when memberships are confirmed */}
    </SiteLayout>
  );
}
