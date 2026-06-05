"use client";

import { BRAND_LOGOS } from "@/lib/brand-logos";
import { cn } from "@/lib/utils";

type HeaderLogoProps = {
  /** White mark on navy — home hero at top of page */
  onHero: boolean;
  className?: string;
};

/** Crossfade between hero (navy) and standard (white-bg) logos — no src swap flash. */
export function HeaderLogo({ onHero, className }: HeaderLogoProps) {
  return (
    <span className={cn("site-header__logo-stack", className)}>
      <img
        src={BRAND_LOGOS.onNavy}
        alt=""
        width={140}
        height={48}
        className={cn("site-header__logo site-header__logo--hero", onHero && "is-visible")}
        decoding="async"
        aria-hidden
      />
      <img
        src={BRAND_LOGOS.onWhite}
        alt=""
        width={140}
        height={48}
        className={cn("site-header__logo site-header__logo--solid", !onHero && "is-visible")}
        decoding="async"
        aria-hidden
      />
    </span>
  );
}
