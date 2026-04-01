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
      <p className="text-xs font-semibold uppercase tracking-[0.45em] text-gold/90">
        {eyebrow}
      </p>
      <h2 className="text-balance font-display text-3xl font-semibold tracking-[0.08em] text-silver sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="max-w-2xl text-base leading-7 text-foreground-soft sm:text-lg">
          {description}
        </p>
      ) : null}
    </header>
  );
}
