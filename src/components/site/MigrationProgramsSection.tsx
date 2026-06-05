"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HoverLift, MotionPressable, Reveal, RevealItem, RevealStagger } from "@/components/motion";
import { migrationProgramGroups } from "./migration-programs";
import { useModal } from "./modal-store";
import { SectionEyebrow } from "./SectionEyebrow";

const PANEL_BODY =
  "Canada and Australia are the two most accessible permanent residency pathways for Kerala professionals. The right program depends on your age, qualification, work experience, and English level. Our counsellors assess your profile and recommend the correct pathway — free, at your first session.";

export function MigrationProgramsSection() {
  const { openConsultation } = useModal();

  return (
    <section className="migration-programs-section bg-brand-white py-16 md:py-[72px]">
      <div className="container-px mx-auto flex w-full max-w-7xl flex-col gap-10 lg:flex-row lg:gap-14">
        <Reveal className="lg:sticky lg:top-24 lg:w-[40%] lg:shrink-0 lg:self-start">
          <SectionEyebrow>MIGRATION</SectionEyebrow>
          <h2 className="mt-3 font-display text-[32px] font-semibold leading-tight text-[var(--navy)]">
            Migrate &amp; Get Permanent Residency
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">{PANEL_BODY}</p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <HoverLift index={0} className="migration-stat-card flex-1 rounded-lg border border-[#e4e8f0] bg-brand-subtle px-4 py-3 text-sm font-semibold leading-snug text-[var(--navy)]">
              Canada: 12–18 months avg. pathway
            </HoverLift>
            <HoverLift index={1} className="migration-stat-card flex-1 rounded-lg border border-[#e4e8f0] bg-brand-subtle px-4 py-3 text-sm font-semibold leading-snug text-[var(--navy)]">
              Australia: 12–24 months avg. pathway
            </HoverLift>
          </div>

          <MotionPressable
            type="button"
            pulse
            onClick={() => openConsultation({ goal: "migrate", headline: "Migration consultation" })}
            className="btn-primary mt-8 inline-flex items-center justify-center gap-2"
          >
            Get a Free Profile Assessment
            <ArrowRight className="h-4 w-4 shrink-0" />
          </MotionPressable>
        </Reveal>

        <Reveal delay={0.08} className="min-w-0 lg:w-[60%]">
          <RevealStagger>
            {migrationProgramGroups.map((group, groupIndex) => (
              <RevealItem key={group.label}>
                <div className={groupIndex > 0 ? "mt-8 border-t border-[#e4e8f0] pt-8" : undefined}>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--accent-sky)]">
                    {group.label}
                  </p>
                </div>

                <Accordion type="single" collapsible className="mt-2 w-full">
                  {group.programs.map((program) => (
                      <AccordionItem
                        key={program.id}
                        value={program.id}
                        className="border-[#e4e8f0] border-b last:border-b-0"
                      >
                        <AccordionTrigger className="migration-accordion-trigger py-5 hover:no-underline [&>svg]:text-[var(--accent-sky)]">
                          <span className="flex min-w-0 flex-1 items-center justify-between gap-3 pr-2">
                            <span className="text-left text-[17px] font-semibold text-[var(--navy)]">
                              {program.name}
                            </span>
                            <span className="shrink-0 text-xs font-semibold text-[var(--accent-sky)]">
                              {program.tag}
                            </span>
                          </span>
                        </AccordionTrigger>
                        <AccordionContent className="migration-accordion-content pb-5 text-[15px] leading-relaxed text-muted-foreground">
                          <p>
                            <span className="font-semibold text-[var(--navy)]">Who this is for: </span>
                            {program.whoItsFor}
                          </p>
                          <p className="mt-3">
                            <span className="font-semibold text-[var(--navy)]">Typical timeline: </span>
                            {program.typicalTimeline}
                          </p>
                          <p className="mt-3">
                            <span className="font-semibold text-[var(--navy)]">First step: </span>
                            {program.firstStep}
                          </p>
                          <Link
                            href={`/migration/${program.programPage}`}
                            className="mt-4 inline-flex items-center gap-1 font-semibold text-[var(--accent-sky)] hover:underline"
                          >
                            Learn more about {program.name} →
                          </Link>
                        </AccordionContent>
                      </AccordionItem>
                  ))}
                </Accordion>
              </RevealItem>
            ))}
          </RevealStagger>
        </Reveal>
      </div>
    </section>
  );
}
