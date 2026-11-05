// src/components/sections/areas/areas-data.ts
const UPLOADS = "https://amac.ie/wp-content/uploads/2026/07";

export type AreaHub = {
  badge: string;
  title: string;
  text: string;
  image: string;
  towns: string[];
};

export const AREA_HUBS: AreaHub[] = [
  { badge: "East & West Cork", title: "Supporting Local Farms", text: "Providing farm supplies, agronomy advice, and feed solutions across East Cork.", image: `${UPLOADS}/DM1_0328-1-1030x687-1.webp`, towns: ["Midleton", "Youghal", "Bandon (West Cork)"] },
  { badge: "North Cork", title: "Trusted Farming Partner", text: "Helping farmers improve productivity with expert support and quality products.", image: `${UPLOADS}/ob4haaoktxgtkfjwzvnl-1030x687-1.webp`, towns: ["Mallow", "Fermoy", "Charleville", "Kanturk", "Mitchelstown"] },
  { badge: "South Limerick", title: "Expert Agricultural Support", text: "Delivering practical farming solutions tailored to local needs.", image: `${UPLOADS}/DM1_0231-1030x687-1.webp`, towns: ["Croom"] },
  { badge: "West Waterford", title: "Growing Farm Success", text: "Supporting farms with reliable advice, feed, and agronomy services.", image: `${UPLOADS}/DM1_0477-1030x687-1.webp`, towns: ["Dungarvan", "Ballyduff", "Tallow"] },
];
