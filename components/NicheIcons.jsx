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
  ArrowRight,
} from "lucide-react";

const S = { size: 22, strokeWidth: 1.75, "aria-hidden": true };

export const RocketIcon = () => <Rocket {...S} />;
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
