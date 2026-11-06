// src/app/harvest-2026-east-cork-crop-grain-update/page.tsx
import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import ArticleBody from "@/components/sections/blog/ArticleBody";
import { HARVEST_BLOCKS, HARVEST_HERO, HARVEST_TITLE } from "@/components/sections/blog/harvest-2026-data";

export const metadata: Metadata = { title: "Harvest 2026 in East Cork: Crop and Grain Update | AMAC" };

export default function HarvestPost() {
  return (
    <>
      <PageHero imagePosition="center" title={HARVEST_TITLE} image={HARVEST_HERO} post />
      <ArticleBody blocks={HARVEST_BLOCKS} />
    </>
  );
}
