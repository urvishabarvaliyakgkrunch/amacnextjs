// src/components/sections/StockGrid.tsx
import { MAX_WIDTH, SIDE_PADDING } from "@/components/layout/layout-classes";
import SectionEyebrow from "@/components/ui/SectionEyebrow";

export type StockCardData = {
  title: string;
  text: string;
  svg: string;
  image?: string;
};

type StockGridProps = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  cards: StockCardData[];
  columns?: 2 | 3 | 4 | 5;
};

// same card pattern as home/WhatWeSupply.tsx — photo hidden under a white overlay until hover
const COLS: Record<number, string> = {
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-2 lg:grid-cols-3",
  4: "sm:grid-cols-2 lg:grid-cols-4",
  5: "sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5",
};

export default function StockGrid({ eyebrow, title, subtitle, cards, columns = 4 }: StockGridProps) {
  return (
    <section className={`bg-cover bg-bottom bg-no-repeat py-10 md:py-[60px] lg:py-[110px] ${SIDE_PADDING}`}>
      <div className={`${MAX_WIDTH} flex flex-col gap-[30px] lg:gap-[58px]`}>
        <div className="text-center">
          <SectionEyebrow label={eyebrow} uppercase />
          <h2 className="text-black max-md:text-[30px] max-md:leading-[38px]">{title}</h2>
          {subtitle ? <p className="mx-auto mt-3 max-w-[700px] text-[color:var(--color-muted)]">{subtitle}</p> : null}
        </div>

        <div className={`grid grid-cols-1 auto-rows-fr gap-5 ${COLS[columns]}`}>
          {cards.map((card) => (
            <div
              key={card.title}
              className="group relative isolate flex flex-col overflow-hidden rounded-xl bg-white bg-cover bg-center gap-2.5 p-5 lg:p-8"
              style={card.image ? { backgroundImage: `url(${card.image})` } : undefined}
            >
              <span
                aria-hidden="true"
                className={`absolute inset-0 -z-10 bg-white transition-all duration-300 group-hover:bg-primary ${card.image ? "group-hover:opacity-80" : ""}`}
              />
              <span
                aria-hidden="true"
                className="block h-[50px] w-[50px] shrink-0 [&_svg]:h-full [&_svg]:w-full"
                dangerouslySetInnerHTML={{ __html: card.svg }}
              />
              <h4 className="font-sans text-xl leading-5 font-semibold text-black transition-colors duration-300 group-hover:text-white">
                {card.title}
              </h4>
              <p className="text-base leading-[26.4px] text-[color:var(--color-muted)] transition-colors duration-300 group-hover:text-white">
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
