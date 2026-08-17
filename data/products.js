// TAGS Solutions product portfolio — powers /products.
// Content source: "TAG-Solutions-Products.docx". The full case-study bodies in
// that document are word-for-word identical to the three product stories in
// data/nicheStories.js (verified field-by-field), so this file carries only
// the portfolio-level copy and each product links to its canonical case study
// instead of duplicating it at a second URL.

export const productsIntro = {
  suptitle: "Product Portfolio · 3 Platforms",
  title: "Our Products",
  lead:
    "Every platform in this reference is a TAGS Solutions product — conceived, engineered and operated by our own team, end-to-end.",
  badge: "Designed, Built and Owned In-House",
};

export const productsClosing = {
  title: "We build products the same way we build for clients —",
  highlight: "end-to-end.",
  description: "Three products. One engineering standard. Designed, built and owned in-house.",
};

export const products = [
  {
    slug: "geostats",
    name: "GeoStats",
    url: "geostats.ai",
    kicker: "TAGS Product · Geo-Intelligence & Urban Analytics",
    tagline: "Geo-intelligence and urban analytics for an entire city, on one map",
    head: "Four fragmented datasets. One decision-ready platform.",
    lead:
      "We built GeoStats, our own geo-intelligence and urban analytics platform, which layers population, income, mobility and real-estate data onto a single interactive map — covering an entire metropolitan region — with an AI insight engine that turns raw data into location-specific recommendations.",
    features: ["Four-Layer Geospatial Engine", "AI Insight Generation", "City-Wide Coverage", "Interactive Map-Based Interface"],
    numbers: [
      { v: "4 Data Layers", l: "On One Map" },
      { v: "City-Wide", l: "Coverage" },
      { v: "AI-Powered", l: "Insight Generation" },
      { v: "On-Demand", l: "vs Weeks of Research" },
    ],
    storyHref: "/success-stories/niche/enterprise-data-knowledge-secure-ai/geostats-single-map-entire-city",
  },
  {
    slug: "gosalify",
    name: "GoSalify",
    url: "gosalify.com",
    kicker: "TAGS Product · Sales Automation & Lead Intelligence",
    tagline: "AI-native sales automation, from live signal to personalized outreach",
    head: "Live signals. Scored leads. Personalized outreach. Warm sending.",
    lead:
      "We built GoSalify, our own AI-native sales automation platform, which sources leads from live hiring signals, enriches and scores them with written justification, personalizes outreach using real company context, and delivers through managed sending infrastructure — all from a single platform.",
    features: ["Live Signal Detection Agent", "Enrichment Pipeline", "Scoring Model with Written Rationale", "LLM Personalization on Real Context", "Managed Sending with Pre-Warmed Inboxes"],
    numbers: [
      { v: "~30 hrs", l: "Saved per Rep/Week" },
      { v: "30M+", l: "Company Index" },
      { v: "250M+", l: "Profile Index" },
      { v: "<24hr", l: "Signal Freshness" },
    ],
    storyHref: "/success-stories/niche/sales-marketing-growth/gosalify-signal-to-outreach",
  },
  {
    slug: "findxstorage",
    name: "FindXStorage",
    url: "findxstorage.com",
    kicker: "TAGS Product · Real Estate & AI Marketplace",
    tagline: "A two-sided AI marketplace for the self-storage industry",
    head: "Renters get live availability. Owners get demand intelligence.",
    lead:
      "We built FindXStorage, our own two-sided self-storage marketplace, which serves both renters and owners with AI — unit matching, live availability and transparent pricing for renters; dynamic demand-based pricing, biometric access control and facility intelligence for owners.",
    features: ["AI Unit Matching", "Dynamic Demand-Based Pricing", "Facial Recognition & Smart Locks", "24/7 AI Chatbot & Automated Billing", "Predictive Maintenance & Demand Forecasting"],
    numbers: [
      { v: "AI", l: "Unit Matching" },
      { v: "Dynamic", l: "Demand Pricing" },
      { v: "Biometric", l: "Access Control" },
      { v: "24/7", l: "AI Chatbot" },
    ],
    storyHref: "/success-stories/niche/real-estate-proptech-marketplaces/findxstorage-ai-marketplace-self-storage",
  },
];
