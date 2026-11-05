// src/components/sections/StockGrid.tsx
import { MAX_WIDTH, SIDE_PADDING } from "@/components/layout/layout-classes";
import SectionEyebrow from "@/components/ui/SectionEyebrow";

export type StockCardData = {
  title: string;
  text: string;
  svg: string;
  image?: string;
  // live only adds a 13.6px gap above the text on some cards (editor margin quirk)
  pGap?: boolean | number;
};

type StockGridProps = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  cards: StockCardData[];
  columns?: 2 | 3 | 4 | 5;
  // live: wheat photo behind the first grid only
  wheatBg?: boolean;
};

// same card pattern as home/WhatWeSupply.tsx — photo hidden under a white overlay until hover
const COLS: Record<number, string> = {
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-2 lg:grid-cols-3",
  4: "sm:grid-cols-2 lg:grid-cols-4",
  5: "sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5",
};

export default function StockGrid({ eyebrow, title, subtitle, cards, columns = 4, wheatBg = true }: StockGridProps) {
  return (
    <section
      className={`bg-cover bg-bottom bg-no-repeat py-10 md:py-[60px] lg:py-[110px] ${SIDE_PADDING}`}
      style={wheatBg ? { backgroundImage: "url(https://amac.ie/wp-content/uploads/2026/05/Group-1533211597.png)" } : undefined}
    >
      <div className={`${MAX_WIDTH} flex flex-col gap-[30px] lg:gap-[72px]`}>
        <div className={`mx-auto w-full max-w-[1520px] text-center ${subtitle ? "" : "lg:mb-[21px]"}`}>
          <SectionEyebrow label={eyebrow} uppercase />
          <h2 className="text-black max-md:text-[30px] max-md:leading-[38px]">{title}</h2>
          {subtitle ? <p className="mt-6 leading-[26.4px] text-[color:var(--color-muted)]">{subtitle}</p> : null}
        </div>

        <div className={`grid grid-cols-1 auto-rows-fr gap-5 ${COLS[columns]} ${columns === 2 ? "mx-auto w-full max-w-[1008px]" : ""}`}>
          {cards.map((card) => (
            <div
              key={card.title}
              className="group relative isolate flex flex-col overflow-hidden rounded-xl bg-white bg-cover bg-center gap-5 p-5 shadow-[0_0_10px_0_rgba(0,0,0,0.2)] min-[1025px]:p-8"
              style={card.image ? { backgroundImage: `url(${card.image})` } : undefined}
            >
              <span
                aria-hidden="true"
                className={`absolute inset-0 -z-10 bg-white transition-all duration-300 group-hover:bg-primary ${card.image ? "group-hover:opacity-80" : ""}`}
              />
              {/* natural svg size in a text line box, like live (52px wrapper for a 45px icon) */}
              <div aria-hidden="true" className="leading-[26.4px] transition-all fill-primary [&_svg]:inline [&_svg]:align-baseline group-hover:[&_[fill]:not([fill=none])]:fill-white group-hover:[&_[stroke]:not([stroke=none])]:stroke-white" dangerouslySetInnerHTML={{ __html: card.svg }} />
              <h4 className="font-sans text-xl leading-5 font-semibold text-black transition-colors duration-300 group-hover:text-white">
                {card.title}
              </h4>
              <p style={card.pGap ? { marginTop: card.pGap === true ? 13.6 : card.pGap } : undefined} className="text-base leading-[26.4px] text-[color:var(--color-muted)] transition-colors duration-300 group-hover:text-white">
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
