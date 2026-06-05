import { SITE_ORIGIN } from "@/lib/site-meta";

export type BreadcrumbItem = {
  name: string;
  href: string;
};

export function breadcrumbUrl(href: string): string {
  return href === "/" ? `${SITE_ORIGIN}/` : `${SITE_ORIGIN}${href}`;
}

export function buildBreadcrumbJsonLd(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: breadcrumbUrl(item.href),
    })),
  };
}

export const BREADCRUMBS = {
  migration(): BreadcrumbItem[] {
    return [
      { name: "Home", href: "/" },
      { name: "Migration", href: "/migration" },
    ];
  },
  migrationProgram(slug: string, label: string): BreadcrumbItem[] {
    return [...BREADCRUMBS.migration(), { name: label, href: `/migration/${slug}` }];
  },
  studyAbroad(): BreadcrumbItem[] {
    return [
      { name: "Home", href: "/" },
      { name: "Study Abroad", href: "/study-abroad" },
    ];
  },
  studyCountry(slug: string, label: string): BreadcrumbItem[] {
    return [...BREADCRUMBS.studyAbroad(), { name: label, href: `/study-abroad/${slug}` }];
  },
  services(): BreadcrumbItem[] {
    return [
      { name: "Home", href: "/" },
      { name: "Visa Services", href: "/services" },
    ];
  },
  familyVisa(slug: string, label: string): BreadcrumbItem[] {
    return [...BREADCRUMBS.services(), { name: label, href: `/services/${slug}` }];
  },
  about(): BreadcrumbItem[] {
    return [
      { name: "Home", href: "/" },
      { name: "About", href: "/about" },
    ];
  },
  contact(): BreadcrumbItem[] {
    return [
      { name: "Home", href: "/" },
      { name: "Contact", href: "/contact" },
    ];
  },
  testimonials(): BreadcrumbItem[] {
    return [
      { name: "Home", href: "/" },
      { name: "Consultation", href: "/testimonials" },
    ];
  },
  blog(): BreadcrumbItem[] {
    return [
      { name: "Home", href: "/" },
      { name: "Guides", href: "/blog" },
    ];
  },
  blogPost(slug: string, title: string): BreadcrumbItem[] {
    const shortTitle = title.split("—")[0].trim();
    return [...BREADCRUMBS.blog(), { name: shortTitle, href: `/blog/${slug}` }];
  },
};
