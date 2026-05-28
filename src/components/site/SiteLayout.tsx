import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { FloatingButtons } from "./FloatingButtons";
import { ScrollToTop } from "./ScrollToTop";
import { ConsultationModal /* , ReviewModal */ } from "./Modals";
import { ModalProvider } from "./modal-store";
import { PageTransition } from "./PageTransition";
import { GlobalAmbientLayer, MotionProvider } from "@/components/motion";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <MotionProvider>
      <ModalProvider>
        <GlobalAmbientLayer />
        <Header />
        <main className="relative z-[1] pt-16 lg:pt-20">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
        <FloatingButtons />
        <ScrollToTop />
        <ConsultationModal />
        {/* <ReviewModal /> — enable when collecting client reviews */}
      </ModalProvider>
    </MotionProvider>
  );
}
