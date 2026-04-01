"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation } from "@/data/navigation";

function isActivePath(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-gold/15 bg-black/85 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4 sm:px-8 lg:px-10">
        <Link href="/" className="group flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-gold/30 bg-gold/10 text-sm font-semibold tracking-[0.3em] text-gold transition group-hover:-translate-y-0.5">
            AF
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-base font-semibold tracking-[0.22em] text-silver sm:text-lg">
              AIR FORCE
            </span>
            <span className="font-display text-base font-semibold tracking-[0.24em] text-strike sm:text-lg">
              STRIKE
            </span>
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {navigation.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActivePath(pathname, link.href) ? "page" : undefined}
              className={`rounded-full px-4 py-2 text-sm font-medium tracking-[0.18em] transition ${
                isActivePath(pathname, link.href)
                  ? "bg-gold/10 text-gold-light shadow-[inset_0_-1px_0_rgba(212,175,55,0.9)]"
                  : "text-gold hover:bg-gold/10 hover:text-gold-light"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            href="/gameplay"
            className="inline-flex items-center justify-center rounded-full border border-gold/35 bg-gold/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.16em] text-gold transition hover:-translate-y-0.5 hover:bg-gold/15"
          >
            Explore Gameplay
          </Link>
        </div>

        <details className="group relative lg:hidden">
          <summary className="list-none cursor-pointer rounded-full border border-gold/25 bg-white/[0.03] px-4 py-2 text-sm font-semibold uppercase tracking-[0.16em] text-gold [&::-webkit-details-marker]:hidden">
            Menu
          </summary>
          <div className="absolute right-0 mt-3 w-64 rounded-[1.6rem] border border-gold/20 bg-[#08080b]/98 p-3 shadow-[0_18px_60px_rgba(0,0,0,0.55)] backdrop-blur-xl">
            <nav aria-label="Mobile primary" className="grid gap-1">
              {navigation.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isActivePath(pathname, link.href) ? "page" : undefined}
                  className={`rounded-2xl px-4 py-3 text-sm font-medium tracking-[0.14em] transition ${
                    isActivePath(pathname, link.href)
                      ? "bg-gold/10 text-gold-light shadow-[inset_0_0_0_1px_rgba(212,175,55,0.3)]"
                      : "text-gold hover:bg-gold/10 hover:text-gold-light"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/gameplay"
                className="mt-2 rounded-2xl bg-gold px-4 py-3 text-center text-sm font-semibold uppercase tracking-[0.16em] text-black"
              >
                Explore Gameplay
              </Link>
            </nav>
          </div>
        </details>
      </div>
    </header>
  );
}
