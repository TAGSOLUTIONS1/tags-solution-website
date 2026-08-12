import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import NavTracker from "@/components/casestudy/NavTracker";
import Footer from "@/components/Footer";
import CtaBand from "@/components/CtaBand";
import CountUp from "@/components/CountUp";
import JsonLd from "@/components/JsonLd";
import { CaseHero, Section, Body, CardGrid, StatBand, Callout } from "@/components/casestudy/blocks";
import CaseJourneyTracker from "@/components/casestudy/CaseJourneyTracker";
import { STORIES, nicheBySlug, findStory, storiesByNiche, clientLabel } from "@/data/nicheStories";
import { pageMeta, caseStudySchema, breadcrumbSchema } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return STORIES.map((s) => ({ niche: s.niche, story: s.slug }));
}

// Search engines truncate descriptions around 160 chars — trim at a word.
const metaDesc = (s = "") => (s.length <= 155 ? s : s.slice(0, 152).replace(/\s+\S*$/, "") + "…");

export function generateMetadata({ params }) {
  const s = findStory(params.niche, params.story);
  if (!s) return pageMeta({ title: "Success Story", path: "/success-stories", noindex: true });
  return pageMeta({
    title: s.title,
    description: metaDesc((s.overview && s.overview.paras && s.overview.paras[0]) || s.title),
    path: `/success-stories/niche/${s.niche}/${s.slug}`,
    type: "article",
  });
}

