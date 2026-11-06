// src/app/silage-bale-plastic-netting/page.tsx
import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import StockGrid from "@/components/sections/StockGrid";
import InfoSplitSection from "@/components/sections/InfoSplitSection";
import OurProducts from "@/components/sections/OurProducts";
import Newsletter from "@/components/sections/Newsletter";
import { SILAGE_STOCK, SILAGE_INFO } from "@/components/products/pages/silage-data";

export const metadata: Metadata = {
  title: "Silage Wrap & Bale Netting in East Cork | AMAC",
  description:
    "When the mowers are out, you need wrap and netting ready to go. AMAC stocks silage bale plastic, wrap and netting from Zeus and Barbier, on the shelf for the East Cork silage season.",
};

export default function SilageBalePlasticNettingPage() {
  return (
    <>
      <PageHero imagePosition="center"
        tall
        title="Silage Bale Plastic & Netting, East Cork"
        subtitle="When the mowers are out, you need wrap and netting ready to go. AMAC stocks silage bale plastic, wrap and netting from Zeus and Barbier, on the shelf for the East Cork silage season."
        image="https://amac.ie/wp-content/uploads/2026/06/ChatGPT-Image-Jun-1-2026-06_03_43-PM.webp"
      />

      <StockGrid
        eyebrow="Our Products"
        title="What we stock"
        subtitle="Everything you need for secure, reliable silage and bale protection."
        cards={SILAGE_STOCK}
        columns={3}
      />

      <InfoSplitSection
        image="https://amac.ie/wp-content/uploads/2026/07/fxobcter2kgoqo9fzjnm-1030x687.webp"
        cards={SILAGE_INFO}
      />

      <OurProducts />

      <Newsletter
        title="Talk to the team"
        subtitle="Need silage plastic, netting or advice on the right product? Call AMAC on 021 463 0683 or contact our team and we'll be happy to help."
      />
    </>
  );
}
