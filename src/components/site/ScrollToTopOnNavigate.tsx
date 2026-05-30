import { useRouterState } from "@tanstack/react-router";
import { useEffect, useRef } from "react";

/** Scroll window to top when changing routes (not hash-only updates on the same page). */
export function ScrollToTopOnNavigate() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const hash = useRouterState({ select: (s) => s.location.hash });
  const prevPathname = useRef(pathname);

  useEffect(() => {
    if (prevPathname.current === pathname) return;
    prevPathname.current = pathname;

    if (hash) return;

    const scrollTop = () => window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    scrollTop();
    requestAnimationFrame(scrollTop);
    requestAnimationFrame(() => requestAnimationFrame(scrollTop));
  }, [pathname, hash]);

  return null;
}
