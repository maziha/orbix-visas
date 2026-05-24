import { CheckCircle2 } from "lucide-react";
import { SectionEyebrow } from "./SectionEyebrow";

const STATS = [
  { display: "7", label: "Study destinations" },
  { display: "2", label: "PR migration pathways" },
  { display: "Free", label: "First consultation" },
  { display: "Kochi", label: "Based in Kerala" },
] as const;

const WHY_CHOOSE_POINTS = [
  "Full visa guidance from shortlisting to lodgement",
  "1-on-1 counsellor support throughout your application",
] as const;

export function WhyOrbixStatsSection() {
  return (
    <section className="why-orbix-stats-section bg-brand-white pt-16 md:pt-20 pb-10 md:pb-12">
      <div className="container-px mx-auto max-w-7xl text-center">
        <SectionEyebrow className="mx-auto block w-fit">WHY ORBIX</SectionEyebrow>
        <h2 className="mt-3 font-display text-3xl md:text-4xl text-[var(--navy)] leading-tight">
          Why Choose Orbix
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-base text-muted-foreground leading-relaxed">
          Personal guidance built around your goals — honest advice from day one.
        </p>
        <div className="mt-12 grid grid-cols-2 gap-10 md:grid-cols-4 md:gap-8">
          {STATS.map((stat) => (
            <div key={stat.label}>
              <div
                className={`why-orbix-stats-section__value font-display font-bold text-[var(--navy)] leading-none ${
                  stat.display.length > 2 ? "why-orbix-stats-section__value--text" : ""
                }`}
              >
                {stat.display}
              </div>
              <p className="mt-2 text-sm text-muted-foreground leading-snug">{stat.label}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 max-w-2xl mx-auto text-left">
          <p className="text-base font-semibold text-[var(--navy)] leading-relaxed text-center md:text-left">
            Why choose us
          </p>
          <ul className="mt-4 space-y-3">
            {WHY_CHOOSE_POINTS.map((point) => (
              <li key={point} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                <CheckCircle2
                  className="h-5 w-5 shrink-0 text-[var(--accent-sky)] mt-0.5"
                  aria-hidden
                />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
