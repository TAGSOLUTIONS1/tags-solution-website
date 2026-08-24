// Engagement models page data (Arbisoft-style), adapted for TAG Solutions.
// Three models aligned to the comparison table: Software Outsourcing,
// Dedicated Teams, Staff Augmentation.

export const models = [
  {
    key: "outsourcing",
    title: "Software Outsourcing",
    price: "Fixed Scope",
    tagline: "Hand us the problem — we deliver the product.",
    description:
      "End-to-end delivery of a defined project: discovery, design, development, QA, and deployment. We own project management and execution so you can focus on your core business.",
    features: [
      "Full project ownership by TAG Solutions",
      "Fixed scope, timeline & budget",
      "Design → development → QA → launch",
      "Milestone-based delivery & reporting",
      "30-day post-launch warranty",
    ],
    bestFor: [
      "SMEs that want a partner to handle complete project development.",
      "Companies with limited in-house technical expertise.",
      "Large, complex projects that need a full solution and lower overhead.",
    ],
    featured: false,
  },
  {
    key: "dedicated",
    title: "Dedicated Teams",
    price: "Monthly",
    tagline: "A full squad, embedded in your mission.",
    description:
      "A cross-functional team of engineers, designers, and a delivery lead who work exclusively on your product as a seamless extension of your organization — without the overhead of hiring.",
    features: [
      "Hand-picked, full-time team",
      "Dedicated delivery manager",
      "Agile sprints & weekly demos",
      "Scale the team up or down as you grow",
      "Direct communication channels",
    ],
    bestFor: [
      "Growing companies that need full-time teams to build and maintain products.",
      "Long-term projects with evolving requirements.",
      "Teams that want direct collaboration without HR & admin overhead.",
    ],
    featured: true,
  },
  {
    key: "augmentation",
    title: "Staff Augmentation",
    price: "Flexible",
    tagline: "Plug vetted talent into your team.",
    description:
      "Add senior engineers to your existing team on demand. They follow your process, your stack, and your standards — with no ramp-up overhead and no long-term lock-in.",
    features: [
      "Vetted senior engineers",
      "Integrates with your workflow",
      "Fast onboarding (1–2 weeks)",
      "No recruitment overhead",
      "Monthly rolling contracts",
    ],
    bestFor: [
      "Companies that need extra tech staff for a short period.",
      "Teams scaling up without committing to full-time employment.",
      "In-house teams that need specialists for specific tasks.",
    ],
    featured: false,
  },
];

// Animated SVG that visually explains how each model works.
// Used on both the home page teaser and the /engagement cards.
export const modelArt = {
  outsourcing: "/img/engagement/outsourcing.svg",
  dedicated: "/img/engagement/dedicated.svg",
  augmentation: "/img/engagement/augmentation.svg",
};

export const factorStats = [
  { value: "4+", label: "Years building custom solutions and applications" },
  { value: "215+", label: "Projects delivered across industries" },
  { value: "50+", label: "Specialists across engineering, data & design" },
];

export const technologies = [
  "React", "Next.js", "Node.js", "Python", "Django", ".NET",
  "Flutter", "React Native", "AWS", "Azure", "Google Cloud",
  "PostgreSQL", "MongoDB", "TensorFlow", "PyTorch", "Docker", "Kubernetes",
];

