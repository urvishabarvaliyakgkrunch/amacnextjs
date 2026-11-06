// src/components/layout/nav-links.ts
export type NavLink = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

export const LOGO_URL = "https://amac.ie/wp-content/uploads/2026/05/AMAC-logo-640.webp";

export const SITE = {
  address: "AMAC Farm Supplies, Townspark, Midleton, Co. Cork, P25 P640",
  shortAddress: "Townspark, Midleton, Co. Cork, P25 P640",
  phone: "021-4630683",
  phoneFooter: "021 4630683",
  phoneHref: "tel:021-4630683",
  email: "info@amac.ie",
  blurb:
    "Farm supplies, feed and practical advice from our team in Midleton. Serving East Cork and surrounding areas since 2006.",
};

// Fallback only: used when the WP "Header Menu" can't be fetched
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
    children: [{ label: "Autumn", href: "/category/autumn" }],
  },
  { label: "Contact", href: "/contact" },
];

export const FOOTER_COLUMNS = [
  {
    title: "Quick Links",
    links: [
      { label: "Home", href: "/" },
      { label: "About AMAC", href: "/about-us" },
      { label: "Farm Supplies & Services", href: "/products" },
      { label: "Brands We Stock", href: "/suppliers" },
      { label: "News & Advice", href: "/blogs" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Products",
    links: NAV_LINKS[2].children!,
  },
  {
    title: "News & Advice",
    links: [{ label: "Harvest 2026", href: "/harvest-2026-east-cork-crop-grain-update" }],
  },
];

export const FOOTER_LEGAL_LINKS = [
  { label: "Terms & Conditions", href: "/terms-conditions" },
  { label: "Privacy Policy", href: "/privacy-policy" },
];
