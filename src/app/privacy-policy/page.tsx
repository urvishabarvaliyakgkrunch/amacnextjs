// src/app/privacy-policy/page.tsx
import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import LegalContent from "@/components/sections/legal/LegalContent";
import { PRIVACY_SECTIONS } from "@/components/sections/legal/privacy-data";

export const metadata: Metadata = { title: "Privacy Policy | AMAC Farm Supplies" };

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        title="Privacy Policy"
        subtitle={[
          "Last updated: 20 October 2026",
          "This policy explains how AMAC Farm Supplies Ltd. uses personal information collected through amac.ie, including website enquiries, newsletter sign-ups and optional online services.",
        ]}
        image="https://amac.ie/wp-content/uploads/2026/06/Rectangle-132.webp"
      />
      <LegalContent sections={PRIVACY_SECTIONS} />
    </>
  );
}
