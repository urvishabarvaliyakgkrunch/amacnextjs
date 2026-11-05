// src/app/fertiliser-soil-nutrition/page.tsx
import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import StockGrid from "@/components/sections/StockGrid";
import InfoSplitSection from "@/components/sections/InfoSplitSection";
import OurSuppliers from "@/components/sections/OurSuppliers";
import OurProducts from "@/components/sections/OurProducts";
import Newsletter from "@/components/sections/Newsletter";
import { FERTILISER_STOCK, FERTILISER_INFO } from "@/components/products/pages/fertiliser-data";

export const metadata: Metadata = {
  title: "Fertiliser & Soil Nutrition in East Cork | AMAC",
  description:
    "AMAC Farm Supplies has kept East Cork farmers stocked since 2007. From our base in Midleton we supply fertiliser, grass seed, agrochemicals and soil nutrition for grassland and tillage.",
};

export default function FertiliserSoilNutritionPage() {
  return (
    <>
      <PageHero
        tall
        title="Fertiliser & Soil Nutrition Suppliers, East Cork"
        subtitle="AMAC Farm Supplies has kept East Cork farmers stocked since 2007. From our base in Midleton we supply fertiliser, grass seed, agrochemicals and soil nutrition for grassland and tillage. We also arrange soil and forage analysis. Order by the bag or in bulk, with delivery across the region."
        image="https://amac.ie/wp-content/uploads/2026/08/Fertiliser-Soil-Nutrition-Suppliers-East-Cork.webp"
      />
      <StockGrid
        eyebrow="Our Products"
        title="What we stock"
        subtitle="Lime, trace elements and minerals, plus soil and forage analysis through FBA Laboratories in Cappoquin. Results are discussed with you through AMAC's on-farm technical advice, helping you plan the next steps for your farm."
        cards={FERTILISER_STOCK}
        columns={3}
      />
      <OurSuppliers subtitle="" />

      <InfoSplitSection
        image="https://amac.ie/wp-content/uploads/2026/07/vanwithbags.webp"
        heading="From soil result to field decision"
        paragraph="Our fertiliser and soil nutrition range combines trusted products, testing and local knowledge. From macro and micronutrients to soil and forage analysis, the AMAC team can help interpret the results and plan the next step."
        cards={FERTILISER_INFO}
      />

      <OurProducts />

      <Newsletter />
    </>
  );
}
