"use client";

import { useEffect, useRef, useState } from "react";

const benefits = [
  {
    title: "Instant Notifications",
    desc: "Get alerts as soon as new properties are available.",
    icon: "notifications",
  },
  {
    title: "Personalized Results",
    desc: "Only receive listings that match your exact needs.",
    icon: "target",
  },
  {
    title: "Save Time",
    desc: "No need to search repeatedly — we do it for you.",
    icon: "schedule",
  },
  {
    title: "Better Opportunities",
    desc: "Access listings early before they get booked.",
    icon: "trending_up",
  },
];

export default function ListingAlertsBenefits() {
  const rootRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;

    let timer;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        timer = setTimeout(() => setInView(true), 10);
        observer.disconnect();
      },
      { threshold: 0.25 }
    );

    observer.observe(el);
    return () => {
      if (timer) clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  return (
    <section ref={rootRef} className="bg-neutral-background py-14 sm:py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold tracking-[0.25em] text-primary">WHY USE LISTING ALERTS</p>
          <h2 className="mt-4 font-heading text-3xl font-semibold leading-tight text-neutral-darkText sm:text-4xl">
            Never Miss the Right Opportunity
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-neutral-lightText sm:text-base">
            Stay ahead with instant updates tailored to your property preferences.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b, idx) => (
            <div
              key={b.title}
              className={[
                "group rounded-2xl border border-neutral-border bg-white p-5 shadow-sm transition",
                "hover:-translate-y-1 hover:shadow-md",
                inView ? "animate-[fadeUp_520ms_ease-out_both]" : "translate-y-3 opacity-0",
              ].join(" ")}
              style={inView ? { animationDelay: `${idx * 90}ms` } : undefined}
            >
              <div className="flex items-start gap-3">
                <div
                  className={[
                    "flex h-11 w-11 items-center justify-center rounded-xl border transition",
                    "border-primary/25 bg-primary/10 text-primary",
                    "group-hover:border-primary/45 group-hover:bg-primary group-hover:text-primary-foreground",
                  ].join(" ")}
                >
                  <span className="material-symbols-outlined text-[22px] leading-none">{b.icon}</span>
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-neutral-darkText">{b.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-neutral-lightText">{b.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className={[
            "relative mt-8 overflow-hidden rounded-2xl border border-primary/15 bg-white shadow-sm",
            "bg-[linear-gradient(90deg,rgba(212,168,87,0.22),rgba(74,123,167,0.18))]",
            inView ? "animate-[fadeUp_520ms_ease-out_both]" : "translate-y-3 opacity-0",
          ].join(" ")}
          style={inView ? { animationDelay: "420ms" } : undefined}
        >
          <div className="absolute -left-24 -top-24 h-56 w-56 rounded-full bg-primary/20 blur-3xl motion-safe:animate-pulse" />
          <div className="absolute -bottom-24 -right-24 h-56 w-56 rounded-full bg-brand-softBlue/20 blur-3xl motion-safe:animate-pulse" />

          <div className="relative flex flex-col items-start justify-between gap-4 px-6 py-6 sm:flex-row sm:items-center">
            <div>
              <p className="text-xs font-bold tracking-[0.25em] text-brand-blue/70">HIGHLIGHT</p>
              <p className="mt-2 font-heading text-xl font-semibold text-brand-blue sm:text-2xl">
                Be the First to Know About New Listings
              </p>
            </div>
            <a
              href="#alert-form"
              className="inline-flex h-11 items-center justify-center rounded-md bg-brand-blue px-6 text-sm font-semibold text-white shadow-sm transition hover:brightness-110"
            >
              <span className="material-symbols-outlined mr-2 text-[18px] leading-none">arrow_downward</span>
              Set My Alert
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

