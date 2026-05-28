import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { headForPage } from "@/lib/site-meta";
import { Reveal } from "@/components/motion";
import {
  Hero,
  MigrationPrograms,
  BringingFamilyOverseas,
  Destinations,
  EnquiryFormSection,
  OtherServices,
  Achievements,
} from "@/components/site/HomeSections";

export const Route = createFileRoute("/")({
  head: () => headForPage("home"),
  component: Index,
});

function Index() {
  return (
    <SiteLayout>
      <Hero />
      <Reveal>
        <MigrationPrograms />
      </Reveal>
      <Reveal delay={0.05}>
        <BringingFamilyOverseas />
      </Reveal>
      <Reveal delay={0.08}>
        <Destinations />
      </Reveal>
      <Reveal delay={0.1}>
        <OtherServices />
      </Reveal>
      <Reveal delay={0.12}>
        <EnquiryFormSection />
      </Reveal>
      <Reveal delay={0.14}>
        <Achievements />
      </Reveal>
    </SiteLayout>
  );
}
