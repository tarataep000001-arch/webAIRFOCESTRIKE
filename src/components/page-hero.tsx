import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

type PageHeroProps = {
  eyebrow: string;
  title: ReactNode;
  description: ReactNode;
  showAside?: boolean;
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
  showAside = true,
  primaryCta,
  secondaryCta,
  children,
}: PageHeroProps) {
  const hasAside = showAside && children !== null && children !== undefined;

  return (
    <section className="relative isolate overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-full min-h-[520px] overflow-hidden"
      >
        <Image
          src="/images/home-hero.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_24%]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,4,5,0.14)_0%,rgba(4,4,5,0.5)_42%,rgba(4,4,5,0.88)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,186,64,0.2),transparent_30%),radial-gradient(circle_at_75%_18%,rgba(255,93,93,0.1),transparent_24%)]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-12 sm:px-8 lg:px-10 lg:py-16">
        <div
          className={
            hasAside
              ? "grid gap-8 lg:grid-cols-[1fr_0.78fr] lg:items-start"
              : "grid gap-8"
          }
        >
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
          {hasAside ? (
            <div className="rounded-[2rem] border border-gold/20 bg-[linear-gradient(180deg,rgba(15,15,17,0.98),rgba(8,8,10,0.98))] p-5 shadow-[0_24px_72px_rgba(0,0,0,0.5)]">
              {children}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
