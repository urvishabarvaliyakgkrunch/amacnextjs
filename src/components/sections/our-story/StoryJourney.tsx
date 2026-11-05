// src/components/sections/our-story/StoryJourney.tsx
import Image from "next/image";
import { MAX_WIDTH, SIDE_PADDING } from "@/components/layout/layout-classes";
import SectionEyebrow from "@/components/ui/SectionEyebrow";

const PARAGRAPHS = [
  "AMAC Farm Supplies is a progressive agricultural trading and solid fuel business based in Townspark, Midleton, Co. Cork.",
  "This successful and well-established business is owned and managed by Richard McCarthy and Aidan Murphy.",
  "Established in 2006, AMAC offers an extensive range of certified seed, including forage, grass and cereals, to livestock and tillage farmers. All leading agricultural chemical brands are available with a prompt delivery service.",
  "These products are complemented by an excellent crop advisory service, ensuring farmers receive up-to-date information and can maximise crop yield and quality.",
  "Grain buying is an integral part of the business, supplying barley to Irish Distillers in Midleton for the production of world-famous Jameson whiskey.",
];

export default function StoryJourney() {
  return (
    <section className={`bg-card-bg py-[60px] md:py-[110px] ${SIDE_PADDING}`}>
      <div className={MAX_WIDTH}>
        <SectionEyebrow align="start" uppercase label="The Journey Since 2006" />
        <h2 className="text-black max-md:text-[30px] max-lg:text-[38px] max-lg:leading-[1.2]">
          Founded on Expertise and Local Community Trust
        </h2>

        {/* Live renders the group photo at its native 3:2 ratio across the full container */}
        <div className="relative mt-6 aspect-[3/2] w-full overflow-hidden">
          <Image
            src="https://amac.ie/wp-content/uploads/2026/10/Our-Story-Group-Website.jpg"
            alt="The AMAC Farm Supplies team"
            fill
            className="object-cover"
            sizes="(min-width: 1840px) 1680px, 100vw"
          />
        </div>

        <div className="mt-8 flex flex-col gap-[14px] text-ink">
          {PARAGRAPHS.map((text) => (
            <p key={text}>{text}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
