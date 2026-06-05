"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { blurActiveElement } from "@/lib/mobile-nav-click";
import { cn } from "@/lib/utils";

type SiteNavLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
};

export function SiteNavLink({ href, children, className }: SiteNavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={cn(className, isActive && "site-nav__link--active")}
      onClick={blurActiveElement}
    >
      {children}
    </Link>
  );
}
