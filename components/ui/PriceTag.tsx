"use client";

import { useEffect, useState } from "react";
import { getLocalCurrency, formatConverted } from "@/lib/currency";

export function PriceTag({ usd }: { usd: number }) {
  const [text, setText] = useState(`USD ${usd}`);

  useEffect(() => {
    let cancelled = false;

    getLocalCurrency()
      .then((local) => {
        if (cancelled || !local) return;
        const formatted = formatConverted(usd * local.rate, local.currency);
        if (formatted) setText(formatted);
      })
      .catch(() => {});

    return () => {
      cancelled = true;
    };
  }, [usd]);

  return <>{text}</>;
}
