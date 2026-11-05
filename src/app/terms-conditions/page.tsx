// src/app/terms-conditions/page.tsx
import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import LegalContent from "@/components/sections/legal/LegalContent";
import { TERMS_SECTIONS } from "@/components/sections/legal/terms-data";

export const metadata: Metadata = { title: "Terms & Conditions | AMAC Farm Supplies" };

export default function TermsPage() {
  return (
    <>
      <PageHero
        title="Terms & Conditions"
        image="https://amac.ie/wp-content/uploads/2026/06/Rectangle-132.webp"
      />
      <LegalContent sections={TERMS_SECTIONS} />
    </>
  );
}
