import Link from "next/link";
import { company } from "@/data/site";
import { services } from "@/data/services";
import SearchWidget from "@/components/SearchWidget";

// Top navigation bar for TAG Solutions. `transparent` renders the animated
// see-through header used on hero pages; inner pages use the solid variant.
export default function Header({ transparent = false, fluid = false }) {
  const panelClass = transparent
    ? "mil-top-panel mil-top-panel-transparent mil-animated"
    : "mil-top-panel";

  return (
    <div className="mil-top-position mil-fixed">
      <div className={panelClass}>
        <div className={fluid ? "container-fluid" : "container"}>
          <Link href="/" className="mil-logo mil-logo-tags" aria-label={company.name}>
            <img className="mil-logo-light" src={company.logoLight} alt={company.name} />
            <img className="mil-logo-dark" src={company.logo} alt={company.name} />
          </Link>
          <div className="mil-navigation">
            <nav>
              <ul>
                <li><Link href="/engagement">Engagement Models</Link></li>
                <li className="mil-has-children">
                  <Link href="/services">Solutions</Link>
                  <ul>
                    {services.map((sv) => (
                      <li key={sv.slug}><Link href={`/services/${sv.slug}`}>{sv.shortTitle || sv.title}</Link></li>
                    ))}
                  </ul>
                </li>
                <li><Link href="/products">Products</Link></li>
                <li><Link href="/success-stories">Success Stories</Link></li>
                <li><Link href="/careers">Careers</Link></li>
                <li className="mil-has-children">
                  <Link href="/about">Company</Link>
                  <ul>
                    <li><Link href="/about">About Us</Link></li>
                    <li><Link href="/industries">Industries</Link></li>
                    <li><Link href="/blog">Blog</Link></li>
                    <li><Link href="/sled">U.S. SLED Partner</Link></li>
                    <li><Link href="/faq">FAQ</Link></li>
                  </ul>
                </li>
                {/* the one nav item we want people to notice: .mil-nav-cta
                    pulses it between the nav colour and the brand orange */}
                <li className="mil-nav-cta"><Link href="/contact">Contact Us</Link></li>
              </ul>
              <SearchWidget />
            </nav>
          </div>
          {/* mobile menu button */}
          <div className="mil-menu-btn">
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
}
