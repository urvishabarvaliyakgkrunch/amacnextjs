// src/app/areas-we-serve/page.tsx
import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import Newsletter from "@/components/sections/Newsletter";
import AreasHubs from "@/components/sections/areas/AreasHubs";

export const metadata: Metadata = {
  title: "Farm Supply Delivery Areas | AMAC Farm Supplies",
  description: "From our yard in Midleton, AMAC supplies farms across East Cork, North Cork, West Cork, West Waterford and South Limerick.",
};

const HERO_TEXT = [
  "From our yard in Midleton, we supply farms in East Cork, North Cork, Bandon and surrounding West Cork areas, West Waterford, and Croom and surrounding South Limerick areas.",
  "Bulk feed is delivered through Roches and Grennans; bagged feed is delivered by AMAC’s own lorries. Contact our team to arrange delivery to your farm. Solid fuel delivery covers Midleton, Cork City, Youghal and the areas in between, with a delivery charge.",
];

export default function AreasWeServePage() {
  return (
    <>
      <PageHero title="Areas We Serve" subtitle={HERO_TEXT} image="https://amac.ie/wp-content/uploads/2026/08/testing.webp" />
      <AreasHubs />
      <Newsletter />
    </>
  );
}
