import Link from "next/link";
import Header from "@/components/Header";
import NavTracker from "@/components/casestudy/NavTracker";
import Footer from "@/components/Footer";
import CtaBand from "@/components/CtaBand";
import CountUp from "@/components/CountUp";
import { NICHES, storiesByNiche, nicheStats } from "@/data/nicheStories";
import { stats } from "@/data/site";
import { NicheIcon, FeaturedIcon, ArrowRightIcon } from "@/components/NicheIcons";
import { getCaseStudies } from "@/lib/api";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Success Stories",
  description:
    "Real problems, measurable outcomes. See how we've helped companies ship faster, scale further, and grow.",
  path: "/success-stories",
});

// Niche-first success stories: the landing page shows the 7 niches we go
// deepest in; each niche opens its own list of case studies at
// /success-stories/niche/<niche>, and each study renders at
// /success-stories/niche/<niche>/<story>. All content lives in
// data/nicheStories.js.
// Third stat cell uses the site's own canonical figure so it can never
// drift from the numbers published elsewhere on the site.
const projectsStat = stats.find((s) => s.label === "Projects Delivered") || { value: "215+", label: "Projects Delivered" };

export default async function SuccessStoriesPage() {
  // The flagship deep-dives (5 code-served write-ups + whatever the API adds).
  // Same source as the homepage slider, so the two can't drift apart. They get
  // their own row at the top of the list below and open at /success-stories/featured.
  const featuredCount = (await getCaseStudies()).length;

  return (
    <div className="mil-wrapper">
      <Header transparent />
      <NavTracker />

      {/* hero (unchanged from the previous flat listing page) */}
      <div className="mil-banner-sm mil-dark-bg">
        <img src="/img/deco/map.png" alt="background" className="mil-background-image" />
        <div className="mil-deco mil-deco-accent" style={{ top: "47%", right: "10%", transform: "rotate(90deg)" }}></div>
        <div className="mil-banner-content">
          <div className="container mil-relative">
            <span className="mil-suptitle mil-accent mil-mb-30">Our Work</span>
            <h1 className="mil-uppercase mil-light mil-mb-30">Success Stories</h1>
            <p className="mil-light-soft" style={{ maxWidth: "620px" }}>
              Real problems, measurable outcomes. See how we&apos;ve helped companies ship faster, scale further, and grow.
            </p>
          </div>
        </div>
      </div>
      {/* hero end */}

      {/* stats band — per the content owner, the 3 products count INSIDE the
          38 case studies, so there is no separate products stat. The third
          cell is the portfolio's own claim, styled like the site's
          non-numeric stats (About's "Zero / Technical Debt"). */}
      <section className="mil-deep-bg mil-p-120-120">
        <div className="container">
          <div className="row justify-content-center mil-text-center">
            <div className="col-6 col-md-3 mil-mb-30">
              <h2 className="mil-accent mil-mb-15"><CountUp value={String(nicheStats.stories)} /></h2>
              <h6>Case Studies</h6>
            </div>
            <div className="col-6 col-md-3 mil-mb-30">
              <h2 className="mil-accent mil-mb-15"><CountUp value={String(nicheStats.niches)} /></h2>
              <h6>Niches</h6>
            </div>
            <div className="col-6 col-md-3 mil-mb-30">
              <h2 className="mil-accent mil-mb-15"><CountUp value={projectsStat.value} /></h2>
              <h6>{projectsStat.label}</h6>
            </div>
          </div>
        </div>
      </section>
      {/* stats band end */}

      {/* niche section */}
      <section className="mil-p-120-90" style={{ position: "relative" }}>
        <div className="mil-deco" style={{ top: 0, right: "20%" }}></div>
        <div className="container">
          <div className="row align-items-center mil-mb-60">
            <div className="col-lg-8">
              <span className="mil-suptitle mil-suptitle-2 mil-mb-30">Where We Go Deepest</span>
              <h2 className="mil-mb-0">Explore Our <span className="mil-accent">Niches</span></h2>
            </div>
          </div>

          {/* all seven niches — design review v2: editorial divider list
              (no boxes), big titles, arrow reveals on hover (.nl-* in tags.css) */}
          <div className="nl-list">
            {/* the flagship deep-dives ride in the same list as the niches —
                same row anatomy, first position, its own listing page */}
            <Link href="/success-stories/featured" className="nl-row">
              <span className="nl-icon"><FeaturedIcon /></span>
              <span className="nl-body">
                <h3 className="nl-title">Our Best Work</h3>
                <p className="nl-tag">The flagship builds, told end to end — architecture, trade-offs and what shipped.</p>
              </span>
              <span className="nl-count"><b>{featuredCount}</b>case {featuredCount === 1 ? "study" : "studies"}</span>
              <span className="nl-arrow"><ArrowRightIcon /></span>
            </Link>

            {NICHES.map((n) => {
              const count = storiesByNiche(n.slug).length;
              return (
                <Link key={n.slug} href={`/success-stories/niche/${n.slug}`} className="nl-row">
                  <span className="nl-icon"><NicheIcon slug={n.slug} /></span>
                  <span className="nl-body">
                    <h3 className="nl-title">{n.name}</h3>
                    <p className="nl-tag">{n.tagline}</p>
                  </span>
                  <span className="nl-count"><b>{count}</b>case {count === 1 ? "study" : "studies"}</span>
                  <span className="nl-arrow"><ArrowRightIcon /></span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
      {/* niche grid end */}

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
