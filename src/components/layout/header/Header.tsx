// src/components/layout/header/Header.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { LOGO_URL, NAV_LINKS, SITE } from "../nav-links";
import { MAX_WIDTH, SIDE_PADDING } from "../layout-classes";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

// Elementor's tablet breakpoint is 1024px, so the full nav only shows from 1025px up
const DESKTOP_ONLY = "hidden min-[1025px]:flex";
const MOBILE_ONLY = "flex min-[1025px]:hidden";

type HeaderBarProps = {
  compact: boolean;
  menuOpen: boolean;
  onToggleMenu: () => void;
  onCloseMenu: () => void;
};

function HeaderBar({ compact, menuOpen, onToggleMenu, onCloseMenu }: HeaderBarProps) {
  return (
    <div className={`relative ${SIDE_PADDING}`}>
      <div className={`${MAX_WIDTH} flex items-center justify-between gap-2.5 ${compact ? "py-5" : "py-4"}`}>
        <button
          type="button"
          onClick={onToggleMenu}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          className={`${MOBILE_ONLY} h-10 w-10 items-center justify-center text-ink-dark`}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d={menuOpen ? "M5 5l14 14M19 5L5 19" : "M3 6h18M3 12h18M3 18h18"}
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>

        {/* Live logo sits in an inline-image box ~8px taller than the image; the nav/buttons centre on that box */}
        <Link href="/" aria-label="AMAC Farm Supplies — home" className="shrink-0 pb-2">
          <Image
            src={LOGO_URL}
            alt="AMAC Farm Supplies"
            width={175}
            height={78}
            priority={!compact}
            className={`h-auto ${compact ? "w-[100px]" : "w-[125px] min-[768px]:w-[175px]"}`}
          />
        </Link>

        <div className={DESKTOP_ONLY}>
          <DesktopNav links={NAV_LINKS} variant={compact ? "plain" : "pill"} />
        </div>

        <div className="flex items-center gap-[11px]">
          <Link
            href="/contact"
            className={`${DESKTOP_ONLY} items-center rounded-full border border-black px-5 py-[13px] text-base font-semibold uppercase leading-6 text-black transition-colors duration-300 hover:border-primary hover:bg-primary hover:text-white min-[1367px]:px-7`}
          >
            Get in touch
          </Link>
          <button type="button" aria-label="Search" className="flex h-9 w-[31px] items-center justify-center text-ink-dark">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <circle cx="10.5" cy="10.5" r="7" stroke="currentColor" strokeWidth="2.6" />
              <path d="m16 16 5.5 5.5" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className={`absolute inset-x-0 top-full ${SIDE_PADDING} min-[1025px]:hidden`}>
          <div className={MAX_WIDTH}>
            <MobileNav links={NAV_LINKS} onNavigate={onCloseMenu} />
          </div>
        </div>
      )}
    </div>
  );
}

function TopBar() {
  return (
    <div className={`border-b border-topbar-line bg-primary text-white shadow-[0_4px_20px_0_rgba(0,0,0,0.3)] ${SIDE_PADDING}`}>
      <div className={`${MAX_WIDTH} flex flex-wrap items-center justify-between gap-x-4 gap-y-1 py-3 text-sm leading-[18px]`}>
        <span className="flex items-center gap-2">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="shrink-0">
            <path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5Z" />
          </svg>
          {SITE.address}
        </span>
        <a href={SITE.phoneHref} className="flex items-center gap-2 transition-opacity duration-300 hover:opacity-80">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="shrink-0">
            <path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1L6.6 10.8Z" />
          </svg>
          {SITE.phone}
        </a>
      </div>
    </div>
  );
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isStuck, setIsStuck] = useState(false);

  useEffect(() => {
    // Live site swaps to the compact bar once the original header has scrolled out of view (~160px)
    const onScroll = () => setIsStuck(window.scrollY > 160);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);
  const toggleMenu = () => setMenuOpen((open) => !open);

  return (
    <>
      <header className="absolute inset-x-0 top-0 z-40">
        <TopBar />
        <HeaderBar compact={false} menuOpen={menuOpen && !isStuck} onToggleMenu={toggleMenu} onCloseMenu={closeMenu} />
      </header>

      <div
        aria-hidden={!isStuck}
        className={`fixed inset-x-0 top-0 z-50 bg-white/[0.39] shadow-[0_10px_40px_0_rgba(26,58,82,0.078)] backdrop-blur-[20px] backdrop-saturate-[1.8] transition-transform duration-300 ${
          isStuck ? "translate-y-0" : "invisible -translate-y-full"
        }`}
      >
        <HeaderBar compact menuOpen={menuOpen && isStuck} onToggleMenu={toggleMenu} onCloseMenu={closeMenu} />
      </div>
    </>
  );
}
