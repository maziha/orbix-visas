import { createFileRoute, notFound } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { SectionEyebrow } from "@/components/site/SectionEyebrow";
import { useModal } from "@/components/site/modal-store";
import type { CountryCode } from "@/lib/countries";
import { MIGRATION_PROGRAM_DESCRIPTIONS } from "@/lib/page-descriptions";
import { MIGRATION_PROGRAM_TITLES } from "@/lib/page-titles";

const PROGS: Record<
  string,
  {
    name: string;
    countryCode: CountryCode;
    intro: string;
    visas: { code: string; title: string; desc: string }[];
  }
> = {
  "australia-pr": {
    name: "Australia PR",
    countryCode: "AU",
    intro: "Make Australia your permanent home through skilled migration visas — 189, 190 or 491.",
    visas: [
      {
        code: "Subclass 189",
        title: "Skilled Independent",
        desc: "Permanent residency for invited skilled workers — no sponsorship required.",
      },
      {
        code: "Subclass 190",
        title: "Skilled Nominated",
        desc: "Permanent residency for skilled workers nominated by an Australian state or territory.",
      },
      {
        code: "Subclass 491",
        title: "Skilled Work Regional",
        desc: "Live and work in regional Australia for 5 years with a pathway to PR.",
      },
    ],
  },
  "canada-pr": {
    name: "Canada PR",
    countryCode: "CA",
    intro: "Become a Canadian Permanent Resident through Express Entry or Provincial Nominee Programs.",
    visas: [
      {
        code: "Express Entry",
        title: "Federal Skilled Worker",
        desc: "The fastest pathway to PR for skilled professionals.",
      },
      {
        code: "PNP",
        title: "Provincial Nominee Program",
        desc: "Immigrate via nomination by a Canadian province or territory.",
      },
      {
        code: "Family",
        title: "Family Sponsorship",
        desc: "Sponsor relatives to live, study and work in Canada.",
      },
    ],
  },
};

export const Route = createFileRoute("/migration/$program")({
  loader: ({ params }) => {
    const p = PROGS[params.program];
    if (!p) throw notFound();
    return p;
  },
  head: ({ params, loaderData }) => ({
    meta: [
      {
        title:
          MIGRATION_PROGRAM_TITLES[params.program] ??
          `${loaderData?.name ?? "Migration"} | Orbix Overseas Careers`,
      },
      {
        name: "description",
        content:
          MIGRATION_PROGRAM_DESCRIPTIONS[params.program] ??
          `${loaderData?.name ?? "Migration"} consultants in Kochi, Kerala — consultation with Orbix Overseas Careers.`,
      },
    ],
  }),
  component: ProgPage,
});

function ProgPage() {
  const p = Route.useLoaderData();
  const { setOpen } = useModal();
  return (
    <>
      <PageHero label="Migration" title={p.name} subtitle={p.intro} countryCode={p.countryCode} />
      <section className="py-20">
        <div className="container-px mx-auto max-w-6xl">
          <SectionEyebrow>MIGRATION</SectionEyebrow>
          <h2 className="font-display text-3xl text-[var(--navy)] mb-8">Visa pathways</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {p.visas.map((v: { code: string; title: string; desc: string }) => (
              <div key={v.code} className="card-lift bg-brand-white rounded-xl p-7">
                <div className="label-tag">{v.code}</div>
                <h3 className="font-display text-2xl text-[var(--navy)] mt-2 mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground">{v.desc}</p>
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
