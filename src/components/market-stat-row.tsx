type MarketStatRowProps = {
  label: string;
  value: string;
  tone?: "neutral" | "positive" | "negative";
};

export function MarketStatRow({
  label,
  value,
  tone = "neutral",
}: MarketStatRowProps) {
  const valueTone =
    tone === "positive"
      ? "text-emerald-300"
      : tone === "negative"
        ? "text-red-300"
        : "text-silver";

  return (
    <tr className="block border-b border-white/5 last:border-0 sm:table-row">
      <th
        scope="row"
        className="block px-4 pb-1 pt-3 text-left text-[10px] font-semibold uppercase tracking-[0.22em] text-gold/75 sm:table-cell sm:w-[34%] sm:px-4 sm:py-3 sm:text-[11px] sm:tracking-[0.28em]"
      >
        {label}
      </th>
      <td className={`block px-4 pb-3 text-left text-sm font-medium sm:table-cell sm:px-4 sm:py-3 sm:text-right ${valueTone}`}>
        {value}
      </td>
    </tr>
  );
}
