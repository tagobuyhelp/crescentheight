"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function StoryHero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Wrap in requestAnimationFrame or setTimeout to avoid synchronous setState warning
    const timer = setTimeout(() => {
      setMounted(true);
    }, 10);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative flex h-[60vh] items-center justify-center overflow-hidden sm:h-[70vh]">
      {/* Background Image with slight zoom animation */}
      <div
        className={[
          "absolute inset-0 transition-transform duration-[2000ms] ease-out",
          mounted ? "scale-100" : "scale-105",
        ].join(" ")}
      >
        <Image
          src="/assets/images/building-image-2.jpg"
          alt="Crescent Heights corporate skyline"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* Dark Overlay for Authority */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/90 to-brand-blue/70" />

      {/* Content */}
      <div
        className={[
          "relative z-10 flex max-w-4xl flex-col items-center px-6 text-center text-white transition-all duration-1000 ease-out",
          mounted ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
        ].join(" ")}
      >
        {/* Breadcrumb */}
        <nav className="mb-6 flex items-center gap-2 text-xs font-medium tracking-wider text-white/60">
          <Link href="/" className="transition hover:text-white">
            Home
          </Link>
          <span>/</span>
          <span className="text-white/90">Our Story</span>
        </nav>

        {/* Label */}
        <p className="mb-4 text-xs font-bold tracking-[0.25em] text-primary">
          OUR STORY
        </p>

        {/* Heading */}
        <h1 className="mb-6 font-heading text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl">
          Building Spaces with Purpose and Integrity
        </h1>

        {/* Subtext */}
        <p className="max-w-2xl text-pretty text-base leading-relaxed text-white/80 sm:text-lg">
          Hospice Property Pvt. Ltd. is committed to creating thoughtfully designed developments that balance quality, functionality, and long-term value.
        </p>
      </div>

      {/* Scroll Indicator */}
      <div
        className={[
          "absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 transition-opacity duration-1000 delay-500",
          mounted ? "opacity-100" : "opacity-0",
        ].join(" ")}
      >
        <span className="text-[10px] font-semibold tracking-[0.2em] text-white/50">
          SCROLL
        </span>
        <span className="material-symbols-outlined animate-bounce text-[20px] text-white/70">
          south
        </span>
      </div>
    </section>
  );
}
