# Technical SEO Checklist for Next.js Developers

This checklist provides a senior-level technical framework for optimizing Next.js applications. As engineers, we must move beyond basic tags and understand how the App Router's architecture impacts search engine bot behavior and crawl efficiency.

---

## Phase 1: Architecture & Planning (Pre-Coding)

### 1. Component Rendering Strategy

The fundamental reason Next.js emphasizes Server Components is rooted in how search engines operate. Historically, the web was built with the server in mind; consequently, bots like Googlebot and Bingbot are optimized for HTML content that arrives immediately in the initial response.

While modern crawlers can execute JavaScript, they are not optimized for the "React lifetime" of client-side rendering (CSR). Forcing a bot to download, parse, and execute a JavaScript bundle just to see your content creates a massive hurdle for discovery and indexing.

**Best Practices for Server vs. Client Components:**

- **Server by Default:** Maintain all SEO-critical pages (landing pages, blogs, products) as Server Components to ensure crawlers receive fully rendered HTML landmarks, text, and metadata immediately.
- **Granular Interactivity:** Isolate `'use client'` to the smallest possible leaf components (e.g., a single `LikeButton` or `SearchInput`) rather than converting entire page layouts.
- **Hook Isolation:** Only use Client Components when React hooks (`useState`, `useEffect`) or browser-only APIs are strictly required.

> **Warning:** Excessive use of client-side rendering forces a JavaScript bundle download that delays the "first meaningful paint" for bots. This wastes your **crawl budget** — the limited time a bot spends on your site — and can lead to partial indexing where your most important keywords are never seen.

---

### 2. Semantic HTML Structure

Crawlers use semantic tags as "landmarks" to navigate the information hierarchy of your page. Using generic containers like `<div>` for everything forces the bot to guess the structure, whereas semantic elements provide explicit context.

**Semantic SEO Mapping:**

| Generic Element | Semantic SEO Alternative | Landmark Role |
|---|---|---|
| `<div>` | `<nav>` | Identifies primary navigation blocks |
| `<div>` | `<article>` | Signals independent, distributable content (e.g., a blog post) |
| `<div>` | `<header>` | Defines introductory content or a group of navigational aids |
| `<div>` | `<footer>` | Marks the end-of-page metadata, copyright, and secondary links |

> **Developer Task:** Audit your component tree for "div-soup." Replace generic containers with semantic landmarks to ensure search engines correctly categorize your content segments.

---

### 3. URL and Canonical Strategy

Duplicate content is an "SEO sin" that splits your ranking power across multiple URLs. You must establish "authoritative versioning" to tell search engines which URL is the master copy. This is especially vital for e-commerce sites where search parameters (e.g., `?color=black&size=large`) generate multiple URLs for the same product.

- **Absolute URLs:** Never use relative paths for SEO metadata. Always use the full base URL (e.g., `https://domain.com/page`).
- **Signal Combination:** Use canonical tags to combine ranking signals from various URL variations into a single, high-authority URL.

**Metadata Canonical Implementation:**

```js
export const metadata = {
  alternates: {
    canonical: 'https://recipes.com/products/pro-laptop',
  },
};
```

---

## Phase 2: Implementation & Verification (Post-Coding)

### 1. Metadata Configuration (Static & Dynamic)

Next.js provides a robust Metadata API that injects necessary tags into the `<head>` of your document.

#### Static Metadata Checklist

For fixed-content pages (About, Contact, etc.), export a static object:

- [ ] **Title:** Concise, keyword-rich, and includes your brand name.
- [ ] **Description:** A detailed summary (approx. 150–160 chars) to drive click-through rates.
- [ ] **Keywords:** A comma-separated list to assist crawlers in identifying page relevance.

#### Crawler Control at the Route Level

Specific to the Metadata object (and not the global `robots.ts`), you must define how bots interact with individual routes:

- `index: true` — allows the page to appear in search results.
- `follow: true` — allows bots to follow links on this page to discover more content.
- `nocache` — set to `true` for highly dynamic pages (like live stock tickers) to ensure bots serve the latest version. Note: disabling cache ensures freshness but can cause a slight delay in the bot discovering your page updates compared to cached versions.

