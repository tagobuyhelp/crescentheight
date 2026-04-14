"use client";

import { useEffect, useRef, useState } from "react";

function Marquee({ items, reverse = false }) {
  const content = items.join(" ✦ ");
  return (
    <div className="marquee overflow-hidden bg-brand-blue text-white">
      <div className={["marquee__track", reverse ? "marquee__track--reverse" : ""].join(" ")}>
        <span className="marquee__content">{content} ✦</span>
        <span className="marquee__content" aria-hidden="true">
          {content} ✦
        </span>
      </div>
    </div>
  );
}

export default function TrustInvest() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { root: null, threshold: 0.12 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const trustMarquee = [
    "✔ 500+ Happy Buyers",
    "✔ Prime Kolkata Location",
    "✔ High Appreciation Potential",
    "✔ Secure Gated Community",
    "✔ Trusted Developer",
  ];

  const activityMarquee = [
    "🔥 Site Visits Ongoing",
    "🏗 Construction in Progress",
    "📞 Enquiries Open",
    "🏠 Limited Units Available",
    "💰 Starting ₹4,200/sq.ft",
  ];

  const cards = [
    {
      icon: "location_on",
      title: "Prime Location",
      description: "Well-connected Kolkata location with future growth.",
    },
    {
      icon: "verified",
      title: "Trusted Developer",
      description: "Hospice Property with transparent practices.",
    },
    {
      icon: "trending_up",
      title: "High Appreciation",
      description: "Growing demand supports long-term value.",
    },
    {
      icon: "diversity_3",
      title: "Lifestyle Living",
      description: "Modern amenities + community experience.",
    },
  ];

  return (
    <section id="invest" className="border-t border-neutral-border bg-neutral-background">
      <div
        ref={sectionRef}
        className={[
          "mx-auto max-w-6xl px-6 py-14 transition duration-700 ease-out sm:py-16",
          isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
        ].join(" ")}
      >
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.25em] text-neutral-lightText">
            WHY INVEST
          </p>
          <h2 className="mt-3 font-heading text-3xl font-semibold leading-tight text-neutral-darkText sm:text-4xl">
            A Smart Investment for Your Future
          </h2>
          <p className="mt-5 text-pretty text-base leading-relaxed text-neutral-lightText sm:text-lg">
            Strategic location, trusted developer, and strong demand make Crescent Heights a reliable
            long-term investment.
          </p>
        </div>

        <div className="mt-8 overflow-hidden rounded-2xl border border-white/10 shadow-sm">
          <Marquee items={trustMarquee} />
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {cards.map((c) => (
            <div
              key={c.title}
              className="group rounded-2xl border border-neutral-border bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-neutral-background text-brand-softBlue transition group-hover:text-primary">
                  <span className="material-symbols-outlined text-[22px] leading-none">{c.icon}</span>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-neutral-darkText">{c.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-lightText">{c.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 overflow-hidden rounded-2xl border border-white/10 shadow-sm">
          <Marquee items={activityMarquee} reverse />
        </div>

        <div className="mt-10 rounded-2xl border border-neutral-border bg-white p-6 shadow-sm sm:p-8">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <h3 className="text-lg font-semibold text-neutral-darkText">
                Secure Your Future Home Today
              </h3>
              <p className="mt-1 text-sm text-neutral-lightText">
                Get the latest availability and schedule a site visit.
              </p>
            </div>
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <a
                className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-sm transition hover:bg-primary-hover"
                href="#lead"
              >
                <span className="material-symbols-outlined mr-2 text-[18px] leading-none">
                  calendar_month
                </span>
                Book Site Visit
              </a>
              <a
                className="inline-flex h-11 items-center justify-center rounded-md border border-neutral-border bg-white px-6 text-sm font-semibold text-neutral-darkText shadow-sm transition hover:border-primary/40 hover:text-primary"
                href="tel:+918017776957"
              >
                <span className="material-symbols-outlined mr-2 text-[18px] leading-none">call</span>
                Talk to Expert
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
