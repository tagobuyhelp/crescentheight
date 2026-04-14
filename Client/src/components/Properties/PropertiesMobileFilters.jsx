"use client";

export default function PropertiesMobileFilters({
  isOpen,
  onClose,
  draft,
  setDraft,
  budgetOptions,
  onResetDraft,
  onApply,
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[70] md:hidden">
      <button
        type="button"
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
        aria-label="Close filters overlay"
      />
      <div className="absolute inset-x-0 bottom-0 rounded-t-3xl bg-white shadow-2xl">
        <div className="flex items-center justify-between border-b border-neutral-border px-5 py-4">
          <p className="text-sm font-semibold tracking-[0.14em] text-neutral-darkText">FILTERS</p>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-neutral-border bg-white text-neutral-darkText transition hover:text-primary"
            onClick={onClose}
            aria-label="Close filters"
          >
            <span className="material-symbols-outlined text-[22px] leading-none">close</span>
          </button>
        </div>

        <div className="space-y-6 px-5 py-5">
          <div>
            <p className="text-xs font-semibold tracking-[0.14em] text-neutral-lightText">BHK TYPE</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {[
                { key: "1", label: "1 BHK" },
                { key: "2", label: "2 BHK" },
                { key: "3", label: "3 BHK" },
              ].map((t) => {
                const active = draft.bhk.includes(t.key);
                return (
                  <button
                    key={t.key}
                    type="button"
                    onClick={() =>
                      setDraft((prev) => ({
                        ...prev,
                        bhk: prev.bhk.includes(t.key)
                          ? prev.bhk.filter((x) => x !== t.key)
                          : [...prev.bhk, t.key],
                      }))
                    }
                    className={[
                      "inline-flex h-10 items-center justify-center rounded-full border px-4 text-sm font-semibold transition",
                      active
                        ? "border-primary/40 bg-primary/10 text-primary"
                        : "border-neutral-border bg-white text-neutral-lightText hover:text-neutral-darkText",
                    ].join(" ")}
                  >
                    {t.label}
                  </button>
                );
              })}
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-[0.14em] text-neutral-lightText">BUDGET</p>
            <select
              value={draft.budget}
              onChange={(e) => setDraft((prev) => ({ ...prev, budget: e.target.value }))}
              className="mt-3 h-11 w-full rounded-md border border-neutral-border bg-white px-4 text-sm font-semibold text-neutral-darkText outline-none transition focus:border-primary/40"
            >
              {budgetOptions.map((b) => (
                <option key={b.value || "any"} value={b.value}>
                  {b.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-[0.14em] text-neutral-lightText">
              AVAILABILITY
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {[
                { key: "available", label: "Available" },
                { key: "limited", label: "Limited" },
                { key: "sold_out", label: "Sold Out" },
              ].map((t) => {
                const active = draft.availability.includes(t.key);
                return (
                  <button
                    key={t.key}
                    type="button"
                    onClick={() =>
                      setDraft((prev) => ({
                        ...prev,
                        availability: prev.availability.includes(t.key)
                          ? prev.availability.filter((x) => x !== t.key)
                          : [...prev.availability, t.key],
                      }))
                    }
                    className={[
                      "inline-flex h-10 items-center justify-center rounded-full border px-4 text-sm font-semibold transition",
                      active
                        ? "border-primary/40 bg-primary/10 text-primary"
                        : "border-neutral-border bg-white text-neutral-lightText hover:text-neutral-darkText",
                    ].join(" ")}
                  >
                    {t.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3 border-t border-neutral-border px-5 py-4">
          <button
            type="button"
            onClick={onResetDraft}
            className="inline-flex h-11 flex-1 items-center justify-center rounded-md border border-neutral-border bg-white text-sm font-semibold text-neutral-darkText transition hover:border-primary/40 hover:text-primary"
          >
            Reset
          </button>
          <button
            type="button"
            onClick={onApply}
            className="inline-flex h-11 flex-1 items-center justify-center rounded-md bg-primary text-sm font-semibold text-primary-foreground shadow-sm transition hover:bg-primary-hover"
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
}

