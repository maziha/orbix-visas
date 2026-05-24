import { CheckCircle2 } from "lucide-react";
import { ClosingCtaPanel } from "./ClosingCtaPanel";
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

export function WhyOrbixClosingSection() {
  return (
    <section className="why-orbix-closing bg-brand-white py-16 md:py-24">
      <div className="container-px mx-auto max-w-7xl">
        <header className="mx-auto max-w-3xl text-center">
          <SectionEyebrow className="mx-auto block w-fit">WHY ORBIX</SectionEyebrow>
          <h2 className="mt-3 font-display text-3xl md:text-4xl text-[var(--navy)] leading-tight">
            Why Choose Orbix
          </h2>
          <p className="mt-4 text-base text-muted-foreground leading-relaxed">
            Personal guidance built around your goals — honest advice from day one.
          </p>
        </header>

        <dl className="why-orbix-closing__stats mt-12 grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4 md:gap-8">
          {STATS.map((stat) => (
            <div key={stat.label} className="why-orbix-closing__stat text-center">
              <dt
                className={`why-orbix-closing__stat-value font-display font-bold text-[var(--navy)] leading-none ${
                  stat.display.length > 2 ? "why-orbix-closing__stat-value--text" : ""
                }`}
              >
                {stat.display}
              </dt>
              <dd className="mt-2 text-sm text-muted-foreground leading-snug">{stat.label}</dd>
            </div>
          ))}
        </dl>

        <ul className="why-orbix-closing__points mt-12 mx-auto grid max-w-3xl gap-4 sm:grid-cols-2">
          {WHY_CHOOSE_POINTS.map((point) => (
            <li
              key={point}
              className="flex items-start gap-3 rounded-xl border border-[#e4e8f0] bg-brand-subtle px-5 py-4 text-sm text-muted-foreground leading-relaxed"
            >
              <CheckCircle2
                className="h-5 w-5 shrink-0 text-[var(--accent-sky)] mt-0.5"
                aria-hidden
              />
              <span>{point}</span>
            </li>
          ))}
        </ul>

        <ClosingCtaPanel />
      </div>
    </section>
  );
}
