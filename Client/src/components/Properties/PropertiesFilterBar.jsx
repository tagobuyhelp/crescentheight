"use client";

export default function PropertiesFilterBar({
  bhk,
  budget,
  availability,
  budgetOptions,
  filteredCount,
  selectedTags,
  onToggleBhk,
  onToggleAvailability,
  onBudgetChange,
  onReset,
  onOpenMobile,
}) {
  return (
    <div className="sticky top-[72px] z-40 border-b border-neutral-border bg-slate-50/90 backdrop-blur">
      <div className="mx-auto max-w-6xl px-6 py-4">
        <div className="rounded-2xl border border-neutral-border bg-white p-4 shadow-sm">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center justify-between gap-3 md:hidden">
              <button
                type="button"
                onClick={onOpenMobile}
                className="inline-flex h-11 items-center justify-center gap-2 rounded-md border border-neutral-border bg-white px-4 text-sm font-semibold text-neutral-darkText shadow-sm transition hover:border-primary/40 hover:text-primary"
              >
                <span className="material-symbols-outlined text-[20px] leading-none">tune</span>
                Filters
                {selectedTags.length ? (
                  <span className="ml-1 inline-flex h-6 min-w-6 items-center justify-center rounded-full bg-primary/15 px-2 text-xs font-bold text-primary">
                    {selectedTags.length}
                  </span>
                ) : null}
              </button>
              <p className="text-sm font-semibold text-neutral-darkText">
                Showing {filteredCount} Properties
              </p>
            </div>

            <div className="hidden w-full items-center gap-3 md:flex">
              <div className="flex items-center gap-2">
                {[
                  { key: "1", label: "1 BHK" },
                  { key: "2", label: "2 BHK" },
                  { key: "3", label: "3 BHK" },
                ].map((t) => {
                  const active = bhk.includes(t.key);
                  return (
                    <button
                      key={t.key}
                      type="button"
                      onClick={() => onToggleBhk(t.key)}
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

              <div className="h-7 w-px bg-neutral-border" />

              <select
                value={budget}
                onChange={(e) => onBudgetChange(e.target.value)}
                className="h-10 rounded-md border border-neutral-border bg-white px-3 text-sm font-semibold text-neutral-darkText outline-none transition focus:border-primary/40"
              >
                {budgetOptions.map((b) => (
                  <option key={b.value || "any"} value={b.value}>
                    {b.label}
                  </option>
                ))}
              </select>

              <div className="h-7 w-px bg-neutral-border" />

              <div className="flex items-center gap-2">
                {[
                  { key: "available", label: "Available" },
                  { key: "limited", label: "Limited" },
                  { key: "sold_out", label: "Sold Out" },
                ].map((t) => {
                  const active = availability.includes(t.key);
                  return (
                    <button
                      key={t.key}
                      type="button"
                      onClick={() => onToggleAvailability(t.key)}
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

              <button
                type="button"
                onClick={onReset}
                className="ml-auto inline-flex h-10 items-center justify-center gap-2 rounded-md border border-neutral-border bg-white px-4 text-sm font-semibold text-neutral-darkText shadow-sm transition hover:border-primary/40 hover:text-primary"
              >
                <span className="material-symbols-outlined text-[20px] leading-none">restart_alt</span>
                Reset
              </button>
            </div>

            <div className="hidden items-center gap-3 md:flex">
              <p className="text-sm font-semibold text-neutral-darkText">Showing {filteredCount} Properties</p>
            </div>
          </div>

          {selectedTags.length ? (
            <div className="mt-3 flex flex-wrap items-center gap-2">
              <span className="text-xs font-semibold tracking-[0.14em] text-neutral-lightText">
                SELECTED:
              </span>
              {selectedTags.map((t) => (
                <button
                  key={t.key}
                  type="button"
                  onClick={t.onRemove}
                  className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary transition hover:bg-primary/15"
                >
                  {t.label}
                  <span className="material-symbols-outlined text-[16px] leading-none">close</span>
                </button>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

