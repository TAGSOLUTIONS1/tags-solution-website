// TAG Solutions — central site configuration.
// Single source of truth for nav, contact details, company facts, hero copy,
// stats, trust logos, engagement models, and FAQ. Ported from the current site
// with Arbisoft-style B2B additions (engagement models, trust strip, FAQ).

// External scheduling link — booking / discovery-call CTAs point here.
export const CALENDLY_URL = "https://calendly.com/contact-tagsolutionsltd/30min";

export const company = {
  name: "TAG Solutions",
  short: "TAGS",
  tagline: "Technology & Global Solutions",
  founded: "2022",
  logo: "/tags/tags-logo-dark-v2.png",
  logoLight: "/tags/tags-logo-removebg-preview.png",
  description:
    "Empowering your vision with end-to-end tech solutions. AI, software development, cloud engineering and more — trusted by global leaders.",
};

export const contact = {
  offices: ["Dubai Silicon Oasis, UAE"],
  phones: ["+971 50 862 0567"],
  emails: ["contact@tagsolutionsltd.com", "hr@tagsolutionsltd.com"],
};

export const social = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/tagsolutionsltd" },
  { label: "Instagram", href: "https://www.instagram.com/tagsltd/" },
  { label: "Facebook", href: "https://www.facebook.com/people/Tag-Solutions/61555203740162/" },
];

// Primary navigation. `dropdown` marks mega-menu parents.
export const hero = {
  eyebrow: "Technology & Global Solutions",
  titlePrefix: "Empowering Your Vision with",
  titleHighlight: "End-to-End",
  titleSuffix: "Tech Solutions",
  description:
    "Unlock new levels of innovation and efficiency with our cutting-edge AI and software services trusted by global leaders to transform your unique business challenges into reality.",
  primaryCta: { label: "Learn More", href: "/about" },
  secondaryCta: { label: "Book a Call", href: CALENDLY_URL },
};

// Company-wide credibility stats (Arbisoft-style social proof band).
export const stats = [
  { value: "50+", label: "Team Members" },
  { value: "215+", label: "Projects Delivered" },
  { value: "95%", label: "Client Satisfaction" },
  { value: "12", label: "Countries Served" },
];

export const aboutStats = [
  { value: "4+", label: "Years of Engineering Depth" },
  { value: "50+", label: "Scalable Platforms Launched" },
  { value: "95%+", label: "Client Retention Rate" },
  { value: "30-Day", label: "Post-Launch Warranty" },
];

// "Our Employees are Certified by Big Companies" — trust strip.
export const trustLogos = [
  { name: "Google", src: "/tags/google.svg" },
  { name: "Microsoft", src: "/tags/microsoft.svg" },
  { name: "Meta", src: "/tags/meta.svg" },
  { name: "OpenAI", src: "/tags/openai.svg" },
  { name: "Claude", src: "/tags/claude-logo.svg" },
];

// Engagement models (Arbisoft-style B2B offering — powers /engagement).
export const engagementModels = [
  {
    title: "Dedicated Teams",
    price: "Monthly",
    tagline: "A full squad, embedded in your mission.",
    description:
      "A cross-functional team of engineers, designers, and a delivery lead who work exclusively on your product as a seamless extension of your organization.",
    features: [
      "Hand-picked, full-time team",
      "Dedicated delivery manager",
      "Agile sprints & weekly demos",
      "Scale up or down as you grow",
      "Direct communication channels",
    ],
    featured: false,
  },
  {
    title: "Staff Augmentation",
    price: "Flexible",
    tagline: "Plug vetted talent into your team.",
    description:
      "Add senior engineers to your existing team on demand. They follow your process, your stack, and your standards — no ramp-up overhead, no long-term lock-in.",
    features: [
      "Vetted senior engineers",
      "Integrates with your workflow",
      "Fast onboarding (1-2 weeks)",
      "No recruitment overhead",
      "Monthly rolling contracts",
    ],
    featured: true,
  },
  {
    title: "Fixed-Scope Projects",
    price: "Per Project",
    tagline: "Defined scope, fixed price, on time.",
    description:
      "Ideal for well-defined initiatives — MVPs, platform rebuilds, integrations. We scope, quote, and deliver against a clear milestone plan and a fixed budget.",
    features: [
      "Clear scope & fixed budget",
      "Milestone-based delivery",
      "Product & UX discovery included",
      "QA & launch support",
      "30-day post-launch warranty",
    ],
    featured: false,
  },
];

