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
