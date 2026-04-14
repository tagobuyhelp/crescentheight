"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Counter from "@/components/Shared/Counter";

export default function StoryAbout() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { root: null, threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const stats = [
    { label: "Completed / Ongoing", value: 5, suffix: "+", icon: "apartment" },
    { label: "Experience in Dev.", value: 10, suffix: "+ Yrs", icon: "engineering" },
    { label: "Happy Residents", value: 500, suffix: "+", icon: "diversity_3" },
    { label: "Prime Locations", value: 12, suffix: "+", icon: "location_city" },
  ];

  return (
    <section className="bg-neutral-white py-16 sm:py-24">
      <div
        ref={sectionRef}
        className={[
          "mx-auto max-w-6xl px-6 transition duration-1000 ease-out",
          isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
        ].join(" ")}
      >
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            <p className="text-xs font-bold tracking-[0.25em] text-primary">
              ABOUT US
            </p>
            <h2 className="mt-4 font-heading text-3xl font-semibold leading-tight text-neutral-darkText sm:text-4xl lg:text-5xl">
              A Purpose-Driven Real Estate Developer
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-neutral-lightText">
              <p>
                Hospice Property Pvt. Ltd. is a real estate development company focused on creating thoughtfully planned spaces that balance functionality, sustainability, and long-term value.
              </p>
              <p>
                With expertise across residential, commercial, and greenfield developments, the company delivers projects that respond to modern urban needs while maintaining strong construction standards and transparent practices.
              </p>
            </div>

            {/* Highlight Strip */}
            <div className="mt-8 border-l-4 border-primary bg-neutral-background p-5">
              <p className="font-heading text-lg italic text-brand-blue">
                “Building with responsibility, designing with purpose, and delivering with integrity.”
              </p>
            </div>
          </div>

          {/* Right Image */}
          <div className="order-1 lg:order-2">
            <div className="group relative h-[300px] overflow-hidden rounded-2xl shadow-xl sm:h-[450px]">
              <Image
                src="/assets/images/building-image-4.jpg"
                alt="Architectural planning and development"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover transition-transform duration-[1500ms] group-hover:scale-105"
              />
              {/* Subtle gradient to anchor the image visually */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </div>
        </div>

        {/* Trust Metrics Grid */}
        <div className="mt-16 grid grid-cols-2 gap-4 border-t border-neutral-border pt-12 lg:grid-cols-4 lg:gap-8">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center text-center sm:items-start sm:text-left"
            >
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-softBlue/10 text-brand-softBlue">
                <span className="material-symbols-outlined text-[24px]">
                  {stat.icon}
                </span>
              </div>
              <p className="font-sans text-3xl font-bold text-brand-blue tracking-tight sm:text-4xl">
                <Counter end={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-2 text-sm font-semibold tracking-[0.1em] text-neutral-lightText uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
