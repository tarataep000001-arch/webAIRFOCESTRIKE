import Link from "next/link";
import { footerLinks, siteDescription, siteName } from "@/data/navigation";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gold/15 bg-black/95">
      <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 py-10 sm:px-8 lg:grid-cols-[1.3fr_0.7fr] lg:px-10">
        <div className="space-y-4">
          <p className="font-display text-xl font-semibold tracking-[0.14em] sm:text-3xl sm:tracking-[0.16em]">
            <span className="text-silver">AIR FORCE</span>{" "}
            <span className="text-strike">STRIKE</span>
          </p>
          <p className="max-w-2xl text-sm leading-7 text-foreground-soft sm:text-base">
            {siteDescription}
          </p>
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-gold/80">
            {year} {siteName}
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:justify-items-end">
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium tracking-[0.16em] text-gold transition hover:text-gold-light"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
