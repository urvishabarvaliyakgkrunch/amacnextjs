// src/components/sections/team/TeamGrid.tsx
import { MAX_WIDTH, SIDE_PADDING } from "@/components/layout/layout-classes";
import TeamMemberCard from "./TeamMemberCard";
import TeamProfileCard from "./TeamProfileCard";
import { TEAM_MEMBERS, TEAM_PROFILES } from "./team-data";

// Live: 110px section padding, 78px between the two grids, 30px/26px grid gaps
export default function TeamGrid() {
  return (
    <section className={`py-10 md:py-[60px] lg:py-[110px] ${SIDE_PADDING}`}>
      <div className={`${MAX_WIDTH} flex flex-col gap-10 lg:gap-[78px]`}>
        <div className="grid grid-cols-1 gap-x-[26px] gap-y-[30px] xl:grid-cols-2">
          {TEAM_PROFILES.map((member) => (
            <TeamProfileCard key={member.email} {...member} />
          ))}
        </div>
        <div className="grid grid-cols-1 gap-x-[26px] gap-y-[30px] sm:grid-cols-2 lg:grid-cols-3">
          {TEAM_MEMBERS.map((member) => (
            <TeamMemberCard key={member.name} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
}
