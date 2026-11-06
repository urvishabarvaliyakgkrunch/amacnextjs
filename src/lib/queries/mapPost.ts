// src/lib/queries/mapPost.ts
import type { PostSummary } from "@/types/post";

// Used when a post has no featured image so the card/hero never breaks
const FALLBACK_IMAGE = "https://amac.ie/wp-content/uploads/2026/08/DM1_4303.webp";

export type GqlPost = {
  title: string;
  slug: string;
  date: string;
  excerpt: string;
  featuredImage: { node: { sourceUrl: string; altText: string } | null } | null;
};

export const POST_FIELDS = `title slug date excerpt featuredImage { node { sourceUrl altText } }`;

const dateFormat = new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "long", year: "numeric" });

// WP sends excerpt as HTML; cards and the intro show plain text
export function stripHtml(html: string) {
  return html
    .replace(/<[^>]+>/g, "")
    .replace(/&hellip;|&#8230;/g, "…")
    .replace(/&amp;/g, "&")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export const imageOf = (p: GqlPost) => p.featuredImage?.node?.sourceUrl ?? FALLBACK_IMAGE;

export function toSummary(p: GqlPost): PostSummary {
  return {
    title: p.title,
    href: `/${p.slug}`,
    date: dateFormat.format(new Date(p.date)),
    excerpt: stripHtml(p.excerpt),
    image: imageOf(p),
  };
}
