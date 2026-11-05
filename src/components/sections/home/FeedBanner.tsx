import Link from "next/link";
// src/components/sections/home/FeedBanner.tsx
import Image from "next/image";
import { MAX_WIDTH, SIDE_PADDING } from "@/components/layout/layout-classes";

export default function FeedBanner() {
  return (
    <section className={`relative isolate overflow-hidden py-10 md:py-[60px] lg:py-[120px] ${SIDE_PADDING}`}>
      <Image
        src="https://amac.ie/wp-content/uploads/2026/06/cows-web.webp"
        alt=""
        fill
        className="-z-20 object-cover"
        sizes="100vw"
      />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-black opacity-60" />

      <div className={`${MAX_WIDTH} flex flex-col items-start gap-5`}>
        <h2 className="flex items-center gap-3 text-[30px] leading-[38px] text-white md:text-[38px] lg:text-[45px] lg:leading-[50px]">
          <Image src="/icons/home/feed-cow.svg" alt="" width={45} height={46} className="shrink-0" />
          Feed That Suits Your Stock
        </h2>
        <p className="max-w-[698px] pb-[50px] text-white md:pb-[100px] lg:mb-7 lg:pb-[150px]">
          AMAC is an authorised agent for Grennans and Roches Feed. We supply dairy, beef, sheep and equine feed in bulk or bags, with delivery to your yard.
        </p>
        <Link
          href="/animal-feed"
          className="inline-flex items-center gap-3 rounded-[50px] px-[30px] py-4 text-base leading-6 font-semibold shadow-[var(--shadow-button)] transition-all duration-400 font-bold text-feed-btn [background:var(--gradient-white-home)] hover:text-white hover:[background:var(--gradient-primary)] hover:shadow-[var(--shadow-button-inset)]"
        >
          View Animal Feed
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
    </section>
  );
}
