import type { Metadata } from "next";
import { PageHero } from "@/components/site/PageHero";
import { Achievements } from "@/components/site/HomeSections";
import { SectionEyebrow } from "@/components/site/SectionEyebrow";
import { Reveal } from "@/components/motion";
import { COMPANY_NAME, CONTACT_PHONE, CONTACT_EMAIL, COMPANY_ADDRESS_SHORT } from "@/lib/contact-info";
import { BREADCRUMBS } from "@/lib/breadcrumbs";
import { metadataForPage } from "@/lib/metadata";
import { SiteContainer } from "@/components/site/SiteContainer";

export const metadata: Metadata = metadataForPage("about");

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="About Us"
        title="Built on Trust. Driven by Hope."
        subtitle="A new consultancy focused on clear guidance, honest advice, and support you can count on."
        breadcrumbs={BREADCRUMBS.about()}
      />
      <section className="py-16 md:py-20">
        <SiteContainer className="prose-lg space-y-6 text-foreground">
          <Reveal>
            <SectionEyebrow>ABOUT US</SectionEyebrow>
            <h2 className="font-display text-3xl text-[var(--navy)]">Our Story</h2>
            <p className="text-muted-foreground leading-relaxed">
              {COMPANY_NAME} was founded with one mission — to be a trusted bridge between Indian
              aspirants and global opportunities. We are building our practice on transparency,
              careful preparation, and counsellors who take the time to understand your goals before
              recommending a path forward.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <SectionEyebrow className="mt-8">OUR MISSION</SectionEyebrow>
            <h2 className="font-display text-3xl text-[var(--navy)]">Our Mission</h2>
            <p className="text-muted-foreground leading-relaxed">
              We exist to take away the fear, complexity, and confusion of moving abroad — replacing
              it with clarity, confidence, and hope.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <SectionEyebrow className="mt-12">WHY TRUST US</SectionEyebrow>
            <h2 className="font-display text-3xl text-[var(--navy)]">Our Commitments</h2>
            <ul className="mt-4 space-y-3">
              {[
                "Honest eligibility assessments — we tell you if a pathway is unlikely before you pay for anything",
                "No hidden fees — all consultancy charges are disclosed upfront in writing",
                "One dedicated counsellor per client — no handoffs between staff mid-process",
                "Timeline updates every two weeks — you are never left wondering about your application status",
                "GSTIN registered — 32GFUPD6561J1Z0 — because a legitimate business should be verifiable",
              ].map((point) => (
                <li key={point} className="flex gap-3 text-muted-foreground leading-relaxed">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--accent-sky)] shrink-0" />
                  {point}
                </li>
              ))}
            </ul>
          </Reveal>
        </SiteContainer>
      </section>

      <section className="py-16 md:py-20 bg-brand-subtle">
        <SiteContainer>
          <Reveal>
            <SectionEyebrow>OUR TEAM</SectionEyebrow>
            <h2 className="font-display text-3xl text-[var(--navy)] mb-8">Meet our founder</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="bg-brand-white rounded-2xl border border-border p-8 flex flex-col sm:flex-row gap-8">
              <div className="shrink-0 flex flex-col items-center sm:items-start gap-3">
                <div className="h-24 w-24 rounded-full bg-brand-dark flex items-center justify-center text-white text-3xl font-display font-bold select-none">
                  AK
                </div>
                <div className="text-center sm:text-left">
                  <p className="font-semibold text-[var(--navy)]">Anup Kannan</p>
                  <p className="text-sm text-muted-foreground">Founder & Lead Consultant</p>
                  <p className="text-xs text-[var(--accent-sky)] font-medium mt-1">{COMPANY_ADDRESS_SHORT}</p>
                </div>
              </div>
              <div className="flex-1 space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {COMPANY_NAME} was founded by Anup Kannan with a clear conviction: Kerala professionals
                  deserve immigration advice that is honest, specific to their situation, and delivered
                  without the pressure tactics common in this industry.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Anup built {COMPANY_NAME} to be the consultancy he wished had existed when people around
                  him were navigating Canada PR, Australia skilled migration, and overseas education — often
                  receiving contradictory advice and paying high fees for minimal guidance.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Every client assessment at {COMPANY_NAME} is personally reviewed before a pathway is
                  recommended. We do not outsource this step.
                </p>
                <div className="pt-2 flex flex-wrap gap-4 text-sm">
                  <a href={`tel:${CONTACT_PHONE.replace(/\s/g, "")}`} className="text-[var(--accent-sky)] font-medium hover:underline">
                    {CONTACT_PHONE}
                  </a>
                  <a href={`mailto:${CONTACT_EMAIL}`} className="text-muted-foreground hover:text-[var(--navy)] transition-colors">
                    {CONTACT_EMAIL}
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </SiteContainer>
      </section>

      <Achievements />
    </>
  );
}
