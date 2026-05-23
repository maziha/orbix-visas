import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { ConsultationCta, SectionEyebrow } from "@/components/site/HomeSections";
import { otherServices, visaServices } from "@/components/site/services-data";
import { PAGE_DESCRIPTIONS } from "@/lib/page-descriptions";
import { PAGE_TITLES } from "@/lib/page-titles";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: PAGE_TITLES.services },
      { name: "description", content: PAGE_DESCRIPTIONS.services },
    ],
  }),
  component: Services,
});

function Services() {
  return (
    <SiteLayout>
      <PageHero label="Services" title="Everything You Need, Under One Roof." subtitle="From your first counselling session to your post-landing settlement — we are with you at every step." />
      <section className="py-20">
        <div className="container-px mx-auto max-w-7xl">
          <SectionEyebrow>VISA SERVICES</SectionEyebrow>
          <h2 id="family-visa" className="font-display text-3xl text-[var(--navy)] mb-2 scroll-mt-28">
            Visa Services
          </h2>
          <p className="text-muted-foreground text-sm mt-1 mb-2">
            Spouse, parent, dependent, and other family reunification pathways.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">
            {visaServices.map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.id}
                  id={s.id}
                  className="scroll-mt-28 card-lift bg-brand-white rounded-xl p-6"
                >
                  <Icon className="h-8 w-8 text-[var(--accent-sky)] mb-3" />
                  <h3 className="font-display text-xl text-[var(--navy)] mb-2">{s.name}</h3>
                  <p className="text-sm text-muted-foreground">{s.desc}</p>
                </div>
              );
            })}
          </div>
          <SectionEyebrow className="mt-16">OTHER SERVICES</SectionEyebrow>
          <h2 className="font-display text-3xl text-[var(--navy)] mb-2 scroll-mt-28">Other Services</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-6">
            {otherServices.map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.id}
                  id={s.id}
                  className="scroll-mt-28 card-lift bg-brand-white rounded-xl p-6"
                >
                  <Icon className="h-8 w-8 text-[var(--accent-sky)] mb-3" />
                  <h3 className="font-display text-lg text-[var(--navy)] mb-2">{s.name}</h3>
                  <p className="text-sm text-muted-foreground">{s.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <ConsultationCta />
    </SiteLayout>
  );
}
