import type {
  DexscreenerPair,
  MarketApiResponse,
  MarketPairSummary,
  MarketTrendWindow,
} from "@/types/market";

export const TOKEN_ADDRESS = "0x994597957eFda923C7340889d6C524195bA6dCFd";
export const TOKEN_CHAIN_ID = "worldchain";
export const TOKEN_CHAIN_NAME = "World Chain";

export const TOKEN_PAIRS_ENDPOINT = `https://api.dexscreener.com/token-pairs/v1/${TOKEN_CHAIN_ID}/${TOKEN_ADDRESS}`;

export function shortenAddress(address: string | null | undefined, left = 6, right = 4) {
  if (!address) {
    return "N/A";
  }

  if (address.length <= left + right + 3) {
    return address;
  }

  return `${address.slice(0, left)}...${address.slice(-right)}`;
}

export function formatPercent(value: number | null | undefined) {
  if (value === null || value === undefined || Number.isNaN(value)) {
    return "N/A";
  }

  const formatter = new Intl.NumberFormat("en-US", {
    style: "decimal",
    maximumFractionDigits: 2,
    signDisplay: "always",
  });

  return `${formatter.format(value)}%`;
}

export function formatUsd(value: number | null | undefined, compact = false) {
  if (value === null || value === undefined || Number.isNaN(value)) {
    return "N/A";
  }

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    notation: compact ? "compact" : "standard",
    maximumFractionDigits: compact ? 2 : 8,
    minimumFractionDigits: compact ? 0 : 2,
  });

  return formatter.format(value);
}

export function formatNativePrice(value: string | null | undefined) {
  if (!value) {
    return "N/A";
  }

  const numeric = Number(value);

  if (Number.isFinite(numeric)) {
    return new Intl.NumberFormat("en-US", {
      maximumFractionDigits: 8,
    }).format(numeric);
  }

  return value;
}

export function formatTxnCount(value: number | null | undefined) {
  if (value === null || value === undefined || Number.isNaN(value)) {
    return "N/A";
  }

  return new Intl.NumberFormat("en-US").format(value);
}

export function buildMarketPairUrl(pairAddress: string) {
  return `https://dexscreener.com/${TOKEN_CHAIN_ID}/${pairAddress}`;
}

export function getTokenPairsUrl(tokenAddress = TOKEN_ADDRESS) {
  return `https://api.dexscreener.com/token-pairs/v1/${TOKEN_CHAIN_ID}/${tokenAddress}`;
}

export function isDexscreenerPair(value: unknown): value is DexscreenerPair {
  return typeof value === "object" && value !== null && "pairAddress" in value;
}

export async function fetchDexscreenerPairs(
  tokenAddress = TOKEN_ADDRESS,
  signal?: AbortSignal,
) {
  const response = await fetch(getTokenPairsUrl(tokenAddress), {
    signal,
    cache: "no-store",
    headers: {
      accept: "application/json",
    },
  });

  if (!response.ok) {
    throw new Error(`Dexscreener request failed with status ${response.status}`);
  }

  const payload: unknown = await response.json();

  if (!Array.isArray(payload)) {
    return [];
  }

  return payload.filter(isDexscreenerPair);
}

export function selectBestPair(pairs: DexscreenerPair[]) {
  if (!pairs.length) {
    return null;
  }

  return [...pairs].sort((left, right) => {
    const leftLiquidity = left.liquidity?.usd ?? 0;
    const rightLiquidity = right.liquidity?.usd ?? 0;

    if (rightLiquidity !== leftLiquidity) {
      return rightLiquidity - leftLiquidity;
    }

    const leftVolume = left.volume?.h24 ?? 0;
    const rightVolume = right.volume?.h24 ?? 0;

    if (rightVolume !== leftVolume) {
      return rightVolume - leftVolume;
    }

    return (right.pairCreatedAt ?? 0) - (left.pairCreatedAt ?? 0);
  })[0];
}

export function normalizeMarketPair(
  pair: DexscreenerPair | null,
  fetchedAt = new Date().toISOString(),
): MarketPairSummary | null {
  if (!pair) {
    return null;
  }

  return {
    chainId: pair.chainId ?? TOKEN_CHAIN_ID,
    dexId: pair.dexId ?? "dexscreener",
    url: pair.url ?? buildMarketPairUrl(pair.pairAddress ?? TOKEN_ADDRESS),
    pairAddress: pair.pairAddress ?? TOKEN_ADDRESS,
    baseTokenName: pair.baseToken?.name ?? "N/A",
    baseTokenSymbol: pair.baseToken?.symbol ?? "N/A",
    baseTokenAddress: pair.baseToken?.address ?? TOKEN_ADDRESS,
    quoteTokenSymbol: pair.quoteToken?.symbol ?? "N/A",
    priceUsd: pair.priceUsd ?? null,
    priceNative: pair.priceNative ?? null,
    liquidityUsd: pair.liquidity?.usd ?? null,
    fdv: pair.fdv ?? null,
    marketCap: pair.marketCap ?? null,
    priceChange: {
      m5: pair.priceChange?.m5,
      h1: pair.priceChange?.h1,
      h6: pair.priceChange?.h6,
      h24: pair.priceChange?.h24,
    },
    txns: {
      m5: pair.txns?.m5,
      h1: pair.txns?.h1,
      h6: pair.txns?.h6,
      h24: pair.txns?.h24,
    },
    volume: {
      m5: pair.volume?.m5,
      h1: pair.volume?.h1,
      h6: pair.volume?.h6,
      h24: pair.volume?.h24,
    },
    lastUpdated: fetchedAt,
  };
}

export async function fetchMarketSummary(signal?: AbortSignal): Promise<MarketApiResponse> {
  const pairs = await fetchDexscreenerPairs(TOKEN_ADDRESS, signal);
  const bestPair = selectBestPair(pairs);
  const fetchedAt = new Date().toISOString();

  return {
    tokenAddress: TOKEN_ADDRESS,
    chainName: TOKEN_CHAIN_NAME,
    fetchedAt,
    pair: normalizeMarketPair(bestPair, fetchedAt),
    pairCount: pairs.length,
  };
}

export function getTrendValueWindow(pair: MarketPairSummary | null): Array<{
  key: MarketTrendWindow;
  label: string;
  value: number | null;
}> {
  return [
    { key: "m5", label: "5m", value: pair?.priceChange.m5 ?? null },
    { key: "h1", label: "1h", value: pair?.priceChange.h1 ?? null },
    { key: "h6", label: "6h", value: pair?.priceChange.h6 ?? null },
    { key: "h24", label: "24h", value: pair?.priceChange.h24 ?? null },
  ];
}
