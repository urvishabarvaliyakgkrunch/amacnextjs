// src/app/category/[slug]/page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHero from "@/components/sections/PageHero";
import Newsletter from "@/components/sections/Newsletter";
import BlogGrid from "@/components/sections/blog/BlogGrid";
import { CATEGORIES, CATEGORY_HERO_IMAGE } from "@/components/sections/blog/blog-data";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return Object.keys(CATEGORIES).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const category = CATEGORIES[(await params).slug];
  return category ? { title: `${category.title} | AMAC`, description: category.description } : {};
}

export default async function CategoryPage({ params }: Props) {
  const category = CATEGORIES[(await params).slug];
  if (!category) notFound();

  return (
    <>
      <PageHero title={category.title} subtitle={category.description} image={CATEGORY_HERO_IMAGE} solidOverlay />
      <BlogGrid posts={category.posts} archive />
      <Newsletter />
    </>
  );
}
