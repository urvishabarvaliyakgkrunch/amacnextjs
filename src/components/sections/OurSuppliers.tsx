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

export default function OurSuppliers() {
  return (
    <section className="bg-white py-10 md:py-[60px] lg:py-[105px]">
      <div className="px-4 text-center sm:px-6">
        <SectionEyebrow label="Our Suppliers" uppercase />
        <h2>Brands We Work With</h2>
        <p className="mx-auto mt-3 max-w-[560px] text-[color:var(--color-muted)]">
          We stock trusted names and match the product to your ground.
        </p>
      </div>

      {/* full-bleed infinite marquee — matches amac.ie edge-to-edge logo strip */}
      <div className="mt-[58px] flex min-h-[72px] w-full overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_5%,black_95%,transparent)]">
        <div className="flex w-max animate-[marquee_30s_linear_infinite]">
          <LogoRow />
          <LogoRow ariaHidden />
        </div>
      </div>
    </section>
  );
}
