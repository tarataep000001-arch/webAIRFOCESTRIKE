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
  { href: "/aircraft", label: "Aircraft" },
  { href: "/roadmap", label: "Roadmap" },
];

export const footerLinks = navigation;
