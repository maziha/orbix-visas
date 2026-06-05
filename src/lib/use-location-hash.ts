"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

/** Current URL hash (including `#`), synced on navigation and hashchange. */
export function useLocationHash(): string {
  const pathname = usePathname();
  const [hash, setHash] = useState("");

  useEffect(() => {
    const sync = () => setHash(window.location.hash);
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, [pathname]);

  return hash;
}
