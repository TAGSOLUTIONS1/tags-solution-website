import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import NavTracker from "@/components/casestudy/NavTracker";
import Footer from "@/components/Footer";
import CtaBand from "@/components/CtaBand";
import JsonLd from "@/components/JsonLd";
import BackLink from "@/components/casestudy/BackLink";
import { NICHES, nicheBySlug, storiesByNiche } from "@/data/nicheStories";
import { pageMeta, breadcrumbSchema } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return NICHES.map((n) => ({ niche: n.slug }));
}

export function generateMetadata({ params }) {
  const n = nicheBySlug(params.niche);
  if (!n) return pageMeta({ title: "Success Stories", path: "/success-stories" });
  return pageMeta({
    title: `${n.name} — Success Stories`,
    description: n.tagline,
    path: `/success-stories/niche/${n.slug}`,
  });
}

// One niche: its hero + every case study in it. Cards follow the bordered
// svc-card pattern (services grid); TAG products get the featured treatment
// (orange border + pill), like "Most Popular" on the engagement page.
export default function NichePage({ params }) {
  const niche = nicheBySlug(params.niche);
  if (!niche) notFound();
  const stories = storiesByNiche(niche.slug);
  const path = `/success-stories/niche/${niche.slug}`;

  const jsonLd = breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Success Stories", path: "/success-stories" },
    { name: niche.name, path },
  ]);

  return (
    <div className="mil-wrapper">
      <JsonLd data={jsonLd} />
      <Header transparent />
      <NavTracker />

      {/* hero — height:auto because .mil-banner-sm is fixed at 550px and this
          banner carries more content (back link + long niche names); without
          it the text overflows the banner and slides under the fixed header */}
      <div className="mil-banner-sm mil-dark-bg" style={{ height: "auto", minHeight: "550px" }}>
        <img src="/img/deco/map.png" alt="background" className="mil-background-image" />
        <div className="mil-deco mil-deco-accent" style={{ top: "47%", right: "10%", transform: "rotate(90deg)" }}></div>
        <div className="mil-banner-content">
          <div className="container mil-relative">
            <BackLink href="/success-stories" label="All Niches" />
            <div className="mil-icon-frame mil-icon-frame-md mil-mb-30" style={{ fontSize: "28px", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span aria-hidden="true">{niche.icon}</span>
            </div>
            <span className="mil-suptitle mil-accent mil-mb-30" style={{ display: "block" }}>
              Niche · {stories.length} Case {stories.length === 1 ? "Study" : "Studies"}
            </span>
            <h1 className="mil-uppercase mil-light mil-mb-30" style={{ maxWidth: "22ch" }}>{niche.name}</h1>
            <p className="mil-light-soft" style={{ maxWidth: "680px" }}>{niche.tagline}</p>
          </div>
        </div>
      </div>
      {/* hero end */}

      {/* story cards */}
      <section className="mil-works mil-p-120-90">
        <div className="mil-deco" style={{ top: 0, right: "20%" }}></div>
        <div className="container">
          <div className="row">
            {stories.map((s) => {
              const isProduct = (s.client || {}).type === "product";
              const excerpt = (s.overview && s.overview.paras && s.overview.paras[0]) || "";
              return (
                <div className="col-lg-6 mil-mb-30" key={s.slug} style={{ display: "flex" }}>
                  <Link
                    href={`/success-stories/niche/${niche.slug}/${s.slug}`}
                    className="mil-svc-card"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      width: "100%",
                      padding: "40px 34px",
                      background: "#fff",
                      borderRadius: "14px",
                      border: isProduct ? "2px solid #f57c00" : "1px solid rgba(18,24,32,.08)",
                      position: "relative",
                    }}
                  >
                    {isProduct && (
                      <span style={{ position: "absolute", top: "-13px", left: "50%", transform: "translateX(-50%)", background: "#f57c00", color: "#121820", fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: ".04em", padding: "6px 16px", borderRadius: "20px", whiteSpace: "nowrap", zIndex: 2 }}>
                        TAGS Product
                      </span>
                    )}
                    {/* story cover (decorative — the title right below carries the meaning) */}
                    <span style={{ display: "block", borderRadius: "10px", overflow: "hidden", aspectRatio: "3 / 2", marginBottom: "20px" }}>
                      <img src={`/niche-covers/${s.slug}.jpg`} alt="" loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                    </span>
                    <h6 className="mil-mb-15">Industry: <span className="mil-accent">{s.kicker}</span></h6>
                    <h4 className="mil-mb-15">{s.title}</h4>
                    <p
                      className="mil-mb-30"
                      style={{ flexGrow: 1, display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden", color: "rgb(18,24,32)" }}
                    >
                      {excerpt}
                    </p>
                    {Array.isArray(s.tags) && s.tags.length > 0 && (
                      <ul className="mil-tags mil-mb-30">
                        {s.tags.map((t) => (
                          <li key={t}>
                            {/* the template only pill-styles .mil-tags li a; cards can't nest
                                anchors, so the same pill recipe is applied inline */}
                            <span style={{ display: "inline-flex", background: "rgba(18,24,32,.1)", fontSize: "12px", padding: "2px 12px", borderRadius: "20px", color: "#121820", marginBottom: "10px" }}>{t}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    <span className="mil-link"><span>Read Story</span><i className="fas fa-arrow-right"></i></span>
                  </Link>
                </div>
              );
            })}
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
