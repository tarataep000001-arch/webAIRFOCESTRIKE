import Link from "next/link";

export type PageGridLink = {
  label: string;
  href: string;
  description: string;
};

type PageGridLinksProps = {
  label?: string;
  title: string;
  description: string;
  items: PageGridLink[];
};

export function PageGridLinks({
  label = "Main pages",
  title,
  description,
  items,
}: PageGridLinksProps) {
  return (
    <section className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-10">
      <div className="rounded-[2rem] border border-gold/20 bg-[linear-gradient(180deg,rgba(14,14,16,0.98),rgba(8,8,10,0.98))] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.45)] sm:p-8">
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
        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group rounded-[1.5rem] border border-gold/20 bg-white/[0.03] p-5 transition duration-300 hover:-translate-y-0.5 hover:border-gold/40 hover:bg-white/[0.05]"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-gold/75">
                Open page
              </p>
              <h3 className="mt-3 text-lg font-semibold uppercase tracking-[0.14em] text-silver">
                {item.label}
              </h3>
              <p className="mt-3 text-sm leading-7 text-foreground-soft">
                {item.description}
              </p>
              <span className="mt-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-gold">
                Enter page
                <span aria-hidden="true">-&gt;</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
