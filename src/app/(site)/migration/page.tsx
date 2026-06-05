import type { Metadata } from "next";
import MigrationIndexPage from "./MigrationIndexPage";
import { metadataForPage } from "@/lib/metadata";

export const metadata: Metadata = metadataForPage("migration");

export default MigrationIndexPage;
