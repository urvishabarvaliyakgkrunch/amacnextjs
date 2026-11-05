// src/app/agronomy-technical-advice/page.tsx
import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import StockGrid from "@/components/sections/StockGrid";
import InfoSplitSection from "@/components/sections/InfoSplitSection";
import Newsletter from "@/components/sections/Newsletter";
import { AGRONOMY_STOCK, AGRONOMY_INFO } from "@/components/products/pages/agronomy-data";

export const metadata: Metadata = {
  title: "Agronomy & Crop Advice in East Cork | AMAC",
  description:
    "AMAC is more than a supplier. Our team gives hands-on agronomy advice to farmers across East Cork, built on local knowledge since 2007.",
};

export default function AgronomyTechnicalAdvicePage() {
  return (
    <>
      <PageHero
        title="Agronomy & Technical Advice, East Cork"
        subtitle="AMAC is more than a supplier. Our team gives hands-on agronomy advice to farmers across East Cork, built on local knowledge since 2007. We know the ground, the weather and the crops, and we help you get more from every input."
        image="https://amac.ie/wp-content/uploads/2026/09/DM1_4304-Spring-Barley-Straw-Baled-2048x1366.jpg"
      />

      <StockGrid
        eyebrow="Our Advice"
        title="What we advise on"
        subtitle="Everything you need to feed the soil and drive grass and crop growth."
        cards={AGRONOMY_STOCK}
        columns={5}
      />

      <InfoSplitSection cards={AGRONOMY_INFO} />

      <Newsletter />
    </>
  );
}
