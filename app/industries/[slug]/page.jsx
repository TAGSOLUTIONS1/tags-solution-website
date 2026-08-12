import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CtaBand from "@/components/CtaBand";
import CountUp from "@/components/CountUp";
import JsonLd from "@/components/JsonLd";
import { industries, getIndustry } from "@/data/industries";
import { CALENDLY_URL } from "@/data/site";
import { STORIES } from "@/data/nicheStories";
import { industryStoryMap } from "@/data/industryStoryMap";
import { pageMeta, breadcrumbSchema } from "@/lib/seo";

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export function generateMetadata({ params }) {
  const i = getIndustry(params.slug);
  if (!i) return pageMeta({ title: "Industry", path: `/industries/${params.slug}`, noindex: true });
  return pageMeta({
    title: i.title,
    description: i.excerpt || i.heroSubtext,
    path: `/industries/${i.slug}`,
    image: i.image,
  });
}

// Loose keyword match so each industry surfaces the most relevant case studies,
// falling back to the latest three when nothing matches.
export default async function IndustryDetailPage({ params }) {
  const industry = getIndustry(params.slug);
  if (!industry) notFound();

  // Related work comes from the niche stories via a hand-curated map
  // (data/industryStoryMap.js) — not the API's old flat list.
  // Chip shows THIS industry's name — the visitor is browsing by industry,
  // so labeling cards with niche names here would be confusing (niches and
  // industries are two different groupings of the same stories).
  const related = (industryStoryMap[industry.slug] || [])
    .map((sl) => STORIES.find((st) => st.slug === sl))
    .filter(Boolean)
    .map((st) => ({ slug: st.slug, href: `/success-stories/niche/${st.niche}/${st.slug}`, image: `/niche-covers/${st.slug}.jpg`, title: st.title, industry: industry.title }));

  const jsonLd = breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Industries", path: "/industries" },
    { name: industry.title, path: `/industries/${industry.slug}` },
  ]);

  return (
    <div className="mil-wrapper">
      <JsonLd data={jsonLd} />
      <Header transparent />

      {/* hero */}
      <div className="mil-banner mil-top-space-0">
        <img src={industry.image} className="mil-background-image" style={{ objectPosition: "center" }} alt={industry.title} />
        <div className="mil-overlay"></div>
        <div className="mil-banner-content">
          <div className="container">
            <ul className="mil-breadcrumbs mil-breadcrumbs-light mil-mb-30">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/industries">Industries</Link></li>
              <li><Link href={`/industries/${industry.slug}`}>{industry.title}</Link></li>
            </ul>
            <div className="row">
              <div className="col-lg-10 col-xl-9">
                <span className="mil-suptitle mil-mb-30"><span className="mil-light"><span aria-hidden="true" style={{ marginRight: "8px" }}>{industry.icon}</span>{industry.title}</span></span>
                <h1 className="mil-light mil-mb-30">{industry.heroHeadline}</h1>
                <p className="mil-light-soft" style={{ maxWidth: "640px", fontSize: "17px", lineHeight: 1.7 }}>{industry.heroSubtext}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* hero end */}

      {/* intro */}
      <section className="mil-p-120-60">
        <div className="container">
          <div className="row justify-content-center mil-text-center">
            <div className="col-lg-9">
              <h2 className="mil-mb-0">{industry.intro}</h2>
            </div>
          </div>
        </div>
      </section>
      {/* intro end */}

      {/* tailored solutions */}
      <section className="mil-deep-bg mil-p-120-90">
        <div className="mil-deco" style={{ top: 0, right: "20%" }}></div>
        <div className="container">
          <span className="mil-suptitle mil-suptitle-2 mil-mb-30">What We Build for {industry.title}</span>
          <h2 className="mil-mb-60">Tailored <span className="mil-accent">Solutions</span></h2>
          <div className="row">
            {industry.solutions.map((s, i) => (
              <div className="col-md-6 col-lg-4 mil-mb-30" key={i}>
                <Link
                  href={s.href}
                  style={{ display: "flex", flexDirection: "column", height: "100%", padding: "40px", background: "#fff", border: "1px solid rgba(18,24,32,.08)", borderRadius: "10px" }}
                >
                  <div className="mil-icon-frame mil-icon-frame-md mil-mb-30">
                    <img src={`/img/icons/md/${(i % 6) + 1}.svg`} alt="icon" />
                  </div>
                  <h5 className="mil-mb-15">{s.title}</h5>
                  <p className="mil-mb-30" style={{ flexGrow: 1 }}>{s.description}</p>
                  <span className="mil-link"><span>Explore</span><i className="fas fa-arrow-right"></i></span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* tailored solutions end */}

      {/* challenges */}
      <section className="mil-p-120-90">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-5">
              <span className="mil-suptitle mil-suptitle-2 mil-mb-30">The Reality</span>
              <h2 className="mil-mb-30">Challenges We <span className="mil-accent">Solve</span></h2>
              <p>Every engagement starts by understanding the friction unique to {industry.title.toLowerCase()} — then engineering it away.</p>
            </div>
            <div className="col-lg-6">
              <div className="mil-divider mil-divider-left mil-mb-30"></div>
              <ul className="mil-check-icon-list">
                {industry.challenges.map((c, i) => (
                  <li key={i} className="mil-mb-15">
                    <img src="/img/icons/sm/12.svg" alt="icon" />
                    <span className="mil-dark">{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* challenges end */}

      {/* stats band */}
      <section className="mil-deep-bg mil-p-120-120">
        <div className="mil-deco" style={{ top: 0, right: "20%" }}></div>
        <div className="container">
          <div className="row justify-content-center mil-text-center">
            {industry.stats.map((stat) => (
              <div className="col-6 col-md-3 mil-mb-30" key={stat.metric}>
                <h2 className="mil-accent mil-mb-15"><CountUp value={stat.value} /></h2>
                <h6 className="mil-upper">{stat.metric}</h6>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* stats band end */}

      {/* related work */}
      {related.length > 0 && (
        <section className="mil-works mil-p-120-90">
          <div className="container">
            <div className="row align-items-center mil-mb-60-adapt">
              <div className="col-md-8">
                <span className="mil-suptitle mil-suptitle-2 mil-mb-30">Proof in Practice</span>
                <h2 className="mil-mb-30">Selected Work</h2>
              </div>
              <div className="col-md-4">
                <div className="mil-adaptive-right">
                  <Link href="/success-stories" className="mil-link mil-mb-30"><span>All Success Stories</span><i className="fas fa-arrow-right"></i></Link>
                </div>
              </div>
            </div>
            <div className="row">
              {related.map((c) => (
                <div className="col-lg-4 mil-mb-30" key={c.slug}>
                  <Link href={c.href} className="mil-card">
                    <div className="mil-cover-frame">
                      <img src={c.image} alt={c.title} />
                    </div>
                    <div className="mil-description">
                      <div className="mil-card-title">
                        <h5 className="mil-mb-20">{c.title}</h5>
                        <h6>Industry: <span className="mil-accent">{c.industry}</span></h6>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
      {/* related work end */}

      <CtaBand
        title={`Build Your ${industry.title}`}
        highlight="Advantage"
        description={`Tell us about your ${industry.title.toLowerCase()} challenge and we'll show you exactly how we'd solve it.`}
        primary={{ label: "Book a Discovery Call", href: CALENDLY_URL }}
        secondary={{ label: "Explore Services", href: "/services" }}
      />

      <Footer />
    </div>
  );
}
