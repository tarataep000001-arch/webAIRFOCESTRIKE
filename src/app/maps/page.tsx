import type { Metadata } from "next";
import { FeatureCard } from "@/components/feature-card";
import { PageHero } from "@/components/page-hero";
import { PageSectionNav } from "@/components/page-section-nav";
import { SectionTitle } from "@/components/section-title";
import { missionMaps } from "@/data/maps";
import { pageSections } from "@/data/page-sections";

export const metadata: Metadata = {
  title: "Maps",
  description:
    "Explore AIR FORCE STRIKE mission maps and the structured progression from starter zones to endgame direction.",
};

export default function MapsPage() {
  return (
    <div className="space-y-16 pb-16 sm:space-y-20">
      <PageHero
        eyebrow="Mission maps"
        title="Structured combat zones that make progression feel premium"
        description="Maps are the places where aircraft growth becomes visible, with early stages for beginner aircraft and advanced zones for stronger builds."
        primaryCta={{ href: "/aircraft", label: "View Aircraft" }}
        secondaryCta={{ href: "/rewards", label: "View Rewards" }}
      >
        <div className="space-y-4">
          <div className="rounded-2xl border border-gold/15 bg-white/[0.03] p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold/80">
              Structure
            </p>
            <p className="mt-2 text-sm leading-7 text-foreground-soft">
              A clear map ladder keeps the experience easy to understand.
            </p>
          </div>
          <div className="rounded-2xl border border-gold/15 bg-white/[0.03] p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold/80">
              Access
            </p>
            <p className="mt-2 text-sm leading-7 text-foreground-soft">
              Stronger aircraft unlock more advanced zones and higher-value rewards.
            </p>
          </div>
        </div>
      </PageHero>

      <section className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="rounded-[2rem] border border-gold/20 bg-[linear-gradient(180deg,rgba(14,14,16,0.98),rgba(8,8,10,0.98))] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.45)] sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.45em] text-gold/85">
            Short introduction
          </p>
          <p className="mt-4 max-w-4xl text-base leading-8 text-foreground-soft sm:text-lg">
            AIR FORCE STRIKE maps are structured to show progress clearly:
            starter areas introduce the flow, while advanced zones reward
            stronger aircraft and more confident play.
          </p>
        </div>
      </section>

      <PageSectionNav
        title="Maps page guide"
        description="Use this guide to move through the zone structure, the difficulty curve, and the unlock path toward stronger combat areas."
        sections={pageSections.maps}
      />

      <section
        id="zone-structure"
        className="mx-auto w-full max-w-7xl px-6 scroll-mt-28 sm:px-8 lg:px-10"
      >
        <SectionTitle
          eyebrow="Zone structure"
          title="Starter maps lead naturally into elite combat territory"
          description="The map ladder helps the player understand where they are and where they should progress next."
        />
        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {missionMaps.slice(0, 2).map((map) => (
            <FeatureCard
              key={map.name}
              eyebrow={map.name}
              title={map.unlockPath}
              description={map.description}
            >
              <dl className="grid gap-3 text-sm">
                <div className="rounded-2xl border border-gold/15 bg-white/[0.03] px-4 py-3">
                  <dt className="text-[11px] font-semibold uppercase tracking-[0.3em] text-gold/70">
                    Challenge
                  </dt>
                  <dd className="mt-1 text-foreground">{map.challenge}</dd>
                </div>
                <div className="rounded-2xl border border-gold/15 bg-white/[0.03] px-4 py-3">
                  <dt className="text-[11px] font-semibold uppercase tracking-[0.3em] text-gold/70">
                    Reward focus
                  </dt>
                  <dd className="mt-1 text-foreground">{map.rewardFocus}</dd>
                </div>
              </dl>
            </FeatureCard>
          ))}
        </div>
      </section>

      <section
        id="difficulty-growth"
        className="mx-auto w-full max-w-7xl px-6 scroll-mt-28 sm:px-8 lg:px-10"
      >
        <SectionTitle
          eyebrow="Difficulty growth"
          title="Challenge scales upward in a clean, readable way"
          description="The player should feel the difficulty climb without losing track of why each zone matters."
        />
        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {missionMaps.slice(2, 4).map((map) => (
            <FeatureCard
              key={map.name}
              eyebrow={map.name}
              title={map.unlockPath}
              description={map.description}
            >
              <dl className="grid gap-3 text-sm">
                <div className="rounded-2xl border border-gold/15 bg-white/[0.03] px-4 py-3">
                  <dt className="text-[11px] font-semibold uppercase tracking-[0.3em] text-gold/70">
                    Challenge
                  </dt>
                  <dd className="mt-1 text-foreground">{map.challenge}</dd>
                </div>
                <div className="rounded-2xl border border-gold/15 bg-white/[0.03] px-4 py-3">
                  <dt className="text-[11px] font-semibold uppercase tracking-[0.3em] text-gold/70">
                    Reward focus
                  </dt>
                  <dd className="mt-1 text-foreground">{map.rewardFocus}</dd>
                </div>
              </dl>
            </FeatureCard>
          ))}
        </div>
      </section>

      <section
        id="unlock-path"
        className="mx-auto w-full max-w-7xl px-6 scroll-mt-28 sm:px-8 lg:px-10"
      >
        <SectionTitle
          eyebrow="Unlock path"
          title="Stronger aircraft open the next layer of combat"
          description="Unlocks are more satisfying when they reflect the player's improved fleet and growing confidence."
        />
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {[
            {
              title: "Map 1: Starter Zone",
              description:
                "A beginner-friendly area that introduces the combat structure and early mission flow.",
            },
            {
              title: "Map 2: Early Combat Zone",
              description:
                "A step up in pressure that starts rewarding stronger aircraft and sharper play.",
            },
            {
              title: "Map 3: Advanced Engagement Zone",
              description:
                "A mid-game area where aircraft power starts to shape mission success more clearly.",
            },
          ].map((item) => (
            <FeatureCard
              key={item.title}
              eyebrow="Unlock"
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </section>

      <section
        id="advanced-areas"
        className="mx-auto w-full max-w-7xl px-6 scroll-mt-28 sm:px-8 lg:px-10"
      >
        <SectionTitle
          eyebrow="Advanced areas"
          title="Elite zones and endgame direction define the upper layer"
          description="The strongest areas should feel premium, purposeful, and clearly tied to aircraft advancement."
        />
        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {missionMaps.slice(3).map((map) => (
            <FeatureCard
              key={map.name}
              eyebrow={map.name}
              title={map.unlockPath}
              description={map.description}
            >
              <dl className="grid gap-3 text-sm">
                <div className="rounded-2xl border border-gold/15 bg-white/[0.03] px-4 py-3">
                  <dt className="text-[11px] font-semibold uppercase tracking-[0.3em] text-gold/70">
                    Challenge
                  </dt>
                  <dd className="mt-1 text-foreground">{map.challenge}</dd>
                </div>
                <div className="rounded-2xl border border-gold/15 bg-white/[0.03] px-4 py-3">
                  <dt className="text-[11px] font-semibold uppercase tracking-[0.3em] text-gold/70">
                    Reward focus
                  </dt>
                  <dd className="mt-1 text-foreground">{map.rewardFocus}</dd>
                </div>
              </dl>
            </FeatureCard>
          ))}
        </div>
      </section>
    </div>
  );
}
