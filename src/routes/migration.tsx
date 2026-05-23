import { createFileRoute, Link, Outlet, useMatches } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { MigrationProgramSections, ConsultationCta, SectionEyebrow } from "@/components/site/HomeSections";
import { PAGE_DESCRIPTIONS } from "@/lib/page-descriptions";
import { PAGE_TITLES } from "@/lib/page-titles";

export const Route = createFileRoute("/migration")({
  head: () => ({
    meta: [
      { title: PAGE_TITLES.migration },
      { name: "description", content: PAGE_DESCRIPTIONS.migration },
    ],
  }),
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
          <div className="flex flex-wrap gap-3 mt-6">
            <Link to="/migration/$program" params={{program:"australia-pr"}} className="btn-secondary">Australia PR</Link>
            <Link to="/migration/$program" params={{program:"canada-pr"}} className="btn-secondary">Canada PR</Link>
          </div>
        </div>
      </section>
      <MigrationProgramSections />
      <ConsultationCta title="Not Sure Which Program Fits You?" subtitle="Our migration counsellors will review your profile and recommend the most suitable pathway for Australia or Canada." />
    </SiteLayout>
  );
}
