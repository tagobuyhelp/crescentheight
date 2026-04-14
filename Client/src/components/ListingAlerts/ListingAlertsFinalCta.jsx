"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function ListingAlertsFinalCta() {
  const sectionRef = useRef(null);
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 10);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        setIsVisible(true);
        observer.disconnect();
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const whatsappHref =
    "https://wa.me/918017776957?text=Hi%2C%20I%20want%20listing%20alerts%20for%20Crescent%20Heights.";

  return (
    <section className="border-t border-neutral-border bg-neutral-white">
      <div ref={sectionRef} className="relative overflow-hidden">
        <div
          className={[
            "absolute inset-0 transition-transform duration-[2200ms] ease-out",
            mounted ? "scale-100" : "scale-105",
          ].join(" ")}
        >
          <Image
            src="/assets/images/stats-bg.jpg"
            alt="Premium listing alerts background"
            fill
            sizes="100vw"
            className="object-cover brightness-[0.85]"
          />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(9,23,40,0.92),rgba(30,58,95,0.78),rgba(9,23,40,0.70))]" />
        <div className="absolute inset-0 bg-[radial-gradient(900px_circle_at_25%_35%,rgba(212,168,87,0.22),transparent_55%),radial-gradient(900px_circle_at_80%_45%,rgba(74,123,167,0.25),transparent_60%)]" />

        <div className="relative mx-auto max-w-6xl px-6 py-14 sm:py-18">
          <div
            className={[
              "mx-auto max-w-3xl rounded-3xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur sm:p-10",
              "transition duration-700 ease-out",
              isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
            ].join(" ")}
          >
            <h2 className="font-heading text-3xl font-semibold leading-tight text-white sm:text-4xl">
              Don’t Miss the Right Property Opportunity
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-pretty text-base leading-relaxed text-white/80 sm:text-lg">
              Set your preferences today and get notified instantly when matching properties become
              available.
            </p>

            <p className="mt-5 text-sm font-semibold text-white/85">
              New listings get booked fast — stay ahead.
            </p>

            <div className="mt-7 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
              <Link
                href="#alert-form"
                className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-sm font-semibold text-primary-foreground shadow-[0_12px_30px_rgba(212,168,87,0.22)] transition hover:bg-primary-hover hover:shadow-[0_16px_40px_rgba(212,168,87,0.30)]"
              >
                <span className="material-symbols-outlined mr-2 text-[18px] leading-none">notifications</span>
                Create My Alert Now
              </Link>
            </div>

            <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 px-5 py-4">
              <div className="flex flex-col items-center justify-center gap-3 text-sm font-semibold text-white/85 sm:flex-row sm:gap-6">
                <a
                  href="tel:+918017776957"
                  className="inline-flex items-center gap-2 transition hover:text-primary"
                >
                  <span className="material-symbols-outlined text-[18px] leading-none">call</span>
                  Call
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
                <a href="#alert-form" className="inline-flex items-center gap-2 transition hover:text-primary">
                  <span className="material-symbols-outlined text-[18px] leading-none">send</span>
                  Enquire
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

