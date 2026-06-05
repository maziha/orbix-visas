# OrbiX Overseas Careers — SEO Audit & Action Plan

**Site:** https://orbixvisas.com  
**Audit date:** May 2026  
**Pages reviewed:** Homepage · /migration/canada-pr · /study-abroad/canada · /study-abroad/uk · /services · /about · /contact  
**Status:** No intentional SEO applied — this is a baseline audit

---

## Before anything else — the competitor reality

CanApprove is the dominant player in this market. They rank for virtually every "immigration consultant Kochi" or "Canada PR Kerala" query. What makes them unbeatable right now is not design — it is time and authority. They have:

- 28 years of operation
- CICC registration (Canada's official body for licensed immigration consultants)
- 17+ office locations
- City-specific pages for every major Kerala city (Kochi, Thrissur, Calicut, Trivandrum, Kottayam)
- Hundreds of pages of content covering every immigration sub-topic
- Thousands of backlinks

Orbix cannot fight CanApprove head-to-head on their strongest keywords immediately. The smart SEO strategy for Orbix is to own the specific local niche (Vyttila, Ernakulam) first, build topical depth on two or three primary services, and capture long-tail queries that CanApprove covers too broadly to rank well for.

This audit is structured around that realistic path.

---

## Part 1 — Critical Technical Issues

> These must be fixed before any other SEO work begins. They prevent the site from being properly indexed.

### CRITICAL 1: Every canonical tag on the site points to the wrong domain

**What was found:**

Every page has this in its `<head>`:

```
canonical: https://orbixoverseascareers.com/[path]
```

The site lives at `https://orbixvisas.com/` — but the canonical tag tells Google: "the authoritative version of this page is at orbixoverseascareers.com."

If `orbixoverseascareers.com` is not a live, indexed site with identical content, Google is being told to follow a canonical that leads nowhere. The result is that `orbixvisas.com` may not be indexed properly at all. Google will either defer to the canonical URL (and not index `orbixvisas.com`) or treat the canonical as an error and reduce trust in the entire domain.

**This is the single most damaging technical issue on the site. It must be fixed today.**

**What to do:**

Change every canonical tag across all pages from:
```
https://orbixoverseascareers.com/[path]
```
to:
```
https://orbixvisas.com/[path]
```

If the site is built in a framework like Next.js, Astro, or similar — find the canonical tag configuration in the site's head component or metadata configuration and update the base URL to `https://orbixvisas.com`. This is a single config change that cascades to all pages.

If `orbixoverseascareers.com` is the intended long-term domain (matching the brand name better), the plan should be to:

1. Either move the site to `orbixoverseascareers.com` and set up a 301 redirect from `orbixvisas.com`
2. Or commit to `orbixvisas.com` and update all canonicals accordingly

Do not leave mismatched canonicals live for a single day longer.

---

### CRITICAL 2: All OG image tags point to a non-existent URL on the wrong domain

**What was found:**

Every page has:
```
meta-og:image: https://orbixoverseascareers.com/og-image.jpg
```

When anyone shares any page from `orbixvisas.com` on WhatsApp, Facebook, or LinkedIn, the social platform tries to fetch the OG image from `orbixoverseascareers.com`. If that domain does not resolve, every share shows a blank image. In the Kerala immigration market, WhatsApp sharing is a primary word-of-mouth channel. Every shared link with a blank preview loses credibility.

**What to do:**

Upload the OG image to `orbixvisas.com` — place the file at `/public/og-image.jpg` or wherever the site's static assets live. Update all OG image references to:

```
https://orbixvisas.com/og-image.jpg
```

The OG image itself should be 1200×630px, show the OrbiX logo on a `#040175` navy background with the tagline "Canada PR · Australia PR · Study Abroad — Kochi, Kerala" in white text. This is what appears as the thumbnail on every shared link.

---

### CRITICAL 3: Study abroad country pages all show identical content

**What was found:**

`/study-abroad/canada` and `/study-abroad/uk` are two different URLs with unique page titles and meta descriptions — but the actual page body content is completely identical. Both pages show the same "Choose Your Destination" heading and the same grid of all 7 countries. Every `/study-abroad/[country]` URL appears to render the same destinations index, not country-specific content.

This is duplicate content across 7 URLs. Google will see 7 pages that say the same thing, consolidate them into one (likely the index), and not rank any individual country page for country-specific queries.

Competing for "study in Canada from Kerala" or "study in UK consultant Kochi" requires a dedicated, unique page for each country. Right now none of those pages exist despite having the URL structure for them.

**What to do:**

Each `/study-abroad/[country]` URL needs its own unique page content. At minimum, each country page must include:

- **H1:** "Study in [Country] from Kerala — Consultant in Kochi"
- An introduction paragraph specific to that country, written for Kerala students
- A "Why [Country]?" section with 3–4 reasons specifically relevant to the Kerala student profile
- Tuition fee range in INR (e.g., ₹10–18 lakh/year)
- IELTS requirement (e.g., 6.0 overall minimum for most programs)
- Post-study work rights (e.g., PGWP up to 3 years for Canada)
- Popular courses for Kerala students in that country (Nursing, Engineering, Business, Healthcare Management)
- Visa process overview — 4 steps minimum
- How OrbiX helps — specific services: shortlisting, SOP, application, visa filing
- An FAQ section with 5–7 questions about studying in that country from Kerala
- CTA: "Start your [Country] study abroad journey — free first consultation"

The destination index at `/study-abroad` can keep showing all 7 countries. But each individual URL must serve unique, substantive content for that country.

---

### CRITICAL 4: H1 tags on key inner pages carry no keywords

**What was found:**

| Page | Current H1 | Problem |
|---|---|---|
| /migration/canada-pr | "Your New Chapter Begins Here" | Zero keywords. No searcher types this. |
| /study-abroad/canada | "Choose Your Destination" | Wrong heading for a Canada-specific page |
| /study-abroad/uk | "Choose Your Destination" | Wrong for a UK-specific page |
| /migration (index) | "Your New Chapter Begins Here" | No location or service keywords |

The H1 is the single most important on-page ranking signal after the title tag. Having keyword-empty H1 tags on your primary service pages means those pages have no chance of ranking for their target queries regardless of how good the content is.

**What to do — page by page:**

- **/migration/canada-pr:** `Canada Permanent Residency — Expert Consultant in Kochi, Kerala`
- **/migration/australia-pr:** `Australia Permanent Residency — Skilled Migration Consultant in Kochi`
- **/migration (index):** `Canada PR & Australia PR — Migration Consultants in Kochi, Kerala`
- **/study-abroad/canada:** `Study in Canada from Kerala — University Admissions & Student Visa`
- **/study-abroad/uk:** `Study in the UK from Kerala — Student Route Visa & University Guide`
- **/study-abroad/australia:** `Study in Australia from Kerala — Admissions, Visa & PSWR Guide`
- **/study-abroad/germany:** `Study in Germany from Kerala — Free Tuition & Job Seeker Visa Guide`

Apply the same pattern (specific country + "from Kerala" + service type) to all remaining country pages.

---

### TECHNICAL 5: No sitemap submitted to Google

**What was found:**

There is no evidence of a `sitemap.xml` being referenced in the site. Without a submitted sitemap, Google discovers pages by following links — which is slower, less complete, and gives you no control over crawl priority.

**What to do:**

Generate a `sitemap.xml` covering all current URLs:

```
https://orbixvisas.com/
https://orbixvisas.com/migration
https://orbixvisas.com/migration/canada-pr
https://orbixvisas.com/migration/australia-pr
https://orbixvisas.com/study-abroad
https://orbixvisas.com/study-abroad/canada
https://orbixvisas.com/study-abroad/australia
https://orbixvisas.com/study-abroad/uk
https://orbixvisas.com/study-abroad/new-zealand
https://orbixvisas.com/study-abroad/germany
https://orbixvisas.com/study-abroad/france
https://orbixvisas.com/study-abroad/poland
https://orbixvisas.com/services
https://orbixvisas.com/services/spouse-visa
https://orbixvisas.com/services/parent-visa
https://orbixvisas.com/services/student-dependent-visa
https://orbixvisas.com/about
https://orbixvisas.com/contact
```

Add a reference to the sitemap in `robots.txt`:

```
User-agent: *
Allow: /
Sitemap: https://orbixvisas.com/sitemap.xml
```

Then submit the sitemap to Google Search Console (set up in Part 5 below).

---

### TECHNICAL 6: Internal links on Canada PR page are circular

**What was found:**

On `/migration/canada-pr`, all three "First step" links at the bottom of each pathway section (Express Entry, PNP, Family Sponsorship) link back to `/migration/canada-pr` — the same page the visitor is already on. This is a wasted internal link. Google follows internal links to discover and assign ranking signals to pages. A link from a page back to itself contributes nothing.

**What to do:**

Replace the three "First step" links with meaningful destinations:

- **Express Entry "First step"** → Link to a blog article: "How to check your CRS score — Express Entry guide for Kerala professionals" (create this article)
- **PNP "First step"** → Link to `/contact?service=pnp`
- **Family Sponsorship "First step"** → Link to `/contact?service=family-sponsorship`

Until the blog article exists, link all three to `/contact` with service-specific parameters. Never link a page to itself.

---

## Part 2 — On-Page SEO Issues

### PAGE 7: Title tags are good on some pages, weak on study abroad country pages

**Good titles (keep these):**

- Homepage: "OrbiX Overseas Careers | Canada PR, Australia PR & Study Abroad — Kochi" ✓
- Canada PR: "Canada PR Consultant in Kerala | OrbiX Overseas Careers" ✓
- Services: "Visa Services Kerala | Spouse, Parent & Family Visa | OrbiX" ✓

**Weak titles (fix these):**

| Current title | Problem | Improved version |
|---|---|---|
| "Study in Canada \| OrbiX Overseas Careers" | No location signal | "Study in Canada from Kerala \| Admissions & Visa Consultant Kochi" |
| "Study in the UK \| OrbiX Overseas Careers" | No location signal | "Study in the UK from Kerala \| Student Route Visa Consultant Kochi" |
| "Study in Canada \| OrbiX Overseas Careers" | Same title as /study-abroad/canada despite being a different page | Fix once unique content exists |

The pattern for study abroad titles should be: `"Study in [Country] from Kerala | [Key benefit] | OrbiX Overseas Careers"`. Keep under 60 characters.

---

### PAGE 8: Meta descriptions are good — one issue to fix

Most meta descriptions are well-written and include location (Kochi, Kerala). The one issue: verify that `orbixoverseascareers@gmail.com` isn't surfacing anywhere visible via `meta-author`.

The more important issue: the nav link in the site header reads **Email us** pointing to `mailto:orbixoverseascareers@gmail.com`. This is a professional credibility gap — anyone who hovers over "Email us" sees a Gmail address. Replace with `hello@orbixvisas.com` or `hello@orbixoverseascareers.com` depending on which domain is committed to.

---

### PAGE 9: The services sub-pages need unique titles and meta

`/services/spouse-visa`, `/services/parent-visa`, and `/services/student-dependent-visa` are linked from the site but there is no evidence they have unique titles or meta descriptions different from the main services page. Each should have its own optimised title:

- `/services/spouse-visa` → `"Spouse Visa Consultant Kochi, Kerala | OrbiX Overseas Careers"`
- `/services/parent-visa` → `"Parent Visa Consultant Kerala | Bring Parents Abroad | OrbiX"`
- `/services/student-dependent-visa` → `"Student Dependent Visa Kerala | Take Family While Studying | OrbiX"`

Each page needs at least 400 words of unique content covering eligibility, documents, timeline, and the OrbiX process for that specific visa.

---

### PAGE 10: No FAQ sections on any page

For any query like "Canada PR requirements for Kerala professionals" or "how to apply for spouse visa from India", Google's results page shows a "People Also Ask" box with 4–6 questions. To appear in these boxes, you need FAQ content on the page and FAQPage structured data (covered in Part 3).

**FAQ questions per page:**

**/migration/canada-pr — Add:**
- What is the minimum CRS score to get invited under Express Entry?
- How long does Canada Express Entry take from Kerala?
- Can I apply for Canada PR without a job offer?
- What English test do I need for Canada Express Entry?
- What documents do I need to start my Canada PR application?
- Can my family come with me on Canada PR?

**/migration/australia-pr — Add:**
- What is the minimum points score for Australia PR?
- What is the difference between Subclass 189, 190 and 491?
- Which professions from Kerala are most in demand for Australia PR?
- How long does Australia PR take from India?
- What is a skills assessment and do I need one?

**/study-abroad/canada — Add:**
- What IELTS score do I need to study in Canada?
- Can I work while studying in Canada?
- What is the PGWP and how does it lead to Canada PR?
- How much does it cost to study in Canada from Kerala in INR?
- What is the processing time for a Canada student visa?

Create FAQ sections on every service page following the same pattern. Write direct, specific answers — 50 to 100 words each. These answers become the source Google reads for featured snippets.

---

## Part 3 — Structured Data (Schema Markup)

Structured data tells Google exactly what type of business this is, where it is located, what it offers, and gives Google machine-readable information it can use to enhance search results with rich snippets.

### SCHEMA 1: LocalBusiness — the most important schema for local SEO

Add the following JSON-LD to the `<head>` of every page. Confirm each value with the client before publishing — especially coordinates.

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "OrbiX Overseas Careers",
  "image": "https://orbixvisas.com/og-image.jpg",
  "url": "https://orbixvisas.com",
  "@id": "https://orbixvisas.com/#business",
  "telephone": "+918592026124",
  "email": "hello@orbixvisas.com",
  "taxID": "32GFUPD6561J1Z0",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "7th Floor, Jomer Symphony, Ponnurunni East, Ponnurunni, Vyttila",
    "addressLocality": "Ernakulam",
    "addressRegion": "Kerala",
    "postalCode": "682019",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "9.9653",
    "longitude": "76.3116"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
      "opens": "09:00",
      "closes": "18:00"
    }
  ],
  "priceRange": "Free first consultation",
  "description": "OrbiX Overseas Careers is an immigration and study abroad consultancy in Vyttila, Ernakulam, Kerala. We guide professionals from Kerala through Canada PR, Australia PR, and study abroad pathways.",
  "areaServed": ["Kochi", "Ernakulam", "Kerala", "India"],
  "serviceType": ["Canada PR Consultation", "Australia PR Consultation", "Study Abroad Guidance", "Spouse Visa", "Family Visa"]
}
```

> **Note:** Confirm the coordinates (lat/lng) by opening Google Maps, searching for the Jomer Symphony building in Ponnurunni, and copying the coordinates from the URL. Do not use approximate values.

---

### SCHEMA 2: FAQPage — for every FAQ section added

For each FAQ section created, add this JSON-LD immediately after the FAQ HTML on that page. Example for the Canada PR page:

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the minimum CRS score to get invited under Canada Express Entry?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The CRS cutoff varies each draw. In recent rounds it has ranged from 470 to 540 for the Federal Skilled Worker stream. French-language candidates and category-based draws often have lower cutoffs. OrbiX helps you calculate your current score and identify strategies to improve it before your profile expires."
      }
    },
    {
      "@type": "Question",
      "name": "How long does Canada Express Entry take from Kerala?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "After receiving an Invitation to Apply (ITA), you have 60 days to submit a complete application. IRCC then targets a 6-month processing time for most Express Entry applications. Total from profile creation to receiving your Confirmation of Permanent Residence (COPR) is typically 12 to 18 months."
      }
    }
  ]
}
```

