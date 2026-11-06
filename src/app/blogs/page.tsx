// src/app/blogs/page.tsx
import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import Newsletter from "@/components/sections/Newsletter";
import BlogGrid from "@/components/sections/blog/BlogGrid";
import { BLOG_POSTS } from "@/components/sections/blog/blog-data";

export const metadata: Metadata = {
  title: "News and Advice | AMAC",
  description: "Seasonal updates, crop notes and practical information from the AMAC team.",
};

export default function BlogsPage() {
  return (
    <>
      <PageHero imagePosition="center"
        title="News and Advice"
        subtitle="Seasonal updates, crop notes and practical information from the AMAC team."
        image="https://amac.ie/wp-content/uploads/2026/08/DM1_4303.webp"
      />
      <BlogGrid posts={BLOG_POSTS} />
      <Newsletter />
    </>
  );
}
