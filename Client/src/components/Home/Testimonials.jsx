"use client";

import { useEffect, useMemo, useState } from "react";

function Stars({ value = 5 }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${value} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className={[
            "material-symbols-outlined text-[18px] leading-none",
            i < value ? "text-primary" : "text-neutral-border",
          ].join(" ")}
        >
          star
        </span>
      ))}
    </div>
  );
}

function Avatar({ name }) {
  const initials = useMemo(() => {
    const parts = name.trim().split(/\s+/).slice(0, 2);
    return parts.map((p) => p[0]?.toUpperCase()).join("");
  }, [name]);

  return (
    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-brand-softBlue/25 via-primary/15 to-brand-green/20 text-sm font-semibold text-brand-blue">
      {initials}
    </div>
  );
}

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "Great location and well-planned layouts. The team was very supportive throughout.",
      name: "Rahul Sharma",
      meta: "2 BHK Buyer",
      rating: 5,
    },
    {
      quote:
        "The project feels premium yet practical. Clear communication and transparent process.",
      name: "Ananya Das",
      meta: "3 BHK Buyer",
      rating: 5,
    },
    {
      quote:
        "Amenities and community spaces are thoughtfully planned. A good long-term decision for families.",
      name: "Sourav Mukherjee",
      meta: "2 BHK Buyer",
      rating: 5,
    },
    {
      quote:
        "I liked the focus on safety and everyday convenience. The location connectivity is a big plus.",
      name: "Priya Sen",
      meta: "Investor",
      rating: 5,
    },
  ];

  const [active, setActive] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % testimonials.length);
    }, 6500);
    return () => window.clearInterval(id);
  }, [isPaused, testimonials.length]);

  return (
    <section id="testimonials" className="border-t border-neutral-border bg-neutral-white">
      <div className="mx-auto max-w-6xl px-6 py-14 sm:py-16">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.25em] text-neutral-lightText">
            TESTIMONIALS
          </p>
          <h2 className="mt-3 font-heading text-3xl font-semibold leading-tight text-neutral-darkText sm:text-4xl">
            What Our Buyers Say
          </h2>
        </div>

        <div
          className="mt-10 overflow-hidden rounded-2xl border border-neutral-border bg-neutral-background shadow-sm"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            className="flex transition-transform duration-700 ease-out"
            style={{ transform: `translateX(-${active * 100}%)` }}
          >
            {testimonials.map((t) => (
              <div key={t.name} className="w-full flex-none p-6 sm:p-8">
                <div className="grid gap-6 md:grid-cols-12 md:items-start">
                  <div className="md:col-span-8">
                    <Stars value={t.rating} />
                    <p className="mt-4 text-pretty text-base leading-relaxed text-neutral-darkText sm:text-lg">
                      “{t.quote}”
                    </p>
                  </div>
                  <div className="md:col-span-4 md:flex md:justify-end">
                    <div className="flex items-center gap-4 rounded-xl border border-neutral-border bg-white px-4 py-3 shadow-sm">
                      <Avatar name={t.name} />
                      <div>
                        <p className="text-sm font-semibold text-neutral-darkText">{t.name}</p>
                        <p className="mt-0.5 text-xs font-semibold tracking-[0.14em] text-neutral-lightText">
                          {t.meta}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between gap-4 border-t border-neutral-border bg-white px-5 py-4">
            <div className="flex items-center gap-2">
              {testimonials.map((t, i) => (
                <button
                  key={t.name}
                  type="button"
                  onClick={() => setActive(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={[
                    "h-2 w-2 rounded-full transition",
                    i === active ? "bg-primary" : "bg-neutral-border hover:bg-neutral-muted",
                  ].join(" ")}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={() => setIsPaused((p) => !p)}
              className="inline-flex items-center gap-2 rounded-full border border-neutral-border bg-white px-3 py-2 text-xs font-semibold tracking-[0.14em] text-neutral-lightText transition hover:border-primary/40 hover:text-primary"
              aria-label={isPaused ? "Play testimonials" : "Pause testimonials"}
            >
              <span className="material-symbols-outlined text-[18px] leading-none">
                {isPaused ? "play_arrow" : "pause"}
              </span>
              {isPaused ? "PLAY" : "PAUSE"}
            </button>
          </div>
        </div>

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: "verified", text: "Trusted Developer" },
            { icon: "payments", text: "Transparent Pricing" },
            { icon: "event_available", text: "On-Time Delivery Goal" },
            { icon: "trending_up", text: "Growing Demand Area" },
          ].map((b) => (
            <div
              key={b.text}
              className="flex items-center gap-3 rounded-2xl border border-neutral-border bg-neutral-background p-4 shadow-sm"
            >
              <span className="material-symbols-outlined text-[22px] leading-none text-brand-softBlue">
                {b.icon}
              </span>
              <p className="text-sm font-semibold text-neutral-darkText">{b.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
