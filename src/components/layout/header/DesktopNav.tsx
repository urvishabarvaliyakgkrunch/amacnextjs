// src/components/layout/header/DesktopNav.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import type { NavLink } from "../nav-links";

type DesktopNavProps = {
  links: NavLink[];
  // "pill" = dark capsule at the top of the page, "plain" = flat text once the header sticks
  variant: "pill" | "plain";
};

function isCurrent(pathname: string, link: NavLink) {
  if (link.href === "/") return pathname === "/";
  const hrefs = [link.href, ...(link.children ?? []).map((child) => child.href)];
  return hrefs.some((href) => pathname === href || pathname.startsWith(`${href}/`));
}

export default function DesktopNav({ links, variant }: DesktopNavProps) {
  const pathname = usePathname();
  const isPill = variant === "pill";
  const [openLabel, setOpenLabel] = useState<string | null>(null);

  // Hover-based dropdowns don't know a route changed, so without this a submenu item's own
  // page loads underneath the still-open dropdown until the mouse happens to move away.
  useEffect(() => {
    setOpenLabel(null);
  }, [pathname]);

  return (
    <nav className={`flex items-center ${isPill ? "rounded-full bg-nav-pill p-1" : ""}`}>
      {links.map((link) => {
        const hasChildren = Boolean(link.children?.length);
        const current = isCurrent(pathname, link);
        const isOpen = openLabel === link.label;

        const stateClass = isPill
          ? `px-6 hover:bg-white hover:text-black ${isOpen ? "bg-white text-black" : ""} ${
              current ? "bg-white text-black" : "text-white"
            }`
          : `px-2 min-[1201px]:px-2.5 min-[1367px]:px-[15px] ${isOpen ? "text-primary" : ""} ${current ? "text-primary" : "text-nav-ink"}`;
        // Sticky-bar links are 46px tall (15px padding around a 16px line); the pill's are 40px
        const sizeClass = isPill ? "py-2 leading-6" : "py-[15px] leading-4";

        return (
          <div
            key={link.label}
            className="relative"
            onMouseEnter={() => hasChildren && setOpenLabel(link.label)}
            onMouseLeave={() => hasChildren && setOpenLabel((current) => (current === link.label ? null : current))}
          >
            <Link
              href={link.href}
              onFocus={() => hasChildren && setOpenLabel(link.label)}
              onClick={() => setOpenLabel(null)}
              className={`flex items-center gap-2.5 whitespace-nowrap rounded-full text-base transition-colors duration-300 ${sizeClass} ${stateClass}`}
            >
              {link.label}
              {hasChildren && (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="m5 9 7 7 7-7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </Link>

            {hasChildren && (
              <div
                className={`absolute left-0 top-full z-50 transition-opacity duration-300 ${
                  isOpen ? "visible opacity-100" : "invisible opacity-0"
                } ${isPill ? "pt-[5px]" : "pt-5"}`}
              >
                <ul
                  className={`w-[220px] overflow-hidden bg-white shadow-[0_4px_10px_-2px_rgba(0,0,0,0.1)] ${
                    isPill ? "rounded-[10px]" : "rounded-xl"
                  }`}
                >
                  {link.children!.map((child) => (
                    <li key={child.label}>
                      <Link
                        href={child.href}
                        onClick={() => setOpenLabel(null)}
                        className="block py-[10px] px-[24px] font-menu text-base leading-5 text-black transition-colors duration-300 hover:text-primary"
                      >
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        );
      })}
    </nav>
  );
}
