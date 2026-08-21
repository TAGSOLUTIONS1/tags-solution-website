// Service worker for the TAG Solutions PWA, powered by Serwist (Workbox-based).
// Compiled by @serwist/next during `next build`; disabled in `next dev`.
import { defaultCache } from "@serwist/next/worker";
import {
  Serwist,
  NetworkFirst,
  StaleWhileRevalidate,
  ExpirationPlugin,
  CacheableResponsePlugin,
} from "serwist";

// Cache blog & case-study content from the external API: serve the cached copy
// instantly and refresh it in the background, so content stays visible offline.
// This complements the static fallbacks already bundled in /data.
const apiCache = {
  matcher: ({ url }) => url.hostname.endsWith("tagsb.vercel.app"),
  handler: new StaleWhileRevalidate({
    cacheName: "tags-api",
    plugins: [
      new CacheableResponsePlugin({ statuses: [0, 200] }),
      new ExpirationPlugin({ maxEntries: 60, maxAgeSeconds: 60 * 60 * 24 }),
    ],
  }),
};

// Our stylesheets live in /public, so their URLs are stable across deploys
// (/css/style.css, /css/tags.css) — nothing in the URL changes when the file
// does. Serwist's default rule caches any *.css stale-while-revalidate, which
// means the first load after a deploy paints the new HTML with the *previous*
// build's CSS and only looks right after a reload. Go to the network first and
// fall back to the cache only when the network is slow or unavailable.
const cssCache = {
  matcher: ({ url, sameOrigin }) => sameOrigin && url.pathname.startsWith("/css/"),
  handler: new NetworkFirst({
    cacheName: "static-style-assets",
    networkTimeoutSeconds: 5,
    plugins: [
      new CacheableResponsePlugin({ statuses: [0, 200] }),
      new ExpirationPlugin({ maxEntries: 32 }),
    ],
  }),
};

const serwist = new Serwist({
  // Precache list injected at build time (app shell + static chunks).
  precacheEntries: self.__SW_MANIFEST,
  skipWaiting: true,
  clientsClaim: true,
  navigationPreload: true,
  // Our own rules first (they win over the defaults, which are matched in
  // order), then Serwist's Next-tuned defaults (pages, RSC, /_next/static,
  // images, fonts, google fonts, etc.). /_next/static is content-hashed, so
  // the defaults' cache-first handling is safe there.
  runtimeCaching: [apiCache, cssCache, ...defaultCache],
  // When a navigation can't be served from network or cache, show the offline page.
  fallbacks: {
    entries: [
      {
        url: "/~offline",
        matcher({ request }) {
          return request.destination === "document";
        },
      },
    ],
  },
});

serwist.addEventListeners();
