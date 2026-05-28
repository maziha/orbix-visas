import { ArrowRight, CheckCircle2 } from "lucide-react";
import type { StudyCountryContent } from "@/lib/study-country-content";
import { STUDY_FEE_DISCLAIMER } from "@/lib/study-country-content";
import { STUDY_PAGE_CONTENT } from "@/lib/study-country-page-content";
import { studyCountryClosingCta } from "@/lib/closing-cta-presets";
import { BrandPromise, SectionEyebrow } from "./HomeSections";
import { CountryFlag } from "./CountryFlag";
import { presetFromStudyCountry } from "@/lib/enquiry-options";
import { useModal } from "./modal-store";

export function StudyCountryPageContent({ content }: { content: StudyCountryContent }) {
  const { openConsultation } = useModal();
  const page = STUDY_PAGE_CONTENT[content.slug];

  return (
    <>
      <section className="relative py-20 md:py-28 bg-brand-dark text-white overflow-hidden">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background:
              "radial-gradient(circle at 70% 30%, color-mix(in srgb, var(--accent-sky) 35%, transparent), transparent 55%)",
          }}
          aria-hidden
        />
        <div className="container-px mx-auto max-w-7xl relative">
          <SectionEyebrow tone="dark">STUDY ABROAD</SectionEyebrow>
          <div className="flex flex-wrap items-start gap-4 mt-2 max-w-4xl">
            <CountryFlag
              code={content.countryCode}
              size="xl"
              title={content.name}
              className="ring-2 ring-white/20 shrink-0"
            />
            <div className="min-w-0">
              <h1 className="font-display text-3xl md:text-5xl leading-tight">{page.heroTitle}</h1>
              <p className="text-lg text-white/80 mt-4 leading-relaxed">{content.heroSubtitle}</p>
            </div>
          </div>
          {/* DATA: Confirm this with client before publishing */}
          <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-3">
            {page.heroFacts.map((fact) => (
              <div
                key={fact.label}
                className="rounded-lg border border-white/20 bg-white/10 px-4 py-3"
              >
                <div className="text-xs font-semibold uppercase tracking-wider text-white/70">
                  {fact.label}
                </div>
                <div className="text-sm font-medium text-white mt-1 leading-snug">{fact.value}</div>
              </div>
            ))}
          </div>
          <button
            type="button"
            onClick={() => openConsultation(presetFromStudyCountry(content))}
            className="btn-primary mt-8 inline-flex items-center gap-2"
          >
            {page.finalCtaLabel}
            <ArrowRight className="h-4 w-4 shrink-0" />
          </button>
        </div>
      </section>

      <section className="py-16 bg-brand-white">
        <div className="container-px mx-auto max-w-4xl">
          <SectionEyebrow>WHY {content.name.toUpperCase()}?</SectionEyebrow>
          <h2 className="font-display text-3xl text-[var(--navy)] mt-2 mb-8">
            Why {content.name}?
          </h2>
          <ul className="space-y-5">
            {page.whyReasons.map((reason) => (
              <li key={reason} className="flex gap-3 text-muted-foreground leading-relaxed">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-[var(--accent-sky)] mt-0.5" />
                <span>{reason}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-16 bg-brand-subtle">
        <div className="container-px mx-auto max-w-5xl">
          <SectionEyebrow>COURSES</SectionEyebrow>
          <h2 className="font-display text-3xl text-[var(--navy)] mt-2 mb-4">
            Popular courses for Kerala students
          </h2>
          <p className="text-muted-foreground mb-8 max-w-3xl leading-relaxed">
            Course categories commonly chosen from Kerala — employment outcomes depend on your
            grades, English score, and the institution you select.
          </p>
          {/* DATA: Confirm this with client before publishing */}
          <ul className="space-y-4">
            {page.popularCourses.map((course) => (
              <li
                key={course.category}
                className="card-base bg-brand-white rounded-xl border border-border p-5 md:p-6"
              >
                <h3 className="font-display text-xl text-[var(--navy)]">{course.category}</h3>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                  {course.outcomeNote}
                </p>
              </li>
            ))}
          </ul>
          <p className="text-xs text-muted-foreground mt-6 leading-relaxed">{STUDY_FEE_DISCLAIMER}</p>
        </div>
      </section>

      <section className="py-16 bg-brand-white">
        <div className="container-px mx-auto max-w-4xl">
          <SectionEyebrow>VISA</SectionEyebrow>
          <h2 className="font-display text-3xl text-[var(--navy)] mt-2 mb-10">Visa process</h2>
          <ol className="space-y-0">
            {page.visaTimeline.map((s, i) => (
              <li key={s.step} className="relative flex gap-6 pb-10 last:pb-0">
                {i < page.visaTimeline.length - 1 && (
                  <span
                    className="absolute left-5 top-12 bottom-0 w-px bg-[var(--accent-sky)]/40"
                    aria-hidden
                  />
                )}
                <div
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-dark text-sm font-bold text-white z-[1]"
                  aria-hidden
                >
                  {s.step}
                </div>
                <div className="min-w-0 flex-1 pt-0.5">
                  <h3 className="font-display text-xl text-[var(--navy)]">{s.title}</h3>
                  <p className="text-muted-foreground mt-2 leading-relaxed">{s.detail}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-16 bg-brand-subtle">
        <div className="container-px mx-auto max-w-4xl">
          <SectionEyebrow>ORBIX SUPPORT</SectionEyebrow>
          <h2 className="font-display text-3xl text-[var(--navy)] mt-2 mb-8">How Orbix helps</h2>
          <ol className="space-y-4">
            {page.orbixHelps.map((item, i) => (
              <li
                key={item}
                className="flex gap-4 bg-brand-white rounded-xl border border-border p-5"
              >
                <span
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-dark text-sm font-bold text-white"
                  aria-hidden
                >
                  {i + 1}
                </span>
                <span className="text-muted-foreground leading-relaxed pt-0.5">{item}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <BrandPromise {...studyCountryClosingCta(content, page)} />
    </>
  );
}
