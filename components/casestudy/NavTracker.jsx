"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

// Records the in-site navigation trail (this tab only) so BackLink can
// return to the ACTUAL previous page — document.referrer doesn't update on
// client-side route changes, so it can't be trusted for this. Mounted on the
// success-stories and products pages; renders nothing.
const KEY = "tagsNavStack";

export default function NavTracker() {
  const pathname = usePathname();

  useEffect(() => {
    try {
      const stack = JSON.parse(sessionStorage.getItem(KEY) || "[]");
      if (stack[stack.length - 1] !== pathname) stack.push(pathname);
      sessionStorage.setItem(KEY, JSON.stringify(stack.slice(-12)));
    } catch {
      /* storage unavailable — BackLink falls back to hierarchy */
    }
  }, [pathname]);

  return null;
}
