// src/app/[slug]/page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHero from "@/components/sections/PageHero";
import ArticleBody from "@/components/sections/blog/ArticleBody";
import { HARVEST_BLOCKS } from "@/components/sections/blog/harvest-2026-data";
import { getPostBySlug, getPostSlugs } from "@/lib/queries/post";

export const revalidate = 3600;

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return (await getPostSlugs()).map((slug) => ({ slug }));
}

// Both functions call the same cached getPostBySlug, so WordPress is queried once per post
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPostBySlug((await params).slug);
  return post ? { title: `${post.title} | AMAC` } : {};
}

export default async function PostPage({ params }: Props) {
  const post = await getPostBySlug((await params).slug);
  if (!post) notFound();

  // Intro comes from the WP excerpt; the sections below keep the existing article design
  const blocks = [...post.intro.map((text) => ({ type: "p" as const, text })), ...HARVEST_BLOCKS.slice(2)];

  return (
    <>
      <PageHero imagePosition="center" title={post.title} image={post.image} post />
      <ArticleBody blocks={blocks} />
    </>
  );
}
