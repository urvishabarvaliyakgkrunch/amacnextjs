// src/components/sections/InfoSplitSection.tsx
import Image from "next/image";
import { SIDE_PADDING } from "@/components/layout/layout-classes";

export type InfoCardData = {
  title: string;
  text: string;
  svg: string;
};

type InfoSplitSectionProps = {
  image?: string;
  heading?: string;
  paragraph?: string;
  cards: InfoCardData[];
};

// tan "talk to the team" block reused across product sub-pages — same bg texture/layout as home/TechnicalServices.tsx
export default function InfoSplitSection({ image, heading, paragraph, cards }: InfoSplitSectionProps) {
  return (
    <section
      className={`bg-cover bg-center bg-no-repeat py-10 min-[768px]:max-[1024px]:py-[60px] min-[1025px]:max-[1366px]:py-[120px] min-[1367px]:py-[156px] ${SIDE_PADDING}`}
      style={{ backgroundImage: "url(https://amac.ie/wp-content/uploads/2026/05/Frame-2085660609.png)" }}
    >
      <div className="mx-auto flex max-w-[1468px] flex-col gap-[30px] lg:flex-row lg:gap-[68px]">
        {image ? (
          <div className="relative min-h-[300px] overflow-hidden rounded-[10px] sm:min-h-[450px] lg:min-h-[600px] lg:w-[calc(50%-34px)] lg:shrink-0">
            <Image src={image} alt="" fill className="object-cover" sizes="(min-width: 1024px) 50vw, 100vw" />
          </div>
        ) : null}

        <div className={`flex flex-col justify-center gap-12 ${image ? "lg:w-[calc(50%-34px)]" : "lg:ml-auto lg:w-[58%]"}`}>
          {heading || paragraph ? (
            <div>
              {heading ? <h3 className="text-[36px] leading-[40px] font-bold text-white max-md:text-[28px] max-md:leading-[34px]">{heading}</h3> : null}
              {paragraph ? <p className="mt-[33.6px] mb-[13.6px] max-w-[700px] leading-[26.4px] text-white">{paragraph}</p> : null}
            </div>
          ) : null}

          <div className="flex flex-col gap-5">
            {cards.map((card) => (
              <div key={card.title} className="group flex flex-col gap-[30px] rounded-xl bg-white p-[30px] transition-colors duration-300 hover:bg-primary sm:flex-row">
                <div aria-hidden="true" className="shrink-0 leading-[26.4px] [&_svg]:inline [&_svg]:align-baseline group-hover:[&_[fill]:not([fill=none])]:fill-white group-hover:[&_[stroke]:not([stroke=none])]:stroke-white" dangerouslySetInnerHTML={{ __html: card.svg }} />
                <div className="flex flex-col gap-2.5">
                  <h4 className="font-sans text-xl leading-5 font-semibold text-black transition-colors duration-300 group-hover:text-white">{card.title}</h4>
                  <p className="mt-[13.6px] text-base leading-[26.4px] text-[color:var(--color-muted)] transition-colors duration-300 group-hover:text-white">{card.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
