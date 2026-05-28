import { createFileRoute, Link, Outlet, useMatches } from "@tanstack/react-router";
import { CountryFlag } from "@/components/site/CountryFlag";
import { SiteLayout } from "@/components/site/SiteLayout";
import { MigrationProgramSections, BrandPromise, SectionEyebrow } from "@/components/site/HomeSections";
import { headForPage } from "@/lib/site-meta";

export const Route = createFileRoute("/migration")({
  head: () => headForPage("migration"),
  component: Layout,
});

function Layout() {
  const matches = useMatches();
  const isChild = matches.some(m => m.routeId.startsWith("/migration/"));
  if (isChild) return <SiteLayout><Outlet /></SiteLayout>;
  return (
    <SiteLayout>
      <section className="py-20 bg-brand-dark text-white">
        <div className="container-px mx-auto max-w-7xl">
          <SectionEyebrow tone="dark">MIGRATION</SectionEyebrow>
          <h1 className="font-display text-4xl md:text-6xl mt-0">Your New Chapter Begins Here</h1>
          <p className="mt-4 max-w-2xl text-lg text-white/80 leading-relaxed">
            Compare Canada and Australia permanent residency pathways below — use the tabs to switch
            countries without scrolling.
          </p>
          {/* <Link
            to="/migration"
            hash="migration-pathways"
            className="btn-secondary mt-6 inline-flex items-center gap-2"
          >
            <CountryFlag code="CA" size="sm" title="Canada" className="ring-1 ring-white/30" />
            <CountryFlag code="AU" size="sm" title="Australia" className="-ml-1 ring-1 ring-white/30" />
            View pathways
          </Link> */}
        </div>
      </section>
      <MigrationProgramSections />
      <BrandPromise />
    </SiteLayout>
  );
}
