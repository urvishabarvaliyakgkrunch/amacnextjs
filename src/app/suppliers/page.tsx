// src/app/suppliers/page.tsx
import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import Newsletter from "@/components/sections/Newsletter";
import OurSuppliers from "@/components/sections/OurSuppliers";
import PartnershipSection from "@/components/sections/suppliers/PartnershipSection";

export const metadata: Metadata = {
  title: "Brands We Stock | AMAC Farm Supplies, Midleton",
  description: "Trusted products for local farms, backed by advice from the AMAC team.",
};

export default function SuppliersPage() {
  return (
    <>
      <PageHero imagePosition="center"
        title="Brands We Stock"
        subtitle="Trusted products for local farms, backed by advice from the AMAC team."
        image="https://amac.ie/wp-content/uploads/2026/08/DM1_4410.webp"
      />
      <PartnershipSection />
      <OurSuppliers />
      <Newsletter title="Brands We Work With" />
    </>
  );
}
