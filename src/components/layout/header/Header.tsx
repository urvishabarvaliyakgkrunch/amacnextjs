// src/components/layout/header/Header.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { LOGO_URL, NAV_LINKS, SITE } from "../nav-links";
import { MAX_WIDTH, SIDE_PADDING } from "../layout-classes";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

// Elementor's tablet breakpoint is 1024px, so the full nav only shows from 1025px up
const DESKTOP_ONLY = "hidden min-[1025px]:flex";
const MOBILE_ONLY = "flex min-[1025px]:hidden";

type HeaderBarProps = {
  compact: boolean;
  // Inner pages sit on a dark hero, so the button/icons are white; Home (sky hero) and the sticky bar use dark ones
  light: boolean;
  menuOpen: boolean;
  onToggleMenu: () => void;
  onCloseMenu: () => void;
  onOpenSearch: () => void;
};

function SearchOverlay({ open, onClose }: { open: boolean; onClose: () => void }) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!open) return;
    inputRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div role="dialog" aria-modal="true" aria-label="Search" className="fixed inset-0 z-[100]" onClick={onClose}>
      <form
        action="/"
        method="get"
        role="search"
        onClick={(e) => e.stopPropagation()}
        className="flex items-center justify-center gap-2 bg-white px-3 py-4 min-[768px]:gap-3 min-[768px]:px-4 min-[768px]:py-[18px] shadow-[0_2px_6px_rgba(0,0,0,0.3)]"
      >
        <div className="flex h-12 min-w-0 flex-1 items-center gap-2 rounded-full border border-black bg-white px-4 min-[768px]:h-14 min-[768px]:max-w-[560px] min-[768px]:px-5">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="shrink-0 text-[#6b6b6b]">
            <circle cx="10.5" cy="10.5" r="7" stroke="currentColor" strokeWidth="2.6" />
            <path d="m16 16 5.5 5.5" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
          </svg>
          <input
            ref={inputRef}
            type="search"
            name="s"
            placeholder="Search..."
            className="min-w-0 flex-1 bg-transparent text-base text-black outline-none placeholder:text-[#757575]"
          />
        </div>
        <button
          type="submit"
          className="h-11 shrink-0 rounded-full border border-black px-4 text-sm min-[768px]:h-[52px] min-[768px]:px-7 min-[768px]:text-base uppercase text-black transition-colors duration-300 hover:border-primary hover:bg-primary hover:text-white"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

function HeaderBar({ compact, light, menuOpen, onToggleMenu, onCloseMenu, onOpenSearch }: HeaderBarProps) {
  return (
    <div className={`relative ${SIDE_PADDING}`}>
      {/* Sticky bar centres the nav on the viewport (3-col grid); the top state just spreads items apart */}
      <div
        className={`${MAX_WIDTH} flex items-center justify-between gap-2.5 max-[767px]:gap-[11px] ${
          compact ? "py-5 min-[1025px]:grid min-[1025px]:grid-cols-[1fr_auto_1fr]" : "py-4"
        }`}
      >
        <button
          type="button"
          onClick={onToggleMenu}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          className={`${MOBILE_ONLY} h-[43px] w-10 items-center justify-center max-[767px]:order-2 min-[768px]:w-[33px] ${
            light ? "text-white" : "text-ink-dark"
          }`}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            {/* Live swaps the bars for an X-in-a-box (Font Awesome window-close) while open */}
            {menuOpen && <rect x="3" y="3" width="18" height="18" rx="2.5" stroke="currentColor" strokeWidth="2" />}
            <path
              d={menuOpen ? "M8.5 8.5l7 7M15.5 8.5l-7 7" : "M3 6h18M3 12h18M3 18h18"}
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>

        {/* Live logo sits in an inline-image box ~8px taller than the image; the nav/buttons centre on that box */}
        {/* <=767px: logo left, hamburger + search grouped on the right; 768-1024px: hamburger left, logo centred */}
        <Link href="/" aria-label="AMAC Farm Supplies — home" className="shrink-0 pb-2 max-[767px]:order-1 max-[767px]:mr-auto">
          <Image
            src={LOGO_URL}
            alt="AMAC Farm Supplies"
            width={175}
            height={78}
            priority={!compact}
            className={compact ? "h-11 w-[100px]" : "h-auto w-[125px] min-[768px]:w-[175px]"}
          />
        </Link>

        <div className={DESKTOP_ONLY}>
          <DesktopNav links={NAV_LINKS} variant={compact ? "plain" : "pill"} />
        </div>

        <div className="flex items-center gap-[11px] max-[767px]:order-3 max-[767px]:-mr-[5px] min-[1025px]:justify-self-end">
          <Link
            href="/contact"
            className={`${DESKTOP_ONLY} items-center rounded-full border px-[15px] py-[13px] text-base font-semibold uppercase leading-6 transition-colors duration-300 hover:border-primary hover:bg-primary hover:text-white min-[1201px]:px-5 min-[1367px]:px-7 ${
              light ? "border-white text-white" : "border-black text-black"
            }`}
          >
            Get in touch
          </Link>
          <button
            type="button"
            aria-label="Search"
            onClick={onOpenSearch}
            className={`flex h-9 w-[26px] items-center justify-center min-[1201px]:w-[31px] ${light ? "text-white" : "text-ink-dark"}`}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <circle cx="10.5" cy="10.5" r="7" stroke="currentColor" strokeWidth="2.6" />
              <path d="m16 16 5.5 5.5" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="absolute inset-x-0 top-full min-[1025px]:hidden">
          <MobileNav links={NAV_LINKS} onNavigate={onCloseMenu} />
        </div>
      )}
    </div>
  );
}

