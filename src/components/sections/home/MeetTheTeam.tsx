// src/components/sections/home/MeetTheTeam.tsx
import Image from "next/image";
import Link from "next/link";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import { TEAM } from "./home-data";

// Live uses an autoplaying looping Owl carousel; a CSS marquee of the list x2 gives the same loop without JS
const LOOP = [...TEAM, ...TEAM, ...TEAM, ...TEAM];

export default function MeetTheTeam() {
  return (
    <section
      className="overflow-hidden bg-card-bg bg-cover bg-center bg-no-repeat pt-10 pb-10 md:pt-[60px] md:pb-0 lg:pt-[100px] lg:pb-[44px]"
      style={{ backgroundImage: "url(https://amac.ie/wp-content/uploads/2026/05/Frame-3384445.png)" }}
    >
      <div className="px-5 text-center lg:pb-3">
        <SectionEyebrow label="MEET OUR SPECIALIST TEAM" />
        <h2 className="text-black max-md:text-[30px] max-md:leading-[38px]">Meet the People Behind AMAC</h2>
        <p className="mx-auto my-[13.6px] max-w-[700px] leading-[26.4px] text-black">
          Talk directly to people who know the products, the local ground and the demands of the season.
        </p>
      </div>

      <div className="mt-5 lg:mt-[78px]">
        <ul className="flex w-max animate-marquee gap-[25px] lg:gap-5 hover:[animation-play-state:paused]">
          {LOOP.map((member, i) => (
            <li key={`${member.name}-${i}`} aria-hidden={i >= TEAM.length} className="w-[calc(100vw-40px)] shrink-0 md:w-[calc((100vw-25px)/2)] lg:w-[calc((100vw-75px)/4)]">
              <Link href="/meet-the-team" tabIndex={i >= TEAM.length ? -1 : undefined} className="flex flex-col rounded-[10px] bg-team-bg p-5">
                <div className="relative mb-2 aspect-[478/717] w-full">
                  <Image src={member.image} alt={member.name} fill className="object-cover" sizes="457px" />
                </div>
                <div className="flex flex-col gap-[5px] bg-team-label p-3 text-left">
                  <span className="text-xs leading-3 text-white">{member.name}</span>
                  <span className="text-[10px] leading-4 text-team-sub">{member.role}</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
