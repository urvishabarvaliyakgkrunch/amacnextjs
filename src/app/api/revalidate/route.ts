// src/app/api/revalidate/route.ts
import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";
import { POSTS_TAG } from "@/lib/graphql";
import { MENU_TAG } from "@/lib/queries/menu";

// Clears cached WordPress data on demand, so a post change shows up without waiting the 1 hour.
// GET is allowed too so it can be opened straight in the browser; the secret still protects it.
export async function GET(request: Request) {
  return POST(request);
}

export async function POST(request: Request) {
  const secret = process.env.REVALIDATE_SECRET;
  if (!secret) {
    return NextResponse.json({ error: "REVALIDATE_SECRET is not set." }, { status: 500 });
  }

  const url = new URL(request.url);
  if (url.searchParams.get("secret") !== secret) {
    return NextResponse.json({ error: "Bad secret." }, { status: 401 });
  }

  // Default = stale-while-revalidate: visitors keep getting the old page while the new one builds in the background.
  // ?now=1 expires immediately instead (next visit waits for WordPress).
  const profile = url.searchParams.get("now") === "1" ? { expire: 0 } : "max";
  revalidateTag(POSTS_TAG, profile);
  revalidateTag(MENU_TAG, profile);
  return NextResponse.json({ cleared: [POSTS_TAG, MENU_TAG], clearedAt: new Date().toISOString() });
}
