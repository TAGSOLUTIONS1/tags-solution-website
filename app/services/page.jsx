import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CtaBand from "@/components/CtaBand";
import { services } from "@/data/services";
import { firstSentence } from "@/lib/text";
import { CALENDLY_URL } from "@/data/site";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Solutions",
  description:
    "From custom software to AI, cloud, and growth marketing — TAG Solutions engineers end-to-end solutions tailored to your goals.",
  path: "/services",
});

const chipStyle = {
  display: "inline-block",
  padding: "5px 14px",
  border: "1px solid rgba(0, 0, 0, 0.1)",
  borderRadius: "30px",
  marginRight: "8px",
  marginTop: "10px",
  fontSize: "12px",
  lineHeight: 1.4,
};

const approach = [
  {
    step: "01",
    title: "Discovery",
    text: "We dig into your goals, users, and constraints to define what success looks like before a single line of code is written.",
    variant: "mil-circle",
  },
  {
    step: "02",
    title: "Design",
    text: "We architect the system and craft intuitive experiences, validating direction early with prototypes and clear technical plans.",
    variant: "mil-lines",
  },
  {
    step: "03",
    title: "Build",
    text: "Our engineers ship in tight iterations with rigorous QA, so you see working software often and course-correct fast.",
    variant: "",
  },
  {
    step: "04",
    title: "Scale",
    text: "We optimize, monitor, and evolve your product — adding capacity, features, and intelligence as your business grows.",
    variant: "mil-circle",
  },
];

// Card excerpts end at a SENTENCE boundary (the description's own opening
// sentence[s]) instead of clamping mid-thought with an ellipsis.
export default function ServicesPage() {
  return (
    <div className="mil-wrapper">
      <Header transparent />

      {/* hero */}
      <div className="mil-banner mil-top-space-0">
        <img src="/tags/hero-bg.png" className="mil-background-image" style={{ objectPosition: "center" }} alt="background" />
        <div className="mil-overlay"></div>
        <div className="mil-banner-content">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10 col-xl-9 mil-text-center">
                <span className="mil-suptitle mil-light mil-mb-30"><span className="mil-light">Our Solutions</span></span>
                <h1 className="mil-light mil-mb-30">Solutions That Move Your <span className="mil-font-3 mil-accent">Business Forward</span></h1>
                <p className="mil-light-soft" style={{ maxWidth: "640px", margin: "0 auto" }}>
                  From custom software to AI, cloud, and growth marketing — we engineer end-to-end solutions tailored to your goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* hero end */}

      {/* services grid */}
      <section className="mil-p-120-90">
        <div className="mil-deco" style={{ top: 0, right: "20%" }}></div>
        <div className="container">
          <span className="mil-suptitle mil-suptitle-2 mil-mb-30">What We Do</span>
          <h2 className="mil-mb-60">Explore Our <span className="mil-accent">Solutions</span></h2>
          <div className="row">
            {services.map((s, i) => (
              <div className="col-lg-4 col-md-6 mil-mb-30" key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="mil-svc-card"
                  style={{ display: "flex", flexDirection: "column", height: "100%", background: "#fff", border: "1px solid rgba(18,24,32,.08)", borderRadius: "14px", overflow: "hidden" }}
                >
                  <div className="mil-svc-img" style={{ position: "relative", overflow: "hidden", height: "220px", background: "#f6f8fa" }}>
                    <img src={s.art || s.image} alt={`How ${s.title} works`} loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                  </div>
                  <div style={{ padding: "32px 30px", display: "flex", flexDirection: "column", flexGrow: 1 }}>
                    <h4 className="mil-mb-15">{s.title}</h4>
                    <p className="mil-mb-30" style={{ display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden" }}>{firstSentence(s.description)}</p>
                    <div className="mil-mb-30" style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                      {s.tags.map((tag) => (
                        <span className="mil-dark" key={tag} style={{ padding: "5px 14px", border: "1px solid rgba(18,24,32,.12)", borderRadius: "30px", fontSize: "12px" }}>{tag}</span>
                      ))}
                    </div>
                    <span className="mil-link" style={{ marginTop: "auto" }}><span>Explore</span><i className="fas fa-arrow-right"></i></span>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* services grid end */}


      {/* approach */}
      <section className="mil-p-120-90">
        <div className="mil-deco" style={{ bottom: 0, right: "35%", transform: "rotate(180deg)" }}></div>
        <div className="container">
          <div className="row">
            <div className="col-12 mil-mb-90">
              <span className="mil-suptitle mil-suptitle-2 mil-mb-30">How We Work</span>
              <h2 className="mil-mb-30">Our <span className="mil-accent">Approach</span></h2>
              <p className="mil-dark">A proven, transparent process that takes you from idea to impact — Discovery, Design, Build, and Scale.</p>
            </div>
          </div>
          <div className="row">
            {approach.map((a) => (
              <div className="col-xl-3 col-md-6" key={a.step}>
                <div className="mil-mb-60">
                  <div className={`mil-number-icon ${a.variant} mil-mb-30`}>
                    <span>{a.step}</span>
                  </div>
                  <h4 className="mil-mb-15">{a.title}</h4>
                  <p>{a.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* approach end */}

      <CtaBand primary={{ label: "Book a Discovery Call", href: CALENDLY_URL }} secondary={{ label: "View Our Work", href: "/success-stories" }} />

      <Footer />
    </div>
  );
}
