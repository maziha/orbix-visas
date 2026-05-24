import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { ChevronDown, Phone, X } from "lucide-react";
import { useModal } from "./modal-store";
import { CONTACT_PHONE, CONTACT_PHONE_TEL, WHATSAPP_URL } from "@/lib/contact-info";
import {
  migrationLinks,
  serviceNavLinks,
  studyCountryLinks,
} from "@/lib/nav-links";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="currentColor" aria-hidden>
      <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.15-.515 2.478-1.318.116-.272.13-.57.13-.86 0-.616-1.36-.974-1.59-1.073zM16.99 25.62c-1.79 0-3.55-.484-5.078-1.39l-3.65 1.16 1.183-3.51a9.797 9.797 0 0 1-1.59-5.378c0-5.405 4.4-9.804 9.805-9.804s9.804 4.4 9.804 9.805-4.4 9.805-9.805 9.805zm0-21.62C10.51 4 5.205 9.305 5.205 15.785a11.7 11.7 0 0 0 1.69 6.094L4.747 28l6.317-2.02a11.804 11.804 0 0 0 5.925 1.61c6.48 0 11.786-5.304 11.786-11.785S23.47 4.013 16.99 4z" />
    </svg>
  );
}

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
          className={`h-5 w-5 shrink-0 text-white/70 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
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
          <NavSection title="Study Abroad" defaultOpen>
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

          <div className="mobile-nav-section border-b-0">
            <Link to="/about" onClick={navigate} className="mobile-nav-link py-4 text-base font-medium">
              About
            </Link>
          </div>
        </nav>

        <div className="shrink-0 space-y-3 border-t border-white/15 px-5 py-6">
          <a href={`tel:${CONTACT_PHONE_TEL}`} className="mobile-nav-footer-link">
            <Phone className="h-5 w-5 shrink-0" aria-hidden />
            {CONTACT_PHONE}
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="mobile-nav-footer-link"
          >
            <WhatsAppIcon className="h-5 w-5 shrink-0" />
            WhatsApp
          </a>
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
