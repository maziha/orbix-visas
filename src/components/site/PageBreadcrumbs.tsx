"use client";

import Link from "next/link";
import type { BreadcrumbItem } from "@/lib/breadcrumbs";
import { buildBreadcrumbJsonLd } from "@/lib/breadcrumbs";
import { cn } from "@/lib/utils";

type PageBreadcrumbsProps = {
  items: BreadcrumbItem[];
  tone?: "dark" | "light";
  className?: string;
};

export function PageBreadcrumbs({ items, tone = "dark", className }: PageBreadcrumbsProps) {
  if (items.length === 0) return null;

  const linkClass =
    tone === "dark"
      ? "text-white/70 hover:text-white transition-colors"
      : "text-muted-foreground hover:text-[var(--navy)] transition-colors";
  const currentClass = tone === "dark" ? "text-white/90 font-medium" : "text-[var(--navy)] font-medium";
  const sepClass = tone === "dark" ? "text-white/40" : "text-muted-foreground/50";

  return (
    <>
      <nav aria-label="Breadcrumb" className={cn("mb-4", className)}>
        <ol className="flex flex-wrap items-center gap-y-1 text-sm leading-snug">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <li key={`${item.href}-${index}`} className="inline-flex items-center">
                {index > 0 && (
                  <span className={cn("mx-2", sepClass)} aria-hidden="true">
                    &gt;
                  </span>
                )}
                {isLast ? (
                  <span className={currentClass} aria-current="page">
                    {item.name}
                  </span>
                ) : (
                  <Link href={item.href} className={linkClass}>
                    {item.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildBreadcrumbJsonLd(items)) }}
      />
    </>
  );
}
