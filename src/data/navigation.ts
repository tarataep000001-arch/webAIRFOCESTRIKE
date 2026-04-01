export const siteName = "AIR FORCE STRIKE";

export const siteDescription =
  "AIR FORCE STRIKE is a fast-paced aircraft battle game focused on collection, upgrades, mission progression, and long-term growth.";

export type NavLink = {
  href: string;
  label: string;
};

export const navigation: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/gameplay", label: "Gameplay" },
  { href: "/aircraft", label: "Aircraft" },
  { href: "/maps", label: "Maps" },
  { href: "/rewards", label: "Rewards" },
  { href: "/market", label: "Market" },
];

export const footerLinks = navigation;
