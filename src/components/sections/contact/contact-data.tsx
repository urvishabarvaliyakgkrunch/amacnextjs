// src/components/sections/contact/contact-data.tsx
import type { ReactNode } from "react";

const ICON = "h-6 w-6 fill-none stroke-current stroke-[1.8]";

export const PhoneIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6 fill-current"><path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1.02l-2.2 2.2z" /></svg>
);
export const MailIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24" className={ICON}><rect x="3" y="5" width="18" height="14" rx="1.500" /><path d="m3.500 6.500 8.500 7 8.500-7" /></svg>
);
export const PinIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6 fill-current"><path d="M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7zm0 9.500A2.500 2.500 0 1 1 12 6.500a2.500 2.500 0 0 1 0 5z" /></svg>
);
export const ClockIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 48 48" className="h-[54px] w-[54px] fill-none stroke-current stroke-[1.5]"><circle cx="24" cy="24" r="22" /><circle cx="24" cy="24" r="18.500" /><path d="M24 11v13l-6 8" strokeLinecap="round" /></svg>
);
export const HeadsetIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 48 48" className="h-[54px] w-[54px] fill-none stroke-current stroke-[1.5]"><path d="M9 28v-6a15 15 0 0 1 30 0v6" /><rect x="5" y="22" width="8" height="14" rx="3" /><rect x="35" y="22" width="8" height="14" rx="3" /><path d="M39 36v2a6 6 0 0 1-6 6h-4" /><circle cx="26" cy="44" r="2.500" /></svg>
);
export const QuoteIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 48 48" className="h-[54px] w-[54px] fill-none stroke-current stroke-[1.5]"><path d="M10 4h22l8 8v32H10z" /><path d="M32 4v8h8M16 22h20M16 28h20M16 34h20" /></svg>
);

export type ContactRow = { icon: ReactNode; title: string; lines: string[] };

export const CONTACT_ROWS: ContactRow[] = [
  { icon: <PhoneIcon />, title: "021 4630683", lines: ["Monday to Friday: 8 am to 5.30 pm", "Saturday: 8 am to 1 pm"] },
  { icon: <MailIcon />, title: "info@amac.ie", lines: ["We aim to reply within 24 hours"] },
  { icon: <PinIcon />, title: "AMAC Farm Supplies", lines: ["Townspark, Midleton, Co. Cork, P25 P640"] },
];

export const DEPARTMENTS = ["Sales", "Accounts", "Agronomy", "Feed"];
