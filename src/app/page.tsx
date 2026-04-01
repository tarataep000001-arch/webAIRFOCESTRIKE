import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/hero";
import { PageGridLinks } from "@/components/page-grid-links";
import { siteName } from "@/data/navigation";
import { pageSections } from "@/data/page-sections";

export const metadata: Metadata = {
  title: siteName,
  description:
    "AIR FORCE STRIKE is a premium futuristic air combat game with dedicated pages for gameplay, aircraft, maps, rewards, and live token market data.",
};

export default function HomePage() {
  return (
    <div className="space-y-20 pb-20">
      <Hero
        eyebrow="Elite air combat briefing"
        title={
          <>
            <span className="block bg-gradient-to-b from-slate-100 via-slate-300 to-slate-500 bg-clip-text text-transparent sm:inline">
              AIR FORCE
            </span>{" "}
            <span className="block bg-gradient-to-b from-red-200 via-red-500 to-red-900 bg-clip-text text-transparent sm:inline">
              STRIKE
            </span>
          </>
        }
        description="A premium air combat experience built around aircraft collection, mission progression, rewards, and live market tracking."
        primaryCta={{ href: "/gameplay", label: "Explore Gameplay" }}
        secondaryCta={{ href: "/market", label: "Open Market" }}
        stats={[
          { label: "Pages", value: "7" },
          { label: "Style", value: "Luxury" },
          { label: "Live data", value: "Market" },
        ]}
      >
        <div className="grid gap-4">
          <div className="rounded-3xl border border-gold/20 bg-panel-strong p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gold/80">
              Game concept
            </p>
            <p className="mt-3 text-lg font-semibold text-silver">
              AIR FORCE STRIKE is presented as a high-end, easy-to-scan landing
              page with dedicated routes for every major category.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl border border-gold/15 bg-white/[0.03] p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold/75">
                Clean routing
              </p>
              <p className="mt-2 text-sm leading-7 text-foreground-soft">
                Each top menu item opens its own page.
              </p>
            </div>
            <div className="rounded-3xl border border-gold/15 bg-white/[0.03] p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold/75">
                Minimal home
              </p>
              <p className="mt-2 text-sm leading-7 text-foreground-soft">
                The homepage stays open, premium, and uncluttered.
              </p>
            </div>
          </div>
        </div>
      </Hero>

      <section className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="rounded-[2rem] border border-gold/20 bg-[linear-gradient(180deg,rgba(14,14,16,0.98),rgba(8,8,10,0.98))] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.45)] sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.45em] text-gold/85">
            Short introduction
          </p>
          <p className="mt-4 max-w-4xl text-base leading-8 text-foreground-soft sm:text-lg">
            AIR FORCE STRIKE is a luxurious air battle game where players
            collect aircraft, unlock stronger zones, and track a live token
            market through separate dedicated pages.
          </p>
        </div>
      </section>

      <PageGridLinks
        label="Main pages"
        title="Enter the category that matters most"
        description="Use the menu or the cards below to jump directly into the dedicated page for each game system."
        items={pageSections.home}
      />

      <section className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="rounded-[2rem] border border-gold/20 bg-[linear-gradient(135deg,rgba(200,162,74,0.12),rgba(17,17,20,0.98),rgba(169,31,45,0.1))] p-8 shadow-[0_24px_80px_rgba(0,0,0,0.45)]">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-gold/80">
                Next step
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-[0.08em] text-silver sm:text-4xl">
                Choose a page to continue
              </h2>
              <p className="mt-3 max-w-2xl text-base leading-7 text-foreground-soft">
                Each page now has its own dedicated content, so the homepage can
                stay clean and premium.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Link
                href="/gameplay"
                className="inline-flex items-center justify-center rounded-full bg-gold px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-black transition hover:-translate-y-0.5 hover:bg-gold-light"
              >
                Explore Gameplay
              </Link>
              <Link
                href="/market"
                className="inline-flex items-center justify-center rounded-full border border-gold/30 bg-white/[0.03] px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-gold transition hover:-translate-y-0.5 hover:bg-gold/10"
              >
                Open Market
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