Replicate this pattern for every FAQ section on every page. This is what makes FAQ answers appear in Google's "People Also Ask" boxes.

---

### SCHEMA 3: BreadcrumbList — for navigation clarity

On inner pages, add breadcrumb schema to help Google understand the site's structure:

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://orbixvisas.com/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Migration",
      "item": "https://orbixvisas.com/migration"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Canada PR",
      "item": "https://orbixvisas.com/migration/canada-pr"
    }
  ]
}
```

Adjust per page. Also render visible breadcrumbs in the UI — "Home > Migration > Canada PR" — above the page H1. This improves both UX and SEO.

---

### SCHEMA 4: Organization — for brand knowledge panel

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "OrbiX Overseas Careers",
  "url": "https://orbixvisas.com",
  "logo": "https://orbixvisas.com/assets/logo_blue_white_background-25HZxs-R.webp",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+918592026124",
    "contactType": "customer service",
    "areaServed": "IN",
    "availableLanguage": ["English", "Malayalam"]
  },
  "sameAs": [
    "https://wa.me/918592026124"
  ]
}
```

Add social media profile URLs to `sameAs` once they are live. This schema builds the foundation for an OrbiX knowledge panel in Google.

---

## Part 4 — Local SEO

Local SEO is the fastest path to visibility for a new Kochi-based consultancy. Someone typing "immigration consultant near me" or "Canada PR consultant Kochi" on a phone is shown a Google Map pack — three local listings before any organic results.

