// src/app/our-story/page.tsx
import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import Newsletter from "@/components/sections/Newsletter";
import StoryJourney from "@/components/sections/our-story/StoryJourney";

export const metadata: Metadata = {
  title: "Our Story: Serving Farmers Since 2006 | AMAC",
  description:
    "Founded in Midleton in 2006 by Richard McCarthy and Aidan Murphy, AMAC supplies farm essentials, animal feed and solid fuel, backed by practical local advice.",
};

export default function OurStoryPage() {
  return (
    <>
      <PageHero imagePosition="center"
        title="Our Story"
        subtitle="Founded in Midleton in 2006 by Richard McCarthy and Aidan Murphy, AMAC supplies farm essentials, animal feed and solid fuel, backed by practical local advice."
        image="https://amac.ie/wp-content/uploads/2026/08/store.webp"
      />
      <StoryJourney />
      <Newsletter />
    </>
  );
}
