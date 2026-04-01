export type DexscreenerToken = {
  address?: string;
  name?: string;
  symbol?: string;
};

export type DexscreenerLiquidity = {
  usd?: number;
  base?: number;
  quote?: number;
};

export type DexscreenerTxnWindow = {
  buys?: number;
  sells?: number;
};

export type DexscreenerPair = {
  chainId?: string;
  dexId?: string;
  url?: string;
  pairAddress?: string;
  labels?: string[];
  baseToken?: DexscreenerToken;
  quoteToken?: DexscreenerToken;
  priceNative?: string | null;
  priceUsd?: string | null;
  liquidity?: DexscreenerLiquidity;
  fdv?: number | null;
  marketCap?: number | null;
  pairCreatedAt?: number | null;
  priceChange?: {
    m5?: number;
    h1?: number;
    h6?: number;
    h24?: number;
  };
  txns?: {
    m5?: DexscreenerTxnWindow;
    h1?: DexscreenerTxnWindow;
    h6?: DexscreenerTxnWindow;
    h24?: DexscreenerTxnWindow;
  };
  volume?: {
    m5?: number;
    h1?: number;
    h6?: number;
    h24?: number;
  };
};

export type MarketTrendWindow = "m5" | "h1" | "h6" | "h24";

export type MarketPairSummary = {
  chainId: string;
  dexId: string;
  url: string;
  pairAddress: string;
  baseTokenName: string;
  baseTokenSymbol: string;
  baseTokenAddress: string;
  quoteTokenSymbol: string;
  priceUsd: string | null;
  priceNative: string | null;
  liquidityUsd: number | null;
  fdv: number | null;
  marketCap: number | null;
  priceChange: Partial<Record<MarketTrendWindow, number>>;
  txns: Partial<Record<MarketTrendWindow, DexscreenerTxnWindow>>;
  volume: Partial<Record<MarketTrendWindow, number>>;
  lastUpdated: string;
};

export type MarketApiResponse = {
  tokenAddress: string;
  chainName: string;
  fetchedAt: string;
  pair: MarketPairSummary | null;
  pairCount: number;
};
