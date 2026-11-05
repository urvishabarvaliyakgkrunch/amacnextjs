// src/components/sections/contact/ContactIntro.tsx
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import { CONTACT_ROWS } from "./contact-data";

export default function ContactIntro() {
  return (
    <div>
      <SectionEyebrow label="Get in Touch" uppercase align="start" />
      <h2 className="text-black">How Can We Help?</h2>
      <p className="mt-6 text-base leading-[26.4px] text-black">Get in touch with the AMAC team and we’ll point you in the right direction.</p>
      <ul className="mt-10 space-y-[30px]">
        {CONTACT_ROWS.map((row) => (
          <li key={row.title} className="flex items-center gap-[22px]">
            <span className="flex h-[70px] w-[70px] shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">{row.icon}</span>
            <div>
              <h4 className="font-heading text-xl leading-5 font-bold text-secondary mb-[10px]">{row.title}</h4>
              {row.lines.map((line) => (
                <p key={line} className="text-base leading-[26.4px] text-ink">{line}</p>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
