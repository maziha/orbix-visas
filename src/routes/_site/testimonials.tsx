import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { BrandPromise } from "@/components/site/HomeSections";
import { testimonialsClosingCta } from "@/lib/closing-cta-presets";
import { headForPage } from "@/lib/site-meta";

export const Route = createFileRoute("/_site/testimonials")({
  head: () => headForPage("testimonials"),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero
        label="Get Started"
        title="Let's Plan Your Next Chapter"
        subtitle="We're a new consultancy building our reputation on honest advice and dedicated support — starting with yours."
      />
      <BrandPromise {...testimonialsClosingCta()} />
    </>
  );
}
