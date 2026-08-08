"use client";

import { useEffect, useState } from "react";

type TimeLeft = { hours: number; minutes: number; seconds: number };

function getTimeUntilMidnight(): TimeLeft {
  const now = new Date();
  const midnight = new Date(now);
  midnight.setHours(24, 0, 0, 0);
  const diff = midnight.getTime() - now.getTime();

  return {
    hours: Math.floor(diff / 3_600_000),
    minutes: Math.floor((diff % 3_600_000) / 60_000),
    seconds: Math.floor((diff % 60_000) / 1_000),
  };
}

function pad(value: number) {
  return value.toString().padStart(2, "0");
}

export function CountdownBadge() {
  const [time, setTime] = useState<TimeLeft | null>(null);

  useEffect(() => {
    setTime(getTimeUntilMidnight());
    const interval = setInterval(() => {
      setTime(getTimeUntilMidnight());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  if (!time) return null;

  return (
    <span className="inline-block rounded-full bg-[#e8c468] px-5 py-2 text-sm font-bold uppercase tracking-wide text-ink">
      Oferta válida hasta: {pad(time.hours)}:{pad(time.minutes)}:
      {pad(time.seconds)}
    </span>
  );
}
