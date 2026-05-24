import { createFileRoute, Link, Outlet, useMatches } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { CountryFlag } from "@/components/site/CountryFlag";
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
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {COUNTRIES.map((c) => {
              const guide = STUDY_COUNTRY_CONTENT[c.slug];
              return (
                <div
                  key={c.slug}
                  className="card-hover-destination card-base bg-brand-white rounded-xl p-8 pb-16 flex flex-col h-full"
                  data-stat={DESTINATION_HOVER_STATS[c.slug]}
                >
                  <CountryFlag code={c.code} size="lg" title={c.name} className="mb-3" />
                  <h3 className="font-display text-2xl text-[var(--navy)]">{c.name}</h3>
                  <p className="destination-card-preview text-sm text-[var(--accent-sky)] font-medium mt-2 leading-snug">
                    {guide.previewLine}
                  </p>
                  <p className="destination-card-preview text-sm text-muted-foreground mt-3 flex-1 leading-relaxed">
                    {guide.heroSubtitle.slice(0, 120)}…
                  </p>
                  <div className="destination-card-actions mt-6">
                    <Link
                      to="/study-abroad/$country"
                      params={{ country: c.slug }}
                      className="btn-secondary self-start"
                    >
                      Explore guide →
                    </Link>
                  </div>
                  <p
                    className="card-reveal-stat"
                    data-stat={DESTINATION_HOVER_STATS[c.slug]}
                    aria-hidden="true"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <BrandPromise />
    </SiteLayout>
  );
}
