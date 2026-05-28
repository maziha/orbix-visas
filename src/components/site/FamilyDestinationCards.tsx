import type { CSSProperties } from "react";
import { CheckCircle2 } from "lucide-react";
import type { FamilyVisaDestination } from "@/lib/family-visa-content";

type FamilyDestinationCardsProps = {
  destinations: FamilyVisaDestination[];
};

export function FamilyDestinationCards({ destinations }: FamilyDestinationCardsProps) {
  const maxRequirements = Math.max(...destinations.map((d) => d.requirements.length), 1);
  const gridRows = 4 + maxRequirements;

  return (
    <div
      className="family-dest-grid"
      style={{ "--family-dest-rows": gridRows } as CSSProperties}
      data-req-rows={maxRequirements}
    >
      {destinations.map((destination) => {
        const paddingCount = maxRequirements - destination.requirements.length;

        return (
          <article
            key={destination.country}
            className="family-dest-card card-base bg-brand-white rounded-xl p-6 sm:p-7"
          >
            <h3 className="family-dest-card__country font-display text-xl text-[var(--navy)]">
              {destination.country}
            </h3>
            <p className="family-dest-card__visa text-sm font-medium text-[var(--accent-sky)] leading-snug">
              {destination.visaLabel}
            </p>

            <div className="family-dest-card__metric family-dest-card__metric--timeline">
              <span className="family-dest-card__metric-label">Timeline</span>
              <p className="family-dest-card__metric-value">{destination.timeline}</p>
            </div>

            <div className="family-dest-card__metric family-dest-card__metric--costs">
              <span className="family-dest-card__metric-label">Costs</span>
              <p className="family-dest-card__metric-value">{destination.costNote}</p>
            </div>

            {destination.requirements.map((requirement) => (
              <div key={requirement} className="family-dest-card__req">
                <CheckCircle2 className="family-dest-card__req-icon" aria-hidden />
                <p className="family-dest-card__req-text">{requirement}</p>
              </div>
            ))}

            {Array.from({ length: paddingCount }, (_, index) => (
              <div
                key={`pad-${destination.country}-${index}`}
                className="family-dest-card__req family-dest-card__req--pad"
                aria-hidden
              />
            ))}
          </article>
        );
      })}
    </div>
  );
}
