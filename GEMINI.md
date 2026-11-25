# Weberzio Website (`cms-weberzio`)

Static-exported Next.js marketing and portfolio website for **Weberzio** (`https://www.weberzio.in`), an AI-native software development company in Kerala.

## Tech Stack & Configuration

- **Framework**: Next.js `16.3.1` (App Router) with React `19.2.8` and React Compiler (`reactCompiler: true`).
- **Build Output**: Static export (`output: 'export'` in `next.config.mjs`) generating `out/`.
- **Styling**: Tailwind CSS v4 (`@tailwindcss/postcss`), `Manrope` via `next/font/google` (`src/app/fonts.js`), and optional licensed `Nexa` `@font-face` rules in `src/app/globals.css`.
- **Animations**: GSAP (`gsap`) and Lenis (`lenis`) + `webgl-fluid-enhanced`.
- **Important Next.js Rule**: Always check `node_modules/next/dist/docs/` before making Next.js API/config changes (see `AGENTS.md`).

## Directory Structure

- `src/app/` — App Router pages and metadata routes:
  - `layout.js` — Root layout, global metadata, `Organization` & `WebSite` JSON-LD, `Header`, `Footer`, `CookieBanner`.
  - `page.js` — Home page + `FAQPage` JSON-LD.
  - `about/page.js`, `services/page.js`, `services/[slug]/page.js`, `work/page.js`, `work/[slug]/page.js`, `blog/page.js`, `blog/[slug]/page.js`, `contact/page.js`, `terms/page.js`, `not-found.js`.
  - `robots.js` — Generates `robots.txt` (`export const dynamic = "force-static"`).
  - `sitemap.js` — Generates `sitemap.xml` (`export const dynamic = "force-static"`).
  - `manifest.js` — Generates `manifest.webmanifest` (`export const dynamic = "force-static"`).
- `src/components/landing/` — Page sections and UI components.
- `src/components/layout/` — `Frame.jsx` and `SmoothScroll.jsx`.
- `src/components/seo/JsonLd.jsx` — Safe JSON-LD renderer, `ORG_ID`, and `breadcrumbs()` helper.
- `src/lib/seo.js` — `buildPageMetadata()` helper for consistent canonicals, OpenGraph, and Twitter cards.
- `src/data/` — Single source of truth for site copy (`site.js`, `services.js`, `casestudies.js`, `posts.js`, `projects.js`, `faq.js`, `about.js`, `testimonials.js`).

## SEO & Google Search Console Guidelines

This repository deploys to live production (`https://www.weberzio.in`):

1. **Never block indexing in production**:
   - `src/app/layout.js` must keep `robots: { index: true, follow: true, googleBot: { index: true, follow: true, ... } }`.
   - `src/app/robots.js` must allow crawling (`allow: "/"`), never `disallow: "/"`.
   - `src/app/not-found.js` explicitly sets `robots: { index: false, follow: false }`.
2. **Search Console Verification**:
   - Set `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` in your production environment if using HTML meta tag verification.
3. **Metadata & Canonicals**:
   - Every indexable page should use `buildPageMetadata()` from `src/lib/seo.js` so `alternates.canonical`, `openGraph` (including `/og.png`), and `twitter` metadata stay complete.
   - Do not enable `trailingSlash: true` without updating canonicals and `sitemap.js` to match.
4. **Structured Data (JSON-LD)**:
   - Global `Organization` + `WebSite` in `src/app/layout.js`.
   - Page-specific `FAQPage`, `Service`, `CreativeWork`, `BlogPosting`, and `BreadcrumbList` schemas via `src/components/seo/JsonLd.jsx`.

## Commands

```bash
npm run dev     # Start local development server
npm run lint    # Run ESLint
npm run build   # Build static export into out/
```

Before deploying to production, verify `out/robots.txt`, `out/sitemap.xml`, and `out/index.html` contain `Allow: /`, valid `<urlset>` entries, and `index, follow` meta directives.
