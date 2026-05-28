import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { ChevronDown, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useModal } from "./modal-store";
import { ContactPhoneLinksList } from "@/components/site/ContactPhoneLinks";
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

function buildPreview(labels: string[], max = 3) {
  if (labels.length === 0) return "";
  const shown = labels.slice(0, max);
  const rest = labels.length - shown.length;
  const text = shown.join(" · ");
  return rest > 0 ? `${text} · +${rest} more` : text;
}

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
  const count = links.length;
  const preview = buildPreview(links.map((link) => link.label));
  const panelId = `mobile-nav-panel-${sectionId}`;

  return (
    <div className={cn("mobile-nav-section", open && "mobile-nav-section--open")}>
      <button
        type="button"
        onClick={() => onToggle(sectionId)}
        className="mobile-nav-section__trigger"
        aria-expanded={open}
        aria-controls={panelId}
      >
        <span className="mobile-nav-section__trigger-text">
          <span className="mobile-nav-section__title">{title}</span>
          <span className="mobile-nav-section__hint">
            {open ? "Tap to collapse" : `Tap to expand · ${count} links`}
          </span>
        </span>
        <span className="mobile-nav-section__count" aria-hidden>
          {count}
        </span>
        <ChevronDown
          className={cn("mobile-nav-section__chevron", open && "mobile-nav-section__chevron--open")}
          aria-hidden
        />
      </button>

      {!open && preview ? (
        <p className="mobile-nav-section__preview">{preview}</p>
      ) : null}

      <div id={panelId} className="mobile-nav-section__panel" hidden={!open}>
        <p className="mobile-nav-section__panel-label">Choose a page</p>
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

export function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { openConsultation } = useModal();
  const [openSection, setOpenSection] = useState<ExploreSectionId | null>(null);

  useEffect(() => {
    if (!open) setOpenSection(null);
  }, [open]);

  const toggleSection = (id: ExploreSectionId) => {
    setOpenSection((current) => (current === id ? null : id));
  };

  if (!open) return null;

  const navigate = () => onClose();

  return createPortal(
    <div className="lg:hidden" role="dialog" aria-modal="true" aria-label="Navigation menu">
      <button
        type="button"
        className="mobile-nav-backdrop"
        onClick={onClose}
        aria-label="Close menu"
      />

      <div className="mobile-nav-panel">
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
            <p className="mobile-nav-group__hint">
              Tap a section to open its links — opening another section closes the previous one.
            </p>
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
          {/* <ContactPhoneLinksList variant="mobile" className="space-y-2" /> */}
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
