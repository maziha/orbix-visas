"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "@/components/motion";
import type { FaqItem } from "@/lib/faq-types";
import { buildFaqPageJsonLd } from "@/lib/faq-json-ld";
import { SectionEyebrow } from "./HomeSections";
import { SiteContainer } from "./SiteContainer";

type FaqSectionProps = {
  faq: FaqItem[];
  title: string;
  className?: string;
  /** When true, render without outer section/container — parent supplies layout */
  inset?: boolean;
};

function FaqSectionContent({ faq, title }: { faq: FaqItem[]; title: string }) {
  return (
    <>
      <SectionEyebrow>FAQ</SectionEyebrow>
      <h2 className="font-display text-3xl text-[var(--navy)] mt-2 mb-8">{title}</h2>
      <Accordion
        type="single"
        collapsible
        className="w-full rounded-xl border border-border bg-brand-white px-5 md:px-6"
      >
        {faq.map((item, index) => (
          <AccordionItem key={item.question} value={`faq-${index}`}>
            <AccordionTrigger className="py-5 text-left font-display text-base text-[var(--navy)] hover:no-underline">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="pb-5 text-muted-foreground leading-relaxed">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildFaqPageJsonLd(faq)) }}
      />
    </>
  );
}

export function FaqSection({
  faq,
  title,
  className = "py-16 bg-brand-subtle",
  inset = false,
}: FaqSectionProps) {
  if (faq.length === 0) return null;

  if (inset) {
    return <div className={className}><FaqSectionContent faq={faq} title={title} /></div>;
  }

  return (
    <Reveal as="section" delay={0.12} className={className}>
      <SiteContainer>
        <FaqSectionContent faq={faq} title={title} />
      </SiteContainer>
    </Reveal>
  );
}
