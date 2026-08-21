import Link from "next/link";
import Header from "@/components/Header";
import NavTracker from "@/components/casestudy/NavTracker";
import Footer from "@/components/Footer";
import CtaBand from "@/components/CtaBand";
import JsonLd from "@/components/JsonLd";
import BackLink from "@/components/casestudy/BackLink";
import { FeaturedIcon } from "@/components/NicheIcons";
import { getCaseStudies } from "@/lib/api";
import { pageMeta, breadcrumbSchema } from "@/lib/seo";

const PATH = "/success-stories/featured";

export const metadata = pageMeta({
  title: "Our Best Work — Success Stories",
  description:
    "The flagship builds, told end to end — architecture, trade-offs and what shipped.",
  path: PATH,
});

// "Our Best Work": the long-form deep-dives, reached from the row of the same
// name on /success-stories. Deliberately a sibling of the niche listings and
// built to match them (same hero, same card grid) — the difference is where
// the stories come from: getCaseStudies() rather than data/nicheStories.js,
// so these open at /success-stories/<slug>, not under a niche.
export default async function FeaturedStoriesPage() {
  const stories = await getCaseStudies();

  const jsonLd = breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Success Stories", path: "/success-stories" },
    { name: "Our Best Work", path: PATH },
  ]);

  return (
    <div className="mil-wrapper">
      <JsonLd data={jsonLd} />
      <Header transparent />
      <NavTracker />

      {/* hero — height:auto for the same reason as the niche hero: the fixed
          550px banner can't hold the back link + icon + copy on small screens */}
      <div className="mil-banner-sm mil-dark-bg" style={{ height: "auto", minHeight: "550px" }}>
        <img src="/img/deco/map.png" alt="background" className="mil-background-image" />
        <div className="mil-deco mil-deco-accent" style={{ top: "47%", right: "10%", transform: "rotate(90deg)" }}></div>
        <div className="mil-banner-content">
          <div className="container mil-relative">
            <BackLink href="/success-stories" label="All Success Stories" />
            <span className="nx-icon nx-icon-dark mil-mb-30" style={{ display: "flex" }}>
              <FeaturedIcon />
            </span>
            <span className="mil-suptitle mil-accent mil-mb-30" style={{ display: "block" }}>
              Featured · {stories.length} Case {stories.length === 1 ? "Study" : "Studies"}
            </span>
            <h1 className="mil-uppercase mil-light mil-mb-30" style={{ maxWidth: "22ch" }}>Our Best Work</h1>
            <p className="mil-light-soft" style={{ maxWidth: "680px" }}>
              The flagship builds, told end to end — architecture, trade-offs and what shipped.
            </p>
          </div>
        </div>
      </div>
      {/* hero end */}

      {/* story cards — the .mil-card pattern the homepage slider uses, laid out
          as a grid so the whole set is visible at once */}
      <section className="mil-works mil-p-120-90">
        <div className="mil-deco" style={{ top: 0, right: "20%" }}></div>
        <div className="container">
          <div className="row">
            {stories.map((c) => (
              <div className="col-lg-6 mil-mb-60" key={c.slug}>
                <Link href={`/success-stories/${c.slug}`} className="mil-card">
                  <div className="mil-cover-frame">
                    <img src={c.image} alt={c.title} />
                  </div>
                  <div className="mil-description">
                    <div className="mil-card-title">
                      <h4 className="mil-mb-20">{c.title}</h4>
                      {c.industry && (
                        <h6>industry: <span className="mil-accent">{c.industry}</span></h6>
                      )}
                    </div>
                    <div className="mil-card-text">
                      <p className="mil-mb-20">{c.excerpt}</p>
                      {Array.isArray(c.tags) && c.tags.length > 0 && (
                        // the template only pill-styles `.mil-tags li a`; cards
                        // can't nest anchors, so the pill recipe goes inline —
                        // same as the niche listing cards
                        <ul className="mil-tags">
                          {c.tags.map((t) => (
                            <li key={t}>
                              <span style={{ display: "inline-flex", background: "rgba(18,24,32,.1)", fontSize: "12px", padding: "2px 12px", borderRadius: "20px", color: "#121820", marginBottom: "10px" }}>{t}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* story cards end */}

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
