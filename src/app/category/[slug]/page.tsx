// src/app/category/[slug]/page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHero from "@/components/sections/PageHero";
import Newsletter from "@/components/sections/Newsletter";
import BlogGrid from "@/components/sections/blog/BlogGrid";
import { getCategoryBySlug, getCategorySlugs } from "@/lib/queries/category";

const CATEGORY_HERO_IMAGE = "https://amac.ie/wp-content/uploads/2026/06/Rectangle-132.webp";

export const revalidate = 3600;

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return (await getCategorySlugs()).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const category = await getCategoryBySlug((await params).slug);
  return category ? { title: `${category.title} | AMAC`, description: category.description } : {};
}

export default async function CategoryPage({ params }: Props) {
  const category = await getCategoryBySlug((await params).slug);
  if (!category) notFound();

  return (
    <>
      <PageHero title={category.title} subtitle={category.description || undefined} image={CATEGORY_HERO_IMAGE} solidOverlay />
      <BlogGrid posts={category.posts} archive />
      <Newsletter />
    </>
  );
}
