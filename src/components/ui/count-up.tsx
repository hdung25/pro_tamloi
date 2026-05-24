"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  to: number;
  from?: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  separator?: string;
  className?: string;
  threshold?: number;
};

function formatNumber(value: number, separator: string) {
  const rounded = Math.floor(value);
  if (!separator) return rounded.toString();
  return rounded.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator);
}

export function CountUp({
  to,
  from = 0,
  duration = 1800,
  prefix = "",
  suffix = "",
  separator = ".",
  className,
  threshold = 0.3,
}: Props) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [value, setValue] = useState(from);
  const startedRef = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || startedRef.current) return;

    if (typeof IntersectionObserver === "undefined") {
      setValue(to);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && !startedRef.current) {
            startedRef.current = true;
            io.unobserve(entry.target);

            const start = performance.now();
            const step = (now: number) => {
              const elapsed = now - start;
              const progress = Math.min(elapsed / duration, 1);
              const eased = 1 - Math.pow(1 - progress, 3);
              const current = from + (to - from) * eased;
              setValue(current);
              if (progress < 1) requestAnimationFrame(step);
              else setValue(to);
            };
            requestAnimationFrame(step);
          }
        }
      },
      { threshold },
    );

    io.observe(el);
    return () => io.disconnect();
  }, [to, from, duration, threshold]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {formatNumber(value, separator)}
      {suffix}
    </span>
  );
}
