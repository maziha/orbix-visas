/** Calendar year at render/build time. */
export function getCurrentYear(date = new Date()): number {
  return date.getFullYear();
}

/** Rolling two-calendar-year label for recent stats, e.g. "2025–2026". */
export function getRecentYearRangeLabel(date = new Date()): string {
  const year = getCurrentYear(date);
  return `${year - 1}–${year}`;
}

/**
 * Indian academic-year span for fee disclaimers (April–March), e.g. "2025–26".
 */
export function getAcademicYearLabel(date = new Date()): string {
  const year = getCurrentYear(date);
  const startYear = date.getMonth() >= 3 ? year : year - 1;
  return `${startYear}–${String(startYear + 1).slice(-2)}`;
}

export function getFamilyVisaCostDisclaimer(date = new Date()): string {
  return `Fee figures are approximate guides in INR (as of ${getCurrentYear(date)}) and vary by exchange rate, embassy fees, medicals, translations, and whether you use a consultant. Confirm current amounts before you apply.`;
}

export function getStudyFeeDisclaimer(date = new Date()): string {
  return `Tuition and living costs are approximate guides in INR (${getAcademicYearLabel(date)}). Actual fees vary by university, city, and intake.`;
}

/** Stable blog URL — year in slug is kept for SEO/history; display titles use getCurrentYear(). */
export const CANADA_EXPRESS_ENTRY_GUIDE_SLUG = "canada-express-entry-guide-2026" as const;

export function getCanadaExpressEntryGuideLabel(date = new Date()): string {
  return `Canada Express Entry ${getCurrentYear(date)}`;
}

export function getAustraliaPrGuideLabel(date = new Date()): string {
  return `Australia PR ${getCurrentYear(date)}`;
}
