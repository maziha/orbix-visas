import { createFileRoute, notFound } from "@tanstack/react-router";
import { MigrationProgramPageContent } from "@/components/site/MigrationProgramPageContent";
import { MIGRATION_PROGRAM_CONTENT } from "@/lib/migration-program-content";
import { MIGRATION_PROGRAM_DESCRIPTIONS } from "@/lib/page-descriptions";
import { MIGRATION_PROGRAM_TITLES } from "@/lib/page-titles";
import { COMPANY_NAME } from "@/lib/contact-info";
import { buildPageHead, headForPage, type PageHeadResult } from "@/lib/site-meta";

function headForMigrationProgram(program: string, fallbackName?: string): PageHeadResult {
  if (program === "canada-pr") return headForPage("migrationCanadaPr");
  if (program === "australia-pr") return headForPage("migrationAustraliaPr");

  const title =
    MIGRATION_PROGRAM_TITLES[program] ??
    `${fallbackName ?? "Migration"} | ${COMPANY_NAME}`;
  const description =
    MIGRATION_PROGRAM_DESCRIPTIONS[program] ??
    `${fallbackName ?? "Migration"} consultants in Kochi, Kerala — consultation with ${COMPANY_NAME}.`;

  return buildPageHead({
    title,
    description,
    canonicalPath: `/migration/${program}`,
  });
}

export const Route = createFileRoute("/migration/$program")({
  loader: ({ params }) => {
    const content = MIGRATION_PROGRAM_CONTENT[params.program];
    if (!content) throw notFound();
    return content;
  },
  head: ({ params, loaderData }) => headForMigrationProgram(params.program, loaderData?.name),
  component: ProgPage,
});

function ProgPage() {
  const content = Route.useLoaderData();
  return <MigrationProgramPageContent content={content} />;
}
