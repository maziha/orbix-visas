const LOCK_CLASS = "scroll-lock";

let lockCount = 0;
let savedScrollY = 0;

export type BodyScrollUnlockOptions = {
  /** When true, unlock at the top of the page (e.g. after navigating away). */
  scrollToTop?: boolean;
};

const STYLE_PROPS = [
  "overflow",
  "position",
  "top",
  "left",
  "right",
  "width",
  "height",
  "touchAction",
  "paddingRight",
] as const;

function clearInlineScrollStyles() {
  const { documentElement: html, body } = document;
  for (const prop of STYLE_PROPS) {
    html.style.removeProperty(prop);
    body.style.removeProperty(prop);
  }
}

export function lockBodyScroll() {
  if (lockCount === 0) {
    savedScrollY = window.scrollY;
    document.documentElement.classList.add(LOCK_CLASS);
    document.body.classList.add(LOCK_CLASS);
  }
  lockCount += 1;

  return () => unlockBodyScroll();
}

function resolveUnlockScrollY(options?: BodyScrollUnlockOptions) {
  if (options?.scrollToTop) {
    savedScrollY = 0;
    return 0;
  }
  return savedScrollY;
}

export function unlockBodyScroll(options?: BodyScrollUnlockOptions) {
  if (lockCount === 0) return;
  lockCount -= 1;
  if (lockCount > 0) return;

  const y = resolveUnlockScrollY(options);
  document.documentElement.classList.remove(LOCK_CLASS);
  document.body.classList.remove(LOCK_CLASS);
  clearInlineScrollStyles();
  requestAnimationFrame(() => window.scrollTo(0, y));
}

/** Reset scroll lock even if lock count is out of sync (e.g. missed effect cleanup). */
export function forceUnlockBodyScroll(options?: BodyScrollUnlockOptions) {
  const wasLocked =
    lockCount > 0 ||
    document.documentElement.classList.contains(LOCK_CLASS) ||
    document.body.classList.contains(LOCK_CLASS);

  const y = resolveUnlockScrollY(options);
  lockCount = 0;
  document.documentElement.classList.remove(LOCK_CLASS);
  document.body.classList.remove(LOCK_CLASS);
  clearInlineScrollStyles();

  if (wasLocked || options?.scrollToTop) {
    requestAnimationFrame(() => window.scrollTo(0, y));
  }
}
