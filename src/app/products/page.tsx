// src/app/products/page.tsx
import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import OurSuppliers from "@/components/sections/OurSuppliers";
import Newsletter from "@/components/sections/Newsletter";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import ProductCard from "@/components/products/ProductCard";
import { PRODUCTS } from "@/components/products/products-data";

export const metadata: Metadata = {
  title: "Farm Supplies and Services | AMAC Farm Supplies",
  description:
    "From fertiliser, seed and crop protection to animal feed, bale wrap and solid fuel, AMAC keeps farms and homes across the region supplied.",
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        title="Farm Supplies and Services"
        subtitle="From fertiliser, seed and crop protection to animal feed, bale wrap and solid fuel, AMAC keeps farms and homes across the region supplied."
        image="https://amac.ie/wp-content/uploads/2026/08/Field-1.webp"
      />

      <section className="py-10 md:pt-[110px] md:pb-[110px]">
        <div className="mx-auto max-w-[1680px] px-4 sm:px-6 lg:px-0">
          <div className="text-center md:mb-[58px]">
            <SectionEyebrow label="Products & Services" />
            <h2>Fertiliser &amp; Soil Nutrition</h2>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 md:mt-0 xl:grid-cols-4">
            {PRODUCTS.map((product) => (
              <ProductCard key={product.href} {...product} />
            ))}
          </div>
        </div>
      </section>

      <OurSuppliers />
      <Newsletter />
    </>
  );
}
