import { createFileRoute, Outlet, useMatches } from "@tanstack/react-router";
import { motion, useReducedMotion } from "framer-motion";
import { SiteLayout } from "@/components/site/SiteLayout";
import { StudyDestinationCard } from "@/components/site/StudyDestinationCard";
import { BrandPromise, SectionEyebrow, SectionHeading } from "@/components/site/HomeSections";
import { AmbientTravelBg, Reveal, RevealItem, RevealStagger } from "@/components/motion";
import { blurFade, springGentle, staggerContainer, staggerItem } from "@/lib/motion/presets";
import { COUNTRIES } from "@/lib/countries";
import { DESTINATION_HOVER_STATS, STUDY_COUNTRY_CONTENT } from "@/lib/study-country-content";
import { headForPage } from "@/lib/site-meta";

export const Route = createFileRoute("/study-abroad")({
  head: () => headForPage("studyAbroad"),
  component: Layout,
});

function Layout() {
  const matches = useMatches();
  const isChild = matches.some((m) => m.routeId.startsWith("/study-abroad/"));
  const reduced = useReducedMotion();

  if (isChild) {
    return (
      <SiteLayout>
        <Outlet />
      </SiteLayout>
    );
  }
  return (
    <SiteLayout>
      <section className="relative py-20 bg-brand-dark text-white overflow-hidden">
        <AmbientTravelBg variant="hero" className="absolute inset-0 text-[var(--accent-sky)]" />
        <div className="container-px mx-auto max-w-7xl relative z-[1]">
          {reduced ? (
            <>
              <SectionEyebrow tone="dark">STUDY ABROAD</SectionEyebrow>
              <h1 className="font-display text-4xl md:text-6xl mt-0">Choose Your Destination</h1>
              <p className="text-white/80 mt-4 max-w-2xl text-lg">
                Each guide includes tuition bands, IELTS requirements, popular universities, and visa
                timelines — so you can compare countries before booking a consultation.
              </p>
            </>
          ) : (
            <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
              <motion.div variants={staggerItem}>
                <SectionEyebrow tone="dark" static>
                  STUDY ABROAD
                </SectionEyebrow>
              </motion.div>
              <motion.h1
                className="font-display text-4xl md:text-6xl mt-0"
                variants={blurFade}
                transition={springGentle}
              >
                Choose Your Destination
              </motion.h1>
              <motion.p className="text-white/80 mt-4 max-w-2xl text-lg" variants={staggerItem}>
                Each guide includes tuition bands, IELTS requirements, popular universities, and visa
                timelines — so you can compare countries before booking a consultation.
              </motion.p>
            </motion.div>
          )}
        </div>
      </section>
      <section className="py-20">
        <div className="container-px mx-auto max-w-7xl">
          <Reveal when="mount">
            <SectionHeading
              eyebrow="EXPLORE DESTINATIONS"
              title="Study Destinations"
              align="left"
              className="max-w-none mb-10"
            />
          </Reveal>
          <RevealStagger when="mount" className="grid items-stretch sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {COUNTRIES.map((c, index) => (
              <RevealItem key={c.slug}>
                <StudyDestinationCard
                  country={c}
                  guide={STUDY_COUNTRY_CONTENT[c.slug]}
                  hoverStat={DESTINATION_HOVER_STATS[c.slug]}
                  index={index}
                  showOnMount
                />
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </section>
      <BrandPromise />
    </SiteLayout>
  );
}
