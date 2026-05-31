import { createFileRoute, Outlet } from "@tanstack/react-router";
import { useEffect } from "react";
import { prepareMigrationHashNavigation } from "@/lib/migration-hash-scroll";
import { motion, useReducedMotion } from "framer-motion";
import { AmbientTravelBg, Reveal } from "@/components/motion";
import { blurFade, springGentle, staggerContainer, staggerItem } from "@/lib/motion/presets";
import { MigrationProgramSections, BrandPromise, SectionEyebrow } from "@/components/site/HomeSections";
import { SITE_CHILD_ROUTE, useActiveChildRoute } from "@/lib/nested-layout";
import { headForPage } from "@/lib/site-meta";

export const Route = createFileRoute("/_site/migration")({
  head: () => headForPage("migration"),
  component: Layout,
});

function Layout() {
  const programRoute = useActiveChildRoute(SITE_CHILD_ROUTE.migrationProgram);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (programRoute) return;
    prepareMigrationHashNavigation();
  }, [programRoute]);

  if (programRoute) return <Outlet />;

  return (
    <>
      <section className="relative py-20 bg-brand-dark text-white overflow-hidden">
        <AmbientTravelBg variant="hero" className="absolute inset-0 text-[var(--accent-sky)]" />
        <div className="container-px mx-auto max-w-7xl relative z-[1]">
          {reduced ? (
            <>
              <SectionEyebrow tone="dark">MIGRATION</SectionEyebrow>
              <h1 className="font-display text-4xl md:text-6xl mt-0">Your New Chapter Begins Here</h1>
              <p className="mt-4 max-w-2xl text-lg text-white/80 leading-relaxed">
                Compare Canada and Australia permanent residency pathways below — use the tabs to switch
                countries without scrolling.
              </p>
            </>
          ) : (
            <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
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
                Your New Chapter Begins Here
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
        </div>
      </section>
      <MigrationProgramSections revealOnMount />
      <Reveal when="mount" delay={0.08}>
        <BrandPromise />
      </Reveal>
    </>
  );
}
