import type { Metadata } from "next";
import { PageHero } from "@/components/site/PageHero";
import { BrandPromise } from "@/components/site/HomeSections";
import { testimonialsClosingCta } from "@/lib/closing-cta-presets";
import { BREADCRUMBS } from "@/lib/breadcrumbs";
import { metadataForPage } from "@/lib/metadata";

export const metadata: Metadata = metadataForPage("testimonials");

export default function TestimonialsPage() {
  return (
    <>
      <PageHero
        label="Get Started"
        title="Let's Plan Your Next Chapter"
        subtitle="We're a new consultancy building our reputation on honest advice and dedicated support — starting with yours."
        breadcrumbs={BREADCRUMBS.testimonials()}
      />
      <BrandPromise {...testimonialsClosingCta()} />
    </>
  );
}
