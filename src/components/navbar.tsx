"use client";

import Image from "next/image";
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
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4 lg:px-10">
        <Link href="/" className="group flex min-w-0 items-center gap-2.5 sm:gap-3">
          <span className="relative flex h-10 w-10 overflow-hidden rounded-2xl border border-gold/30 bg-gold/10 transition group-hover:-translate-y-0.5 sm:h-11 sm:w-11">
            <Image
              src="/images/air-force-strike-logo.jpg"
              alt="AIR FORCE STRIKE logo"
              fill
              sizes="44px"
              className="object-contain"
              priority
            />
          </span>
          <span className="flex min-w-0 flex-col leading-none">
            <span className="truncate font-display text-sm font-semibold tracking-[0.18em] text-silver sm:text-lg sm:tracking-[0.22em]">
              AIR FORCE
            </span>
            <span className="truncate font-display text-sm font-semibold tracking-[0.2em] text-strike sm:text-lg sm:tracking-[0.24em]">
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

        <details className="group relative lg:hidden">
          <summary className="list-none cursor-pointer rounded-full border border-gold/25 bg-white/[0.03] px-3.5 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-gold sm:px-4 sm:text-sm [&::-webkit-details-marker]:hidden">
            Menu
          </summary>
          <div className="absolute right-0 mt-3 w-[min(18rem,calc(100vw-1.5rem))] rounded-[1.6rem] border border-gold/20 bg-[#08080b]/98 p-3 shadow-[0_18px_60px_rgba(0,0,0,0.55)] backdrop-blur-xl">
            <nav aria-label="Mobile primary" className="grid gap-1">
              {navigation.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isActivePath(pathname, link.href) ? "page" : undefined}
                  className={`rounded-2xl px-4 py-3 text-sm font-medium tracking-[0.12em] transition ${
                    isActivePath(pathname, link.href)
                      ? "bg-gold/10 text-gold-light shadow-[inset_0_0_0_1px_rgba(212,175,55,0.3)]"
                      : "text-gold hover:bg-gold/10 hover:text-gold-light"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </details>
      </div>
    </header>
  );
}
