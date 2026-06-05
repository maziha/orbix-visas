import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MigrationProgramPageContent } from "@/components/site/MigrationProgramPageContent";
import { MIGRATION_PROGRAM_CONTENT } from "@/lib/migration-program-content";
import { MIGRATION_PROGRAM_DESCRIPTIONS } from "@/lib/page-descriptions";
import { MIGRATION_PROGRAM_TITLES } from "@/lib/page-titles";
import { COMPANY_NAME } from "@/lib/contact-info";
import { createDynamicPageMetadata, metadataForPage } from "@/lib/metadata";

type PageProps = {
  params: Promise<{ program: string }>;
};

export function generateStaticParams() {
  return Object.keys(MIGRATION_PROGRAM_CONTENT).map((program) => ({ program }));
}

function metadataForMigrationProgram(program: string, fallbackName?: string): Metadata {
  if (program === "canada-pr") return metadataForPage("migrationCanadaPr");
  if (program === "australia-pr") return metadataForPage("migrationAustraliaPr");

  const title =
    MIGRATION_PROGRAM_TITLES[program] ?? `${fallbackName ?? "Migration"} | ${COMPANY_NAME}`;
  const description =
    MIGRATION_PROGRAM_DESCRIPTIONS[program] ??
    `${fallbackName ?? "Migration"} consultants in Kochi, Kerala — consultation with ${COMPANY_NAME}.`;

  return createDynamicPageMetadata({
    title,
    description,
    canonicalPath: `/migration/${program}`,
  });
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { program } = await params;
  const content = MIGRATION_PROGRAM_CONTENT[program];
  return metadataForMigrationProgram(program, content?.name);
}

export default async function MigrationProgramPage({ params }: PageProps) {
  const { program } = await params;
  const content = MIGRATION_PROGRAM_CONTENT[program];
  if (!content) notFound();

  return <MigrationProgramPageContent content={content} />;
}
