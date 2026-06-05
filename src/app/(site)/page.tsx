import { lazy, Suspense } from "react";
import type { Metadata } from "next";
import { Hero } from "@/components/site/HomeSections";
import { metadataForPage } from "@/lib/metadata";

const HomeBelowFold = lazy(() =>
  import("@/components/site/HomeBelowFold").then((m) => ({ default: m.HomeBelowFold })),
);

export const metadata: Metadata = metadataForPage("home");

export default function HomePage() {
  return (
    <>
      <Hero />
      <Suspense fallback={null}>
        <HomeBelowFold />
      </Suspense>
    </>
  );
}
