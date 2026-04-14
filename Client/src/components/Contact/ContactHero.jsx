"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ContactHero() {
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
          src="/assets/images/services.jpg"
          alt="Contact Crescent Heights"
          fill
          priority
          sizes="100vw"
          className="object-cover brightness-[0.85]"
        />
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(30,58,95,0.92),rgba(30,58,95,0.72))]" />
      <div className="absolute inset-0 bg-[radial-gradient(900px_circle_at_20%_30%,rgba(212,168,87,0.18),transparent_55%),radial-gradient(900px_circle_at_80%_35%,rgba(74,123,167,0.25),transparent_60%)]" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#091728] via-transparent to-transparent" />

      <div className="relative mx-auto flex min-h-[56vh] max-w-6xl items-center px-6 py-12 sm:min-h-[62vh] sm:py-16">
        <div
          className={[
            "mx-auto max-w-3xl text-center text-white transition-all duration-700 ease-out",
            mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
          ].join(" ")}
        >
          <p className="text-xs font-bold tracking-[0.25em] text-primary">CONTACT US</p>
          <h1 className="mt-4 font-heading text-4xl font-semibold leading-tight sm:text-5xl">
            We’re Here to Help You Find Your Perfect Home
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-base leading-relaxed text-white/80 sm:text-lg">
            Reach out to us for project details, site visits, and booking assistance.
          </p>

          <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <a
              href="tel:+918017776957"
              className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-7 text-sm font-semibold text-primary-foreground shadow-[0_10px_24px_rgba(212,168,87,0.20)] transition hover:bg-primary-hover hover:shadow-[0_14px_34px_rgba(212,168,87,0.28)]"
            >
              <span className="material-symbols-outlined mr-2 text-[18px] leading-none">call</span>
              Call Now
            </a>
            <Link
              href="/#lead"
              className="inline-flex h-11 items-center justify-center rounded-md border border-white/20 bg-white/10 px-7 text-sm font-semibold text-white shadow-sm backdrop-blur transition hover:border-primary/60 hover:text-primary"
            >
              <span className="material-symbols-outlined mr-2 text-[18px] leading-none">calendar_month</span>
              Book Visit
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

