// src/app/[slug]/loading.tsx
import Skeleton from "@/components/ui/Skeleton";

export default function Loading() {
  return (
    <div role="status" aria-label="Loading post">
      <Skeleton className="h-[400px] w-full rounded-none min-[1025px]:h-[490px]" />
      <div className="mx-auto flex max-w-[1250px] flex-col gap-4 px-5 py-10 lg:py-20">
        <Skeleton className="h-6 w-3/4" />
        <Skeleton className="h-6 w-full" />
        <Skeleton className="h-6 w-5/6" />
      </div>
    </div>
  );
}
