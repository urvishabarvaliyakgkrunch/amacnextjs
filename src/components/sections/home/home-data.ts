// src/components/sections/home/home-data.ts
import type { IconCardData } from "@/types/cards";

const ICONS = "/icons/home";
const UPLOADS = "https://amac.ie/wp-content/uploads";

export const HERO_STATS = [
  { icon: `${ICONS}/hero-team.svg`, title: "Serving Farmers Since 2006", text: "Experienced Agricultural Team" },
  { icon: `${ICONS}/hero-delivery.svg`, title: "Regular Regional Delivery", text: "Fast Regional Farm Delivery" },
  { icon: `${ICONS}/hero-agronomy.svg`, title: "Expert Agronomy", text: "Expert Crop & Soil Guidance" },
];

export const HOME_PRODUCTS: IconCardData[] = [
  {
    title: "Fertiliser",
    text: "Reliable nutrient solutions for stronger yields and healthier farming results.",
    icon: `${ICONS}/product-fertiliser.svg`,
    iconSize: 54,
    image: `${UPLOADS}/2026/08/DM1_0626-1600w-495x400-optimised.webp`,
    href: "/fertiliser-soil-nutrition",
  },
  {
    title: "Animal Feed",
    text: "Quality animal feed formulated for balanced nutrition and healthy livestock growth.",
    icon: `${ICONS}/product-feed.svg`,
    iconSize: 58,
    image: `${UPLOADS}/2026/08/Animal-Feed-scaled-1-495x400-optimised.webp`,
    href: "/animal-feed",
  },
  {
    title: "Grass Seeds",
    text: "Quality grass seeds for stronger growth, healthy pasture, and reliable results.",
    icon: `${ICONS}/product-seeds.svg`,
    iconSize: 58,
    image: `${UPLOADS}/2026/08/Grass-Seeds-scaled-1-495x400-optimised.webp`,
    href: "/fertiliser-soil-nutrition",
  },
  {
    title: "Crop Protection",
    text: "Effective agrochemicals to protect crops and support healthy farm growth.",
    icon: `${ICONS}/product-crop.svg`,
    iconSize: 58,
    image: `${UPLOADS}/2026/08/DM1_0265-1600w-495x400-optimised.webp`,
    href: "/fertiliser-soil-nutrition",
    linkLabel: "agrochemicals",
  },
  {
    title: "Solid Fuel",
    text: "Reliable solid fuels for warmth, comfort and efficiency.",
    icon: `${ICONS}/product-fuel.svg`,
    iconSize: 58,
    href: "/solid-fuel-depot",
  },
  {
    title: "Agronomy & Technical Advice",
    text: "Expert agronomy support and practical technical advice to help you achieve better results, improve efficiency and make informed decisions.",
    icon: `${ICONS}/product-agronomy.svg`,
    iconSize: 58,
    href: "/agronomy-technical-advice",
  },
];

export const TECH_SERVICES: IconCardData[] = [
  { title: "Crop Agronomy", text: "Professional agronomy support for cereals, grassland, maize, forage & root crops.", icon: `${ICONS}/service-crop.svg`, iconSize: 41 },
  { title: "Seed & Fertiliser Advice", text: "Expert seed & fertiliser advice for stronger growth and higher yields.", icon: `${ICONS}/service-seed.svg`, iconSize: 41 },
  { title: "Spray Programme Support", text: "Practical guidance on herbicides, fungicides and crop protection solutions tailored to seasonal needs.", icon: `${ICONS}/service-spray.svg`, iconSize: 38 },
  { title: "Animal Feed Consultancy", text: "Nutritional advice and feed planning support for dairy, beef, sheep, and equine farming needs.", icon: `${ICONS}/service-feed.svg`, iconSize: 41 },
];

export const TEAM = [
  { name: "Aidan Murphy", role: "Director - Sales (Agri Sales)", image: `${UPLOADS}/2026/07/Aidan-Murphy-web.webp` },
  { name: "Richard McCarthy", role: "Director - Sales (Agri Sales)", image: `${UPLOADS}/2026/07/Richard-McCarthy-web.webp` },
  { name: "Stephen Gumbleton", role: "Sales", image: `${UPLOADS}/2026/07/Stephen-Gumbleton-web.webp` },
  { name: "Bobby McCarthy", role: "Sales", image: `${UPLOADS}/2026/07/Bobby-McCarthy-web.webp` },
];
