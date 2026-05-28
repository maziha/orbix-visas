import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { BrandPromise } from "@/components/site/HomeSections";
import { testimonialsClosingCta } from "@/lib/closing-cta-presets";
import { headForPage } from "@/lib/site-meta";

export const Route = createFileRoute("/testimonials")({
  head: () => headForPage("testimonials"),
  component: Page,
});

function Page() {
  return (
    <SiteLayout>
      <PageHero
        label="Get Started"
        title="Let's Plan Your Next Chapter"
        subtitle="We're a new consultancy building our reputation on honest advice and dedicated support — starting with yours."
      />
      <BrandPromise {...testimonialsClosingCta()} />
    </SiteLayout>
  );
}
