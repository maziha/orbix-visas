"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { COUNTRIES } from "@/lib/countries";

export function StudyAbroadCountriesSection() {
  return (
    <section className="study-abroad-countries-section bg-brand-dark py-16 md:py-20">
      <div className="container-px mx-auto max-w-7xl">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-16">
          <div className="lg:w-[38%] shrink-0">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--accent-sky)]">
              STUDY ABROAD
            </p>
            <p className="study-abroad-countries-section__stat font-display font-bold text-white leading-none">
              7
            </p>
            <p className="mt-3 text-base text-white/65 leading-snug max-w-[12rem]">
              countries for study abroad
            </p>
            <p className="mt-6 text-base text-white/80 leading-relaxed max-w-md">
              From university shortlisting to visa approval — Orbix manages every step of your study
              abroad journey from Kochi. We work with institutions across 7 countries and have
              specific experience with student visa pathways for Indian applicants.
            </p>
            <Link
              href="/study-abroad"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent-sky)] hover:underline"
            >
              Explore Study Destinations <ChevronRight className="h-4 w-4" />
            </Link>
          </div>

          <ul className="study-abroad-countries-list min-w-0 flex-1">
            {COUNTRIES.map((country) => (
              <li key={country.slug}>
                <Link
                  href={`/study-abroad/${country.slug}`}
                  className="study-abroad-countries-list__row group"
                >
                  <span className="text-[17px] font-semibold text-white">{country.name}</span>
                  <ChevronRight
                    className="h-5 w-5 shrink-0 text-white/50 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-[var(--accent-sky)]"
                    aria-hidden
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
