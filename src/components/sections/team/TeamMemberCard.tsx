// src/components/sections/team/TeamMemberCard.tsx
import Image from "next/image";
import type { TeamMember } from "./team-data";

// Photo pokes 70px above the frame (live uses -70px margin on the image), name plate overlaps its bottom edge
export default function TeamMemberCard({ name, role, image }: TeamMember) {
  return (
    <article className="pt-[70px]">
      <div className="flex h-[337px] flex-col justify-end rounded-[10px] bg-team-bg p-5">
        <div className="relative -mt-[70px] h-[300px] w-full">
          <Image src={image} alt={name} fill className="object-contain object-bottom" sizes="(min-width: 1024px) 220px, 50vw" />
        </div>
        <div className="relative flex flex-col gap-[5px] bg-team-label p-3">
          <h3 className="text-xl leading-[22px] font-normal text-white">{name}</h3>
          <p className="text-base leading-4 text-team-sub">{role}</p>
        </div>
      </div>
    </article>
  );
}
