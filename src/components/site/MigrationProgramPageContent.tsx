import { Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import type { MigrationProgramContent } from "@/lib/migration-program-content";
import { BrandPromise, SectionEyebrow } from "./HomeSections";
import { CountryFlag } from "./CountryFlag";
import { useModal } from "./modal-store";

export function MigrationProgramPageContent({ content }: { content: MigrationProgramContent }) {
  const { setOpen } = useModal();

  return (
    <>
      <section className="relative py-20 md:py-28 bg-brand-dark text-white overflow-hidden">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background:
              "radial-gradient(circle at 30% 20%, color-mix(in srgb, var(--accent-sky) 35%, transparent), transparent 55%)",
          }}
          aria-hidden
        />
        <div className="container-px mx-auto max-w-7xl relative">
          <SectionEyebrow tone="dark">MIGRATION</SectionEyebrow>
          <div className="flex flex-wrap items-start gap-4 mt-2 max-w-4xl">
            <CountryFlag code={content.countryCode} size="xl" title={content.name} className="ring-2 ring-white/20 shrink-0" />
            <div className="min-w-0">
              <h1 className="font-display text-3xl md:text-5xl leading-tight">{content.heroH1}</h1>
              <p className="text-xl md:text-2xl text-white/85 mt-4 font-medium leading-snug">{content.heroH2}</p>
            </div>
          </div>
          {/* DATA: Confirm this with client before publishing */}
          <div className="mt-8 flex flex-col sm:flex-row flex-wrap gap-3">
            {content.heroStatPills.map((pill) => (
              <span
                key={pill}
                className="inline-flex rounded-lg border border-white/20 bg-white/10 px-4 py-2 text-sm text-white/90"
              >
                {pill}
              </span>
            ))}
          </div>
          <button
            type="button"
            onClick={() => setOpen("consultation")}
            className="btn-primary mt-8 inline-flex items-center gap-2"
          >
            {content.primaryCtaLabel}
            <ArrowRight className="h-4 w-4 shrink-0" />
          </button>
        </div>
      </section>

      <section className="py-16 bg-brand-white">
        <div className="container-px mx-auto max-w-6xl">
          <SectionEyebrow>MIGRATION PATHWAYS</SectionEyebrow>
          <h2 className="font-display text-3xl text-[var(--navy)] mt-2 mb-8">Which pathway is right for you?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {content.pathwayCards.map((card) => (
              <div
                key={card.id}
                className="card-base migration-program-card bg-brand-subtle rounded-xl p-7 flex flex-col h-full"
              >
                <h3 className="font-display text-xl text-[var(--navy)]">{card.title}</h3>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed flex-1">
                  <span className="font-semibold text-[var(--navy)]">Who qualifies: </span>
                  {card.whoQualifies}
                </p>
                {/* DATA: Confirm this with client before publishing */}
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                  <span className="font-semibold text-[var(--navy)]">Timeline: </span>
                  {card.timeline}
                </p>
                <Link
                  to="/migration"
                  hash={card.startHash}
                  className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-[var(--accent-sky)] hover:underline"
                >
                  Start here →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-brand-subtle">
        <div className="container-px mx-auto max-w-4xl">
          <SectionEyebrow>PROCESS</SectionEyebrow>
          <h2 className="font-display text-3xl text-[var(--navy)] mt-2 mb-10">What to expect</h2>
          {/* DATA: Confirm this with client before publishing */}
          <ol className="space-y-0">
            {content.expectSteps.map((s, i) => (
              <li key={s.step} className="relative flex gap-6 pb-10 last:pb-0">
                {i < content.expectSteps.length - 1 && (
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
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-display text-xl text-[var(--navy)]">{s.title}</h3>
                    <span className="text-sm font-semibold text-[var(--accent-sky)] shrink-0">{s.duration}</span>
                  </div>
                  <p className="text-muted-foreground mt-2 leading-relaxed">{s.detail}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-16 bg-brand-white">
        <div className="container-px mx-auto max-w-3xl">
          <SectionEyebrow>DOCUMENTS</SectionEyebrow>
          <h2 className="font-display text-3xl text-[var(--navy)] mt-2 mb-6">Documents you will need</h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">{content.documentsNote}</p>
          {/* DATA: Confirm this with client before publishing */}
          <ul className="space-y-3 rounded-xl border border-border bg-brand-subtle p-6 md:p-8">
            {content.documents.map((item) => (
              <li key={item} className="flex gap-3 text-muted-foreground leading-relaxed">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-[var(--accent-sky)] mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <BrandPromise />
    </>
  );
}
