"use client";

import Link from "next/link";
import { homepageOtherServices } from "./services-data";
import { SectionHeading } from "./SectionHeading";
import { hrefWithHash } from "@/lib/href";

export function OtherServicesTableSection() {
  return (
    <section className="other-services-table-section bg-brand-white py-16 md:py-20">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading eyebrow="OTHER SERVICES" title="Other Services We Offer" align="left" className="max-w-none" />

        <div className="other-services-table mt-10 border-t border-[#e4e8f0]">
          {homepageOtherServices.map((service) => {
            const Icon = service.icon;
            const guideHref =
              service.id === "spouse-visa" || service.id === "parent-visa"
                ? `/services/${service.id}`
                : hrefWithHash("/services", service.id);

            return (
              <div key={service.id} className="other-services-table__row">
                <span className="other-services-table__icon" aria-hidden>
                  <Icon className="h-8 w-8" strokeWidth={1.75} />
                </span>
                <div className="other-services-table__body min-w-0">
                  <h3 className="font-display text-lg font-semibold text-[var(--navy)]">{service.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
                </div>
                <Link href={guideHref} className="other-services-table__link shrink-0">
                  Learn more →
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
