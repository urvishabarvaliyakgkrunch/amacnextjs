import Link from "next/link";
// src/components/sections/home/HomeHero.tsx
import Image from "next/image";
import HeroStats from "./HeroStats";

const UPLOADS = "https://amac.ie/wp-content/uploads";

// Hero heights follow the yard artwork's aspect (4200x2620 desktop, 4200x1610 mobile strip)
export default function HomeHero() {
  return (
    <>
      <section
        className="relative overflow-hidden bg-hero-sky max-md:min-h-[calc(520px+100vw*1610/4200)] md:min-h-[calc(100vw*2620/4200)] md:bg-cover md:bg-top md:bg-no-repeat md:[background-image:var(--hero-desktop)]"
        style={{ "--hero-desktop": `url(${UPLOADS}/2026/10/Yard-2-Homepage-Desktop-v2.webp)` } as React.CSSProperties}
      >
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-[calc(100vw*1610/4200)] bg-[length:100%_auto] bg-bottom bg-no-repeat md:hidden"
          style={{ backgroundImage: `url(${UPLOADS}/2026/10/Yard-2-Homepage-Mobile-v2.webp)` }}
        />

        <Image src={`${UPLOADS}/2026/05/Star-1.png`} alt="" width={50} height={50} className="absolute top-[35%] left-[10%] max-md:hidden lg:left-[18%]" />
        <Image src={`${UPLOADS}/2026/05/Star-1.png`} alt="" width={22} height={22} className="absolute top-[45%] right-[14%] max-md:hidden" />

        <div className="relative mx-auto flex w-full flex-col items-center px-5 pt-[209px] text-center md:w-[602px] md:px-0 md:pt-[180px] lg:w-[940px]">
          <p className="mb-5 flex items-center gap-2 font-[family-name:var(--font-lato)] text-sm font-semibold text-[#22282b]">
            <span className="size-2.5 rounded-full bg-primary" aria-hidden="true" />
            Serving East Cork Farmers Since 2006
          </p>
          <h1 className="tracking-[-0.03em] max-md:!text-[34px] max-md:!leading-[1.12] max-lg:text-[40px] max-lg:leading-[42px]">
            Farm Supplies, Feed &amp; Practical Advice from a <span className="text-primary">Local Team</span>
          </h1>
          <div className="flex flex-wrap items-center justify-center gap-5 md:pt-2.5 lg:pt-[30px] max-md:mt-5">
            <Link
              href="/products"
              className="inline-flex items-center gap-3 rounded-[50px] px-[30px] py-4 text-base leading-6 font-semibold shadow-[var(--shadow-button)] transition-all duration-400 text-white [background:var(--gradient-black)] hover:[background:var(--gradient-black-hover)]"
            >
              Explore Products
              <svg width="18" height="13" viewBox="0 0 18 13" fill="none" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10.7197 0.21967C11.0126 -0.0732233 11.4874 -0.0732233 11.7803 0.21967L17.1389 5.57825C17.5099 5.94925 17.5099 6.55075 17.1389 6.92175L11.7803 12.2803C11.4874 12.5732 11.0126 12.5732 10.7197 12.2803C10.4268 11.9874 10.4268 11.5126 10.7197 11.2197L14.9393 7H0.75C0.335786 7 0 6.66421 0 6.25C0 5.83579 0.335786 5.5 0.75 5.5H14.9393L10.7197 1.28033C10.4268 0.987437 10.4268 0.512563 10.7197 0.21967Z"
                  fill="currentColor"
                />
              </svg>
            </Link>
            <Link
              href="/about-us"
              className="inline-flex items-center gap-3 rounded-[50px] px-[30px] py-4 text-base leading-6 font-semibold shadow-[var(--shadow-button)] transition-all duration-400 text-white [background:var(--gradient-black)] hover:[background:var(--gradient-black-hover)]"
            >
              About AMAC
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
      <HeroStats />
    </>
  );
}
