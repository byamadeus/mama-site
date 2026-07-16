"use client";

import { useEffect, useState } from "react";

export default function WhyCard({
  title,
  hook,
  body,
}: {
  title: string;
  hook: string;
  body: string;
}) {
  const [render, setRender] = useState(false);
  const [open, setOpen] = useState(false);

  function show() {
    setRender(true);
    requestAnimationFrame(() => requestAnimationFrame(() => setOpen(true)));
  }

  function hide() {
    setOpen(false);
    setTimeout(() => setRender(false), 300);
  }

  useEffect(() => {
    if (!render) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && hide();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [render]);

  return (
    <>
      <button
        type="button"
        onClick={show}
        className="group flex w-full items-center justify-between gap-4 rounded-xl border border-line bg-surface px-6 py-5 text-left transition-colors hover:border-foreground/40"
      >
        <span>
          <span className="block font-display text-lg text-foreground">
            {title}
          </span>
          <span className="mt-1 block text-sm text-muted">{hook}</span>
        </span>
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-line text-foreground transition-transform duration-300 group-hover:rotate-45">
          +
        </span>
      </button>

      {render && (
        <div className="fixed inset-0 z-[100] flex items-end justify-center sm:items-center sm:p-6">
          <div
            className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${
              open ? "opacity-100" : "opacity-0"
            }`}
            onClick={hide}
          />
          <div
            className={`relative w-full max-w-lg rounded-t-2xl border border-line bg-background p-8 shadow-xl transition-all duration-300 sm:rounded-2xl ${
              open
                ? "translate-y-0 opacity-100"
                : "translate-y-6 opacity-0 sm:translate-y-3"
            }`}
          >
            <button
              type="button"
              onClick={hide}
              aria-label="Close"
              className="absolute right-5 top-5 flex h-8 w-8 items-center justify-center rounded-full border border-line text-foreground transition-colors hover:bg-surface"
            >
              ×
            </button>
            <p className="pr-8 font-display text-2xl text-foreground">
              {title}
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              {body}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
