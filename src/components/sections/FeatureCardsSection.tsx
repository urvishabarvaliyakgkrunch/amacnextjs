// src/components/sections/FeatureCardsSection.tsx
import { MAX_WIDTH, SIDE_PADDING } from "@/components/layout/layout-classes";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import type { FeatureCardData } from "@/types/cards";

type FeatureCardsSectionProps = {
  eyebrow: string;
  title: string;
  cards: FeatureCardData[];
  backgroundImage?: string;
  shadow?: boolean;
};

// Shared "eyebrow + heading + 4 icon cards" block — About uses it for Our Values and Why Farmers Choose AMAC
export default function FeatureCardsSection({ eyebrow, title, cards, backgroundImage, shadow }: FeatureCardsSectionProps) {
  return (
    <section
      className={`bg-cover bg-[position:50%_100%] bg-no-repeat py-10 md:py-[60px] lg:py-[110px] ${SIDE_PADDING}`}
      style={backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : undefined}
    >
      <div className={MAX_WIDTH}>
        <div className="text-center">
          <SectionEyebrow label={eyebrow} uppercase />
          <h2 className="text-black max-md:text-[30px] max-md:leading-[38px]">{title}</h2>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-[58px] xl:grid-cols-4">
          {cards.map((card) => (
            <div
              key={card.title}
              className={`group flex h-full flex-col items-center rounded-[10px] bg-white p-5 text-center transition-colors duration-300 hover:bg-primary ${shadow ? "shadow-[var(--shadow-card)]" : ""}`}
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
              <h4 className="mt-5 mb-5 font-sans text-xl leading-[22px] font-bold text-primary transition-colors duration-300 group-hover:text-white">
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
