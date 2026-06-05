"use client";

import { CheckCircle2 } from "lucide-react";
import type { FamilyVisaContent } from "@/lib/family-visa-content";
import { BREADCRUMBS } from "@/lib/breadcrumbs";
import { familyVisaClosingCta } from "@/lib/closing-cta-presets";
import { BrandPromise, SectionEyebrow } from "./HomeSections";
import { FamilyDestinationCards } from "./FamilyDestinationCards";
import { FaqSection } from "./FaqSection";
import { PageHero } from "./PageHero";
import { SiteContainer } from "./SiteContainer";

export function FamilyVisaPageContent({ content }: { content: FamilyVisaContent }) {

  return (
    <article>
      <PageHero
        label="Visa Services"
        title={content.heroH1}
        subtitle={content.heroSubtitle}
        breadcrumbs={BREADCRUMBS.familyVisa(content.slug, content.name)}
      />

      <section className="py-16 md:py-20 bg-brand-white">
        <SiteContainer>
          <SectionEyebrow>VISA SERVICES</SectionEyebrow>
          <p className="text-muted-foreground text-lg leading-relaxed">{content.overview}</p>
          <p className="text-muted-foreground text-lg leading-relaxed mt-5">{content.introduction}</p>
          <p className="text-xs text-muted-foreground mt-4 leading-relaxed">{content.costDisclaimer}</p>
        </SiteContainer>
      </section>

      <section className="py-16 md:py-20 bg-brand-subtle">
        <SiteContainer>
          <SectionEyebrow>QUICK FACTS</SectionEyebrow>
          <h2 className="font-display text-3xl text-[var(--navy)] mb-8">At a glance</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {content.quickFacts.map((f) => (
              <div key={f.label} className="bg-brand-white rounded-xl border border-border p-5">
                <div className="text-xs font-semibold uppercase tracking-wider text-[var(--accent-sky)]">
                  {f.label}
                </div>
                <div className="font-display text-lg text-[var(--navy)] mt-2 leading-snug">{f.value}</div>
              </div>
            ))}
          </div>
        </SiteContainer>
      </section>

      <section className="py-16 md:py-20 bg-brand-white">
        <SiteContainer className="grid lg:grid-cols-2 gap-12">
          <div>
            <SectionEyebrow>ELIGIBILITY</SectionEyebrow>
            <h2 className="font-display text-3xl text-[var(--navy)] mb-6">Can you apply?</h2>
            <ul className="space-y-3">
              {content.eligibility.map((item) => (
                <li key={item} className="flex gap-3 text-muted-foreground leading-relaxed">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-[var(--accent-sky)] mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionEyebrow>DOCUMENTS</SectionEyebrow>
            <h2 className="font-display text-3xl text-[var(--navy)] mb-6">Documents to prepare now</h2>
            <ul className="space-y-3">
              {content.documents.map((item) => (
                <li key={item} className="flex gap-3 text-muted-foreground leading-relaxed">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-[var(--accent-sky)] mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </SiteContainer>
      </section>

      <section className="py-16 md:py-20 bg-brand-subtle">
        <SiteContainer>
          <SectionEyebrow>BY DESTINATION</SectionEyebrow>
          <h2 className="font-display text-3xl text-[var(--navy)] mb-4">Rules by sponsor country</h2>
          <p className="text-muted-foreground mb-10 max-w-3xl leading-relaxed">
            High-level summary for common destinations — immigration rules change. Orbix confirms
            current requirements for your sponsor&apos;s status at consultation.
          </p>
          <FamilyDestinationCards destinations={content.destinations} />
          <p className="text-xs text-muted-foreground mt-6 leading-relaxed">{content.costDisclaimer}</p>
        </SiteContainer>
      </section>

      <section className="py-16 md:py-20 bg-brand-white">
        <SiteContainer>
          <SectionEyebrow>TIMELINE</SectionEyebrow>
          <h2 className="font-display text-3xl text-[var(--navy)] mb-6">Typical timeline</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {content.timeline.map((t) => (
              <div key={t.label} className="bg-brand-subtle rounded-xl border border-border p-5 text-center">
                <div className="text-sm font-semibold uppercase tracking-wider text-[var(--accent-sky)]">
                  {t.label}
                </div>
                <div className="font-display text-2xl text-[var(--navy)] mt-2">{t.duration}</div>
              </div>
            ))}
          </div>
          <p className="text-sm text-muted-foreground mt-6 leading-relaxed">{content.timelineNote}</p>
        </SiteContainer>
      </section>

      <section className="py-16 md:py-20 bg-brand-subtle">
        <SiteContainer>
          <SectionEyebrow>PROCESS</SectionEyebrow>
          <h2 className="font-display text-3xl text-[var(--navy)] mb-10">How Orbix guides your application</h2>
          <ol className="space-y-6">
            {content.processSteps.map((s) => (
              <li key={s.step} className="flex gap-5">
                <div
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-dark text-sm font-bold text-white"
                  aria-hidden
                >
                  {s.step}
                </div>
                <div>
                  <h3 className="font-display text-xl text-[var(--navy)]">{s.title}</h3>
                  <p className="text-muted-foreground mt-1 leading-relaxed">{s.detail}</p>
                </div>
              </li>
            ))}
          </ol>
        </SiteContainer>
      </section>

      {content.keralaContext && (
        <section className="py-16 md:py-20 bg-brand-white">
          <SiteContainer>
            <SectionEyebrow>KERALA FAMILIES</SectionEyebrow>
            <h2 className="font-display text-3xl text-[var(--navy)] mb-6">
              Common situations for families from Kerala
            </h2>
            <p className="text-muted-foreground leading-relaxed">{content.keralaContext}</p>
            {/* TODO: Add verified reunification stories when client provides them */}
          </SiteContainer>
        </section>
      )}

      <section className="py-16 md:py-20 bg-brand-subtle">
        <SiteContainer>
          <SectionEyebrow>ORBIX SUPPORT</SectionEyebrow>
          <h2 className="font-display text-3xl text-[var(--navy)] mb-6">What we handle for you</h2>
          <ul className="grid sm:grid-cols-2 gap-4">
            {content.orbixRole.map((item) => (
              <li
                key={item}
                className="flex gap-3 bg-brand-white rounded-lg border border-border p-4 text-sm text-muted-foreground leading-relaxed"
              >
                <CheckCircle2 className="h-4 w-4 shrink-0 text-[var(--accent-sky)] mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </SiteContainer>
      </section>

      <FaqSection
        faq={content.faq}
        title={`${content.name} from Kerala — common questions`}
      />

      <BrandPromise {...familyVisaClosingCta(content)} />
    </article>
  );
}
