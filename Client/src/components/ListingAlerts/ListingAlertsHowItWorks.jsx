"use client";

import { useEffect, useRef, useState } from "react";

const steps = [
  {
    title: "Share Preferences",
    desc: "Tell us your preferred property type, location, and budget.",
    icon: "edit_square",
  },
  {
    title: "Set Criteria",
    desc: "Choose BHK type, price range, and specific requirements.",
    icon: "tune",
  },
  {
    title: "Submit Request",
    desc: "Submit your details securely in seconds.",
    icon: "send",
  },
  {
    title: "Get Alerts",
    desc: "Receive updates when matching properties become available.",
    icon: "notifications_active",
  },
];

export default function ListingAlertsHowItWorks() {
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
          <p className="text-xs font-bold tracking-[0.25em] text-primary">HOW IT WORKS</p>
          <h2 className="mt-4 font-heading text-3xl font-semibold leading-tight text-neutral-darkText sm:text-4xl">
            Get the Right Property at the Right Time
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-neutral-lightText sm:text-base">
            Set your preferences once. We alert you when a matching opportunity appears.
          </p>
        </div>

        <div className="relative mt-10 sm:mt-12">
          <div className="pointer-events-none absolute inset-x-8 top-6 hidden lg:block">
            <div className="h-px bg-neutral-border" />
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, idx) => (
              <div
                key={step.title}
                className={[
                  "group rounded-2xl border border-neutral-border bg-white p-5 shadow-sm transition",
                  "hover:-translate-y-1 hover:shadow-md",
                  inView ? "animate-[fadeUp_520ms_ease-out_both]" : "translate-y-3 opacity-0",
                ].join(" ")}
                style={inView ? { animationDelay: `${idx * 90}ms` } : undefined}
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div
                      className={[
                        "flex h-10 w-10 items-center justify-center rounded-full border transition",
                        "border-primary/30 bg-primary/10 text-primary",
                        "group-hover:border-primary/50 group-hover:bg-primary group-hover:text-primary-foreground",
                      ].join(" ")}
                    >
                      <span className="text-sm font-bold tabular-nums">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <span className="material-symbols-outlined text-[22px] leading-none text-brand-softBlue">
                      {step.icon}
                    </span>
                  </div>
                  <span className="hidden text-xs font-semibold tracking-[0.18em] text-neutral-lightText/70 lg:inline">
                    STEP
                  </span>
                </div>

                <p className="mt-4 text-sm font-semibold text-neutral-darkText">{step.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-neutral-lightText">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
