"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function About() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const images = [
    { src: "/assets/images/features-light-1.jpg", alt: "Lifestyle at Crescent Heights" },
    { src: "/assets/images/features-light-2.jpg", alt: "Bright, modern living spaces" },
    { src: "/assets/images/features-light-3.jpg", alt: "Amenities designed for comfort" },
    { src: "/assets/images/building-image-6.jpg", alt: "Crescent Heights exterior view" },
  ];

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { root: null, threshold: 0.15 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    const id = window.setInterval(() => {
      setActiveImageIndex((i) => (i + 1) % images.length);
    }, 4500);
    return () => window.clearInterval(id);
  }, [isVisible, images.length]);

  return (
    <section id="about" className="border-t border-neutral-border bg-neutral-background">
      <div
        ref={sectionRef}
        className={[
          "mx-auto max-w-6xl px-6 py-14 transition duration-700 ease-out sm:py-16",
          isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
        ].join(" ")}
      >
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-6">
            <p className="text-xs font-semibold tracking-[0.25em] text-neutral-lightText">
              ABOUT THE PROJECT
            </p>
            <h2 className="mt-3 font-heading text-3xl font-semibold leading-tight text-neutral-darkText sm:text-4xl">
              A Home Designed for Real Living
            </h2>
            <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-neutral-lightText sm:text-lg">
              Crescent Heights blends modern architecture with practical layouts, offering
              homes built for comfort, community, and long-term value.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {[
                { icon: "location_on", label: "Location", value: "Kolkata" },
                { icon: "domain", label: "Developer", value: "Hospice Property Pvt. Ltd." },
                { icon: "calendar_month", label: "Possession", value: "2027" },
                { icon: "payments", label: "Price", value: "₹4,200/sq.ft" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border border-neutral-border bg-white p-4 shadow-sm"
                >
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[20px] leading-none text-brand-softBlue">
                      {item.icon}
                    </span>
                    <p className="text-[10px] font-semibold tracking-[0.12em] text-neutral-lightText">
                      {item.label}
                    </p>
                  </div>
                  <p className="mt-2 text-[14px] font-semibold text-neutral-darkText">{item.value}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-neutral-border bg-white p-6 shadow-sm">
              <p className="text-xs font-semibold tracking-[0.25em] text-neutral-lightText">
                HIGHLIGHTS
              </p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {[
                  "Spacious 1, 2 & 3 BHK Apartments",
                  "Lifestyle Amenities",
                  "Secure Gated Community",
                  "Competitive Pricing",
                ].map((text) => (
                  <div key={text} className="flex items-start gap-3">
                    <span className="material-symbols-outlined mt-0.5 text-[20px] leading-none text-brand-green">
                      check_circle
                    </span>
                    <p className="text-sm text-neutral-darkText">{text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                className="inline-flex h-11 items-center justify-center rounded-md bg-secondary px-6 text-sm font-semibold text-secondary-foreground shadow-sm transition hover:bg-secondary-hover"
                href="#homes"
              >
                <span className="material-symbols-outlined mr-2 text-[18px] leading-none">
                  holiday_village
                </span>
                Explore Properties
              </a>
              <a
                className="inline-flex h-11 items-center justify-center rounded-md border border-neutral-border bg-white px-6 text-sm font-semibold text-neutral-darkText shadow-sm transition hover:border-primary/40 hover:text-primary"
                href="#lead"
              >
                <span className="material-symbols-outlined mr-2 text-[18px] leading-none">
                  calendar_month
                </span>
                Schedule Visit
              </a>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="overflow-hidden rounded-2xl border border-neutral-border bg-white shadow-sm">
              <div className="relative h-[320px] w-full sm:h-[420px]">
                {images.map((img, idx) => (
                  <Image
                    key={img.src}
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className={[
                      "object-cover transition-opacity duration-700",
                      idx === activeImageIndex ? "opacity-100" : "opacity-0",
                    ].join(" ")}
                    priority={idx === 0}
                  />
                ))}

                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />

                <div className="absolute bottom-4 left-4 rounded-full border border-white/20 bg-white/10 px-3 py-2 text-xs font-semibold tracking-[0.2em] text-white backdrop-blur">
                  PROJECT GLIMPSE
                </div>

                <div className="absolute bottom-4 right-4 flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-2 backdrop-blur">
                  {images.map((img, idx) => (
                    <button
                      key={img.src}
                      type="button"
                      aria-label={`View image ${idx + 1}`}
                      className={[
                        "h-2 w-2 rounded-full transition",
                        idx === activeImageIndex ? "bg-primary" : "bg-white/50 hover:bg-white/80",
                      ].join(" ")}
                      onClick={() => setActiveImageIndex(idx)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
