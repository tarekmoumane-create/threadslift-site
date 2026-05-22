"use client";

import { useEffect, useRef, useState } from "react";

const BUDGETS = [
  "Under $5,000",
  "$5,000 - $10,000",
  "$10,000 - $25,000",
  "$25,000 - $100,000",
];

const CALENDLY_URL = "https://calendly.com/lifthreads/discovery-call";

export function BookingForm() {
  const [pending, setPending] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setPending(true);
    const fd = new FormData(e.currentTarget);
    const params = new URLSearchParams({
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      a1: String(fd.get("company") ?? ""),
      a2: String(fd.get("website") ?? ""),
      a3: String(fd.get("budget") ?? ""),
    });
    window.location.href = `${CALENDLY_URL}?${params.toString()}`;
  }

  return (
    <form
      onSubmit={onSubmit}
      className="surface-card-static !overflow-visible flex flex-col gap-5 px-7 py-8 lg:px-9 lg:py-9"
    >
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Name" name="name" required placeholder="Jane Doe" />
        <Field
          label="Work email"
          name="email"
          type="email"
          required
          placeholder="jane@company.com"
        />
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        <Field
          label="Company name"
          name="company"
          required
          placeholder="Acme, Inc."
        />
        <Field
          label="Website"
          name="website"
          type="url"
          required
          placeholder="https://acme.com"
        />
      </div>
      <div>
        <label className="input-label" htmlFor="budget-trigger">
          Monthly marketing budget
        </label>
        <Select
          name="budget"
          options={BUDGETS}
          placeholder="Select a range"
          required
          triggerId="budget-trigger"
        />
      </div>
      <div className="mt-2 flex flex-wrap items-center justify-between gap-4">
        <span className="text-[12px] text-[color:var(--color-text-muted)]">
          We reply within one business day. No marketing sequences.
        </span>
        <button
          type="submit"
          disabled={pending}
          className="btn-primary disabled:cursor-not-allowed disabled:opacity-70"
        >
          {pending ? "Sending..." : "Send"}
          {!pending && (
            <span className="arrow" aria-hidden>
              →
            </span>
          )}
        </button>
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="input-label" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="input-field"
        autoComplete="off"
      />
    </div>
  );
}

function Select({
  name,
  options,
  placeholder,
  required,
  triggerId,
}: {
  name: string;
  options: string[];
  placeholder: string;
  required?: boolean;
  triggerId?: string;
}) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    function onDocClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  function pick(opt: string) {
    setValue(opt);
    setOpen(false);
  }

  return (
    <div ref={ref} className="relative">
      {/* Hidden input carries the value into form submission, with required validation. */}
      <input
        type="text"
        name={name}
        value={value}
        required={required}
        readOnly
        tabIndex={-1}
        aria-hidden="true"
        className="pointer-events-none absolute h-0 w-0 opacity-0"
        onChange={() => {}}
      />
      <button
        id={triggerId}
        type="button"
        onClick={() => setOpen((o) => !o)}
        className={`input-field flex w-full items-center justify-between gap-3 text-left ${
          value ? "" : "text-[color:var(--color-text-dim)]"
        }`}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span className="min-w-0 flex-1 whitespace-nowrap">
          {value || placeholder}
        </span>
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          className={`shrink-0 text-[color:var(--color-text-muted)] transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
          aria-hidden
        >
          <path
            d="M2 4.5l4 4 4-4"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      {open && (
        <ul
          role="listbox"
          className="absolute left-0 z-30 mt-2 min-w-full w-max overflow-hidden rounded-xl border border-[color:var(--color-border-strong)] bg-[color:var(--color-surface)] p-1.5 shadow-[0_24px_60px_-16px_rgba(0,0,0,0.7)]"
        >
          {options.map((opt) => {
            const selected = opt === value;
            return (
              <li key={opt} role="option" aria-selected={selected}>
                <button
                  type="button"
                  onClick={() => pick(opt)}
                  className={`flex w-full items-center justify-between gap-6 whitespace-nowrap rounded-lg px-3 py-2.5 text-left text-[14.5px] transition ${
                    selected
                      ? "bg-[color:var(--color-accent-soft)] text-[color:var(--color-text)]"
                      : "text-[color:var(--color-text-2)] hover:bg-[color:var(--color-bg-2)] hover:text-[color:var(--color-text)]"
                  }`}
                >
                  <span>{opt}</span>
                  {selected ? (
                    <span
                      aria-hidden
                      className="text-[color:var(--color-accent)]"
                    >
                      ✓
                    </span>
                  ) : null}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
