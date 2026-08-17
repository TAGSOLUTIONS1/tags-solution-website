import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CtaBand from "@/components/CtaBand";
import JsonLd from "@/components/JsonLd";
import { services, getService } from "@/data/services";
import { CALENDLY_URL } from "@/data/site";
import { pageMeta, serviceSchema, breadcrumbSchema } from "@/lib/seo";
import { firstSentence } from "@/lib/text";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }) {
  const s = getService(params.slug);
  if (!s) return pageMeta({ title: "Service", path: `/services/${params.slug}`, noindex: true });
  return pageMeta({
    title: s.title,
    description: s.heroDescription || s.description,
    path: `/services/${s.slug}`,
    image: s.image,
  });
}

const process = [
  { step: "01", title: "Discovery", text: "We map your goals, users, and constraints to define what success looks like." },
  { step: "02", title: "Design", text: "We architect the system and craft the experience, validated early with prototypes." },
  { step: "03", title: "Build", text: "We ship in tight, tested iterations so you see working software often." },
  { step: "04", title: "Scale", text: "We optimize, monitor, and evolve — adding capacity and intelligence as you grow." },
];

// Services with a clearly matching niche deep-link there; the rest go to the
// full success-stories landing (their work spans many niches).
const WORK_NICHE = {
  "digital-marketing": "sales-marketing-growth",
  "data-and-ai": "enterprise-data-knowledge-secure-ai",
  "enterprise-softwares": "domain-native-industry-solutions",
  "mobile-app-development": "adaptive-learning-consumer-platforms",
  "web-development": "real-estate-proptech-marketplaces",
};

