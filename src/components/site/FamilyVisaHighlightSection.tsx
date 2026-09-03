"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useReducedMotion } from "@/lib/motion/use-reduced-motion";
import { FAMILY_VISA_CONTENT, FAMILY_VISA_SLUGS } from "@/lib/family-visa-content";
import { MotionPressable, Reveal, RevealItem, RevealStagger } from "@/components/motion";
import { springGentle } from "@/lib/motion/presets";
import { useModal } from "./modal-store";
import { SectionEyebrow } from "./SectionEyebrow";

const MotionNextLink = motion.create(Link);

export function FamilyVisaHighlightSection() {
  const { openConsultation } = useModal();
  const reduced = useReducedMotion();

  return (
    <section className="family-highlight-section bg-brand-subtle py-16 md:py-20">
      <div className="container-px mx-auto max-w-7xl">
        <Reveal>
          <div className="flex flex-col overflow-hidden rounded-2xl border border-[#e4e8f0] bg-brand-white lg:flex-row lg:min-h-[28rem]">
            <div className="family-highlight-section__copy bg-transparent lg:w-[55%] px-6 py-12 md:px-10 md:py-16 lg:px-12">
              <SectionEyebrow>VISA SERVICES</SectionEyebrow>
              <h2 className="mt-3 font-display text-3xl md:text-4xl text-[var(--navy)] leading-tight">
                Bringing Family Overseas
              </h2>
              <h3 className="mt-4 font-display text-2xl text-[var(--navy)] leading-snug">
                Spouse Visa &amp; Family Reunification
              </h3>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Reunite with your spouse, parents, or dependents abroad with clear guidance on
                eligibility, documentation, and timelines.
              </p>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                Our counsellors walk you through each step so you know what to expect before you apply.
              </p>
              <MotionPressable
                type="button"
                pulse
                onClick={() => openConsultation({ goal: "family", headline: "Family visa consultation" })}
                className="btn-primary mt-8 inline-flex items-center gap-2"
              >
                Book a Consultation <ArrowRight className="h-4 w-4" />
              </MotionPressable>
              <p className="mt-4 text-sm">
                <MotionNextLink
                  href="/services#family-visa"
                  className="font-semibold text-[var(--accent-sky)] hover:underline"
                  whileHover={{ x: 4 }}
                >
                  Compare all family visa guides →
                </MotionNextLink>
              </p>
            </div>

            <RevealStagger className="family-highlight-section__panel bg-brand-dark lg:w-[45%] px-6 py-10 md:px-10 md:py-14 flex flex-col justify-center gap-4">
              {FAMILY_VISA_SLUGS.map((slug) => {
                const guide = FAMILY_VISA_CONTENT[slug];
                return (
                  <RevealItem key={slug}>
                    <MotionNextLink
                      href={`/services/${slug}`}
                      className="family-visa-panel-card group"
                      whileHover={
                        reduced
                          ? undefined
                          : { x: 6, scale: 1.02, boxShadow: "0 12px 32px rgb(4 1 117 / 0.12)" }
                      }
                      transition={springGentle}
                    >
                      <div className="min-w-0 flex-1">
                        <h4 className="font-display text-lg font-semibold text-[var(--navy)]">
                          {guide.name}
                        </h4>
                        <p className="mt-1 text-sm text-muted-foreground leading-snug line-clamp-2">
                          {guide.previewLine}
                        </p>
                      </div>
                      <motion.span
                        className="family-visa-panel-card__arrow shrink-0 text-xl font-semibold text-[var(--navy)]"
                        aria-hidden
                        initial={false}
                        whileHover={{ x: 6 }}
                      >
                        →
                      </motion.span>
                    </MotionNextLink>
                  </RevealItem>
                );
              })}
            </RevealStagger>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
