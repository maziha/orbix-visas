const LOCK_CLASS = "scroll-lock";

let lockCount = 0;
let savedScrollY = 0;

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

export function unlockBodyScroll() {
  if (lockCount === 0) return;
  lockCount -= 1;
  if (lockCount > 0) return;

  const y = savedScrollY;
  document.documentElement.classList.remove(LOCK_CLASS);
  document.body.classList.remove(LOCK_CLASS);
  clearInlineScrollStyles();
  requestAnimationFrame(() => window.scrollTo(0, y));
}

/** Reset scroll lock even if lock count is out of sync (e.g. missed effect cleanup). */
export function forceUnlockBodyScroll() {
  const wasLocked =
    lockCount > 0 ||
    document.documentElement.classList.contains(LOCK_CLASS) ||
    document.body.classList.contains(LOCK_CLASS);

  const y = savedScrollY;
  lockCount = 0;
  document.documentElement.classList.remove(LOCK_CLASS);
  document.body.classList.remove(LOCK_CLASS);
  clearInlineScrollStyles();

  if (wasLocked) {
    requestAnimationFrame(() => window.scrollTo(0, y));
  }
}
