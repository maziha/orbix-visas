"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useReducedMotion } from "@/lib/motion/use-reduced-motion";
import type { Country } from "@/lib/countries";
import type { DestinationCardConfig } from "@/lib/destination-cards";
import { springGentle } from "@/lib/motion/presets";
import { CountryFlag } from "./CountryFlag";

function MapleLeafWatermark() {
  return (
    <svg
      className="destination-scroll-card__watermark"
      viewBox="0 0 512 512"
      aria-hidden
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="currentColor"
        d="M256 32c-8 48-32 72-56 88 8-40 8-72-8-96-24 32-48 56-72 64 16-32 16-64 0-88-32 24-56 56-72 88 24-8 48-8 72 0-24-40-24-72-8-104 32 16 56 40 72 72-24-16-48-24-72-24v200c32 8 56 24 72 48 16-40 40-64 72-72-8 32-8 64 8 96 24-32 48-56 72-64-16 32-16 64 0 88 32-24 56-56 72-88-24 8-48 8-72 0 24 40 24 72 8 104-32-16-56-40-72-72 24 16 48 24 72 24V32z"
      />
    </svg>
  );
}

function heroGradient(accentColor: string) {
  return `linear-gradient(155deg, color-mix(in srgb, ${accentColor} 72%, white) 0%, ${accentColor} 48%, color-mix(in srgb, ${accentColor} 82%, #040175) 100%)`;
}

export function DestinationScrollCard({
  country,
  config,
}: {
  country: Country;
  config: DestinationCardConfig;
}) {
  const reduced = useReducedMotion();

  return (
    <motion.article
      className="destination-scroll-card"
      whileHover={reduced ? undefined : { y: -8, scale: 1.02 }}
      whileTap={reduced ? undefined : { scale: 0.98 }}
      transition={springGentle}
    >
      <motion.div
        className="destination-scroll-card__hero"
        style={{ background: heroGradient(config.accentColor) }}
        whileHover={reduced ? undefined : { scale: 1.03 }}
        transition={springGentle}
      >
        {config.watermark === "maple" && <MapleLeafWatermark />}
        <CountryFlag
          code={country.code}
          size="2xl"
          title={country.name}
          className="destination-scroll-card__thumb relative z-[1] rounded-lg border-white/40 shadow-lg"
        />
      </motion.div>
      <div className="destination-scroll-card__body">
        <h3 className="destination-scroll-card__name">{country.name}</h3>
        <p className="destination-scroll-card__metric">{config.metric}</p>
        <div className="destination-scroll-card__tags">
          <Link href={`/study-abroad/${country.slug}`} className="destination-tag">
            Study
          </Link>
          {config.hasMigration && (
            <Link href={`/migration/${country.slug}-pr`} className="destination-tag">
              PR / Migration
            </Link>
          )}
        </div>
      </div>
    </motion.article>
  );
}
