import type { CountryCode } from "@/lib/countries";
import { CountryFlag } from "./CountryFlag";
import { SectionEyebrow } from "./SectionEyebrow";

export function PageHero({
  label,
  title,
  subtitle,
  countryCode,
}: {
  label: string;
  title: string;
  subtitle?: string;
  countryCode?: CountryCode;
}) {
  return (
    <section className="relative py-24 md:py-32 lg:py-36 bg-brand-dark text-white overflow-hidden">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(circle at 30% 20%, color-mix(in srgb, var(--accent-sky) 35%, transparent), transparent 55%)",
        }}
        aria-hidden
      />
      <div className="container-px mx-auto max-w-7xl relative">
        <SectionEyebrow tone="dark">{label}</SectionEyebrow>
        <div className="flex flex-wrap items-center gap-4 max-w-3xl">
          {countryCode && (
            <CountryFlag code={countryCode} size="xl" title={title} className="ring-2 ring-white/20" />
          )}
          <h1 className="font-display text-4xl md:text-6xl mt-0 leading-tight">{title}</h1>
        </div>
        {subtitle && <p className="text-white/80 mt-6 max-w-2xl text-lg leading-relaxed">{subtitle}</p>}
      </div>
    </section>
  );
}
