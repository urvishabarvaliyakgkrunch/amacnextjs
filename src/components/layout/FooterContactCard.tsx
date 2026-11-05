// src/components/layout/FooterContactCard.tsx
import Link from "next/link";

const CONTACT_ITEMS = [
  {
    label: "021 4630683",
    href: "tel:0214630683",
    icon: (
      <path
        d="M4 5c0 8.284 6.716 15 15 15l1-4-5-2-1.5 2A12.04 12.04 0 0 1 7 9.5L9 8 7 3 4 4Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    ),
  },
  {
    label: "info@amac.ie",
    href: "mailto:info@amac.ie",
    icon: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.6" />
        <path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
  },
  {
    label: "Townspark, Midleton, Co. Cork, P25 P640",
    href: "https://maps.google.com/?q=AMAC+Farm+Supplies+Townspark+Midleton",
    icon: (
      <>
        <path
          d="M12 22s7-7.1 7-12.5A7 7 0 0 0 5 9.5C5 14.9 12 22 12 22Z"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <circle cx="12" cy="9.5" r="2.4" stroke="currentColor" strokeWidth="1.6" />
      </>
    ),
  },
];

export default function FooterContactCard() {
  return (
    <div className="bg-[color:var(--color-footer-alt)]">
      <div className="mx-auto max-w-[1680px] px-4 py-10 sm:px-6 lg:px-20">
        <div className="flex flex-col gap-5">
          {CONTACT_ITEMS.map((item) => (
            <a key={item.label} href={item.href} className="flex items-center gap-3 text-white hover:text-white/80">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[color:var(--color-primary-alt)]">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  {item.icon}
                </svg>
              </span>
              <span>{item.label}</span>
            </a>
          ))}

          <Link
            href="/products"
            className="mt-2 inline-flex w-fit items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[color:var(--color-footer-alt)] transition hover:bg-white/90"
          >
            View Products
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M5 12h14m0 0-5-5m5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
