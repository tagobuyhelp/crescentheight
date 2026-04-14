"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function CategoriesFeatured() {
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
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => {
      if (timer) clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  return (
    <section ref={rootRef} className="border-t border-neutral-border bg-neutral-white py-14 sm:py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold tracking-[0.25em] text-primary">FEATURED CATEGORIES</p>
          <h2 className="mt-4 font-heading text-3xl font-semibold leading-tight text-neutral-darkText sm:text-4xl">
            Handpicked for What Most Buyers Want
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-neutral-lightText sm:text-base">
            Explore the categories that match today’s demand — faster decisions, better options.
          </p>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-12">
          <Link
            href="/properties?bhk=2"
            className={[
              "group relative isolate overflow-hidden rounded-3xl border border-primary/25 bg-white shadow-sm transition",
              "hover:-translate-y-1 hover:shadow-md",
              "lg:col-span-7",
              inView ? "animate-[fadeUp_520ms_ease-out_both]" : "translate-y-3 opacity-0",
            ].join(" ")}
            style={inView ? { animationDelay: "0ms" } : undefined}
            aria-label="Explore 2 BHK properties"
          >
            <div className="absolute inset-0 -z-10">
              <Image
                src="/assets/images/plans2.jpg"
                alt="2 BHK featured"
                fill
                sizes="(min-width: 1024px) 58vw, 100vw"
                className="object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-[1.06]"
              />
            </div>
            <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/75 via-black/30 to-black/10 transition-opacity duration-300 group-hover:opacity-95" />

            <div className="flex min-h-[320px] flex-col justify-between p-6 text-white sm:min-h-[360px] sm:p-8">
              <div className="flex items-start justify-between gap-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1 rounded-full border border-primary/35 bg-primary/15 px-3 py-1 text-[11px] font-semibold tracking-[0.16em] text-primary">
                    <span className="material-symbols-outlined text-[16px] leading-none">star</span>
                    MOST POPULAR
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] font-semibold tracking-[0.16em] text-white/90 backdrop-blur">
                    <span className="material-symbols-outlined text-[16px] leading-none">bolt</span>
                    LIMITED UNITS AVAILABLE
                  </span>
                </div>

                <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] font-semibold tracking-[0.16em] text-white/90 backdrop-blur">
                  Starting ₹4,200/sq.ft
                </span>
              </div>

              <div>
                <p className="text-xs font-semibold tracking-[0.25em] text-white/75">2 BHK</p>
                <h3 className="mt-3 font-heading text-3xl font-semibold leading-tight sm:text-4xl">
                  Most Popular Choice
                </h3>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/85 sm:text-base">
                  Perfect balance of affordability and comfort for modern families.
                </p>

                <div className="mt-6 inline-flex h-11 items-center justify-center rounded-md bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-[0_12px_30px_rgba(212,168,87,0.22)] transition hover:bg-primary-hover hover:shadow-[0_16px_40px_rgba(212,168,87,0.30)]">
                  <span className="material-symbols-outlined mr-2 text-[18px] leading-none">search</span>
                  Explore Now
                </div>
              </div>
            </div>
          </Link>

          <div className="grid gap-4 lg:col-span-5">
            <Link
              href="/properties?bhk=3"
              className={[
                "group relative isolate overflow-hidden rounded-3xl border border-neutral-border bg-white shadow-sm transition",
                "hover:-translate-y-1 hover:shadow-md",
                inView ? "animate-[fadeUp_520ms_ease-out_both]" : "translate-y-3 opacity-0",
              ].join(" ")}
              style={inView ? { animationDelay: "90ms" } : undefined}
              aria-label="Explore 3 BHK properties"
            >
              <div className="absolute inset-0 -z-10">
                <Image
                  src="/assets/images/building-image-8.jpg"
                  alt="3 BHK premium"
                  fill
                  sizes="(min-width: 1024px) 42vw, 100vw"
                  className="object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-[1.06]"
                />
              </div>
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/70 via-black/25 to-black/10 transition-opacity duration-300 group-hover:opacity-95" />

              <div className="flex min-h-[170px] flex-col justify-between p-6 text-white sm:min-h-[180px]">
                <div className="flex items-start justify-between gap-3">
                  <span className="inline-flex items-center gap-1 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] font-semibold tracking-[0.16em] text-white/90 backdrop-blur">
                    PREMIUM
                  </span>
                  <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] font-semibold tracking-[0.16em] text-white/90 backdrop-blur">
                    Starting ₹4,200/sq.ft
                  </span>
                </div>

                <div>
                  <p className="text-xs font-semibold tracking-[0.25em] text-white/75">3 BHK</p>
                  <p className="mt-2 font-heading text-2xl font-semibold leading-tight">
                    Spacious Living Experience
                  </p>
                  <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-white/90 transition group-hover:text-primary">
                    Explore Now
                    <span className="material-symbols-outlined text-[18px] leading-none">arrow_forward</span>
                  </div>
                </div>
              </div>
            </Link>

            <Link
              href="/properties"
              className={[
                "group relative isolate overflow-hidden rounded-3xl border border-neutral-border bg-white shadow-sm transition",
                "hover:-translate-y-1 hover:shadow-md",
                inView ? "animate-[fadeUp_520ms_ease-out_both]" : "translate-y-3 opacity-0",
              ].join(" ")}
              style={inView ? { animationDelay: "180ms" } : undefined}
              aria-label="Explore commercial properties"
            >
              <div className="absolute inset-0 -z-10">
                <Image
                  src="/assets/images/services.jpg"
                  alt="Commercial spaces"
                  fill
                  sizes="(min-width: 1024px) 42vw, 100vw"
                  className="object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-[1.06]"
                />
              </div>
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/70 via-black/25 to-black/10 transition-opacity duration-300 group-hover:opacity-95" />

              <div className="flex min-h-[170px] flex-col justify-between p-6 text-white sm:min-h-[180px]">
                <div className="flex items-start justify-between gap-3">
                  <span className="inline-flex items-center gap-1 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] font-semibold tracking-[0.16em] text-white/90 backdrop-blur">
                    OPTIONAL
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] font-semibold tracking-[0.16em] text-white/90 backdrop-blur">
                    <span className="material-symbols-outlined text-[16px] leading-none">storefront</span>
                    BUSINESS
                  </span>
                </div>

                <div>
                  <p className="text-xs font-semibold tracking-[0.25em] text-white/75">COMMERCIAL</p>
                  <p className="mt-2 font-heading text-2xl font-semibold leading-tight">
                    Business-Ready Spaces
                  </p>
                  <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-white/90 transition group-hover:text-primary">
                    Explore Now
                    <span className="material-symbols-outlined text-[18px] leading-none">arrow_forward</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

