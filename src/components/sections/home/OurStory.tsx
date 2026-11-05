// src/components/sections/home/OurStory.tsx
import Image from "next/image";
import Link from "next/link";
import { MAX_WIDTH, SIDE_PADDING } from "@/components/layout/layout-classes";
import SectionEyebrow from "@/components/ui/SectionEyebrow";

const UPLOADS = "https://amac.ie/wp-content/uploads";

export default function OurStory() {
  return (
    <section className={`bg-bg-alt py-10 md:py-[60px] lg:pt-[50px] lg:pb-[115px] ${SIDE_PADDING}`}>
      <div className={`${MAX_WIDTH} relative flex flex-col gap-5 lg:flex-row lg:items-end min-[1025px]:max-[1200px]:gap-[30px] min-[1201px]:gap-[52px]`}>
        {/* Live crops this photo with a 111% width + -10% shift to hide the left edge */}
        <div className="w-full max-lg:min-h-[300px] lg:min-h-[790px] lg:w-1/2 lg:shrink-0 lg:self-start">
        <div className="relative aspect-[1.35] w-full overflow-hidden rounded-2xl">
          <Image
            src={`${UPLOADS}/2026/08/DM1_4697-1536x1024.webp`}
            alt="AMAC Farm Supplies yard in Midleton"
            fill
            className="!w-[111.12%] max-w-none -translate-x-[10%] object-cover"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        </div>
        </div>

        <div className="lg:w-1/2 lg:self-stretch min-[1025px]:max-[1200px]:pb-[320px] min-[1201px]:pb-[370px]">
          <SectionEyebrow
            align="start"
            tone="accent"
            label={<>ABOUT <span className="text-primary">AMAC FARM SUPPLIES</span></>}
          />
          <h2 className="text-story-ink max-md:text-[30px] max-lg:text-[38px] max-lg:leading-[1.2]">Our Story</h2>
          <div className="mt-5 max-w-[680px] space-y-4 text-body-dark">
            <p>AMAC Farm Supplies was established in Midleton in 2006 by Richard McCarthy and Aidan Murphy.</p>
            <p>Today, we supply fertiliser, seed, crop protection, animal feed and other farm essentials. We also supply solid fuel for homes and businesses.</p>
            <p>
              Our approach is straightforward: dependable products, practical advice and delivery from a team that knows the local ground.{" "}
              <Link href="/areas-we-serve" className="text-accent underline">View delivery areas</Link>.
            </p>
          </div>
          <div className="mt-[17px]">
            <Link
              href="/suppliers"
              className="inline-flex items-center gap-3 rounded-[50px] px-[30px] py-4 text-base leading-6 font-semibold shadow-[var(--shadow-button)] transition-all duration-400 text-white [background:var(--gradient-primary)] hover:[background:var(--gradient-black)]"
            >
              Explore Our Suppliers
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

        {/* Team photo sits on the bottom-right edge, framed by an 8px page-colour border */}
        <div className="w-full rounded-t-lg rounded-br-lg border-8 max-lg:hidden border-b-0 border-bg-alt bg-white lg:absolute lg:right-0 lg:bottom-0 lg:w-4/5">
          <div className="relative h-[300px] w-full overflow-hidden rounded-lg">
            <Image
              src={`${UPLOADS}/2026/08/aqswokybiva4ogbtmfmd-1920w-1500x430-optimised.webp`}
              alt="The AMAC team"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 80vw, 100vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
