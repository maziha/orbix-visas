import {
  isMigrationProgramId,
  migrationTabForProgramId,
} from "@/components/site/migration-programs";
import { scrollToHashIdWhenReady, suppressNativeHashScroll } from "@/lib/scroll-to-hash";

export function normalizeHash(hash: string): string {
  return hash.replace(/^#/, "").trim();
}

export function readMigrationHashFromLocation(): string {
  if (typeof window === "undefined") return "";
  return normalizeHash(window.location.hash);
}

export function isMigrationHash(hash: string): boolean {
  const id = normalizeHash(hash);
  return Boolean(id && isMigrationProgramId(id));
}

export function tabValueForMigrationHash(hash: string): "canada" | "australia" {
  return migrationTabForProgramId(normalizeHash(hash));
}

export function scheduleMigrationHashScroll(
  hashOrId: string,
  options?: { startDelayMs?: number; durationMs?: number },
): () => void {
  const id = normalizeHash(hashOrId);
  if (!isMigrationProgramId(id)) return () => undefined;

  return scrollToHashIdWhenReady(id, {
    startDelayMs: options?.startDelayMs ?? 0,
    maxMs: 3500,
    durationMs: options?.durationMs ?? 720,
  });
}

export function prepareMigrationHashNavigation(): void {
  if (!isMigrationHash(readMigrationHashFromLocation())) return;
  suppressNativeHashScroll();
}
