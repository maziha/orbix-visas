import { createFileRoute, Outlet } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";

/** Shared chrome (header, footer, modals) — pathless layout so it persists across navigations. */
export const Route = createFileRoute("/_site")({
  component: SiteLayoutRoute,
});

function SiteLayoutRoute() {
  return (
    <SiteLayout>
      <Outlet />
    </SiteLayout>
  );
}
