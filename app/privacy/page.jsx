import Header from "@/components/Header";
import FooterBig from "@/components/FooterBig";
import { contact, company } from "@/data/site";

// Privacy policy — approved by the content owner (retention: 90 days;
// effective 17 August 2026). Describes exactly what the site does: contact
// form data sent to our systems for responding; essential cookies always,
// marketing cookies only with consent via the cookie notice.
export const metadata = {
  title: "Privacy Policy — TAG Solutions",
  description: "How TAG Solutions handles the information you share through this website.",
};

export default function PrivacyPage() {
  return (
    <div className="mil-wrapper">
      <Header />
      <div className="mil-banner-sm mil-deep-bg" style={{ height: "auto", paddingTop: "190px", paddingBottom: "60px" }}>
        <div className="mil-banner-content" style={{ width: "100%" }}>
          <div className="container">
            <span className="mil-suptitle mil-suptitle-2 mil-mb-30">Legal</span>
            <h1 style={{ fontSize: "clamp(34px, 5vw, 52px)" }}>Privacy <span className="mil-accent">Policy</span></h1>
          </div>
        </div>
      </div>
      <section className="mil-p-120-120" style={{ paddingTop: "60px" }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9 col-xl-8">
              <p className="mil-text-lg mil-mb-30" style={{ color: "#121820" }}>
                This policy describes what information {company.name} collects
                through this website, why, and the choices available to you.
              </p>

              <h3 className="mil-mb-15">Information we collect</h3>
              <p className="mil-mb-30">
                When you use the contact form, we collect the details you
                provide: your name, email address, and message (plus an
                optional subject). This information is transmitted to our
                systems so our team can respond to your enquiry. We do not use
                it for any other purpose and we do not sell it.
              </p>

              <h3 className="mil-mb-15">Cookies</h3>
              <p className="mil-mb-30">
                The site uses essential cookies required for basic
                functionality, and — only with your consent — marketing
                cookies. Our cookie notice lets you accept all, reject
                non-essential, or customize your choice; closing the notice
                rejects non-essential cookies. You can change your decision by
                clearing the site's cookies in your browser, which makes the
                notice reappear.
              </p>

              <h3 className="mil-mb-15">How long we keep information</h3>
              <p className="mil-mb-30">
                Contact enquiries are retained for 90 days, after which they
                are deleted.
              </p>

              <h3 className="mil-mb-15">Your choices and contact</h3>
              <p className="mil-mb-30">
                You can ask us to access, correct, or delete the personal
                information you have sent us at any time by writing to{" "}
                <a href={`mailto:${contact.emails[0]}`} className="mil-accent">{contact.emails[0]}</a>.
              </p>

              <p className="mil-text-sm" style={{ color: "rgba(18,24,32,.5)" }}>
                Last updated: 17 August 2026
              </p>
            </div>
          </div>
        </div>
      </section>
      <FooterBig />
    </div>
  );
}
