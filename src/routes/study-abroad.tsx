import { createFileRoute, Link, Outlet, useMatches } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { ConsultationCta } from "@/components/site/HomeSections";
import { useModal } from "@/components/site/modal-store";

export const Route = createFileRoute("/study-abroad")({
  head: () => ({
    meta: [
      { title: "Study Abroad — Orbix Overseas Careers" },
      { name: "description", content: "Study in Canada, Australia, UK, New Zealand, Germany, France or Poland with Orbix." },
    ],
  }),
  component: Layout,
});

const countries = [
  { name: "Canada", slug: "canada", flag: "🇨🇦" },
  { name: "Australia", slug: "australia", flag: "🇦🇺" },
  { name: "New Zealand", slug: "new-zealand", flag: "🇳🇿" },
  { name: "UK", slug: "uk", flag: "🇬🇧" },
  { name: "France", slug: "france", flag: "🇫🇷" },
  { name: "Germany", slug: "germany", flag: "🇩🇪" },
  { name: "Poland", slug: "poland", flag: "🇵🇱" },
];

function Layout() {
  const matches = useMatches();
  const isChild = matches.some(m => m.routeId.startsWith("/study-abroad/"));
  const { setOpen } = useModal();
  if (isChild) {
    return <SiteLayout><Outlet /></SiteLayout>;
  }
  return (
    <SiteLayout>
      <section className="py-20 bg-[var(--navy)] text-white">
        <div className="container-px mx-auto max-w-7xl">
          <span className="label-tag">Study Abroad</span>
          <h1 className="font-display text-4xl md:text-6xl mt-3">Choose Your Destination</h1>
          <p className="text-white/80 mt-4 max-w-2xl text-lg">Explore study pathways across 7 countries — with guidance tailored to your goals and budget.</p>
        </div>
      </section>
      <section className="py-20">
        <div className="container-px mx-auto max-w-7xl grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {countries.map(c => (
            <Link key={c.slug} to="/study-abroad/$country" params={{country:c.slug}} className="card-lift bg-white rounded-xl p-8">
              <div className="text-6xl mb-3">{c.flag}</div>
              <h3 className="font-display text-2xl text-[var(--navy)]">{c.name}</h3>
              <div className="mt-3 text-[var(--gold)] font-semibold text-sm">Explore →</div>
            </Link>
          ))}
        </div>
        <div className="text-center mt-12">
          <button type="button" onClick={() => setOpen("consultation")} className="btn-gold px-8 py-3.5 rounded-md">
            Book a Free Consultation
          </button>
        </div>
      </section>
      <ConsultationCta title="Need Help Choosing a Country?" subtitle="Tell us about your academic background and goals — we'll suggest destinations and next steps." />
    </SiteLayout>
  );
}
