import type { ReactNode } from "react";

type FeatureCardProps = {
  eyebrow?: string;
  title: string;
  description: string;
  children?: ReactNode;
  className?: string;
};

export function FeatureCard({
  eyebrow,
  title,
  description,
  children,
  className = "",
}: FeatureCardProps) {
  return (
    <article
      className={`group rounded-[1.6rem] border border-gold/20 bg-[linear-gradient(180deg,rgba(17,17,19,0.98),rgba(10,10,12,0.98))] p-6 shadow-[0_0_0_1px_rgba(212,175,55,0.04)] transition duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-[0_0_0_1px_rgba(212,175,55,0.1)] ${className}`.trim()}
    >
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gold/80">
          {eyebrow}
        </p>
      ) : null}
      <h3 className="mt-3 font-display text-2xl font-semibold tracking-[0.06em] text-silver">
        {title}
      </h3>
      <p className="mt-3 text-sm leading-7 text-foreground-soft sm:text-base">
        {description}
      </p>
      {children ? <div className="mt-5">{children}</div> : null}
    </article>
  );
}
