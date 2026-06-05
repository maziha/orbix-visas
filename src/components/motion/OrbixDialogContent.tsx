"use client";

import type { ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { modalBackdrop, modalPanel } from "@/lib/motion/presets";
import { cn } from "@/lib/utils";

type OrbixDialogContentProps = {
  open: boolean;
  children: ReactNode;
  className?: string;
  onClose: () => void;
};

/**
 * Framer-powered modal shell — smooth enter/exit (Radix + AnimatePresence).
 */
export function OrbixDialogContent({ open, children, className, onClose }: OrbixDialogContentProps) {
  return (
    <AnimatePresence>
      {open ? (
        <DialogPrimitive.Portal forceMount>
          <DialogPrimitive.Overlay asChild forceMount>
            <motion.div
              className="fixed inset-0 z-50 bg-black/55 backdrop-blur-[4px]"
              variants={modalBackdrop}
              initial="hidden"
              animate="visible"
              exit="exit"
            />
          </DialogPrimitive.Overlay>

          <div className="site-dialog-stage fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 pointer-events-none">
            <DialogPrimitive.Content asChild forceMount onEscapeKeyDown={onClose}>
              <motion.div
                role="dialog"
                aria-modal="true"
                className={cn(
                  "site-dialog-content pointer-events-auto relative grid h-fit max-h-[min(90dvh,44rem)] w-full max-w-lg gap-4 overflow-y-auto rounded-2xl border bg-background p-5 shadow-2xl sm:p-7",
                  className,
                )}
                variants={modalPanel}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                {children}
                <DialogPrimitive.Close
                  type="button"
                  onClick={onClose}
                  className="absolute right-3 top-3 sm:right-4 sm:top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity duration-200 hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                  aria-label="Close"
                >
                  <X className="h-4 w-4" />
                </DialogPrimitive.Close>
              </motion.div>
            </DialogPrimitive.Content>
          </div>
        </DialogPrimitive.Portal>
      ) : null}
    </AnimatePresence>
  );
}
