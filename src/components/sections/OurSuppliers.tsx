// src/components/sections/OurSuppliers.tsx
import Image from "next/image";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import { SUPPLIER_LOGOS } from "./supplier-logos";

export default function OurSuppliers() {
  return (
    <section className="bg-white py-10 md:py-[105px]">
      <div className="px-4 text-center sm:px-6 lg:px-0">
        <SectionEyebrow label="Our Suppliers" uppercase />
        <h2>Brands We Work With</h2>
        <p className="mx-auto mt-3 max-w-[560px] text-[color:var(--color-muted)]">
          We stock trusted names and match the product to your ground.
        </p>

        <div className="mt-[58px] flex min-h-[72px] flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {SUPPLIER_LOGOS.map((logo) => (
            <Image
              key={logo.src}
              src={logo.src}
              alt={logo.alt}
              width={120}
              height={58}
              className="h-[58px] w-auto object-contain grayscale-0"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