// Comparison table: one row per criterion, a value per model.
export const comparison = [
  {
    criteria: "Project Scope",
    outsourcing: "Includes everything — design, development, testing, deployment.",
    dedicated: "Ongoing development tasks.",
    augmentation: "Specific tasks that require additional resources.",
  },
  {
    criteria: "Project Size",
    outsourcing: "Medium to Large",
    dedicated: "Medium to Large",
    augmentation: "Small to Medium",
  },
  {
    criteria: "Engagement Duration",
    outsourcing: "Long-term",
    dedicated: "Long-term",
    augmentation: "Short-term / as needed",
  },
  {
    criteria: "Your Involvement",
    outsourcing: "Minimal — we manage all aspects of the project.",
    dedicated: "High — you collaborate closely with the dedicated team.",
    augmentation: "High — you provide direction and oversight.",
  },
  {
    criteria: "Control & Oversight",
    outsourcing: "We fully control operations and update you regularly.",
    dedicated: "Shared control with regular input and direction — you make the decisions.",
    augmentation: "You control everything; we provide the expertise.",
  },
  {
    criteria: "Flexibility",
    outsourcing: "Moderate — scope defined upfront with some room for change.",
    dedicated: "High — team structure and tasks can be adjusted as needed.",
    augmentation: "High — scale resources up or down based on your needs.",
  },
  {
    criteria: "Team Structure",
    outsourcing: "We decide and manage the team structure.",
    dedicated: "We suggest; you decide and manage.",
    augmentation: "You decide and manage the team structure.",
  },
  {
    criteria: "Risk & Responsibility",
    outsourcing: "Low risk — we handle all project management and execution.",
    dedicated: "Medium risk — depends on your in-house technical & managerial expertise.",
    augmentation: "Medium to high — depends on your expertise and project complexity.",
  },
  {
    criteria: "Cost Structure",
    outsourcing: "Fixed — based on the defined, locked project scope.",
    dedicated: "Flexible — based on team size, duration, and expertise required.",
    augmentation: "Flexible — based on the number of resources required.",
  },
];

// Quick-fit questions: true = this model fits the requirement.
export const questions = [
  { q: "I want to scale up my team quickly.", outsourcing: false, dedicated: true, augmentation: true },
  { q: "I want to manage the team myself.", outsourcing: false, dedicated: true, augmentation: true },
  { q: "I prefer a fully managed solution.", outsourcing: true, dedicated: false, augmentation: false },
  { q: "I need full control over the development process.", outsourcing: false, dedicated: true, augmentation: true },
  { q: "I need a long-term commitment.", outsourcing: true, dedicated: true, augmentation: false },
  { q: "I have a short-term project.", outsourcing: false, dedicated: false, augmentation: true },
  { q: "I want to outsource the entire project.", outsourcing: true, dedicated: false, augmentation: false },
  { q: "I want deep integration with my team.", outsourcing: false, dedicated: true, augmentation: true },
  { q: "I need specialized skills for specific tasks.", outsourcing: false, dedicated: false, augmentation: true },
];

