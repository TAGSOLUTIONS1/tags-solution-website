"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

// Back link that behaves like people expect "back" to behave:
// if the visitor navigated here from within the site, it returns to the
// actual previous page (e.g. Products → case study → back lands on
// Products); otherwise it falls back to the hierarchical parent given
// in `href` (e.g. the story's niche listing) — so direct visitors and
// search-engine arrivals always have a sensible destination.
export default function BackLink({ href, label, light = true }) {
  const router = useRouter();

  const onClick = (e) => {
    if (typeof window === "undefined") return;
    // Primary signal: our own in-site trail (see NavTracker) — reliable
    // across client-side navigations where document.referrer is not.
    try {
      const stack = JSON.parse(sessionStorage.getItem("tagsNavStack") || "[]");
      const prev = stack[stack.length - 2];
      if (prev && prev !== window.location.pathname) {
        e.preventDefault();
        sessionStorage.setItem("tagsNavStack", JSON.stringify(stack.slice(0, -1)));
        router.back();
        return;
      }
    } catch {
      /* fall through */
    }
    // Secondary: same-origin referrer (covers full page loads).
    if (window.history.length > 1 && document.referrer && document.referrer.startsWith(window.location.origin)) {
      e.preventDefault();
      router.back();
    }
  };

  return (
    <Link href={href} onClick={onClick} className={`mil-link link-left ${light ? "mil-light " : ""}mil-mb-30`}>
      <i className="fas fa-arrow-left"></i>
      <span>{label}</span>
    </Link>
  );
}
