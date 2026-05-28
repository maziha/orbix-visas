import { Link } from "@tanstack/react-router";
import { useEffect, useLayoutEffect, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronDown, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { forceUnlockBodyScroll, lockBodyScroll } from "@/lib/body-scroll-lock";
import {
  flightPathDraw,
  mobileBackdrop,
  mobilePanel,
  springGentle,
  staggerContainer,
  staggerItem,
} from "@/lib/motion/presets";
import { MotionPressable } from "@/components/motion";
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
  index,
}: {
  to: string;
  label: string;
  onNavigate: () => void;
  index: number;
}) {
  const reduced = useReducedMotion();

  return (
    <motion.div variants={reduced ? undefined : staggerItem} custom={index}>
      <Link to={to} onClick={onNavigate} className="mobile-nav-top-link">
        {label}
      </Link>
    </motion.div>
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
  const reduced = useReducedMotion();

  useEffect(() => {
    if (!open) setOpenSection(null);
  }, [open]);

  useLayoutEffect(() => {
    if (!open) return;
    return lockBodyScroll();
  }, [open]);

  useEffect(() => {
    if (!open) forceUnlockBodyScroll();
  }, [open]);

  const toggleSection = (id: ExploreSectionId) => {
    setOpenSection((current) => (current === id ? null : id));
  };

  const navigate = () => onClose();

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          key="mobile-nav"
          className="mobile-nav-root mobile-nav-root--active lg:hidden"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
          initial={{ pointerEvents: "auto" }}
        >
          <motion.button
            type="button"
            className="mobile-nav-backdrop"
            onClick={onClose}
            aria-label="Close menu"
            variants={mobileBackdrop}
            initial="hidden"
            animate="visible"
            exit="hidden"
            style={{ backdropFilter: reduced ? undefined : "blur(12px)" }}
          />

          <motion.div
            className="mobile-nav-panel"
            style={{ transform: undefined }}
            variants={reduced ? undefined : mobilePanel}
            initial={reduced ? false : "hidden"}
            animate="visible"
            exit="hidden"
          >
            <div className="mobile-nav-panel__decor" aria-hidden>
              <svg className="mobile-nav-panel__flight-arc" viewBox="0 0 200 120" fill="none">
                <motion.path
                  d="M8 95 Q 60 20, 120 48 T 192 28"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeDasharray="6 5"
                  variants={flightPathDraw}
                  initial="hidden"
                  animate="visible"
                />
              </svg>
              <motion.span
                className="mobile-nav-panel__stamp mobile-nav-panel__stamp--a"
                animate={{ y: [0, -8, 0], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.span
                className="mobile-nav-panel__stamp mobile-nav-panel__stamp--b"
                animate={{ y: [0, -6, 0], opacity: [0.2, 0.5, 0.2] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              />
            </div>

            <div className="mobile-nav-panel__header">
              <motion.p
                className="mobile-nav-panel__title font-display"
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={springGentle}
              >
                Menu
              </motion.p>
              <motion.button
                type="button"
                onClick={onClose}
                className="mobile-nav-panel__close"
                aria-label="Close menu"
                whileHover={{ scale: 1.08, rotate: 90 }}
                whileTap={{ scale: 0.92 }}
                transition={springGentle}
              >
                <X className="h-6 w-6" aria-hidden />
              </motion.button>
            </div>

            <nav className="mobile-nav-panel__nav">
              <motion.div
                className="mobile-nav-group"
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
              >
                <p className="mobile-nav-group__label">Pages</p>
                <div className="mobile-nav-group__links">
                  <TopNavLink to="/" label="Home" onNavigate={navigate} index={0} />
                  <TopNavLink to="/about" label="About" onNavigate={navigate} index={1} />
                  <TopNavLink to="/contact" label="Contact" onNavigate={navigate} index={2} />
                </div>
              </motion.div>

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
              <MotionPressable
                type="button"
                pulse
                onClick={() => {
                  onClose();
                  openConsultation();
                }}
                className="nav-cta w-full"
              >
                Book a Consultation
              </MotionPressable>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}
