import { NextResponse } from "next/server";
import { fetchMarketSummary } from "@/lib/dexscreener";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const market = await fetchMarketSummary();

    return NextResponse.json(market, {
      headers: {
        "Cache-Control": "no-store, max-age=0",
      },
    });
  } catch {
    return NextResponse.json(
      {
        tokenAddress: "",
        chainName: "World Chain",
        fetchedAt: new Date().toISOString(),
        pair: null,
        pairCount: 0,
      },
      {
        status: 500,
        headers: {
          "Cache-Control": "no-store, max-age=0",
        },
      },
    );
  }
}
