"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useReducedMotion } from "@/lib/motion/use-reduced-motion";
import type { Country } from "@/lib/countries";
import type { StudyCountryContent } from "@/lib/study-country-content";
import { springGentle } from "@/lib/motion/presets";
import { cn } from "@/lib/utils";
import { CountryFlag } from "./CountryFlag";

type StudyDestinationCardProps = {
  country: Country;
  guide: StudyCountryContent;
  hoverStat: string;
  index?: number;
  /** Parent RevealItem handles entrance — skip duplicate scroll animation */
  showOnMount?: boolean;
};

export function StudyDestinationCard({
  country,
  guide,
  hoverStat,
  index = 0,
  showOnMount = false,
}: StudyDestinationCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const reduced = useReducedMotion();

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

  const cardClassName = cn(
    "card-hover-destination card-base bg-brand-white rounded-xl p-8 flex flex-col h-full",
    inView && "destination-card--in-view",
  );

  if (showOnMount || reduced) {
    return (
      <div ref={cardRef} className={cardClassName}>
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
          <Link href={`/study-abroad/${country.slug}`} className="btn-secondary self-start">
            Explore guide →
          </Link>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      ref={cardRef}
      className={cardClassName}
      initial={{ opacity: 0, y: 32, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.08, margin: "0px 0px -40px 0px" }}
      transition={{ ...springGentle, delay: index * 0.08 }}
      whileHover={{ y: -10, scale: 1.02, transition: springGentle }}
      whileTap={{ scale: 0.98 }}
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
        <Link href={`/study-abroad/${country.slug}`} className="btn-secondary self-start">
          Explore guide →
        </Link>
      </div>
    </motion.div>
  );
}
