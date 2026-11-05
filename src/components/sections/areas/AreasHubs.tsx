// src/components/sections/areas/AreasHubs.tsx
import { MAX_WIDTH, SIDE_PADDING } from "@/components/layout/layout-classes";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import AreaCard from "./AreaCard";
import MapConsent from "./MapConsent";
import { AREA_HUBS } from "./areas-data";

export default function AreasHubs() {
  return (
    <>
      <section
        className={`bg-card-bg py-10 md:py-[110px] ${SIDE_PADDING}`}
      >
        <div className={MAX_WIDTH}>
          <div className="text-center">
            <SectionEyebrow label="Areas We Serve" />
            <h2 className="text-black">Our Primary Service Hubs</h2>
          </div>
          <div className="mt-8 md:mt-[50px]">
            <MapConsent />
          </div>
        </div>
      </section>
      <section className={`py-10 md:py-[90px] ${SIDE_PADDING}`}>
        <div className={`${MAX_WIDTH} grid grid-cols-1 gap-[30px] sm:grid-cols-2 xl:grid-cols-4`}>
          {AREA_HUBS.map((hub) => (
            <AreaCard key={hub.badge} {...hub} />
          ))}
        </div>
      </section>
    </>
  );
}
