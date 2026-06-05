"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

/** Scroll window to top when changing routes (not hash-only updates on the same page). */
export function ScrollToTopOnNavigate() {
  const pathname = usePathname();
  const prevPathname = useRef(pathname);

  useEffect(() => {
    if (prevPathname.current === pathname) return;
    prevPathname.current = pathname;

    if (window.location.hash) return;

    const scrollTop = () => window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    scrollTop();
    requestAnimationFrame(scrollTop);
    requestAnimationFrame(() => requestAnimationFrame(scrollTop));
  }, [pathname]);

  return null;
}
