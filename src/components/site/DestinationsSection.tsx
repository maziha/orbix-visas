"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { MotionPressable, Reveal } from "@/components/motion";
import { COUNTRIES } from "@/lib/countries";
import { DESTINATION_CARD_CONFIG } from "@/lib/destination-cards";
import { DestinationScrollCard } from "./DestinationScrollCard";
import { SectionHeading } from "./SectionHeading";

export function DestinationsSection() {
  const stripRef = useRef<HTMLDivElement>(null);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const updateScrollState = useCallback(() => {
    const el = stripRef.current;
    if (!el) return;
    const maxScroll = el.scrollWidth - el.clientWidth;
    setCanScrollPrev(el.scrollLeft > 4);
    setCanScrollNext(el.scrollLeft < maxScroll - 4);
  }, []);

  useEffect(() => {
    const el = stripRef.current;
    if (!el) return;

    updateScrollState();
    el.addEventListener("scroll", updateScrollState, { passive: true });
    const observer = new ResizeObserver(updateScrollState);
    observer.observe(el);

    return () => {
      el.removeEventListener("scroll", updateScrollState);
      observer.disconnect();
    };
  }, [updateScrollState]);

  const scrollStrip = useCallback(
    (direction: "prev" | "next") => {
      const el = stripRef.current;
      if (!el) return;
      const card = el.querySelector<HTMLElement>(".destination-scroll-card");
      const gap = 16;
      const step = card ? card.offsetWidth + gap : 276;
      el.scrollBy({ left: direction === "next" ? step : -step, behavior: "smooth" });
    },
    [],
  );

  return (
    <section className="destinations-section bg-brand-subtle py-20">
      <div className="container-px mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading eyebrow="EXPLORE DESTINATIONS" title="Explore Destinations" />
        </Reveal>

        <div className="destinations-carousel mt-12">
          <MotionPressable
            type="button"
            className="destination-scroll-arrow shrink-0"
            onClick={() => scrollStrip("prev")}
            disabled={!canScrollPrev}
            aria-label="Scroll destinations left"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden />
          </MotionPressable>

          <div className="destinations-carousel__viewport min-w-0 flex-1">
            <div ref={stripRef} className="destination-scroll-strip">
              {COUNTRIES.map((country) => (
                <DestinationScrollCard
                  key={country.slug}
                  country={country}
                  config={DESTINATION_CARD_CONFIG[country.slug]}
                />
              ))}
            </div>
          </div>

          <MotionPressable
            type="button"
            className="destination-scroll-arrow shrink-0"
            onClick={() => scrollStrip("next")}
            disabled={!canScrollNext}
            aria-label="Scroll destinations right"
          >
            <ChevronRight className="h-5 w-5" aria-hidden />
          </MotionPressable>
        </div>
      </div>
    </section>
  );
}