// FAQ (Arbisoft-style B2B engagement questions — powers /faq).
export const faqs = [
  {
    q: "How do we get started with TAG Solutions?",
    a: "It starts with a free discovery call. We learn about your goals, constraints, and timeline, then propose the engagement model and roadmap that best fits. Most projects move from first call to kickoff within two weeks.",
  },
  {
    q: "Which engagement models do you offer?",
    a: "Three: Dedicated Teams (a full squad working exclusively on your product), Staff Augmentation (vetted engineers plugged into your existing team), and Fixed-Scope Projects (defined scope, fixed price, milestone delivery). We'll recommend the right one on your discovery call.",
  },
  {
    q: "How do you price your services?",
    a: "Dedicated Teams and Staff Augmentation are billed monthly based on team composition. Fixed-Scope Projects are quoted upfront against a clear milestone plan. There are no hidden fees — you always know what you're paying for.",
  },
  {
    q: "Where are your teams located?",
    a: "We operate from Dubai Silicon Oasis, UAE, serving clients across the region and beyond. Our teams work across time zones with overlapping hours for real-time collaboration.",
  },
  {
    q: "How do you ensure quality and security?",
    a: "Every engagement includes code reviews, automated testing, and CI/CD pipelines. For regulated industries we follow security-first architecture, SOC 2 / HIPAA-aware practices, and regular audits. Quality assurance is built into our delivery process, not bolted on.",
  },
  {
    q: "Do you sign NDAs and own-IP agreements?",
    a: "Yes. We sign NDAs before any detailed discussion, and all intellectual property created during an engagement is fully transferred to you. Your ideas and your code are yours.",
  },
  {
    q: "What technologies do you work with?",
    a: "Across web, mobile, cloud, data, and AI: React, Next.js, Node.js, Python, .NET, Flutter, React Native, AWS, Azure, GCP, TensorFlow, PyTorch, and more. We choose the stack that fits your problem, not the other way around.",
  },
  {
    q: "Do you provide support after launch?",
    a: "Absolutely. Fixed-Scope Projects include a 30-day post-launch warranty, and we offer ongoing maintenance, monitoring, and enhancement retainers so your product keeps improving after go-live.",
  },
];

// U.S. SLED delivery partner positioning (from the current nav mega-menu).
export const sled = {
  title: "U.S. SLED Delivery Partner",
  subtitle: "State, Local & Education technology delivery",
  description:
    "TAG Solutions partners with U.S. State, Local, and Education (SLED) organizations to deliver secure, compliant, cloud-native software — from modernization to net-new builds.",
  highlights: [
    { title: "State, Local & Education", text: "Purpose-built delivery for public-sector agencies, municipalities, and education institutions." },
    { title: "FedRAMP-Aware Cloud", text: "Cloud architectures designed with FedRAMP and government security baselines in mind." },
    { title: "NIST 800-53 · CMMC Level 1", text: "Controls aligned to NIST 800-53 and CMMC Level 1 for defensible, auditable delivery." },
    { title: "NAICS 541511", text: "Registered under NAICS 541511 — Custom Computer Programming Services." },
  ],
};

// Newsletter / CTA copy reused across pages.
export const cta = {
  title: "Ready to Start Your",
  highlight: "Project?",
  description:
    "Have a project in mind or want to learn more about our services? Let's turn your vision into a scalable, high-performance reality.",
  primary: { label: "Book a Discovery Call", href: CALENDLY_URL },
  secondary: { label: "Explore Services", href: "/services" },
};
