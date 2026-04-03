import Link from "next/link";
import type { ReactNode } from "react";

type HeroStat = {
  label: string;
  value: string;
};

type HeroProps = {
  eyebrow?: string;
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
  stats?: HeroStat[];
  children?: ReactNode;
};

function isExternalHref(href: string) {
  return /^https?:\/\//i.test(href);
}

const primaryCtaClassName =
  "inline-flex w-full items-center justify-center rounded-full bg-red-600 px-6 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-white shadow-[0_14px_34px_rgba(220,38,38,0.28)] transition hover:-translate-y-0.5 hover:bg-red-500 sm:w-auto sm:tracking-[0.18em]";

const secondaryCtaClassName =
  "inline-flex w-full items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-white shadow-[0_14px_34px_rgba(37,99,235,0.26)] transition hover:-translate-y-0.5 hover:bg-blue-500 sm:w-auto sm:tracking-[0.18em]";

export function Hero({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
  stats,
  children,
}: HeroProps) {
  const hasSupplement = Boolean(children);

  function renderCta(href: string, className: string, label: string) {
    if (isExternalHref(href)) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={className}
        >
          {label}
        </a>
      );
    }

    return (
      <Link href={href} className={className}>
        {label}
      </Link>
    );
  }

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-8 sm:py-14 lg:px-10 lg:py-20">
      <div
        className={
          hasSupplement
            ? "grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center"
            : "grid gap-10"
        }
      >
        <div className="space-y-8">
          {eyebrow ? (
            <div className="inline-flex items-center rounded-full border border-gold/25 bg-gold/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.4em] text-gold">
              {eyebrow}
            </div>
          ) : null}
          <div className="space-y-4 sm:space-y-5">
            <h1 className="max-w-4xl text-balance font-display text-3xl font-semibold uppercase tracking-[0.08em] text-silver sm:text-5xl sm:tracking-[0.12em] lg:text-6xl xl:text-7xl">
              {title}
            </h1>
            <p className="max-w-2xl text-sm leading-7 text-foreground-soft sm:text-lg sm:leading-8">
              {description}
            </p>
          </div>
          {primaryCta || secondaryCta ? (
            <div className="flex flex-col gap-3 sm:flex-row">
              {primaryCta ? (
                renderCta(
                  primaryCta.href,
                  primaryCtaClassName,
                  primaryCta.label,
                )
              ) : null}
              {secondaryCta ? (
                renderCta(
                  secondaryCta.href,
                  secondaryCtaClassName,
                  secondaryCta.label,
                )
              ) : null}
            </div>
          ) : null}
          {stats ? (
            <dl className="grid gap-3 sm:grid-cols-3 sm:gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-gold/15 bg-white/[0.03] px-4 py-3 sm:py-4"
                >
                  <dt className="text-[11px] font-semibold uppercase tracking-[0.3em] text-gold/70">
                    {stat.label}
                  </dt>
                  <dd className="mt-2 font-display text-xl font-semibold tracking-[0.08em] text-silver sm:text-2xl">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          ) : null}
        </div>
        {hasSupplement ? (
          <div className="relative">
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-gold/15 via-transparent to-strike/10 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-gold/20 bg-[linear-gradient(180deg,rgba(15,15,17,0.98),rgba(8,8,10,0.98))] p-4 shadow-[0_28px_90px_rgba(0,0,0,0.55)] sm:p-5">
              <div className="flex items-center justify-between border-b border-gold/15 pb-3 sm:pb-4">
                <div />
                <span
                  aria-hidden="true"
                  className="h-2.5 w-2.5 rounded-full bg-strike"
                />
              </div>
              <div className="mt-5">{children}</div>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
