// src/app/animal-feed/page.tsx
import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import StockGrid from "@/components/sections/StockGrid";
import InfoSplitSection from "@/components/sections/InfoSplitSection";
import OurSuppliers from "@/components/sections/OurSuppliers";
import OurProducts from "@/components/sections/OurProducts";
import Newsletter from "@/components/sections/Newsletter";
import { FEED_STOCK, FEED_SUPPLY, FEED_INFO } from "@/components/products/pages/animal-feed-data";

export const metadata: Metadata = {
  title: "Animal Feed Suppliers in East Cork | AMAC",
  description:
    "AMAC is an authorised feed agent for Grennans and Roches Feed. We supply dairy, beef, sheep and equine rations in bulk or bags, with delivery to your yard.",
};

export default function AnimalFeedPage() {
  return (
    <>
      <PageHero
        tall
        title="Animal Feed Suppliers, East Cork"
        subtitle="AMAC is an authorised feed agent for Grennans and Roches Feed. We supply dairy, beef, sheep and equine rations in bulk or bags, with delivery to your yard."
        image="https://amac.ie/wp-content/uploads/2026/06/feed_cow.webp"
        link={{ label: "View delivery areas.", href: "/areas-we-serve" }}
      />

      <StockGrid
        eyebrow="Our Products"
        title="What we stock"
        subtitle="Feed solutions for every stage of livestock production."
        cards={FEED_STOCK}
        columns={4}
      />

      <StockGrid eyebrow="How We Supply" title="Animal Feed Supply Options" subtitle="Available in bulk or bags, with delivery options to suit your farm." cards={FEED_SUPPLY} columns={2} wheatBg={false} />

      <OurSuppliers
        title="Brands we work with"
        subtitle="We stock trusted names and help you choose feed to suit your livestock."
      />

      <InfoSplitSection image="https://amac.ie/wp-content/uploads/2026/07/fxobcter2kgoqo9fzjnm-1030x687.webp" cards={FEED_INFO} />

      <OurProducts />

      <Newsletter
        title="Talk to the team"
        subtitle="Need advice on the right feed for your livestock? Call AMAC on 021 463 0683 or contact our team and we'll be happy to help."
      />
    </>
  );
}
