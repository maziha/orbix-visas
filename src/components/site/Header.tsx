import { Link, useRouterState } from "@tanstack/react-router";
import { useCallback, useEffect, useLayoutEffect, useRef, useState, type CSSProperties } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronDown, Menu } from "lucide-react";
import { MotionPressable } from "@/components/motion";
import { springGentle } from "@/lib/motion/presets";
import { useModal } from "./modal-store";
import { MobileMenu } from "./MobileMenu";
import { forceUnlockBodyScroll, lockBodyScroll } from "@/lib/body-scroll-lock";
import { COMPANY_NAME, CONTACT_PHONES } from "@/lib/contact-info";
import { getHeaderLogo } from "@/lib/brand-logos";
import {
  migrationLinks,
  serviceNavLinks,
  studyCountryLinks,
} from "@/lib/nav-links";

const MotionRouterLink = motion.create(Link);

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

function DropdownLink({
  item,
  index,
}: {
  item: { name: string; to: string; hash?: string };
  index: number;
}) {
  const reduced = useReducedMotion();

  if (reduced) {
    return (
      <Link
        to={item.to}
        {...(item.hash ? { hash: item.hash } : {})}
        className="nav-dropdown-link"
        style={{ "--link-i": index } as CSSProperties}
      >
        {item.name}
      </Link>
    );
  }

  return (
    <MotionRouterLink
      to={item.to}
      {...(item.hash ? { hash: item.hash } : {})}
      className="nav-dropdown-link"
      style={{ "--link-i": index } as CSSProperties}
      whileHover={{ x: 6, backgroundColor: "color-mix(in srgb, var(--accent-sky) 12%, #f4f6fb)" }}
      transition={springGentle}
    >
      {item.name}
    </MotionRouterLink>
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
        {label}{" "}
        <motion.span whileHover={{ rotate: 180 }} transition={springGentle}>
          <ChevronDown className="site-nav__chevron h-3.5 w-3.5 shrink-0" aria-hidden />
        </motion.span>
      </button>
      <div className="nav-dropdown-panel">
        <motion.div
          className="nav-dropdown-panel__inner"
          initial={{ opacity: 0, y: -6 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={springGentle}
        >
          {items.map((item, index) => (
            <DropdownLink key={item.name} item={item} index={index} />
          ))}
        </motion.div>
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
        Services{" "}
        <motion.span whileHover={{ rotate: 180 }} transition={springGentle}>
          <ChevronDown className="site-nav__chevron h-3.5 w-3.5 shrink-0" aria-hidden />
        </motion.span>
      </button>
      <div className="nav-dropdown-panel">
        <motion.div
          className="nav-dropdown-panel__inner nav-dropdown-panel__inner--services"
          initial={{ opacity: 0, y: -6 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={springGentle}
        >
          <div className="nav-dropdown-column">
            {visa.map((item, index) => (
              <DropdownLink key={item.name} item={item} index={index} />
            ))}
          </div>
          <div className="nav-dropdown-column">
            {other.map((item, index) => (
              <DropdownLink key={item.name} item={item} index={visa.length + index} />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { openConsultation } = useModal();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isHome = pathname === "/";
  const isFirstPathname = useRef(true);
  const reduced = useReducedMotion();

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
    if (!isHome) {
      setScrolled(true);
      return;
    }
    const onScroll = () => setScrolled(window.scrollY >= 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  useLayoutEffect(() => {
    if (!mobileOpen) return;
    return lockBodyScroll();
  }, [mobileOpen]);

  useEffect(() => {
    return () => forceUnlockBodyScroll();
  }, []);

  const atTop = !scrolled;
  const onHero = isHome && atTop;
  const headerClass = isHome
    ? `site-header ${atTop ? "site-header--overlay" : "site-header--solid"}${onHero ? " site-header--on-hero" : ""}`
    : "site-header site-header--solid site-header--inner";

  return (
    <header className={headerClass}>
      <div className="container-px mx-auto flex h-16 max-w-7xl items-center justify-between lg:h-20">
        <motion.div whileHover={reduced ? undefined : { scale: 1.03 }} whileTap={reduced ? undefined : { scale: 0.97 }}>
          <Link to="/" className="site-header__logo-link flex shrink-0 items-center">
            <img
              src={getHeaderLogo(isHome ? scrolled : true, onHero)}
              alt={COMPANY_NAME}
              className="site-header__logo h-10 w-auto lg:h-12"
            />
          </Link>
        </motion.div>

        <nav className="site-nav hidden items-center lg:ml-8 lg:flex" aria-label="Main">
          <NavDropdown label="Study Abroad" items={studyCountryLinks} />
          <NavDropdown label="Migration" items={migrationLinks} />
          <ServicesDropdown />
          <MotionRouterLink
            to="/about"
            className="site-nav__link px-3 py-2 text-sm font-medium"
            whileHover={{ y: -2, color: "var(--accent-sky)" }}
          >
            About
          </MotionRouterLink>
          <MotionRouterLink
            to="/contact"
            className="site-nav__link px-3 py-2 text-sm font-medium"
            whileHover={{ y: -2, color: "var(--accent-sky)" }}
          >
            Contact
          </MotionRouterLink>
        </nav>

        <div className="hidden items-center gap-4 lg:ml-auto lg:flex">
          <div className="nav-phone">
            <NavPhoneIcon />
            {CONTACT_PHONES.map((phone, index) => (
              <span key={phone.tel}>
                {index > 0 ? (
                  <span className="nav-phone__sep" aria-hidden>
                    {" "}
                    ·{" "}
                  </span>
                ) : null}
                <motion.a
                  href={`tel:${phone.tel}`}
                  className="nav-phone__link"
                  whileHover={{ scale: 1.04 }}
                >
                  {phone.display}
                </motion.a>
              </span>
            ))}
          </div>
          <MotionPressable
            type="button"
            pulse
            onClick={() => openConsultation()}
            className="nav-cta"
          >
            Book a Consultation
          </MotionPressable>
        </div>

        <motion.button
          type="button"
          className="site-header__menu-btn lg:hidden"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
          aria-expanded={mobileOpen}
          whileTap={{ scale: 0.92 }}
          whileHover={{ scale: 1.06 }}
        >
          <Menu className="h-6 w-6" aria-hidden />
        </motion.button>
      </div>

      <MobileMenu open={mobileOpen} onClose={closeMobileMenu} />
    </header>
  );
}
