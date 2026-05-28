import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { ChevronDown, X } from "lucide-react";
import { useModal } from "./modal-store";
import { ContactPhoneLinksList } from "@/components/site/ContactPhoneLinks";
import {
  migrationLinks,
  serviceNavLinks,
  studyCountryLinks,
} from "@/lib/nav-links";

function NavSection({
  title,
  children,
  defaultOpen = false,
}: {
  title: string;
  children: ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="mobile-nav-section">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="mobile-nav-section__title"
        aria-expanded={open}
      >
        {title}
        <ChevronDown
          className={`mobile-nav-section__chevron h-5 w-5 shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          aria-hidden
        />
      </button>
      {open ? <div className="space-y-0.5 pb-4 pl-1">{children}</div> : null}
    </div>
  );
}

function SubLink({
  to,
  hash,
  label,
  onNavigate,
}: {
  to: string;
  hash?: string;
  label: string;
  onNavigate: () => void;
}) {
  return (
    <Link to={to} hash={hash} onClick={onNavigate} className="mobile-nav-link">
      {label}
    </Link>
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
    <div className="mobile-nav-section">
      <Link to={to} onClick={onNavigate} className="mobile-nav-section__title mobile-nav-top-link">
        {label}
      </Link>
    </div>
  );
}

export function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { setOpen } = useModal();

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
        <div className="flex shrink-0 items-center justify-end px-5 py-4">
          <button
            type="button"
            onClick={onClose}
            className="mobile-nav-panel__close"
            aria-label="Close menu"
          >
            <X className="h-7 w-7" aria-hidden />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-5 pb-6">
          <TopNavLink to="/" label="Home" onNavigate={navigate} />

          <NavSection title="Study Abroad">
            <SubLink to="/study-abroad" label="All destinations" onNavigate={navigate} />
            {studyCountryLinks.map((item) => (
              <SubLink key={item.name} to={item.to} label={item.name} onNavigate={navigate} />
            ))}
          </NavSection>

          <NavSection title="Migration">
            <SubLink to="/migration" label="Migration overview" onNavigate={navigate} />
            {migrationLinks.map((item) => (
              <SubLink key={item.name} to={item.to} label={item.name} onNavigate={navigate} />
            ))}
          </NavSection>

          <NavSection title="Services">
            {serviceNavLinks.map((item) => (
              <SubLink
                key={item.name}
                to={item.to}
                hash={item.hash}
                label={item.name}
                onNavigate={navigate}
              />
            ))}
          </NavSection>

          <TopNavLink to="/about" label="About" onNavigate={navigate} />
          <TopNavLink to="/contact" label="Contact" onNavigate={navigate} />
        </nav>

        <div className="mobile-nav-footer shrink-0 space-y-3 px-5 py-6">
          <ContactPhoneLinksList variant="mobile" className="space-y-2" />
          <button
            type="button"
            onClick={() => {
              onClose();
              setOpen("consultation");
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
