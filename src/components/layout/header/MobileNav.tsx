// src/components/layout/header/MobileNav.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import type { NavLink } from "../nav-links";

type MobileNavProps = {
  links: NavLink[];
  onNavigate: () => void;
};

const ROW = "flex min-h-[50px] items-center px-5 py-[15px] font-menu text-base leading-5 transition-colors duration-300 hover:text-primary";

export default function MobileNav({ links, onNavigate }: MobileNavProps) {
  const pathname = usePathname();
  const [openLabel, setOpenLabel] = useState<string | null>(null);

  return (
    <nav className="max-h-[calc(100vh-140px)] overflow-y-auto rounded-[10px] bg-white">
      <ul>
        {links.map((link) => {
          const hasChildren = Boolean(link.children?.length);
          const isOpen = openLabel === link.label;
          const hrefs = [link.href, ...(link.children ?? []).map((child) => child.href)];
          const current = link.href === "/" ? pathname === "/" : hrefs.some((href) => pathname === href || pathname.startsWith(`${href}/`));
          const tone = current || isOpen ? "text-primary" : "text-nav-ink";

          return (
            <li key={link.label}>
              {hasChildren ? (
                // Live site puts the chevron right after the label and lets the whole row toggle the submenu
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpenLabel(isOpen ? null : link.label)}
                  className={`${ROW} w-full gap-2.5 text-left ${tone}`}
                >
                  {link.label}
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                    className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                  >
                    <path d="m5 9 7 7 7-7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              ) : (
                <Link href={link.href} onClick={onNavigate} className={`${ROW} ${tone}`}>
                  {link.label}
                </Link>
              )}

              {hasChildren && isOpen && (
                <ul>
                  {link.children!.map((child) => (
                    <li key={child.label}>
                      <Link href={child.href} onClick={onNavigate} className={`${ROW} py-2.5 pl-10 text-nav-ink`}>
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
