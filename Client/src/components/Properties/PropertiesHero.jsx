"use client";

import Image from "next/image";
import Link from "next/link";

export default function PropertiesHero({ mounted }) {
  return (
    <section className="relative overflow-hidden bg-brand-blue pt-[72px]">
      <div
        className={[
          "absolute inset-0 transition-transform duration-[2200ms] ease-out",
          mounted ? "scale-100" : "scale-105",
        ].join(" ")}
      >
        <Image
          src="/assets/images/property1.jpg"
          alt="Crescent Heights available properties"
          fill
          priority
          sizes="100vw"
          className="object-cover brightness-[0.9]"
        />
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(30,58,95,0.85),rgba(30,58,95,0.6))]" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#091728] via-transparent to-transparent" />

      <div className="relative mx-auto flex w-full min-h-[60vh] max-w-6xl items-center px-6 py-12 sm:min-h-[56vh] sm:py-14">
        <div
          className={[
            "mx-auto w-full max-w-4xl text-center text-white transition-all duration-700 ease-out sm:mx-0 sm:text-left",
            mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
          ].join(" ")}
        >
          <nav className="mb-6 flex items-center justify-center gap-2 text-[11px] font-semibold tracking-[0.14em] text-white/70 sm:justify-start">
            <Link href="/" className="transition hover:text-white">
              Home
            </Link>
            <span className="text-white/25">/</span>
            <span className="text-white/90">Properties</span>
          </nav>

          <p className="text-xs font-bold tracking-[0.25em] text-primary">AVAILABLE PROPERTIES</p>
          <h1 className="mt-4 font-heading text-4xl font-semibold leading-tight sm:text-5xl">
            Explore Available Residences
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-base leading-relaxed text-white/80 sm:mx-0 sm:text-lg">
            Discover thoughtfully designed 2 &amp; 3 BHK homes crafted for modern living in Kolkata.
          </p>
          <p className="mt-4 text-sm font-semibold tracking-[0.12em] text-white/70">
            Starting ₹4,200/sq.ft <span className="mx-2 text-white/25">•</span> Possession 2027
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:justify-start">
            <Link
              href="/properties?bhk=2#listings"
              className="inline-flex h-10 items-center justify-center rounded-full border border-white/25 bg-white/10 px-4 text-xs font-semibold tracking-[0.14em] text-white backdrop-blur transition hover:border-primary/60 hover:text-primary"
            >
              2 BHK
            </Link>
            <Link
              href="/properties?bhk=3#listings"
              className="inline-flex h-10 items-center justify-center rounded-full border border-white/25 bg-white/10 px-4 text-xs font-semibold tracking-[0.14em] text-white backdrop-blur transition hover:border-primary/60 hover:text-primary"
            >
              3 BHK
            </Link>
            <Link
              href="/properties?status=available#listings"
              className="inline-flex h-10 items-center justify-center rounded-full border border-white/25 bg-white/10 px-4 text-xs font-semibold tracking-[0.14em] text-white backdrop-blur transition hover:border-primary/60 hover:text-primary"
            >
              Available Now
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
          <span className="material-symbols-outlined animate-bounce text-[20px] text-white/70">
            south
          </span>
        </div>
      </div>
    </section>
  );
}
