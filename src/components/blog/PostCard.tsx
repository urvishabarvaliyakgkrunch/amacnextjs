// src/components/blog/PostCard.tsx
import Image from "next/image";
import Link from "next/link";
import type { PostSummary } from "@/types/post";

// kg-blog-card from amac.ie's shortcode grid — reused by the home preview and the blog list
export default function PostCard({ title, href, date, excerpt, image }: PostSummary) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl bg-card-bg">
      <Link href={href} className="relative block h-[260px] overflow-hidden" tabIndex={-1}>
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(min-width: 1281px) 25vw, (min-width: 768px) 50vw, 100vw"
        />
      </Link>
      <div className="flex grow flex-col p-5 md:px-7 md:pt-7 md:pb-[26px]">
        <span className="mb-2 text-sm font-medium text-blog-date">{date}</span>
        <h3 className="mb-4 font-sans text-xl leading-6 font-semibold text-ink-dark">
          <Link href={href}>{title}</Link>
        </h3>
        <p className="mb-7 line-clamp-3 h-[72px] text-[15px] leading-6 font-medium md:text-base">{excerpt}</p>
        <Link href={href} className="inline-flex items-center gap-3 font-medium text-blog-link">
          Read More<span className="sr-only"> about {title}</span>
          <Image
            src="https://amac.ie/wp-content/uploads/2026/05/Frame.png"
            alt=""
            width={18}
            height={18}
            className="transition-transform duration-300 group-hover:-rotate-45"
          />
        </Link>
      </div>
    </article>
  );
}
