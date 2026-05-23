# Orbix Website — Change Suggestions & Cursor Prompts

**Website:** https://orbix-visas.netlify.app  
**Purpose:** Developer handoff — corrections for look, feel, UX, audience routing, and SEO  
**Audience priority:** PR / migration seekers first · Study abroad second · Family and spouse visa third

---

## Brand Reference (from logo guidelines)

Use these values as the single source of truth for all colour decisions on the site.

| Token | Value | Usage |
|---|---|---|
| Primary Navy | `#040175` | Dominant background, headings, primary buttons |
| Accent Sky Blue | `#3FB8F7` | Highlights, borders, label text, secondary accents |
| White | `#FFFFFF` | Text on dark backgrounds, card backgrounds |
| Subtle section BG | `#F4F6FB` | Light blue-tinted white for alternating content sections |
| Body text on white | `#1A1A2E` | Never pure black |

**Typography:** The logo guidelines do not name a typeface explicitly. The letterhead and business card show a clean geometric sans-serif. Confirm the font name with the client. If unconfirmed, use **Nunito** or **Poppins** as a close match to the logo geometry until clarified.

**Permitted logo backgrounds:** White · `#040175` navy · `#3FB8F7` sky blue · Dark/charcoal. No other backgrounds are permitted under the brand guidelines.

---

## Change Suggestions

---

### 1. Colour palette — enforce brand-only backgrounds across the full site

**Issue:** Multiple sections use background colours outside the brand palette as you scroll, creating a patchwork feel that undermines the premium tone the hero establishes.

**Why it matters:** Visual inconsistency signals poor brand discipline. A visitor scrolling through the page should feel they are on one coherent site, not a collection of blocks assembled separately.

**What to do:** Restrict all section backgrounds to three values only — `#040175` (dark sections), `#FFFFFF` (content sections), `#F4F6FB` (alternating subtle sections). Remove every other background colour from the codebase.

**Cursor prompt:**
```
Audit every section and component background colour across the entire site. Define three CSS custom properties at :root level: --color-bg-dark: #040175; --color-bg-white: #ffffff; --color-bg-subtle: #F4F6FB. Replace every hardcoded background-color value in the codebase with one of these three tokens. The only permitted accent colour is #3FB8F7, used for borders, label text, and underlines — never as a full section background. No section background should use any colour outside this system. After replacing, do a final grep for background-color and background: in the CSS and flag anything that is not a variable reference or transparent.
```

---

### 2. "Calculate Your Eligibility Now" section — fix background and false promise

**Issue:** This section's background colour breaks the tone of the page and reads like a promotional banner. Additionally, the heading promises a calculator but both cards only link to a booking form — a broken expectation that damages trust the moment a visitor clicks.

**Why it matters:** The hero has established a premium, trustworthy feel. A cheap-looking contrasting section mid-page undermines that. The false calculator promise is a conversion killer — visitors who click expecting an instant result and find a booking button feel misled.

**What to do:** Fix the background. Fix the promise. Either build a basic interactive calculator or rename the section honestly.

**Cursor prompt:**
```
The "Calculate Your Eligibility Now" section needs two fixes.

First: change the section background to #040175. Update all text in this section to #FFFFFF. The two calculator cards should have a #FFFFFF background with a 1px border in #3FB8F7 and border-radius 12px.

Second: the section heading promises a calculator but the CTAs only open a booking form. Build a minimal interactive eligibility check for each card.

For Canada: a 5-question form (age range, education level, work experience in years, English proficiency yes/no, job offer yes/no) that calculates an approximate CRS band (low/medium/high) and displays it on screen before showing a "Book a consultation to confirm your score" CTA.

For Australia: a similar 5-question form (age, skills assessment yes/no, English level, years of experience, state nomination interest) showing a points band.

If building interactive calculators is out of scope, rename the section heading to "Check If You Qualify" and change the card button labels to "Check Australia Eligibility" and "Check Canada Eligibility". Never use a heading that promises a calculation the page cannot deliver.
```

