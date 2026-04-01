import type { Metadata } from "next";
import { AircraftTierCard } from "@/components/aircraft-tier-card";
import { FeatureCard } from "@/components/feature-card";
import { PageHero } from "@/components/page-hero";
import { PageSectionNav } from "@/components/page-section-nav";
import { SectionTitle } from "@/components/section-title";
import { aircraftTiers } from "@/data/aircraft";
import { pageSections } from "@/data/page-sections";

export const metadata: Metadata = {
  title: "Aircraft",
  description:
    "Explore the AIR FORCE STRIKE aircraft rarity and upgrade system, from Free to Special tiers.",
};

export default function AircraftPage() {
  return (
    <div className="space-y-20 pb-16">
      <PageHero
        eyebrow="Aircraft roster"
        title="Rarity tiers that shape the entire experience"
        description="Aircraft progression is one of the core systems of the game, and every tier should feel like a meaningful step forward."
        primaryCta={{ href: "/maps", label: "View Maps" }}
        secondaryCta={{ href: "/rewards", label: "View Rewards" }}
      >
        <div className="space-y-4">
          <div className="rounded-2xl border border-gold/15 bg-white/[0.03] p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold/80">
              Video previews
            </p>
            <p className="mt-2 text-sm leading-7 text-foreground-soft">
              Each tier card now includes its own aircraft video preview so the
              grade is easier to understand visually.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-gold/15 bg-white/[0.03] p-4 text-sm leading-7 text-foreground-soft">
              Free to Special
            </div>
            <div className="rounded-2xl border border-gold/15 bg-white/[0.03] p-4 text-sm leading-7 text-foreground-soft">
              Video per grade
            </div>
          </div>
        </div>
      </PageHero>

      <section className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="rounded-[2rem] border border-gold/20 bg-[linear-gradient(180deg,rgba(14,14,16,0.98),rgba(8,8,10,0.98))] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.45)] sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.45em] text-gold/85">
            Short introduction
          </p>
          <p className="mt-4 max-w-4xl text-base leading-8 text-foreground-soft sm:text-lg">
            AIR FORCE STRIKE uses aircraft tiers to make progression feel clear:
            collect a better fighter, increase its power, and unlock stronger
            missions as you climb the ladder.
          </p>
        </div>
      </section>

      <PageSectionNav
        title="Aircraft page guide"
        description="This guide separates the tier ladder, growth logic, and the role aircraft play in long-term progression."
        sections={pageSections.aircraft}
      />

      <section
        id="tier-overview"
        className="mx-auto w-full max-w-7xl px-6 scroll-mt-28 sm:px-8 lg:px-10"
      >
        <SectionTitle
          eyebrow="Tier overview"
          title="Every aircraft grade is part of a clear progression ladder"
          description="The ladder starts with Free and Common aircraft and climbs through Rare, Epic, Legendary, and Special."
        />
        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {aircraftTiers.map((tier) => (
            <AircraftTierCard key={tier.name} tier={tier} />
          ))}
        </div>
      </section>

      <section
        id="upgrade-value"
        className="mx-auto w-full max-w-7xl px-6 scroll-mt-28 sm:px-8 lg:px-10"
      >
        <SectionTitle
          eyebrow="Why tiers matter"
          title="Aircraft grades give every player a clear sense of direction"
          description="Each tier should create a visible jump in value so the player's next decision always feels meaningful."
        />
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {[
            {
              title: "Combat value changes",
              description:
                "Every tier should deliver a noticeably different sense of performance and battlefield confidence.",
            },
            {
              title: "Access expands",
              description:
                "Higher-tier aircraft are the key to reaching more advanced maps and stronger mission rewards.",
            },
            {
              title: "Progress feels real",
              description:
                "The ladder makes the player's improvement visible, which keeps growth satisfying.",
            },
          ].map((item) => (
            <FeatureCard
              key={item.title}
              eyebrow="Value"
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </section>

      <section
        id="power-growth"
        className="mx-auto w-full max-w-7xl px-6 scroll-mt-28 sm:px-8 lg:px-10"
      >
        <SectionTitle
          eyebrow="How aircraft growth works"
          title="Leveling up aircraft turns rewards into real strength"
          description="Upgrades should feel like the direct result of playing well and investing in the right aircraft."
        />
        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {[
            "Level progression adds power without making the system confusing.",
            "Better tiers create stronger mission readiness and smoother clears.",
            "Growth stays connected to the player's current roster and choices.",
          ].map((text) => (
            <FeatureCard
              key={text}
              eyebrow="Growth"
              title={text}
              description="The system keeps the aircraft roster at the center of progression."
            />
          ))}
        </div>
      </section>

      <section
        id="progression-role"
        className="mx-auto w-full max-w-7xl px-6 scroll-mt-28 sm:px-8 lg:px-10"
      >
        <SectionTitle
          eyebrow="Progression advantage"
          title="Aircraft are the core driver of future unlocks"
          description="The best long-term loop is one where aircraft growth and content access move upward together."
        />
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {[
            {
              title: "Stronger aircraft, stronger maps",
              description:
                "Progression gives players a reason to keep improving their fleet and seeking the next tier.",
            },
            {
              title: "Upgrade choices matter",
              description:
                "Each decision about aircraft growth should affect the player's future options and mission results.",
            },
            {
              title: "Endgame focus remains clear",
              description:
                "Legendary and Special tiers keep the roster chase relevant for dedicated players.",
            },
          ].map((item) => (
            <FeatureCard
              key={item.title}
              eyebrow="Advantage"
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
