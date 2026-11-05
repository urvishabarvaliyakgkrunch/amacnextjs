// src/components/layout/DesktopNav.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import type { NavLink } from "./nav-links";

export default function DesktopNav({ links }: { links: NavLink[] }) {
  const pathname = usePathname();
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  return (
    <nav className="hidden items-center gap-1 rounded-full bg-[#292929] p-1 lg:flex">
      {links.map((link) => {
        const hasChildren = Boolean(link.children?.length);
        const isActive = pathname === link.href;
        const isSubmenuOpen = openSubmenu === link.label;

        return (
          <div
            key={link.label}
            className="relative"
            onMouseEnter={() => hasChildren && setOpenSubmenu(link.label)}
            onMouseLeave={() => hasChildren && setOpenSubmenu(null)}
          >
            <Link
              href={link.href}
              onClick={() => hasChildren && setOpenSubmenu(isSubmenuOpen ? null : link.label)}
              className={`flex items-center gap-1 rounded-full px-6 py-2 text-base font-normal transition-colors duration-300 ${
                isActive
                  ? "bg-white text-black"
                  : "text-white hover:text-[color:var(--color-primary)]"
              }`}
            >
              {link.label}
              {hasChildren && (
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  className={`transition-transform ${isSubmenuOpen ? "rotate-180" : ""}`}
                >
                  <path d="m6 9 6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </Link>

            {hasChildren && isSubmenuOpen && (
              <ul className="absolute left-0 top-full z-50 min-w-[220px] rounded-xl bg-white py-2 shadow-lg">
                {link.children!.map((child) => (
                  <li key={child.label}>
                    <Link
                      href={child.href}
                      className="block px-5 py-2.5 text-sm text-[color:var(--color-ink-dark)] hover:bg-[color:var(--color-bg-alt)] hover:text-[color:var(--color-primary)]"
                    >
                      {child.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        );
      })}
    </nav>
  );
}
