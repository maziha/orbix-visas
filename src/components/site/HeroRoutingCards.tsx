"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import Link from "next/link";
import { hrefWithHash } from "@/lib/href";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { HERO_MOBILE_DEFAULT_SLIDE_INDEX, heroRoutingCards } from "./hero-routing-cards";
import { pathwayCard, springGentle } from "@/lib/motion/presets";

/** Time each pathway slide stays active before advancing (mobile carousel) */
const CAROUSEL_INTERVAL_MS = 2000;
const RESUME_AFTER_INTERACTION_MS = 6000;

export function HeroRoutingCards() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(HERO_MOBILE_DEFAULT_SLIDE_INDEX);
  const [isMobileCarousel, setIsMobileCarousel] = useState(false);
  const [motionReady, setMotionReady] = useState(false);
  const pauseUntilRef = useRef(0);
  const cardCount = heroRoutingCards.length;
  const reduced = useReducedMotion();

  useEffect(() => {
    setMotionReady(true);
  }, []);

  const scrollToIndex = useCallback((index: number, behavior: ScrollBehavior = "smooth") => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.children[index] as HTMLElement | undefined;
    if (!card) return;

    const maxScroll = track.scrollWidth - track.clientWidth;
    const targetLeft = card.offsetLeft - (track.clientWidth - card.offsetWidth) / 2;
    track.scrollTo({
      left: Math.max(0, Math.min(targetLeft, maxScroll)),
      behavior,
    });
  }, []);

  const syncIndexFromScroll = useCallback(() => {
    const track = trackRef.current;
    if (!track || track.children.length === 0) return;

    const trackCenter = track.scrollLeft + track.clientWidth / 2;
    let closest = 0;
    let closestDistance = Number.POSITIVE_INFINITY;

    Array.from(track.children).forEach((child, index) => {
      const el = child as HTMLElement;
      const cardCenter = el.offsetLeft + el.offsetWidth / 2;
      const distance = Math.abs(cardCenter - trackCenter);
      if (distance < closestDistance) {
        closestDistance = distance;
        closest = index;
      }
    });

    setActiveIndex(closest);
  }, []);

  const resetToDefaultSlide = useCallback(
    (behavior: ScrollBehavior = "instant") => {
      setActiveIndex(HERO_MOBILE_DEFAULT_SLIDE_INDEX);
      const track = trackRef.current;
      if (track) {
        track.scrollLeft = 0;
      }
      scrollToIndex(HERO_MOBILE_DEFAULT_SLIDE_INDEX, behavior);
      pauseUntilRef.current = Date.now() + CAROUSEL_INTERVAL_MS;
    },
    [scrollToIndex],
  );

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 1023px)");
    const update = () => setIsMobileCarousel(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useLayoutEffect(() => {
    if (!isMobileCarousel) return;
    resetToDefaultSlide("instant");
    const raf = requestAnimationFrame(() => resetToDefaultSlide("instant"));
    return () => cancelAnimationFrame(raf);
  }, [isMobileCarousel, resetToDefaultSlide]);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 1023px)");
    const onPageShow = (event: PageTransitionEvent) => {
      if (!event.persisted || !mq.matches) return;
      resetToDefaultSlide("instant");
    };
    window.addEventListener("pageshow", onPageShow);
    return () => window.removeEventListener("pageshow", onPageShow);
  }, [resetToDefaultSlide]);

  useEffect(() => {
    if (!isMobileCarousel) return;

    const tick = () => {
      if (Date.now() < pauseUntilRef.current) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      setActiveIndex((current) => {
        const next = (current + 1) % cardCount;
        scrollToIndex(next);
        return next;
      });
    };

    const interval = window.setInterval(tick, CAROUSEL_INTERVAL_MS);
    return () => window.clearInterval(interval);
  }, [isMobileCarousel, cardCount, scrollToIndex]);

  const pauseAutoplay = useCallback(() => {
    pauseUntilRef.current = Date.now() + RESUME_AFTER_INTERACTION_MS;
  }, []);

  const handleScroll = useCallback(() => {
    if (!isMobileCarousel) return;
    pauseAutoplay();
    syncIndexFromScroll();
  }, [isMobileCarousel, pauseAutoplay, syncIndexFromScroll]);

  const goToSlide = (index: number) => {
    pauseAutoplay();
    setActiveIndex(index);
    scrollToIndex(index);
  };

  return (
    <div className="hero-route-carousel mt-8 sm:mt-10">
      <div
        ref={trackRef}
        className="hero-route-cards hero-route-cards--track"
        onScroll={handleScroll}
        aria-label="Choose your pathway"
      >
        {heroRoutingCards.map((card, index) => {
          const isActive = isMobileCarousel && activeIndex === index;
          const cardClassName = cn("hero-route-card", isActive && "hero-route-card--active");
          const Icon = card.icon;
          const inner = (
            <Link
              href={hrefWithHash(card.to, card.hash)}
              className="hero-route-card__link"
              onFocus={pauseAutoplay}
            >
              <Icon className="hero-route-card__icon" strokeWidth={1.75} aria-hidden />
              <span className="hero-route-card__title">{card.label}</span>
              <span className="hero-route-card__subtitle">{card.description}</span>
              <span className="hero-route-card__cta">
                <span className="hero-route-card__cta-corner" aria-hidden />
                <span className="hero-route-card__cta-track">
                  <span className="hero-route-card__cta-line hero-route-card__cta-line--lead" aria-hidden />
                  <span className="hero-route-card__explore">{card.exploreLabel}</span>
                  <span className="hero-route-card__cta-line hero-route-card__cta-line--tail" aria-hidden />
                </span>
              </span>
            </Link>
          );

          if (reduced || !motionReady) {
            return (
              <div key={card.label} className={cardClassName}>
                {inner}
              </div>
            );
          }

          return (
            <motion.div
              key={card.label}
              className={cardClassName}
              custom={index}
              variants={pathwayCard}
              initial={isMobileCarousel ? false : "hidden"}
              animate={
                isMobileCarousel
                  ? { opacity: isActive ? 1 : 0.72, y: 0, scale: 1 }
                  : "visible"
              }
              whileHover={isMobileCarousel ? undefined : { y: -4 }}
              transition={springGentle}
            >
              {inner}
            </motion.div>
          );
        })}
      </div>

      {isMobileCarousel ? (
        <div className="hero-route-carousel__dots" role="tablist" aria-label="Pathway slides">
          {heroRoutingCards.map((card, index) => (
            <button
              key={card.label}
              type="button"
              role="tab"
              aria-selected={activeIndex === index}
              aria-label={`${card.label} (${index + 1} of ${cardCount})`}
              className={cn(
                "hero-route-carousel__dot",
                activeIndex === index && "hero-route-carousel__dot--active",
              )}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}
