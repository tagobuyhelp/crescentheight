"use client";

export default function PropertiesLoadMore({
  shownCount,
  totalCount,
  isLoading,
  canLoadMore,
  onLoadMore,
}) {
  return (
    <section className="bg-neutral-background pb-14">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center justify-center gap-4">
          <p className="text-sm font-semibold text-neutral-darkText">
            Showing {shownCount} of {totalCount} properties
          </p>

          <button
            type="button"
            onClick={onLoadMore}
            disabled={!canLoadMore || isLoading}
            className={[
              "inline-flex h-11 w-full max-w-sm items-center justify-center gap-2 rounded-md border px-6 text-sm font-semibold shadow-sm transition",
              canLoadMore
                ? "border-primary/35 bg-white text-neutral-darkText hover:border-primary/60 hover:text-primary"
                : "border-neutral-border bg-white text-neutral-lightText",
            ].join(" ")}
          >
            {isLoading ? (
              <>
                <span className="inline-flex h-5 w-5 animate-spin rounded-full border-2 border-neutral-border border-t-primary" />
                Loading...
              </>
            ) : canLoadMore ? (
              <>
                <span className="material-symbols-outlined text-[20px] leading-none">expand_more</span>
                Load More Properties
              </>
            ) : (
              <>
                <span className="material-symbols-outlined text-[20px] leading-none">check</span>
                No more properties available
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}

