import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { headForPage } from "@/lib/site-meta";
import {
  Hero,
  MigrationPrograms,
  BringingFamilyOverseas,
  Destinations,
  StudyAbroadSplit,
  EnquiryFormSection,
  OtherServices,
  Achievements,
  BrandPromise,
} from "@/components/site/HomeSections";

export const Route = createFileRoute("/")({
  head: () => headForPage("home"),
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
      <EnquiryFormSection />
      <Achievements />
      <BrandPromise />
    </SiteLayout>
  );
}
