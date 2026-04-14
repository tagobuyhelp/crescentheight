"use client";

import { useEffect, useMemo, useRef, useState } from "react";

function clamp01(value) {
  return Math.min(1, Math.max(0, value));
}

export default function StoryJourney() {
  const trackRef = useRef(null);
  const rafRef = useRef(null);
  const lastProgressRef = useRef(-1);
  const [progress, setProgress] = useState(0);

  const steps = useMemo(
    () => [
      {
        year: "2018",
        title: "Foundation",
        description: "Company established with a focus on responsible development.",
        icon: "corporate_fare",
        accent: "border-brand-softBlue",
        badge: "bg-brand-softBlue/10 text-brand-softBlue",
      },
      {
        year: "2020",
        title: "First Projects",
        description: "Delivered initial residential developments with strong construction standards.",
        icon: "construction",
        accent: "border-primary",
        badge: "bg-primary/10 text-primary",
      },
      {
        year: "2023",
        title: "Expansion",
        description: "Expanded into commercial & greenfield projects with transparent practices.",
        icon: "trending_up",
        accent: "border-brand-softBlue",
        badge: "bg-brand-softBlue/10 text-brand-softBlue",
      },
      {
        year: "2027",
        title: "Crescent Heights",
        description: "Flagship project delivering modern urban living for Kolkata’s next chapter.",
        icon: "home",
        accent: "border-primary",
        badge: "bg-primary/10 text-primary",
      },
    ],
    [],
  );

  useEffect(() => {
    const update = () => {
      if (!trackRef.current) return;
      const rect = trackRef.current.getBoundingClientRect();
      const scrollY = window.scrollY;
      const top = rect.top + scrollY;
      const bottom = rect.bottom + scrollY;
      const viewportH = window.innerHeight || 1;

      const start = top - viewportH * 0.65;
      const end = bottom - viewportH * 0.35;
      const next = clamp01((scrollY - start) / Math.max(1, end - start));

      if (Math.abs(next - lastProgressRef.current) < 0.01) return;
      lastProgressRef.current = next;
      setProgress(next);
    };

    const onScroll = () => {
      if (rafRef.current) return;
      rafRef.current = window.requestAnimationFrame(() => {
        rafRef.current = null;
        update();
      });
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      if (rafRef.current) window.cancelAnimationFrame(rafRef.current);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const activeIndex = Math.min(steps.length - 1, Math.floor(progress * steps.length));
  const lineHeight = `${Math.round(progress * 100)}%`;

  return (
    <section id="journey" className="border-t border-neutral-border bg-neutral-background">
      <div className="mx-auto max-w-6xl px-6 py-14 sm:py-16">
        <div className="text-center">
          <p className="text-xs font-bold tracking-[0.25em] text-primary">OUR JOURNEY</p>
          <h2 className="mt-3 font-heading text-3xl font-semibold leading-tight text-neutral-darkText sm:text-4xl">
            A Journey Built on Trust and Growth
          </h2>
        </div>

        <div ref={trackRef} className="relative mt-12">
          <div className="absolute bottom-0 left-4 top-0 w-px bg-neutral-border md:hidden" />
          <div className="absolute left-4 top-0 w-px bg-primary md:hidden" style={{ height: lineHeight }} />

          <div className="absolute bottom-0 left-1/2 top-0 hidden w-px -translate-x-1/2 bg-neutral-border md:block" />
          <div
            className="absolute left-1/2 top-0 hidden w-px -translate-x-1/2 bg-primary md:block"
            style={{ height: lineHeight }}
          />

          <div className="space-y-8 md:space-y-12">
            {steps.map((step, idx) => {
              const isActive = idx <= activeIndex;
              const isLeft = idx % 2 === 0;
              return (
                <div key={step.year} className="relative">
                  <div
                    className={[
                      "absolute left-4 top-7 h-3 w-3 -translate-x-1/2 rounded-full border-2 transition-all duration-500 md:left-1/2 md:top-10",
                      isActive ? "border-primary bg-primary shadow-[0_0_0_6px_rgba(212,168,87,0.18)]" : "border-white/70 bg-neutral-white",
                      isActive ? "scale-110" : "scale-100",
                    ].join(" ")}
                  />

                  <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16">
                    <div
                      className={[
                        "ml-10 md:ml-0",
                        isLeft ? "md:pr-16" : "md:col-start-2 md:pl-16",
                      ].join(" ")}
                    >
                      <div
                        className={[
                          "rounded-2xl border border-neutral-border bg-white p-6 shadow-sm transition duration-700 ease-out",
                          step.accent,
                          "border-l-4",
                          isActive ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
                        ].join(" ")}
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <span
                              className={[
                                "inline-flex items-center rounded-full px-3 py-1 text-[11px] font-semibold tracking-[0.16em]",
                                step.badge,
                              ].join(" ")}
                            >
                              {step.year}
                            </span>
                            <h3 className="mt-3 text-lg font-semibold text-neutral-darkText">
                              {step.title}
                            </h3>
                          </div>
                          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-neutral-background text-brand-softBlue">
                            <span className="material-symbols-outlined text-[22px] leading-none">
                              {step.icon}
                            </span>
                          </div>
                        </div>
                        <p className="mt-3 text-sm leading-relaxed text-neutral-lightText">
                          {step.description}
                        </p>
                      </div>
                    </div>
                    <div className={isLeft ? "hidden md:block" : "hidden md:block md:col-start-1"} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

