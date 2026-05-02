"use client";

import { useState } from "react";

type Item = { q: string; a: string };

export function FaqList({ items }: { items: Item[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      {items.map((it, i) => (
        <FaqDisclosure
          key={i}
          q={it.q}
          a={it.a}
          index={i}
          isOpen={openIndex === i}
          onToggle={() => setOpenIndex(openIndex === i ? null : i)}
        />
      ))}
    </>
  );
}

function FaqDisclosure({
  q,
  a,
  index,
  isOpen,
  onToggle,
}: {
  q: string;
  a: string;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const num = `0${index + 1}`;

  return (
    <div className="faq-row group" data-open={isOpen ? "true" : "false"}>
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-baseline justify-between gap-6 text-left"
        aria-expanded={isOpen}
      >
        <span className="font-[family-name:var(--font-sans)] text-[clamp(1rem,1.4vw,1.15rem)] font-medium leading-[1.4] tracking-[-0.008em] text-[color:var(--color-text)] transition-colors group-hover:text-[color:var(--color-accent)]">
          <span className="mr-3 font-[family-name:var(--font-mono)] text-[12px] font-medium tracking-[0.14em] text-[color:var(--color-text-dim)]">
            {num}
          </span>
          {q}
        </span>
        <span className="indicator mt-[0.45rem] block shrink-0" aria-hidden />
      </button>
      <div
        className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="answer">{a}</p>
        </div>
      </div>
    </div>
  );
}
