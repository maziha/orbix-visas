import { createFileRoute, notFound } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { useModal } from "@/components/site/modal-store";

const DATA: Record<string, { name: string; flag: string; intro: string; highlights: string[] }> = {
  canada: { name:"Canada", flag:"🇨🇦", intro:"Globally recognized institutes, affordable tuition, ample scholarships & work opportunities make Canada one of the most popular study destinations.", highlights:["Post-graduation work permits up to 3 years","Pathway to Permanent Residency","Affordable cost of living","Multicultural & welcoming society"] },
  australia: { name:"Australia", flag:"🇦🇺", intro:"Outstanding training facilities, strong student support, abundant scholarships and a world-class lifestyle.", highlights:["Top 100 global universities","Post-study work rights 2–4 years","Strong job market","Beautiful coastal cities"] },
  "new-zealand": { name:"New Zealand", flag:"🇳🇿", intro:"Research-driven education, diverse culture, safe study environment and affordable living costs.", highlights:["All 8 universities in Top 500","Post-study work visa 3 years","Safe & peaceful country","Stunning natural beauty"] },
  uk: { name:"UK", flag:"🇬🇧", intro:"Home to many of the world's top-ranked universities and a globally respected qualification.", highlights:["Graduate Route 2-year work visa","World-leading research","Shorter degree programs","Cultural diversity"] },
  france: { name:"France", flag:"🇫🇷", intro:"A hotbed of innovation & research, with rich culture and a thriving student life.", highlights:["Low tuition at public universities","Top business schools","Schengen access","Rich cultural heritage"] },
  germany: { name:"Germany", flag:"🇩🇪", intro:"Highly regarded education, low-cost tuition, and safe multicultural cities.", highlights:["Tuition-free public universities","Strong engineering & STEM","18-month job seeker visa","Excellent public transport"] },
  poland: { name:"Poland", flag:"🇵🇱", intro:"Well-respected universities with the lowest tuition fees and cost of living in Europe.", highlights:["EU-recognized degrees","Affordable tuition & living","Schengen access","Growing tech & startup hub"] },
};

export const Route = createFileRoute("/study-abroad/$country")({
  loader: ({ params }) => {
    const d = DATA[params.country];
    if (!d) throw notFound();
    return d;
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `Study in ${loaderData?.name ?? ""} — Orbix Overseas Careers` },
      { name: "description", content: loaderData?.intro ?? "" },
    ],
  }),
  component: CountryPage,
});

function CountryPage() {
  const d = Route.useLoaderData();
  const { setOpen } = useModal();
  return (
    <>
      <PageHero label="Study Abroad" title={`Study in ${d.name} ${d.flag}`} subtitle={d.intro} />
      <section className="py-20">
        <div className="container-px mx-auto max-w-5xl">
          <h2 className="font-display text-3xl text-[var(--navy)] mb-8">Why {d.name}?</h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {d.highlights.map((h: string) => (
              <div key={h} className="card-lift bg-white rounded-xl p-6 flex items-start gap-3">
                <div className="h-2 w-2 rounded-full bg-[var(--gold)] mt-2 shrink-0" />
                <p className="text-foreground">{h}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <button onClick={()=>setOpen("consultation")} className="btn-gold px-8 py-3.5 rounded-md">Get Free Counselling</button>
          </div>
        </div>
      </section>
    </>
  );
}
