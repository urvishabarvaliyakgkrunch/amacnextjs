// src/types/post.ts
export type PostSummary = {
  title: string;
  href: string;
  date: string;
  excerpt: string;
  image: string;
};

export type Post = {
  title: string;
  slug: string;
  intro: string[];
  image: string;
  imageAlt: string;
};

export type PostCategory = {
  title: string;
  description: string;
  posts: PostSummary[];
};
