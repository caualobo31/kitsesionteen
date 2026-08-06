export const COUNTRY_CURRENCY: Record<string, string> = {
  MX: "MXN",
  CO: "COP",
  AR: "ARS",
  CL: "CLP",
  PE: "PEN",
  BR: "BRL",
  ES: "EUR",
  EC: "USD",
  GT: "GTQ",
  CR: "CRC",
  PA: "USD",
  UY: "UYU",
  PY: "PYG",
  BO: "BOB",
  VE: "VES",
  DO: "DOP",
  HN: "HNL",
  SV: "USD",
  NI: "NIO",
  US: "USD",
};

type CurrencyFormat = {
  symbol: string;
  decimals: number;
  thousand: string;
  decimal: string;
};

const CURRENCY_FORMAT: Record<string, CurrencyFormat> = {
  MXN: { symbol: "$", decimals: 2, thousand: ",", decimal: "." },
  BRL: { symbol: "R$", decimals: 2, thousand: ".", decimal: "," },
  ARS: { symbol: "$", decimals: 0, thousand: ".", decimal: "," },
  CLP: { symbol: "$", decimals: 0, thousand: ".", decimal: "," },
  COP: { symbol: "$", decimals: 0, thousand: ".", decimal: "," },
  PEN: { symbol: "S/", decimals: 2, thousand: ",", decimal: "." },
  EUR: { symbol: "€", decimals: 2, thousand: ".", decimal: "," },
  GTQ: { symbol: "Q", decimals: 2, thousand: ",", decimal: "." },
  CRC: { symbol: "₡", decimals: 0, thousand: ".", decimal: "," },
  UYU: { symbol: "$", decimals: 0, thousand: ".", decimal: "," },
  PYG: { symbol: "₲", decimals: 0, thousand: ".", decimal: "," },
  BOB: { symbol: "Bs", decimals: 2, thousand: ",", decimal: "." },
  VES: { symbol: "Bs", decimals: 2, thousand: ".", decimal: "," },
  DOP: { symbol: "RD$", decimals: 2, thousand: ",", decimal: "." },
  HNL: { symbol: "L", decimals: 2, thousand: ",", decimal: "." },
  NIO: { symbol: "C$", decimals: 2, thousand: ",", decimal: "." },
};

function prettyRound(value: number): number {
  if (value >= 10000) return Math.round(value / 500) * 500;
  if (value >= 1000) return Math.round(value / 50) * 50;
  if (value >= 100) return Math.round(value / 5) * 5;
  return Math.round(value * 2) / 2;
}

export function formatConverted(usdAmount: number, currency: string): string | null {
  const fmt = CURRENCY_FORMAT[currency];
  if (!fmt) return null;

  const rounded = prettyRound(usdAmount);
  const fixed = rounded.toFixed(fmt.decimals);
  const [intPart, decPart] = fixed.split(".");
  const withThousands = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, fmt.thousand);

  return decPart
    ? `${fmt.symbol}${withThousands}${fmt.decimal}${decPart}`
    : `${fmt.symbol}${withThousands}`;
}

type LocalCurrency = { currency: string; rate: number };

async function detectCurrencyCode(): Promise<string | null> {
  try {
    const res = await fetch("https://ipinfo.io/json");
    if (!res.ok) throw new Error("ipinfo failed");
    const data = await res.json();
    const country = data?.country as string | undefined;
    if (country && COUNTRY_CURRENCY[country.toUpperCase()]) {
      return COUNTRY_CURRENCY[country.toUpperCase()];
    }
    throw new Error("no usable country from ipinfo");
  } catch {
    try {
      const res = await fetch("https://ipapi.co/json/");
      if (!res.ok) throw new Error("ipapi failed");
      const data = await res.json();
      if (data?.currency) return String(data.currency).toUpperCase();
      const country = data?.country_code as string | undefined;
      if (country && COUNTRY_CURRENCY[country.toUpperCase()]) {
        return COUNTRY_CURRENCY[country.toUpperCase()];
      }
      return null;
    } catch {
      return null;
    }
  }
}

let cachedPromise: Promise<LocalCurrency | null> | null = null;

export function getLocalCurrency(): Promise<LocalCurrency | null> {
  if (!cachedPromise) {
    cachedPromise = (async () => {
      try {
        const currency = await detectCurrencyCode();
        if (!currency || currency === "USD" || !CURRENCY_FORMAT[currency]) {
          return null;
        }

        const rateRes = await fetch(
          "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json",
        );
        if (!rateRes.ok) throw new Error("rate fetch failed");
        const rateData = await rateRes.json();
        const rate = rateData?.usd?.[currency.toLowerCase()];
        if (typeof rate !== "number") return null;

        return { currency, rate };
      } catch {
        return null;
      }
    })();
  }
  return cachedPromise;
}
