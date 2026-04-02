export type PageSection = {
  label: string;
  href: string;
  description: string;
};

export const pageSections = {
  home: [
    {
      label: "About",
      href: "/about",
      description: "What AIR FORCE STRIKE is and why it matters.",
    },
    {
      label: "Gameplay",
      href: "/gameplay",
      description: "How missions, combat, and rewards work together.",
    },
    {
      label: "Aircraft",
      href: "/aircraft",
      description: "Grades, tiers, and upgrade progression.",
    },
    {
      label: "Maps",
      href: "/maps",
      description: "Structured zones and unlock progression.",
    },
    {
      label: "Rewards",
      href: "/rewards",
      description: "How mission value feeds long-term growth.",
    },
    {
      label: "Market",
      href: "/market",
      description: "Live token data and premium market view.",
    },
  ] satisfies PageSection[],
  about: [
    {
      label: "What Is The Game",
      href: "#what-is-the-game",
      description: "A concise explanation of the core concept.",
    },
    {
      label: "Core Concept",
      href: "#core-concept",
      description: "The systems that define the experience.",
    },
    {
      label: "Progression Vision",
      href: "#progression-vision",
      description: "Why the game stays engaging over time.",
    },
  ] satisfies PageSection[],
  gameplay: [
    {
      label: "Mission Flow",
      href: "#mission-flow",
      description: "The order of play from selection to exit.",
    },
    {
      label: "Combat Loop",
      href: "#combat-loop",
      description: "How short rounds stay satisfying.",
    },
    {
      label: "Progression Steps",
      href: "#progression-steps",
      description: "The steps that move the player forward.",
    },
    {
      label: "Player Growth",
      href: "#player-growth",
      description: "How gameplay feeds long-term strength.",
    },
  ] satisfies PageSection[],
  aircraft: [
    {
      label: "Upgrade Value",
      href: "#upgrade-value",
      description: "Why each tier matters to the player.",
    },
    {
      label: "Power Growth",
      href: "#power-growth",
      description: "How aircraft become stronger over time.",
    },
    {
      label: "Progression Role",
      href: "#progression-role",
      description: "How tiers drive future unlocks.",
    },
  ] satisfies PageSection[],
  roadmap: [
    {
      label: "Phase 1",
      href: "#phase-1",
      description: "Foundation and core setup.",
    },
    {
      label: "Phase 2",
      href: "#phase-2",
      description: "Core gameplay systems.",
    },
    {
      label: "Phase 3",
      href: "#phase-3",
      description: "Upgrade system.",
    },
    {
      label: "Phase 4",
      href: "#phase-4",
      description: "Reward economy.",
    },
    {
      label: "Phase 5",
      href: "#phase-5",
      description: "Box and collection systems.",
    },
    {
      label: "Phase 6",
      href: "#phase-6",
      description: "Marketplace features.",
    },
    {
      label: "Phase 7",
      href: "#phase-7",
      description: "Competitive features.",
    },
    {
      label: "Phase 8",
      href: "#phase-8",
      description: "Special content.",
    },
    {
      label: "Phase 9",
      href: "#phase-9",
      description: "Social and retention.",
    },
    {
      label: "Phase 10",
      href: "#phase-10",
      description: "Expansion plans.",
    },
  ] satisfies PageSection[],
  maps: [
    {
      label: "Zone Structure",
      href: "#zone-structure",
      description: "The overall layout of mission areas.",
    },
    {
      label: "Difficulty Growth",
      href: "#difficulty-growth",
      description: "How the challenge scales upward.",
    },
    {
      label: "Unlock Path",
      href: "#unlock-path",
      description: "How aircraft lead into new maps.",
    },
    {
      label: "Advanced Areas",
      href: "#advanced-areas",
      description: "Where elite progression begins.",
    },
  ] satisfies PageSection[],
  rewards: [
    {
      label: "Reward Sources",
      href: "#reward-sources",
      description: "Where progress comes from.",
    },
    {
      label: "Growth Value",
      href: "#growth-value",
      description: "Why the reward loop matters.",
    },
    {
      label: "Long-Term Progression",
      href: "#long-term-progression",
      description: "How advancement stays relevant.",
    },
    {
      label: "Player Motivation",
      href: "#player-motivation",
      description: "Why players keep returning.",
    },
  ] satisfies PageSection[],
  market: [
    {
      label: "Market Overview",
      href: "#market-overview",
      description: "What the token market section shows.",
    },
    {
      label: "Live Pair",
      href: "#live-token-market",
      description: "The selected pair with highest liquidity.",
    },
    {
      label: "Actions",
      href: "#market-actions",
      description: "Open Dexscreener or view the full chart.",
    },
  ] satisfies PageSection[],
} as const;
