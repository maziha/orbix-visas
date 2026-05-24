import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin } from "lucide-react";
import { BRAND_LOGOS } from "@/lib/brand-logos";
import { CONTACT_EMAIL, CONTACT_PHONE } from "@/lib/contact-info";

/*
 * Social links: add real profile URLs before going live.
 * Example reinstatement:
 *
 * const socialLinks = [
 *   { label: "Facebook", href: "https://facebook.com/...", icon: Facebook },
 *   { label: "Instagram", href: "https://instagram.com/...", icon: Instagram },
 * ];
 *
 * {socialLinks.map(({ label, href, icon: Icon }) => (
 *   <a key={label} href={href} aria-label={label} target="_blank" rel="noreferrer" ...>
 *     <Icon />
 *   </a>
 * ))}
 */

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
  return (
    <footer className="site-footer bg-brand-dark text-white">
      <div className="container-px mx-auto max-w-7xl py-10 sm:py-12 lg:py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10">
        <div>
          <img
            src={BRAND_LOGOS.onNavy}
            alt="Orbix Overseas Careers"
            className="h-10 sm:h-12 lg:h-14 w-auto mb-4 object-contain"
          />
          <p className="text-white/70 text-xs sm:text-sm">Your trusted partner for global opportunities.</p>
          {/* Social links: add real profile URLs before going live */}
        </div>

        <div>
          <h4 className="font-display text-base sm:text-lg mb-3 sm:mb-4 text-[var(--accent-sky)]">Study Abroad</h4>
          <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-white/80">
            {studyAbroadLinks.map(({ label, to }) => (
              <li key={to}>
                <Link to={to}>{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-base sm:text-lg mb-3 sm:mb-4 text-[var(--accent-sky)]">Migration</h4>
          <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-white/80">
            {migrationLinks.map(({ label, to }) => (
              <li key={to}>
                <Link to={to}>{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-base sm:text-lg mb-3 sm:mb-4 text-[var(--accent-sky)]">Services</h4>
          <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-white/80">
            {serviceLinks.map(({ label, hash }) => (
              <li key={hash}>
                <Link to="/services" hash={hash}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-base sm:text-lg mb-3 sm:mb-4 text-[var(--accent-sky)]">Contact</h4>
          <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-white/80">
            <li className="flex items-start gap-2"><Phone className="h-3.5 w-3.5 sm:h-4 sm:w-4 mt-0.5 shrink-0 text-[var(--accent-sky)]" /> {CONTACT_PHONE}</li>
            <li className="flex items-start gap-2">
              <Mail className="h-3.5 w-3.5 sm:h-4 sm:w-4 mt-0.5 shrink-0 text-[var(--accent-sky)]" />
              {/* TODO: Confirm final domain email address with client before going live */}
              <a href={`mailto:${CONTACT_EMAIL}`} className="break-all">
                {CONTACT_EMAIL}
              </a>
            </li>
            <li className="flex items-start gap-2"><MapPin className="h-3.5 w-3.5 sm:h-4 sm:w-4 mt-0.5 shrink-0 text-[var(--accent-sky)]" /> Head Office, Kochi, Kerala, India</li>
            <li><Link to="/contact" className="text-[var(--accent-sky)] hover:underline">View All Offices →</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-px mx-auto max-w-7xl py-4 sm:py-5 flex flex-col md:flex-row items-center justify-between gap-2 sm:gap-3 text-[11px] sm:text-xs text-white/60 text-center md:text-left">
          <span>© {new Date().getFullYear()} Orbix Overseas Careers. All rights reserved.</span>
          {/* Legal links: add Privacy Policy and Terms URLs before going live */}
        </div>
      </div>
    </footer>
  );
}