// src/app/page.tsx
import Newsletter from "@/components/sections/Newsletter";
import OurSuppliers from "@/components/sections/OurSuppliers";
import CoverageMap from "@/components/sections/home/CoverageMap";
import FeedBanner from "@/components/sections/home/FeedBanner";
import HomeHero from "@/components/sections/home/HomeHero";
import LatestPosts from "@/components/sections/home/LatestPosts";
import MeetTheTeam from "@/components/sections/home/MeetTheTeam";
import OurStory from "@/components/sections/home/OurStory";
import TechnicalServices from "@/components/sections/home/TechnicalServices";
import OurProducts from "@/components/sections/OurProducts";
import { getPosts } from "@/lib/queries/post";

export const revalidate = 3600;

export default async function Home() {
  const posts = await getPosts(4);
  return (
    <>
      <HomeHero />
      <OurStory />
      <FeedBanner />
      <OurProducts />
      <MeetTheTeam />
      <TechnicalServices />
      <OurSuppliers variant="home" />
      <CoverageMap />
      <LatestPosts posts={posts} />
      <Newsletter />
    </>
  );
}