---

### 3. CTA button wording and style — standardise across the site

**Issue:** The site uses "Book a Free Consultation", "Book Consultation", "Book Free Assessment", and "Learn More" as button labels interchangeably. Some appear as solid buttons, others as links. There is no consistent visual hierarchy between primary and secondary actions.

**Why it matters:** CTA inconsistency creates decision fatigue and weakens the conversion signal. Every button should be instantly recognisable as either the main action or a supporting action.

**What to do:** Define two button types and enforce them site-wide.

**Cursor prompt:**
```
Standardise all CTA buttons to two types only.

Primary button: background #040175, colour #FFFFFF, border-radius 8px, padding 12px 28px, font-weight 600, no border — used for all main conversion actions. Rename all primary CTA labels to exactly "Book a Free Consultation" unless the context specifically requires different wording (e.g. a WhatsApp button).

Secondary button: background transparent, border 2px solid #040175, colour #040175, same radius and padding — used for "Explore", "Learn More", and navigation-type actions.

Remove all other button variants from the codebase. Do a global search for all button and anchor-styled-as-button elements and categorise each as primary or secondary, then apply the correct style. Any green colour currently used on buttons should be removed entirely — it is not in the Orbix brand palette.
```

---

### 4. Hero — add audience segmentation below the headline

**Issue:** The hero headline "Your Gateway to Global Opportunities" is generic and does not signal to the primary audience — PR and migration seekers — that they are in the right place. The only audience routing below the headline is a generic "Explore Services" link.

**Why it matters:** A visitor who lands from a "Canada PR consultant Kerala" ad needs to see within 3 seconds that this site handles their specific need. Currently the hero makes everyone — students, migrants, family visa seekers — read the entire page to find their path. That is friction that costs conversions.

**What to do:** Add three clickable audience cards directly below the hero subtitle, before the stats row.

**Cursor prompt:**
```
Below the hero subtitle text and above the stats row, add a row of three clickable routing cards.

Each card: white background, left border 4px solid #3FB8F7, border-radius 8px, padding 16px 20px, cursor pointer. Hover state: left border colour changes to #040175.

Each card contains: a small SVG icon, a bold label in #040175 at 16px font-weight 600, and a one-line description in #3FB8F7 at 13px.

Card 1 — label: "Migrate & Get PR", description: "Canada and Australia permanent residency pathways", link: /migration
Card 2 — label: "Study Abroad", description: "Undergraduate and postgraduate programs across 7 countries", link: /study-abroad
Card 3 — label: "Family & Spouse Visa", description: "Reunite with your family or spouse overseas", link: /services#family-visa

On mobile, stack these cards vertically. These cards are the primary navigation shortcut for the primary audience and ad traffic — they must appear before the first scroll.
```

---

### 5. Homepage section order — move migration above study abroad

**Issue:** The first section after the hero is "Choose Your Favourite Study Destination." A visitor arriving for Canada PR or Australia migration sees a study-abroad grid and may assume the site is student-focused only.

**Why it matters:** Section order communicates priority. The client confirmed PR and migration is the primary audience. The page order should reflect that.

**What to do:** Reorder the homepage sections to match audience priority.

**Cursor prompt:**
```
Reorder the homepage sections in this sequence, keeping each section's existing content and styling intact — only reorder them:

1. Hero section with the new audience routing cards.
2. Migration Programs section — retitle the section heading to "Migrate & Get Permanent Residency".
3. A new two-column section titled "Bringing Family Overseas" — left column: heading "Spouse Visa & Family Reunification", a 2-sentence description, and a "Book a Free Consultation" CTA. Right column: a bullet list of visa types (Spouse Visa, Parent Visa, Student Dependent Visa). Background: #F4F6FB.
4. Study Destinations section — retitle from "Choose Your Favourite Study Destination" to "Study Abroad — Explore 7 Countries".
5. Study Abroad overview section ("Open Doors. Expand Horizons.").
6. Other Services section.
7. Why Choose Orbix stats section.
8. Ready to Take the Next Step CTA strip.
9. Footer.
```

