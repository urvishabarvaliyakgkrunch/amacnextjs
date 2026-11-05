// src/app/contact/page.tsx
import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import Newsletter from "@/components/sections/Newsletter";
import ContactSection from "@/components/sections/contact/ContactSection";

export const metadata: Metadata = {
  title: "Contact AMAC Farm Supplies | Midleton, Co. Cork",
  description: "Call, email or send us a message about stock, pricing, delivery or technical advice.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Talk to the AMAC Team"
        subtitle="Call, email or send us a message about stock, pricing, delivery or technical advice."
        image="https://amac.ie/wp-content/uploads/2026/08/contact-the-team2.webp"
      />
      <ContactSection />
      <Newsletter />
    </>
  );
}
