"use client";

import { useEffect } from "react";
import { prepareMigrationHashNavigation } from "@/lib/migration-hash-scroll";
import { BREADCRUMBS } from "@/lib/breadcrumbs";
import { motion, useReducedMotion } from "framer-motion";
import { AmbientTravelBg, Reveal } from "@/components/motion";
import { blurFade, springGentle, staggerContainer, staggerItem } from "@/lib/motion/presets";
import { MigrationProgramSections, BrandPromise, SectionEyebrow } from "@/components/site/HomeSections";
import { PageBreadcrumbs } from "@/components/site/PageBreadcrumbs";
import { SiteContainer } from "@/components/site/SiteContainer";

export default function MigrationIndexPage() {
  const reduced = useReducedMotion();

  useEffect(() => {
    prepareMigrationHashNavigation();
  }, []);

  return (
    <>
      <section className="relative py-20 bg-brand-dark text-white overflow-hidden">
        <AmbientTravelBg variant="hero" className="absolute inset-0 text-[var(--accent-sky)]" />
        <SiteContainer className="relative z-[1]">
          {reduced ? (
            <>
              <PageBreadcrumbs items={BREADCRUMBS.migration()} tone="dark" />
              <SectionEyebrow tone="dark">MIGRATION</SectionEyebrow>
              <h1 className="font-display text-4xl md:text-6xl mt-0">
                Canada PR &amp; Australia PR — Migration Consultants in Kochi, Kerala
              </h1>
              <p className="mt-4 max-w-2xl text-lg text-white/80 leading-relaxed">
                Compare Canada and Australia permanent residency pathways below — use the tabs to switch
                countries without scrolling.
              </p>
            </>
          ) : (
            <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
              <motion.div variants={staggerItem}>
                <PageBreadcrumbs items={BREADCRUMBS.migration()} tone="dark" />
              </motion.div>
              <motion.div variants={staggerItem}>
                <SectionEyebrow tone="dark" static>
                  MIGRATION
                </SectionEyebrow>
              </motion.div>
              <motion.h1
                className="font-display text-4xl md:text-6xl mt-0"
                variants={blurFade}
                transition={springGentle}
              >
                Canada PR &amp; Australia PR — Migration Consultants in Kochi, Kerala
              </motion.h1>
              <motion.p
                className="mt-4 max-w-2xl text-lg text-white/80 leading-relaxed"
                variants={staggerItem}
              >
                Compare Canada and Australia permanent residency pathways below — use the tabs to switch
                countries without scrolling.
              </motion.p>
            </motion.div>
          )}
        </SiteContainer>
      </section>
      <MigrationProgramSections revealOnMount />
      <Reveal when="mount" delay={0.08}>
        <BrandPromise />
      </Reveal>
    </>
  );
}
