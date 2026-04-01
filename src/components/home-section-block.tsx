import type { ReactNode } from "react";

type HomeSectionBlockProps = {
  id: string;
  label: string;
  title: ReactNode;
  description: ReactNode;
  children: ReactNode;
  className?: string;
};

export function HomeSectionBlock({
  id,
  label,
  title,
  description,
  children,
  className = "",
}: HomeSectionBlockProps) {
  return (
    <section
      id={id}
      className={`mx-auto w-full max-w-7xl scroll-mt-28 px-6 sm:px-8 lg:px-10 ${className}`.trim()}
    >
      <div className="rounded-[2rem] border border-gold/20 bg-[linear-gradient(180deg,rgba(14,14,16,0.98),rgba(8,8,10,0.98))] px-6 py-8 shadow-[0_24px_80px_rgba(0,0,0,0.45)] sm:px-8 sm:py-10 lg:px-10">
        <div className="max-w-3xl border-b border-gold/15 pb-5">
          <p className="text-xs font-semibold uppercase tracking-[0.45em] text-gold/85">
            {label}
          </p>
          <h2 className="mt-4 text-balance font-display text-3xl font-semibold tracking-[0.08em] text-silver sm:text-4xl lg:text-5xl">
            {title}
          </h2>
          <p className="mt-4 text-base leading-8 text-foreground-soft sm:text-lg">
            {description}
          </p>
        </div>
        <div className="mt-8">{children}</div>
      </div>
    </section>
  );
}
