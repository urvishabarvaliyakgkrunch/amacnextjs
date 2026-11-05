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
          <div className="relative aspect-square lg:w-1/2">
            <Image src={image} alt="" fill className="rounded-2xl object-cover" sizes="(min-width: 1024px) 50vw, 100vw" />
          </div>
        ) : null}

        <div className={`flex flex-col justify-center gap-5 ${image ? "lg:w-1/2" : "lg:ml-auto lg:w-[58%]"}`}>
          {heading || paragraph ? (
            <div>
              {heading ? <h2 className="text-white max-md:text-[30px] max-md:leading-[38px]">{heading}</h2> : null}
              {paragraph ? <p className="mt-2.5 max-w-[700px] text-white">{paragraph}</p> : null}
            </div>
          ) : null}

          <div className="flex flex-col gap-5">
            {cards.map((card) => (
              <div key={card.title} className="flex flex-col gap-2.5 rounded-xl bg-white p-[30px]">
                <span
                  aria-hidden="true"
                  className="block h-[50px] w-[50px] shrink-0 [&_svg]:h-full [&_svg]:w-full"
                  dangerouslySetInnerHTML={{ __html: card.svg }}
                />
                <h4 className="font-sans text-xl leading-6 font-semibold text-black">{card.title}</h4>
                <p className="text-base leading-[26.4px] text-[color:var(--color-muted)]">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
