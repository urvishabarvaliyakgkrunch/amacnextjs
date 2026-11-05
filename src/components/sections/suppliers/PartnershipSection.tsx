// src/components/sections/suppliers/PartnershipSection.tsx
import { MAX_WIDTH, SIDE_PADDING } from "@/components/layout/layout-classes";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import type { FeatureCardData } from "@/types/cards";

const ICONS = "/icons/about";

// Icons borrowed from the About page set until the Suppliers-page SVGs are exported
const COMMITMENTS: FeatureCardData[] = [
  { title: "Quality Assurance", icon: `${ICONS}/quality.svg`, text: "All our suppliers meet strict quality standards to ensure safe and effective solutions." },
  { title: "Long-Term Partnerships", icon: `${ICONS}/leadership.svg`, text: "We build trusted relationships based on reliability, transparency, and shared growth." },
  { title: "Sustainable Focus", icon: `${ICONS}/sustainable.svg`, text: "Our partners share our vision for sustainable agriculture and environmental responsibility." },
  { title: "Innovation Driven", icon: `${ICONS}/innovation.svg`, text: "We collaborate with global leaders to bring innovative solutions to our customers." },
];

export default function PartnershipSection() {
  return (
    <section
      className={`bg-cover bg-bottom bg-no-repeat py-10 md:py-[90px] ${SIDE_PADDING}`}
      style={{ backgroundImage: "url(https://amac.ie/wp-content/uploads/2026/05/Frame-3384402.png)" }}
    >
      <div className={MAX_WIDTH}>
        <div className="mx-auto text-center">
          <SectionEyebrow label="Partnership Commitment" uppercase />
          <h2 className="text-black max-md:text-[30px] max-md:leading-[38px]">Products We Know and Stand Over</h2>
          <p className="mx-auto mt-5 max-w-[580px] text-base leading-[22px] text-ink">
            We work with established suppliers across fertiliser, seed, crop protection, animal feed and farm essentials. We choose products for quality, reliability and suitability for local conditions. We’ll help you select what fits your farm.
          </p>
        </div>
        <div className="mx-auto mt-8 grid max-w-[1580px] grid-cols-1 gap-[25px] sm:grid-cols-2 md:mt-[50px] xl:grid-cols-4">
          {COMMITMENTS.map((card) => (
            <div
              key={card.title}
              className={`group flex h-full flex-col items-center rounded-[10px] bg-white p-[30px] text-center transition-colors duration-300 hover:bg-primary border border-card-border`}
            >
              <span
                aria-hidden="true"
                className="block shrink-0 bg-current text-primary transition-colors duration-300 group-hover:text-white"
                style={{
                  width: 60,
                  height: 60,
                  maskImage: `url(${card.icon})`,
                  WebkitMaskImage: `url(${card.icon})`,
                  maskSize: "contain",
                  WebkitMaskSize: "contain",
                  maskRepeat: "no-repeat",
                  WebkitMaskRepeat: "no-repeat",
                }}
              />
              <h4 className="mt-5 mb-5 font-sans text-xl leading-[22px] font-bold text-secondary transition-colors duration-300 group-hover:text-white">
                {card.title}
              </h4>
              <p className="text-base leading-6 text-ink transition-colors duration-300 group-hover:text-white">{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
