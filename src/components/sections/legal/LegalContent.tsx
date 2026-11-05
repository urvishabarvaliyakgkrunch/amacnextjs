// src/components/sections/legal/LegalContent.tsx
import type { ReactNode } from "react";
import { SIDE_PADDING } from "@/components/layout/layout-classes";

export type LegalSection = { heading: string; body: ReactNode | ReactNode[] };

// Live: section py 40, h2 Manrope 30/36 black mt 12 mb 10, body p 14/23.1 #767676
export default function LegalContent({ sections }: { sections: LegalSection[] }) {
  return (
    <section className={`bg-white py-[60px] md:py-20 ${SIDE_PADDING}`}>
      <div className={`mx-auto flex w-full max-w-[1000px] flex-col gap-[10px] text-ink [&_a]:text-accent [&_a]:underline [&_p]:my-[13.6px] [&_p]:leading-[26.4px] [&_strong]:font-bold`}>
        {sections.map(({ heading, body }) => (
          <div key={heading} className="flex flex-col gap-[10px]">
            <h2 className="mt-3 mb-[10px] text-[30px] leading-[36px] text-black">{heading}</h2>
            {(Array.isArray(body) ? body : [body]).map((group, i) => (
              <div key={i} className="flow-root">
                {group}
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

export function Ext({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener">
      {children}
    </a>
  );
}
