import type { ReactNode } from "react";

type SectionTitleProps = {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
};

export function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionTitleProps) {
  const alignment = align === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <header className={`flex max-w-3xl flex-col gap-4 ${alignment}`}>
      <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-gold/90 sm:text-xs sm:tracking-[0.45em]">
        {eyebrow}
      </p>
      <h2 className="text-balance font-display text-2xl font-semibold tracking-[0.06em] text-silver sm:text-4xl sm:tracking-[0.08em] lg:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="max-w-2xl text-sm leading-7 text-foreground-soft sm:text-lg sm:leading-8">
          {description}
        </p>
      ) : null}
    </header>
  );
}
