"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ListingAlertsHero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 10);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative overflow-hidden bg-brand-blue pt-[72px]">
      <div
        className={[
          "absolute inset-0 transition-transform duration-[2200ms] ease-out",
          mounted ? "scale-100" : "scale-105",
        ].join(" ")}
      >
        <Image
          src="/assets/images/stats-bg.jpg"
          alt="Listing alerts background"
          fill
          priority
          sizes="100vw"
          className="object-cover brightness-[0.9]"
        />
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(30,58,95,0.9),rgba(30,58,95,0.65))]" />
      <div className="absolute inset-0 bg-[radial-gradient(900px_circle_at_20%_30%,rgba(212,168,87,0.18),transparent_55%),radial-gradient(900px_circle_at_80%_35%,rgba(74,123,167,0.25),transparent_60%)]" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#091728] via-transparent to-transparent" />

      <div className="relative mx-auto flex min-h-[60vh] max-w-6xl items-center px-6 py-12 sm:min-h-[65vh] sm:py-16">
        <div
          className={[
            "mx-auto max-w-3xl text-center text-white transition-all duration-700 ease-out",
            mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
          ].join(" ")}
        >
          <p className="text-xs font-bold tracking-[0.25em] text-primary">LISTING ALERTS</p>
          <h1 className="mt-4 font-heading text-4xl font-semibold leading-tight sm:text-5xl">
            Stay Updated on the Right Opportunities
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-base leading-relaxed text-white/80 sm:text-lg">
            Get notified when properties matching your preferences become available.
          </p>

          <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <Link
              href="#alert-form"
              className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-7 text-sm font-semibold text-primary-foreground shadow-[0_10px_24px_rgba(212,168,87,0.20)] transition hover:bg-primary-hover hover:shadow-[0_14px_34px_rgba(212,168,87,0.28)]"
            >
              <span className="material-symbols-outlined mr-2 text-[18px] leading-none">notifications</span>
              Set Your Alert
            </Link>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2">
        <div
          className={[
            "flex flex-col items-center gap-2 transition-opacity duration-700",
            mounted ? "opacity-100" : "opacity-0",
          ].join(" ")}
        >
          <span className="text-[10px] font-semibold tracking-[0.2em] text-white/60">SCROLL</span>
          <span className="material-symbols-outlined animate-bounce text-[20px] text-white/70">south</span>
        </div>
      </div>
    </section>
  );
}

