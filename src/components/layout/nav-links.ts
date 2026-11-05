// src/components/layout/nav-links.ts
export type NavLink = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

// Hardcoded per AGENTS.md H6 — matches live amac.ie menu structure/slugs exactly
export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  {
    label: "About AMAC",
    href: "/about-us",
    children: [
      { label: "Our Story", href: "/our-story" },
      { label: "Meet the Team", href: "/meet-the-team" },
      { label: "Delivery Areas", href: "/areas-we-serve" },
    ],
  },
  {
    label: "Products",
    href: "/products",
    children: [
      { label: "Fertiliser & Soil Nutrition", href: "/fertiliser-soil-nutrition" },
      { label: "Agronomy & Technical Advice", href: "/agronomy-technical-advice" },
      { label: "Animal Feed", href: "/animal-feed" },
      { label: "Silage Wrap & Bale Netting", href: "/silage-bale-plastic-netting" },
      { label: "Solid Fuel Depot", href: "/solid-fuel-depot" },
    ],
  },
  { label: "Brands We Stock", href: "/suppliers" },
  {
    label: "News & Advice",
    href: "/blogs",
    children: [{ label: "Autumn", href: "/blogs?category=autumn" }],
  },
  { label: "Contact", href: "/contact" },
];

export const FOOTER_QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "About AMAC", href: "/about-us" },
  { label: "Farm Supplies & Services", href: "/products" },
  { label: "Brands We Stock", href: "/suppliers" },
  { label: "News & Advice", href: "/blogs" },
  { label: "Contact", href: "/contact" },
];

export const FOOTER_PRODUCT_LINKS = [
  { label: "Fertiliser & Soil Nutrition", href: "/fertiliser-soil-nutrition" },
  { label: "Agronomy & Technical Advice", href: "/agronomy-technical-advice" },
  { label: "Animal Feed", href: "/animal-feed" },
  { label: "Silage Wrap & Bale Netting", href: "/silage-bale-plastic-netting" },
  { label: "Solid Fuel Depot", href: "/solid-fuel-depot" },
];

export const FOOTER_NEWS_LINKS = [{ label: "Harvest 2026", href: "/harvest-2026-east-cork-crop-grain-update" }];
