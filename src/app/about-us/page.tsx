// src/app/about-us/page.tsx
import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import FeatureCardsSection from "@/components/sections/FeatureCardsSection";
import Newsletter from "@/components/sections/Newsletter";
import AboutStory from "@/components/sections/about/AboutStory";
import { ABOUT_VALUES, WHY_CHOOSE } from "@/components/sections/about/about-data";

export const metadata: Metadata = {
  title: "About AMAC Farm Supplies | Midleton, East Cork",
  description:
    "AMAC is a locally owned agricultural supplies business based in Midleton, serving farmers across East Cork and surrounding areas since 2006.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About AMAC"
        subtitle="AMAC is a locally owned agricultural supplies business based in Midleton, serving farmers across East Cork and surrounding areas since 2006."
        image="https://amac.ie/wp-content/uploads/2026/08/about-office.webp"
      />
      <AboutStory />
      <FeatureCardsSection
        eyebrow="Our Values"
        title="What Customers Can Expect"
        cards={ABOUT_VALUES}
        backgroundImage="https://amac.ie/wp-content/uploads/2026/05/Group-1533211597.png"
      />
      <FeatureCardsSection eyebrow="AMAC Apart" title="Why Farmers Choose AMAC" cards={WHY_CHOOSE} shadow />
      <Newsletter />
    </>
  );
}
