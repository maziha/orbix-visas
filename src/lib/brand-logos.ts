import logoBlueOnWhite from "@/assets/logo_blue_white_background.webp";
import logoWhiteOnNavy from "@/assets/logo_white_navy_background.webp";
import logoWhiteOnSkyBlue from "@/assets/logo_white_skyblue_background.webp";

/**
 * Brand logo variants — filename indicates intended background.
 * - onWhite: navy/brand mark on white (#ffffff) — nav scrolled, light sections
 * - onNavy: white mark on navy (#040175) — footer, hero overlay, dark sections
 * - onSkyBlue: white mark on sky blue (#3fb8f7) — accent band sections
 */
export const BRAND_LOGOS = {
  onWhite: logoBlueOnWhite.src,
  onNavy: logoWhiteOnNavy.src,
  onSkyBlue: logoWhiteOnSkyBlue.src,
} as const;

export type BrandLogoVariant = keyof typeof BRAND_LOGOS;

export function getHeaderLogo(scrolled: boolean, onHero: boolean): string {
  if (scrolled) return BRAND_LOGOS.onWhite;
  if (onHero) return BRAND_LOGOS.onNavy;
  return BRAND_LOGOS.onWhite;
}
