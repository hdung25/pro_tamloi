"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "sent" | "error";

export function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    await new Promise((r) => setTimeout(r, 600));
    setStatus("sent");
    setName("");
    setPhone("");
    setEmail("");
    setMessage("");
    setTimeout(() => setStatus("idle"), 3500);
  };

  const inputCls =
    "w-full rounded-full border border-[var(--color-line)] bg-white px-5 py-3 text-[14px] text-[var(--color-ink)] placeholder:text-[var(--color-ink-soft)] transition-colors focus:border-[var(--color-brand)] focus:outline-none focus:ring-2 focus:ring-[var(--color-brand)]/20";

  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-[var(--color-line)] md:p-7">
      <h3 className="text-sm font-bold uppercase tracking-wide text-[var(--color-brand)]">
        Gửi liên hệ cho chúng tôi
      </h3>

      <form onSubmit={submit} className="mt-4 space-y-3">
        <input
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Họ và tên *"
          className={inputCls}
        />
        <input
          type="tel"
          required
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Số điện thoại *"
          className={inputCls}
        />
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email *"
          className={inputCls}
        />
        <textarea
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Nội dung liên hệ *"
          rows={5}
          className="w-full rounded-2xl border border-[var(--color-line)] bg-white px-5 py-3 text-[14px] text-[var(--color-ink)] placeholder:text-[var(--color-ink-soft)] transition-colors focus:border-[var(--color-brand)] focus:outline-none focus:ring-2 focus:ring-[var(--color-brand)]/20"
        />

        <button
          type="submit"
          disabled={status === "sending"}
          className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-[var(--color-brand)] px-7 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--color-brand-dark)] hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "sending" ? "Đang gửi..." : "Gửi liên hệ"}
          {status !== "sending" && (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden>
              <path d="m22 2-7 20-4-9-9-4 20-7Z" />
            </svg>
          )}
        </button>

        {status === "sent" && (
          <p className="rounded-lg bg-green-50 px-4 py-3 text-center text-[13px] font-medium text-green-700">
            ✓ Cảm ơn bạn! Tâm Lợi Foods sẽ liên hệ lại trong thời gian sớm nhất.
          </p>
        )}
      </form>
    </div>
  );
}
