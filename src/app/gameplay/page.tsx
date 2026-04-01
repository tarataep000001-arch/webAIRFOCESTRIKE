import type { Metadata } from "next";
import { FeatureCard } from "@/components/feature-card";
import { PageHero } from "@/components/page-hero";
import { PageSectionNav } from "@/components/page-section-nav";
import { SectionTitle } from "@/components/section-title";
import { pageSections } from "@/data/page-sections";

export const metadata: Metadata = {
  title: "Gameplay",
  description:
    "Understand the AIR FORCE STRIKE gameplay flow from choosing an aircraft to completing missions and earning rewards.",
};

const missionSteps = [
  {
    title: "Choose aircraft",
    description:
      "Select the aircraft that best fits the mission and your current power level.",
  },
  {
    title: "Enter mission",
    description:
      "Drop into a short combat round built for quick readability and strong pacing.",
  },
  {
    title: "Battle enemies",
    description:
      "Fight through the mission with the aircraft you have grown and refined.",
  },
  {
    title: "Earn rewards",
    description:
      "Collect the reward layer that supports upgrades and future growth.",
  },
  {
    title: "Upgrade and progress",
    description:
      "Use the reward loop to make aircraft stronger and unlock the next challenge layer.",
  },
];

export default function GameplayPage() {
  return (
    <div className="space-y-20 pb-16">
      <PageHero
        eyebrow="Gameplay system"
        title="Simple to understand, premium to experience"
        description="The gameplay flow is built around short missions, combat clarity, rewards, and aircraft-driven progression."
        primaryCta={{ href: "/aircraft", label: "View Aircraft" }}
        secondaryCta={{ href: "/maps", label: "View Maps" }}
      >
        <div className="space-y-4">
          <div className="rounded-2xl border border-gold/15 bg-white/[0.03] p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold/80">
              Flow
            </p>
            <p className="mt-2 text-sm leading-7 text-foreground-soft">
              A clean mission loop keeps every round focused and easy to follow.
            </p>
          </div>
          <div className="rounded-2xl border border-gold/15 bg-white/[0.03] p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold/80">
              Purpose
            </p>
            <p className="mt-2 text-sm leading-7 text-foreground-soft">
              Each mission contributes to aircraft growth and the next unlock.
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
            AIR FORCE STRIKE keeps the action readable: pick your aircraft,
            enter a mission, clear enemies, earn rewards, and turn that success
            into stronger aircraft and better access.
          </p>
        </div>
      </section>

      <PageSectionNav
        title="Gameplay page guide"
        description="Use this guide to move through the mission flow, the combat loop, and the long-term growth path."
        sections={pageSections.gameplay}
      />

      <section
        id="mission-flow"
        className="mx-auto w-full max-w-7xl px-6 scroll-mt-28 sm:px-8 lg:px-10"
      >
        <SectionTitle
          eyebrow="Mission flow"
          title="The opening loop is built for clarity"
          description="Each mission begins with a simple decision, then moves quickly into combat and a visible result."
        />
        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
          {missionSteps.map((item, index) => (
            <FeatureCard
              key={item.title}
              eyebrow={`Step 0${index + 1}`}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </section>

      <section
        id="combat-loop"
        className="mx-auto w-full max-w-7xl px-6 scroll-mt-28 sm:px-8 lg:px-10"
      >
        <SectionTitle
          eyebrow="Combat loop"
          title="Short rounds keep the action focused and satisfying"
          description="The combat layer should feel premium while staying easy to read even for first-time players."
        />
        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {[
            {
              title: "Choose aircraft",
              description:
                "Pick a fighter that matches the mission and the current upgrade level of your roster.",
            },
            {
              title: "Enter mission",
              description:
                "Start a compact combat round that keeps the pacing sharp and cinematic.",
            },
            {
              title: "Battle enemies",
              description:
                "Use your aircraft's power to clear threats and keep the mission moving forward.",
            },
            {
              title: "Complete rounds",
              description:
                "Finishing the mission cleanly should always feel like a meaningful outcome.",
            },
            {
              title: "Earn rewards",
              description:
                "Victory converts into the resources needed for upgrades and future progression.",
            },
            {
              title: "Upgrade and progress",
              description:
                "Rewards feed aircraft power, which opens stronger missions and new goals.",
            },
          ].map((item) => (
            <FeatureCard
              key={item.title}
              eyebrow="Loop"
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </section>

      <section
        id="progression-steps"
        className="mx-auto w-full max-w-7xl px-6 scroll-mt-28 sm:px-8 lg:px-10"
      >
        <SectionTitle
          eyebrow="Progression steps"
          title="The mission loop becomes your growth engine"
          description="The best version of this system makes it obvious how each run contributes to the next improvement."
        />
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {[
            {
              title: "Reward gain",
              description:
                "Every successful mission should feed the player's ability to improve aircraft and move forward.",
            },
            {
              title: "Power increase",
              description:
                "Aircraft upgrades convert reward value into noticeably stronger combat performance.",
            },
            {
              title: "Zone advancement",
              description:
                "Better aircraft unlock the next level of mission design and give the loop a clear direction.",
            },
          ].map((item) => (
            <FeatureCard
              key={item.title}
              eyebrow="Progression"
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </section>

      <section
        id="player-growth"
        className="mx-auto w-full max-w-7xl px-6 scroll-mt-28 sm:px-8 lg:px-10"
      >
        <SectionTitle
          eyebrow="Player growth"
          title="The design keeps long-term play easy to understand"
          description="Players always see why they are improving, what they can do next, and which systems matter most."
        />
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {[
            "A clear loop makes the game easy to learn from the first mission.",
            "Aircraft growth keeps the sense of power rising as the player advances.",
            "Reward-based progression gives every run a practical purpose.",
          ].map((text) => (
            <FeatureCard
              key={text}
              eyebrow="Growth"
              title={text}
              description="The experience remains premium while staying approachable for new players."
            />
          ))}
        </div>
      </section>
    </div>
  );
}
