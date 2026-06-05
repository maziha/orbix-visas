import { COMPANY_NAME_SHORT } from "@/lib/contact-info";
import type { BlogPost } from "../types";

export function buildHowToCheckCrsScorePost(): BlogPost {
  return {
    slug: "how-to-check-crs-score",
    title: "How to Check Your CRS Score — Step by Step",
    metaTitle: "How to Check Your CRS Score for Canada PR | OrbiX Overseas Careers",
    metaDescription:
      "Step-by-step guide to calculating your Canada Express Entry CRS score — use the official IRCC tool, understand each factor, and know what score Kerala professionals need for an ITA.",
    keywords: [
      "crs score calculator",
      "how to check crs score",
      "canada express entry crs",
      "crs score kerala",
      "comprehensive ranking system",
    ],
    category: "migration",
    categoryLabel: "Canada PR",
    publishedAt: "2026-06-04",
    readingTime: 7,
    heroText:
      "Your Comprehensive Ranking System (CRS) score determines whether you receive an Invitation to Apply for Canada PR. This guide walks you through checking your score using the official IRCC tool and understanding what each factor contributes.",
    relatedServiceHref: "/migration/canada-pr",
    relatedServiceLabel: "Free CRS Assessment",
    sections: [
      {
        heading: "What You Need Before Calculating",
        paragraphs: ["Gather these details before using the CRS calculator:"],
        listItems: [
          "Age (or date of birth)",
          "Highest education level and whether you have an Educational Credential Assessment (ECA)",
          "IELTS, CELPIP, or TEF Canada language test results (or realistic target scores)",
          "Years of skilled work experience (NOC TEER 0–3) in Canada and abroad",
          "Whether you have a spouse or common-law partner applying with you",
          "Any additional factors: provincial nomination, job offer, sibling in Canada, Canadian study, or French proficiency",
        ],
      },
      {
        heading: "Step 1 — Use the Official IRCC CRS Tool",
        paragraphs: [
          "IRCC provides a free CRS calculator on the Government of Canada website. Search for 'Comprehensive Ranking System tool' or navigate via the Immigration and citizenship section → Immigrate → Express Entry → Check your score.",
          "Enter your details honestly — the calculator gives an estimate of the score IRCC would assign if you created a profile today. It is the most reliable source; third-party calculators may use outdated point tables.",
        ],
      },
      {
        heading: "Step 2 — Understand Your Core Score",
        paragraphs: ["Core/human capital factors account for up to 500 points (without a spouse):"],
        listItems: [
          "Age — Peak CRS points between 20–29; points decline after 30.",
          "Education — Higher credentials earn more; ECA is required for foreign degrees.",
          "Language — CLB 7 is the FSW minimum; CLB 9 and CLB 10 add significantly more.",
          "Canadian work experience — Even 1 year of skilled Canadian work adds meaningful points.",
        ],
      },
      {
        heading: "Step 3 — Check Transferability and Bonus Points",
        paragraphs: [
          "Skill transferability combines education, language, and experience for up to 100 additional points. Additional points can add up to 600 — a provincial nomination alone is worth 600 and virtually guarantees an ITA.",
          "Compare your total against recent draw cutoffs. All-programs draws have often required 480–540; category-based healthcare and STEM draws have been lower.",
        ],
      },
      {
        heading: `Get a Professional CRS Review at ${COMPANY_NAME_SHORT}`,
        paragraphs: [
          "The IRCC tool gives a snapshot, but strategy matters: which language test to retake, whether PNP is realistic, and how to time your profile creation. Orbix provides a free CRS assessment in Vyttila that includes a draw-type strategy — not just a number.",
        ],
      },
    ],
    faq: [
      {
        question: "Is the IRCC CRS calculator accurate?",
        answer:
          "Yes — it uses the current official point tables. Your actual profile score may differ slightly if IRCC interprets your work experience or education differently, which is why a counsellor review helps before you lodge.",
      },
      {
        question: "Can I check CRS without IELTS results?",
        answer:
          "You can enter target scores to see potential points, but you cannot create a real Express Entry profile without valid language test results. Use target scores to plan your study strategy.",
      },
      {
        question: "What CRS score do Kerala applicants typically need?",
        answer:
          "For all-programs draws, aim for 480+. Healthcare and STEM category draws may invite at 430–470. PNP nomination adds 600 points regardless of your base score.",
      },
      {
        question: "Does my spouse's score affect my CRS?",
        answer:
          "If your spouse accompanies you, their language, education, and Canadian work experience can add up to 40 points. Alternatively, you can choose not to claim spouse factors if it lowers your score.",
      },
    ],
  };
}
