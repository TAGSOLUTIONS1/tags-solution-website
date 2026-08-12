# Success Stories — Niche-First Rebuild (integration notes)

Verified against a clean `npm run build` on the repo (Next.js 14 App Router):
all routes below prerender as SSG, and every pre-existing route still builds.

## What's in this package (4 files, repo paths)

1. `data/nicheStories.js` — NEW
   All content: 7 niches + 38 case studies (36 from the approved
   "TAG-Solutions-Success-Stories-Final" document + the two site-only
   studies, HomeFind and EduSpark). Editing instructions are in the file
   header; adding a story is copy-paste-edit, everything else updates.

2. `app/success-stories/page.jsx` — REPLACES the flat listing page
   Same hero and CTA as before, then a stats band (38 / 7 / 3, using the
   existing CountUp) and the niche grid (homepage industries-tile pattern).

3. `app/success-stories/niche/[niche]/page.jsx` — NEW
   One niche → its case studies as bordered svc-cards with the
   `industry:` line and tags. TAG products (GeoStats, GoSalify,
   FindXStorage) get the featured treatment (orange border + pill).

4. `app/success-stories/niche/[niche]/[story]/page.jsx` — NEW
   Full case study composed from the existing case-study blocks
   (CaseHero, Section, CardGrid, StatBand, Callout): Overview →
   The Challenge → What We Built → Impact + key numbers, prev/next
   within the niche, CTA. Stories without a Challenge section skip it
   and renumber automatically.

## Route map

- `/success-stories` .......................... niche grid (new landing)
- `/success-stories/niche/<niche>` ............ 7 niche listings
- `/success-stories/niche/<niche>/<story>` .... 38 story pages
- `/success-stories/<slug>` ................... UNCHANGED (API/fallback stories)
- the 5 code-served flagship deep-dives ....... UNCHANGED

## Deliberate decisions (flag to whoever owns content)

- Four stories in our 38 also exist as flagship deep-dives; their pages
  show a "Read the deep-dive →" callout linking to the richer write-up
  (building-for-teams, dinner-club, scalp-hair, housing-market).
- "Reimagining the Paper Check…" (and MediCare Plus / PayStream /
  LogiTrack from the fallback set) are NOT in the 38 because they are
  not in the approved document. Their old URLs still work; they are
  just not listed in any niche. If they should appear, add them to
  `data/nicheStories.js` under a niche.
- Old flat-listing card grid is gone from `/success-stories` by design
  (the assignment was niche-first navigation). Restoring a "all
  stories" view is trivial if wanted — say the word.

## Run locally

npm install && npm run dev  →  http://localhost:3000/success-stories

## Round 2 — polish + integrations

- Story pages now include the scroll-spy journey tracker (same as flagship pages).
- SearchWidget indexes the 7 niches + 38 stories (with dedupe against API titles).
- sitemap.xml lists all niche and story routes.
- Fixes: niche hero auto-height (no text under header), Industry: capitalised,
  tag pills styled, centered 7th niche tile, key numbers sized to fit.

## Round 3 — self-audit fixes

- SearchWidget now imports data/nicheSearchIndex.js (9 KB, auto-generated)
  instead of the full 148 KB story file — the site-wide JS bundle no longer
  ships every story's text. Regenerate both files together.
- Journey-tracker rail: shows only ≥1500px viewports (slim top bar below
  that) and its backdrop is near-opaque — fixes the rail floating over text
  on laptops, for these pages AND the five flagship pages (tags.css).
- Sitemap: old flat URLs for HomeFind/EduSpark removed (niche URL is
  canonical); pages themselves stay live.
- CaseHero tags render as light pills (blocks.jsx) — cards and heroes match.
- Story meta descriptions trimmed to ~155 chars at a word boundary.
- Tracker skipped on the two short stories (fewer than 4 chapters).
- Dead mil-upper class removed from these pages (it is undefined site-wide).

### Round 3 amendment — tracker redesigned as a dot rail

- Desktop tracker is now dots-only (~50px wide) with the step number +
  label appearing as a tooltip on hover / keyboard focus.
