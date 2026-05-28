import { motion, useReducedMotion } from "framer-motion";
import type { CountryCode } from "@/lib/countries";
import { blurFade, springGentle, staggerContainer, staggerItem } from "@/lib/motion/presets";
import { AmbientTravelBg } from "@/components/motion";
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
  const reduced = useReducedMotion();

  return (
    <section className="relative py-24 md:py-32 lg:py-36 bg-brand-dark text-white overflow-hidden">
      <AmbientTravelBg variant="hero" className="absolute inset-0 text-[var(--accent-sky)]" />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(circle at 30% 20%, color-mix(in srgb, var(--accent-sky) 35%, transparent), transparent 55%)",
        }}
        aria-hidden
      />
      <div className="container-px mx-auto max-w-7xl relative">
        {reduced ? (
          <>
            <SectionEyebrow tone="dark">{label}</SectionEyebrow>
            <HeroTitle title={title} countryCode={countryCode} />
            {subtitle && <p className="text-white/80 mt-6 max-w-2xl text-lg leading-relaxed">{subtitle}</p>}
          </>
        ) : (
          <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
            <motion.div variants={staggerItem}>
              <SectionEyebrow tone="dark" static>
                {label}
              </SectionEyebrow>
            </motion.div>
            <motion.div variants={blurFade} transition={springGentle}>
              <HeroTitle title={title} countryCode={countryCode} />
            </motion.div>
            {subtitle && (
              <motion.p
                className="text-white/80 mt-6 max-w-2xl text-lg leading-relaxed"
                variants={staggerItem}
              >
                {subtitle}
              </motion.p>
            )}
          </motion.div>
        )}
      </div>
    </section>
  );
}

function HeroTitle({ title, countryCode }: { title: string; countryCode?: CountryCode }) {
  const reduced = useReducedMotion();

  if (reduced) {
    return (
      <div className="flex flex-wrap items-center gap-4 max-w-3xl">
        {countryCode && (
          <CountryFlag code={countryCode} size="xl" title={title} className="ring-2 ring-white/20" />
        )}
        <h1 className="font-display text-4xl md:text-6xl mt-0 leading-tight">{title}</h1>
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
        className="font-display text-4xl md:text-6xl mt-0 leading-tight"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...springGentle, delay: 0.2 }}
      >
        {title}
      </motion.h1>
    </div>
  );
}