### LOCAL 1: Google Business Profile — must be set up immediately

This is the most impactful single action for local SEO and it costs nothing.

**Steps:**

1. Go to [business.google.com](https://business.google.com) and sign in with an OrbiX Google account (not a personal account)
2. Search for "OrbiX Overseas Careers" — if a listing exists already, claim it. If not, create one.
3. Set business category: "Immigration & Naturalization Service" as primary. Add secondary categories: "Education Center", "Visa & Passport Service"
4. Add the exact address: 7th Floor, Jomer Symphony, Ponnurunni East, Ponnurunni, Vyttila, Ernakulam, Kerala 682019
5. Add phone: +91 8592026124
6. Add website: https://orbixvisas.com
7. Add opening hours: Monday–Saturday 9:00 AM – 6:00 PM
8. Add the OrbiX logo and at least 5 photos: exterior of the building/office, interior, team at work (not stock photos), the logo on a plain background
9. Write a business description (750 character limit): *"OrbiX Overseas Careers is an immigration and study abroad consultancy in Vyttila, Ernakulam, Kochi. We offer expert guidance for Canada PR, Australia PR, spouse and family visas, and study abroad across 7 countries including UK, Canada, Australia, and Germany. Free first consultation — call or WhatsApp +91 8592026124."*
10. Request Google to verify the listing (usually via postcard to the business address, phone, or video verification)

**After verification:**

- Add services: List every service (Canada PR, Australia PR, Express Entry, PNP, Spouse Visa, Parent Visa, Study Abroad Canada, Study Abroad UK, IELTS booking)
- Post a "What's new" post weekly — even 2–3 lines about a visa update or success story
- Respond to every Google review within 24 hours
- Actively request reviews from every client who has a positive experience — Google reviews are a direct local ranking factor

---

### LOCAL 2: NAP consistency — name, address, phone must be identical everywhere

Google cross-references the Name, Address, and Phone (NAP) of a business across the entire web. Inconsistencies reduce local ranking trust.

**Current NAP in the site footer:**
- **Name:** OrbiX Overseas Careers
- **Address:** 7th Floor, Jomer Symphony, Ponnurunni East, Ponnurunni, Vyttila, Ernakulam, Kerala 682019
- **Phone:** +91 8592026124

This exact format must appear everywhere — Google Business Profile, all directory listings, schema markup, and any press mentions. Do not abbreviate the address in some places and write it in full in others. Do not use a different phone number format (`+918592026124` vs `8592026124` vs `085-9202-6124`).

---

### LOCAL 3: Submit to Indian business directories

| Directory | URL | Priority |
|---|---|---|
| JustDial | justdial.com | High |
| Sulekha | sulekha.com | High |
| IndiaMart | indiamart.com | Medium |
| Shiksha | shiksha.com | High — specifically for study abroad |
| Yellow Pages India | yellowpages.in | Medium |
| India Business Directory | indiabusinessdirectory.com | Low |

For Shiksha specifically — create a consultant profile and list all 7 study destinations. This is where students and parents actively search for study abroad consultants and it has high domain authority.

---

### LOCAL 4: Create city-specific landing pages for high-volume local searches

CanApprove has dedicated pages for every city in Kerala — Thrissur, Calicut, Trivandrum, Kottayam. Orbix can start building this content too.

**Priority order based on population and immigration interest:**

1. Ernakulam / Kochi — `/immigration-consultant-ernakulam` (home turf — rank here first)
2. Thrissur — `/immigration-consultant-thrissur`
3. Calicut / Kozhikode — `/immigration-consultant-calicut`
4. Trivandrum — `/immigration-consultant-trivandrum`

Each city page: 600–800 words. Content: what services OrbiX offers for that city's residents, why Kochi's Vyttila office is accessible from that area, any city-specific context (e.g., Calicut has historically had high Gulf migration — a good angle for the job seekers visa).

> Do not create these pages until the core pages are fixed. They should come after the first two months of core SEO work.

---

## Part 5 — What Today's SEO Demands (Foundational Principles)

### PRINCIPLE 1: E-E-A-T — the most important concept for this industry

Immigration is classified by Google as a **YMYL (Your Money or Your Life)** category. Google applies significantly stricter quality standards to YMYL pages. The framework it uses is E-E-A-T:

- **Experience** — Has the author or business actually done this? For Orbix: real client outcomes, real cases handled, real counsellors with names and credentials.
- **Expertise** — Does the content show deep knowledge? This is why the Canada PR page needs substantive content about Express Entry, PNP, and Family Sponsorship — it signals that Orbix understands the topic, not just that it offers the service.
- **Authoritativeness** — Do other credible sources recognise this business? Built through backlinks from education directories, press mentions, and citations. This takes time.
- **Trustworthiness** — Is the business verifiable and honest? The GSTIN in the footer is excellent. The Gmail email is not — it signals an informal operation.

**Immediate E-E-A-T improvements:**

- Display Anup Kannan's credentials specifically — qualifications, certifications, or "15 years in immigration consulting" with a brief bio
- Add any industry association memberships if applicable
- Replace Gmail with domain email everywhere — including the nav "Email us" link
- Add the GSTIN more prominently — in the footer's trust signals row rather than just fine print

---

### PRINCIPLE 2: Topical authority — covering a topic completely, not partially

Google rewards sites that cover a topic comprehensively. For "Canada PR," the topic cluster includes:

**Core service page (already exists):**
- `/migration/canada-pr`

**Supporting content needed (blog articles):**
- "Canada Express Entry CRS score — what it is and how to improve yours"
- "Canada PNP vs Express Entry — which pathway is right for you in 2026?"
- "Canada PR requirements from India — the complete 2026 checklist"
- "How long does Canada Express Entry take in 2026?"
- "Canada PR for nurses from Kerala — complete guide"
- "Canada PR for engineers from Kerala — Express Entry NOC codes and eligibility"
- "IELTS requirement for Canada PR — CLB levels and test strategies"

When Orbix has a cluster of articles all covering different aspects of Canada PR and all linking to the main `/migration/canada-pr` page, Google understands that this site is an authoritative source on Canada PR. The same cluster approach applies to Australia PR and each study abroad destination.

---

### PRINCIPLE 3: Search intent — matching what the user actually wants

| Intent type | Example query | What's needed |
|---|---|---|
| Informational | "How does Canada Express Entry work?" | Blog article with full explanation |
| Commercial | "Canada PR consultant Kochi" | Service page with location signals, trust signals, CTA |
| Transactional | "Book immigration consultation Kochi" | /contact or a booking form |
| Navigational | "OrbiX Overseas Careers" | Homepage |

Currently, Orbix only has commercial and transactional pages. No informational content exists. This means the site is invisible for every "how does X work" query — where most people begin their research. Capturing informational intent through blog content is how you build an audience before they are ready to book a consultation.

---

### PRINCIPLE 4: Core Web Vitals — Google's page experience signals

- **LCP (Largest Contentful Paint):** How quickly the main content loads. Target: under 2.5 seconds. Ensure the hero image is preloaded with `<link rel="preload" as="image">` in the page head.
- **CLS (Cumulative Layout Shift):** Whether content jumps around while loading. Ensure all `<img>` tags have `width` and `height` attributes. Use `font-display: swap` for web fonts.
- **INP (Interaction to Next Paint):** How quickly the page responds to clicks. Audit the JavaScript bundle size.

**How to measure:** Go to [pagespeed.web.dev](https://pagespeed.web.dev) and enter `https://orbixvisas.com`. Run the test on Mobile. Fix the top 3 issues in the "Opportunities" section.

---

### PRINCIPLE 5: Mobile-first indexing

Google indexes the mobile version of pages first. The mobile version of each page must have the same content as the desktop version. Do not hide content on mobile that appears on desktop. Google indexes content that is visible in the mobile HTML — not content that requires a click to expand if that expansion is JavaScript-gated.

---

## Part 6 — Content Gap: The Blog

A blog does three things:
1. Captures informational search queries (where most of the search volume is)
2. Builds topical authority (signals to Google that the site is comprehensive)
3. Creates internal linking opportunities (articles link to service pages, passing ranking signals)

### Month 1 blog targets — write these first

| Article title | Target keyword | Monthly search est. (India) |
|---|---|---|
| Canada Express Entry 2026 — Complete Guide for Indians | canada express entry india | High |
| How to Check Your CRS Score — Step by Step | crs score calculator | High |
| Canada PR for Nurses from Kerala — Full Pathway | canada pr for nurses kerala | Medium |
| Australia PR Requirements for Indians in 2026 | australia pr requirements india | High |
| IELTS Score for Canada PR — What You Need | ielts score for canada pr | High |
| Study in UK vs Canada — Which is Better for Kerala Students? | study in uk vs canada | Medium |
| Spouse Visa Canada — How to Sponsor Your Partner | spouse visa canada india | Medium |
| Germany Study Visa from India — Blocked Account and Requirements | germany study visa india | Medium |

**Article structure for each:** 800–1200 words minimum. Include H2 sub-headings covering every sub-question, a FAQ section at the end with 5 questions, an internal link to the relevant service page, and a CTA: "Book a free assessment with our Kochi team."

Write one article per week. Publish consistently. Irregular publishing does not build authority.

---

## Part 7 — Step-by-Step Action Plan

### Week 1 — Fix what is broken

> Do not start any other SEO work until these are done.

1. Fix all canonical tags to point to `https://orbixvisas.com/[path]`
2. Fix all OG image URLs to `https://orbixvisas.com/og-image.jpg` and create the file
3. Fix H1 tags on `/migration/canada-pr`, `/migration/australia-pr`, and all study abroad country pages
4. Fix the circular internal links on the Canada PR page
5. Fix the Gmail "Email us" link in the navbar
6. Generate and upload `sitemap.xml` and `robots.txt`

### Week 2 — Set up the measurement infrastructure

7. Create a Google Search Console account and verify `orbixvisas.com`
8. Submit the sitemap in Search Console
9. Request indexing of the homepage, both migration pages, and the services page
10. Set up Google Analytics 4 to measure traffic (connect to Search Console)
11. Run the PageSpeed test and note the top 3 issues for the developer

### Week 3 — Build study abroad country pages

12. Build unique content for `/study-abroad/canada` — H1, introduction, why Canada, tuition/IELTS/PGWP, visa steps, how OrbiX helps, FAQ section
13. Build unique content for `/study-abroad/uk`
14. Build unique content for `/study-abroad/australia`
15. Build unique content for `/study-abroad/germany`
16. Build unique content for remaining countries (New Zealand, France, Poland)

### Week 4 — Structured data and local foundation

17. Add LocalBusiness JSON-LD schema to all pages
18. Add Organization JSON-LD to all pages
19. Add BreadcrumbList JSON-LD to all inner pages
20. Set up Google Business Profile (start the verification process — this takes 5–14 days)
21. Submit to JustDial and Sulekha with exact NAP

### Month 2 — FAQ, content, and local SEO

22. Add FAQ sections to: `/migration/canada-pr`, `/migration/australia-pr`, `/services/spouse-visa`, `/services/parent-visa`
23. Add FAQPage JSON-LD for each FAQ section
24. Write and publish the first 4 blog articles (targeting the highest-volume queries)
25. Complete Google Business Profile verification and optimise fully (photos, services, description)
26. Submit to Shiksha consultant directory

### Month 3 — E-E-A-T and authority building

27. Add a proper "Our Team" section to `/about` with Anup Kannan's credentials and experience (not stock photo — real content)
28. Add a testimonials or client outcomes section (even 3–4 written testimonials from real clients are valuable)
29. Publish 4 more blog articles
30. Begin requesting Google reviews from existing clients — create a short Google review link and share via WhatsApp

### Month 4 onwards — Scale

31. City-specific landing pages (Ernakulam, Thrissur, Calicut)
32. Continue blog content — minimum one article per week
33. Begin link building: reach out to Kerala education/career websites, local news sites, and ask for mentions
34. Monitor Search Console for which pages are gaining impressions and double down on those topics
35. Track keyword ranking movements for the 10 primary target queries

---

## Summary — Priority Matrix

| Priority | Issue | Impact | Effort |
|---|---|---|---|
| **P0 — Today** | Fix canonical tags | Blocks all indexing | 30 minutes |
| **P0 — Today** | Fix OG image URLs | Breaks social sharing | 30 minutes |
| **P0 — Today** | Fix H1 tags on inner pages | Blocks keyword ranking | 1 hour |
| **P1 — Week 1** | Fix duplicate study abroad country pages | Duplicate content penalty | 3–5 days of content writing |
| **P1 — Week 1** | Fix Gmail in nav | E-E-A-T and credibility | 10 minutes |
| **P1 — Week 1** | Generate sitemap + robots.txt | Crawling efficiency | 1 hour |
| **P2 — Week 2** | Google Search Console setup | Measurement baseline | 1 hour |
| **P2 — Week 2** | Google Business Profile | Local pack visibility | 2 hours + verification wait |
| **P3 — Week 3–4** | Structured data (all schemas) | Rich snippets in search | 3–4 hours |
| **P3 — Week 3–4** | FAQ sections on all service pages | People Also Ask + long tail | 4–6 hours of writing |
| **P4 — Month 2** | Blog content (first 8 articles) | Topical authority + traffic | Ongoing weekly investment |
| **P4 — Month 2** | Local directory submissions | Local citation signals | 2–3 hours |
| **P5 — Month 3** | Team and credentials content | E-E-A-T for YMYL | 2 hours |
| **P5 — Month 3** | Google review campaign | Local ranking + trust | Ongoing client communication |
| **P6 — Month 4+** | City-specific landing pages | Expanded local reach | 1–2 days per city |

---

## What realistic SEO results look like for a new site in this market

- **Month 1–2:** No meaningful organic traffic yet. Google is still discovering and evaluating the site. Search Console will show impressions with very few clicks. This is normal.
- **Month 3–4:** Branded queries ("OrbiX Overseas Careers") begin ranking reliably on page 1. Long-tail informational queries (from blog content) begin appearing. Google Business Profile begins appearing in local searches.
- **Month 5–6:** Specific service queries begin ranking — "Canada PR consultant Vyttila" or "immigration consultant Ernakulam" may appear on page 1–2.
- **Month 9–12:** With consistent blog content and Google reviews accumulating, the site should be ranking for primary commercial keywords in the Kochi/Ernakulam local market.
- **Month 18–24:** National-level competitive keywords (against CanApprove).

> SEO for an immigration consultancy in Kerala is a 12–18 month investment before significant organic leads materialise. **Paid ads (Google Ads, Meta Ads) should be the primary lead source for the first 6–12 months** while organic authority builds.

---

*Audit completed May 2026. Pages reviewed: homepage, /migration/canada-pr, /study-abroad/canada, /study-abroad/uk, /services, /about, /contact. Competitor reference: canapprove.com, axisoverseascareers.com.*