#### Dynamic Metadata

For dynamic routes (e.g., `/products/[id]`), use `generateMetadata` to fetch data and create unique titles and descriptions based on the specific item being viewed.

```js
export async function generateMetadata({ params }) {
  const product = await fetchProduct(params.id);

  if (!product) {
    return {
      title: "Product Not Found",
      description: "The requested product could not be found."
    };
  }

  return {
    title: `${product.name} | ${product.brand}`,
    description: `${product.description} - Buy for ${product.price}`,
  };
}
```

---

### 2. Open Graph (OG) & Twitter Optimization

Control how your links appear when shared on social platforms to maximize click-through rates from organic shares.

**Open Graph Checklist:**

- [ ] `title` — Concise, platform-optimized title.
- [ ] `description` — A specific summary for social feeds.
- [ ] `siteName` — Your brand/website name.
- [ ] `images` — Array of objects (include `url`, `width`, `height`).
- [ ] `locale` — e.g., `en_US`.
- [ ] `type` — e.g., `website` or `article`.

**Twitter Checklist:**

- [ ] `card` — Typically `summary_large_image`.
- [ ] `title` — Platform-specific headline.
- [ ] `description` — Platform-specific summary.
- [ ] `creator` — Your Twitter handle.
- [ ] `images` — High-res preview images.

> **Tip:** Use [opengraph.xyz](https://opengraph.xyz) to preview these previews before shipping to production.

---

### 3. Crawling Control: robots.ts

The `robots.ts` file generates your global `robots.txt`. Use this to prevent bots from wasting resources on irrelevant or sensitive paths (admin panels, API routes, or privacy policies).

```ts
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin/', '/api/', '/terms-and-conditions'],
      },
      {
        userAgent: 'Googlebot', // Specific rules for Google
        allow: '/',
        disallow: '/private/',
      }
    ],
    sitemap: `${process.env.NEXT_PUBLIC_BASE_URL}/sitemap.xml`,
  };
}
```

---

### 4. Discovery: sitemap.ts

A sitemap is an XML file that serves as a roadmap for bots, ensuring they find every deep-linked page on your site.

Each route entry supports four fields:

- `url` — The absolute path to the page.
- `lastModified` — The ISO date of the last update; helps bots prioritize re-crawling.
- `changeFrequency` — (e.g., `daily`, `weekly`) Tells the bot how often the content is likely to change.
- `priority` — A value from `0.0` to `1.0` (landing pages are usually `1.0`) to rank importance within your own site.

---

### 5. JSON-LD Structured Data

JSON for Linked Data (JSON-LD) helps search engines and AI assistants understand the context of your data, enabling rich snippets (star ratings, prices) in search results. In Next.js, we use `dangerouslySetInnerHTML` to inject the JSON object into a script tag so web crawlers can easily parse it without executing complex UI logic.

```jsx
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": product.name,
  "description": product.description,
  "brand": product.brand,
};

return (
  <section>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
    {/* Content */}
  </section>
);
```

---

### 6. Testing & Performance Auditing

Deployment is not the final step. You must verify that your technical SEO is functioning in a production-like environment.

> **The "91% SEO Score" Pitfall:** A common mistake is hardcoding URLs in your `robots.ts` or `sitemap.ts`. During a Lighthouse audit, if your robots file points to a different domain (like a production URL while testing on localhost), your SEO score will drop (often to around 91%). Always use environment variables for your base URL to ensure valid paths across all environments.

**Post-Deployment Audit Checklist:**

- [ ] **Lighthouse Audit:** Run Chrome DevTools Lighthouse and aim for a 100 SEO score.
- [ ] **Robots.txt Validation:** Visit `/robots.txt` and ensure your `Disallow` rules are correctly formatted.
- [ ] **Sitemap Accessibility:** Ensure `/sitemap.xml` is public and the URLs inside are absolute.
- [ ] **Environment Variables:** Verify that `NEXT_PUBLIC_BASE_URL` matches your current environment (Local, Staging, or Production).
- [ ] **Landmark Check:** Use an inspector to ensure `<nav>`, `<article>`, `<header>`, and `<footer>` tags are present in the DOM.
