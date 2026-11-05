// src/components/sections/areas/MapConsent.tsx
"use client";

import { useState } from "react";

// The map pulls CARTO / Cloudflare / Google Fonts, so it only loads after the visitor agrees (same as live)
export default function MapConsent() {
  const [loaded, setLoaded] = useState(false);

  if (loaded) {
    return (
      <iframe
        src="/coverage-map.html"
        title="AMAC delivery areas map"
        loading="lazy"
        className="h-[420px] w-full rounded-[20px] border border-card-border md:h-[500px]"
      />
    );
  }

  return (
    <div className="rounded-[10px] border border-card-border px-5 py-10 text-center md:px-[60px] md:py-[50px]">
      <h3 className="text-3xl leading-tight font-bold text-black md:text-[40px] md:leading-[48px]">View our delivery map</h3>
      <p className="mx-auto mt-4 max-w-[1100px] text-base leading-6 text-ink">
        Loading this interactive map connects to CARTO, Cloudflare and Google Fonts. These services receive your IP address and browser information. Our delivery areas are also listed below.
      </p>
      <button
        type="button"
        onClick={() => setLoaded(true)}
        className="mt-6 cursor-pointer rounded-[50px] px-[30px] py-3.5 text-base leading-6 font-semibold text-white shadow-[var(--shadow-button)] transition-all duration-400 [background:var(--gradient-primary)] hover:[background:var(--gradient-black)]"
      >
        Allow external services and load map
      </button>
    </div>
  );
}
