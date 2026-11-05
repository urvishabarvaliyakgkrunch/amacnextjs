// src/components/layout/Footer.tsx
import Link from "next/link";
import FooterContactCard from "./FooterContactCard";
import FooterLinkColumn from "./FooterLinkColumn";
import {
  FOOTER_QUICK_LINKS,
  FOOTER_PRODUCT_LINKS,
  FOOTER_NEWS_LINKS,
} from "./nav-links";

export default function Footer() {
  return (
    <footer className="bg-[color:var(--color-footer)] text-white">
      <FooterContactCard />

      <div className="mx-auto grid max-w-[1680px] grid-cols-1 gap-10 px-4 py-10 sm:grid-cols-3 sm:px-6 lg:px-20">
        <FooterLinkColumn title="Quick Links" links={FOOTER_QUICK_LINKS} />
        <FooterLinkColumn title="Products" links={FOOTER_PRODUCT_LINKS} />
        <FooterLinkColumn title="News & Advice" links={FOOTER_NEWS_LINKS} />
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1680px] flex-col items-center justify-between gap-3 px-4 py-5 text-sm text-white/80 sm:flex-row sm:px-6 lg:px-20">
          <p>
            © 2026 AMAC Farm Supplies Ltd. All Rights Reserved.
            <br className="sm:hidden" /> Website and marketing by{" "}
            <a href="https://methodmarketing.ie" className="underline hover:text-white">
              Method Marketing
            </a>
          </p>
          <div className="flex items-center gap-4">
            <Link href="/terms-conditions" className="hover:text-white">
              Terms &amp; Conditions
            </Link>
            <Link href="/privacy-policy" className="hover:text-white">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
