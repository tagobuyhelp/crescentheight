"use client";

import Image from "next/image";
import Link from "next/link";

function statusPill(status) {
  if (status === "sold_out") {
    return { label: "SOLD OUT", className: "border-red-200 bg-red-50 text-red-700", icon: "cancel" };
  }
  if (status === "limited") {
    return { label: "LIMITED UNITS", className: "border-amber-200 bg-amber-50 text-amber-800", icon: "warning" };
  }
  return { label: "AVAILABLE", className: "border-emerald-200 bg-emerald-50 text-emerald-800", icon: "check_circle" };
}

export default function PropertiesGrid({ properties }) {
  return (
    <section className="bg-neutral-background">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {properties.map((p, idx) => {
            const pill = statusPill(p.status);
            return (
              <div
                key={p.id}
                style={{ animationDelay: `${Math.min(idx * 40, 240)}ms` }}
                className="group overflow-hidden rounded-2xl border border-neutral-border bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md animate-[fadeUp_520ms_ease-out_both]"
              >
                <div className="relative h-44 overflow-hidden bg-neutral-background">
                  <Image
                    src={p.image}
                    alt={`${p.title} listing`}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-[1500ms] group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
                  <div className="absolute left-4 top-4">
                    {p.recommended ? (
                      <span className="inline-flex items-center gap-1 rounded-full border border-primary/30 bg-primary/15 px-3 py-1 text-[11px] font-semibold tracking-[0.16em] text-primary">
                        <span className="material-symbols-outlined text-[16px] leading-none">star</span>
                        MOST POPULAR
                      </span>
                    ) : null}
                  </div>

                  <div className="absolute right-4 top-4 flex items-center gap-2">
                    <span
                      className={[
                        "inline-flex items-center gap-1 rounded-full border px-3 py-1 text-[11px] font-semibold tracking-[0.16em]",
                        pill.className,
                      ].join(" ")}
                    >
                      <span className="material-symbols-outlined text-[16px] leading-none">
                        {pill.icon}
                      </span>
                      {pill.label}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-lg font-semibold text-neutral-darkText">{p.title}</h3>
                      <p className="mt-1 text-sm text-neutral-lightText">{p.size}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-[10px] font-semibold tracking-[0.14em] text-neutral-lightText">
                        PRICE
                      </p>
                      <p className="mt-1 text-sm font-semibold text-neutral-darkText">{p.price}</p>
                    </div>
                  </div>

                  <div className="mt-4 flex items-center justify-between rounded-xl border border-neutral-border bg-neutral-background px-4 py-3">
                    <p className="text-xs font-semibold tracking-[0.14em] text-neutral-lightText">
                      EST. BUDGET
                    </p>
                    <p className="font-sans text-sm font-bold tracking-tight text-neutral-darkText">
                      ₹{p.budgetL}L+
                    </p>
                  </div>

                  <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                    <Link
                      href={`/properties/${p.id}`}
                      className="inline-flex h-11 w-full items-center justify-center rounded-md bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-sm transition hover:bg-primary-hover"
                    >
                      <span className="material-symbols-outlined mr-2 text-[18px] leading-none">
                        visibility
                      </span>
                      View Details
                    </Link>

                    <Link
                      href="/#lead"
                      className="inline-flex h-11 w-full items-center justify-center rounded-md border border-neutral-border bg-white px-6 text-sm font-semibold text-neutral-darkText shadow-sm transition hover:border-primary/40 hover:text-primary"
                    >
                      <span className="material-symbols-outlined mr-2 text-[18px] leading-none">
                        send
                      </span>
                      Enquire
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