export const faqGroups = [
  {
    "group": "Outsourcing FAQs",
    "items": [
      {
        "q": "How much does a fixed-scope project cost?",
        "a": "Every project is quoted after a free discovery call, based on scope and complexity. The quote is broken down by milestone and locked before work begins, with no hourly billing, so the price you sign is the price you pay. For most SMEs this comes in around 40% below the cost of recruiting, onboarding, and retaining an equivalent in-house team."
      },
      {
        "q": "What happens if requirements change mid-project?",
        "a": "Minor refinements within the agreed scope are absorbed at no cost. Anything beyond it goes through a written change request: we assess the impact on budget and timeline within two business days, you approve it in writing before any work starts, and the contract is updated. You will never see an invoice for work you didn’t sign off."
      },
      {
        "q": "How much control and visibility do I have?",
        "a": "You approve the scope, review a working build at every milestone, and give final sign-off before launch. Between milestones you have live access to the project board (Jira or ClickUp), a weekly written status report, and scheduled demo calls, while we run the day-to-day: standups, task management, senior code reviews, and dedicated QA. You steer the product; we manage the developers."
      },
      {
        "q": "Who owns the code, and how is my data protected?",
        "a": "You do, 100%. Full IP, including source code, designs, documentation, and infrastructure configuration, is assigned to you in the contract and handed over at the completion of each milestone. We sign NDAs before discovery even begins, repositories and cloud environments are set up under your own accounts wherever possible, and all team access is revoked at handover. Your code is never reused on another client’s project."
      },
      {
        "q": "What support do I get after launch?",
        "a": "Every fixed-scope engagement includes a 30-day post-launch support period, during which any defects surfaced are resolved at no charge. After that, most clients move to a monthly support retainer covering monitoring, security patches, and minor enhancements. Prefer to take it in-house? We hand over complete documentation and run a walkthrough with your team so the transition is clean."
      }
    ]
  },
  {
    "group": "Dedicated Teams FAQs",
    "items": [
      {
        "q": "How is a dedicated team different from outsourcing?",
        "a": "With outsourcing, you hand us a defined scope and we deliver the finished product. With a dedicated team, the people are yours: engineers and a delivery lead who work exclusively on your product, follow your roadmap, and operate as a direct extension of your organization. You decide what gets built and in what order; we make sure it gets built well."
      },
      {
        "q": "Who manages the team day to day?",
        "a": "You own the roadmap, priorities, and every product decision. Our delivery manager owns execution, covering sprint planning, standups, velocity, unblocking, and weekly demo reporting, so none of the operational load lands on your desk. If you’d rather run the team directly under your own product or engineering lead, we support that model too, with the delivery manager stepping back into a lightweight coordination role."
      },
      {
        "q": "What is the minimum team size and commitment?",
        "a": "Teams start at three full-time engineers on an initial three-month term, then continue on monthly rolling contracts. Adding a specialist takes one week; scaling down requires 30 days’ written notice. No placement fees, no penalties, no long-term lock-in."
      },
      {
        "q": "Can I interview the team, and what if someone isn’t a fit?",
        "a": "Yes. You interview and approve every member before they join, and you can specify the exact skills and seniority you need. If anyone underperforms or the chemistry isn’t right, tell us. We replace them within two weeks at no cost, with a structured handover so your velocity doesn’t drop."
      },
      {
        "q": "How do you handle time zones and communication?",
        "a": "Our teams are based in Lahore (UTC+5) and Dubai (UTC+4), but they work on your clock, not ours. Whether you’re in the US, UK, EU, or the Gulf, the team aligns its full working day to your business hours, giving you real-time collaboration rather than overnight handoffs. You get direct Slack or Teams access to every team member, daily written standups, and a weekly demo call. No account managers standing between you and your engineers."
      }
    ]
  },
  {
    "group": "Staff Augmentation FAQs",
    "items": [
      {
        "q": "How are your engineers vetted?",
        "a": "Every engineer passes a four-stage screen before they ever reach a client: a technical assessment, a live coding interview on realistic problems, a system-design round, and an English communication interview, plus reference checks. Fewer than 1 in 10 applicants make it through. You then interview the shortlist yourself and make the final call."
      },
      {
        "q": "How quickly can an engineer start?",
        "a": "Within one week of a signed agreement, often sooner. We share matched profiles within three business days; once you approve someone, they’re set up in your repos, tools, and rituals, usually committing code within their first few days. They adapt to your stack and your standards, so there is no “our process” for your team to learn."
      },
      {
        "q": "Do I manage the augmented engineers?",
        "a": "Fully. They attend your standups, take direction from your leads, and follow your workflow exactly like employees. We stay in the background handling contracts, payroll, equipment, and HR, so you get the output of a hire with none of the administration. Their working hours align to your team’s core hours, not ours."
      },
      {
        "q": "What if an engineer isn’t the right fit?",
        "a": "Tell us, with no awkward conversations required on your side. We provide a replacement within ten business days at no additional cost and manage the handover between engineers ourselves."
      },
      {
        "q": "What are the contract terms and pricing?",
        "a": "A flat monthly rate per engineer with no recruitment fees, no benefits costs, and no hidden extras: the number on the contract is the number on the invoice. Contracts roll monthly, and you can scale down or exit with 30 days’ notice."
      }
    ]
  }
];
