// src/components/layout/header/DesktopNav.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
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

  return (
    <nav className={`flex items-center ${isPill ? "rounded-full bg-nav-pill p-1" : ""}`}>
      {links.map((link) => {
        const hasChildren = Boolean(link.children?.length);
        const current = isCurrent(pathname, link);

        const stateClass = isPill
          ? `px-6 hover:bg-white hover:text-black group-hover:bg-white group-hover:text-black ${
              current ? "bg-white text-black" : "text-white"
            }`
          : `px-2 min-[1201px]:px-2.5 min-[1367px]:px-[15px] group-hover:text-primary ${current ? "text-primary" : "text-nav-ink"}`;
        // Sticky-bar links are 46px tall (15px padding around a 16px line); the pill's are 40px
        const sizeClass = isPill ? "py-2 leading-6" : "py-[15px] leading-4";

        return (
          <div key={link.label} className="group relative">
            <Link
              href={link.href}
              className={`flex items-center gap-2.5 rounded-full text-base transition-colors duration-300 ${sizeClass} ${stateClass}`}
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
                className={`invisible absolute left-0 top-full z-50 opacity-0 transition-opacity duration-300 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100 ${
                  isPill ? "pt-[5px]" : "pt-5"
                }`}
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
                        className="block px-6 py-2.5 font-menu text-base leading-5 text-black transition-colors duration-300 hover:text-primary"
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
