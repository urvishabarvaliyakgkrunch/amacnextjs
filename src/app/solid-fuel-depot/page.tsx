// src/app/solid-fuel-depot/page.tsx
import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import StockGrid from "@/components/sections/StockGrid";
import InfoSplitSection from "@/components/sections/InfoSplitSection";
import Newsletter from "@/components/sections/Newsletter";
import { FUEL_STOCK, FUEL_INFO } from "@/components/products/pages/solid-fuel-data";

export const metadata: Metadata = {
  title: "Smokeless Coal & Firewood in Midleton | AMAC",
  description:
    "Our Solid Fuel Depot keeps homes warm across East Cork. We stock smokeless coal, hardwood and softwood timber, with delivery across Midleton, Cork City and Youghal.",
};

export default function SolidFuelDepotPage() {
  return (
    <>
      <PageHero
        title="Solid Fuel Depot, Midleton"
        subtitle="Our Solid Fuel Depot keeps homes warm across East Cork. We stock smokeless coal, hardwood and softwood timber, with delivery across Midleton, Cork City and Youghal. Our ash, birch and oak hardwood is available in 22-litre net bags and 1.2 m³ crates."
        image="https://amac.ie/wp-content/uploads/2026/06/ChatGPT-Image-Jun-1-2026-06_08_06-PM.webp"
      />

      <StockGrid
        eyebrow="Our Products"
        title="What we stock"
        subtitle="Reliable solid fuel for homes and businesses across East Cork."
        cards={FUEL_STOCK}
        columns={4}
      />

      <InfoSplitSection
        image="https://amac.ie/wp-content/uploads/2026/06/Smokeless-coal-1-1030x686.webp"
        heading="Stock can change throughout the year, so talk to us about the best option for your home or business."
        paragraph="Choose from smokeless coal, hardwood and softwood timber, available in convenient bags and crates. Our team can advise on current stock and arrange delivery across the local area."
        cards={FUEL_INFO}
      />

      <Newsletter
        title="Talk to the team"
        subtitle="Need solid fuel for your home or business? Call AMAC on 021 463 0683 or contact our team for current stock, pricing and delivery information."
      />
    </>
  );
}
