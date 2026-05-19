import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { Testimonials } from "@/components/site/HomeSections";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Testimonials — Orbix Overseas Careers" },
      { name: "description", content: "Real stories from real clients. See why 50,000+ customers trust Orbix." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <SiteLayout>
      <PageHero label="Testimonials" title="50,000+ Happy Customers. And Counting." subtitle="Every smile is a story. Here are a few of ours." />
      <Testimonials />
    </SiteLayout>
  );
}
