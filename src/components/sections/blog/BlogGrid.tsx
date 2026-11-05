// src/components/sections/blog/BlogGrid.tsx
import PostCard from "@/components/blog/PostCard";
import { MAX_WIDTH, SIDE_PADDING } from "@/components/layout/layout-classes";
import type { PostSummary } from "@/types/post";

type BlogGridProps = {
  posts: PostSummary[];
  // Category archives pad the container 80/40/20px; the main blog page uses none
  archive?: boolean;
};

export default function BlogGrid({ posts, archive }: BlogGridProps) {
  const pad = archive ? "px-5 min-[768px]:max-[1440px]:px-10 min-[1441px]:px-20" : "";
  return (
    <section className={`bg-white py-10 md:py-[60px] lg:py-[110px] ${archive ? "" : SIDE_PADDING}`}>
      <div className={`${MAX_WIDTH} ${pad}`}>
        <div className="grid grid-cols-1 gap-5 md:gap-6 min-[768px]:max-[1280px]:grid-cols-2 min-[1281px]:grid-cols-4">
          {posts.map((post) => (
            <PostCard key={post.href} {...post} />
          ))}
        </div>
      </div>
    </section>
  );
}
