import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { ChevronDown, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useModal } from "./modal-store";
import {
  migrationLinks,
  serviceNavLinks,
  studyCountryLinks,
} from "@/lib/nav-links";

type MobileNavLinkItem = {
  to: string;
  hash?: string;
  label: string;
};

type ExploreSectionId = "study" | "migration" | "services";

function NavSection({
  sectionId,
  title,
  links,
  open,
  onToggle,
  onNavigate,
}: {
  sectionId: ExploreSectionId;
  title: string;
  links: MobileNavLinkItem[];
  open: boolean;
  onToggle: (id: ExploreSectionId) => void;
  onNavigate: () => void;
}) {
  const panelId = `mobile-nav-panel-${sectionId}`;

  return (
    <div
      className={cn(
        "mobile-nav-section",
        `mobile-nav-section--${sectionId}`,
        open && "mobile-nav-section--open",
      )}
    >
      <button
        type="button"
        onClick={() => onToggle(sectionId)}
        className="mobile-nav-section__trigger"
        aria-expanded={open}
        aria-controls={panelId}
      >
        <span className="mobile-nav-section__title flex-1 min-w-0 text-left">{title}</span>
        <ChevronDown
          className={cn("mobile-nav-section__chevron", open && "mobile-nav-section__chevron--open")}
          aria-hidden
        />
      </button>

      <div
        className={cn("mobile-nav-section__panel-wrap", open && "mobile-nav-section__panel-wrap--open")}
      >
        <div className="mobile-nav-section__panel-inner">
          <div id={panelId} className="mobile-nav-section__panel" role="region" aria-label={title}>
            <ul className="mobile-nav-section__list">
              {links.map((link) => (
                <li key={`${link.to}${link.hash ?? ""}-${link.label}`}>
                  <Link
                    to={link.to}
                    hash={link.hash}
                    className="mobile-nav-link"
                    onClick={onNavigate}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function TopNavLink({
  to,
  label,
  onNavigate,
}: {
  to: string;
  label: string;
  onNavigate: () => void;
}) {
  return (
    <Link to={to} onClick={onNavigate} className="mobile-nav-top-link">
      {label}
    </Link>
  );
}

const studyAbroadLinks: MobileNavLinkItem[] = [
  { to: "/study-abroad", label: "All destinations" },
  ...studyCountryLinks.map((item) => ({ to: item.to, label: item.name })),
];

const migrationNavLinks: MobileNavLinkItem[] = [
  { to: "/migration", label: "Migration overview" },
  ...migrationLinks.map((item) => ({ to: item.to, label: item.name })),
];

const servicesNavLinks: MobileNavLinkItem[] = serviceNavLinks.map((item) => ({
  to: item.to,
  hash: item.hash,
  label: item.name,
}));

const MENU_EXIT_MS = 680;

export function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { openConsultation } = useModal();
  const [openSection, setOpenSection] = useState<ExploreSectionId | null>(null);
  const [present, setPresent] = useState(false);
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (!open) setOpenSection(null);
  }, [open]);

  useEffect(() => {
    if (open) {
      setPresent(true);
      const frame = requestAnimationFrame(() => {
        requestAnimationFrame(() => setActive(true));
      });
      return () => cancelAnimationFrame(frame);
    }

    setActive(false);
    const timer = window.setTimeout(() => setPresent(false), MENU_EXIT_MS);
    return () => clearTimeout(timer);
  }, [open]);

  const toggleSection = (id: ExploreSectionId) => {
    setOpenSection((current) => (current === id ? null : id));
  };

  if (!present) return null;

  const navigate = () => onClose();

  return createPortal(
    <div
      className={cn("mobile-nav-root lg:hidden", active && "mobile-nav-root--active")}
      role="dialog"
      aria-modal="true"
      aria-label="Navigation menu"
    >
      <button
        type="button"
        className="mobile-nav-backdrop"
        onClick={onClose}
        aria-label="Close menu"
      />

      <div className="mobile-nav-panel">
        <div className="mobile-nav-panel__decor" aria-hidden>
          <svg className="mobile-nav-panel__flight-arc" viewBox="0 0 200 120" fill="none">
            <path
              d="M8 95 Q 60 20, 120 48 T 192 28"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeDasharray="6 5"
            />
          </svg>
          <span className="mobile-nav-panel__stamp mobile-nav-panel__stamp--a" />
          <span className="mobile-nav-panel__stamp mobile-nav-panel__stamp--b" />
        </div>

        <div className="mobile-nav-panel__header">
          <p className="mobile-nav-panel__title font-display">Menu</p>
          <button
            type="button"
            onClick={onClose}
            className="mobile-nav-panel__close"
            aria-label="Close menu"
          >
            <X className="h-6 w-6" aria-hidden />
          </button>
        </div>

        <nav className="mobile-nav-panel__nav">
          <div className="mobile-nav-group">
            <p className="mobile-nav-group__label">Pages</p>
            <div className="mobile-nav-group__links">
              <TopNavLink to="/" label="Home" onNavigate={navigate} />
              <TopNavLink to="/about" label="About" onNavigate={navigate} />
              <TopNavLink to="/contact" label="Contact" onNavigate={navigate} />
            </div>
          </div>

          <div className="mobile-nav-group">
            <p className="mobile-nav-group__label">Explore</p>
            <div className="mobile-nav-sections">
              <NavSection
                sectionId="study"
                title="Study Abroad"
                links={studyAbroadLinks}
                open={openSection === "study"}
                onToggle={toggleSection}
                onNavigate={navigate}
              />
              <NavSection
                sectionId="migration"
                title="Migration"
                links={migrationNavLinks}
                open={openSection === "migration"}
                onToggle={toggleSection}
                onNavigate={navigate}
              />
              <NavSection
                sectionId="services"
                title="Services"
                links={servicesNavLinks}
                open={openSection === "services"}
                onToggle={toggleSection}
                onNavigate={navigate}
              />
            </div>
          </div>
        </nav>

        <div className="mobile-nav-footer shrink-0 space-y-3 px-5 py-6">
          <button
            type="button"
            onClick={() => {
              onClose();
              openConsultation();
            }}
            className="nav-cta w-full"
          >
            Book a Consultation
          </button>
        </div>
      </div>
    </div>,
    document.body,
  );
}
