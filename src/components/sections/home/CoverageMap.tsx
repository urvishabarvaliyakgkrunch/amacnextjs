// src/components/sections/home/CoverageMap.tsx
import { MAX_WIDTH, SIDE_PADDING } from "@/components/layout/layout-classes";

// Leaflet map is a self-contained page (public/coverage-map.html) so its CSS/JS can't leak into the app
export default function CoverageMap() {
  return (
    <section className={`bg-white pt-10 md:pt-[60px] lg:pt-[110px] ${SIDE_PADDING}`}>
      <div className={MAX_WIDTH}>
        <iframe
          src="/coverage-map.html"
          title="AMAC coverage map"
          loading="lazy"
          className="block h-[1200px] w-full border-0 min-[761px]:h-[800px]"
        />
      </div>
    </section>
  );
}
