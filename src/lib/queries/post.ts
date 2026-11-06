// src/lib/queries/post.ts
import { gql } from "@/lib/graphql";
import type { Post, PostSummary } from "@/types/post";
import { imageOf, POST_FIELDS, stripHtml, toSummary, type GqlPost } from "./mapPost";

const GET_POSTS = `
  query GetPosts($first: Int!) {
    posts(first: $first) { nodes { ${POST_FIELDS} } }
  }
`;

const GET_POST = `
  query GetPost($slug: ID!) {
    post(id: $slug, idType: SLUG) { ${POST_FIELDS} }
  }
`;

// 1 hour — same cadence as .clauderules H5 for posts; /api/revalidate clears it sooner.
export async function getPosts(first = 24): Promise<PostSummary[]> {
  const data = await gql<{ posts: { nodes: GqlPost[] } }>(GET_POSTS, { first }, { revalidate: 3600 });
  return data.posts.nodes.map(toSummary);
}

// Single post shows the excerpt as intro paragraphs, one per <p>
function toParagraphs(html: string) {
  const parts = html.match(/<p[^>]*>[\s\S]*?<\/p>/g) ?? [html];
  return parts.map(stripHtml).filter(Boolean);
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const data = await gql<{ post: GqlPost | null }>(GET_POST, { slug }, { revalidate: 3600 });
  const p = data.post;
  if (!p) return null;
  return {
    title: p.title,
    slug: p.slug,
    intro: toParagraphs(p.excerpt),
    image: imageOf(p),
    imageAlt: p.featuredImage?.node?.altText ?? "",
  };
}

// Build-time list so every known post is prerendered and opens instantly
export async function getPostSlugs(): Promise<string[]> {
  const data = await gql<{ posts: { nodes: { slug: string }[] } }>(
    `query GetPostSlugs { posts(first: 100) { nodes { slug } } }`,
    {},
    { revalidate: 3600 },
  );
  return data.posts.nodes.map((p) => p.slug);
}