- Because it no longer needs wide margins, the rail is back on laptops:
  top-bar swap moved from 1500px down to 1280px.
- Files: public/css/tags.css (rail styles) + CaseJourneyTracker.jsx
  (labels wrapped in a .cs-tip tooltip container). Applies to the 36
  full-length niche stories and all five flagship pages alike.

## Round 4 — Products page

- NEW /products page from "TAG-Solutions-Products.docx". The doc's three
  case-study bodies are word-for-word identical to the existing product
  stories (verified 76/76 fields), so the page showcases the portfolio-
  level copy (kickers, taglines, key numbers, intro/closing) and links
  each product to its live site AND its canonical case-study page — no
  duplicated case-study URLs.
- Wired: header nav ("Products" after Success Stories), footer Company
  column, sitemap (/products), site search ("Product" results linking to
  /products#slug anchors).
- Files: data/products.js, app/products/page.jsx, components/Header.jsx,
  components/FooterBig.jsx (+ sitemap.js, SearchWidget.jsx updated).

## Round 5 — content-owner corrections + layout

- Stats band: "3 TAG Products" removed (products count inside the 38 per
  the content owner); third cell is now "End-to-End / Engineered &
  Delivered In-House" (the portfolio's own claim, non-numeric stat style).
- Niche grid: largest niche (by story count) leads as a full-width
  featured card; remaining six form a clean 3×2 grid — no orphan tile.
- Deep-dive links to the old flagship pages removed (callouts + data
  fields). The flagship pages themselves are untouched.
- "TAG Product" → "TAGS Product" everywhere in these pages and data
  (kickers, tags, pills, client line) per the team's naming correction.
- Story body text measure aligned to the site standard (760px).

## Round 5b — full company name → TAGS Solutions

- "TAG Solutions" → "TAGS Solutions" swept across the deliverable AND the
  site chrome that renders the name: data/site.js (company.name → footer ©,
  FAQ, SLED copy), app/layout.jsx (title template "%s | TAGS Solutions",
  og siteName, alts), app/manifest.js, lib/seo.js, Header/FooterBig,
  products + success-stories files, and the data generator (so regeneration
  can never revert it). Testimonial quotes ("Tags") left verbatim — flagged
  in the QA audit for an editorial decision.

## Round 5c — naming scope corrected

- Site-wide company name restored to "TAG Solutions" (site.js, layout,
  manifest, seo, 404/offline — byte-identical to the original repo again;
  removed from this package).
- "TAGS" applies ONLY within the success-stories part: "TAGS Product"
  kickers/tags/pills and the product client line "— a TAGS product".

- Niche layout v3: all seven niches as equal horizontal rows (doc order);
  featured card removed.

## Round 6 — navigation polish

- Header + footer: Products now sits BEFORE Success Stories.
- Back links are smart (new components/casestudy/BackLink.jsx): if you
  navigated from within the site they go to the actual previous page
  (Products → case study → back returns to Products); direct/SEO arrivals
  fall back to the hierarchy. Case-study back now targets its NICHE page
  (labelled with the niche name) instead of the main listing; niche pages'
  "All Niches" gets the same behavior. Flagship pages inherit the smart
  back with their original label.
- Product stories' callout links to /products ("See all TAGS products").
- Products part: TAG → TAGS everywhere (kickers, intro copy).
- Link audit across all our files: every remaining target resolves to a
  real route; no other odd links found.

## Round 6b — reliable back + real third stat

- Back links now use an in-site navigation trail (NavTracker, sessionStorage,
  this tab only) because document.referrer does not update on client-side
  route changes — Products → case study → back now reliably returns to
  Products; niche → story → back returns to the niche. Falls back to the
  hierarchy for direct/SEO arrivals. NavTracker is mounted on the listing,
  niche, story, and products pages.
- Stats band third cell: now the site's own canonical "215+ Projects
  Delivered" (imported from data/site.js so it can never drift). A real
  cross-product users figure can be swapped in in one line if leadership
  supplies one — no invented numbers.
