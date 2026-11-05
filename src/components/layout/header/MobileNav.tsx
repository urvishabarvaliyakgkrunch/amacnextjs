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

export default function MobileNav({ links, onNavigate }: MobileNavProps) {
  const pathname = usePathname();
  const [openLabel, setOpenLabel] = useState<string | null>(null);

  return (
    <nav className="max-h-[calc(100vh-120px)] overflow-y-auto rounded-[10px] bg-white py-2 shadow-[0_10px_40px_0_rgba(26,58,82,0.12)]">
      <ul>
        {links.map((link) => {
          const hasChildren = Boolean(link.children?.length);
          const isOpen = openLabel === link.label;
          const current = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);

          return (
            <li key={link.label}>
              <div className="flex items-center justify-between pr-4">
                <Link
                  href={link.href}
                  onClick={onNavigate}
                  className={`flex-1 px-6 py-3 text-base transition-colors duration-300 hover:text-primary ${
                    current ? "text-primary" : "text-nav-ink"
                  }`}
                >
                  {link.label}
                </Link>
                {hasChildren && (
                  <button
                    type="button"
                    aria-label={`Toggle ${link.label} submenu`}
                    aria-expanded={isOpen}
                    onClick={() => setOpenLabel(isOpen ? null : link.label)}
                    className="flex h-8 w-8 items-center justify-center text-nav-ink"
                  >
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden="true"
                      className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                    >
                      <path d="m5 9 7 7 7-7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                )}
              </div>

              {hasChildren && isOpen && (
                <ul className="pb-2">
                  {link.children!.map((child) => (
                    <li key={child.label}>
                      <Link
                        href={child.href}
                        onClick={onNavigate}
                        className="block py-2 pl-10 pr-6 font-menu text-base text-black hover:text-primary"
                      >
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
