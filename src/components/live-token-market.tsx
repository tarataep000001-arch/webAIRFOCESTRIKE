"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { HomeSectionBlock } from "@/components/home-section-block";
import { MarketStatRow } from "@/components/market-stat-row";
import {
  formatNativePrice,
  formatPercent,
  formatUsd,
  formatTxnCount,
  getTrendValueWindow,
  shortenAddress,
  TOKEN_ADDRESS,
  TOKEN_CHAIN_ID,
} from "@/lib/dexscreener";
import type { MarketApiResponse, MarketPairSummary } from "@/types/market";

const REFRESH_INTERVAL_MS = 15_000;

function getChangeTone(value: number | null | undefined) {
  if (value === null || value === undefined || Number.isNaN(value)) {
    return "neutral" as const;
  }

  if (value > 0) {
    return "positive" as const;
  }

  if (value < 0) {
    return "negative" as const;
  }

  return "neutral" as const;
}

function buildTrendPath(pair: MarketPairSummary | null) {
  const windows = getTrendValueWindow(pair);
  const values = windows.map((window) => window.value ?? 0);
  const min = Math.min(...values, 0);
  const max = Math.max(...values, 0);
  const range = Math.max(max - min, 12);
  const width = 100;
  const height = 52;
  const pointStep = width / Math.max(values.length - 1, 1);

  return values
    .map((value, index) => {
      const normalized = (value - min) / range;
      const x = Math.round(index * pointStep * 100) / 100;
      const y = Math.round((height - normalized * height) * 100) / 100;
      return `${x},${y}`;
    })
    .join(" ");
}

