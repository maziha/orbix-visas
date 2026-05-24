import { Link, useRouterState } from "@tanstack/react-router";
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { ChevronDown, Menu } from "lucide-react";
import { useModal } from "./modal-store";
import { MobileMenu } from "./MobileMenu";
import { forceUnlockBodyScroll, lockBodyScroll } from "@/lib/body-scroll-lock";
import { CONTACT_PHONE, CONTACT_PHONE_TEL } from "@/lib/contact-info";
import { getHeaderLogo } from "@/lib/brand-logos";
import {
  migrationLinks,
  serviceNavLinks,
  studyCountryLinks,
} from "@/lib/nav-links";

function NavPhoneIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function NavDropdown({
  label,
  items,
}: {
  label: string;
  items: readonly { name: string; to: string; hash?: string }[];
}) {
  return (
    <div className="nav-dropdown-wrap">
      <button type="button" className="site-nav__trigger" aria-haspopup="true">
        {label} <ChevronDown className="site-nav__chevron h-3.5 w-3.5 shrink-0" aria-hidden />
      </button>
      <div className="nav-dropdown-panel">
        <div className="nav-dropdown-panel__inner">
          {items.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              {...(item.hash ? { hash: item.hash } : {})}
              className="nav-dropdown-link"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

function ServicesDropdown() {
  const visa = serviceNavLinks.slice(0, 5);
  const other = serviceNavLinks.slice(5);

  return (
    <div className="nav-dropdown-wrap">
      <button type="button" className="site-nav__trigger" aria-haspopup="true">
        Services <ChevronDown className="site-nav__chevron h-3.5 w-3.5 shrink-0" aria-hidden />
      </button>
      <div className="nav-dropdown-panel">
        <div className="nav-dropdown-panel__inner nav-dropdown-panel__inner--services">
          <div className="nav-dropdown-column">
            {visa.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                {...(item.hash ? { hash: item.hash } : {})}
                className="nav-dropdown-link"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="nav-dropdown-column">
            {other.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                {...(item.hash ? { hash: item.hash } : {})}
                className="nav-dropdown-link"
              >
                {item.name}
              </Link>
            ))}
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
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isHome = pathname === "/";
  const isFirstPathname = useRef(true);

  const closeMobileMenu = useCallback(() => {
    setMobileOpen(false);
    forceUnlockBodyScroll();
  }, []);

  useEffect(() => {
    if (isFirstPathname.current) {
      isFirstPathname.current = false;
      return;
    }
    setMobileOpen(false);
    forceUnlockBodyScroll();
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY >= 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useLayoutEffect(() => {
    if (!mobileOpen) return;
    return lockBodyScroll();
  }, [mobileOpen]);

  useEffect(() => {
    return () => forceUnlockBodyScroll();
  }, []);

  const atTop = !scrolled;
  const onHero = isHome && atTop;

  return (
    <header
      className={`site-header ${atTop ? "site-header--overlay" : "site-header--solid"}${onHero ? " site-header--on-hero" : ""}`}
    >
      <div className="container-px mx-auto flex h-16 max-w-7xl items-center justify-between lg:h-20">
        <Link to="/" className="site-header__logo-link flex shrink-0 items-center">
          <img
            src={getHeaderLogo(scrolled, onHero)}
            alt="Orbix Overseas Careers"
            className="site-header__logo h-10 w-auto lg:h-12"
          />
        </Link>

        <nav className="site-nav hidden items-center lg:ml-8 lg:flex" aria-label="Main">
          <NavDropdown label="Study Abroad" items={studyCountryLinks} />
          <NavDropdown label="Migration" items={migrationLinks} />
          <ServicesDropdown />
          <Link to="/about" className="site-nav__link px-3 py-2 text-sm font-medium">
            About
          </Link>
        </nav>

        <div className="hidden items-center gap-4 lg:ml-auto lg:flex">
          <a href={`tel:${CONTACT_PHONE_TEL}`} className="nav-phone">
            <NavPhoneIcon />
            {CONTACT_PHONE}
          </a>
          <button type="button" onClick={() => setOpen("consultation")} className="nav-cta">
            Book a Consultation
          </button>
        </div>

        <button
          type="button"
          className="site-header__menu-btn lg:hidden"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
          aria-expanded={mobileOpen}
        >
          <Menu className="h-6 w-6" aria-hidden />
        </button>
      </div>

      <MobileMenu open={mobileOpen} onClose={closeMobileMenu} />
    </header>
  );
}
