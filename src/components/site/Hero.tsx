import { HeroRoutingCards } from "./HeroRoutingCards";

/** Full-bleed static hero — confident travel / migration tone */
const HERO_BACKGROUND_IMAGE =
  "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1920&q=80&auto=format&fit=crop";

const HERO_DISPLAY_HEADLINE = "Your Path to Canada or Australia Starts Here.";
const HERO_SEO_H1 = "Immigration & Study Abroad Consultants in Kochi, Kerala";

const HERO_SERVICES = [
  "Canada PR",
  "Australia PR",
  "Study Abroad",
  "Spouse & Family Visa",
] as const;

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
      </div>

      <div className="relative container-px mx-auto max-w-7xl w-full py-12 sm:py-16 lg:py-20">
        <div className="max-w-3xl text-white lg:max-w-none">
          <div className="hero-text-enter max-w-3xl">
            <p className="font-display text-[1.75rem] sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold leading-[1.12] text-white">
              {HERO_DISPLAY_HEADLINE}
            </p>
            <h1 className="hero-seo-h1 mt-3 sm:mt-4">{HERO_SEO_H1}</h1>
            <div className="hero-services mt-5 sm:mt-6">
              <ul className="hero-service-pills" aria-label="Services we offer">
                {HERO_SERVICES.map((service) => (
                  <li key={service}>
                    <span className="hero-service-pill">{service}</span>
                  </li>
                ))}
              </ul>
              <p className="hero-consultation-note">
                <span className="hero-consultation-note__dot" aria-hidden />
                Free first consultation from Kochi
              </p>
            </div>
          </div>

          <HeroRoutingCards />
        </div>
      </div>
    </section>
  );
}
