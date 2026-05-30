import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronDown, Mail, X } from "lucide-react";
import { cn } from "@/lib/utils";
import type { BodyScrollUnlockOptions } from "@/lib/body-scroll-lock";
import { BRAND_LOGOS } from "@/lib/brand-logos";
import { COMPANY_NAME, CONTACT_EMAIL } from "@/lib/contact-info";
import { mobileBackdrop, mobilePanel, mobilePanelContent } from "@/lib/motion/presets";
import { MotionPressable } from "@/components/motion";
import { useModal } from "./modal-store";
import {
  migrationLinks,
  serviceNavLinks,
  studyCountryLinks,
} from "@/lib/nav-links";
import { useMobileNavClick } from "@/lib/mobile-nav-click";

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
  onNavigate: (to: string) => void;
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
        className={cn(
          "mobile-nav-section__panel-wrap",
          open && "mobile-nav-section__panel-wrap--open",
        )}
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
                    onClick={() => onNavigate(link.to)}
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

export function MobileMenu({
  open,
  onClose,
  onExitComplete,
}: {
  open: boolean;
  onClose: (options?: BodyScrollUnlockOptions) => void;
  /** Fires after close animation finishes — use to release scroll lock. */
  onExitComplete?: () => void;
}) {
  const { openConsultation } = useModal();
  const [openSection, setOpenSection] = useState<ExploreSectionId | null>(null);
  const [portalRoot, setPortalRoot] = useState<HTMLElement | null>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    setPortalRoot(document.body);
  }, []);

  useEffect(() => {
    if (!open) setOpenSection(null);
  }, [open]);

  const toggleSection = (id: ExploreSectionId) => {
    setOpenSection((current) => (current === id ? null : id));
  };

  const onNavClick = useMobileNavClick(onClose);

  if (!portalRoot) return null;

  const dialogProps = {
    role: "dialog" as const,
    "aria-modal": true,
    "aria-label": "Navigation menu",
  };

  return createPortal(
    <AnimatePresence onExitComplete={() => onExitComplete?.()}>
      {open &&
        (reduced ? (
          <div
            key="mobile-nav"
            className="mobile-nav-root mobile-nav-root--active lg:hidden"
            {...dialogProps}
          >
            <button
              type="button"
              className="mobile-nav-backdrop"
              onClick={() => onClose()}
              aria-label="Close menu"
            />
            <div className="mobile-nav-panel-shell lg:hidden">
              <div className="mobile-nav-panel">{menuPanelContent()}</div>
            </div>
          </div>
        ) : (
          <>
            <motion.button
              key="mobile-nav-backdrop"
              type="button"
              className="mobile-nav-backdrop lg:hidden"
              onClick={() => onClose()}
              aria-label="Close menu"
              variants={mobileBackdrop}
              initial="hidden"
              animate="visible"
              exit="hidden"
            />
            <motion.div
              key="mobile-nav-panel-shell"
              className="mobile-nav-panel-shell lg:hidden"
              variants={mobilePanel}
              initial="hidden"
              animate="visible"
              exit="hidden"
              style={{ willChange: "clip-path, opacity" }}
              {...dialogProps}
            >
              <motion.div
                className="mobile-nav-panel"
                variants={mobilePanelContent}
                initial="hidden"
                animate="visible"
                exit="hidden"
                style={{ willChange: "transform, opacity" }}
              >
                {menuPanelContent()}
              </motion.div>
            </motion.div>
          </>
        ))}
    </AnimatePresence>,
    portalRoot,
  );

  function menuPanelContent() {
    return (
      <>
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
          <Link to="/" onClick={onNavClick("/")} className="mobile-nav-panel__logo-link">
            <img
              src={BRAND_LOGOS.onWhite}
              alt={COMPANY_NAME}
              className="mobile-nav-panel__logo"
            />
          </Link>
          <button
            type="button"
            onClick={() => onClose()}
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
              <Link
                to="/"
                onClick={onNavClick("/")}
                className="mobile-nav-top-link"
                activeOptions={{ exact: true }}
                activeProps={{ className: "mobile-nav-top-link", "aria-current": "page" }}
              >
                Home
              </Link>
              <Link
                to="/about"
                onClick={onNavClick("/about")}
                className="mobile-nav-top-link"
                activeOptions={{ exact: true }}
                activeProps={{ className: "mobile-nav-top-link", "aria-current": "page" }}
              >
                About
              </Link>
              <Link
                to="/contact"
                onClick={onNavClick("/contact")}
                className="mobile-nav-top-link"
                activeOptions={{ exact: true }}
                activeProps={{ className: "mobile-nav-top-link", "aria-current": "page" }}
              >
                Contact
              </Link>
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
                onNavigate={onNavClick}
              />
              <NavSection
                sectionId="migration"
                title="Migration"
                links={migrationNavLinks}
                open={openSection === "migration"}
                onToggle={toggleSection}
                onNavigate={onNavClick}
              />
              <NavSection
                sectionId="services"
                title="Services"
                links={servicesNavLinks}
                open={openSection === "services"}
                onToggle={toggleSection}
                onNavigate={onNavClick}
              />
            </div>
          </div>
        </nav>

        <div className="mobile-nav-footer shrink-0 px-5 py-6">
          <div className="mobile-nav-footer__actions">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="mobile-nav-footer-link"
              onClick={() => onClose()}
            >
              <Mail className="h-4 w-4 shrink-0" aria-hidden />
              Email us
            </a>
            <MotionPressable
              type="button"
              pulse
              onClick={() => {
                onClose();
                openConsultation();
              }}
              className="nav-cta mobile-nav-footer__cta"
            >
              Book a Consultation
            </MotionPressable>
          </div>
        </div>
      </>
    );
  }
}
