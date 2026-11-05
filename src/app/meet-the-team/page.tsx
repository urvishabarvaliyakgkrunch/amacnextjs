// src/app/meet-the-team/page.tsx
import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import Newsletter from "@/components/sections/Newsletter";
import TeamGrid from "@/components/sections/team/TeamGrid";

export const metadata: Metadata = {
  title: "Meet the Team | AMAC Farm Supplies, Midleton",
  description:
    "The dedicated professionals behind AMAC Farm Supplies, bringing decades of combined agricultural experience to every conversation.",
};

export default function MeetTheTeamPage() {
  return (
    <>
      <PageHero
        title="Meet the Team"
        subtitle="The dedicated professionals behind AMAC Farm Supplies, bringing decades of combined agricultural experience to every conversation."
        image="https://amac.ie/wp-content/uploads/2026/08/team2.webp"
      />
      <TeamGrid />
      <Newsletter />
    </>
  );
}
