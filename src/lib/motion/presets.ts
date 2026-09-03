import type { Transition, Variants } from "framer-motion";

/** Soft spring — modals, panels (no harsh bounce) */
export const springSoft = { type: "spring" as const, damping: 34, stiffness: 240, mass: 1 };

/** Gentle spring — cards, hovers */
export const springGentle = { type: "spring" as const, damping: 38, stiffness: 200, mass: 1.05 };

/** Bouncy spring — playful entrances */
export const springBouncy = { type: "spring" as const, damping: 18, stiffness: 280, mass: 0.75 };

/** Smooth tween — fades, page transitions */
export const tweenSmooth: Transition = { duration: 0.45, ease: [0.25, 0.1, 0.25, 1] };

export const tweenQuick: Transition = { duration: 0.28, ease: [0.22, 1, 0.36, 1] };

export const tweenDramatic: Transition = { duration: 0.62, ease: [0.16, 1, 0.3, 1] };

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

export const fadeUpLarge: Variants = {
  hidden: { opacity: 0, y: 48 },
  visible: { opacity: 1, y: 0 },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.88 },
  visible: { opacity: 1, scale: 1 },
};

export const popIn: Variants = {
  hidden: { opacity: 0, scale: 0.6, y: 12 },
  visible: { opacity: 1, scale: 1, y: 0 },
};

export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -36 },
  visible: { opacity: 1, x: 0 },
};

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 36 },
  visible: { opacity: 1, x: 0 },
};

export const blurFade: Variants = {
  hidden: { opacity: 0, filter: "blur(12px)", y: 20 },
  visible: { opacity: 1, filter: "blur(0px)", y: 0 },
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.06 },
  },
};

export const staggerContainerFast: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.03 },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: springGentle },
};

export const modalBackdrop: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: tweenQuick },
  exit: { opacity: 0, transition: { duration: 0.22 } },
};

export const modalPanel: Variants = {
  hidden: { opacity: 0, y: 32, scale: 0.94, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: springSoft,
  },
  exit: {
    opacity: 0,
    y: 20,
    scale: 0.97,
    filter: "blur(4px)",
    transition: { duration: 0.25, ease: [0.4, 0, 1, 1] },
  },
};

export const popoverPanel: Variants = {
  hidden: { opacity: 0, y: 14, scale: 0.96 },
  visible: { opacity: 1, y: 0, scale: 1, transition: springGentle },
  exit: { opacity: 0, y: 8, scale: 0.98, transition: tweenQuick },
};

export const pathwayCard: Variants = {
  hidden: { opacity: 0, y: 24, scale: 0.96 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { ...springGentle, delay: i * 0.1 },
  }),
};

export const pageTransition: Variants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0, transition: tweenSmooth },
  exit: { opacity: 0, y: -6, transition: { duration: 0.22 } },
};

/** Richer route change — “new chapter” feel */
export const pageTransitionDramatic: Variants = {
  initial: { opacity: 0, y: 28, scale: 0.985, filter: "blur(10px)" },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: tweenDramatic,
  },
  exit: {
    opacity: 0,
    y: -14,
    scale: 0.992,
    filter: "blur(6px)",
    transition: { duration: 0.32, ease: [0.4, 0, 0.2, 1] },
  },
};

/** Mobile menu — soft clip-path reveal (fixed shell; avoids white edge from translateX) */
const mobileEaseOpen = [0.22, 1, 0.36, 1] as const;
const mobileEaseClose = [0.4, 0, 0.2, 1] as const;

export const mobileBackdrop: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.38, ease: mobileEaseOpen } },
  exit: { opacity: 0, transition: { duration: 0.32, ease: mobileEaseClose } },
};

export const mobilePanel: Variants = {
  hidden: { clipPath: "inset(0 0 0 100%)", opacity: 0.92 },
  visible: {
    clipPath: "inset(0 0 0 0%)",
    opacity: 1,
    transition: { duration: 0.48, ease: mobileEaseOpen },
  },
  exit: {
    clipPath: "inset(0 0 0 100%)",
    opacity: 0.92,
    transition: { duration: 0.4, ease: mobileEaseClose },
  },
};

export const mobilePanelContent: Variants = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.42, ease: mobileEaseOpen, delay: 0.06 },
  },
  exit: {
    opacity: 0,
    x: 14,
    transition: { duration: 0.28, ease: mobileEaseClose },
  },
};

export const dropdownInner: Variants = {
  hidden: { opacity: 0, y: -8, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1, transition: springGentle },
};

export const dropdownLink: Variants = {
  hidden: { opacity: 0, x: -8 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { ...springGentle, delay: i * 0.04 },
  }),
};

/** Passport stamp pulse for decorative elements */
export const stampFloat: Variants = {
  animate: {
    y: [0, -6, 0],
    opacity: [0.4, 0.7, 0.4],
    transition: { duration: 5, repeat: Infinity, ease: "easeInOut" },
  },
};

export const flightPathDraw: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 0.55,
    transition: { duration: 2.2, ease: [0.22, 1, 0.36, 1] as const, delay: 0.4 },
  },
};

export const hoverLift = {
  rest: { y: 0, scale: 1 },
  hover: { y: -8, scale: 1.02, transition: springGentle },
  tap: { scale: 0.98, transition: { duration: 0.12 } },
};

export const ctaPulse = {
  scale: [1, 1.03, 1],
  transition: { duration: 2.8, repeat: Infinity, ease: "easeInOut" },
};
