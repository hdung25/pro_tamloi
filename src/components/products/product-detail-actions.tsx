"use client";

import { useState } from "react";

type Props = {
  productName: string;
};

export function ProductDetailActions({ productName }: Props) {
  const [qty, setQty] = useState(1);

  const dec = () => setQty((q) => Math.max(1, q - 1));
  const inc = () => setQty((q) => Math.min(99, q + 1));

  return (
    <>
      <div className="mt-6">
        <p className="text-[13px] font-semibold text-[var(--color-ink)]">
          Số lượng
        </p>
        <div className="mt-2 inline-flex items-center overflow-hidden rounded-full border border-[var(--color-line)] bg-white">
          <button
            type="button"
            onClick={dec}
            aria-label="Giảm số lượng"
            className="flex h-10 w-10 items-center justify-center text-lg text-[var(--color-ink)] transition-colors hover:bg-[var(--color-cream)]"
          >
            −
          </button>
          <span className="w-12 text-center text-[15px] font-semibold tabular-nums text-[var(--color-ink)]">
            {qty}
          </span>
          <button
            type="button"
            onClick={inc}
            aria-label="Tăng số lượng"
            className="flex h-10 w-10 items-center justify-center text-lg text-[var(--color-ink)] transition-colors hover:bg-[var(--color-cream)]"
          >
            +
          </button>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() => {
            alert(`Đã thêm ${qty} ${productName} vào giỏ hàng (demo)`);
          }}
          className="group inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-[var(--color-brand)] px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--color-brand-dark)] hover:shadow-lg"
        >
          Thêm vào giỏ hàng
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden>
            <circle cx="9" cy="20" r="1.5" />
            <circle cx="18" cy="20" r="1.5" />
            <path d="M3 4h2l2.5 12.5a2 2 0 0 0 2 1.5h8a2 2 0 0 0 2-1.5L21 8H6" />
          </svg>
        </button>
        <button
          type="button"
          aria-label="Thêm vào yêu thích"
          className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-[var(--color-brand)] text-[var(--color-brand)] transition-colors hover:bg-[var(--color-brand)] hover:text-white"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden>
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78Z" />
          </svg>
        </button>
      </div>
    </>
  );
}
