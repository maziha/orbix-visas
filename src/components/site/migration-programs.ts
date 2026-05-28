import type { CountryCode } from "@/lib/countries";

export type MigrationProgramPage = "canada-pr" | "australia-pr";

export type MigrationProgram = {
  id: string;
  name: string;
  /** Short label for in-page jump chips on /migration */
  jumpLabel: string;
  countryCode: CountryCode;
  programPage: MigrationProgramPage;
  desc: string;
  hoverFor: string;
  tag: string;
  whoItsFor: string;
  typicalTimeline: string;
  firstStep: string;
};

export type MigrationProgramGroup = {
  label: string;
  programs: MigrationProgram[];
};

export const migrationProgramGroups: MigrationProgramGroup[] = [
  {
    label: "CANADA",
    programs: [
      {
        id: "canada-express-entry",
        name: "Canada Express Entry",
        jumpLabel: "Express Entry",
        countryCode: "CA",
        programPage: "canada-pr",
        desc: "Best for skilled workers with CLB 7+ English and 1+ year NOC-eligible experience. Recent CRS cutoffs: 470–540.",
        hoverFor: "skilled workers under 45 with degree-level education",
        tag: "Most popular",
        whoItsFor:
          "Skilled workers with strong English, recognised education, and at least one year of skilled work experience who want the fastest federal pathway to Canada PR. You enter the CRS pool, improve your score where possible, and apply when IRCC issues an invitation.",
        typicalTimeline: "12–18 months from complete profile to COPR (typical)",
        firstStep: "Calculate your CRS score",
      },
      {
        id: "canada-pnp",
        name: "Provincial Nominee Program",
        jumpLabel: "PNP",
        countryCode: "CA",
        programPage: "canada-pr",
        desc: "Best for professionals with a job offer or ties to a specific Canadian province.",
        hoverFor: "professionals with a job offer or ties to a Canadian province",
        tag: "Provincial route",
        whoItsFor:
          "Applicants with a job offer, prior study or work in a province, or an occupation on a provincial priority list. A nomination can add CRS points or provide a dedicated stream outside Express Entry.",
        typicalTimeline: "12–24 months depending on province and stream",
        firstStep: "Check if your occupation is in demand in a target province",
      },
      {
        id: "canada-family-sponsorship",
        name: "Canada Family Sponsorship",
        jumpLabel: "Family",
        countryCode: "CA",
        programPage: "canada-pr",
        desc: "Best for Canadian citizens and PR holders sponsoring a spouse, partner, parent, or dependent child.",
        hoverFor: "Canadian citizens and PR holders sponsoring eligible family",
        tag: "Family sponsorship",
        whoItsFor:
          "Canadian citizens and permanent residents sponsoring a spouse, partner, dependent child, or eligible parent. Requirements and processing times depend on the relationship and whether the sponsor lives in Canada.",
        typicalTimeline: "12–24+ months depending on relationship and stream",
        firstStep: "Confirm your sponsor meets income and status requirements",
      },
    ],
  },
  {
    label: "AUSTRALIA",
    programs: [
      {
        id: "australia-189",
        name: "Subclass 189",
        jumpLabel: "Subclass 189",
        countryCode: "AU",
        programPage: "australia-pr",
        desc: "Best for skilled workers invited by the Department of Home Affairs — no state sponsor needed. Points-tested.",
        hoverFor: "skilled workers with competitive points and no state sponsor",
        tag: "Points-based",
        whoItsFor:
          "Highly skilled professionals whose occupation is on the relevant skilled list and who can score competitively without state nomination. You must pass skills assessment and receive an invitation to apply.",
        typicalTimeline: "12–24 months from skills assessment to visa grant (typical)",
        firstStep: "Check your occupation list status and points total",
      },
      {
        id: "australia-190",
        name: "Subclass 190",
        jumpLabel: "Subclass 190",
        countryCode: "AU",
        programPage: "australia-pr",
        desc: "Best when a state or territory nominates you — often lower points thresholds than Subclass 189.",
        hoverFor: "applicants with state or territory nomination",
        tag: "State-sponsored",
        whoItsFor:
          "Applicants willing to commit to living in the nominating state and who meet that state's occupation and points requirements. State nomination typically adds points and may open occupations not available on 189.",
        typicalTimeline: "12–24 months including nomination and visa processing",
        firstStep: "Research which states nominate your occupation",
      },
      {
        id: "australia-491",
        name: "Subclass 491",
        jumpLabel: "Subclass 491",
        countryCode: "AU",
        programPage: "australia-pr",
        desc: "Best for skilled workers willing to live and work in regional Australia, with a pathway to permanent residency.",
        hoverFor: "skilled workers willing to live in regional Australia",
        tag: "Regional pathway",
        whoItsFor:
          "Skilled workers targeting regional areas who want a pathway to PR with potentially more accessible points thresholds. You live and work in a designated regional area before applying for permanent residency.",
        typicalTimeline: "15–30+ months including provisional visa and PR pathway",
        firstStep: "Compare regional points thresholds for your occupation",
      },
    ],
  },
];

/** Extended copy for anchored sections on /migration */
export const migrationProgramAnchorDetails: Record<
  string,
  { overview: string; whoItsFor: string }
> = {
  "canada-express-entry": {
    overview:
      "Express Entry is Canada's main skilled immigration system. You enter a pool with a Comprehensive Ranking System (CRS) score; IRCC invites top candidates to apply for permanent residence.",
    whoItsFor:
      "Skilled workers with strong English, recognised education, and at least one year of skilled work experience who want the fastest federal pathway to Canada PR.",
  },
  "canada-pnp": {
    overview:
      "Provincial Nominee Programs let Canadian provinces nominate candidates whose skills match local labour needs. A nomination adds significant CRS points or can be a separate stream.",
    whoItsFor:
      "Applicants with a job offer, prior study or work in a province, or occupation on a provincial priority list.",
  },
  "canada-family-sponsorship": {
    overview:
      "Canadian citizens and permanent residents can sponsor eligible family members. Processing times and requirements depend on the relationship and location of the sponsor.",
    whoItsFor:
      "Families reuniting with a spouse, common-law partner, dependent child, or parent who holds Canadian status.",
  },
  "australia-189": {
    overview:
      "Subclass 189 is a permanent visa for invited skilled workers who are not sponsored by an employer or state. You must meet the points test and receive an invitation to apply.",
    whoItsFor:
      "Highly skilled professionals whose occupation is on the relevant skilled list and who can score competitively without state nomination.",
  },
  "australia-190": {
    overview:
      "Subclass 190 adds state or territory nomination to your skilled migration application. Nomination typically grants extra points and may open occupations not available on 189.",
    whoItsFor:
      "Applicants willing to commit to living in the nominating state and who meet that state's occupation and points requirements.",
  },
  "australia-491": {
    overview:
      "Subclass 491 is a provisional skilled visa for regional Australia. After meeting residence and income conditions, you may be eligible to apply for permanent residency.",
    whoItsFor:
      "Skilled workers targeting regional areas who want a pathway to PR with potentially more accessible points thresholds.",
  },
};
