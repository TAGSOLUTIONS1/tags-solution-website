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
