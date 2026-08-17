"use client";

import { useEffect, useState } from "react";

export function DeviceFrame({ src, alt = "", kind = "plain" }) {
  if (kind === "phone") {
    return <div className="cs-phone"><img src={src} alt={alt} loading="lazy" /></div>;
  }
  if (kind === "browser") {
    return (
      <div className="cs-browser">
        <div className="cs-browser-bar"><i /><i /><i /><span className="cs-browser-url" /></div>
        <img src={src} alt={alt} loading="lazy" />
      </div>
    );
  }
  return <img className="cs-plainshot" src={src} alt={alt} loading="lazy" />;
}

// Screenshot gallery in device frames — click any screenshot to open it
// full-size in a lightbox (Esc / backdrop / × to close, arrows to move).
export function Gallery({ images, frame = "browser" }) {
  const imgs = (Array.isArray(images) ? images : []).filter(Boolean);
  const [open, setOpen] = useState(-1);
  const phone = frame === "phone";

  useEffect(() => {
    if (open < 0) return;
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(-1);
      if (e.key === "ArrowRight") setOpen((o) => (o + 1) % imgs.length);
      if (e.key === "ArrowLeft") setOpen((o) => (o - 1 + imgs.length) % imgs.length);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [open, imgs.length]);

  if (!imgs.length) return null;
  const cur = imgs[open] || {};
  return (
    <>
      <div className="cs-gallery" style={phone ? { gridTemplateColumns: "repeat(auto-fill, minmax(210px, 1fr))" } : undefined}>
        {imgs.map((im, i) => (
          <button key={i} type="button" onClick={() => setOpen(i)} className="cs-lightbox-thumb" aria-label={`Open screenshot ${i + 1} full size`}>
            <DeviceFrame src={im.src || im} alt={im.alt || ""} kind={frame} />
          </button>
        ))}
      </div>
      {open >= 0 && (
        <div className="cs-lightbox" role="dialog" aria-modal="true" aria-label="Screenshot viewer" onClick={() => setOpen(-1)}>
          <button type="button" className="cs-lb-close" aria-label="Close" onClick={() => setOpen(-1)}>×</button>
          {imgs.length > 1 && (
            <>
              <button type="button" className="cs-lb-nav cs-lb-prev" aria-label="Previous" onClick={(e) => { e.stopPropagation(); setOpen((o) => (o - 1 + imgs.length) % imgs.length); }}>←</button>
              <button type="button" className="cs-lb-nav cs-lb-next" aria-label="Next" onClick={(e) => { e.stopPropagation(); setOpen((o) => (o + 1) % imgs.length); }}>→</button>
            </>
          )}
          <figure onClick={(e) => e.stopPropagation()}>
            <img src={cur.src || cur} alt={cur.alt || ""} />
            {(cur.alt || imgs.length > 1) && (
              <figcaption>{cur.alt}{imgs.length > 1 ? ` · ${open + 1} / ${imgs.length}` : ""}</figcaption>
            )}
          </figure>
        </div>
      )}
    </>
  );
}