function TopBar() {
  return (
    <div className={`border-b border-topbar-line bg-primary text-white shadow-[0_4px_20px_0_rgba(0,0,0,0.3)] ${SIDE_PADDING}`}>
      {/* <=880px the two items stack and centre (12px text from 768px, 14px on phones); wider = one row */}
      <div
        className={`${MAX_WIDTH} flex flex-wrap items-center justify-center gap-2.5 py-3 text-sm leading-[18px] min-[768px]:flex-col min-[768px]:text-xs min-[881px]:flex-row min-[881px]:justify-between min-[881px]:text-sm`}
      >
        <span className="text-center">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="mr-2 inline align-[-2px]">
            <path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5Z" />
          </svg>
          {SITE.address}
        </span>
        <a href={SITE.phoneHref} className="flex items-center gap-2 transition-opacity duration-300 hover:opacity-80">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="shrink-0">
            <path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1L6.6 10.8Z" />
          </svg>
          {SITE.phone}
        </a>
      </div>
    </div>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isStuck, setIsStuck] = useState(false);

  useEffect(() => {
    // Live site swaps to the compact bar once the original header has scrolled out of view (~160px)
    const onScroll = () => setIsStuck(window.scrollY > 160);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const [searchOpen, setSearchOpen] = useState(false);
  const openSearch = () => setSearchOpen(true);
  const closeSearch = useCallback(() => setSearchOpen(false), []);

  const closeMenu = () => setMenuOpen(false);
  const toggleMenu = () => setMenuOpen((open) => !open);

  return (
    <>
      <header className="absolute inset-x-0 top-0 z-40">
        <TopBar />
        <HeaderBar
          compact={false}
          light={pathname !== "/"}
          menuOpen={menuOpen && !isStuck}
          onToggleMenu={toggleMenu}
          onCloseMenu={closeMenu}
          onOpenSearch={openSearch}
        />
      </header>
      <SearchOverlay open={searchOpen} onClose={closeSearch} />

      <div
        aria-hidden={!isStuck}
        className={`fixed inset-x-0 top-0 z-50 bg-white/[0.39] shadow-[0_10px_40px_0_rgba(26,58,82,0.078)] backdrop-blur-[20px] backdrop-saturate-[1.8] transition-transform duration-300 ${
          isStuck ? "translate-y-0" : "invisible -translate-y-full"
        }`}
      >
        <HeaderBar compact light={false} menuOpen={menuOpen && isStuck} onToggleMenu={toggleMenu} onCloseMenu={closeMenu} onOpenSearch={openSearch} />
      </div>
    </>
  );
}
