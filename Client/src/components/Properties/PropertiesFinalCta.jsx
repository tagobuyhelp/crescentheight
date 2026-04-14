"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function PropertiesFinalCta() {
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
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const whatsappHref =
    "https://wa.me/918017776957?text=Hi%2C%20I%20want%20to%20discuss%20available%20units%20at%20Crescent%20Heights.";

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
            src="/assets/images/cta-bg.jpg"
            alt="Talk to our property experts"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(30,58,95,0.92),rgba(30,58,95,0.72),rgba(30,58,95,0.55))]" />
        <div className="absolute inset-0 bg-[radial-gradient(900px_circle_at_25%_35%,rgba(212,168,87,0.22),transparent_55%),radial-gradient(900px_circle_at_80%_45%,rgba(74,123,167,0.25),transparent_60%)]" />

        <div className="relative mx-auto max-w-6xl px-6 py-14 sm:py-18">
          <div
            className={[
              "grid gap-8 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur md:grid-cols-12 md:items-center md:p-10",
              "transition duration-700 ease-out",
              isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
            ].join(" ")}
          >
            <div className="md:col-span-7">
              <h2 className="font-heading text-3xl font-semibold leading-tight text-white sm:text-4xl">
                Not Sure Which Home is Right for You?
              </h2>
              <p className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-white/80 sm:text-lg">
                Let our team help you choose the perfect home based on your needs, budget, and lifestyle.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  "No pressure consultation",
                  "Expert guidance",
                  "Transparent pricing",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3"
                  >
                    <span className="material-symbols-outlined text-[20px] leading-none text-primary">
                      check_circle
                    </span>
                    <span className="text-sm font-semibold text-white/85">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="md:col-span-5">
              <div className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur">
                <div className="grid gap-3">
                  <a
                    href="tel:+918017776957"
                    className="inline-flex h-11 w-full items-center justify-center rounded-md bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-[0_10px_24px_rgba(212,168,87,0.20)] transition hover:bg-primary-hover"
                  >
                    <span className="material-symbols-outlined mr-2 text-[18px] leading-none">support_agent</span>
                    Talk to Expert
                  </a>

                  <Link
                    href="/#lead"
                    className="inline-flex h-11 w-full items-center justify-center rounded-md border border-white/25 bg-white/10 px-6 text-sm font-semibold text-white shadow-sm backdrop-blur transition hover:border-primary/60 hover:text-primary"
                  >
                    <span className="material-symbols-outlined mr-2 text-[18px] leading-none">calendar_month</span>
                    Book Site Visit
                  </Link>

                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-11 w-full items-center justify-center rounded-md border border-white/25 bg-white/10 px-6 text-sm font-semibold text-white shadow-sm backdrop-blur transition hover:border-brand-green/70 hover:text-brand-green"
                  >
                    <span className="material-symbols-outlined mr-2 text-[18px] leading-none">chat</span>
                    WhatsApp Now
                  </a>
                </div>

                <div className="mt-5 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
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
          </div>
        </div>
      </div>
    </section>
  );
}

