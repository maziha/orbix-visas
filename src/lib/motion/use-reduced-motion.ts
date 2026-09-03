/**
 * Decorative UI motion stays on. Looping / ken-burns effects still
 * respect `prefers-reduced-motion` via CSS.
 *
 * Always `false` so SSR and the client render the same tree (Framer's
 * hook is false on the server and true in the browser when the OS setting
 * is on, which snapped every animation to zero duration).
 */
export function useReducedMotion() {
  return false;
}
