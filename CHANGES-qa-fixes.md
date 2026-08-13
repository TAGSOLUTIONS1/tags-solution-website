# QA Fixes — full-site audit (branch: qa-fixes)

Source: internal QA audit (38 findings, 11 Aug) — code review + reported
issues + live-site audit. Fixes land in themed batches, one commit each.
Findings needing a content-owner decision are listed at the end, not guessed.

## Batch 1 — copy, links & config (10 fixes)

1. UAE phone corrected: "+97-1508620567" → "+971 50 862 0567" (+ PK number
   spaced consistently) — data/site.js. [audit #1, High]
2. Phones are now tap-to-call links (tel:) in the footer — FooterBig.jsx.
   The contact page renders the same corrected values. [audit #1]
3. "Enterprise Softwares" → "Enterprise Software" (display title only; the
   /services/enterprise-softwares slug is kept so no URL breaks). [audit #3]
4. "Data and AI" → "Data & AI" — title now matches shortTitle and menus,
   one name everywhere. [audit #3]
5. US English standardized: organisation→organization, modernisation/
   modernising→modernization/modernizing, optimise→optimize,
   recognised→recognized — 12 occurrences in site.js, engagement.js,
   sled, about, careers, service-detail. [audit #4]
6. "industry:" / "by:" labels capitalized on home + industry pages. [audit #10]
7. Footer copyright year is dynamic ({new Date().getFullYear()}) —
   FooterBig, 404, offline pages. Never goes stale again. [audit #9]
8. Dead YouTube social link (href="#") removed until a real channel URL
   exists (one line to re-add). [audit #7]
9. Unused `nav` config deleted from site.js — it contradicted the real
   header and would mislead future editors. Header.jsx is the single
   source of truth. [audit #6]
10. Title-case slips: "Everything You Need To Succeed" → "to" (preposition,
    lowercase); blog "Why Cloud Computing is Essential…" → "Is" (verb,
    capitalized). One rule applied both directions. [audit #24, #33]

Deferred to later batches: contact form + privacy page; accordions, step
badges, counters, career tags; homepage cert strip / truncation / icons.
Needs content-owner decision (not fixed here): canonical stats set,
Services-vs-Solutions menu merge, demo case studies' fate, testimonial
brand spellings, blog re-dating, "Zero Technical Debt" stat.

## Batch 2 — stale references / rebuild integration (5 fixes)

1. Homepage carousel now shows FEATURED niche stories (the 3 TAGS products
   + the portfolio's opening story) with the new covers, linking to niche
   routes — no longer the API's old flat list. Heading renamed "Latest" →
   "Featured" (nothing is dated; "latest" was false labeling). [tracker I1]
2. Industry pages' related-work rails are mapped to real niche stories via
   the new hand-curated data/industryStoryMap.js (2–4 per industry), with
   covers + niche routes. Dead relatedCases()/CASE_KEYWORDS removed. [I3]
3. Sitemap: the four demo studies (ShopZone revamp, MediCare, PayStream,
   LogiTrack) are excluded pending the owner's decision; pages stay live. [I4]
4. Site search no longer injects remote case studies from the API — every
   real story is already in the static index at its canonical route. [I5]
5. Old-vs-new artwork split on homepage/industry rails: resolved
   automatically by 1–2. [I6]

Still blocked on owner: flagship deep-dives are orphans (relink or delete),
demo pages' final fate + HomeFind/EduSpark redirects.

### Batch 2 amendment
- Industry-rail chips now show the INDUSTRY being browsed (e.g. "Industry:
  Healthcare"), not the story's niche name — niches and industries are
  different groupings and mixing them on industry pages was confusing.
- IT rail trimmed to its two bulletproof picks (app builder, self-hosted
  agents); the codebase story's kicker says "Real Estate" and clashed on
  click-through from an IT context.
- Labeling made truthful site-wide: "Industry:" only where the value is a
  real industry (industry-page rails); story heroes + homepage featured
  cards say "Niche:" (their value IS a niche); niche-page cards show the
  kicker as a plain eyebrow with no label word (flagship-hero precedent).
  Flagship pages keep their original label via a default prop.

## Batch 3 — components (10 fixes)

1. Accordion +/- repositioned inside its own row (right-center) on
   /engagement and /faq. It used to sit ON the divider below each question,
   looking attached to the NEXT one, with an orphan + after the last. [High]
2. "Our Approach" step badges (/services): uniform circles, decorative bars
   removed, numerals no longer clipped.
3. Career vacancy tags (/careers): real pills. The badge style only existed
   in another scope, so tags rendered as unstyled run-on text.
4. Icon-frame accent dot: moved outside the frame with a page-colored ring,
   slightly smaller. Stops eating glyph corners site-wide.
5. Decorative 01-04 numerals (service detail): now aria-hidden spans with an
   identical look. Screen readers stop announcing "heading: zero one".
6. Service description un-heading-ed: rendered as a lead paragraph (it was a
   full sentence inside h2 markup).
7. CountUp: server-renders the FINAL value, so counters are never blank or
   zero without JavaScript; the animation replays 0-to-target on first view.
8. Blog articles: real h1 (pages had none), breadcrumb spacing fixed ("All
   Articles" vs category no longer run together), byline contrast raised,
   highlight-box accent corrected from template purple to brand orange.
   NOTE: the "duplicate title" seen live comes from post content itself
   (the API), not this template.
9. Cookie notice: closing now equals reject non-essential and the copy says
   so; buttons renamed "Accept all" / "Reject non-essential"; the
   contradictory "close to continue without accepting" line removed.
10. Emails clickable: mailto links in the footer and on /contact info cards
    (phone lines there are tel: links too).

### Batch 3 amendments (visual QA pass)
- Accordion divider moved from the question row to the END of each Q+A
  unit (border now on the panel) — the line no longer floats between a
  question and its own answer; paddings normalized incl. first row.
- Step badges: mil-lines variant background restored (its circle vanished
  once the decorative bars were removed); accent dot tucked inside the
  circle corner with a white ring.
- Services cards: excerpts now end at a sentence boundary (the
  description's own opening sentence) instead of clamping mid-thought
  with an ellipsis; the 3-line clamp stays as a guard.
- Check lists (engagement, industries, service offerings): the dark
  double-ring 12.svg check replaced site-wide with a brand check (orange
  tick, soft orange circle) via CSS — no markup changes.
- Services card excerpts corrected to FIRST sentence only: the previous
  two-sentence excerpt was visually re-truncated by the 3-line clamp at
  the exact old spot, making the fix invisible on screen.
- Service-detail offerings section redesigned: mil-divider separators
  (orange end-ticks) replaced with clean hairline rows; number badge +
  title share a grid with the description; features are check chips.

### Excerpt sweep (site-wide)
- NEW lib/text.js: one shared sentence-safe excerpt rule. Excerpts end on a
  complete sentence; if a single sentence is too long for its slot, the cut
  lands on the last natural pause (comma/dash) — never a dangling word.
- Wired into every truncating surface: homepage services list (x2 columns),
  homepage engagement cards, homepage testimonial quotes, homepage featured
  stories, /services listing cards, service-detail "Other Services" rail,
  and niche story cards. Verified in the build: every clamped excerpt on
  every page ends on punctuation or a complete clause.
- This pulls the homepage mid-word-truncation audit finding forward from
  the homepage batch (fixed here instead).

## Batch 4 — homepage & iconography (7 fixes)

1. Certification strip: dead href="#" wrappers removed from all logos (both
   the desktop row and the mobile marquee); the five logos now sit in one
   centered row (no more 5-in-3-columns hole); the Claude logo is labeled
   "Claude" (it said Anthropic); heading reworded to "Our Team Holds
   Certifications From" (owner may refine the wording). [audit #13]
2. Homepage services list: icons are now meaningful Lucide icons mapped per
   service (code/globe/phone/megaphone/database/boxes/cloud) — previously
   template icons cycled by index with no relation to the service. [#15]
3. Homepage engagement cards now deep-link to their model on /engagement
   (#outsourcing / #dedicated / #augmentation), with scroll offset for the
   fixed header. [#16]
4. Carousels hardened site-wide: watchOverflow + observer on every Swiper
   init (first-paint clipping / stale nav states). [#17]
5. Industries emoji replaced with Lucide across the industries grid, the
   industry-page heroes, and the homepage industries cards. [#19]
6. Careers benefits emoji replaced with matching Lucide icons in the same
   frames. [#19]
7. Header "Company" parent now links to /about instead of a dead "#" (the
   dropdown still opens on hover). Full Services-vs-Solutions menu merge
   remains an owner decision. [#5, partial]

### Batch 4 amendment — trust strip regression
- meta.svg had no intrinsic width/height (viewBox only); when the dead link
  wrappers (which had been sizing the logos via a 150px box rule) were
  removed, Meta collapsed to zero width. The SVG now carries explicit
  dimensions; images use a definite height; and the marquee/visibility CSS
  selectors were updated for the new span markup (also prevents the strip
  rendering twice on mobile).

### Batch 4 items 5-6 reversed (owner preference)
- Industries surfaces (grid, page heroes, homepage cards) and careers
  benefits keep their original emoji. Lucide remains where the design
  review ruled it: the niche surfaces and the homepage services list.
  Unused icon maps removed from NicheIcons.jsx.

### Batch 4 final shape — 5-6 reinstated + services-list polish
- Lucide icons re-applied to industries (grid, heroes, homepage cards) and
  careers benefits (reinstated after review).
- Homepage services list: icon tiles (soft orange, 50px) sit beside the
  text instead of stranded in a 30%-wide column; dividers are clean
  hairlines (orange end-ticks removed); "View All Services" moved out of
  the Scale & Optimize column into its own centered row under both
  columns — it belongs to neither category.
- Homepage industry cards: icons in the same soft orange tiles as the
  services list (they were naked strokes with a floating dot).
- "View All Services" moved to the section header, right of the "How We
  Can Help You" heading — category-neutral and never orphaned in the
  columns' uneven whitespace.
