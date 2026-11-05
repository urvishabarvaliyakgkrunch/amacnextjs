// src/components/sections/blog/blog-data.ts
import type { PostSummary } from "@/types/post";

const UPLOADS = "https://amac.ie/wp-content/uploads";
const EXCERPT =
  "Harvest 2026 in East Cork: An Early Finish and a Mixed Picture Across Crops Harvest 2026 arrived early in East Cork and progressed at a pace few would have expected at the start of the season. Winter barley cutting began around 11 July, while sustained temperatures above 20°C through much of July accelerated ripening across […]";

// Hardcoded until WPGraphQL is active on amac.ie (graphql endpoint returns 404)
export const BLOG_POSTS: PostSummary[] = [
  {
    title: "Harvest 2026",
    href: "/harvest-2026-east-cork-crop-grain-update",
    date: "18 August 2026",
    excerpt: EXCERPT,
    image: `${UPLOADS}/2026/08/08-combine-harvest-495x400.webp`,
  },
];

export const CATEGORIES: Record<string, { title: string; description: string; posts: PostSummary[] }> = {
  autumn: {
    title: "Autumn",
    description:
      "Get ready for the changing season with expert tips on harvesting, winter crop preparation, soil care, machinery maintenance, and planning ahead for colder weather.",
    posts: [{ ...BLOG_POSTS[0], image: `${UPLOADS}/2026/08/08-combine-harvest.webp` }],
  },
};

export const CATEGORY_HERO_IMAGE = `${UPLOADS}/2026/06/Rectangle-132.webp`;
