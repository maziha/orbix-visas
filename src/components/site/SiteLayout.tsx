import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { FloatingButtons } from "./FloatingButtons";
import { ConsultationModal /* , ReviewModal */ } from "./Modals";
import { ModalProvider } from "./modal-store";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <ModalProvider>
      <Header />
      <main className="pt-16 lg:pt-20">{children}</main>
      <Footer />
      <FloatingButtons />
      <ConsultationModal />
      {/* <ReviewModal /> — enable when collecting client reviews */}
    </ModalProvider>
  );
}