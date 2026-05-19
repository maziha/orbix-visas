import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ChevronDown, Phone, Menu, X } from "lucide-react";
import { useModal } from "./modal-store";
import { MobileMenu } from "./MobileMenu";
import logo from "@/assets/orbix-logo.jpg";

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

function Dropdown({ label, items }: { label: string; items: { name: string; to: string }[] }) {
  return (
    <div className="relative group">
      <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-foreground hover:text-[var(--gold)] transition-colors">
        {label} <ChevronDown className="h-3.5 w-3.5" />
      </button>
      <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
        <div className="bg-white rounded-lg shadow-xl border border-border min-w-[220px] py-2">
          {items.map((i) => (
            <Link
              key={i.name}
              to={i.to}
              className="block px-4 py-2 text-sm text-foreground hover:bg-[var(--surface)] hover:text-[var(--navy)] transition-colors"
            >
              {i.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

function ServicesDropdown() {
  return (
    <div className="relative group">
      <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-foreground hover:text-[var(--gold)] transition-colors">
        Services <ChevronDown className="h-3.5 w-3.5" />
      </button>
      <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
        <div className="bg-white rounded-lg shadow-xl border border-border min-w-[460px] p-5 grid grid-cols-2 gap-4">
          <div>
            <div className="label-tag mb-2">Visa Services</div>
            <ul className="space-y-1.5">
              {["Spouse Visa","Parent Visa","Job Seekers Visa","Visit Visa","Student Dependent Visa"].map(s => (
                <li key={s}><Link to="/services" className="text-sm text-foreground hover:text-[var(--gold)]">{s}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <div className="label-tag mb-2">Other Services</div>
            <ul className="space-y-1.5">
              {["IELTS Test Booking","Loan Assistance","Post Landing Services"].map(s => (
                <li key={s}><Link to="/services" className="text-sm text-foreground hover:text-[var(--gold)]">{s}</Link></li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { setOpen } = useModal();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 bg-white transition-all duration-300 ${
        scrolled ? "shadow-md" : "shadow-none"
      }`}
    >
      <div className="container-px mx-auto flex items-center justify-between h-16 lg:h-20 max-w-7xl">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Orbix Overseas Careers" className="h-10 lg:h-12 w-auto" />
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          <Dropdown label="Why Orbix" items={whyOrbix} />
          <Dropdown label="Study Abroad" items={studyCountries} />
          <Dropdown label="Migration" items={migration} />
          <ServicesDropdown />
          <Link to="/contact" className="px-3 py-2 text-sm font-medium text-foreground hover:text-[var(--gold)] transition-colors">
            Contact Us
          </Link>
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <a href="tel:+918592026134" className="flex items-center gap-1.5 text-sm font-medium text-[var(--navy)]">
            <Phone className="h-4 w-4 text-[var(--gold)]" /> +91 8592026134
          </a>
          <button onClick={() => setOpen("consultation")} className="btn-gold px-5 py-2.5 rounded-md text-sm">
            Book a Consultation
          </button>
        </div>

        <button className="lg:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menu">
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}