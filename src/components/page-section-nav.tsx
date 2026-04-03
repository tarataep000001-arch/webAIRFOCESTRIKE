import { InfoBlock } from "@/components/info-block";
import type { PageSection } from "@/data/page-sections";

type PageSectionNavProps = {
  title?: string;
  description?: string;
  sections: PageSection[];
};

export function PageSectionNav({
  title = "Section guide",
  description = "Use these anchors to move through the most important topics on this page.",
  sections,
}: PageSectionNavProps) {
  return (
    <section className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-10">
      <div className="rounded-[2rem] border border-gold/20 bg-[linear-gradient(180deg,rgba(12,12,15,0.96),rgba(7,7,9,0.96))] p-4 sm:p-6">
        <div className="flex flex-col gap-3 border-b border-gold/15 pb-5">
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-gold/80 sm:text-xs sm:tracking-[0.4em]">
            {title}
          </p>
          <p className="max-w-3xl text-sm leading-7 text-foreground-soft sm:text-base">
            {description}
          </p>
        </div>
        <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {sections.map((section) => (
            <InfoBlock
              key={section.href}
              href={section.href}
              title={section.label}
              description={section.description}
              className="min-h-[148px]"
            >
              <span className="mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-gold">
                Jump to section
                <span aria-hidden="true">-&gt;</span>
              </span>
            </InfoBlock>
          ))}
        </div>
      </div>
    </section>
  );
}
