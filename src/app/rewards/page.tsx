import type { Metadata } from "next";
import { FeatureCard } from "@/components/feature-card";
import { PageHero } from "@/components/page-hero";
import { PageSectionNav } from "@/components/page-section-nav";
import { SectionTitle } from "@/components/section-title";
import { pageSections } from "@/data/page-sections";

export const metadata: Metadata = {
  title: "Rewards",
  description:
    "Understand how AIR FORCE STRIKE rewards, growth, and progression work together to keep the game moving forward.",
};

export default function RewardsPage() {
  return (
    <div className="space-y-20 pb-16">
      <PageHero
        eyebrow="Rewards and growth"
        title="Progress should feel steady, valuable, and premium"
        description="AIR FORCE STRIKE uses rewards as the bridge between missions, aircraft upgrades, and long-term development."
        primaryCta={{ href: "/gameplay", label: "Explore Gameplay" }}
        secondaryCta={{ href: "/maps", label: "View Maps" }}
      >
        <div className="space-y-4">
          <div className="rounded-2xl border border-gold/15 bg-white/[0.03] p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold/80">
              Core idea
            </p>
            <p className="mt-2 text-sm leading-7 text-foreground-soft">
              Rewards support growth instead of distracting from the game concept.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-gold/15 bg-white/[0.03] p-4 text-sm leading-7 text-foreground-soft">
              Mission value
            </div>
            <div className="rounded-2xl border border-gold/15 bg-white/[0.03] p-4 text-sm leading-7 text-foreground-soft">
              Growth value
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
            The reward system is meant to feel elegant and practical: complete
            missions, receive useful value, improve aircraft, and keep moving
            toward stronger content.
          </p>
        </div>
      </section>

      <PageSectionNav
        title="Rewards page guide"
        description="Follow this guide to understand where rewards come from, why they matter, and how they support long-term growth."
        sections={pageSections.rewards}
      />

      <section
        id="reward-sources"
        className="mx-auto w-full max-w-7xl px-6 scroll-mt-28 sm:px-8 lg:px-10"
      >
        <SectionTitle
          eyebrow="Reward sources"
          title="Growth begins with mission completion"
          description="The reward model should start with action and end with a clearer path toward better aircraft and better maps."
        />
        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {[
            {
              title: "Mission completion",
              description:
                "Successful rounds provide the base value that keeps the progression loop moving.",
            },
            {
              title: "Aircraft improvement",
              description:
                "Rewards become stronger when they are invested into aircraft upgrades and tier growth.",
            },
            {
              title: "Stronger content",
              description:
                "Higher aircraft value opens access to more advanced zones and better challenges.",
            },
            {
              title: "Long-term loop",
              description:
                "The entire reward structure should support continued play and steady advancement.",
            },
          ].map((item) => (
            <FeatureCard
              key={item.title}
              eyebrow="Source"
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </section>

      <section
        id="growth-value"
        className="mx-auto w-full max-w-7xl px-6 scroll-mt-28 sm:px-8 lg:px-10"
      >
        <SectionTitle
          eyebrow="Growth value"
          title="Rewards should always translate into visible improvement"
          description="Players should understand exactly how mission success turns into a stronger and more capable roster."
        />
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {[
            {
              title: "Useful rewards",
              description:
                "The reward layer must feel practical so it always has a purpose in the progression loop.",
            },
            {
              title: "Combat strength",
              description:
                "Every resource should help increase combat value or unlock the next stage of the journey.",
            },
            {
              title: "Clear feedback",
              description:
                "The player should always see the effect of a successful mission in the next upgrade step.",
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
        id="long-term-progression"
        className="mx-auto w-full max-w-7xl px-6 scroll-mt-28 sm:px-8 lg:px-10"
      >
        <SectionTitle
          eyebrow="Long-term progression"
          title="The reward loop keeps the game moving forward"
          description="AIR FORCE STRIKE becomes more compelling when rewards continue to support the next upgrade and the next zone."
        />
        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {[
            "Rewards help the player keep a sense of steady momentum.",
            "Aircraft progression stays connected to every mission outcome.",
            "The game always points toward stronger content and a stronger roster.",
          ].map((text) => (
            <FeatureCard
              key={text}
              eyebrow="Progression"
              title={text}
              description="The reward structure keeps advancement visible and worth pursuing."
            />
          ))}
        </div>
      </section>

      <section
        id="player-motivation"
        className="mx-auto w-full max-w-7xl px-6 scroll-mt-28 sm:px-8 lg:px-10"
      >
        <SectionTitle
          eyebrow="Player motivation"
          title="A clear reward structure makes the game easy to return to"
          description="Players keep coming back when each session feels like it moved the aircraft roster or the next unlock forward."
        />
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {[
            {
              title: "A reason to play again",
              description:
                "Every mission should feel like it made a practical contribution to future progression.",
            },
            {
              title: "A reason to improve",
              description:
                "Growth feels meaningful when it changes how the player approaches the next mission.",
            },
            {
              title: "A reason to climb",
              description:
                "The reward loop stays engaging when higher aircraft and stronger maps remain within reach.",
            },
          ].map((item) => (
            <FeatureCard
              key={item.title}
              eyebrow="Motivation"
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
