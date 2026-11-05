// src/components/layout/MobileNav.tsx
"use client";

import Link from "next/link";
import { useState } from "react";
import type { NavLink } from "./nav-links";

type MobileNavProps = {
  isOpen: boolean;
  onClose: () => void;
  links: NavLink[];
};

export default function MobileNav({ isOpen, onClose, links }: MobileNavProps) {
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  if (!isOpen) return null;

  return (
    <div className="absolute inset-x-0 top-full z-40 border-t border-[color:var(--color-border)] bg-white shadow-lg">
      <nav className="mx-auto max-w-[1420px] px-4 py-2 sm:px-6 lg:px-10">
        <ul>
          {links.map((link) => {
            const hasChildren = Boolean(link.children?.length);
            const isSubmenuOpen = openSubmenu === link.label;

            return (
              <li key={link.label} className="border-b border-[color:var(--color-border)] last:border-none">
                <div className="flex items-center justify-between">
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className="flex-1 py-3 text-base text-[color:var(--color-ink-dark)] hover:text-[color:var(--color-primary)]"
                  >
                    {link.label}
                  </Link>
                  {hasChildren && (
                    <button
                      type="button"
                      aria-label={`Toggle ${link.label} submenu`}
                      aria-expanded={isSubmenuOpen}
                      onClick={() => setOpenSubmenu(isSubmenuOpen ? null : link.label)}
                      className="flex h-10 w-10 items-center justify-center text-[color:var(--color-muted)]"
                    >
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        className={`transition-transform ${isSubmenuOpen ? "rotate-180" : ""}`}
                      >
                        <path d="m6 9 6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                  )}
                </div>

                {hasChildren && isSubmenuOpen && (
                  <ul className="pb-2 pl-4">
                    {link.children!.map((child) => (
                      <li key={child.label}>
                        <Link
                          href={child.href}
                          onClick={onClose}
                          className="block py-2 text-sm text-[color:var(--color-muted)] hover:text-[color:var(--color-primary)]"
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
    </div>
  );
}
