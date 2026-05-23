export const HERO_SLIDE_INTERVAL_MS = 7000;

export type HeroSlide = {
  id: string;
  label: string;
  title: string;
  titleAccent: string;
  subtitle: string;
  secondaryCta: {
    label: string;
    to: string;
    hash?: string;
  };
  backgroundImage: string;
  backgroundImageAlt: string;
  dotLabel: string;
};

/** PR first — audience priority */
export const heroSlides: HeroSlide[] = [
  {
    id: "pr",
    label: "Migrate & Get PR",
    title: "Your Path to",
    titleAccent: "Canada & Australia PR",
    subtitle:
      "Clear guidance on Express Entry, provincial nominations, and Australian skilled migration.",
    secondaryCta: { label: "Explore Migration", to: "/migration" },
    backgroundImage:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1920&q=80&auto=format&fit=crop",
    backgroundImageAlt: "Airplane above clouds — international travel and migration",
    dotLabel: "Permanent residency",
  },
  {
    id: "study",
    label: "Study Abroad",
    title: "Study at Top Universities in",
    titleAccent: "7 Countries",
    subtitle:
      "Undergraduate and postgraduate programs with honest advice from your first consultation.",
    secondaryCta: { label: "Explore Study Abroad", to: "/study-abroad" },
    backgroundImage:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1920&q=80&auto=format&fit=crop",
    backgroundImageAlt: "Students on a university campus",
    dotLabel: "Study abroad",
  },
  {
    id: "family",
    label: "Family & Spouse Visa",
    title: "Reunite with Your",
    titleAccent: "Family Overseas",
    subtitle:
      "Spouse, parent, and dependent visa support with dedicated counselling throughout.",
    secondaryCta: {
      label: "Family Visa Services",
      to: "/services",
      hash: "family-visa",
    },
    backgroundImage:
      "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=1920&q=80&auto=format&fit=crop",
    backgroundImageAlt: "Family spending time together outdoors",
    dotLabel: "Family and spouse visa",
  },
];
