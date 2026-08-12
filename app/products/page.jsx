import Link from "next/link";
import Header from "@/components/Header";
import NavTracker from "@/components/casestudy/NavTracker";
import Footer from "@/components/Footer";
import CountUp from "@/components/CountUp";
import JsonLd from "@/components/JsonLd";
import { products, productsIntro, productsClosing } from "@/data/products";
import { pageMeta, breadcrumbSchema } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Our Products",
  description: productsIntro.lead,
  path: "/products",
});

// Product portfolio page. Each product's full Overview → Challenge →
// What We Built → Impact case study already lives at its canonical
// success-story URL, so this page showcases the portfolio (the products
// doc's unique copy) and links out — no duplicated case-study content.
export default function ProductsPage() {
  const jsonLd = breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
  ]);

  return (
    <div className="mil-wrapper">
      <JsonLd data={jsonLd} />
      <Header transparent />
      <NavTracker />

      {/* hero */}
      <div className="mil-banner-sm mil-dark-bg" style={{ height: "auto", minHeight: "550px" }}>
        <img src="/img/deco/map.png" alt="background" className="mil-background-image" />
        <div className="mil-deco mil-deco-accent" style={{ top: "47%", right: "10%", transform: "rotate(90deg)" }}></div>
        <div className="mil-banner-content">
          <div className="container mil-relative">
            <span className="mil-suptitle mil-accent mil-mb-30" style={{ display: "block" }}>{productsIntro.suptitle}</span>
            <h1 className="mil-uppercase mil-light mil-mb-30">{productsIntro.title}</h1>
            <p className="mil-light-soft mil-mb-30" style={{ maxWidth: "680px" }}>{productsIntro.lead}</p>
            <span style={{ display: "inline-flex", background: "rgba(245,124,0,.14)", border: "1px solid rgba(245,124,0,.45)", color: "#f57c00", fontSize: "12px", fontWeight: 700, textTransform: "uppercase", letterSpacing: ".05em", padding: "6px 16px", borderRadius: "20px" }}>
              {productsIntro.badge}
            </span>
          </div>
        </div>
      </div>
      {/* hero end */}

      {/* products */}
      {products.map((p, i) => (
        <section key={p.slug} id={p.slug} className={`${i % 2 === 1 ? "mil-deep-bg " : ""}mil-p-120-90`} style={{ position: "relative" }}>
          {i % 2 === 0 && <div className="mil-deco" style={{ top: 0, right: "16%" }}></div>}
          <div className="container">
            <span className="mil-suptitle mil-suptitle-2 mil-mb-30" style={{ display: "block" }}>
              {String(i + 1).padStart(2, "0")} · {p.kicker}
            </span>
            <div className="row align-items-center mil-mb-30">
              <div className="col-lg-8">
                <h2 className="mil-mb-15">{p.name}</h2>
                <p className="mil-text-lg mil-mb-15" style={{ color: "rgb(18,24,32)" }}>{p.tagline}</p>
                <a href={`https://${p.url}`} target="_blank" rel="noopener noreferrer" className="mil-link">
                  <span className="mil-accent">{p.url}</span><i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>

            <h4 className="mil-mb-15" style={{ maxWidth: "640px" }}>{p.head}</h4>
            <p className="mil-mb-30" style={{ maxWidth: "760px", color: "rgb(18,24,32)" }}>{p.lead}</p>

            {/* feature titles as pills */}
            <ul className="mil-tags mil-mb-60">
              {p.features.map((f) => (
                <li key={f}>
                  <span style={{ display: "inline-flex", background: i % 2 === 1 ? "#fff" : "rgba(18,24,32,.06)", border: "1px solid rgba(18,24,32,.1)", fontSize: "12px", padding: "3px 13px", borderRadius: "20px", color: "#121820", marginBottom: "10px" }}>{f}</span>
                </li>
              ))}
            </ul>

            {/* key numbers */}
            <div className="row mil-mb-30">
              {p.numbers.map((x, j) => (
                <div className="col-6 col-md-3 mil-mb-30" key={j}>
                  <h3 className="mil-accent mil-mb-5">
                    {x.v.includes(",") ? x.v : <CountUp value={x.v} />}
                  </h3>
                  <h6>{x.l}</h6>
                </div>
              ))}
            </div>

            <div className="mil-buttons-frame mil-cta-buttons" style={{ display: "flex", flexWrap: "wrap", gap: "15px" }}>
              <a className="mil-button mil-accent-bg" href={`https://${p.url}`} target="_blank" rel="noopener noreferrer">
                <span>Visit {p.name}</span>
              </a>
              <Link className="mil-button mil-border" href={p.storyHref}>
                <span>Read the Full Case Study</span>
              </Link>
            </div>
          </div>
        </section>
      ))}
      {/* products end */}

      {/* closing band — the products doc's own closing copy */}
      <section className="mil-gradient-bg mil-p-120-120" style={{ position: "relative", overflow: "hidden" }}>
        <div className="mil-deco mil-deco-accent" style={{ top: "50px", right: "6%", opacity: 1 }}></div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-xl-9 mil-text-center">
              <h2 className="mil-light mil-mb-30" style={{ textWrap: "balance", margin: "0 auto 30px", maxWidth: "26ch" }}>
                {productsClosing.title} <span className="mil-accent">{productsClosing.highlight}</span>
              </h2>
              <p className="mil-light-soft mil-mb-60" style={{ maxWidth: "620px", margin: "0 auto 60px" }}>
                {productsClosing.description}
              </p>
              <div className="mil-buttons-frame mil-center mil-cta-buttons" style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "15px" }}>
                <Link className="mil-button mil-accent-bg" href="/contact"><span>Start Your Project</span></Link>
                <Link className="mil-button mil-border mil-light-border" href="/success-stories"><span className="mil-light">Explore Success Stories</span></Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
