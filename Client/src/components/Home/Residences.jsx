"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

const tabs = [
  { key: "all", label: "All" },
  { key: "1", label: "1 BHK" },
  { key: "2", label: "2 BHK" },
  { key: "3", label: "3 BHK" },
];

const residences = [
  {
    id: "1bhk",
    type: "1",
    title: "1 BHK",
    sizeRange: "—",
    price: "₹4,200/sq.ft",
    possession: "2027",
    status: "sold_out",
    image: "/assets/images/plans1.jpg",
    cta: "Enquire",
  },
  {
    id: "2bhk",
    type: "2",
    title: "2 BHK",
    sizeRange: "615 – 930 sq.ft",
    price: "₹4,200/sq.ft",
    possession: "2027",
    status: "available",
    recommended: true,
    image: "/assets/images/plans2.jpg",
    cta: "View Details",
  },
  {
    id: "3bhk",
    type: "3",
    title: "3 BHK",
    sizeRange: "980 – 1,240 sq.ft",
    price: "₹4,200/sq.ft",
    possession: "2027",
    status: "limited",
    image: "/assets/images/property4.jpg",
    cta: "View Details",
  },
];

function statusPill(status) {
  if (status === "sold_out") {
    return {
      label: "SOLD OUT",
      className: "border-red-200 bg-red-50 text-red-700",
      icon: "cancel",
    };
  }
  if (status === "limited") {
    return {
      label: "LIMITED UNITS",
      className: "border-amber-200 bg-amber-50 text-amber-800",
      icon: "warning",
    };
  }
  return {
    label: "AVAILABLE",
    className: "border-emerald-200 bg-emerald-50 text-emerald-800",
    icon: "check_circle",
  };
}

export default function Residences() {
  const [activeTab, setActiveTab] = useState("all");

  const filtered = useMemo(() => {
    if (activeTab === "all") return residences;
    return residences.filter((r) => r.type === activeTab);
  }, [activeTab]);

  return (
    <section id="homes" className="border-t border-neutral-border bg-neutral-background">
      <div className="mx-auto max-w-6xl px-6 py-14 sm:py-16">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.25em] text-neutral-lightText">
              AVAILABLE RESIDENCES
            </p>
            <h2 className="mt-3 font-heading text-3xl font-semibold leading-tight text-neutral-darkText sm:text-4xl">
              Find the Home That Fits Your Lifestyle
            </h2>
          </div>
        </div>

        <div className="sticky top-[72px] z-10 mt-8 bg-neutral-background/90 py-3 backdrop-blur md:static md:bg-transparent md:py-0 md:backdrop-blur-0">
          <div className="flex gap-3 overflow-x-auto md:overflow-visible">
            {tabs.map((t) => {
              const isActive = t.key === activeTab;
              return (
                <button
                  key={t.key}
                  type="button"
                  onClick={() => setActiveTab(t.key)}
                  className={[
                    "relative flex-none rounded-full px-4 py-2 text-sm font-semibold transition",
                    isActive
                      ? "text-neutral-darkText"
                      : "text-neutral-lightText hover:text-neutral-darkText",
                  ].join(" ")}
                >
                  {t.label}
                  <span
                    className={[
                      "absolute -bottom-1 left-1/2 h-[2px] w-0 -translate-x-1/2 bg-primary transition-all",
                      isActive ? "w-10" : "",
                    ].join(" ")}
                  />
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((r) => {
            const pill = statusPill(r.status);
            return (
              <div
                key={r.id}
                className="group overflow-hidden rounded-2xl border border-neutral-border bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="relative h-44 overflow-hidden bg-neutral-background">
                  <Image
                    src={r.image}
                    alt={`${r.title} floor plan`}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />

                  <div className="absolute left-4 top-4 flex items-center gap-2">
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
                    {r.recommended ? (
                      <span className="inline-flex items-center gap-1 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-[11px] font-semibold tracking-[0.16em] text-primary">
                        <span className="material-symbols-outlined text-[16px] leading-none">
                          star
                        </span>
                        MOST POPULAR
                      </span>
                    ) : null}
                  </div>
                </div>

                <div className="p-5">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-lg font-semibold text-neutral-darkText">{r.title}</h3>
                      <p className="mt-1 text-sm text-neutral-lightText">{r.sizeRange}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs font-semibold tracking-[0.16em] text-neutral-lightText">
                        PRICE
                      </p>
                      <p className="mt-1 text-sm font-semibold text-neutral-darkText">{r.price}</p>
                    </div>
                  </div>

                  <div className="mt-4 grid grid-cols-2 gap-3 rounded-xl border border-neutral-border bg-neutral-background p-4">
                    <div className="flex items-start gap-2">
                      <span className="material-symbols-outlined mt-0.5 text-[18px] leading-none text-brand-softBlue">
                        straighten
                      </span>
                      <div>
                        <p className="text-[10px] font-semibold tracking-[0.14em] text-neutral-lightText">
                          SIZES
                        </p>
                        <p className="mt-1 text-sm font-semibold text-neutral-darkText">
                          {r.sizeRange}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="material-symbols-outlined mt-0.5 text-[18px] leading-none text-brand-softBlue">
                        event
                      </span>
                      <div>
                        <p className="text-[10px] font-semibold tracking-[0.14em] text-neutral-lightText">
                          POSSESSION
                        </p>
                        <p className="mt-1 text-sm font-semibold text-neutral-darkText">
                          {r.possession}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 flex items-center gap-3">
                    <a
                      className={[
                        "inline-flex h-11 flex-1 items-center justify-center rounded-md px-5 text-sm font-semibold shadow-sm transition",
                        r.status === "sold_out"
                          ? "cursor-not-allowed border border-neutral-border bg-neutral-background text-neutral-lightText"
                          : "bg-secondary text-secondary-foreground hover:bg-secondary-hover",
                      ].join(" ")}
                      href={r.status === "sold_out" ? undefined : "#lead"}
                      aria-disabled={r.status === "sold_out"}
                      tabIndex={r.status === "sold_out" ? -1 : 0}
                    >
                      <span className="material-symbols-outlined mr-2 text-[18px] leading-none">
                        visibility
                      </span>
                      View Details
                    </a>
                    <a
                      className={[
                        "inline-flex h-11 flex-1 items-center justify-center rounded-md px-5 text-sm font-semibold shadow-sm transition",
                        r.status === "sold_out"
                          ? "bg-primary text-primary-foreground hover:bg-primary-hover"
                          : "border border-neutral-border bg-white text-neutral-darkText hover:border-primary/40 hover:text-primary",
                      ].join(" ")}
                      href="#lead"
                    >
                      <span className="material-symbols-outlined mr-2 text-[18px] leading-none">
                        call
                      </span>
                      {r.status === "sold_out" ? "Enquire" : "Enquire"}
                    </a>
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
