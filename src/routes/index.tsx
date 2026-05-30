import { lazy, Suspense } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { headForPage } from "@/lib/site-meta";
import { Hero } from "@/components/site/HomeSections";

const HomeBelowFold = lazy(() =>
  import("@/components/site/HomeBelowFold").then((m) => ({ default: m.HomeBelowFold })),
);

export const Route = createFileRoute("/")({
  head: () => {
    const pageHead = headForPage("home");
    return {
      ...pageHead,
      links: [
        ...(pageHead.links ?? []),
        {
          rel: "preload",
          href: "/images/hero-background-640.webp",
          as: "image",
          type: "image/webp",
          media: "(max-width: 640px)",
        },
        {
          rel: "preload",
          href: "/images/hero-background-1280.webp",
          as: "image",
          type: "image/webp",
          media: "(min-width: 641px)",
        },
      ],
    };
  },
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <Suspense fallback={null}>
        <HomeBelowFold />
      </Suspense>
    </>
  );
}