function TrendPanel({ pair }: { pair: MarketPairSummary | null }) {
  const windows = getTrendValueWindow(pair);
  const path = buildTrendPath(pair);

  return (
    <div className="rounded-[2rem] border border-gold/20 bg-[linear-gradient(180deg,rgba(12,12,15,0.98),rgba(8,8,10,0.98))] p-4 shadow-[0_24px_90px_rgba(0,0,0,0.45)] sm:p-6">
      <div className="flex flex-col gap-3 border-b border-gold/15 pb-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-gold/80">
            Live trend panel
          </p>
          <p className="mt-2 text-base font-semibold text-silver sm:text-xl">
            {pair ? `${pair.baseTokenSymbol} / ${pair.quoteTokenSymbol}` : "Awaiting market data"}
          </p>
        </div>
        <div className="flex w-fit items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-emerald-300">
          <span className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_12px_rgba(110,231,183,0.7)]" />
          Live
        </div>
      </div>

      <div className="mt-5 grid gap-5">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold/70">
              Current price
            </p>
            <p className="mt-2 font-display text-3xl font-semibold tracking-[0.06em] text-silver sm:text-5xl sm:tracking-[0.08em]">
              {pair?.priceUsd !== null && pair?.priceUsd !== undefined
                ? formatUsd(Number(pair.priceUsd))
                : "N/A"}
            </p>
            <p className="mt-2 text-sm text-foreground-soft">
              {pair?.priceNative
                ? `~ ${formatNativePrice(pair.priceNative)} ${pair.quoteTokenSymbol}`
                : "Native price unavailable"}
            </p>
          </div>
          <div className="rounded-2xl border border-gold/15 bg-white/[0.03] px-4 py-3 text-left sm:text-right">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-gold/70">
              Liquidity
            </p>
            <p className="mt-2 text-lg font-semibold text-silver">
              {formatUsd(pair?.liquidityUsd, true)}
            </p>
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-4">
          {windows.map((window) => {
            const tone = getChangeTone(window.value);
            const valueText = formatPercent(window.value);

            return (
              <div
                key={window.key}
                className="rounded-2xl border border-gold/15 bg-black/35 px-4 py-3"
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-gold/70">
                  {window.label}
                </p>
                <p
                  className={`mt-2 text-lg font-semibold ${
                    tone === "positive"
                      ? "text-emerald-300"
                      : tone === "negative"
                        ? "text-red-300"
                        : "text-silver"
                  }`}
                >
                  {valueText}
                </p>
              </div>
            );
          })}
        </div>

        <div className="rounded-[1.8rem] border border-gold/15 bg-[radial-gradient(circle_at_top,rgba(200,162,74,0.12),transparent_56%),linear-gradient(180deg,rgba(7,7,9,0.95),rgba(12,12,15,0.98))] p-4">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold/70">
                การแสดงภาพการต่อสู้
              </p>
              <p className="mt-1 text-sm text-foreground-soft">
                นี่คือจุดเริ่มต้นของ V1 ที่เน้นทักษะและความเร็วในการกดเพื่อเอาชนะ
              </p>
            </div>
            <div className="rounded-full border border-gold/15 bg-white/[0.03] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-gold/75 sm:block">
              เตรียมอัปเดตสู่ V2
            </div>
          </div>
          <div className="mt-4 overflow-hidden rounded-[1.5rem] border border-gold/15 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(0,0,0,0.18))] p-3">
            <div className="relative h-52 rounded-[1.2rem] border border-white/5 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0.01))] sm:h-64">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(200,162,74,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(200,162,74,0.08)_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-40" />
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
              <svg
                viewBox="0 0 100 52"
                preserveAspectRatio="none"
                className="absolute inset-0 h-full w-full"
                aria-hidden="true"
              >
                <defs>
                  <linearGradient id="marketGlow" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="rgba(200,162,74,0.15)" />
                    <stop offset="55%" stopColor="rgba(255,255,255,0.9)" />
                    <stop offset="100%" stopColor="rgba(169,31,45,0.9)" />
                  </linearGradient>
                  <linearGradient id="marketFill" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="rgba(200,162,74,0.28)" />
                    <stop offset="100%" stopColor="rgba(200,162,74,0.02)" />
                  </linearGradient>
                </defs>
                <path
                  d={`M 0 44 ${path ? `L ${path} L 100 48` : ""}`}
                  fill="url(#marketFill)"
                  opacity="0.9"
                />
                <polyline
                  points={path || "0,40 25,38 50,32 75,28 100,26"}
                  fill="none"
                  stroke="url(#marketGlow)"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="100" cy="26" r="1.8" fill="#e0c06b" />
              </svg>
              <div className="absolute bottom-4 left-4 rounded-full border border-gold/20 bg-black/65 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-gold/80">
                ภาพรวมเครื่องบิน
              </div>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {windows.map((window) => {
              const tone = getChangeTone(window.value);
              return (
                <span
                  key={window.key}
                  className={`rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] ${
                    tone === "positive"
                      ? "border-emerald-400/30 bg-emerald-400/10 text-emerald-300"
                      : tone === "negative"
                        ? "border-red-400/30 bg-red-400/10 text-red-300"
                        : "border-gold/20 bg-white/[0.03] text-gold/75"
                  }`}
                >
                  {window.label} {formatPercent(window.value)}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

function MarketTable({ pair }: { pair: MarketPairSummary | null }) {
  const rows = [
    { label: "Token", value: pair ? `${pair.baseTokenName} (${pair.baseTokenSymbol})` : "N/A" },
    { label: "Pair", value: pair ? `${pair.baseTokenSymbol} / ${pair.quoteTokenSymbol}` : "N/A" },
    { label: "Price USD", value: pair?.priceUsd ? formatUsd(Number(pair.priceUsd)) : "N/A" },
    {
      label: "Price Native",
      value: pair?.priceNative ? formatNativePrice(pair.priceNative) : "N/A",
    },
    {
      label: "24H Change",
      value: formatPercent(pair?.priceChange.h24),
      tone: getChangeTone(pair?.priceChange.h24),
    },
    {
      label: "Liquidity",
      value: formatUsd(pair?.liquidityUsd, true),
    },
    {
      label: "FDV",
      value: formatUsd(pair?.fdv, true),
    },
    {
      label: "Market Cap",
      value: formatUsd(pair?.marketCap, true),
    },
    {
      label: "24H Volume",
      value: formatUsd(pair?.volume.h24, true),
    },
    {
      label: "Buys / Sells",
      value:
        pair?.txns.h24
          ? `${formatTxnCount(pair.txns.h24.buys)} / ${formatTxnCount(pair.txns.h24.sells)}`
          : "N/A",
    },
    {
      label: "Pair Address",
      value: pair?.pairAddress ? shortenAddress(pair.pairAddress) : "N/A",
    },
    {
      label: "Last Updated",
      value: pair?.lastUpdated
        ? new Intl.DateTimeFormat("en-US", {
            dateStyle: "medium",
            timeStyle: "short",
          }).format(new Date(pair.lastUpdated))
        : "N/A",
    },
  ];

  return (
    <div className="rounded-[2rem] border border-gold/20 bg-[linear-gradient(180deg,rgba(12,12,15,0.98),rgba(8,8,10,0.98))] p-4 shadow-[0_24px_90px_rgba(0,0,0,0.45)] sm:p-6">
      <div className="border-b border-gold/15 pb-4">
        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-gold/80">
          Aircraft balance table
        </p>
        <p className="mt-2 text-sm leading-7 text-foreground-soft">
          Use this panel as a gameplay preview for aircraft ATK, battle rhythm, and future tuning across versions.
        </p>
      </div>

      <div className="mt-5 overflow-hidden rounded-[1.5rem] border border-white/5 bg-black/35">
        <table className="w-full border-collapse">
          <tbody>
            {rows.map((row) => (
              <MarketStatRow
                key={row.label}
                label={row.label}
                value={row.value}
                tone={row.tone}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function LoadingState() {
  return (
    <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
      <div className="rounded-[2rem] border border-gold/20 bg-[linear-gradient(180deg,rgba(12,12,15,0.98),rgba(8,8,10,0.98))] p-4 sm:p-6">
        <div className="h-4 w-40 animate-pulse rounded-full bg-white/10" />
        <div className="mt-4 h-12 w-3/4 animate-pulse rounded-2xl bg-white/10" />
        <div className="mt-4 h-6 w-1/2 animate-pulse rounded-full bg-white/10" />
        <div className="mt-6 h-64 animate-pulse rounded-[1.5rem] border border-white/5 bg-white/5" />
      </div>
      <div className="rounded-[2rem] border border-gold/20 bg-[linear-gradient(180deg,rgba(12,12,15,0.98),rgba(8,8,10,0.98))] p-4 sm:p-6">
        <div className="h-4 w-44 animate-pulse rounded-full bg-white/10" />
        <div className="mt-5 space-y-3">
          {Array.from({ length: 12 }).map((_, index) => (
            <div key={index} className="h-10 animate-pulse rounded-2xl bg-white/10" />
          ))}
        </div>
      </div>
    </div>
  );
}

function ErrorState({ message, onRetry }: { message: string; onRetry: () => void }) {
  return (
    <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
      <div className="rounded-[2rem] border border-gold/20 bg-[linear-gradient(180deg,rgba(12,12,15,0.98),rgba(8,8,10,0.98))] p-4 sm:p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-gold/80">
          Live market temporarily unavailable
        </p>
        <div className="mt-4 rounded-[1.5rem] border border-strike/25 bg-strike/10 p-5">
          <p className="text-lg font-semibold text-silver">No live data available right now.</p>
          <p className="mt-3 text-sm leading-7 text-foreground-soft">{message}</p>
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={onRetry}
            className="rounded-full bg-gold px-5 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-black transition hover:-translate-y-0.5 hover:bg-gold-light"
          >
            Retry
          </button>
        <Link
            href={`https://dexscreener.com/${TOKEN_CHAIN_ID}/${TOKEN_ADDRESS}`}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-gold/30 bg-white/[0.03] px-5 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-gold transition hover:-translate-y-0.5 hover:bg-gold/10"
          >
            Open Dexscreener
          </Link>
        </div>
      </div>
      <div className="rounded-[2rem] border border-gold/20 bg-[linear-gradient(180deg,rgba(12,12,15,0.98),rgba(8,8,10,0.98))] p-4 sm:p-6">
        <div className="h-4 w-44 rounded-full bg-white/10" />
        <div className="mt-5 h-64 rounded-[1.5rem] border border-white/5 bg-white/5" />
      </div>
    </div>
  );
}

export function LiveTokenMarket() {
  const [data, setData] = useState<MarketApiResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [manualRefresh, setManualRefresh] = useState(0);
  const hasLoadedRef = useRef(false);

  useEffect(() => {
    let active = true;
    const controller = new AbortController();

    async function loadMarket() {
      try {
        setError(null);
        if (!hasLoadedRef.current) {
          setIsLoading(true);
        }

        const response = await fetch("/api/market", {
          cache: "no-store",
          signal: controller.signal,
        });

        const payload = (await response.json()) as MarketApiResponse;

        if (!response.ok) {
          throw new Error("The live market feed could not be loaded.");
        }

        if (active) {
          setData(payload);
          setError(null);
          hasLoadedRef.current = true;
        }
      } catch (caught) {
        if (!active || controller.signal.aborted) {
          return;
        }

        setError(caught instanceof Error ? caught.message : "Unable to load live market data.");
      } finally {
        if (active) {
          setIsLoading(false);
        }
      }
    }

    void loadMarket();

    const interval = window.setInterval(() => {
      void loadMarket();
    }, REFRESH_INTERVAL_MS);

    return () => {
      active = false;
      controller.abort();
      window.clearInterval(interval);
    };
  }, [manualRefresh]);

  const pair = data?.pair ?? null;
  const pairUrl = pair?.url ?? `https://dexscreener.com/${TOKEN_CHAIN_ID}/${TOKEN_ADDRESS}`;

  return (
    <HomeSectionBlock
      id="live-token-market"
      label="GAME OVERVIEW"
      title="เกมที่ใช้ทักษะในการกดและความเร็ว"
      description="นี่คือจุดเริ่มต้นของ V1 และใน V2 เราจะอัปเดตให้ใช้ทักษะมากขึ้น พร้อมเพิ่มด่านให้มากขึ้น โดยเครื่องบินแต่ละลำจะมีค่า ATK และจำนวนรอบที่ออกต่อสู้ไม่เท่ากัน"
    >
      <div className="mb-6 flex flex-wrap items-center gap-3">
        <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-emerald-300">
          <span className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_12px_rgba(110,231,183,0.7)]" />
          Live
        </span>
        <span className="rounded-full border border-gold/20 bg-white/[0.03] px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-gold/75">
          Token: {shortenAddress(TOKEN_ADDRESS)}
        </span>
        <span className="rounded-full border border-gold/20 bg-white/[0.03] px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-gold/75">
          Chain: World Chain
        </span>
        <span className="rounded-full border border-gold/20 bg-white/[0.03] px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-gold/75">
          Refreshes every 15s
        </span>
        <span className="rounded-full border border-gold/20 bg-white/[0.03] px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-gold/75">
          {data?.pairCount ? `${data.pairCount} pair${data.pairCount === 1 ? "" : "s"} found` : "World Chain market"}
        </span>
      </div>

      {isLoading && !data ? (
        <LoadingState />
      ) : error && !pair ? (
        <ErrorState message={error} onRetry={() => setManualRefresh((value) => value + 1)} />
      ) : (
        <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
          <TrendPanel pair={pair} />
          <MarketTable pair={pair} />
        </div>
      )}

      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <Link
          href={pairUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center rounded-full bg-gold px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-black transition hover:-translate-y-0.5 hover:bg-gold-light"
        >
          Open Full Chart
        </Link>
        <Link
          href={pairUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center rounded-full border border-gold/30 bg-white/[0.03] px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-gold transition hover:-translate-y-0.5 hover:bg-gold/10"
        >
          View Pair on Dexscreener
        </Link>
      </div>

      <p className="mt-4 text-xs font-medium uppercase tracking-[0.28em] text-gold/60">
        {error && pair
          ? `Showing the last successful dashboard snapshot. ${error}`
          : "Dashboard overview for gameplay preview, skill timing, and aircraft progression."}
      </p>
    </HomeSectionBlock>
  );
}
