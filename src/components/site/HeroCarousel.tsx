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
  const [autoplayEpoch, setAutoplayEpoch] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const bumpAutoplay = useCallback(() => setAutoplayEpoch((n) => n + 1), []);

  const goTo = useCallback(
    (index: number) => {
      const next = ((index % slides.length) + slides.length) % slides.length;
      setActiveIndex(next);
      bumpAutoplay();
    },
    [slides.length, bumpAutoplay],
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
  }, [paused, prefersReducedMotion, slides.length, autoplayEpoch]);

  return (
    <section
      className="hero-section relative flex items-center overflow-hidden min-h-[100dvh] -mt-16 lg:-mt-20 pt-16 lg:pt-20"
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
          className="absolute inset-0 bg-gradient-to-r from-[color-mix(in_srgb,var(--color-bg-dark)_92%,transparent)] via-[color-mix(in_srgb,var(--color-bg-dark)_72%,transparent)] to-[color-mix(in_srgb,var(--color-bg-dark)_35%,transparent)]"
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
          <h1 className="font-display text-[1.75rem] sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold leading-[1.12]">
            Immigration &amp; Study Abroad Consultants in Kochi, Kerala
          </h1>
          <p className="mt-3 text-lg sm:text-xl font-medium text-[var(--accent-sky)] leading-snug">
            Your Gateway to Global Opportunities
          </p>

          <div key={slide.id} className="hero-slide-enter mt-6 sm:mt-8">
            <span className="label-tag text-[var(--accent-sky)]">{slide.label}</span>
            <p className="text-base md:text-lg text-white/85 mt-4 max-w-lg leading-relaxed">
              {slide.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-3 mt-8 sm:mt-10">
              <button
                type="button"
                onClick={() => setOpen("consultation")}
                className="btn-primary inline-flex items-center justify-center gap-2"
              >
                Book a Consultation
                <ArrowRight className="h-4 w-4 shrink-0" />
              </button>
              <Link
                to={slide.secondaryCta.to}
                hash={slide.secondaryCta.hash}
                className="btn-secondary inline-flex items-center justify-center gap-2"
              >
                {slide.secondaryCta.label}
              </Link>
            </div>

          {showControls && (
            <div
              className="mt-10 sm:mt-12 md:mt-14 flex items-center justify-center gap-4"
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
              onFocusCapture={() => setPaused(true)}
              onBlurCapture={(e) => {
                if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
                  setPaused(false);
                }
              }}
            >
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
                        : "w-2 bg-[color-mix(in_srgb,var(--color-bg-white)_40%,transparent)] hover:bg-[color-mix(in_srgb,var(--color-bg-white)_60%,transparent)]"
                    }`}
                  />
                ))}
              </div>
              <HeroArrowButton direction="next" onClick={goNext} placement="bar" />
            </div>
          )}
          </div>
        </div>
      </div>
    </section>
  );
}
