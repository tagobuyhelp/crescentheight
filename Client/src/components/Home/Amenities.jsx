"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Amenities() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const amenities = [
    {
      title: "Gymnasium",
      description: "Fully equipped fitness space",
      icon: "fitness_center",
      image: "/assets/images/features-light-2.jpg",
    },
    {
      title: "Rooftop Garden",
      description: "Relax with skyline views",
      icon: "deck",
      image: "/assets/images/open-space.png",
    },
    {
      title: "Baby Pool",
      description: "Safe & fun for kids",
      icon: "pool",
      image: "/assets/images/building-image-5.jpg",
    },
    {
      title: "Community Hall",
      description: "Celebrate & connect",
      icon: "groups",
      image: "/assets/images/club.png",
    },
    {
      title: "24×7 Security",
      description: "Safe gated environment",
      icon: "shield",
      image: "/assets/images/building-image-3.jpg",
    },
    {
      title: "CCTV",
      description: "Monitored common areas",
      icon: "videocam",
      image: "/assets/images/building-image-2.jpg",
    },
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

  return (
    <section id="amenities" className="border-t border-neutral-border bg-neutral-white">
      <div
        ref={sectionRef}
        className={[
          "mx-auto max-w-6xl px-6 py-14 transition duration-700 ease-out sm:py-16",
          isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
        ].join(" ")}
      >
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.25em] text-neutral-lightText">
              AMENITIES
            </p>
            <h2 className="mt-3 font-heading text-3xl font-semibold leading-tight text-neutral-darkText sm:text-4xl">
              Spaces Designed for Everyday Living
            </h2>
            <p className="mt-5 text-pretty text-base leading-relaxed text-neutral-lightText sm:text-lg">
              From wellness to community, every space is crafted to enhance comfort,
              connection, and lifestyle.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-12 lg:items-stretch">
          <div className="lg:col-span-5">
            <div className="relative h-[360px] overflow-hidden rounded-2xl border border-neutral-border bg-neutral-background shadow-sm sm:h-[420px]">
              <Image
                src="/assets/images/services.jpg"
                alt="Rooftop garden experience"
                fill
                sizes="(min-width: 1024px) 42vw, 100vw"
                className="object-cover transition-transform duration-700 hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <p className="text-xs font-semibold tracking-[0.25em] text-white/80">
                  FEATURED AMENITY
                </p>
                <h3 className="mt-2 text-xl font-semibold text-white">
                  Rooftop Garden Experience
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/80">
                  Enjoy peaceful evenings with city skyline views.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 min-w-0">
            <div className="hidden grid-cols-3 gap-4 md:grid">
              {amenities.map((item) => (
                <div
                  key={item.title}
                  className="group overflow-hidden rounded-2xl border border-neutral-border bg-white shadow-sm transition hover:shadow-md"
                >
                  <div className="relative h-32 overflow-hidden bg-neutral-background">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(min-width: 1024px) 25vw, 50vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
                  </div>
                  <div className="p-4">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[20px] leading-none text-brand-softBlue transition group-hover:text-primary">
                        {item.icon}
                      </span>
                      <p className="text-sm font-semibold text-neutral-darkText">
                        {item.title}
                      </p>
                    </div>
                    <p className="mt-2 text-sm text-neutral-lightText">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="md:hidden">
              <div className="flex max-w-full gap-4 overflow-x-auto overscroll-x-contain pb-2">
                {amenities.map((item) => (
                  <div
                    key={item.title}
                    className="group w-[78vw] max-w-[280px] flex-none overflow-hidden rounded-2xl border border-neutral-border bg-white shadow-sm"
                  >
                    <div className="relative h-36 overflow-hidden bg-neutral-background">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="(max-width: 768px) 78vw, 25vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
                    </div>
                    <div className="p-4">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-[20px] leading-none text-brand-softBlue">
                          {item.icon}
                        </span>
                        <p className="text-sm font-semibold text-neutral-darkText">
                          {item.title}
                        </p>
                      </div>
                      <p className="mt-2 text-sm text-neutral-lightText">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 rounded-2xl border border-neutral-border bg-neutral-background p-6 shadow-sm sm:p-8">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <h3 className="text-lg font-semibold text-neutral-darkText">
                Experience the Lifestyle Yourself
              </h3>
              <p className="mt-1 text-sm text-neutral-lightText">
                Visit the project to feel the spaces, comfort, and community.
              </p>
            </div>
            <a
              className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-sm transition hover:bg-primary-hover"
              href="#lead"
            >
              <span className="material-symbols-outlined mr-2 text-[18px] leading-none">
                calendar_month
              </span>
              Book Site Visit
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
