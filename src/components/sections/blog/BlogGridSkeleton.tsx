// src/components/sections/blog/BlogGridSkeleton.tsx
import { MAX_WIDTH, SIDE_PADDING } from "@/components/layout/layout-classes";
import Skeleton from "@/components/ui/Skeleton";

// Mirrors BlogGrid + PostCard sizes so nothing shifts when posts arrive
export default function BlogGridSkeleton() {
  return (
    <div role="status" aria-label="Loading posts">
      <Skeleton className="h-[400px] w-full rounded-none lg:h-[490px]" />
      <section className={`bg-white py-10 md:py-[60px] lg:py-[110px] ${SIDE_PADDING}`}>
        <div className={`${MAX_WIDTH} grid grid-cols-1 gap-5 md:gap-6 min-[768px]:max-[1280px]:grid-cols-2 min-[1281px]:grid-cols-4`}>
          {[0, 1, 2, 3].map((i) => (
            <Skeleton key={i} className="h-[520px] rounded-2xl" />
          ))}
        </div>
      </section>
    </div>
  );
}
