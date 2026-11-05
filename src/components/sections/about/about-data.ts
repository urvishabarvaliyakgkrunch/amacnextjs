// src/components/sections/about/about-data.ts
import type { FeatureCardData } from "@/types/cards";

const ICONS = "/icons/about";

export const ABOUT_VALUES: FeatureCardData[] = [
  { title: "Customer Satisfaction", icon: `${ICONS}/values-satisfaction.svg`, text: "We put our customers first by delivering trusted advice, dependable service, and solutions that help their farms succeed." },
  { title: "Quality", icon: `${ICONS}/values-quality.svg`, text: "We supply carefully selected products and expert agronomy support to ensure consistent performance and reliable results." },
  { title: "Reliability", icon: `${ICONS}/values-reliability.svg`, text: "Our customers can count on us for honest guidance, timely delivery, and dependable support throughout every season." },
  { title: "Regional Growth", icon: `${ICONS}/values-growth.svg`, text: "We are committed to strengthening agriculture across our local communities by supporting farmers and promoting long-term regional success." },
];

export const WHY_CHOOSE: FeatureCardData[] = [
  { title: "Expert Agronomy Support", icon: `${ICONS}/why-agronomy.svg`, text: "Personalised advice backed by industry knowledge and real-world field experience." },
  { title: "Premium Products", icon: `${ICONS}/why-products.svg`, text: "Carefully selected agricultural products that deliver proven results season after season." },
  { title: "Farmer-First Approach", icon: `${ICONS}/why-farmer.svg`, text: "We listen, understand and tailor solutions to the unique needs of your farm and goals." },
  { title: "Long-Term Partnerships", icon: `${ICONS}/why-partnership.svg`, text: "We build trusted relationships that grow with you and your business for the long term." },
];
