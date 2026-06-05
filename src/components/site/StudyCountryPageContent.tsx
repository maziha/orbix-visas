"use client";

import { ArrowRight, CheckCircle2 } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import type { StudyCountryContent } from "@/lib/study-country-content";
import { getStudyFeeDisclaimer } from "@/lib/year";
import {
  STUDY_PAGE_CONTENT,
  studyCountryFinalCta,
  getStudyCountryHeroTitle,
} from "@/lib/study-country-page-content";
import { studyCountryClosingCta } from "@/lib/closing-cta-presets";
import { FaqSection } from "./FaqSection";
import {
  AmbientTravelBg,
  HoverLift,
  MotionPressable,
  Reveal,
  RevealItem,
  RevealStagger,
} from "@/components/motion";
import { blurFade, springGentle, staggerContainer, staggerItem } from "@/lib/motion/presets";
import { presetFromStudyCountry } from "@/lib/enquiry-options";
import { BREADCRUMBS } from "@/lib/breadcrumbs";
import { BrandPromise, SectionEyebrow } from "./HomeSections";
import { CountryFlag } from "./CountryFlag";
import { PageBreadcrumbs } from "./PageBreadcrumbs";
import { useModal } from "./modal-store";
import { SiteContainer } from "./SiteContainer";

export function StudyCountryPageContent({ content }: { content: StudyCountryContent }) {
  const { openConsultation } = useModal();
  const page = STUDY_PAGE_CONTENT[content.slug];
  const reduced = useReducedMotion();
  const heroTitle = getStudyCountryHeroTitle(content.slug);
  const finalCtaLabel = studyCountryFinalCta(content.name);
  const breadcrumbs = BREADCRUMBS.studyCountry(content.slug, content.name);

  return (
    <article>
      <section className="relative py-20 md:py-28 bg-brand-dark text-white overflow-hidden">
        <AmbientTravelBg variant="hero" className="absolute inset-0 text-[var(--accent-sky)]" />
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background:
              "radial-gradient(circle at 70% 30%, color-mix(in srgb, var(--accent-sky) 35%, transparent), transparent 55%)",
          }}
          aria-hidden
        />
        <SiteContainer className="relative">
          {reduced ? (
            <>
              <PageBreadcrumbs items={breadcrumbs} tone="dark" />
              <SectionEyebrow tone="dark">STUDY ABROAD</SectionEyebrow>
              <div className="flex flex-wrap items-start gap-4 mt-2 max-w-4xl">
                <CountryFlag
                  code={content.countryCode}
                  size="xl"
                  title={content.name}
                  className="ring-2 ring-white/20 shrink-0"
                />
                <div className="min-w-0">
                  <h1 className="font-display text-3xl md:text-5xl leading-tight">{heroTitle}</h1>
                  <p className="text-lg text-white/80 mt-4 leading-relaxed">{content.heroSubtitle}</p>
                </div>
              </div>
              <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-3">
                {page.heroFacts.map((fact) => (
                  <div
                    key={fact.label}
                    className="rounded-lg border border-white/20 bg-white/10 px-4 py-3"
                  >
                    <div className="text-xs font-semibold uppercase tracking-wider text-white/70">
                      {fact.label}
                    </div>
                    <div className="text-sm font-medium text-white mt-1 leading-snug">{fact.value}</div>
                  </div>
                ))}
              </div>
              <button
                type="button"
                onClick={() => openConsultation(presetFromStudyCountry(content))}
                className="btn-primary mt-8 inline-flex items-center gap-2"
              >
                {finalCtaLabel}
                <ArrowRight className="h-4 w-4 shrink-0" />
              </button>
            </>
          ) : (
            <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
              <motion.div variants={staggerItem}>
                <PageBreadcrumbs items={breadcrumbs} tone="dark" />
              </motion.div>
              <motion.div variants={staggerItem}>
                <SectionEyebrow tone="dark" static>
                  STUDY ABROAD
                </SectionEyebrow>
              </motion.div>
              <motion.div
                className="flex flex-wrap items-start gap-4 mt-2 max-w-4xl"
                variants={blurFade}
                transition={springGentle}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ ...springGentle, delay: 0.15 }}
                >
                  <CountryFlag
                    code={content.countryCode}
                    size="xl"
                    title={content.name}
                    className="ring-2 ring-white/20 shrink-0"
                  />
                </motion.div>
                <div className="min-w-0">
                  <h1 className="font-display text-3xl md:text-5xl leading-tight">{heroTitle}</h1>
                  <p className="text-lg text-white/80 mt-4 leading-relaxed">{content.heroSubtitle}</p>
                </div>
              </motion.div>
              <motion.div
                className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-3"
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.25 } },
                }}
              >
                {page.heroFacts.map((fact) => (
                  <motion.div
                    key={fact.label}
                    className="rounded-lg border border-white/20 bg-white/10 px-4 py-3"
                    variants={staggerItem}
                    whileHover={{ y: -4, borderColor: "rgba(63, 184, 247, 0.5)" }}
                  >
                    <div className="text-xs font-semibold uppercase tracking-wider text-white/70">
                      {fact.label}
                    </div>
                    <div className="text-sm font-medium text-white mt-1 leading-snug">{fact.value}</div>
                  </motion.div>
                ))}
              </motion.div>
              <motion.div variants={staggerItem} className="mt-8">
                <MotionPressable
                  type="button"
                  pulse
                  onClick={() => openConsultation(presetFromStudyCountry(content))}
                  className="btn-primary inline-flex items-center gap-2"
                >
                  {finalCtaLabel}
                  <ArrowRight className="h-4 w-4 shrink-0" />
                </MotionPressable>
              </motion.div>
            </motion.div>
          )}
        </SiteContainer>
      </section>

      <Reveal as="section" className="py-16 md:py-20 bg-brand-white">
        <SiteContainer>
          <SectionEyebrow>OVERVIEW</SectionEyebrow>
          <h2 className="font-display text-3xl text-[var(--navy)] mt-2 mb-6">
            Studying in {content.name} from Kerala
          </h2>
          <p className="text-muted-foreground leading-relaxed text-lg">{content.overview}</p>
          <p className="text-muted-foreground leading-relaxed mt-5">{content.keralaContext}</p>
        </SiteContainer>
      </Reveal>

      <Reveal as="section" delay={0.04} className="py-16 md:py-20 bg-brand-subtle">
        <SiteContainer>
          <SectionEyebrow>WHY {content.name.toUpperCase()}?</SectionEyebrow>
          <h2 className="font-display text-3xl text-[var(--navy)] mt-2 mb-8">Why {content.name}?</h2>
          <RevealStagger as="ul" className="space-y-5 list-none">
            {page.whyReasons.map((reason) => (
              <RevealItem key={reason}>
                <motion.li
                  className="flex gap-3 text-muted-foreground leading-relaxed"
                  whileHover={reduced ? undefined : { x: 6 }}
                  transition={springGentle}
                >
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-[var(--accent-sky)] mt-0.5" />
                  <span>{reason}</span>
                </motion.li>
              </RevealItem>
            ))}
          </RevealStagger>
        </SiteContainer>
      </Reveal>

      <Reveal as="section" delay={0.05} className="py-16 md:py-20 bg-brand-white">
        <SiteContainer>
          <SectionEyebrow>COURSES</SectionEyebrow>
          <h2 className="font-display text-3xl text-[var(--navy)] mt-2 mb-4">
            Popular courses for Kerala students
          </h2>
          <p className="text-muted-foreground mb-8 max-w-3xl leading-relaxed">
            Course categories commonly chosen from Kerala — employment outcomes depend on your grades,
            English score, and the institution you select.
          </p>
          <RevealStagger as="ul" className="space-y-4 list-none">
            {page.popularCourses.map((course, index) => (
              <HoverLift
                key={course.category}
                index={index}
                as="li"
                className="card-base bg-brand-subtle rounded-xl border border-border p-5 md:p-6"
              >
                <h3 className="font-display text-xl text-[var(--navy)]">{course.category}</h3>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{course.outcomeNote}</p>
              </HoverLift>
            ))}
          </RevealStagger>
          <p className="text-xs text-muted-foreground mt-6 leading-relaxed">{getStudyFeeDisclaimer()}</p>
        </SiteContainer>
      </Reveal>

      <Reveal as="section" delay={0.08} className="py-16 md:py-20 bg-brand-subtle">
        <SiteContainer>
          <SectionEyebrow>VISA</SectionEyebrow>
          <h2 className="font-display text-3xl text-[var(--navy)] mt-2 mb-4">Visa process</h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">{content.visaSection.title}</p>
          <RevealStagger as="ul" className="space-y-3 list-none mb-10">
            {content.visaSection.bullets.map((bullet) => (
              <RevealItem key={bullet}>
                <li className="flex gap-3 text-muted-foreground leading-relaxed text-sm">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-[var(--accent-sky)] mt-0.5" />
                  <span>{bullet}</span>
                </li>
              </RevealItem>
            ))}
          </RevealStagger>
          <RevealStagger as="ol" className="space-y-0 list-none">
            {page.visaTimeline.map((s, i) => (
              <RevealItem key={s.step}>
                <motion.li
                  className="relative flex gap-6 pb-10 last:pb-0"
                  initial={reduced ? false : { opacity: 0, x: -16 }}
                  whileInView={reduced ? undefined : { opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ ...springGentle, delay: i * 0.06 }}
                >
                  {i < page.visaTimeline.length - 1 && (
                    <span
                      className="absolute left-5 top-12 bottom-0 w-px bg-[var(--accent-sky)]/40"
                      aria-hidden
                    />
                  )}
                  <motion.div
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-dark text-sm font-bold text-white z-[1]"
                    aria-hidden
                    whileHover={reduced ? undefined : { scale: 1.1 }}
                  >
                    {s.step}
                  </motion.div>
                  <div className="min-w-0 flex-1 pt-0.5">
                    <h3 className="font-display text-xl text-[var(--navy)]">{s.title}</h3>
                    <p className="text-muted-foreground mt-2 leading-relaxed">{s.detail}</p>
                  </div>
                </motion.li>
              </RevealItem>
            ))}
          </RevealStagger>
        </SiteContainer>
      </Reveal>

      <Reveal as="section" delay={0.1} className="py-16 md:py-20 bg-brand-white">
        <SiteContainer>
          <SectionEyebrow>ORBIX SUPPORT</SectionEyebrow>
          <h2 className="font-display text-3xl text-[var(--navy)] mt-2 mb-8">How Orbix helps</h2>
          <RevealStagger as="ol" className="space-y-4 list-none">
            {page.orbixHelps.map((item, i) => (
              <RevealItem key={item}>
                <HoverLift
                  index={i}
                  instant
                  className="flex gap-4 bg-brand-subtle rounded-xl border border-border p-5"
                >
                  <span
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-dark text-sm font-bold text-white"
                    aria-hidden
                  >
                    {i + 1}
                  </span>
                  <span className="text-muted-foreground leading-relaxed pt-0.5">{item}</span>
                </HoverLift>
              </RevealItem>
            ))}
          </RevealStagger>
        </SiteContainer>
      </Reveal>

      <FaqSection
        faq={page.faq}
        title={`Studying in ${content.name} from Kerala — common questions`}
      />

      <BrandPromise {...studyCountryClosingCta(content)} />
    </article>
  );
}
