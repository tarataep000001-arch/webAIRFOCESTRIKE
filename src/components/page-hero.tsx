import Link from "next/link";
import type { ReactNode } from "react";

type PageHeroProps = {
  eyebrow: string;
  title: ReactNode;
  description: ReactNode;
  primaryCta?: {
    href: string;
    label: string;
  };
  secondaryCta?: {
    href: string;
    label: string;
  };
  children?: ReactNode;
};

export function PageHero({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
  children,
}: PageHeroProps) {
  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-12 sm:px-8 lg:px-10 lg:py-16">
      <div className="grid gap-8 lg:grid-cols-[1fr_0.78fr] lg:items-start">
        <div className="space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.45em] text-gold/90">
            {eyebrow}
          </p>
          <h1 className="text-balance font-display text-4xl font-semibold uppercase tracking-[0.12em] text-silver sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="max-w-2xl text-base leading-8 text-foreground-soft sm:text-lg">
            {description}
          </p>
          {primaryCta || secondaryCta ? (
            <div className="flex flex-col gap-3 sm:flex-row">
              {primaryCta ? (
                <Link
                  href={primaryCta.href}
                  className="inline-flex items-center justify-center rounded-full bg-gold px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-black transition hover:-translate-y-0.5 hover:bg-gold-light"
                >
                  {primaryCta.label}
                </Link>
              ) : null}
              {secondaryCta ? (
                <Link
                  href={secondaryCta.href}
                  className="inline-flex items-center justify-center rounded-full border border-gold/30 bg-white/[0.03] px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-gold transition hover:-translate-y-0.5 hover:bg-gold/10"
                >
                  {secondaryCta.label}
                </Link>
              ) : null}
            </div>
          ) : null}
        </div>
        <div className="rounded-[2rem] border border-gold/20 bg-[linear-gradient(180deg,rgba(15,15,17,0.98),rgba(8,8,10,0.98))] p-5 shadow-[0_24px_72px_rgba(0,0,0,0.5)]">
          {children ?? (
            <div className="space-y-4">
              <div className="rounded-2xl border border-gold/15 bg-white/[0.03] p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold/80">
                  Quick overview
                </p>
                <p className="mt-2 text-sm leading-7 text-foreground-soft">
                  A premium, high-level briefing panel ready for future artwork.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-gold/15 bg-white/[0.03] p-4 text-sm leading-7 text-foreground-soft">
                  Future image block
                </div>
                <div className="rounded-2xl border border-gold/15 bg-white/[0.03] p-4 text-sm leading-7 text-foreground-soft">
                  Replace with promo art later
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
