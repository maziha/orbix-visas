import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import type { Country } from "@/lib/countries";
import type { StudyCountryContent } from "@/lib/study-country-content";
import { cn } from "@/lib/utils";
import { CountryFlag } from "./CountryFlag";

type StudyDestinationCardProps = {
  country: Country;
  guide: StudyCountryContent;
  hoverStat: string;
};

export function StudyDestinationCard({ country, guide, hoverStat }: StudyDestinationCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    const prefersHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (prefersHover) return;

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { root: null, rootMargin: "-18% 0px -18% 0px", threshold: 0.45 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={cn(
        "card-hover-destination card-base bg-brand-white rounded-xl p-8 flex flex-col h-full",
        inView && "destination-card--in-view",
      )}
    >
      <CountryFlag code={country.code} size="lg" title={country.name} className="mb-3" />
      <h3 className="font-display text-2xl text-[var(--navy)]">{country.name}</h3>
      <p className="text-sm text-[var(--accent-sky)] font-medium mt-2 leading-snug">{guide.previewLine}</p>
      <p className="text-sm text-muted-foreground mt-3 flex-1 min-h-0 leading-relaxed">
        {guide.heroSubtitle.slice(0, 120)}…
      </p>
      <div className="destination-card-stat-slot">
        <p className="destination-card-stat">{hoverStat}</p>
      </div>
      <div className="destination-card-actions mt-4">
        <Link
          to="/study-abroad/$country"
          params={{ country: country.slug }}
          className="btn-secondary self-start"
        >
          Explore guide →
        </Link>
      </div>
    </div>
  );
}
