import { createFileRoute, notFound } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { SectionEyebrow } from "@/components/site/SectionEyebrow";
import { COUNTRY_BY_SLUG, type CountrySlug } from "@/lib/countries";
import { STUDY_COUNTRY_DESCRIPTIONS } from "@/lib/page-descriptions";
import { STUDY_COUNTRY_TITLES } from "@/lib/page-titles";
import { useModal } from "@/components/site/modal-store";

const STUDY_COUNTRY_CONTENT: Record<
  CountrySlug,
  { intro: string; highlights: string[] }
> = {
  canada: {
    intro:
      "Globally recognized institutes, affordable tuition, ample scholarships & work opportunities make Canada one of the most popular study destinations.",
    highlights: [
      "Post-graduation work permits up to 3 years",
      "Pathway to Permanent Residency",
      "Affordable cost of living",
      "Multicultural & welcoming society",
    ],
  },
  australia: {
    intro:
      "Outstanding training facilities, strong student support, abundant scholarships and a world-class lifestyle.",
    highlights: [
      "Top 100 global universities",
      "Post-study work rights 2–4 years",
      "Strong job market",
      "Beautiful coastal cities",
    ],
  },
  "new-zealand": {
    intro:
      "Research-driven education, diverse culture, safe study environment and affordable living costs.",
    highlights: [
      "All 8 universities in Top 500",
      "Post-study work visa 3 years",
      "Safe & peaceful country",
      "Stunning natural beauty",
    ],
  },
  uk: {
    intro:
      "Home to many of the world's top-ranked universities and a globally respected qualification.",
    highlights: [
      "Graduate Route 2-year work visa",
      "World-leading research",
      "Shorter degree programs",
      "Cultural diversity",
    ],
  },
  france: {
    intro: "A hotbed of innovation & research, with rich culture and a thriving student life.",
    highlights: [
      "Low tuition at public universities",
      "Top business schools",
      "Schengen access",
      "Rich cultural heritage",
    ],
  },
  germany: {
    intro: "Highly regarded education, low-cost tuition, and safe multicultural cities.",
    highlights: [
      "Tuition-free public universities",
      "Strong engineering & STEM",
      "18-month job seeker visa",
      "Excellent public transport",
    ],
  },
  poland: {
    intro:
      "Well-respected universities with the lowest tuition fees and cost of living in Europe.",
    highlights: [
      "EU-recognized degrees",
      "Affordable tuition & living",
      "Schengen access",
      "Growing tech & startup hub",
    ],
  },
};

export const Route = createFileRoute("/study-abroad/$country")({
  loader: ({ params }) => {
    const country = COUNTRY_BY_SLUG[params.country as CountrySlug];
    const content = STUDY_COUNTRY_CONTENT[params.country as CountrySlug];
    if (!country || !content) throw notFound();
    return { ...country, ...content };
  },
  head: ({ params, loaderData }) => ({
    meta: [
      {
        title:
          STUDY_COUNTRY_TITLES[params.country] ??
          `Study in ${loaderData?.name ?? "Abroad"} | Orbix Overseas Careers`,
      },
      {
        name: "description",
        content:
          STUDY_COUNTRY_DESCRIPTIONS[params.country] ??
          `Study in ${loaderData?.name ?? "abroad"} consultant in Kochi, Kerala — consultation with Orbix Overseas Careers.`,
      },
    ],
  }),
  component: CountryPage,
});

function CountryPage() {
  const d = Route.useLoaderData();
  const { setOpen } = useModal();
  return (
    <>
      <PageHero
        label="Study Abroad"
        title={`Study in ${d.name}`}
        subtitle={d.intro}
        countryCode={d.code}
      />
      <section className="py-20">
        <div className="container-px mx-auto max-w-5xl">
          <SectionEyebrow>STUDY ABROAD</SectionEyebrow>
          <h2 className="font-display text-3xl text-[var(--navy)] mb-8">Why {d.name}?</h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {d.highlights.map((h: string) => (
              <div key={h} className="card-lift bg-brand-white rounded-xl p-6 flex items-start gap-3">
                <div className="h-2 w-2 rounded-full bg-[var(--accent-sky)] mt-2 shrink-0" />
                <p className="text-foreground">{h}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <button onClick={() => setOpen("consultation")} className="btn-primary">
              Book a Consultation
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
