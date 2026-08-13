// Niche iconography via the Lucide icon library (per design review) — one
// consistent stroke set replacing OS emoji. This module is the single import
// surface for pages, so swapping or retuning icons stays a one-file change.
import {
  Bot,
  Database,
  Landmark,
  TrendingUp,
  Building2,
  Layers,
  GraduationCap,
  Rocket,
  Sparkles,
  ArrowRight,
  Code2,
  Globe,
  Smartphone,
  Megaphone,
  Boxes,
  CloudCog,
  Palette,
  Briefcase,
  HeartPulse,
  MonitorSmartphone,
  Truck,
  Laptop,
  BarChart3,
  Monitor,
  Trophy,
  Palmtree,
  PartyPopper,
} from "lucide-react";

const S = { size: 22, strokeWidth: 1.75, "aria-hidden": true };

export const RocketIcon = () => <Rocket {...S} />;
// "Our Best Work" — the flagship deep-dives row, which sits in the same list
// as the niches but isn't one of them.
export const FeaturedIcon = () => <Sparkles {...S} />;
export const ArrowRightIcon = () => <ArrowRight {...S} size={18} />;

// niche slug -> Lucide icon
export const NICHE_ICONS = {
  "agentic-ai-automation": Bot,
  "enterprise-data-knowledge-secure-ai": Database,
  "fintech-revenue-compliance": Landmark,
  "sales-marketing-growth": TrendingUp,
  "real-estate-proptech-marketplaces": Building2,
  "domain-native-industry-solutions": Layers,
  "adaptive-learning-consumer-platforms": GraduationCap,
};

export function NicheIcon({ slug }) {
  const Ico = NICHE_ICONS[slug] || Layers;
  return <Ico {...S} />;
}

// service slug -> Lucide icon (homepage services list — replaces the old
// index-cycled template icons that didn't match their service)
export const SERVICE_ICONS = {
  "software-development": Code2,
  "web-development": Globe,
  "mobile-app-development": Smartphone,
  "digital-marketing": Megaphone,
  "data-and-ai": Database,
  "enterprise-softwares": Boxes,
  "cloud-engineering": CloudCog,
};
export function ServiceIcon({ slug }) {
  const Ico = SERVICE_ICONS[slug] || Code2;
  return <Ico size={24} strokeWidth={1.75} aria-hidden />;
}

// industry slug -> Lucide icon
export const INDUSTRY_ICONS = {
  "agencies": Palette,
  "consulting": Briefcase,
  "financial-services": Landmark,
  "healthcare": HeartPulse,
  "information-technologies": MonitorSmartphone,
  "logistics": Truck,
};
export function IndustryIcon({ slug, size = 22 }) {
  const Ico = INDUSTRY_ICONS[slug] || Briefcase;
  return <Ico size={size} strokeWidth={1.75} aria-hidden />;
}

// careers benefit -> Lucide icon (matched by title keyword)
const BENEFIT_ICONS = [
  ["Remote", Laptop], ["Growth", BarChart3], ["Career", Rocket],
  ["Equipment", Monitor], ["Bonus", Trophy], ["Health", HeartPulse],
  ["PTO", Palmtree], ["Engagement", PartyPopper],
];
export function BenefitIcon({ title = "" }) {
  const hit = BENEFIT_ICONS.find(([k]) => title.includes(k));
  const Ico = hit ? hit[1] : Trophy;
  return <Ico size={26} strokeWidth={1.75} aria-hidden />;
}
