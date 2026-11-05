// src/components/sections/OurSuppliers.tsx
import Image from "next/image";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import { SUPPLIER_LOGOS } from "./supplier-logos";

function LogoRow({ ariaHidden = false }: { ariaHidden?: boolean }) {
  return (
    <div className="flex shrink-0 items-center gap-24 pr-24" aria-hidden={ariaHidden}>
      {SUPPLIER_LOGOS.map((logo, i) => (
        <Image
          key={`${logo.src}-${i}`}
          src={logo.src}
          alt={ariaHidden ? "" : logo.alt}
          width={120}
          height={58}
          className="h-[58px] w-auto shrink-0 object-contain"
        />
      ))}
    </div>
  );
}

type Props = { variant?: "default" | "home"; title?: string; subtitle?: string };

export default function OurSuppliers({ variant = "default", title, subtitle }: Props) {
  const home = variant === "home";
  return (
    <section className={`py-10 md:py-[60px] lg:py-[105px] ${home ? "bg-bg-alt" : "bg-white"}`}>
      <div className="px-4 text-center sm:px-6">
        <SectionEyebrow label="Our Suppliers" uppercase />
        <h2>{title ?? (home ? "Trusted Brands, Stocked Locally" : "Brands We Work With")}</h2>
        {subtitle !== "" && (subtitle || !home) && (
          <p className={`mx-auto text-[color:var(--color-muted)] ${subtitle ? "mt-6 max-w-[1520px] leading-[26.4px]" : "mt-3 max-w-[560px]"}`}>
            {subtitle ?? "We stock trusted names and match the product to your ground."}
          </p>
        )}
      </div>

      {/* full-bleed infinite marquee — matches amac.ie edge-to-edge logo strip */}
      <div className={`mt-[58px] ${subtitle === "" ? "lg:mt-[114px]" : subtitle ? "lg:mt-[92px]" : "lg:mt-[88px]"} flex min-h-[72px] w-full overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_5%,black_95%,transparent)]`}>
        <div className="flex w-max animate-[marquee_30s_linear_infinite]">
          <LogoRow />
          <LogoRow ariaHidden />
        </div>
      </div>
    </section>
  );
}
