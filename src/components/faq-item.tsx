import type { FaqEntry } from "@/data/faqs";

type FaqItemProps = {
  item: FaqEntry;
};

export function FaqItem({ item }: FaqItemProps) {
  return (
    <details className="group rounded-[1.4rem] border border-gold/20 bg-[linear-gradient(180deg,rgba(17,17,19,0.96),rgba(9,9,11,0.96))] p-6 transition duration-300 hover:border-gold/40">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-silver [&::-webkit-details-marker]:hidden">
        <span className="text-lg">{item.question}</span>
        <span className="flex h-9 w-9 items-center justify-center rounded-full border border-gold/30 text-gold transition group-open:rotate-45">
          +
        </span>
      </summary>
      <p className="mt-4 max-w-3xl text-sm leading-7 text-foreground-soft sm:text-base">
        {item.answer}
      </p>
    </details>
  );
}
