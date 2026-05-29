/** Matches Tailwind `scroll-mt-28` (fixed header clearance) */
const DEFAULT_SCROLL_MARGIN_PX = 112;

const DEFAULT_DURATION_MS = 720;

function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function easeInOutCubic(t: number): number {
  return t < 0.5 ? 4 * t * t * t : 1 - (-2 * t + 2) ** 3 / 2;
}

function readScrollMargin(el: HTMLElement): number {
  const margin = getComputedStyle(el).scrollMarginTop;
  const parsed = parseFloat(margin);
  return Number.isFinite(parsed) ? parsed : DEFAULT_SCROLL_MARGIN_PX;
}

export function getElementScrollTop(el: HTMLElement): number {
  const margin = readScrollMargin(el);
  return Math.max(0, el.getBoundingClientRect().top + window.scrollY - margin);
}

/** JS-driven smooth scroll (reliable across browsers; native `behavior: smooth` often snaps). */
export function animateScrollTo(
  targetTop: number,
  options?: { durationMs?: number },
): () => void {
  if (typeof window === "undefined") return () => undefined;

  const startTop = window.scrollY;
  const distance = targetTop - startTop;

  if (Math.abs(distance) < 2 || prefersReducedMotion()) {
    window.scrollTo(0, targetTop);
    return () => undefined;
  }

  const durationMs = options?.durationMs ?? DEFAULT_DURATION_MS;
  const startTime = performance.now();
  let raf = 0;
  let cancelled = false;

  const step = (now: number) => {
    if (cancelled) return;
    const progress = Math.min((now - startTime) / durationMs, 1);
    window.scrollTo(0, startTop + distance * easeInOutCubic(progress));
    if (progress < 1) raf = requestAnimationFrame(step);
  };

  raf = requestAnimationFrame(step);

  return () => {
    cancelled = true;
    cancelAnimationFrame(raf);
  };
}

/** Scroll window to an element id (with or without leading #). */
export function scrollToHashId(
  hashOrId: string,
  options?: { durationMs?: number },
): boolean {
  const id = hashOrId.replace(/^#/, "");
  if (!id) return false;

  const el = document.getElementById(id);
  if (!el) return false;

  animateScrollTo(getElementScrollTop(el), options);
  return true;
}

export type ScrollToHashWhenReadyOptions = {
  durationMs?: number;
  /** Wait before first attempt (tab mount, route transition) */
  startDelayMs?: number;
  /** Stop trying after this duration */
  maxMs?: number;
};

/** Retry until the target exists and layout is ready (e.g. after tab panel mounts). */
export function scrollToHashIdWhenReady(
  hashOrId: string,
  options?: ScrollToHashWhenReadyOptions,
): () => void {
  const id = hashOrId.replace(/^#/, "");
  if (!id || typeof window === "undefined") return () => undefined;

  const startDelayMs = options?.startDelayMs ?? 0;
  const maxMs = options?.maxMs ?? 3500;
  const deadline = Date.now() + startDelayMs + maxMs;
  let cancelled = false;
  let raf = 0;
  let timeout = 0;
  let cancelAnimation: (() => void) | null = null;

  const attempt = () => {
    if (cancelled) return;

    const el = document.getElementById(id);
    if (el && el.getBoundingClientRect().height > 0) {
      cancelAnimation?.();
      cancelAnimation = animateScrollTo(getElementScrollTop(el), {
        durationMs: options?.durationMs,
      });
      return;
    }

    if (Date.now() >= deadline) return;
    raf = requestAnimationFrame(attempt);
  };

  const start = () => {
    if (cancelled) return;
    attempt();
  };

  if (startDelayMs > 0) {
    timeout = window.setTimeout(start, startDelayMs);
  } else {
    raf = requestAnimationFrame(start);
  }

  return () => {
    cancelled = true;
    cancelAnimationFrame(raf);
    window.clearTimeout(timeout);
    cancelAnimation?.();
  };
}

/** Prevent the browser's instant hash jump on full page load. */
export function suppressNativeHashScroll(): void {
  if (typeof window === "undefined" || !window.location.hash) return;
  window.history.scrollRestoration = "manual";
  window.scrollTo(0, 0);
}
