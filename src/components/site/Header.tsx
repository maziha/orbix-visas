import { Link, useRouterState } from "@tanstack/react-router";
import { useCallback, useEffect, useLayoutEffect, useRef, useState, type CSSProperties } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronDown, CalendarDays, Mail, Menu } from "lucide-react";
import { springGentle } from "@/lib/motion/presets";
import { useModal } from "./modal-store";
import { MobileMenu } from "./MobileMenu";
import {
  type BodyScrollUnlockOptions,
  forceUnlockBodyScroll,
  lockBodyScroll,
} from "@/lib/body-scroll-lock";
import { COMPANY_NAME, CONTACT_EMAIL } from "@/lib/contact-info";
import { HeaderLogo } from "./HeaderLogo";
import {
  migrationLinks,
  serviceNavLinks,
  studyCountryLinks,
} from "@/lib/nav-links";
import { blurActiveElement } from "@/lib/mobile-nav-click";
import { SiteNavLink } from "./SiteNavLink";

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
        onClick={blurActiveElement}
      >
        {item.name}
      </Link>
    );
  }

  return (
    <Link
      to={item.to}
      {...(item.hash ? { hash: item.hash } : {})}
      className="nav-dropdown-link"
      style={{ "--link-i": index } as CSSProperties}
      onClick={blurActiveElement}
    >
      {item.name}
    </Link>
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
        <div className="nav-dropdown-panel__inner">
          {items.map((item, index) => (
            <DropdownLink key={item.name} item={item} index={index} />
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
    <div className="nav-dropdown-wrap nav-dropdown-wrap--wide">
      <button type="button" className="site-nav__trigger" aria-haspopup="true">
        Services{" "}
        <motion.span whileHover={{ rotate: 180 }} transition={springGentle}>
          <ChevronDown className="site-nav__chevron h-3.5 w-3.5 shrink-0" aria-hidden />
        </motion.span>
      </button>
      <div className="nav-dropdown-panel">
        <div className="nav-dropdown-panel__inner nav-dropdown-panel__inner--services">
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
        </div>
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

  const closeMobileMenu = useCallback((options?: BodyScrollUnlockOptions) => {
    setMobileOpen(false);
    forceUnlockBodyScroll(options);
  }, []);

  useEffect(() => {
    if (isFirstPathname.current) {
      isFirstPathname.current = false;
      return;
    }
    setMobileOpen(false);
    forceUnlockBodyScroll({ scrollToTop: true });
  }, [pathname]);

  useLayoutEffect(() => {
    if (!isHome) {
      setScrolled(true);
      return;
    }
    setScrolled(window.scrollY >= 80);
  }, [isHome, pathname]);

  useEffect(() => {
    if (!isHome) return;
    const onScroll = () => setScrolled(window.scrollY >= 80);
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
            <HeaderLogo onHero={onHero} className="h-10 w-auto lg:h-12" />
            <span className="sr-only">{COMPANY_NAME}</span>
          </Link>
        </motion.div>

        <nav className="site-nav hidden items-center lg:ml-8 lg:flex" aria-label="Main">
          <NavDropdown label="Study Abroad" items={studyCountryLinks} />
          <NavDropdown label="Migration" items={migrationLinks} />
          <ServicesDropdown />
          <SiteNavLink to="/about" className="site-nav__link px-3 py-2 text-sm font-medium">
            About
          </SiteNavLink>
          <SiteNavLink to="/contact" className="site-nav__link px-3 py-2 text-sm font-medium">
            Contact
          </SiteNavLink>
        </nav>

        <div className="hidden items-center gap-4 lg:ml-auto lg:flex">
          <motion.a
            href={`mailto:${CONTACT_EMAIL}`}
            className="nav-mail"
            whileHover={reduced ? undefined : { y: -1 }}
            whileTap={reduced ? undefined : { scale: 0.98 }}
          >
            <span className="nav-mail__icon" aria-hidden>
              <Mail className="h-3.5 w-3.5" strokeWidth={2} />
            </span>
            <span className="nav-mail__label">Email us</span>
          </motion.a>
          <motion.button
            type="button"
            className="nav-mail"
            onClick={() => openConsultation()}
            whileHover={reduced ? undefined : { y: -1 }}
            whileTap={reduced ? undefined : { scale: 0.98 }}
          >
            <span className="nav-mail__icon" aria-hidden>
              <CalendarDays className="h-3.5 w-3.5" strokeWidth={2} />
            </span>
            <span className="nav-mail__label">Book consultation</span>
          </motion.button>
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
