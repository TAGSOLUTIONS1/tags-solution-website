import Link from "next/link";
import Header from "@/components/Header";
import NavTracker from "@/components/casestudy/NavTracker";
import Footer from "@/components/Footer";
import CtaBand from "@/components/CtaBand";
import CountUp from "@/components/CountUp";
import { NICHES, storiesByNiche, nicheStats } from "@/data/nicheStories";
import { stats } from "@/data/site";
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

export default function SuccessStoriesPage() {
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

      {/* niche grid — the niche with the most case studies leads as a
          full-width featured card; the remaining six form a clean 3×2 grid,
          so no tile is ever stranded alone. */}
      <section className="mil-p-120-90" style={{ position: "relative" }}>
        <div className="mil-deco" style={{ top: 0, right: "20%" }}></div>
        <div className="container">
          <div className="row align-items-center mil-mb-60">
            <div className="col-lg-8">
              <span className="mil-suptitle mil-suptitle-2 mil-mb-30">Where We Go Deepest</span>
              <h2 className="mil-mb-0">Explore Our <span className="mil-accent">Niches</span></h2>
            </div>
          </div>

          {/* all seven niches as equal horizontal rows (doc order) — a list
              can't strand an odd tile the way a grid does */}
          {NICHES.map((n) => {
            const count = storiesByNiche(n.slug).length;
            return (
              <Link
                key={n.slug}
                href={`/success-stories/niche/${n.slug}`}
                className="mil-svc-card mil-mb-30"
                style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "26px", width: "100%", padding: "30px 34px", background: "#fff", borderRadius: "14px", border: "1px solid rgba(18,24,32,.08)" }}
              >
                <div className="mil-icon-frame mil-icon-frame-md" style={{ fontSize: "28px", display: "flex", alignItems: "center", justifyContent: "center", flex: "0 0 auto" }}>
                  <span aria-hidden="true">{n.icon}</span>
                </div>
                <div style={{ flex: "1 1 340px", minWidth: 0 }}>
                  <h4 className="mil-mb-5">{n.name}</h4>
                  <h6 className="mil-accent mil-mb-5">{count} case {count === 1 ? "study" : "studies"}</h6>
                  <p className="mil-mb-0" style={{ color: "#121820" }}>{n.tagline}</p>
                </div>
                <span className="mil-link" style={{ flex: "0 0 auto" }}><span>Explore Niche</span><i className="fas fa-arrow-right"></i></span>
              </Link>
            );
          })}
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
