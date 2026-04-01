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
    <tr className="border-b border-white/5 last:border-0">
      <th
        scope="row"
        className="w-[40%] px-4 py-3 text-left text-[11px] font-semibold uppercase tracking-[0.28em] text-gold/75 sm:w-[34%]"
      >
        {label}
      </th>
      <td className={`px-4 py-3 text-right text-sm font-medium ${valueTone}`}>
        {value}
      </td>
    </tr>
  );
}
