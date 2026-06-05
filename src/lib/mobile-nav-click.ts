"use client";

import { useCallback } from "react";
import { usePathname } from "next/navigation";
import type { BodyScrollUnlockOptions } from "@/lib/body-scroll-lock";

/** Path only — ignores hash/search. */
export function navTargetPath(to: string) {
  return to.split("?")[0].split("#")[0];
}

/**
 * Mobile menu link handler: close immediately only when already on that route.
 * For other routes, let navigation finish first — Header closes the menu on pathname change.
 */
export function useMobileNavClick(onClose: (options?: BodyScrollUnlockOptions) => void) {
  const pathname = usePathname();

  return useCallback(
    (to: string) => () => {
      if (navTargetPath(to) === pathname) {
        onClose({ scrollToTop: true });
      }
    },
    [pathname, onClose],
  );
}

/** Clear focus so desktop dropdowns (:focus-within) don’t stay open after navigation. */
export function blurActiveElement() {
  const el = document.activeElement;
  if (el instanceof HTMLElement) {
    el.blur();
  }
}
