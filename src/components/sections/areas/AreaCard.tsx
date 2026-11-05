// src/components/sections/areas/AreaCard.tsx
import Image from "next/image";
import type { AreaHub } from "./areas-data";

function PinIcon() {
  return (
    <svg aria-hidden="true" width="14" height="16" viewBox="0 0 384 512" className="shrink-0 fill-primary">
      <path d="M172 501C27 291 0 269 0 192 0 86 86 0 192 0s192 86 192 192c0 77-27 99-172 309a24 24 0 0 1-40 0zm20-229a80 80 0 1 0 0-160 80 80 0 0 0 0 160z" />
    </svg>
  );
}

export default function AreaCard({ badge, title, text, image, towns }: AreaHub) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-[10px] border border-card-border bg-card-bg">
      <div className="relative h-[260px]">
        <Image src={image} alt="" fill className="object-cover" sizes="(min-width: 1280px) 403px, (min-width: 640px) 50vw, 100vw" />
        <span className="absolute top-2.5 left-3 rounded-[5px] bg-team-label px-2 py-1 text-xs leading-4 font-bold text-white">{badge}</span>
      </div>
      <div className="flex flex-1 flex-col p-3">
        <h3 className="text-xl leading-6 font-bold text-secondary">{title}</h3>
        <p className="mt-3 text-base leading-[26px] text-ink">{text}</p>
        <div className="mt-auto border-t border-card-border pt-4">
          <h4 className="mb-3 font-sans text-base leading-5 font-semibold text-secondary">Areas Covered</h4>
          <ul className="flex flex-wrap gap-x-5 gap-y-1">
            {towns.map((town) => (
              <li key={town} className="flex items-center gap-2 text-sm leading-[26px] text-secondary">
                <PinIcon />
                {town}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}
