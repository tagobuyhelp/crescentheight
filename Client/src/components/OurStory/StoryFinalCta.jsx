"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function StoryFinalCta() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { root: null, threshold: 0.2 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const whatsappHref =
    "https://wa.me/918017776957?text=Hi%2C%20I%20want%20to%20book%20a%20site%20visit%20for%20Crescent%20Heights.";

  return (
    <section id="final-cta" className="border-t border-white/10 bg-brand-blue">
      <div ref={sectionRef} className="relative overflow-hidden">
        <div
          className={[
            "absolute inset-0 transition-transform duration-[2200ms] ease-out",
            isVisible ? "scale-100" : "scale-105",
          ].join(" ")}
        >
          <Image
            src="/assets/images/banner-1.jpg"
            alt="Crescent Heights at golden hour"
            fill
            sizes="100vw"
            className="object-cover"
            priority={false}
          />
        </div>

        <div className="absolute inset-0 bg-[linear-gradient(rgba(30,58,95,0.85),rgba(30,58,95,0.85))]" />
        <div className="absolute inset-0 bg-[radial-gradient(900px_circle_at_20%_30%,rgba(212,168,87,0.18),transparent_55%),radial-gradient(900px_circle_at_80%_40%,rgba(74,123,167,0.25),transparent_60%)]" />

        <div
          className={[
            "relative mx-auto max-w-6xl px-6 py-14 text-center text-white transition-all duration-700 ease-out sm:py-20",
            isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
          ].join(" ")}
        >
          <h2 className="font-heading text-3xl font-semibold leading-tight sm:text-4xl">
            Ready to Find Your Future Home?
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-pretty text-base leading-relaxed text-white/80 sm:text-lg">
            Explore Crescent Heights and take the next step toward comfortable, secure, and modern
            living in Kolkata.
          </p>

          <p className="mt-5 text-sm font-semibold tracking-[0.12em] text-white/70">
            Limited units available in 2 &amp; 3 BHK
          </p>

          <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <Link
              href="/#lead"
              className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-7 text-sm font-semibold text-primary-foreground shadow-[0_10px_24px_rgba(212,168,87,0.20)] transition hover:bg-primary-hover hover:shadow-[0_14px_34px_rgba(212,168,87,0.28)]"
            >
              <span className="material-symbols-outlined mr-2 text-[18px] leading-none">
                calendar_month
              </span>
              Book Site Visit
            </Link>
            <Link
              href="/#lead"
              className="inline-flex h-11 items-center justify-center rounded-md border border-white/35 bg-white/10 px-7 text-sm font-semibold text-white backdrop-blur transition hover:border-white/60 hover:bg-white/15"
            >
              <span className="material-symbols-outlined mr-2 text-[18px] leading-none">mail</span>
              Contact Us
            </Link>
          </div>

          <div className="mx-auto mt-10 w-full max-w-3xl rounded-2xl border border-white/15 bg-white/5 px-5 py-4 backdrop-blur">
            <div className="flex flex-col items-center justify-center gap-3 text-sm font-semibold text-white/85 sm:flex-row sm:gap-6">
              <a
                href="tel:+918017776957"
                className="inline-flex items-center gap-2 transition hover:text-primary"
              >
                <span className="material-symbols-outlined text-[18px] leading-none">call</span>
                Call Now
              </a>
              <span className="hidden text-white/25 sm:inline">✦</span>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 transition hover:text-primary"
              >
                <span className="material-symbols-outlined text-[18px] leading-none">chat</span>
                WhatsApp
              </a>
              <span className="hidden text-white/25 sm:inline">✦</span>
              <Link
                href="/#lead"
                className="inline-flex items-center gap-2 transition hover:text-primary"
              >
                <span className="material-symbols-outlined text-[18px] leading-none">send</span>
                Enquire
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

