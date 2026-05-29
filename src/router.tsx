import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

export const getRouter = () => {
  const queryClient = new QueryClient();

  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    /** Migration (and other) hash targets use custom smooth scroll — not instant scrollIntoView */
    defaultHashScrollIntoView: false,
    defaultPreloadStaleTime: 0,
  });

  return router;
};
