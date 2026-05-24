import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { FAMILY_VISA_CONTENT, FAMILY_VISA_SLUGS } from "@/lib/family-visa-content";
import { useModal } from "./modal-store";
import { SectionEyebrow } from "./SectionEyebrow";

export function FamilyVisaHighlightSection() {
  const { setOpen } = useModal();

  return (
    <section className="family-highlight-section bg-brand-subtle py-16 md:py-20">
      <div className="container-px mx-auto max-w-7xl">
        <div className="flex flex-col overflow-hidden rounded-2xl border border-[#e4e8f0] bg-brand-white lg:flex-row lg:min-h-[28rem]">
          <div className="family-highlight-section__copy bg-transparent lg:w-[55%] px-6 py-12 md:px-10 md:py-16 lg:px-12">
            <SectionEyebrow>VISA SERVICES</SectionEyebrow>
            <h2 className="mt-3 font-display text-3xl md:text-4xl text-[var(--navy)] leading-tight">
              Bringing Family Overseas
            </h2>
            <h3 className="mt-4 font-display text-2xl text-[var(--navy)] leading-snug">
              Spouse Visa &amp; Family Reunification
            </h3>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Reunite with your spouse, parents, or dependents abroad with clear guidance on eligibility,
              documentation, and timelines.
            </p>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Our counsellors walk you through each step so you know what to expect before you apply.
            </p>
            <button
              type="button"
              onClick={() => setOpen("consultation")}
              className="btn-primary mt-8 inline-flex items-center gap-2"
            >
              Book a Consultation <ArrowRight className="h-4 w-4" />
            </button>
            <p className="mt-4 text-sm">
              <Link
                to="/services"
                hash="family-visa"
                className="font-semibold text-[var(--accent-sky)] hover:underline"
              >
                Compare all family visa guides →
              </Link>
            </p>
          </div>

          <div className="family-highlight-section__panel bg-brand-dark lg:w-[45%] px-6 py-10 md:px-10 md:py-14 flex flex-col justify-center gap-4">
            {FAMILY_VISA_SLUGS.map((slug) => {
              const guide = FAMILY_VISA_CONTENT[slug];
              return (
                <Link
                  key={slug}
                  to="/services/$visa"
                  params={{ visa: slug }}
                  className="family-visa-panel-card group"
                >
                  <div className="min-w-0 flex-1">
                    <h4 className="font-display text-lg font-semibold text-[var(--navy)]">{guide.name}</h4>
                    <p className="mt-1 text-sm text-muted-foreground leading-snug line-clamp-2">
                      {guide.previewLine}
                    </p>
                  </div>
                  <span className="family-visa-panel-card__arrow shrink-0 text-xl font-semibold text-[var(--navy)] transition-transform duration-200 group-hover:translate-x-0.5">
                    →
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
