"use client";

import { Mail, MapPin } from "lucide-react";
import { BRAND_LOGOS } from "@/lib/brand-logos";
import { ContactPhoneLinksList } from "@/components/site/ContactPhoneLinks";
import {
  COMPANY_ADDRESS,
  COMPANY_NAME,
  CONTACT_EMAIL,
  GSTIN,
} from "@/lib/contact-info";
import { MotionLink, Reveal, RevealItem, RevealStagger } from "@/components/motion";
import { getFeaturedBlogPosts } from "@/lib/blog-posts";

const studyAbroadLinks = [
  { label: "Canada", to: "/study-abroad/canada" as const },
  { label: "Australia", to: "/study-abroad/australia" as const },
  { label: "UK", to: "/study-abroad/uk" as const },
  { label: "New Zealand", to: "/study-abroad/new-zealand" as const },
  { label: "Germany", to: "/study-abroad/germany" as const },
  { label: "France", to: "/study-abroad/france" as const },
  { label: "Poland", to: "/study-abroad/poland" as const },
];

const migrationLinks = [
  { label: "Canada PR", to: "/migration/canada-pr" as const },
  { label: "Australia PR", to: "/migration/australia-pr" as const },
];

const serviceLinks = [
  { label: "Spouse Visa", hash: "spouse-visa" },
  { label: "Parent Visa", hash: "parent-visa" },
  { label: "Job Seekers Visa", hash: "job-seekers-visa" },
  { label: "Visit Visa", hash: "visit-visa" },
  { label: "IELTS Booking", hash: "ielts-booking" },
  { label: "Loan Assistance", hash: "loan-assistance" },
] as const;

export function Footer() {
  const guideLinks = [
    ...getFeaturedBlogPosts().map((post) => ({
      label: post.title.split("—")[0].trim(),
      to: `/blog/${post.slug}` as const,
    })),
    { label: "All Guides", to: "/blog" as const },
  ];

  return (
    <footer className="site-footer relative z-[1] bg-brand-dark text-white">
      <Reveal as="section">
        <RevealStagger className="site-container py-10 sm:py-12 lg:py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 sm:gap-10">
          <RevealItem>
            <img
              src={BRAND_LOGOS.onNavy}
              alt={COMPANY_NAME}
              width={140}
              height={56}
              loading="lazy"
              decoding="async"
              className="h-10 sm:h-12 lg:h-14 w-auto mb-4 object-contain"
            />
            <p className="text-white/70 text-xs sm:text-sm">
              Your trusted partner for global opportunities.
            </p>
          </RevealItem>

          <RevealItem>
            <h3 className="font-display text-base sm:text-lg mb-3 sm:mb-4 text-[var(--accent-sky)]">
              Study Abroad
            </h3>
            <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-white/80">
              {studyAbroadLinks.map(({ label, to }) => (
                <li key={to}>
                  <MotionLink href={to}>{label}</MotionLink>
                </li>
              ))}
            </ul>
          </RevealItem>

          <RevealItem>
            <h3 className="font-display text-base sm:text-lg mb-3 sm:mb-4 text-[var(--accent-sky)]">
              Migration
            </h3>
            <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-white/80">
              {migrationLinks.map(({ label, to }) => (
                <li key={to}>
                  <MotionLink href={to}>{label}</MotionLink>
                </li>
              ))}
            </ul>
          </RevealItem>

          <RevealItem>
            <h3 className="font-display text-base sm:text-lg mb-3 sm:mb-4 text-[var(--accent-sky)]">
              Guides
            </h3>
            <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-white/80">
              {guideLinks.map(({ label, to }) => (
                <li key={to}>
                  <MotionLink href={to}>{label}</MotionLink>
                </li>
              ))}
            </ul>
          </RevealItem>

          <RevealItem>
            <h3 className="font-display text-base sm:text-lg mb-3 sm:mb-4 text-[var(--accent-sky)]">
              Services
            </h3>
            <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-white/80">
              {serviceLinks.map(({ label, hash }) => (
                <li key={hash}>
                  <MotionLink href={`/services#${hash}`}>
                    {label}
                  </MotionLink>
                </li>
              ))}
            </ul>
          </RevealItem>

          <RevealItem>
            <h3 className="font-display text-base sm:text-lg mb-3 sm:mb-4 text-[var(--accent-sky)]">
              Contact
            </h3>
            <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-white/80">
              <li>
                <ContactPhoneLinksList variant="footer" />
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-3.5 w-3.5 sm:h-4 sm:w-4 mt-0.5 shrink-0 text-[var(--accent-sky)]" />
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="break-all hover:text-[var(--accent-sky)]"
                >
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-3.5 w-3.5 sm:h-4 sm:w-4 mt-0.5 shrink-0 text-[var(--accent-sky)]" />
                <span className="leading-relaxed">{COMPANY_ADDRESS}</span>
              </li>
              <li>
                <MotionLink href="/contact" className="text-[var(--accent-sky)]">
                  Contact page →
                </MotionLink>
              </li>
            </ul>
          </RevealItem>
        </RevealStagger>
      </Reveal>
      <div className="border-t border-white/10">
        <Reveal delay={0.1}>
          <div className="site-container py-4 sm:py-5 flex flex-col md:flex-row items-center justify-between gap-2 sm:gap-3 text-[11px] sm:text-xs text-white/60 text-center md:text-left">
            <span suppressHydrationWarning>
              © {new Date().getFullYear()} {COMPANY_NAME}. GSTIN {GSTIN}. All rights reserved.
            </span>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}
