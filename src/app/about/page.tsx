import type { Metadata } from "next";
import { FeatureCard } from "@/components/feature-card";
import { PageHero } from "@/components/page-hero";
import { PageSectionNav } from "@/components/page-section-nav";
import { SectionTitle } from "@/components/section-title";
import { features } from "@/data/features";
import { pageSections } from "@/data/page-sections";
import { siteName } from "@/data/navigation";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn what AIR FORCE STRIKE is, why it is interesting, and how progression, upgrades, and map unlocks work.",
};

const journeyCards = [
  {
    title: "Upgrade strategically",
    description:
      "Growth is more meaningful when every improvement clearly changes mission strength and access.",
  },
  {
    title: "Unlock stronger maps",
    description:
      "The game rewards steady progress by moving the player into tougher and more valuable combat zones.",
  },
  {
    title: "Keep developing",
    description:
      "AIR FORCE STRIKE is built so long-term development always feels connected to play.",
  },
];

export default function AboutPage() {
  return (
    <div className="space-y-20 pb-16">
      <PageHero
        eyebrow="About AIR FORCE STRIKE"
        title="A progression-based air combat game designed to feel elite"
        description={`${siteName} focuses on strategic upgrades, mission progression, and unlocking stronger maps over time.`}
        showAside={false}
        primaryCta={{ href: "/gameplay", label: "Explore Gameplay" }}
        secondaryCta={{ href: "/aircraft", label: "View Aircraft" }}
      />

      <section className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="rounded-[2rem] border border-gold/20 bg-[linear-gradient(180deg,rgba(14,14,16,0.98),rgba(8,8,10,0.98))] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.45)] sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.45em] text-gold/85">
            Short introduction
          </p>
          <p className="mt-4 max-w-4xl text-base leading-8 text-foreground-soft sm:text-lg">
            AIR FORCE STRIKE is designed as a premium air combat journey where
            players steadily strengthen and evolve aircraft while the
            combat zones become more ambitious over time.
          </p>
        </div>
      </section>

      <PageSectionNav
        title="About page guide"
        description="This page explains the game concept and why the progression loop remains compelling."
        sections={pageSections.about}
      />

      <section
        id="what-is-the-game"
        className="mx-auto w-full max-w-7xl px-6 scroll-mt-28 sm:px-8 lg:px-10"
      >
        <SectionTitle
          eyebrow="What is AIR FORCE STRIKE"
          title="A fast-paced air battle game with a premium progression ladder"
          description="The game combines mission-based combat and visible long-term growth into one cohesive experience."
        />
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {features.slice(1, 4).map((feature) => (
            <FeatureCard
              key={feature.title}
              eyebrow={feature.eyebrow}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </section>

      <section
        id="core-concept"
        className="mx-auto w-full max-w-7xl px-6 scroll-mt-28 sm:px-8 lg:px-10"
      >
        <SectionTitle
          eyebrow="Core concept"
          title="The experience is built around one clear growth loop"
          description="Players upgrade their combat value and keep moving into stronger missions and zones."
        />
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {journeyCards.map((item) => (
            <FeatureCard
              key={item.title}
              eyebrow="Core loop"
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </section>

      <section
        id="progression-vision"
        className="mx-auto w-full max-w-7xl px-6 scroll-mt-28 sm:px-8 lg:px-10"
      >
        <SectionTitle
          eyebrow="Progression vision"
          title="Why the game stays engaging over time"
          description="The entire system is designed around steady gains, visible unlocks, and a clear reason to return."
        />
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {[
            {
              title: "Visible unlocks",
              description:
                "Map access and aircraft tiers show progress in a way that is easy to read at a glance.",
            },
            {
              title: "Strategic growth",
              description:
                "Players can make choices that directly affect combat power and future opportunities.",
            },
            {
              title: "Long-term development",
              description:
                "The progression path keeps extending so the game remains relevant after the first few missions.",
            },
          ].map((item) => (
            <FeatureCard
              key={item.title}
              eyebrow="Vision"
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </section>

      <section
        id="why-the-game-is-engaging"
        className="mx-auto w-full max-w-7xl px-6 scroll-mt-28 sm:px-8 lg:px-10"
      >
        <SectionTitle
          eyebrow="Why the game is engaging"
          title="Premium presentation with a clear, rewarding structure"
          description="The appeal comes from combining elite presentation with a simple loop that always points toward growth."
        />
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {[
            "Clear combat goals make each mission feel purposeful.",
            "Aircraft growth creates a satisfying sense of rising power.",
            "Map progression gives players a visible direction to follow.",
          ].map((text) => (
            <FeatureCard
              key={text}
              eyebrow="Engagement"
              title={text}
              description="The experience stays readable, premium, and easy for new players to follow."
            />
          ))}
        </div>
      </section>
    </div>
  );
}
