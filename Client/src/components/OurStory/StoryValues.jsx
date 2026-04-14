"use client";

import { useEffect, useRef, useState } from "react";

export default function StoryValues() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { root: null, threshold: 0.15 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const values = [
    {
      title: "Integrity",
      description: "Transparent dealings and ethical business practices.",
      icon: "handshake",
    },
    {
      title: "Quality",
      description: "Strong construction standards with attention to detail.",
      icon: "verified",
    },
    {
      title: "Sustainability",
      description: "Responsible development with future-ready planning.",
      icon: "eco",
    },
    {
      title: "Customer Focus",
      description: "Designing spaces based on real lifestyle needs.",
      icon: "support_agent",
    },
  ];

  return (
    <section id="values" className="border-t border-neutral-border bg-neutral-white">
      <div
        ref={sectionRef}
        className={[
          "mx-auto max-w-6xl px-6 py-14 transition duration-700 ease-out sm:py-16",
          isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
        ].join(" ")}
      >
        <div className="text-center">
          <p className="text-xs font-bold tracking-[0.25em] text-primary">OUR VALUES</p>
          <h2 className="mt-3 font-heading text-3xl font-semibold leading-tight text-neutral-darkText sm:text-4xl">
            The Principles That Guide Every Project
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 xs:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <div
              key={v.title}
              className="group rounded-xl border border-neutral-border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-neutral-background text-brand-softBlue transition group-hover:text-primary">
                <span className="material-symbols-outlined text-[22px] leading-none">{v.icon}</span>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-neutral-darkText">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-lightText">{v.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-neutral-border bg-neutral-background px-6 py-7 text-center sm:px-10 sm:py-9">
          <p className="font-heading text-lg italic text-brand-blue sm:text-xl">
            “Building with responsibility, designing with purpose, and delivering with integrity.”
          </p>
        </div>
      </div>
    </section>
  );
}

