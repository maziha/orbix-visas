import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import {
  Hero, Destinations, StudyAbroadSplit, Eligibility, MigrationPrograms,
  MigrationSplit, UniversityCarousel, Testimonials, OtherServices,
  Achievements, ChoosingFuture, LeadershipTeaser, BrandPromise, Accreditations,
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
      <UniversityCarousel />
      <Testimonials />
      <OtherServices />
      <Achievements />
      <ChoosingFuture />
      <LeadershipTeaser />
      <BrandPromise />
      <Accreditations />
    </SiteLayout>
  );
}
