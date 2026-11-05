// src/components/layout/TopBar.tsx
export default function TopBar() {
  return (
    <div className="bg-[color:var(--color-primary)] text-white px-4  sm:px-6 lg:px-10">
      <div className="mx-auto flex max-w-[1680px] flex-col items-start gap-1 py-2 text-sm sm:flex-row sm:items-center sm:justify-between ">
        <div className="flex items-center gap-2">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="shrink-0">
            <path
              d="M12 22s7-7.1 7-12.5A7 7 0 0 0 5 9.5C5 14.9 12 22 12 22Z"
              stroke="currentColor"
              strokeWidth="1.6"
            />
            <circle cx="12" cy="9.5" r="2.4" stroke="currentColor" strokeWidth="1.6" />
          </svg>
          <span>AMAC Farm Supplies, Townspark, Midleton, Co. Cork, P25 P640</span>
        </div>
        <a href="tel:0214630683" className="flex items-center gap-2 font-semibold">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="shrink-0">
            <path
              d="M4 5c0 8.284 6.716 15 15 15l1-4-5-2-1.5 2A12.04 12.04 0 0 1 7 9.5L9 8 7 3 4 4Z"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinejoin="round"
            />
          </svg>
          021-4630683
        </a>
      </div>
    </div>
  );
}
