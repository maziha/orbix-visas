"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { CountryCode } from "@/lib/countries";
import { blurFade, springGentle, staggerContainer, staggerItem } from "@/lib/motion/presets";
import { AmbientTravelBg } from "@/components/motion";
import { CountryFlag } from "./CountryFlag";
import { PageBreadcrumbs } from "./PageBreadcrumbs";
import { SectionEyebrow } from "./SectionEyebrow";
import { SiteContainer } from "./SiteContainer";
import type { BreadcrumbItem } from "@/lib/breadcrumbs";

export function PageHero({
  label,
  title,
  subtitle,
  countryCode,
  breadcrumbs,
  meta,
  compact = false,
}: {
  label: string;
  title: string;
  subtitle?: string;
  countryCode?: CountryCode;
  breadcrumbs?: BreadcrumbItem[];
  /** Reading time, date, etc. — shown below the eyebrow */
  meta?: ReactNode;
  /** Shorter padding for detail pages (blog articles, country pages) */
  compact?: boolean;
}) {
  const reduced = useReducedMotion();
  const sectionPadding = compact
    ? "py-20 md:py-28"
    : "py-24 md:py-32 lg:py-36";

  return (
    <section className={`relative ${sectionPadding} bg-brand-dark text-white overflow-hidden`}>
      <AmbientTravelBg variant="hero" className="absolute inset-0 text-[var(--accent-sky)]" />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(circle at 30% 20%, color-mix(in srgb, var(--accent-sky) 35%, transparent), transparent 55%)",
        }}
        aria-hidden
      />
      <SiteContainer className="relative">
        {reduced ? (
          <>
            {breadcrumbs && <PageBreadcrumbs items={breadcrumbs} tone="dark" />}
            <SectionEyebrow tone="dark">{label}</SectionEyebrow>
            {meta ? <div className="mt-4 mb-1">{meta}</div> : null}
            <HeroTitle title={title} countryCode={countryCode} compact={compact} />
            {subtitle && (
              <p
                className={`text-white/80 text-lg leading-relaxed ${compact ? "mt-5 max-w-3xl" : "mt-6 max-w-2xl"}`}
              >
                {subtitle}
              </p>
            )}
          </>
        ) : (
          <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
            {breadcrumbs && (
              <motion.div variants={staggerItem}>
                <PageBreadcrumbs items={breadcrumbs} tone="dark" />
              </motion.div>
            )}
            <motion.div variants={staggerItem}>
              <SectionEyebrow tone="dark" static>
                {label}
              </SectionEyebrow>
            </motion.div>
            {meta ? (
              <motion.div className="mt-4 mb-1" variants={staggerItem}>
                {meta}
              </motion.div>
            ) : null}
            <motion.div variants={blurFade} transition={springGentle}>
              <HeroTitle title={title} countryCode={countryCode} compact={compact} />
            </motion.div>
            {subtitle && (
              <motion.p
                className={`text-white/80 text-lg leading-relaxed ${compact ? "mt-5 max-w-3xl" : "mt-6 max-w-2xl"}`}
                variants={staggerItem}
              >
                {subtitle}
              </motion.p>
            )}
          </motion.div>
        )}
      </SiteContainer>
    </section>
  );
}

function HeroTitle({
  title,
  countryCode,
  compact = false,
}: {
  title: string;
  countryCode?: CountryCode;
  compact?: boolean;
}) {
  const reduced = useReducedMotion();
  const titleClass = compact
    ? "font-display text-3xl md:text-5xl mt-0 leading-tight"
    : "font-display text-4xl md:text-6xl mt-0 leading-tight";

  if (reduced) {
    return (
      <div className="flex flex-wrap items-center gap-4 max-w-3xl">
        {countryCode && (
          <CountryFlag code={countryCode} size="xl" title={title} className="ring-2 ring-white/20" />
        )}
        <h1 className={titleClass}>{title}</h1>
      </div>
    );
  }

  return (
    <div className="flex flex-wrap items-center gap-4 max-w-3xl">
      {countryCode && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotate: -12 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ ...springGentle, delay: 0.15 }}
        >
          <CountryFlag code={countryCode} size="xl" title={title} className="ring-2 ring-white/20" />
        </motion.div>
      )}
      <motion.h1
        className={titleClass}
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...springGentle, delay: 0.2 }}
      >
        {title}
      </motion.h1>
    </div>
  );
}
