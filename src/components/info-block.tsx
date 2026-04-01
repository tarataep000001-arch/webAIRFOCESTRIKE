import Link from "next/link";
import type { ReactNode } from "react";

type InfoBlockProps = {
  title: string;
  description: string;
  eyebrow?: string;
  href?: string;
  children?: ReactNode;
  className?: string;
};

export function InfoBlock({
  title,
  description,
  eyebrow,
  href,
  children,
  className = "",
}: InfoBlockProps) {
  const content = (
    <>
      {eyebrow ? (
        <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-gold/75">
          {eyebrow}
        </p>
      ) : null}
      <h3 className="mt-2 text-sm font-semibold uppercase tracking-[0.18em] text-silver">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-6 text-foreground-soft">{description}</p>
      {children ? <div className="mt-3">{children}</div> : null}
    </>
  );

  const base =
    "group block rounded-[1.4rem] border border-gold/20 bg-[linear-gradient(180deg,rgba(14,14,16,0.98),rgba(8,8,10,0.98))] p-4 shadow-[0_0_0_1px_rgba(212,175,55,0.05)] transition duration-300 hover:-translate-y-0.5 hover:border-gold/40";

  if (href) {
    return (
      <Link href={href} className={`${base} ${className}`.trim()}>
        {content}
      </Link>
    );
  }

  return <article className={`${base} ${className}`.trim()}>{content}</article>;
}
