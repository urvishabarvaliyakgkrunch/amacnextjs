// src/app/blogs/page.tsx
import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import Newsletter from "@/components/sections/Newsletter";
import BlogGrid from "@/components/sections/blog/BlogGrid";
import { getPosts } from "@/lib/queries/post";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "News and Advice | AMAC",
  description: "Seasonal updates, crop notes and practical information from the AMAC team.",
};

export default async function BlogsPage() {
  const posts = await getPosts();
  return (
    <>
      <PageHero imagePosition="center"
        title="News and Advice"
        subtitle="Seasonal updates, crop notes and practical information from the AMAC team."
        image="https://amac.ie/wp-content/uploads/2026/08/DM1_4303.webp"
      />
      <BlogGrid posts={posts} />
      <Newsletter />
    </>
  );
}
