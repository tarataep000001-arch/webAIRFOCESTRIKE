import type { Metadata } from "next";
import { LiveTokenMarket } from "@/components/live-token-market";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Market",
  description:
    "Track AIR FORCE STRIKE token market data on World Chain with a premium live Dexscreener dashboard.",
};

export default function MarketPage() {
  return (
    <div className="space-y-16 pb-16">
      <PageHero
        eyebrow="Live market"
        title="Premium market view for the AIR FORCE STRIKE token"
        description="This page shows the live token pair selected from Dexscreener, with a clean chart panel, current price, liquidity, and pair statistics."
        primaryCta={{ href: "#live-token-market", label: "View Live Pair" }}
        secondaryCta={{ href: "https://dexscreener.com/worldchain", label: "Open Dexscreener" }}
      />

      <LiveTokenMarket />
    </div>
  );
}
