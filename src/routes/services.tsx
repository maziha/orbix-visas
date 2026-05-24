import { createFileRoute, Link, Outlet, useMatches } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { BrandPromise, SectionEyebrow } from "@/components/site/HomeSections";
import { otherServices, visaServices } from "@/components/site/services-data";
import { FAMILY_VISA_CONTENT, isFamilyVisaSlug } from "@/lib/family-visa-content";
import { headForPage } from "@/lib/site-meta";

export const Route = createFileRoute("/services")({
  head: () => headForPage("services"),
  component: Layout,
});

function Layout() {
  const matches = useMatches();
  const isChild = matches.some((m) => m.routeId.startsWith("/services/"));
  if (isChild) {
    return (
      <SiteLayout>
        <Outlet />
      </SiteLayout>
    );
  }
  return (
    <SiteLayout>
      <PageHero
        label="Services"
        title="Everything You Need, Under One Roof."
        subtitle="From your first counselling session to your post-landing settlement — we are with you at every step."
      />
      <section className="py-20">
        <div className="container-px mx-auto max-w-7xl">
          <SectionEyebrow>VISA SERVICES</SectionEyebrow>
          <h2 id="family-visa" className="font-display text-3xl text-[var(--navy)] mb-2 scroll-mt-28">
            Visa Services
          </h2>
          <p className="text-muted-foreground text-sm mt-1 mb-2 max-w-2xl">
            Each family visa guide covers eligibility, documents, typical timelines, and fee ranges.
            Explore a guide before you book a consultation.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">
            {visaServices.map((s) => {
              const Icon = s.icon;
              const guide = isFamilyVisaSlug(s.id) ? FAMILY_VISA_CONTENT[s.id] : null;
              return (
                <div
                  key={s.id}
                  id={s.id}
                  className={
                    s.hoverTimeline
                      ? "scroll-mt-28 card-hover-service card-base bg-brand-white rounded-xl p-6 pb-14 flex flex-col h-full"
                      : "scroll-mt-28 card-base bg-brand-white rounded-xl p-6 flex flex-col h-full"
                  }
                  data-timeline={s.hoverTimeline}
                >
                  <Icon className="h-8 w-8 text-[var(--accent-sky)] mb-3" />
                  <h3 className="font-display text-xl text-[var(--navy)] mb-2">{s.name}</h3>
                  {guide ? (
                    <>
                      <p className="service-card-desc text-sm text-[var(--accent-sky)] font-medium leading-snug">
                        {guide.previewLine}
                      </p>
                      <p className="service-card-desc text-sm text-muted-foreground mt-2 flex-1">{s.desc}</p>
                      {s.typicalProcessing && (
                        <>
                          {/* DATA: Confirm this with client before publishing */}
                          <p className="text-xs text-[var(--navy)] font-medium mt-4 leading-snug">
                            {s.typicalProcessing}
                          </p>
                          {s.keyDocuments && (
                            <p className="text-xs text-muted-foreground mt-1 leading-snug">{s.keyDocuments}</p>
                          )}
                        </>
                      )}
                      <Link
                        to="/services/$visa"
                        params={{ visa: s.id }}
                        className="service-card-action btn-secondary mt-6 self-start"
                      >
                        Explore guide →
                      </Link>
                      {s.hoverTimeline && (
                        <p
                          className="card-reveal-timeline"
                          data-timeline={s.hoverTimeline}
                          aria-hidden="true"
                        />
                      )}
                    </>
                  ) : (
                    <>
                      <p className="service-card-desc text-sm text-muted-foreground flex-1">{s.desc}</p>
                      {s.hoverTimeline && (
                        <p
                          className="card-reveal-timeline"
                          data-timeline={s.hoverTimeline}
                          aria-hidden="true"
                        />
                      )}
                    </>
                  )}
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
                  className="scroll-mt-28 card-base bg-brand-white rounded-xl p-6"
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
      <BrandPromise />
    </SiteLayout>
  );
}
