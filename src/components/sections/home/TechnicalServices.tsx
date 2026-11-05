// src/components/sections/home/TechnicalServices.tsx
import Image from "next/image";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import { SIDE_PADDING } from "@/components/layout/layout-classes";
import { TECH_SERVICES } from "./home-data";

export default function TechnicalServices() {
  return (
    <section
      className={`bg-cover bg-center bg-no-repeat pb-10 min-[768px]:max-[1024px]:py-[60px] min-[1025px]:max-[1366px]:py-[120px] min-[1367px]:py-[156px] ${SIDE_PADDING}`}
      style={{ backgroundImage: "url(https://amac.ie/wp-content/uploads/2026/05/Frame-2085660609.png)" }}
    >
      <div className="mx-auto flex max-w-[1468px] flex-col gap-[30px] lg:flex-row min-[1025px]:max-[1200px]:gap-10 min-[1201px]:gap-[68px]">
        <div className="relative aspect-square lg:w-1/2">
          <Image
            src="https://amac.ie/wp-content/uploads/elementor/thumbs/DM1_0491-1920w-rrgh4jk6s13ttf9o51s2rnehtbh5yfeq7ftrea00jw.webp"
            alt="AMAC agronomist in the field"
            fill
            className="rounded-2xl object-cover"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        </div>

        <div className="flex flex-col justify-center gap-5 md:gap-12 lg:w-1/2">
          <div>
            <SectionEyebrow label="Technical Services" uppercase align="start" tone="white" />
            <h2 className="text-white max-md:text-[30px] max-md:leading-[38px]">Practical Advice for Your Farm</h2>
            <p className="mt-2.5 max-w-[700px] text-white">
              Talk to our team about crop agronomy, seed selection, fertiliser planning, crop protection and animal feed. We’ll help you choose what fits your farm and the season.
            </p>
          </div>
          <div className="grid grow grid-cols-1 gap-5 md:grid-cols-2 md:auto-rows-fr">
            {TECH_SERVICES.map((service) => (
              <div
                key={service.title}
                className="group relative isolate flex flex-col overflow-hidden rounded-xl bg-white bg-cover bg-center gap-2.5 p-5"
              >
                <span
                  aria-hidden="true"
                  className={`absolute inset-0 -z-10 bg-white transition-all duration-300 group-hover:bg-primary`}
                />
                <span
                  aria-hidden="true"
                  className="block shrink-0 bg-current text-icon-dark transition-colors duration-300 group-hover:text-white mb-[5px]"
                  style={{
                    width: service.iconSize,
                    height: service.iconSize,
                    maskImage: `url(${service.icon})`,
                    WebkitMaskImage: `url(${service.icon})`,
                    maskSize: "contain",
                    WebkitMaskSize: "contain",
                    maskRepeat: "no-repeat",
                    WebkitMaskRepeat: "no-repeat",
                  }}
                />
                <h4 className="font-sans text-xl leading-5 font-semibold text-black transition-colors duration-300 group-hover:text-white">{service.title}</h4>
                <p className="text-base leading-[26.4px] transition-colors duration-300 group-hover:text-white">{service.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
