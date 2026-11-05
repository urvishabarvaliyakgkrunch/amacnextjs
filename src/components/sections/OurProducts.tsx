// src/components/sections/OurProducts.tsx
import Link from "next/link";
import { MAX_WIDTH, SIDE_PADDING } from "@/components/layout/layout-classes";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import { HOME_PRODUCTS } from "./home/home-data";

type Props = {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  products?: typeof HOME_PRODUCTS;
  showButton?: boolean;
};

export default function OurProducts({
  eyebrow = "OUR PRODUCTS",
  title = "What We Supply",
  products = HOME_PRODUCTS,
  subtitle ="",
  showButton = true,
}: Props) {
  return (
    <section
      className={`bg-cover bg-bottom bg-no-repeat py-10 md:py-[60px] lg:pt-[120px] lg:pb-[95px] ${SIDE_PADDING}`}
      style={{ backgroundImage: "url(https://amac.ie/wp-content/uploads/2026/05/Group-1533211597.png)" }}
    >
      <div className={`${MAX_WIDTH} flex flex-col gap-[30px] lg:gap-[58px]`}>
        <div className="text-center">
          <SectionEyebrow label={eyebrow} />
          <h2 className="text-black max-md:text-[30px] max-md:leading-[38px]">{title}</h2>
          {subtitle && <p>{subtitle}</p> }
        </div>

        <div className="grid grid-cols-1 min-[881px]:auto-rows-fr gap-[15px] min-[768px]:max-[880px]:grid-cols-2 min-[881px]:grid-cols-3 min-[881px]:gap-5">
          {products.map((product, index) => (
            <div
              key={product.title}
              className="group relative isolate flex flex-col overflow-hidden rounded-xl bg-white bg-cover bg-center gap-5 p-5 lg:p-8"
              style={product.image ? { backgroundImage: `url(${product.image})` } : undefined}
            >
              <span
                aria-hidden="true"
                className={`absolute inset-0 -z-10 bg-white transition-all duration-300 group-hover:bg-primary ${product.image ? "group-hover:opacity-80" : ""}`}
              />
              <span
                aria-hidden="true"
                className="mb-[7px] block shrink-0 bg-current text-icon-dark transition-colors duration-300 group-hover:text-white"
                style={{
                  width: product.iconSize,
                  height: product.iconSize,
                  maskImage: `url(${product.icon})`,
                  WebkitMaskImage: `url(${product.icon})`,
                  maskSize: "contain",
                  WebkitMaskSize: "contain",
                  maskRepeat: "no-repeat",
                  WebkitMaskRepeat: "no-repeat",
                }}
              />
              <h4 className="font-sans text-xl leading-5 font-semibold text-black transition-colors duration-300 group-hover:text-white">{product.title}</h4>
              <p className={`text-base leading-[26.4px] transition-colors duration-300 group-hover:text-white ${index > 2 ? "pb-[13.2px]" : ""}`}>{product.text}</p>
              {product.href ? (
                <Link
                  href={product.href}
                  className="inline-flex items-center gap-[15px] leading-[26.4px] text-accent transition-colors duration-300 group-hover:text-white after:absolute after:inset-0"
                >
                  Learn more<span className="sr-only"> about {product.linkLabel ?? product.title}</span>
                  <svg width="17" height="12" viewBox="0 0 17 12" fill="none" aria-hidden="true" className="transition-transform duration-300 group-hover:-rotate-30">
                    <path
                      d="M16.28 5.46 11.03.21a.75.75 0 0 0-1.06 1.06l3.97 3.97H.75a.75.75 0 0 0 0 1.5h13.19l-3.97 3.97a.75.75 0 1 0 1.06 1.06l5.25-5.25a.75.75 0 0 0 0-1.06Z"
                      fill="currentColor"
                    />
                  </svg>
                </Link>
              ) : null}
            </div>
          ))}
        </div>

        {showButton && <div className="flex justify-center">
          <Link
            href="/products"
            className="inline-flex items-center gap-3 rounded-[50px] px-[30px] py-4 text-base leading-6 font-semibold shadow-[var(--shadow-button)] transition-all duration-400 text-white [background:var(--gradient-primary)] hover:[background:var(--gradient-black)]"
          >
            View Products
            <svg width="18" height="13" viewBox="0 0 18 13" fill="none" aria-hidden="true">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.7197 0.21967C11.0126 -0.0732233 11.4874 -0.0732233 11.7803 0.21967L17.1389 5.57825C17.5099 5.94925 17.5099 6.55075 17.1389 6.92175L11.7803 12.2803C11.4874 12.5732 11.0126 12.5732 10.7197 12.2803C10.4268 11.9874 10.4268 11.5126 10.7197 11.2197L14.9393 7H0.75C0.335786 7 0 6.66421 0 6.25C0 5.83579 0.335786 5.5 0.75 5.5H14.9393L10.7197 1.28033C10.4268 0.987437 10.4268 0.512563 10.7197 0.21967Z"
                fill="currentColor"
              />
            </svg>
          </Link>
        </div>}
      </div>
    </section>
  );
}
