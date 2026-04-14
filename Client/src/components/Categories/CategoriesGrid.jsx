"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const categories = [
  {
    title: "1 BHK",
    desc: "Compact & efficient homes for individuals or small families.",
    href: "/properties?bhk=1",
    image: "/assets/images/plans1.jpg",
    count: "1 Property Available",
    icon: "home",
    tone: "from-black/65",
  },
  {
    title: "2 BHK",
    desc: "Balanced space and comfort — ideal for growing families.",
    href: "/properties?bhk=2",
    image: "/assets/images/plans2.jpg",
    badge: "Most Popular",
    count: "6 Properties Available",
    icon: "apartment",
    featured: true,
    tone: "from-black/70",
  },
  {
    title: "3 BHK",
    desc: "Spacious premium living designed for larger families.",
    href: "/properties?bhk=3",
    image: "/assets/images/building-image-8.jpg",
    count: "5 Properties Available",
    icon: "location_city",
    tone: "from-black/65",
  },
  {
    title: "Commercial",
    desc: "Smart business spaces designed for productivity.",
    href: "/properties",
    image: "/assets/images/services.jpg",
    count: "Explore Options",
    icon: "storefront",
    tone: "from-black/65",
  },
];

export default function CategoriesGrid() {
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
    <section ref={rootRef} className="border-t border-neutral-border bg-neutral-background py-14 sm:py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold tracking-[0.25em] text-primary">BROWSE BY CATEGORY</p>
          <h2 className="mt-4 font-heading text-3xl font-semibold leading-tight text-neutral-darkText sm:text-4xl">
            Choose What Fits Your Lifestyle
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-neutral-lightText sm:text-base">
            Tap a category to jump straight into the right listings.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((c, idx) => (
            <Link
              key={c.title}
              href={c.href}
              className={[
                "group relative isolate overflow-hidden rounded-2xl border bg-white shadow-sm transition",
                "hover:-translate-y-1 hover:shadow-md",
                c.featured
                  ? "border-primary/30 ring-1 ring-primary/25"
                  : "border-neutral-border",
                inView ? "animate-[fadeUp_520ms_ease-out_both]" : "translate-y-3 opacity-0",
              ].join(" ")}
              style={inView ? { animationDelay: `${Math.min(idx * 90, 270)}ms` } : undefined}
              aria-label={`View ${c.title} properties`}
            >
              <div className="absolute inset-0 -z-10">
                <Image
                  src={c.image}
                  alt={`${c.title} category`}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-[1.06]"
                />
              </div>

              <div
                className={[
                  "absolute inset-0 -z-10 bg-gradient-to-t",
                  c.tone,
                  "via-black/30 to-black/10 transition-opacity duration-300",
                  "group-hover:opacity-95",
                ].join(" ")}
              />

              <div className="flex min-h-[240px] flex-col justify-between p-5 text-white">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[22px] leading-none text-primary">
                      {c.icon}
                    </span>
                    <p className="text-xs font-semibold tracking-[0.18em] text-white/80">CATEGORY</p>
                  </div>
                  {c.badge ? (
                    <span className="inline-flex items-center gap-1 rounded-full border border-primary/35 bg-primary/15 px-3 py-1 text-[11px] font-semibold tracking-[0.16em] text-primary">
                      <span className="material-symbols-outlined text-[16px] leading-none">star</span>
                      {c.badge.toUpperCase()}
                    </span>
                  ) : null}
                </div>

                <div>
                  <h3 className="font-heading text-2xl font-semibold leading-tight">{c.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/85">{c.desc}</p>
                  <p className="mt-3 text-xs font-semibold tracking-[0.14em] text-white/70">{c.count}</p>

                  <div className="mt-5 inline-flex h-10 items-center justify-center rounded-md bg-white/10 px-4 text-sm font-semibold text-white backdrop-blur transition group-hover:bg-primary group-hover:text-primary-foreground">
                    <span className="material-symbols-outlined mr-2 text-[18px] leading-none">arrow_forward</span>
                    View Properties
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

