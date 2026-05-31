import { useMatch } from "@tanstack/react-router";

/** Child route IDs under the pathless `/_site` layout — use with `useActiveChildRoute`. */
export const SITE_CHILD_ROUTE = {
  studyCountry: "/_site/study-abroad/$country",
  migrationProgram: "/_site/migration/$program",
  serviceVisa: "/_site/services/$visa",
} as const;

/** True when a nested child route (e.g. `/study-abroad/canada`) is active — parent should render `<Outlet />`. */
export function useActiveChildRoute(
  routeId: (typeof SITE_CHILD_ROUTE)[keyof typeof SITE_CHILD_ROUTE],
) {
  return useMatch({ from: routeId, shouldThrow: false });
}
