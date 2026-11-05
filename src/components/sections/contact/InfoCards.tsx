// src/components/sections/contact/InfoCards.tsx
import type { ReactNode } from "react";
import { MAX_WIDTH } from "@/components/layout/layout-classes";
import { ClockIcon, HeadsetIcon, QuoteIcon } from "./contact-data";

type InfoCard = { icon: ReactNode; title: string; lines: string[]; phone?: string };

const CARDS: InfoCard[] = [
  { icon: <ClockIcon />, title: "Business Hours", lines: ["Monday to Friday", "8 am to 5.30 pm", "Saturday", "8 am to 1 pm", "Sunday", "Closed"] },
  { icon: <HeadsetIcon />, title: "Support", lines: ["Need help with your order? Our support team is ready to assist you."], phone: "021 4630683" },
  { icon: <QuoteIcon />, title: "Request a Quote", lines: ["Looking for a specific product or advice? Request a quote and we’ll get back to you."] },
];

export default function InfoCards() {
  return (
    <div className={`${MAX_WIDTH} mt-10 grid grid-cols-1 gap-10 md:mt-[90px] lg:grid-cols-3`}>
      {CARDS.map((card) => (
        <div key={card.title} className="flex gap-4 rounded-[10px] bg-card-bg p-6">
          <span className="shrink-0 text-primary">{card.icon}</span>
          <div>
            <h3 className="text-2xl leading-8 font-bold text-secondary">{card.title}</h3>
            <div className="mt-4 text-[15px] leading-[21.6px] text-ink">
              {card.lines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
            {card.phone ? <a href="tel:+353214630683" className="mt-5 block font-bold text-accent">{card.phone}</a> : null}
          </div>
        </div>
      ))}
    </div>
  );
}
