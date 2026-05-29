import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { HoverLift, MotionTabsContent, Reveal } from "@/components/motion";
import { CountryFlag } from "./CountryFlag";
import { SectionHeading } from "./SectionHeading";
import {
  migrationProgramAnchorDetails,
  migrationProgramGroups,
  type MigrationProgram,
  type MigrationProgramGroup,
} from "./migration-programs";

const groupTabValue = (label: string) => label.toLowerCase();

function countryGuideSlug(group: MigrationProgramGroup) {
  return group.label === "CANADA" ? "canada-pr" : "australia-pr";
}

function countryDisplayName(group: MigrationProgramGroup) {
  return group.label === "CANADA" ? "Canada" : "Australia";
}

function CountryPathwayHub({ group }: { group: MigrationProgramGroup }) {
  const country = countryDisplayName(group);
  const code = group.programs[0]?.countryCode ?? "CA";

  return (
    <div className="migration-country-hub">
      <div className="migration-country-hub__main">
        <CountryFlag code={code} size="lg" title={country} className="shrink-0" />
        <div className="min-w-0">
          <p className="migration-country-hub__eyebrow">{country} pathways</p>
          <p className="migration-country-hub__text">
            {group.label === "CANADA"
              ? "One guide covers Express Entry, provincial nomination, and family sponsorship — timelines, documents, and how Orbix helps."
              : "One guide covers Subclass 189, 190, and 491 — points, state nomination, and regional routes explained together."}
          </p>
          <Link
            to="/migration/$program"
            params={{ program: countryGuideSlug(group) }}
            className="btn-primary mt-4 inline-flex items-center gap-2"
          >
            Full {country} guide
            <ArrowRight className="h-4 w-4 shrink-0" />
          </Link>
        </div>
      </div>

      <nav className="migration-pathway-jump" aria-label={`Jump to a ${country} pathway`}>
        <span className="migration-pathway-jump__label">On this page</span>
        <div className="migration-pathway-jump__chips">
          {group.programs.map((program) => (
            <a key={program.id} href={`#${program.id}`} className="migration-pathway-jump__chip">
              {program.jumpLabel}
            </a>
          ))}
        </div>
      </nav>
    </div>
  );
}

function MigrationProgramCard({ program, index }: { program: MigrationProgram; index: number }) {
  const details = migrationProgramAnchorDetails[program.id];

  return (
    <HoverLift
      as="article"
      index={index}
      id={program.id}
      className="scroll-mt-28 migration-pathway-card content-card-accent bg-brand-white rounded-xl border border-border p-8 md:p-10"
    >
      <div className="migration-pathway-card__header">
        <div className="min-w-0">
          <h3 className="font-display text-2xl md:text-3xl text-[var(--navy)]">{program.name}</h3>
          <p className="text-muted-foreground leading-relaxed max-w-3xl mt-2">{program.desc}</p>
        </div>
        <span className="migration-pathway-card__tag">{program.tag}</span>
      </div>

      {details && (
        <div className="mt-5 space-y-3 max-w-3xl text-muted-foreground leading-relaxed">
          <p>{details.overview}</p>
          <p>
            <span className="font-semibold text-[var(--navy)]">Who it&apos;s for: </span>
            {details.whoItsFor}
          </p>
        </div>
      )}

      <div className="migration-pathway-card__footer">
        <p className="migration-pathway-card__timeline">
          <span className="font-semibold text-[var(--navy)]">Typical timeline: </span>
          {program.typicalTimeline}
        </p>
        <Link
          to="/migration/$program"
          params={{ program: program.programPage }}
          className="migration-pathway-card__cta"
        >
          <span className="migration-pathway-card__cta-label">First step</span>
          <span className="migration-pathway-card__cta-value">{program.firstStep}</span>
          <ArrowRight className="h-4 w-4 shrink-0" aria-hidden />
        </Link>
      </div>
    </HoverLift>
  );
}

export function MigrationProgramSections({ revealOnMount = false }: { revealOnMount?: boolean }) {
  const defaultTab = groupTabValue(migrationProgramGroups[0].label);
  const [activeTab, setActiveTab] = useState(defaultTab);

  return (
    <Reveal
      as="section"
      when={revealOnMount ? "mount" : "inView"}
      id="migration-pathways"
      className="migration-pathways-section scroll-mt-28 py-20 bg-brand-subtle"
    >
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="MIGRATION"
          title="Migrate & Get Permanent Residency"
          subtitle="Choose Canada or Australia to compare pathways — no need to scroll past both countries."
          align="left"
          className="max-w-none"
        />

        <Tabs value={activeTab} onValueChange={setActiveTab} className="mt-10">
          <TabsList className="migration-tabs-list h-auto w-full gap-1 p-1 sm:w-auto">
            {migrationProgramGroups.map((group) => (
              <TabsTrigger
                key={group.label}
                value={groupTabValue(group.label)}
                className="migration-tabs-trigger flex-1 gap-2 px-4 py-2.5 sm:flex-none sm:px-6"
              >
                <CountryFlag
                  code={group.programs[0]?.countryCode ?? "CA"}
                  size="sm"
                  title={group.label}
                  className="hidden sm:block"
                />
                {countryDisplayName(group)}
              </TabsTrigger>
            ))}
          </TabsList>

          {migrationProgramGroups.map((group) => {
            const tabValue = groupTabValue(group.label);
            return (
              <TabsContent
                key={group.label}
                value={tabValue}
                className="mt-8 focus-visible:outline-none"
              >
                <MotionTabsContent value={tabValue} activeValue={activeTab}>
                  <CountryPathwayHub group={group} />
                  <div className="mt-8 space-y-6">
                    {group.programs.map((program, index) => (
                      <MigrationProgramCard key={program.id} program={program} index={index} />
                    ))}
                  </div>
                </MotionTabsContent>
              </TabsContent>
            );
          })}
        </Tabs>
      </div>
    </Reveal>
  );
}
