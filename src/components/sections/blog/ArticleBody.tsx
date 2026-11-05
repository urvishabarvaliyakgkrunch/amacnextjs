// src/components/sections/blog/ArticleBody.tsx
import { SIDE_PADDING } from "@/components/layout/layout-classes";
import type { ArticleBlock } from "./harvest-2026-data";

// Live tiers: <=767 (p 14px, h2 30px), 768-1024 (p 16px, h2 38px), >=1025 (p 16px, h2 45px). Offsets measured vs live.
function headingTop(blocks: ArticleBlock[], i: number) {
  const prev = blocks[i - 1];
  if (i === 2) return "max-[767px]:mt-[55px] min-[768px]:max-[1024px]:mt-[67px] min-[1025px]:mt-[77.5px]";
  return prev.type === "p" && prev.image
    ? "max-[767px]:mt-[30px] min-[768px]:max-[799px]:mt-[77px] min-[800px]:max-[1024px]:mt-[44px] min-[1025px]:mt-[53.5px]"
    : "mt-[10px] clear-both";
}

function imageGap(i: number) {
  return i === 1
    ? "max-[767px]:mt-[21.9px] min-[768px]:max-[1024px]:mt-[23.6px] min-[1025px]:mt-[23.6px]"
    : "max-[767px]:mt-[31.9px] min-[768px]:max-[1024px]:mt-[33.6px] min-[1025px]:max-[1200px]:mt-[38.6px] min-[1201px]:mt-[23.6px]";
}

// Live (amac.ie) puts each image in its own right-floated <p> before a heading
export default function ArticleBody({ blocks }: { blocks: ArticleBlock[] }) {
  return (
    <section className={`bg-white pt-10 pb-[59px] min-[768px]:pt-[60px] min-[768px]:pb-20 min-[1025px]:pt-20 min-[1025px]:pb-[121px] ${SIDE_PADDING}`}>
      <div className="mx-auto w-full max-w-[1250px]">
        {blocks.map((b, i) =>
          b.type === "h2" ? (
            <h2
              key={i}
              className={`${headingTop(blocks, i)} mb-[10px] font-bold text-secondary max-[767px]:text-[30px] max-[767px]:leading-[35px] min-[768px]:max-[1024px]:text-[38px] min-[768px]:max-[1024px]:leading-[45.6px] min-[1025px]:text-[45px] min-[1025px]:leading-[54px]`}
            >
              {b.text}
            </h2>
          ) : (
            <div key={i}>
              <p className="mt-[11.9px] text-[14px] leading-[23.1px] text-muted min-[768px]:mt-[13.6px] min-[768px]:text-[16px] min-[768px]:leading-[26.4px]">
                {b.text}
              </p>
              {b.image ? (
                <p className={`clear-both ${imageGap(i)}`}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={b.image.src}
                    alt=""
                    width={b.image.w}
                    height={400}
                    loading="lazy"
                    className={`md:float-right w-full md:w-auto md:mb-0 mt-1 md:ml-[10px] h-auto max-w-full ${i === 13 ? "min-[1025px]:mb-[9px]" : "min-[1025px]:mb-[54px]"}`}
                  />
                </p>
              ) : null}
            </div>
          ),
        )}
      </div>
    </section>
  );
}
