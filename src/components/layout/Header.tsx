// src/components/layout/Header.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import TopBar from "./TopBar";
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";
import { NAV_LINKS } from "./nav-links";

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      <TopBar />

      <div className="bg-white/95 backdrop-blur px-4 sm:px-6 lg:px-20 supports-[backdrop-filter]:bg-white/80">
        <div className="mx-auto flex max-w-[1680px] items-center justify-between gap-4  py-3">
          <button
            type="button"
            onClick={() => setIsNavOpen(true)}
            aria-label="Open menu"
            aria-expanded={isNavOpen}
            className="flex h-10 w-10 items-center justify-center text-[color:var(--color-ink-dark)] lg:hidden"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>

          <Link href="/" className="shrink-0" aria-label="AMAC Farm Supplies — home">
            <Image
              src="https://amac.ie/wp-content/uploads/2026/05/AMAC-logo-640.webp"
              alt="AMAC Farm Supplies"
              width={175}
              height={78}
              priority
              className="h-16 w-auto sm:h-[78px]"
            />
          </Link>

          <DesktopNav links={NAV_LINKS} />

          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="hidden items-center rounded-full border border-black px-7 py-3 text-base font-semibold text-black transition-colors duration-300 hover:border-[color:var(--color-primary)] hover:bg-[color:var(--color-primary)] hover:text-white lg:inline-flex"
            >
              GET IN TOUCH
            </Link>

            <button
              type="button"
              aria-label="Search"
              className="flex h-10 w-10 items-center justify-center text-[#1a1a1a]"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
                <path d="m20 20-3.5-3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <MobileNav isOpen={isNavOpen} onClose={() => setIsNavOpen(false)} links={NAV_LINKS} />
    </header>
  );
}
