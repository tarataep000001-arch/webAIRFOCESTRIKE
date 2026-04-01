export type MissionMap = {
  name: string;
  description: string;
  unlockPath: string;
  challenge: string;
  rewardFocus: string;
};

export const missionMaps: MissionMap[] = [
  {
    name: "Starter Zone",
    description:
      "A beginner-friendly map that introduces the mission structure and keeps early pacing easy to read.",
    unlockPath: "Available to Free and Common aircraft",
    challenge: "Low threat, simple objectives",
    rewardFocus: "Intro rewards and early growth",
  },
  {
    name: "Early Combat Zone",
    description:
      "A slightly more demanding area that starts rewarding cleaner flying and better aircraft choices.",
    unlockPath: "Common aircraft with upgrades",
    challenge: "Moderate enemy pressure",
    rewardFocus: "Reliable progression materials",
  },
  {
    name: "Advanced Engagement Zone",
    description:
      "A structured mid-game zone where stronger aircraft begin to matter in a serious way.",
    unlockPath: "Rare aircraft and above",
    challenge: "Tighter combat windows",
    rewardFocus: "Improved upgrade flow",
  },
  {
    name: "Elite Strike Zone",
    description:
      "A premium high-pressure zone built for powerful aircraft and focused mission execution.",
    unlockPath: "Epic aircraft and above",
    challenge: "High intensity combat",
    rewardFocus: "Advanced growth rewards",
  },
  {
    name: "Endgame Direction",
    description:
      "The top end of the progression ladder, built to support the strongest aircraft and the most dedicated players.",
    unlockPath: "Legendary and Special aircraft",
    challenge: "Highest difficulty direction",
    rewardFocus: "Prestige progression and late rewards",
  },
];
