"use client";

import { useEffect, useRef, useState } from "react";

const trustPoints = [
  {
    title: "Secure Data Handling",
    desc: "Your information is securely stored and protected.",
    icon: "lock",
    tone: "text-brand-green",
  },
  {
    title: "No Spam Policy",
    desc: "We do not share your data with third parties.",
    icon: "block",
    tone: "text-brand-softBlue",
  },
  {
    title: "Relevant Updates Only",
    desc: "You’ll only receive updates based on your preferences.",
    icon: "target",
    tone: "text-brand-softBlue",
  },
  {
    title: "Quick Response",
    desc: "Timely and relevant communication from our team.",
    icon: "bolt",
    tone: "text-brand-green",
  },
];

export default function ListingAlertsPrivacy() {
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
    <section ref={rootRef} className="bg-neutral-background pb-14 sm:pb-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold tracking-[0.25em] text-primary">YOUR PRIVACY MATTERS</p>
          <h2 className="mt-4 font-heading text-2xl font-semibold leading-tight text-neutral-darkText sm:text-3xl">
            Your Information is Safe and Secure
          </h2>
        </div>

        <div
          className={[
            "mt-7 rounded-2xl border border-neutral-border bg-white p-4 shadow-sm sm:p-5",
            "bg-[linear-gradient(180deg,rgba(74,123,167,0.10),transparent_70%)]",
            inView ? "animate-[fadeUp_520ms_ease-out_both]" : "translate-y-3 opacity-0",
          ].join(" ")}
        >
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {trustPoints.map((p, idx) => (
              <div
                key={p.title}
                className={[
                  "group rounded-xl border border-neutral-border bg-neutral-background px-4 py-4 transition",
                  "hover:-translate-y-0.5 hover:border-primary/30 hover:bg-white",
                  inView ? "animate-[fadeUp_520ms_ease-out_both]" : "translate-y-3 opacity-0",
                ].join(" ")}
                style={inView ? { animationDelay: `${idx * 80}ms` } : undefined}
              >
                <div className="flex items-start gap-3">
                  <span
                    className={[
                      "material-symbols-outlined mt-0.5 text-[22px] leading-none transition",
                      p.tone,
                      "group-hover:scale-105",
                    ].join(" ")}
                  >
                    {p.icon}
                  </span>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-neutral-darkText">{p.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-neutral-lightText">{p.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

