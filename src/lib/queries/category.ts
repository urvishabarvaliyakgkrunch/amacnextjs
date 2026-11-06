// src/lib/queries/category.ts
import { gql } from "@/lib/graphql";
import type { PostCategory } from "@/types/post";
import { POST_FIELDS, toSummary, type GqlPost } from "./mapPost";

const GET_CATEGORY = `
  query GetCategory($slug: ID!) {
    category(id: $slug, idType: SLUG) {
      name
      description
      posts(first: 24) { nodes { ${POST_FIELDS} } }
    }
  }
`;

type CategoryData = {
  category: { name: string; description: string | null; posts: { nodes: GqlPost[] } } | null;
};

// 1 hour — same cadence as the posts list.
export async function getCategoryBySlug(slug: string): Promise<PostCategory | null> {
  const { category: c } = await gql<CategoryData>(GET_CATEGORY, { slug }, { revalidate: 3600 });
  if (!c) return null;
  return { title: c.name, description: c.description ?? "", posts: c.posts.nodes.map(toSummary) };
}

// Build-time list so every known category is prerendered and opens instantly
export async function getCategorySlugs(): Promise<string[]> {
  const data = await gql<{ categories: { nodes: { slug: string }[] } }>(
    `query GetCategorySlugs { categories(first: 100) { nodes { slug } } }`,
    {},
    { revalidate: 3600 },
  );
  return data.categories.nodes.map((c) => c.slug);
}
