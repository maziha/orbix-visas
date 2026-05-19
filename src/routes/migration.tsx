import { createFileRoute, Link, Outlet, useMatches } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { MigrationPrograms } from "@/components/site/HomeSections";

export const Route = createFileRoute("/migration")({
  head: () => ({
    meta: [
      { title: "Migration — Orbix Overseas Careers" },
      { name: "description", content: "Permanent residency pathways for Australia and Canada with Orbix experts." },
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
      <section className="py-20 bg-[var(--navy)] text-white">
        <div className="container-px mx-auto max-w-7xl">
          <span className="label-tag">Migration</span>
          <h1 className="font-display text-4xl md:text-6xl mt-3">Your New Chapter Begins Here</h1>
          <div className="flex flex-wrap gap-3 mt-6">
            <Link to="/migration/$program" params={{program:"australia-pr"}} className="btn-gold px-6 py-3 rounded-md">Australia PR</Link>
            <Link to="/migration/$program" params={{program:"canada-pr"}} className="btn-outline-white px-6 py-3 rounded-md">Canada PR</Link>
          </div>
        </div>
      </section>
      <MigrationPrograms />
    </SiteLayout>
  );
}
