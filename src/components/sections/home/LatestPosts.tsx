import Link from "next/link";
// src/components/sections/home/LatestPosts.tsx
import PostCard from "@/components/blog/PostCard";
import { MAX_WIDTH, SIDE_PADDING } from "@/components/layout/layout-classes";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import type { PostSummary } from "@/types/post";

export default function LatestPosts({ posts }: { posts: PostSummary[] }) {
  return (
    <section className={`bg-white py-10 md:py-[60px] lg:pt-[110px] lg:pb-[70px] ${SIDE_PADDING}`}>
      <div className={`${MAX_WIDTH} flex flex-col gap-5`}>
        <div className="text-center">
          <SectionEyebrow label="Blog & News" uppercase />
          <h2 className="text-black max-md:text-[30px] max-md:leading-[38px]">Latest from AMAC</h2>
        </div>

        <div className="grid grid-cols-1 gap-5 py-2.5 md:gap-6 md:py-7 min-[768px]:max-[1280px]:grid-cols-2 min-[1281px]:grid-cols-4">
          {posts.map((post) => (
            <PostCard key={post.href} {...post} />
          ))}
        </div>

        <div className="flex justify-center">
          <Link
            href="/blogs"
            className="inline-flex items-center gap-3 rounded-[50px] px-[30px] py-4 text-base leading-6 font-semibold shadow-[var(--shadow-button)] transition-all duration-400 text-white [background:var(--gradient-primary)] hover:[background:var(--gradient-black)]"
          >
            View Blogs
            <svg width="18" height="13" viewBox="0 0 18 13" fill="none" aria-hidden="true">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.7197 0.21967C11.0126 -0.0732233 11.4874 -0.0732233 11.7803 0.21967L17.1389 5.57825C17.5099 5.94925 17.5099 6.55075 17.1389 6.92175L11.7803 12.2803C11.4874 12.5732 11.0126 12.5732 10.7197 12.2803C10.4268 11.9874 10.4268 11.5126 10.7197 11.2197L14.9393 7H0.75C0.335786 7 0 6.66421 0 6.25C0 5.83579 0.335786 5.5 0.75 5.5H14.9393L10.7197 1.28033C10.4268 0.987437 10.4268 0.512563 10.7197 0.21967Z"
                fill="currentColor"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
