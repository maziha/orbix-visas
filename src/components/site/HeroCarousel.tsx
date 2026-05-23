import { Link } from "@tanstack/react-router";
import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useModal } from "./modal-store";
import { heroSlides, HERO_SLIDE_INTERVAL_MS } from "./hero-slides";

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return reduced;
}

function HeroArrowButton({
  direction,
  onClick,
  placement,
}: {
  direction: "prev" | "next";
  onClick: () => void;
  placement: "side" | "bar";
}) {
  const Icon = direction === "prev" ? ChevronLeft : ChevronRight;
  const label = direction === "prev" ? "Previous slide" : "Next slide";
  const isSide = placement === "side";

  return (
    <button
      type="button"
      onClick={onClick}
      className={
        isSide
          ? `hero-arrow hero-arrow-side hero-arrow-side--${direction} shrink-0 active:scale-95`
          : "hero-arrow hero-arrow-bar hero-arrow-inline shrink-0 active:scale-95"
      }
      aria-label={label}
    >
      <Icon className={isSide ? "h-7 w-7" : "h-5 w-5"} />
    </button>
  );
}

export function HeroCarousel() {
  const { setOpen } = useModal();
  const prefersReducedMotion = usePrefersReducedMotion();
  const slides = prefersReducedMotion ? heroSlides.slice(0, 1) : heroSlides;

  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback(
    (index: number) => {
      const next = ((index % slides.length) + slides.length) % slides.length;
      setActiveIndex(next);
    },
    [slides.length],
  );

  const goNext = useCallback(() => goTo(activeIndex + 1), [activeIndex, goTo]);
  const goPrev = useCallback(() => goTo(activeIndex - 1), [activeIndex, goTo]);

  const slide = slides[activeIndex] ?? slides[0];
  const showControls = slides.length > 1;

  useEffect(() => {
    if (prefersReducedMotion || slides.length <= 1 || paused) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      intervalRef.current = null;
      return;
    }

    intervalRef.current = setInterval(() => {
      setActiveIndex((i) => (i + 1) % slides.length);
    }, HERO_SLIDE_INTERVAL_MS);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [paused, prefersReducedMotion, slides.length]);

  return (
    <section
      className="hero-section relative flex items-center overflow-hidden min-h-[100dvh] -mt-16 lg:-mt-20 pt-16 lg:pt-20"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Stock backgrounds — crossfade */}
      <div className="absolute inset-0" aria-hidden>
        {slides.map((s, i) => (
          <img
            key={s.id}
            src={s.backgroundImage}
            alt=""
            aria-hidden
            className="absolute inset-0 h-full w-full object-cover transition-opacity duration-[1200ms] ease-in-out"
            style={{ opacity: i === activeIndex ? 1 : 0 }}
          />
        ))}
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#040175]/92 via-[#040175]/72 to-[#040175]/35"
          aria-hidden
        />
      </div>

      {/* Desktop side arrows */}
      {showControls && (
        <>
          <HeroArrowButton direction="prev" onClick={goPrev} placement="side" />
          <HeroArrowButton direction="next" onClick={goNext} placement="side" />
        </>
      )}

      <div className="relative container-px mx-auto max-w-7xl w-full py-12 sm:py-16 md:px-14 lg:px-16">
        <div className="max-w-2xl text-white">
          <div key={slide.id} className="hero-slide-enter">
            <span className="label-tag text-[var(--accent-sky)]">{slide.label}</span>

            <h1 className="font-display text-[1.75rem] sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold mt-5 sm:mt-6 leading-[1.12]">
              {slide.title}{" "}
              <span className="text-[var(--accent-sky)]">{slide.titleAccent}</span>
            </h1>

            <p className="text-base md:text-lg text-white/85 mt-6 max-w-lg leading-relaxed">
              {slide.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-3 mt-8 sm:mt-10">
              <button
                type="button"
                onClick={() => setOpen("consultation")}
                className="btn-gold text-sm sm:text-base px-5 py-2.5 sm:px-6 sm:py-3 rounded-md inline-flex items-center justify-center gap-2"
              >
                Book a Free Consultation
                <ArrowRight className="h-4 w-4 shrink-0" />
              </button>
              <Link
                to={slide.secondaryCta.to}
                hash={slide.secondaryCta.hash}
                className="btn-outline-white text-sm sm:text-base px-5 py-2.5 sm:px-6 sm:py-3 rounded-md inline-flex items-center justify-center gap-2"
              >
                {slide.secondaryCta.label}
              </Link>
            </div>
          </div>

          {showControls && (
            <div className="mt-10 sm:mt-12 md:mt-14">
              {/* Mobile: arrows + dots (side arrows hidden via md:inline-flex above) */}
              <div className="flex items-center justify-center gap-4 md:hidden">
                <HeroArrowButton direction="prev" onClick={goPrev} placement="bar" />
                <div
                  className="flex items-center justify-center gap-2.5"
                  role="tablist"
                  aria-label="Hero slides"
                >
                  {slides.map((s, i) => (
                    <button
                      key={s.id}
                      type="button"
                      role="tab"
                      aria-selected={i === activeIndex}
                      aria-label={s.dotLabel}
                      onClick={() => goTo(i)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        i === activeIndex
                          ? "w-8 bg-[var(--accent-sky)]"
                          : "w-2 bg-white/40 hover:bg-white/60"
                      }`}
                    />
                  ))}
                </div>
                <HeroArrowButton direction="next" onClick={goNext} placement="bar" />
              </div>

              {/* Desktop: dots only */}
              <div
                className="hidden md:flex items-center gap-2.5"
                role="tablist"
                aria-label="Hero slides"
              >
                {slides.map((s, i) => (
                  <button
                    key={s.id}
                    type="button"
                    role="tab"
                    aria-selected={i === activeIndex}
                    aria-label={s.dotLabel}
                    onClick={() => goTo(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === activeIndex
                        ? "w-8 bg-[var(--accent-sky)]"
                        : "w-2 bg-white/40 hover:bg-white/60"
                    }`}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
