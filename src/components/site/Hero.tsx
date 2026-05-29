import { motion, useReducedMotion } from "framer-motion";
import { HeroRoutingCards } from "./HeroRoutingCards";
import { HeroTravelSky } from "@/components/motion";
import { fadeUp, springGentle, staggerContainer, staggerItem } from "@/lib/motion/presets";

const HERO_BACKGROUND_IMAGE =
  "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1920&q=80&auto=format&fit=crop";

const HERO_DISPLAY_HEADLINE = "Your Path to Canada or Australia Starts Here.";
const HERO_SEO_H1 = "Immigration & Study Abroad Consultants in Kochi, Kerala";

const HERO_SERVICES = [
  "Canada PR",
  "Australia PR",
  "Study Abroad",
  "Spouse & Family Visa",
] as const;

export function Hero() {
  const reduced = useReducedMotion();

  return (
    <section className="hero-section relative flex items-center overflow-x-clip min-h-[100dvh] -mt-16 lg:-mt-20 pt-16 lg:pt-20">
      <div className="absolute inset-0 overflow-hidden" aria-hidden>
        <motion.img
          src={HERO_BACKGROUND_IMAGE}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          fetchPriority="high"
          animate={reduced ? undefined : { scale: [1, 1.07, 1] }}
          transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute inset-0 bg-[#040175]/60" aria-hidden />
      </div>

      <HeroTravelSky />

      <div className="relative z-[2] container-px mx-auto max-w-7xl w-full py-12 sm:py-16 lg:py-20">
        <div className="max-w-3xl text-white lg:max-w-none">
          {reduced ? (
            <div className="max-w-3xl">
              <p className="font-display text-[1.75rem] sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold leading-[1.12] text-white">
                {HERO_DISPLAY_HEADLINE}
              </p>
              <h1 className="hero-seo-h1 mt-3 sm:mt-4">{HERO_SEO_H1}</h1>
              <HeroPillsStatic />
            </div>
          ) : (
            <motion.div
              className="max-w-3xl"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.p
                className="font-display text-[1.75rem] sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold leading-[1.12] text-white"
                variants={fadeUp}
                transition={springGentle}
              >
                {HERO_DISPLAY_HEADLINE}
              </motion.p>
              <motion.h1 className="hero-seo-h1 mt-3 sm:mt-4" variants={staggerItem}>
                {HERO_SEO_H1}
              </motion.h1>
              <motion.div className="hero-services mt-5 sm:mt-6" variants={staggerItem}>
                <HeroPillsAnimated />
              </motion.div>
            </motion.div>
          )}

          <HeroRoutingCards />
        </div>
      </div>
    </section>
  );
}

function HeroPillsStatic() {
  return (
    <div className="hero-services mt-5 sm:mt-6">
      <ul className="hero-service-pills" aria-label="Services we offer">
        {HERO_SERVICES.map((service) => (
          <li key={service}>
            <span className="hero-service-pill">{service}</span>
          </li>
        ))}
      </ul>
      <p className="hero-consultation-note">
        <span className="hero-consultation-note__dot" aria-hidden />
        Free first consultation from Kochi
      </p>
    </div>
  );
}

function HeroPillsAnimated() {
  return (
    <>
      <motion.ul
        className="hero-service-pills"
        aria-label="Services we offer"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.2 } },
        }}
      >
        {HERO_SERVICES.map((service) => (
          <motion.li
            key={service}
            variants={{
              hidden: { opacity: 0, scale: 0.85, y: 8 },
              visible: { opacity: 1, scale: 1, y: 0, transition: springGentle },
            }}
            whileHover={{ scale: 1.05, borderColor: "rgba(63, 184, 247, 0.6)" }}
          >
            <span className="hero-service-pill">{service}</span>
          </motion.li>
        ))}
      </motion.ul>
      <motion.p
        className="hero-consultation-note"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.55, duration: 0.4 }}
      >
        <span className="hero-consultation-note__dot" aria-hidden />
        Free first consultation from Kochi
      </motion.p>
    </>
  );
}