// Full case study in the document's structure — Overview → The Challenge →
// What We Built → Impact + Key Numbers — composed from the site's own
// case-study blocks (CaseHero, Section, CardGrid, StatBand, Callout).
// Stories without a `challenge` (the two site-sourced ones) skip that
// section, and the numbering renumbers itself.
export default function NicheStoryPage({ params }) {
  const niche = nicheBySlug(params.niche);
  const s = findStory(params.niche, params.story);
  if (!niche || !s) notFound();

  const path = `/success-stories/niche/${s.niche}/${s.slug}`;
  const excerpt = (s.overview && s.overview.paras && s.overview.paras[0]) || "";
  const isProduct = (s.client || {}).type === "product";

  const jsonLd = [
    caseStudySchema({ title: s.title, description: excerpt, path }),
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Success Stories", path: "/success-stories" },
      { name: niche.name, path: `/success-stories/niche/${niche.slug}` },
      { name: s.title, path },
    ]),
  ];

  // prev / next within this niche
  const list = storiesByNiche(niche.slug);
  const idx = list.findIndex((x) => x.slug === s.slug);
  const prev = idx > 0 ? list[idx - 1] : null;
  const next = idx < list.length - 1 ? list[idx + 1] : null;

  // sections renumber themselves around any that are missing
  let num = 0;

  // Scroll-spy tracker steps — only the sections this story actually has.
  const steps = [
    s.overview && { id: "story-overview", label: "Overview" },
    s.challenge && { id: "story-challenge", label: "Challenge" },
    s.built && { id: "story-built", label: "What We Built" },
    s.impact && { id: "story-impact", label: "Impact" },
  ].filter(Boolean);

  return (
    <div className="mil-wrapper">
      <JsonLd data={jsonLd} />
      <Header transparent />
      <NavTracker />
      {/* the rail earns its place only on full-length stories (4 chapters);
          the two short site-sourced stories skip it */}
      {steps.length >= 4 && <CaseJourneyTracker steps={steps} />}

      <CaseHero
        kicker={s.kicker}
        title={s.title}
        client={clientLabel(s.client)}
        industry={niche.name}
        tags={s.tags}
        backHref={`/success-stories/niche/${niche.slug}`}
        backLabel={niche.name}
      />

      {/* product callout */}
      {isProduct && (
        <div className="container mil-mt-60">
          <Callout icon="🚀">
            <strong>{s.client.name}</strong> is a TAGS product — designed, built and owned in-house.
            {" "}Visit{" "}
            <a href={`https://${s.client.url}`} target="_blank" rel="noopener noreferrer" className="mil-accent">
              {s.client.url}
            </a>{" "}·{" "}
            <Link href="/products" className="mil-accent">See all TAGS products</Link>.
          </Callout>
        </div>
      )}

      {/* Overview */}
      {s.overview && (
        <Section id="story-overview" num={++num} kicker="Overview" title={s.overview.head}>
          <Body paragraphs={s.overview.paras} max="760px" />
        </Section>
      )}

      {/* The Challenge */}
      {s.challenge && (
        <Section id="story-challenge" num={++num} kicker="The Challenge" title={s.challenge.head} deep>
          <Body paragraphs={s.challenge.paras} max="760px" />
        </Section>
      )}

      {/* What We Built */}
      {s.built && (
        <Section id="story-built" num={++num} kicker="What We Built" title={s.built.head}>
          <CardGrid
            wide
            items={s.built.features.map((f, i) => ({ n: i + 1, title: f.t, text: f.d }))}
          />
        </Section>
      )}

      {/* Impact + key numbers */}
      {s.impact && (
        <Section id="story-impact" num={++num} kicker="Impact" title={s.impact.head} deep>
          <StatBand
            stats={s.impact.cards.map((c) => ({ big: c.stat, label: c.label, sub: c.desc }))}
          />
          {Array.isArray(s.numbers) && s.numbers.length > 0 && (
            <>
              <div className="mil-divider mil-mt-60 mil-mb-60"></div>
              <div className="row justify-content-center mil-text-center">
                {s.numbers.map((x, i) => (
                  <div className="col-6 col-md-3 mil-mb-30" key={i}>
                    {/* h3, not h2: values like "Homomorphic" overflow a quarter-width
                        column at h2 size. CountUp drops thousands separators, so
                        comma values render statically. */}
                    <h3 className="mil-accent mil-mb-15">
                      {x.v.includes(",") ? x.v : <CountUp value={x.v} />}
                    </h3>
                    <h6>{x.l}</h6>
                  </div>
                ))}
              </div>
            </>
          )}
        </Section>
      )}

      {/* previous / next story in this niche */}
      {(prev || next) && (
        <section className="mil-p-90-90">
          <div className="container">
            <div className="row">
              <div className="col-md-6 mil-mb-30" style={{ display: "flex" }}>
                {prev && (
                  <Link
                    href={`/success-stories/niche/${niche.slug}/${prev.slug}`}
                    className="mil-svc-card"
                    style={{ display: "block", width: "100%", padding: "26px 28px", background: "#fff", borderRadius: "14px", border: "1px solid rgba(18,24,32,.08)" }}
                  >
                    <h6 className="mil-mb-15" style={{ color: "rgba(18,24,32,.45)" }}>
                      <i className="fas fa-arrow-left mil-accent" style={{ marginRight: "8px" }}></i>Previous
                    </h6>
                    <h5>{prev.title}</h5>
                  </Link>
                )}
              </div>
              <div className="col-md-6 mil-mb-30" style={{ display: "flex" }}>
                {next && (
                  <Link
                    href={`/success-stories/niche/${niche.slug}/${next.slug}`}
                    className="mil-svc-card"
                    style={{ display: "block", width: "100%", padding: "26px 28px", background: "#fff", borderRadius: "14px", border: "1px solid rgba(18,24,32,.08)", textAlign: "right" }}
                  >
                    <h6 className="mil-mb-15" style={{ color: "rgba(18,24,32,.45)" }}>
                      Next<i className="fas fa-arrow-right mil-accent" style={{ marginLeft: "8px" }}></i>
                    </h6>
                    <h5>{next.title}</h5>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      <CtaBand
        title="Ready to Be Our Next"
        highlight="Success Story?"
        description="Let's turn your challenge into your next success story."
        primary={{ label: "Start Your Project", href: "/contact" }}
      />

      <Footer />
    </div>
  );
}
