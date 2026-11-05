// src/components/sections/home/HeroStats.tsx
import Image from "next/image";
import { HERO_STATS } from "./home-data";

// White stat strip that overlaps the hero bottom by 20px (live: margin-top -20px)
export default function HeroStats() {
  return (
    <div className="relative z-10 bg-bg-alt px-5 md:px-[50px] lg:pb-[60px]">
      <div className="mx-auto grid max-w-[1388px] rounded-[10px] bg-white px-5 shadow-[var(--shadow-stats)] max-md:mt-[50px] md:-mt-5 md:grid-cols-3 md:py-5 lg:py-10 min-[1025px]:max-[1366px]:px-10 min-[1367px]:px-[100px]">
        {HERO_STATS.map((stat, i) => (
          <div
            key={stat.title}
            className={`flex items-center justify-center gap-[15px] border-divider p-5 max-md:flex-col max-md:text-center md:gap-5 md:px-2.5 md:py-2.5 lg:py-0 ${
              i < HERO_STATS.length - 1 ? "max-md:border-b md:border-r" : ""
            }`}
          >
            <div className="flex h-[47px] items-center lg:h-16"><Image src={stat.icon} alt="" width={64} height={64} className="size-10 lg:size-16" /></div>
            <div>
              <h3 className="font-sans text-base leading-6 font-black text-hero-ink max-lg:mb-2.5 lg:text-xl">{stat.title}</h3>
              <p className="text-sm leading-4 text-hero-muted lg:text-base lg:leading-6">{stat.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
