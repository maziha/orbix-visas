import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import {
  Hero,
  MigrationPrograms,
  BringingFamilyOverseas,
  Destinations,
  StudyAbroadSplit,
  Eligibility,
  OtherServices,
  Achievements,
  ChoosingFuture,
  LeadershipTeaser,
  BrandPromise,
  Testimonials,
} from "@/components/site/HomeSections";

export const Route = createFileRoute("/")({
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
      <Eligibility />
      {/* <UniversityCarousel /> — enable when partner universities are confirmed */}
      <Testimonials />
      <OtherServices />
      <Achievements />
      <ChoosingFuture />
      <LeadershipTeaser />
      <BrandPromise />
      {/* <Accreditations /> — enable when memberships are confirmed */}
    </SiteLayout>
  );
}
