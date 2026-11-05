import Link from "next/link";
// src/components/sections/about/AboutStory.tsx
import Image from "next/image";
import { MAX_WIDTH, SIDE_PADDING } from "@/components/layout/layout-classes";
import SectionEyebrow from "@/components/ui/SectionEyebrow";

export default function AboutStory() {
  return (
    <section className={`py-10 md:py-[60px] lg:py-[110px] ${SIDE_PADDING}`}>
      <div className={`${MAX_WIDTH} flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-10`}>
        {/* Live photo column is 547/1680 of the container at desktop */}
        <div className="relative aspect-[547/820] w-full max-w-[547px] lg:w-[32.56%] lg:shrink-0">
          <Image
            src="https://amac.ie/wp-content/uploads/2026/10/DM1_9847-2048x1366.jpg"
            alt="AMAC founders Richard McCarthy and Aidan Murphy"
            fill
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMDAwMDAwQEBAQFBQUFBwcGBgcHCQoKCAoKCQ4NDQ0NDQ4RERISERERGBcYGBgXKigmJygyMjU1NTtAQEBAQEBAQEBAQEBAQED/2wBDAQUFBQgIDAwODAwYGBgYGCAgICAgIDAwMDAwMDBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQED/wAARCAAQABQDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/9sAQwAEBQUFBQgICAgICwwMCwsPDg4ODxccFxcXFxwgICAgICAgMDAwMDAwQEBAQEBAQEBAQEBAQEBAQEBAQEBAQP/bAEMBBQUFBQgICAgICAwMDA8XFxcXHCAgICAgICAwMDAwMDBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQED/2gAMAwEAAhEDEQAAAfSAAwAAAAAAAAD/2Q=="
            className="rounded-2xl object-cover"
            style={{ objectPosition: "28% center" }}
            sizes="(min-width: 1024px) 33vw, 100vw"
          />
        </div>

        <div className="lg:grow">
          <SectionEyebrow label="OUR STORY" align="start" uppercase />
          <h2 className="text-black max-md:text-[30px] max-md:leading-[38px]">Built Around Local Farmers</h2>
          <div className="mt-3.5 space-y-3.5 text-ink">
            <p>AMAC was founded in Midleton in 2006 to give local farmers reliable access to the products, delivery and advice they need.</p>
            <p>Our team combines practical farming knowledge with experience across agronomy, animal feed and farm supplies. We work with customers through the season, helping them choose what suits their ground, stock and plans.</p>
            <p>We keep it straightforward: dependable products, honest advice and service from people you can talk to.</p>
          </div>
          <div className="mt-8">
            <Link
              href="/our-story"
              className="inline-flex items-center gap-3 rounded-[50px] px-[30px] py-4 text-base leading-6 font-semibold shadow-[var(--shadow-button)] transition-all duration-400 text-white [background:var(--gradient-primary)] hover:[background:var(--gradient-black)]"
            >
              Read Our Story
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
      </div>
    </section>
  );
}
