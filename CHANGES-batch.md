## New batch

- Industry stat bands: long text values (Weeks->Minutes, SCORM/LTI, K-12
  EdTech Award, Cloud-Hybrid-On-Prem) compacted — short values, words
  moved to labels — so the big orange figures never wrap or misalign.
- Nine industry hero photos replaced with the generated editorial set
  (converted to optimized 1920px JPGs); the education image carried a
  white generation-artifact band on its right edge — detected and
  cropped programmatically. Government, Enterprise, and EdTech now point
  at their own images instead of borrowed ones.
- Industry renamed: Education -> EdTech (standard capitalization; the
  URL /industries/education is unchanged per the labels-vs-URLs rule —
  say the word if the boss wants the literal spelling "EduTech").
- EdTech hero re-cropped to the uniform 1920x1072 ratio (the white-band
  crop had left it taller than its siblings, breaking the third row of
  the industries grid); crop window biased to show students at tables.
- Industries grid cover frames fixed: the template frame class only
  styles images inside .mil-card, so the cards were rendering raw
  unstyled photos (left-edge slices). New self-contained .ind-cover
  frame: landscape at the photos exact ratio, grayscale-to-color hover
  matching the site language.
- Contact page redesigned: contact methods as tile rows with hairlines
  (house language), full-orange value links, a Follow Us social row, and
  a dark Book a Free Discovery Call card (Calendly deep link, new tab).
  Styled link rather than an embedded widget so the published privacy
  policy stays accurate (no new third-party scripts/cookies); an inline
  embed is available on request. Hero subtext tightened.
- Contact columns made co-terminal: left column is a flex stack with the
  booking card pinned to its bottom (margin-top auto) and the form panel
  stretched to full column height — the two bottoms now always align
  regardless of content changes.
- Logo enlarged site-wide: header 34px -> 42px (both light/dark
  variants), footer 150px -> 180px.
- Solutions reordered per owner: Software Development, Data & AI,
  Enterprise, then Web Development, Mobile Apps, Digital Marketing.
  Cloud Engineering REMOVED site-wide: service entry + page deleted
  (build 99 -> 98 pages), icon map cleaned, three industry solution
  cards repointed (IT DevOps -> software-development, Logistics
  integration -> enterprise-softwares, Enterprise cloud modernization ->
  software-development), listing hero + metadata prose updated ("AI,
  data, and growth marketing"). Homepage Build/Scale columns made
  semantic (explicit membership) so the reorder could not misfile items;
  numbering stays 01-06. Orphaned asset img/services/cloud-engineering
  .svg left in place (unused; delete on word).

### Reconciliation over the owner's rebase
- The owner force-pushed a rebased qa-fixes (his two main commits: the
  "Our Best Work" flagship row + /success-stories/featured page with
  CaseStudySections, and the serwist precache fix limiting the service
  worker to favicon/** — the CSS caching cure). This batch was re-applied
  ON TOP of that truth: NicheIcons woven by hand so his FeaturedIcon /
  Best Work wiring survives alongside the CloudCog removal; and an
  earlier unscoped logo-size replace had collaterally bumped the mobile
  subscribe input from 54px to 62px — restored to 54 (only the logo is
  62).

### Industry photo series v2 (owner direction: not literal workplace photography)
- All nine industry images replaced with a coherent editorial still-life
  series: each industry\x27s objects on a warm paper field, hard daylight,
  exactly one brand-orange accent, all surfaces blank. Five images
  mirrored so objects sit right and the clean field falls where hero
  headlines render. Bright fields are intentional: the hero overlay
  supplies the darkening, the image supplies structure. edtech.jpg maps
  to industry-education.jpg (URL slug unchanged per labels-vs-URLs).

### Industry illustrations v3 — futuristic white-and-orange series (FINAL)
- All nine industry images replaced with the owner-approved illustration
  language: white field, #FF7A00 wireframe centerpiece per industry
  (healthcare figure, agencies megaphone, consulting king, finance shield,
  IT server, logistics globe, government column, enterprise stack, edtech
  book), flowing waves and orbs, series-consistent. Generation artifacts
  (gibberish text, icon chips, glyph badges) surgically removed across
  five images (~70 hand-targeted patches over multiple verified passes).
  Supersedes the uncommitted still-life v2 set. edtech maps to
  industry-education.jpg per the URL slug.
- v3.1 consistency pass per owner feedback: white-point normalized all
  nine (background warmth variance killed), per-image saturation boosts
  (1.3-1.55x) on the line-art four (consulting, finance, IT, enterprise)
  so fine orange strokes read orange at card scale like the solid-shape
  five; shared CSS ground gradient (.ind-cover:after, faint warm floor)
  gives every card the same visual underboundary. Finance shield stays
  grey by design (the palette near-black accent).
- v3.2: IT recomposed (empty sky cropped out, tower now dominant in
  frame, saturation deepened) and finance gently densified (7% zoom) —
  the two emptiest cards now match the grid density.
- v3.3: identical warm bottom ramp baked into all nine images (replaces
  the CSS gradient whose visibility varied per image) — every card now
  shares the exact same ground fade; IT rebalanced from over-saturated
  back to family-average intensity.
- v3 FINAL: the baked bottom ramp REMOVED from all nine (it was added
  chasing consistency and made things worse — reverted). Full clean
  rebuild from source uploads in one pass: all artifact patches, color
  harmonization, IT recomposition, uniform whites, no bottom band. CSS
  ground gradient also gone.
- Middle-row fixes per owner: IT floor de-greyed (neutral greys lifted
  to near-white, deep floor cropped) so no card carries a dark ground;
  universal 1px hairline boundary under every card image (.ind-cover
  border-bottom) so illustrations no longer dissolve into the white card.

### Industry images v4 — niche-specific set (owner rule: name the niche on sight)
- All nine rebuilt around literal industry centerpieces: megaphone
  (agencies), easel growth chart (consulting), columned bank + arrow
  (finance), anatomical heart + ECG (healthcare), server racks + cloud
  (IT), semi-truck + packages (logistics), domed capitol (government),
  skyscraper skyline (enterprise), laptop + book + graduation cap
  (EdTech). Bank vs capitol disambiguated by pediment vs dome.
  Surgical text/badge cleanup on four images; harmonized whites and
  saturation; uniform 1920x1072.
- v4.1: ink-density equalization — every image measured (mean stroke
  mass) and scaled to the family median of 11.4; spread was 7.3-24.0,
  now 11.3-12.7. Whites invariant by construction. This is the darker/
  lighter inconsistency fixed at its actual variable.
- v4.2 FINAL COLOR LOCK: every colored pixel in all nine forced to the
  exact brand hue (#F57C00, hue 21.5) — the gold/brown/red drift between
  generations eliminated at the pixel level; vividness normalized (92nd
  pct saturation -> 200); grey floor washes lifted toward white (0.2-0.7M
  px per image); whites renormalized; ink re-equalized to 11.7-12.2.
  Hue spread was 18.8-26.9, now 20.3-21.8.
- v4.3: fixed the blackish regression — the ink equalizer had darkened
  pale images in RGB, clipping G/B channels and turning orange strokes
  maroon. New law: hue-safe (HSV value channel) and downward-only —
  heavy images lighten to the family, pale images never force-darkened
  (max k 1.12). Full rebuild; hue lock, grey-lift, whites retained.
