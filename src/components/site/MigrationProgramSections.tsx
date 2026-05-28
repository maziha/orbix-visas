import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CountryFlag } from "./CountryFlag";
import { SectionHeading } from "./SectionHeading";
import {
  migrationProgramAnchorDetails,
  migrationProgramGroups,
  type MigrationProgram,
} from "./migration-programs";

const groupTabValue = (label: string) => label.toLowerCase();

function MigrationProgramCard({ program }: { program: MigrationProgram }) {
  const details = migrationProgramAnchorDetails[program.id];
  const countryName = program.programPage === "canada-pr" ? "Canada" : "Australia";

  return (
    <article
      id={program.id}
      className="scroll-mt-28 content-card-accent bg-brand-white rounded-xl border border-border p-8 md:p-10"
    >
      <h3 className="font-display text-2xl md:text-3xl text-[var(--navy)] mb-3">{program.name}</h3>
      <p className="text-muted-foreground leading-relaxed max-w-3xl">{program.desc}</p>
      {details && (
        <div className="mt-5 space-y-3 max-w-3xl text-muted-foreground leading-relaxed">
          <p>{details.overview}</p>
          <p>
            <span className="font-semibold text-[var(--navy)]">Who it&apos;s for: </span>
            {details.whoItsFor}
          </p>
        </div>
      )}
      <Link
        to="/migration/$program"
        params={{ program: program.programPage }}
        className="btn-secondary inline-flex items-center gap-2 mt-6"
      >
        Full {countryName} PR guide
        <ArrowRight className="h-3.5 w-3.5" />
      </Link>
    </article>
  );
}

export function MigrationProgramSections() {
  return (
    <section id="migration-pathways" className="migration-pathways-section scroll-mt-28 py-20 bg-brand-subtle">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="MIGRATION"
          title="Migrate & Get Permanent Residency"
          subtitle="Choose Canada or Australia to compare pathways — no need to scroll past both countries."
          align="left"
          className="max-w-none"
        />

        <Tabs defaultValue={groupTabValue(migrationProgramGroups[0].label)} className="mt-10">
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
                {group.label === "CANADA" ? "Canada" : "Australia"}
              </TabsTrigger>
            ))}
          </TabsList>

          {migrationProgramGroups.map((group) => (
            <TabsContent
              key={group.label}
              value={groupTabValue(group.label)}
              className="mt-8 focus-visible:outline-none"
            >
              <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm text-muted-foreground max-w-xl">
                  {group.label === "CANADA"
                    ? "Federal and provincial skilled pathways, plus family sponsorship options for Canadian sponsors."
                    : "Points-tested and state-nominated skilled visas, plus regional pathways to PR."}
                </p>
                <Link
                  to="/migration/$program"
                  params={{
                    program: group.label === "CANADA" ? "canada-pr" : "australia-pr",
                  }}
                  className="btn-primary inline-flex shrink-0 items-center gap-2 self-start sm:self-auto"
                >
                  Full {group.label === "CANADA" ? "Canada" : "Australia"} guide
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <div className="space-y-6">
                {group.programs.map((program) => (
                  <MigrationProgramCard key={program.id} program={program} />
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
