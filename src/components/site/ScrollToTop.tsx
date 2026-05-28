import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

const SHOW_AFTER_PX = 400;

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > SHOW_AFTER_PX);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="scroll-to-top fixed bottom-20 right-4 z-30 flex h-11 w-11 items-center justify-center rounded-full border border-[#e4e8f0] bg-brand-white text-[var(--navy)] shadow-lg transition hover:border-[var(--accent-sky)] hover:text-[var(--accent-sky)] sm:bottom-[5.75rem] sm:right-6 sm:h-12 sm:w-12"
      aria-label="Scroll to top"
    >
      <ChevronUp className="h-5 w-5" aria-hidden />
    </button>
  );
}
