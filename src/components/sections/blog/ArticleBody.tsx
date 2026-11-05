// src/components/sections/blog/ArticleBody.tsx
import { SIDE_PADDING } from "@/components/layout/layout-classes";
import type { ArticleBlock } from "./harvest-2026-data";

// Large (>=1367px) offsets measured vs live at 1920; smaller screens use live's 14px/30px type (em-based 0.85 / 1.5 margins)
function headingTop(blocks: ArticleBlock[], i: number) {
  const prev = blocks[i - 1];
  if (i === 2) return "mt-[55px] min-[1367px]:mt-[77.5px]";
  return prev.type === "p" && prev.image ? "mt-[65px] min-[1367px]:mt-[53.5px]" : "mt-[10px] clear-both";
}

// Live (amac.ie) puts each image in its own right-floated <p> before a heading
export default function ArticleBody({ blocks }: { blocks: ArticleBlock[] }) {
  return (
    <section className={`bg-white pt-10 pb-[59px] min-[768px]:pt-[60px] min-[768px]:pb-[60px] min-[1367px]:pt-20 min-[1367px]:pb-[121px] ${SIDE_PADDING}`}>
      <div className="mx-auto w-full max-w-[1250px]">
        {blocks.map((b, i) =>
          b.type === "h2" ? (
            <h2
              key={i}
              className={`${headingTop(blocks, i)} mb-[10px] text-[30px] leading-[35px] font-bold text-secondary min-[1367px]:text-[45px] min-[1367px]:leading-[54px]`}
            >
              {b.text}
            </h2>
          ) : (
            <div key={i}>
              <p className="mt-[11.9px] text-[14px] leading-[23.1px] text-muted min-[1367px]:mt-[13.6px] min-[1367px]:text-[16px] min-[1367px]:leading-[26.4px]">
                {b.text}
              </p>
              {b.image ? (
                <p className={`clear-both min-[1367px]:mt-[23.6px] ${i === 1 ? "mt-[21.9px]" : "mt-[31.9px]"}`}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={b.image.src}
                    alt=""
                    width={b.image.w}
                    height={400}
                    loading="lazy"
                    className={`float-right mt-1 ml-[10px] h-auto max-w-full ${i === 13 ? "min-[1367px]:mb-[9px]" : "min-[1367px]:mb-[54px]"}`}
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
