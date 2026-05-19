import { Link } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { ChevronDown, Phone, X } from "lucide-react";
import { useModal } from "./modal-store";

const studyCountries = [
  { name: "Canada", to: "/study-abroad/canada" },
  { name: "Australia", to: "/study-abroad/australia" },
  { name: "New Zealand", to: "/study-abroad/new-zealand" },
  { name: "UK", to: "/study-abroad/uk" },
  { name: "France", to: "/study-abroad/france" },
  { name: "Germany", to: "/study-abroad/germany" },
  { name: "Poland", to: "/study-abroad/poland" },
];

const migration = [
  { name: "Australia PR", to: "/migration/australia-pr" },
  { name: "Canada PR", to: "/migration/canada-pr" },
];

const whyOrbix = [
  { name: "Our Story", to: "/about" },
  { name: "Contact", to: "/contact" },
];

const visaServices = [
  "Spouse Visa",
  "Parent Visa",
  "Job Seekers Visa",
  "Visit Visa",
  "Student Dependent Visa",
];

const otherServices = [
  "IELTS Test Booking",
  "Loan Assistance",
  "Post Landing Services",
];

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
    <div className="border-b border-border">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-4 text-left"
      >
        <span className="font-display text-xl text-[var(--navy)]">{title}</span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-[var(--gold)] transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open ? <div className="space-y-1 pb-5 pl-1">{children}</div> : null}
    </div>
  );
}

function SubLink({ to, label, onNavigate }: { to: string; label: string; onNavigate: () => void }) {
  return (
    <Link
      to={to}
      onClick={onNavigate}
      className="block rounded-lg px-3 py-2.5 text-base text-foreground/90 transition-colors hover:bg-[var(--surface)] hover:text-[var(--navy)]"
    >
      {label}
    </Link>
  );
}

export function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { setOpen } = useModal();

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  if (!open) return null;

  const navigate = () => onClose();

  return (
    <div className="fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal="true" aria-label="Navigation menu">
      <button
        type="button"
        className="absolute inset-0 bg-[var(--navy)]/20 backdrop-blur-[2px]"
        onClick={onClose}
        aria-label="Close menu"
      />

      <div className="absolute inset-y-0 right-0 flex w-full flex-col bg-white shadow-2xl">
        <div className="flex shrink-0 items-center justify-between border-b border-border px-6 py-5">
          <span className="label-tag">Menu</span>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full p-2 text-[var(--navy)] transition-colors hover:bg-[var(--surface)]"
            aria-label="Close menu"
          >
            <X className="h-7 w-7" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-6 pb-8 pt-2">
          <Link
            to="/"
            onClick={navigate}
            className="mb-2 block border-b border-border py-4 font-display text-2xl text-[var(--navy)]"
          >
            Home
          </Link>

          <NavSection title="Why Orbix">
            {whyOrbix.map((item) => (
              <SubLink key={item.name} to={item.to} label={item.name} onNavigate={navigate} />
            ))}
          </NavSection>

          <NavSection title="Study Abroad">
            <SubLink to="/study-abroad" label="All Destinations" onNavigate={navigate} />
            {studyCountries.map((item) => (
              <SubLink key={item.name} to={item.to} label={item.name} onNavigate={navigate} />
            ))}
          </NavSection>

          <NavSection title="Migration">
            <SubLink to="/migration" label="Migration Overview" onNavigate={navigate} />
            {migration.map((item) => (
              <SubLink key={item.name} to={item.to} label={item.name} onNavigate={navigate} />
            ))}
          </NavSection>

          <NavSection title="Services">
            <p className="px-3 pt-1 text-xs font-semibold uppercase tracking-widest text-[var(--gold)]">Visa Services</p>
            {visaServices.map((name) => (
              <SubLink key={name} to="/services" label={name} onNavigate={navigate} />
            ))}
            <p className="mt-3 px-3 text-xs font-semibold uppercase tracking-widest text-[var(--gold)]">Other Services</p>
            {otherServices.map((name) => (
              <SubLink key={name} to="/services" label={name} onNavigate={navigate} />
            ))}
          </NavSection>

          <Link
            to="/contact"
            onClick={navigate}
            className="block border-b border-border py-4 font-display text-xl text-[var(--navy)]"
          >
            Contact Us
          </Link>
        </nav>

        <div className="shrink-0 border-t border-border bg-[var(--surface)] px-6 py-6 space-y-4">
          <a
            href="tel:+918592026134"
            className="flex items-center justify-center gap-2 text-base font-medium text-[var(--navy)]"
          >
            <Phone className="h-5 w-5 text-[var(--gold)]" />
            +91 8592026134
          </a>
          <button
            type="button"
            onClick={() => {
              onClose();
              setOpen("consultation");
            }}
            className="btn-gold w-full rounded-lg px-6 py-4 text-base font-semibold"
          >
            Book a Free Consultation
          </button>
        </div>
      </div>
    </div>
  );
}
