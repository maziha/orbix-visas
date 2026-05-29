import { Reveal } from "@/components/motion";
import {
  Achievements,
  BringingFamilyOverseas,
  Destinations,
  EnquiryFormSection,
  MigrationPrograms,
  OtherServices,
} from "./HomeSections";

/** Homepage sections below the hero — code-split to keep initial bundle lean. */
export function HomeBelowFold() {
  return (
    <>
      <Reveal>
        <MigrationPrograms />
      </Reveal>
      <Reveal delay={0.05}>
        <BringingFamilyOverseas />
      </Reveal>
      <Reveal delay={0.08}>
        <Destinations />
      </Reveal>
      <Reveal delay={0.1}>
        <OtherServices />
      </Reveal>
      <Reveal delay={0.12}>
        <EnquiryFormSection />
      </Reveal>
      <Reveal delay={0.14}>
        <Achievements />
      </Reveal>
    </>
  );
}
