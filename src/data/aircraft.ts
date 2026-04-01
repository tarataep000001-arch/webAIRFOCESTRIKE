export type AircraftTier = {
  name: string;
  description: string;
  combatValue: string;
  progressionNote: string;
  playerValue: string;
  videoSrc: string;
  videoSources?: string[];
};

export const aircraftTiers: AircraftTier[] = [
  {
    name: "Free",
    description:
      "The entry aircraft that teaches the core loop and gives every player a clean starting point.",
    combatValue: "Starter combat value",
    progressionNote: "Built for early learning and basic mission flow.",
    playerValue: "A frictionless way to begin the game.",
    videoSrc: "/videos/aircraft/free.mp4",
  },
  {
    name: "Common",
    description:
      "A reliable tier that improves mission comfort and starts the player's upgrade path.",
    combatValue: "Stable combat value",
    progressionNote: "First meaningful step beyond the starter aircraft.",
    playerValue: "A practical upgrade with clear utility.",
    videoSrc: "/videos/aircraft/common-1.mp4",
    videoSources: [
      "/videos/aircraft/common-1.mp4",
      "/videos/aircraft/common-2.mp4",
      "/videos/aircraft/common-3.mp4",
      "/videos/aircraft/common-4.mp4",
    ],
  },
  {
    name: "Rare",
    description:
      "A stronger aircraft tier that begins to shape the player's preferred combat style.",
    combatValue: "Stronger combat value",
    progressionNote: "Starts opening more demanding mission zones.",
    playerValue: "A clear power increase with more flexibility.",
    videoSrc: "/videos/aircraft/rare-1.mp4",
    videoSources: [
      "/videos/aircraft/rare-1.mp4",
      "/videos/aircraft/rare-2.mp4",
      "/videos/aircraft/rare-3.mp4",
      "/videos/aircraft/rare-4.mp4",
    ],
  },
  {
    name: "Epic",
    description:
      "A premium mid-to-high tier aircraft with a stronger presence in more intense encounters.",
    combatValue: "High combat value",
    progressionNote: "Designed for deeper progression and tougher maps.",
    playerValue: "A rewarding tier that feels like a major step up.",
    videoSrc: "/videos/aircraft/epic-1.mp4",
    videoSources: [
      "/videos/aircraft/epic-1.mp4",
      "/videos/aircraft/epic-2.mp4",
      "/videos/aircraft/epic-3.mp4",
      "/videos/aircraft/epic-4.mp4",
    ],
  },
  {
    name: "Legendary",
    description:
      "An elite aircraft grade that represents advanced growth and serious long-term progress.",
    combatValue: "Elite combat value",
    progressionNote: "Unlocks the upper edge of standard progression.",
    playerValue: "A prestigious goal with strong endgame appeal.",
    videoSrc: "/videos/aircraft/legendary.mp4",
    videoSources: [
      "/videos/aircraft/legendary-1.mp4",
      "/videos/aircraft/legendary-2.mp4",
      "/videos/aircraft/legendary-3.mp4",
      "/videos/aircraft/legendary-4.mp4",
    ],
  },
  {
    name: "Special",
    description:
      "A showcase aircraft tier for exceptional progression and exclusive-feeling content.",
    combatValue: "Highest combat value",
    progressionNote: "Reserved for special progression paths or rare unlocks.",
    playerValue: "The most exclusive tier in the aircraft ladder.",
    videoSrc: "/videos/aircraft/special.mp4",
  },
];
