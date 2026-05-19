import { createFileRoute, notFound } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { useModal } from "@/components/site/modal-store";

const PROGS: Record<string, { name: string; flag: string; intro: string; visas: { code: string; title: string; desc: string }[] }> = {
  "australia-pr": {
    name: "Australia PR", flag: "🇦🇺",
    intro: "Make Australia your permanent home through skilled migration visas — 189, 190 or 491.",
    visas: [
      { code: "Subclass 189", title: "Skilled Independent", desc: "Permanent residency for invited skilled workers — no sponsorship required." },
      { code: "Subclass 190", title: "Skilled Nominated", desc: "Permanent residency for skilled workers nominated by an Australian state or territory." },
      { code: "Subclass 491", title: "Skilled Work Regional", desc: "Live and work in regional Australia for 5 years with a pathway to PR." },
    ],
  },
  "canada-pr": {
    name: "Canada PR", flag: "🇨🇦",
    intro: "Become a Canadian Permanent Resident through Express Entry or Provincial Nominee Programs.",
    visas: [
      { code: "Express Entry", title: "Federal Skilled Worker", desc: "The fastest pathway to PR for skilled professionals." },
      { code: "PNP", title: "Provincial Nominee Program", desc: "Immigrate via nomination by a Canadian province or territory." },
      { code: "Family", title: "Family Sponsorship", desc: "Sponsor relatives to live, study and work in Canada." },
    ],
  },
};

export const Route = createFileRoute("/migration/$program")({
  loader: ({ params }) => {
    const p = PROGS[params.program];
    if (!p) throw notFound();
    return p;
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.name ?? ""} — Orbix Overseas Careers` },
      { name: "description", content: loaderData?.intro ?? "" },
    ],
  }),
  component: ProgPage,
});

function ProgPage() {
  const p = Route.useLoaderData();
  const { setOpen } = useModal();
  return (
    <>
      <PageHero label="Migration" title={`${p.name} ${p.flag}`} subtitle={p.intro} />
      <section className="py-20">
        <div className="container-px mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-6">
            {p.visas.map((v: { code: string; title: string; desc: string }) => (
              <div key={v.code} className="card-lift bg-white rounded-xl p-7">
                <div className="label-tag">{v.code}</div>
                <h3 className="font-display text-2xl text-[var(--navy)] mt-2 mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground">{v.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <button onClick={()=>setOpen("consultation")} className="btn-gold px-8 py-3.5 rounded-md">Check Your Eligibility</button>
          </div>
        </div>
      </section>
    </>
  );
}
