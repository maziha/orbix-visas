import { createFileRoute, Outlet, useMatches } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { StudyDestinationCard } from "@/components/site/StudyDestinationCard";
import { BrandPromise, SectionEyebrow, SectionHeading } from "@/components/site/HomeSections";
import { COUNTRIES } from "@/lib/countries";
import { DESTINATION_HOVER_STATS, STUDY_COUNTRY_CONTENT } from "@/lib/study-country-content";
import { headForPage } from "@/lib/site-meta";

export const Route = createFileRoute("/study-abroad")({
  head: () => headForPage("studyAbroad"),
  component: Layout,
});

function Layout() {
  const matches = useMatches();
  const isChild = matches.some((m) => m.routeId.startsWith("/study-abroad/"));
  if (isChild) {
    return (
      <SiteLayout>
        <Outlet />
      </SiteLayout>
    );
  }
  return (
    <SiteLayout>
      <section className="py-20 bg-brand-dark text-white">
        <div className="container-px mx-auto max-w-7xl">
          <SectionEyebrow tone="dark">STUDY ABROAD</SectionEyebrow>
          <h1 className="font-display text-4xl md:text-6xl mt-0">Choose Your Destination</h1>
          <p className="text-white/80 mt-4 max-w-2xl text-lg">
            Each guide includes tuition bands, IELTS requirements, popular universities, and visa
            timelines — so you can compare countries before booking a consultation.
          </p>
        </div>
      </section>
      <section className="py-20">
        <div className="container-px mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="EXPLORE DESTINATIONS"
            title="Study Destinations"
            align="left"
            className="max-w-none mb-10"
          />
          <div className="grid items-stretch sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {COUNTRIES.map((c) => (
              <StudyDestinationCard
                key={c.slug}
                country={c}
                guide={STUDY_COUNTRY_CONTENT[c.slug]}
                hoverStat={DESTINATION_HOVER_STATS[c.slug]}
              />
            ))}
          </div>
        </div>
      </section>
      <BrandPromise />
    </SiteLayout>
  );
}
