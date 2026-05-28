import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import { heroRoutingCards } from "./hero-routing-cards";

const AUTOPLAY_MS = 2000;
const RESUME_AFTER_INTERACTION_MS = 6000;

export function HeroRoutingCards() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobileCarousel, setIsMobileCarousel] = useState(false);
  const pauseUntilRef = useRef(0);
  const cardCount = heroRoutingCards.length;

  const scrollToIndex = useCallback((index: number, behavior: ScrollBehavior = "smooth") => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.children[index] as HTMLElement | undefined;
    if (!card) return;
    card.scrollIntoView({ behavior, inline: "center", block: "nearest" });
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

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 1023px)");
    const update = () => setIsMobileCarousel(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

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

    const interval = window.setInterval(tick, AUTOPLAY_MS);
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
        {heroRoutingCards.map((card) => {
          const Icon = card.icon;
          return (
            <Link
              key={card.label}
              to={card.to}
              hash={card.hash}
              className="hero-route-card"
              onFocus={pauseAutoplay}
            >
              <Icon className="hero-route-card__icon" strokeWidth={1.75} aria-hidden />
              <span className="hero-route-card__title">{card.label}</span>
              <span className="hero-route-card__subtitle">{card.description}</span>
              <span className="hero-route-card__explore">{card.exploreLabel}</span>
            </Link>
          );
        })}
      </div>

      <div
        className="hero-route-carousel__dots lg:hidden"
        role="tablist"
        aria-label="Pathway slides"
      >
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
    </div>
  );
}
