import { createFileRoute, Link, Outlet } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { BrandPromise, SectionEyebrow } from "@/components/site/HomeSections";
import { otherServices, visaServices } from "@/components/site/services-data";
import { FAMILY_VISA_CONTENT, isFamilyVisaSlug } from "@/lib/family-visa-content";
import { SITE_CHILD_ROUTE, useActiveChildRoute } from "@/lib/nested-layout";
import { headForPage } from "@/lib/site-meta";
import { HoverLift, Reveal, RevealStagger } from "@/components/motion";

export const Route = createFileRoute("/_site/services")({
  head: () => headForPage("services"),
  component: Layout,
});

function Layout() {
  const visaRoute = useActiveChildRoute(SITE_CHILD_ROUTE.serviceVisa);
  if (visaRoute) return <Outlet />;

  return (
    <>
      <PageHero
        label="Services"
        title="Everything You Need, Under One Roof."
        subtitle="From your first counselling session to your post-landing settlement — we are with you at every step."
      />
      <section className="py-20">
        <div className="container-px mx-auto max-w-7xl">
          <Reveal>
            <SectionEyebrow>VISA SERVICES</SectionEyebrow>
            <h2 id="family-visa" className="font-display text-3xl text-[var(--navy)] mb-2 scroll-mt-28">
              Visa Services
            </h2>
            <p className="text-muted-foreground text-sm mt-1 mb-2 max-w-2xl">
              Each family visa guide covers eligibility, documents, typical timelines, and fee ranges.
              Explore a guide before you book a consultation.
            </p>
          </Reveal>
          <RevealStagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">
            {visaServices.map((s, index) => {
              const Icon = s.icon;
              const guide = isFamilyVisaSlug(s.id) ? FAMILY_VISA_CONTENT[s.id] : null;
              return (
                <HoverLift
                  key={s.id}
                  index={index}
                  className="scroll-mt-28 card-hover-service card-base bg-brand-white rounded-xl p-6 flex flex-col h-full"
                  id={s.id}
                >
                  <Icon className="h-8 w-8 text-[var(--accent-sky)] mb-3" aria-hidden />
                  <h3 className="font-display text-xl text-[var(--navy)] mb-2">{s.name}</h3>
                  {(guide?.previewLine ?? s.previewLine) && (
                    <p className="text-sm text-[var(--accent-sky)] font-medium leading-snug">
                      {guide?.previewLine ?? s.previewLine}
                    </p>
                  )}
                  <p
                    className={`text-sm text-muted-foreground leading-relaxed flex-1 ${guide?.previewLine ?? s.previewLine ? "mt-2" : ""}`}
                  >
                    {s.desc}
                  </p>
                  {s.typicalProcessing && (
                    <p className="text-xs font-medium text-[var(--navy)] mt-4 leading-snug">
                      {s.typicalProcessing}
                    </p>
                  )}
                  {s.keyDocuments && (
                    <p className="text-xs text-muted-foreground mt-1 leading-snug">{s.keyDocuments}</p>
                  )}
                  {guide ? (
                    <Link
                      to="/services/$visa"
                      params={{ visa: s.id }}
                      className="btn-secondary mt-6 self-start"
                    >
                      Explore guide →
                    </Link>
                  ) : null}
                </HoverLift>
              );
            })}
          </RevealStagger>
          <Reveal delay={0.1}>
            <SectionEyebrow className="mt-16">OTHER SERVICES</SectionEyebrow>
            <h2 className="font-display text-3xl text-[var(--navy)] mb-2 scroll-mt-28">Other Services</h2>
          </Reveal>
          <RevealStagger className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-6">
            {otherServices.map((s, index) => {
              const Icon = s.icon;
              return (
                <HoverLift
                  key={s.id}
                  index={index}
                  id={s.id}
                  className="scroll-mt-28 card-base bg-brand-white rounded-xl p-6"
                >
                  <Icon className="h-8 w-8 text-[var(--accent-sky)] mb-3" aria-hidden />
                  <h3 className="font-display text-lg text-[var(--navy)] mb-2">{s.name}</h3>
                  <p className="text-sm text-muted-foreground">{s.desc}</p>
                </HoverLift>
              );
            })}
          </RevealStagger>
        </div>
      </section>
      <BrandPromise />
    </>
  );
}