---

### 6. Quick Enquiry form — replace with a goal-first two-step form

**Issue:** The current Quick Enquiry form only asks for academic qualification level (Master's, Degree, Plus Two). This immediately excludes migration visitors and family visa seekers — it reads as a student admissions form, not a consultation request.

**Why it matters:** The form is the softest lead capture on the page. Making it student-only filters out the primary audience before they can even enquire.

**What to do:** Replace with a goal-first two-step form.

**Cursor prompt:**
```
Replace the existing Quick Enquiry form with a two-step form component.

Step 1: Display a single question — "What are you looking for?" — as three large radio-button cards: "Migrate / Get PR", "Study Abroad", "Family or Spouse Visa". Each card has an icon, a bold label, and a one-line description.

Step 2: After the visitor selects one, animate in the relevant input fields below without a page reload.
- For "Migrate / Get PR": Name (text), WhatsApp number (tel), dropdown "Which country? — Canada / Australia / Other"
- For "Study Abroad": Name, WhatsApp, dropdown "Preferred country?" with all 7 study destinations
- For "Family or Spouse Visa": Name, WhatsApp, dropdown "Visa type?" — Spouse Visa / Parent Visa / Student Dependent Visa

Submit button label: "Get Free Assessment" on all three paths. Button style: background #040175, white text.

On submit, show a confirmation message: "We will contact you within 24 hours. For faster response, WhatsApp us at +91 8592026134." Do not refresh the page on submit.
```

---

### 7. Destinations section — rename and add intent-based links

**Issue:** The destinations grid is titled "Choose Your Favourite Study Destination" and only links to study abroad pages. Canada and Australia are listed, but a visitor interested in Canada PR who clicks the Canada card is taken to a study-in-Canada page.

**Why it matters:** It creates a mismatch between intent and destination. A migration visitor who clicks Canada expects to see migration pathways. Getting a study-abroad page makes them feel they are on the wrong site.

**What to do:** Rename the section and make destination cards smarter.

**Cursor prompt:**
```
Rename the destinations section heading from "Choose Your Favourite Study Destination" to "Explore Destinations".

For each country card that has both a study and a migration pathway (Canada and Australia), add two small pill link labels below the country description:
- Pill style: background #3FB8F7, white text, font-size 12px, border-radius 20px, padding 4px 10px
- Pill 1: "Study" → /study-abroad/[country]
- Pill 2: "PR / Migration" → /migration/[country]-pr

For countries that only have study pathways (UK, New Zealand, France, Germany, Poland), keep a single "Study" pill link.

This allows a visitor to choose their intent directly from the destination card rather than discovering the mismatch after clicking.
```

---

### 8. Migration programs section — group by country, fix Learn More links

**Issue:** The six migration program cards alternate between Canada and Australia without grouping. All "Learn More" links go to /migration with no anchor, making them indistinguishable.

**Why it matters:** A visitor evaluating Canada options has to scan across Australia cards to find all relevant options. This cognitive friction slows decision-making unnecessarily.

**What to do:** Group cards by country and fix link destinations.

**Cursor prompt:**
```
Add anchor IDs to each program section on the /migration page:
#canada-express-entry, #canada-pnp, #canada-family-sponsorship, #australia-189, #australia-190, #australia-491

Reorder the homepage migration cards into two groups with a label divider above each:
- Label style: font-size 12px, font-weight 600, text-transform uppercase, colour #3FB8F7, letter-spacing 0.1em, with a 2px #040175 underline

Group 1 label: "CANADA" — cards: Canada Express Entry, Provincial Nominee Program, Canada Family Sponsorship
Group 2 label: "AUSTRALIA" — cards: Subclass 189, Subclass 190, Subclass 491

Update every "Learn More" link to point to the corresponding anchor:
- Canada Express Entry → /migration#canada-express-entry
- PNP → /migration#canada-pnp
- Canada Family Sponsorship → /migration#canada-family-sponsorship
- Australia 189 → /migration#australia-189
- Australia 190 → /migration#australia-190
- Australia 491 → /migration#australia-491
```

---

### 9. Navigation — fix dead service dropdown links

**Issue:** All five visa service items in the navigation dropdown (Spouse Visa, Parent Visa, Job Seekers Visa, Visit Visa, Student Dependent Visa) link to /services — the same page, no scroll target.

**Why it matters:** Navigation that appears to have depth but leads to the same destination on every click is a usability failure and a missed SEO opportunity.

**What to do:** Add anchor IDs to the services page and update nav links accordingly.

**Cursor prompt:**
```
Add anchor IDs to the relevant sections on the /services page:
id="spouse-visa"
id="parent-visa"
id="job-seekers-visa"
id="visit-visa"
id="student-dependent-visa"
id="ielts-booking"
id="loan-assistance"
id="post-landing-services"

Update the navigation dropdown links to point to the correct anchors:
- Spouse Visa → /services#spouse-visa
- Parent Visa → /services#parent-visa
- Job Seekers Visa → /services#job-seekers-visa
- Visit Visa → /services#visit-visa
- Student Dependent Visa → /services#student-dependent-visa
- IELTS Test Booking → /services#ielts-booking
- Loan Assistance → /services#loan-assistance
- Post Landing Services → /services#post-landing-services

Apply the same anchors to the "Other Services We Offer" section on the homepage if those cards appear there.
```

---

### 10. Leadership section — remove stock photo, restructure

**Issue:** The photo used for Anup Kannan (Managing Director) is a stock image from Unsplash — a recognisable professional stock photo used across thousands of websites. A significant number of visitors will recognise it and immediately question the company's credibility.

**Why it matters:** For an immigration consultancy where people entrust major life decisions, credibility is everything. A recognisable stock photo is the single fastest way to destroy it.

**What to do:** Remove the photo, replace with an initials avatar, and restructure the section heading.

**Cursor prompt:**
```
In the leadership/team section, remove the Unsplash stock photo for Anup Kannan.

Replace it with an initials avatar component:
- Shape: circle, 80px diameter
- Background: #040175
- Text: "AK", font-size 28px, font-weight 600, colour #FFFFFF, centred

Add a code comment next to this component:
<!-- TODO: Replace with real photo before launch — coordinate with client -->

Change the section heading from "More Than Just Managers — Leaders" to "Our Leadership".

Remove the "Unlike most consultancies…" paragraph — replace with a single credentials line below the name and title:
e.g. "Certified immigration consultant with expertise in Canadian and Australian migration pathways."
Add a comment: <!-- TODO: Confirm credentials text with client -->

On mobile, stack avatar and text vertically, centred.
```

---

### 11. Social media icons — remove dead links from footer

**Issue:** The footer contains four social media icons all linking to `#`. Dead links in the footer are a usability failure and look unfinished to any visitor who checks.

**Why it matters:** Dead links cost almost nothing to fix and have an outsized effect on perceived professionalism for a new company.

**What to do:** Hide the icons until real URLs are provided by the client.

**Cursor prompt:**
```
Find all social media icon links in the footer. If any href value is "#" or empty, wrap the entire social icons row in an HTML comment to hide it from the live site:

<!-- Social links: add real profile URLs before going live
[social icons HTML here]
-->

If at least one URL is a real profile link (not #), keep only those and remove the placeholder ones. Do not leave any anchor tag with href="#" in the footer. Once the client provides real social media URLs, reinstate the row with proper links and aria-label attributes for accessibility.
```

---

### 12. "Hope Builds Future" section — replace with a functional CTA strip

**Issue:** The section near the footer contains "Fear never builds the future — hope does" with a consultation button. The inspirational quote gives the visitor nothing specific to act on and uses valuable end-of-page real estate on philosophy rather than conversion.

**Why it matters:** Visitors who have read the whole page are the most informed and most likely to convert. The last section before the footer should make the conversion action as easy as possible.

**What to do:** Replace with a conversion-focused CTA strip.

**Cursor prompt:**
```
Replace the "Hope Builds Future" section with a full-width CTA strip.

Background: #040175
Padding: 64px 40px
Layout: centred content

Row 1: H2 in white — "Ready to take the first step?" — font-size 32px, font-weight 700
Row 2: paragraph in white at 70% opacity — "Speak with a counsellor — free, no obligation, available 6 days a week from Kochi."
Row 3: two buttons side by side, 16px gap:

Button 1 (primary): background #FFFFFF, colour #040175, border-radius 8px, padding 14px 32px, label "Book a Free Consultation", links to /contact
Button 2 (secondary): background transparent, border 2px solid rgba(255,255,255,0.6), colour #FFFFFF, same radius and padding, label "Chat on WhatsApp", href "https://wa.me/918592026134"

On mobile, stack buttons vertically. Remove the existing "Hope Builds Future" heading, the philosophical body copy, and the Unsplash image that accompanied it.
```

---

### 13. YouTube embed — add context or remove

**Issue:** The YouTube video embed appears mid-page with no heading, no description, and no explanation of what it covers. Visitors rarely watch an unlabelled video mid-scroll.

**Why it matters:** Without context, the video does not contribute to conversion. It slows page load and takes up significant visual space without giving the visitor a reason to engage.

**What to do:** Add context if the video is relevant, or remove it.

**Cursor prompt:**
```
Above the YouTube iframe, add an H3 heading — "See How Our Process Works" — in #040175.
Below the heading, add a single paragraph: "From your first consultation to landing abroad — here's what the Orbix journey looks like."

If the video content does not actually show the Orbix consultation and placement process (e.g. if it is a generic study-abroad promotional video), remove the iframe entirely and replace it with the revised two-step Quick Enquiry form from suggestion 6.

A video that is irrelevant to the surrounding content is worse than no video at all. Confirm video relevance with the client before going live.
```

---

### 14. Consistent section label pattern — apply across all sections

**Issue:** Sections have inconsistent eyebrow label styling. Some have a small label above the H2, others jump straight to the heading. This creates visual noise as you scroll and makes each section feel like a separate design decision.

**Why it matters:** Consistent typographic rhythm makes a page feel designed rather than assembled. Eyebrow labels help visitors orient themselves when scrolling.

**What to do:** Apply a consistent label treatment to every section.

**Cursor prompt:**
```
Create a reusable eyebrow label component with these styles:
- Element: <span> or <p>
- font-size: 12px
- font-weight: 600
- letter-spacing: 0.12em
- text-transform: uppercase
- colour: #3FB8F7 on dark backgrounds / #3FB8F7 on light backgrounds
- margin-bottom: 8px

Apply this label above every section H2 using these labels:
- Destinations section → "EXPLORE DESTINATIONS"
- Study Abroad section → "STUDY ABROAD"
- Migration section → "MIGRATION"
- Family Visa section → "VISA SERVICES"
- Services section → "OTHER SERVICES"
- Why Choose Orbix → "WHY ORBIX"
- Leadership section → "OUR LEADERSHIP"
- Hero, CTA strip, and Footer → no label

On dark backgrounds (#040175), use colour: rgba(255,255,255,0.65) for the label instead of #3FB8F7 if contrast is insufficient.
```

---

### 15. Page title and H1 — fix for SEO

**Issue:** The homepage title tag and H1 are both "Your Gateway to Global Opportunities." Neither contains a keyword, service description, or location. No one in Kerala searches for this phrase.

**Why it matters:** The title tag and H1 are the two most important on-page SEO signals. Both being keyword-empty means the site cannot rank for any primary intent search.

**What to do:** Update title and H1 with keyword-carrying copy.

**Cursor prompt:**
```
Update the homepage <title> tag to exactly:
"Orbix Overseas Careers | Immigration & Study Abroad Consultants, Kochi Kerala"

Update the homepage H1 from "Your Gateway to Global Opportunities" to:
"Immigration & Study Abroad Consultants in Kochi, Kerala"

Keep "Your Gateway to Global Opportunities" as a styled <p> tag or <span> directly below the H1 — do not remove it, just demote it from the H1 position.

Apply this pattern to all inner pages:
- Canada PR page title: "Canada PR Consultant in Kerala | Orbix Overseas Careers"
- Australia PR page title: "Australia PR Consultant in Kerala | Orbix Overseas Careers"
- Study abroad index title: "Study Abroad Consultant Kochi | UK, Canada, Germany & More | Orbix"
- UK study page title: "Study in UK from Kerala | Universities, Visa & Guidance | Orbix"

Each inner page title should follow the format: [Service/Country keyword] | Orbix Overseas Careers
```

---

### 16. Meta description — add location and primary services

**Issue:** The meta description mentions countries but does not mention Kerala, Kochi, or India. Without a location signal, the site is less likely to appear relevant in local search results.

**Why it matters:** The meta description is what users read in Google before clicking. Naming their location and their specific service need increases click-through rate directly.

**What to do:** Rewrite the homepage meta description and establish a pattern for inner pages.

**Cursor prompt:**
```
Update the homepage meta description to:
"Orbix Overseas Careers — immigration and study abroad consultants based in Kochi, Kerala. Expert guidance for Canada PR, Australia PR, spouse visa, family visa, and study abroad across 7 countries. Free first consultation."
(Confirm character count is under 160 characters.)

For the Canada PR page:
"Expert Canada PR consultant in Kerala — Orbix guides you through Express Entry, PNP, and family sponsorship. Free eligibility assessment from Kochi."

For the Australia PR page:
"Australia skilled migration consultant in Kerala — Orbix handles subclass 189, 190, and 491 applications. Free assessment from Kochi."

Apply this pattern to all pages: every meta description must name Kerala or Kochi and the specific service that page covers.
```

---

### 17. Contact email — replace Gmail with domain email

**Issue:** The footer and contact page display `orbixoverseascareers@gmail.com`. For an immigration consultancy asking people to trust them with major life decisions, a Gmail address signals that the business is not fully set up as a professional operation.

**Why it matters:** Domain email costs almost nothing and has an outsized effect on perceived credibility. Gmail on a professional consultancy site is a gap that is easy to fix and easy to notice.

**What to do:** Replace with a domain email. Confirm the address with the client.

**Cursor prompt:**
```
Do a global search across all files for "orbixoverseascareers@gmail.com". Replace every instance with "hello@orbixoverseascareers.com" as a placeholder.

Add a code comment next to every replacement:
<!-- TODO: Confirm final domain email address with client before going live -->

This applies to: the footer, the contact page, any mailto: links, structured data, and any API or form submission endpoint that sends to this address. Do not leave the Gmail address in the production build.
```

---

## Priority Order for Implementation

| Priority | Suggestions | Reason |
|---|---|---|
| **First** | 1, 2, 3 | Colour palette, eligibility section, button standardisation — fix the visual inconsistency the client already flagged; affects the entire site |
| **Second** | 4, 5 | Hero routing cards and section reorder — highest impact on whether the primary audience stays on the site |
| **Third** | 6, 7, 8 | Form, destination cards, migration grouping — improve conversion flow for each audience type |
| **Fourth** | 9, 10, 11 | Nav links, leadership photo, social icons — fix trust and usability issues |
| **Fifth** | 12, 13, 14 | CTA strip, YouTube, section labels — improve bottom-of-page experience and visual consistency |
| **Before go-live** | 15, 16, 17 | SEO title/H1, meta description, domain email — must be done before the site is indexed or paid traffic begins |

---

*Prepared based on full audit of https://orbix-visas.netlify.app and the Orbix Overseas Careers Brand Identity Guidelines (May 2026).*
