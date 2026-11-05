// src/components/layout/Footer.tsx
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { MAX_WIDTH, SIDE_PADDING } from "./layout-classes";
import { FOOTER_COLUMNS, FOOTER_LEGAL_LINKS, LOGO_URL, SITE } from "./nav-links";

const FOOTER_BG_URL = "https://amac.ie/wp-content/uploads/2026/05/Group-1533211405.webp";

// Glyphs are 24px-grid outlines, scaled into the 32px green circle by ContactIcon
const CONTACT_ROWS = [
  {
    label: SITE.phoneFooter,
    href: "tel:0214630683",
    icon: (
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
    ),
  },
  {
    label: SITE.email,
    href: "mailto:info@amac.ie",
    icon: (
      <>
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </>
    ),
  },
  {
    label: SITE.shortAddress,
    href: undefined,
    icon: (
      <>
        <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0Z" />
        <circle cx="12" cy="10" r="3" />
      </>
    ),
  },
];

function ContactIcon({ children }: { children: ReactNode }) {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true" className="shrink-0">
      <rect width="32" height="32" rx="16" className="fill-icon-green" />
      <g transform="translate(9 9) scale(0.58)" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        {children}
      </g>
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-footer-alt">
      <Image src={FOOTER_BG_URL} alt="" aria-hidden fill sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-footer-alt/80" />

      <div className={`relative ${SIDE_PADDING}`}>
        <div className={`${MAX_WIDTH} flex flex-col gap-8 pb-[35px] pt-10 min-[768px]:pb-[60px] min-[768px]:pt-[100px]`}>
          <div className="flex flex-col items-start gap-[30px] min-[1025px]:flex-row min-[1025px]:gap-5 min-[1201px]:gap-[43px]">
            <div className="flex w-full flex-col rounded-2xl bg-footer p-5 min-[768px]:p-8 min-[1025px]:w-1/2 min-[1201px]:w-2/5">
              <Image src={LOGO_URL} alt="AMAC Farm Supplies" width={160} height={71} className="h-auto w-[160px]" />
              <p className="mt-[27px] w-[85%] text-sm leading-[19px] text-footer-muted">{SITE.blurb}</p>

              <ul className="mt-10 flex flex-col gap-[15px] min-[768px]:gap-6">
                {CONTACT_ROWS.map((row) => (
                  <li key={row.label}>
                    {row.href ? (
                      <a
                        href={row.href}
                        className="flex items-center gap-3 text-footer-text transition-colors duration-300 hover:text-white/65"
                      >
                        <ContactIcon>{row.icon}</ContactIcon>
                        {row.label}
                      </a>
                    ) : (
                      <span className="flex items-center gap-3 text-footer-text">
                        <ContactIcon>{row.icon}</ContactIcon>
                        {row.label}
                      </span>
                    )}
                  </li>
                ))}
              </ul>

              <Link
                href="/products"
                className="mt-7 flex w-fit items-center gap-3 rounded-full bg-[radial-gradient(at_50%_100%,white,var(--color-btn-mid),white)] px-[30px] py-4 text-base font-bold leading-6 text-footer shadow-[0_18px_52px_-10px_rgba(0,0,0,0.38)] transition-transform duration-500 hover:-translate-y-[5px]"
              >
                View Products
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M4 12h16m0 0-6-6m6 6-6 6" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>

            <div className="grid w-full grid-cols-1 gap-[30px] min-[768px]:grid-cols-2 min-[768px]:gap-5 min-[881px]:grid-cols-3 min-[1025px]:w-1/2 min-[1025px]:grid-cols-2 min-[1201px]:w-3/5 min-[1201px]:grid-cols-3 min-[1201px]:gap-[120px]">
              {FOOTER_COLUMNS.map((column) => (
                <div key={column.title}>
                  <h3 className="border-b-2 border-lime pb-3 text-lg font-semibold leading-[18px] text-white">
                    {column.title}
                  </h3>
                  <ul className="mt-5 flex flex-col gap-[5px]">
                    {column.links.map((link) => (
                      <li key={link.label}>
                        <Link
                          href={link.href}
                          className="block text-base leading-[1.65] text-white transition-colors duration-300 hover:text-white/65"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-2.5 min-[768px]:flex-row min-[768px]:items-center min-[768px]:justify-between">
            <div className="flex flex-col gap-2 text-base leading-4 text-footer-text">
              <span>© 2026 AMAC Farm Supplies Ltd. All Rights Reserved.</span>
              <span>
                Website and marketing by{" "}
                <a href="https://methodmarketing.ie/" className="underline transition-colors duration-300 hover:text-white/65">
                  Method Marketing
                </a>
              </span>
            </div>
            <ul className="flex items-center gap-6">
              {FOOTER_LEGAL_LINKS.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-base text-footer-text transition-colors duration-300 hover:text-white/65">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
