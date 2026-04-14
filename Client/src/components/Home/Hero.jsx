"use client";

import Image from "next/image";
import { useState } from "react";
import Header from "@/components/Shared/Header";
import Counter from "@/components/Shared/Counter";

export default function Hero() {
  return (
    <>
      <Header />

      <section className="relative overflow-hidden bg-brand-blue pt-[72px]">
        <div className="absolute inset-0">
          <Image
            src="/assets/images/building-image-8.jpg"
            alt="Crescent Heights"
            fill
            priority
            sizes="100vw"
            className="object-cover brightness-[0.9]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(30,58,95,0.85)_0%,rgba(30,58,95,0.65)_40%,rgba(30,58,95,0.2)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(900px_circle_at_25%_20%,rgba(74,123,167,0.35),transparent_55%),radial-gradient(900px_circle_at_80%_30%,rgba(212,168,87,0.18),transparent_60%)]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#091728] via-transparent to-transparent" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 pb-10 pt-8 sm:px-6 sm:pb-12 sm:pt-12">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
            <div className="text-center lg:col-span-7 lg:text-left">
              <p className="text-[10px] font-semibold tracking-[0.25em] text-white/70 sm:text-xs">
                <span className="text-white/90">CRESCENT</span>{" "}
                <span className="text-primary">HEIGHTS</span>
                <span className="mx-2 text-white/25">•</span>
                <span className="text-white/70">KOLKATA</span>
              </p>
              <h1 className="mt-3 font-heading text-balance text-3xl font-semibold leading-tight text-white sm:mt-4 sm:text-5xl lg:text-6xl">
                Experience Elevated Urban Living
              </h1>
              <p className="mt-4 max-w-2xl text-pretty text-sm leading-relaxed text-white/80 sm:mt-5 sm:text-base lg:text-lg">
                Thoughtfully designed 2 &amp; 3 BHK residences in Kolkata, built for comfort,
                community, and long-term value.
              </p>
              <p className="mt-3 text-xs font-semibold tracking-[0.12em] text-white/70 sm:mt-4 sm:text-sm">
                Starting ₹4,200/sq.ft <span className="mx-2 text-white/30">|</span> Possession 2027
              </p>

              <div className="mt-6 flex flex-col items-stretch justify-center gap-3 sm:mt-8 sm:flex-row sm:items-center sm:justify-start">
                <a
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-5 text-sm font-semibold text-primary-foreground shadow-sm transition hover:bg-primary-hover sm:h-11 sm:px-6"
                  href="#lead"
                >
                  <span className="material-symbols-outlined mr-2 text-[18px] leading-none">calendar_month</span>
                  Book Site Visit
                </a>
                <a
                  className="inline-flex h-10 items-center justify-center rounded-md border border-white/25 bg-white/10 px-5 text-sm font-semibold text-white shadow-sm backdrop-blur transition hover:border-brand-green/70 hover:text-brand-green sm:h-11 sm:px-6"
                  href="/assets/images/Cresent_Heights%20.pdf"
                  download
                >
                  <span className="material-symbols-outlined mr-2 text-[18px] leading-none">download</span>
                  Download Brochure
                </a>
              </div>

              {/* Trust Metrics */}
              <div className="mt-8 grid grid-cols-2 gap-4 border-t border-white/10 pt-6 sm:mt-10 sm:grid-cols-4 sm:gap-6 sm:pt-8">
                {[
                  { value: 5, suffix: "+", label: "Completed / Ongoing", icon: "apartment" },
                  { value: 10, suffix: "+ Yrs", label: "Experience in Dev.", icon: "engineering" },
                  { value: 500, suffix: "+", label: "Happy Residents", icon: "diversity_3" },
                  { value: 12, suffix: "+", label: "Prime Locations", icon: "location_city" },
                ].map((stat) => (
                  <div key={stat.label} className="flex flex-col items-center text-center lg:items-start lg:text-left">
                    <span className="material-symbols-outlined mb-1 text-[20px] text-primary sm:mb-2 sm:text-[24px]">
                      {stat.icon}
                    </span>
                    <p className="font-sans text-xl font-bold tracking-tight text-white sm:text-2xl">
                      <Counter end={stat.value} suffix={stat.suffix} />
                    </p>
                    <p className="mt-1 text-[9px] font-semibold tracking-[0.1em] text-white/60 uppercase sm:text-[10px]">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-white p-5 shadow-xl sm:p-6">
                <p className="text-[10px] font-semibold tracking-[0.25em] text-neutral-lightText sm:text-xs">
                  QUICK INFO
                </p>
                <h2 className="mt-1 text-base font-semibold text-neutral-darkText sm:mt-2 sm:text-lg">
                  Premium, practical living
                </h2>
                <ul className="mt-4 space-y-2 text-xs text-neutral-darkText sm:mt-5 sm:space-y-3 sm:text-sm">
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined mt-0.5 text-[20px] leading-none text-brand-green">
                      check_circle
                    </span>
                    2 BHK &amp; 3 BHK Available
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined mt-0.5 text-[20px] leading-none text-brand-green">
                      check_circle
                    </span>
                    Limited Units Left
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined mt-0.5 text-[20px] leading-none text-brand-green">
                      check_circle
                    </span>
                    Prime Kolkata Location
                  </li>
                </ul>
                <a
                  className="mt-5 inline-flex h-10 w-full items-center justify-center rounded-md bg-secondary px-5 text-sm font-semibold text-secondary-foreground shadow-sm transition hover:bg-secondary-hover sm:mt-6 sm:h-11 sm:px-6"
                  href="#lead"
                >
                  <span className="material-symbols-outlined mr-2 text-[18px] leading-none">call</span>
                  Enquire Now
                </a>
              </div>
            </div>
          </div>

          
        </div>

        <a
          className="fixed bottom-24 right-5 z-20 inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand-green text-white shadow-lg transition hover:brightness-110 sm:bottom-6"
          href="https://wa.me/918017776957?text=Hi%2C%20I%20want%20to%20book%20a%20site%20visit%20for%20Crescent%20Heights."
          target="_blank"
          rel="noreferrer"
          aria-label="Chat on WhatsApp"
        >
          <span className="material-symbols-outlined text-[22px] leading-none">chat</span>
        </a>
      </section>
    </>
  );
}
