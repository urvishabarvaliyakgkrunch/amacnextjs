// src/components/sections/contact/ContactIntro.tsx
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import { CONTACT_ROWS } from "./contact-data";

export default function ContactIntro() {
  return (
    <div>
      <SectionEyebrow label="Get in Touch" uppercase align="start" />
      <h2 className="text-black">How Can We Help?</h2>
      <p className="mt-6 text-base leading-6 text-black">Get in touch with the AMAC team and we’ll point you in the right direction.</p>
      <ul className="mt-10 space-y-[34px]">
        {CONTACT_ROWS.map((row) => (
          <li key={row.title} className="flex items-center gap-[15px]">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#ebece4] text-primary">{row.icon}</span>
            <div>
              <h4 className="font-heading text-xl leading-[26px] font-semibold text-secondary">{row.title}</h4>
              {row.lines.map((line) => (
                <p key={line} className="text-[15px] leading-[22px] text-ink">{line}</p>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