export default function ServiceDetailPage({ params }) {
  const service = getService(params.slug);
  if (!service) {
    notFound();
  }

  const otherServices = services.filter((s) => s.slug !== params.slug).slice(0, 3);

  const path = `/services/${service.slug}`;
  const jsonLd = [
    serviceSchema(service, path),
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Solutions", path: "/services" },
      { name: service.shortTitle || service.title, path },
    ]),
  ];

  return (
    <div className="mil-wrapper">
      <JsonLd data={jsonLd} />
      <Header transparent />

      {/* hero */}
      <div className="mil-banner mil-top-space-0">
        <img src={service.image} className="mil-background-image" style={{ objectPosition: "center" }} alt={service.title} />
        <div className="mil-overlay"></div>
        <div className="mil-banner-content">
          <div className="container">
            <ul className="mil-breadcrumbs mil-breadcrumbs-light mil-mb-30">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/services">Solutions</Link></li>
              <li><Link href={`/services/${service.slug}`}>{service.shortTitle}</Link></li>
            </ul>
            <div className="row">
              <div className="col-lg-10 col-xl-9">
                <span className="mil-suptitle mil-mb-30"><span className="mil-light">Our Solutions</span></span>
                <h1 className="mil-light mil-mb-30">{service.title}</h1>
                <p className="mil-light-soft mil-mb-30" style={{ maxWidth: "640px", fontSize: "17px", lineHeight: 1.7 }}>{service.heroDescription}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "40px" }}>
                  {service.tags.map((tag) => (
                    <span key={tag} style={{ padding: "6px 16px", border: "1px solid rgba(255,255,255,.3)", borderRadius: "30px", fontSize: "13px", color: "#fff" }}>{tag}</span>
                  ))}
                </div>
                <div className="mil-buttons-frame" style={{ display: "flex", flexWrap: "wrap", gap: "15px" }}>
                  <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="mil-button mil-accent-bg"><span>Book a Discovery Call</span></a>
                  <Link href={WORK_NICHE[service.slug] ? `/success-stories/niche/${WORK_NICHE[service.slug]}` : "/success-stories"} className="mil-button mil-border mil-light"><span>See Our Work</span></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* hero end */}

      {/* overview */}
      <section className="mil-p-120-60">
        <div className="container">
          <div className="row justify-content-center mil-text-center">
            <div className="col-lg-9">
              <span className="mil-suptitle mil-suptitle-2 mil-mb-30">Overview</span>
              <p className="mil-text-lg mil-mb-0" style={{ color: "#121820" }}>{service.description}</p>
            </div>
          </div>
        </div>
      </section>
      {/* overview end */}

      {/* what we offer */}
      <section className="mil-deep-bg mil-p-120-90">
        <div className="mil-deco" style={{ top: 0, right: "20%" }}></div>
        <div className="container">
          <span className="mil-suptitle mil-suptitle-2 mil-mb-30">What We Offer</span>
          <h2 className="mil-mb-60">Everything You Need to <span className="mil-accent">Succeed</span></h2>
          {/* offerings as editorial rows: hairline dividers (no orange end
              ticks), number + title on a shared grid with the description,
              features as check chips (.svc-* in tags.css) */}
          <div className="svc-offer-list">
            {service.subServices.map((sub, i) => (
              <div key={i} className="svc-offer">
                <div className="svc-offer-head">
                  <span className="svc-num" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="svc-offer-title">{sub.title}</h3>
                </div>
                <div className="svc-offer-body">
                  <p className="svc-offer-desc">{sub.description}</p>
                  <ul className="svc-chips">
                    {sub.features.map((f, j) => (
                      <li key={j} className="svc-chip">{f}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* what we offer end */}

      {/* tools & technologies */}
      <section className="mil-p-120-90">
        <div className="mil-deco" style={{ top: 0, left: "20%" }}></div>
        <div className="container">
          <span className="mil-suptitle mil-suptitle-2 mil-mb-30">Our Stack</span>
          <h2 className="mil-mb-60">Tools &amp; <span className="mil-accent">Technologies</span></h2>
          <div className="row">
            {service.tools.map((group, i) => (
              <div className="col-lg-6 col-xl-3 mil-mb-30" key={i}>
                <div style={{ height: "100%", padding: "34px 30px", border: "1px solid rgba(18,24,32,.1)", borderRadius: "14px" }}>
                  <h5 className="mil-accent mil-mb-15">{group.category}</h5>
                  <div className="mil-divider mil-divider-left mil-mb-30"></div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                    {group.items.map((item) => (
                      <span className="mil-dark" key={item} style={{ padding: "5px 14px", border: "1px solid rgba(18,24,32,.12)", borderRadius: "30px", fontSize: "13px" }}>{item}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* tools & technologies end */}

      {/* how we deliver */}
      <section className="mil-deep-bg mil-p-120-90">
        <div className="container">
          <span className="mil-suptitle mil-suptitle-2 mil-mb-30">How We Deliver</span>
          <h2 className="mil-mb-90">From Idea to <span className="mil-accent">Impact</span></h2>
          <div className="row">
            {process.map((p) => (
              <div className="col-md-6 col-lg-3" key={p.step}>
                <div className="mil-mb-60">
                  <span className="cs-stepnum mil-accent mil-mb-30" aria-hidden="true">{p.step}</span>
                  <h5 className="mil-mb-15">{p.title}</h5>
                  <p>{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* how we deliver end */}

      {/* other services */}
      <section className="mil-p-120-90">
        <div className="mil-deco" style={{ bottom: 0, right: "30%", transform: "rotate(180deg)" }}></div>
        <div className="container">
          <span className="mil-suptitle mil-suptitle-2 mil-mb-30">Keep Exploring</span>
          <h2 className="mil-mb-60">Other <span className="mil-accent">Solutions</span></h2>
          <div className="row">
            {otherServices.map((s, i) => (
              <div className="col-lg-4 col-md-6 mil-mb-30" key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="mil-svc-card"
                  style={{ display: "flex", flexDirection: "column", height: "100%", background: "#fff", border: "1px solid rgba(18,24,32,.08)", borderRadius: "14px", overflow: "hidden" }}
                >
                  <div className="mil-svc-img" style={{ position: "relative", overflow: "hidden", height: "200px", background: "#f6f8fa" }}>
                    <img src={s.art || s.image} alt={`How ${s.title} works`} loading="lazy" style={{ width: "100%", height: "100%", objectFit: "contain", display: "block", padding: "10px" }} />
                  </div>
                  <div style={{ padding: "30px", display: "flex", flexDirection: "column", flexGrow: 1 }}>
                    <h4 className="mil-mb-15">{s.title}</h4>
                    <p className="mil-mb-30" style={{ display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden" }}>{firstSentence(s.description)}</p>
                    <span className="mil-link" style={{ marginTop: "auto" }}><span>Explore</span><i className="fas fa-arrow-right"></i></span>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* other services end */}

      <CtaBand primary={{ label: "Book a Discovery Call", href: CALENDLY_URL }} secondary={{ label: "View All Solutions", href: "/services" }} />

      <Footer />
    </div>
  );
}
