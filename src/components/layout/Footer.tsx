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
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="16" fill="#009A27"></rect><g clipPath="url(#clip0_107_1702)"><path d="M17.7744 17.5835C17.8436 17.5374 17.9233 17.5093 18.0061 17.5018C18.0889 17.4943 18.1723 17.5075 18.2488 17.5404L21.1963 18.861C21.2956 18.9034 21.3785 18.9769 21.4326 19.0704C21.4867 19.164 21.509 19.2725 21.4963 19.3797C21.3991 20.1054 21.0418 20.7711 20.4907 21.253C19.9395 21.7349 19.2321 22.0003 18.5 21.9997C16.2457 21.9997 14.0837 21.1042 12.4896 19.5102C10.8955 17.9161 10 15.7541 10 13.4997C9.99944 12.7676 10.2648 12.0602 10.7467 11.5091C11.2287 10.9579 11.8943 10.6006 12.62 10.5035C12.7273 10.4907 12.8358 10.5131 12.9293 10.5672C13.0228 10.6212 13.0963 10.7042 13.1388 10.8035L14.4594 13.7535C14.4918 13.8293 14.505 13.9119 14.4978 13.994C14.4906 14.0761 14.4633 14.1551 14.4181 14.2241L13.0825 15.8122C13.0351 15.8837 13.0071 15.9663 13.0012 16.0519C12.9953 16.1374 13.0117 16.223 13.0488 16.3004C13.5656 17.3585 14.6594 18.4391 15.7206 18.951C15.7984 18.9879 15.8844 19.0039 15.9702 18.9975C16.056 18.991 16.1387 18.9623 16.21 18.9141L17.7744 17.5835Z" stroke="#D5DC1A" strokeLinecap="round" strokeLinejoin="round"></path><path d="M17 13H21" stroke="#D5DC1A" strokeLinecap="round" strokeLinejoin="round"></path><path d="M19 11V15" stroke="#D5DC1A" strokeLinecap="round" strokeLinejoin="round"></path></g><defs><clipPath id="clip0_107_1702"><rect width="16" height="16" fill="white" transform="translate(8 8)"></rect></clipPath></defs></svg>
    ),
  },
  {
    label: SITE.email,
    href: "mailto:info@amac.ie",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="16" fill="#009A27"></rect><g clipPath="url(#clip0_107_1710)"><path d="M22 11.5L16 17L10 11.5" stroke="#D5DC1A" strokeLinecap="round" strokeLinejoin="round"></path><path d="M10 11.5H22V20C22 20.1326 21.9473 20.2598 21.8536 20.3536C21.7598 20.4473 21.6326 20.5 21.5 20.5H10.5C10.3674 20.5 10.2402 20.4473 10.1464 20.3536C10.0527 20.2598 10 20.1326 10 20V11.5Z" stroke="#D5DC1A" strokeLinecap="round" strokeLinejoin="round"></path><path d="M14.9093 16L10.1543 20.3588" stroke="#D5DC1A" strokeLinecap="round" strokeLinejoin="round"></path><path d="M21.8458 20.3588L17.0908 16" stroke="#D5DC1A" strokeLinecap="round" strokeLinejoin="round"></path></g><defs><clipPath id="clip0_107_1710"><rect width="16" height="16" fill="white" transform="translate(8 8)"></rect></clipPath></defs></svg>
    ),
  },
  {
    label: SITE.shortAddress,
    href: undefined,
    icon: (
     <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="16" fill="#009A27"></rect><g clipPath="url(#clip0_107_1719)"><path d="M16 14C16.5523 14 17 13.5523 17 13C17 12.4477 16.5523 12 16 12C15.4477 12 15 12.4477 15 13C15 13.5523 15.4477 14 16 14Z" fill="#D5DC1A"></path><path d="M19.5 13C19.5 16.5 16 18.5 16 18.5C16 18.5 12.5 16.5 12.5 13C12.5 12.0717 12.8687 11.1815 13.5251 10.5251C14.1815 9.86875 15.0717 9.5 16 9.5C16.9283 9.5 17.8185 9.86875 18.4749 10.5251C19.1313 11.1815 19.5 12.0717 19.5 13Z" stroke="#D5DC1A" strokeLinecap="round" strokeLinejoin="round"></path><path d="M20.5 17.6963C21.7325 18.1513 22.5 18.7913 22.5 19.5C22.5 20.8807 19.59 22 16 22C12.41 22 9.5 20.8807 9.5 19.5C9.5 18.7913 10.2675 18.1513 11.5 17.6963" stroke="#D5DC1A" strokeLinecap="round" strokeLinejoin="round"></path></g><defs><clipPath id="clip0_107_1719"><rect width="16" height="16" fill="white" transform="translate(8 8)"></rect></clipPath></defs></svg>
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

// Kit font-size drops to 14px on phones; body line-height is the Enfold 1.65 (set here since globals.css no longer sets it)
export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-footer-alt text-sm leading-[1.65] min-[768px]:text-base">
      <Image src={FOOTER_BG_URL} alt="" aria-hidden fill sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-footer-alt/80" />

      <div className={`relative ${SIDE_PADDING}`}>
        <div className={`${MAX_WIDTH} flex flex-col gap-8 pb-[35px] pt-10 min-[768px]:pb-[60px] min-[768px]:pt-[100px]`}>
          <div className="flex flex-col items-start gap-[30px] min-[768px]:gap-5 min-[1025px]:flex-row min-[1201px]:gap-[43px]">
            <div className="flex w-full flex-col rounded-2xl bg-footer p-5 min-[768px]:p-8 min-[1025px]:w-1/2 min-[1201px]:w-2/5">
              <Image src={LOGO_URL} alt="AMAC Farm Supplies" width={160} height={71} className="h-auto w-[160px]" />
              <p className="mt-[27px] w-[85%] text-sm leading-[19px] text-footer-muted">{SITE.blurb}</p>

              <ul className="mt-10 flex flex-col gap-[15px] min-[768px]:gap-6">
                {CONTACT_ROWS.map((row) => (
                  <li key={row.label}>
                    {row.href ? (
                      <a href={row.href} className="flex items-center gap-[13px] text-footer-text">
                        {row.icon}
                        {row.label}
                      </a>
                    ) : (
                      <span className="flex items-center gap-[13px] text-footer-text">
                        {row.icon}
                        {row.label}
                      </span>
                    )}
                  </li>
                ))}
              </ul>

              <Link
                href="/products"
                className="mt-7 flex w-fit items-center gap-3 rounded-full px-[30px] py-4 text-base font-bold leading-6 text-footer shadow-[var(--shadow-button)] transition-all duration-500 [background:var(--gradient-white-footer)]   hover:text-white hover:[background:var(--gradient-primary)] hover:shadow-[var(--shadow-button-inset)]"
              >
                View Products
               <svg xmlns="http://www.w3.org/2000/svg" width="18" height="13" viewBox="0 0 18 13" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M10.7197 0.21967C11.0126 -0.0732233 11.4874 -0.0732233 11.7803 0.21967L17.1389 5.57825C17.5099 5.94925 17.5099 6.55075 17.1389 6.92175L11.7803 12.2803C11.4874 12.5732 11.0126 12.5732 10.7197 12.2803C10.4268 11.9874 10.4268 11.5126 10.7197 11.2197L14.9393 7H0.75C0.335786 7 0 6.66421 0 6.25C0 5.83579 0.335786 5.5 0.75 5.5H14.9393L10.7197 1.28033C10.4268 0.987437 10.4268 0.512563 10.7197 0.21967Z" fill="currentColor"></path></svg>
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
                          className="block text-white transition-colors duration-300 hover:text-white/65"
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

          <div className="flex flex-col gap-2.5 min-[768px]:flex-row min-[768px]:items-center min-[768px]:justify-between min-[768px]:gap-5">
            <div className="flex flex-col gap-2 leading-4 text-footer-text min-[768px]:w-[calc(50%-10px)]">
              <span>© 2026 AMAC Farm Supplies Ltd. All Rights Reserved.</span>
              <span>
                Website and marketing by{" "}
                <a href="https://methodmarketing.ie/" className="underline">
                  Method Marketing
                </a>
              </span>
            </div>
            <ul className="flex items-center gap-6">
              {FOOTER_LEGAL_LINKS.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-footer-text transition-colors duration-300 hover:text-white/65">
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
