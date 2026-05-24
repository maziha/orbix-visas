import { Link } from "@tanstack/react-router";
import { BRAND_LOGOS } from "@/lib/brand-logos";
import { heroRoutingCards } from "./hero-routing-cards";

/** Full-bleed static hero — confident travel / migration tone */
const HERO_BACKGROUND_IMAGE =
  "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1920&q=80&auto=format&fit=crop";

const HERO_DISPLAY_HEADLINE = "Your Path to Canada or Australia Starts Here.";
const HERO_SEO_H1 = "Immigration & Study Abroad Consultants in Kochi, Kerala";
const HERO_SUPPORTING_LINE =
  "Canada PR · Australia PR · Study Abroad · Spouse & Family Visa — free first consultation from Kochi.";

export function Hero() {
  return (
    <section className="hero-section relative flex items-center overflow-hidden min-h-[100dvh] -mt-16 lg:-mt-20 pt-16 lg:pt-20">
      <div className="absolute inset-0" aria-hidden>
        <img
          src={HERO_BACKGROUND_IMAGE}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-[#040175]/60" aria-hidden />
        <img
          src={BRAND_LOGOS.onNavy}
          alt=""
          className="hero-watermark pointer-events-none absolute top-1/2 right-[-8%] hidden md:block -translate-y-1/2 select-none"
          aria-hidden
        />
      </div>

      <div className="relative container-px mx-auto max-w-7xl w-full py-12 sm:py-16 lg:py-20">
        <div className="max-w-3xl text-white lg:max-w-none">
          <div className="hero-text-enter max-w-3xl">
            <p className="font-display text-[1.75rem] sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold leading-[1.12] text-white">
              {HERO_DISPLAY_HEADLINE}
            </p>
            <h1 className="mt-4 text-[18px] font-normal leading-snug text-white/75">{HERO_SEO_H1}</h1>
            <p className="mt-4 text-[20px] leading-relaxed text-white/75">{HERO_SUPPORTING_LINE}</p>
          </div>

          <div className="hero-route-cards mt-8 sm:mt-10">
            {heroRoutingCards.map((card) => {
              const Icon = card.icon;
              return (
                <Link
                  key={card.label}
                  to={card.to}
                  hash={card.hash}
                  className="hero-route-card"
                >
                  <Icon className="hero-route-card__icon" strokeWidth={1.75} aria-hidden />
                  <span className="hero-route-card__title">{card.label}</span>
                  <span className="hero-route-card__subtitle">{card.description}</span>
                  {card.freeAssessmentBadge && (
                    <span className="hero-route-card__badge">Free Assessment</span>
                  )}
                  <span className="hero-route-card__explore">{card.exploreLabel}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
