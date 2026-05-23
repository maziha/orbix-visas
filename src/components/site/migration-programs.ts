import type { CountryCode } from "@/lib/countries";

export type MigrationProgram = {
  id: string;
  name: string;
  countryCode: CountryCode;
  desc: string;
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
        countryCode: "CA",
        desc: "Skilled worker pathway to permanent Canadian residency.",
      },
      {
        id: "canada-pnp",
        name: "Provincial Nominee Program",
        countryCode: "CA",
        desc: "Immigrate via nomination by a Canadian province or territory.",
      },
      {
        id: "canada-family-sponsorship",
        name: "Canada Family Sponsorship",
        countryCode: "CA",
        desc: "Sponsor relatives to live, study and work in Canada.",
      },
    ],
  },
  {
    label: "AUSTRALIA",
    programs: [
      {
        id: "australia-189",
        name: "Subclass 189",
        countryCode: "AU",
        desc: "Permanent residency for invited skilled workers (Skilled Independent).",
      },
      {
        id: "australia-190",
        name: "Subclass 190",
        countryCode: "AU",
        desc: "Permanent residency for state-nominated skilled workers.",
      },
      {
        id: "australia-491",
        name: "Subclass 491",
        countryCode: "AU",
        desc: "Live and work in regional Australia as a skilled migrant.",
      },
    ],
  },
];
