import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import {
  Hero, Destinations, StudyAbroadSplit, Eligibility, MigrationPrograms,
  MigrationSplit, Testimonials, OtherServices,
  Achievements, ChoosingFuture, LeadershipTeaser, BrandPromise,
} from "@/components/site/HomeSections";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <SiteLayout>
      <Hero />
      <Destinations />
      <StudyAbroadSplit />
      <Eligibility />
      <MigrationPrograms />
      <MigrationSplit />
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
