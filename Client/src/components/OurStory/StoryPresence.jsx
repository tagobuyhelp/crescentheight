"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function StoryPresence() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

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

  const services = [
    {
      title: "Residential",
      description: "Designed for comfortable, community-focused living with modern amenities.",
      image: "/assets/images/services.jpg",
      href: "/#homes",
    },
    {
      title: "Commercial",
      description: "Functional workspaces built for business growth and scalability.",
      image: "/assets/images/building-image-6.jpg",
      href: "/#homes",
    },
    {
      title: "Greenfield Development",
      description: "End-to-end planning on undeveloped land with future-ready infrastructure.",
      image: "/assets/images/open-space.png",
      href: "/#invest",
    },
    {
      title: "Societies",
      description: "Well-structured community living with shared spaces and long-term management.",
      image: "/assets/images/club.png",
      href: "/#invest",
    },
  ];

  return (
    <section id="presence" className="border-t border-neutral-border bg-neutral-background">
      <div
        ref={sectionRef}
        className={[
          "mx-auto max-w-6xl px-6 py-14 transition duration-700 ease-out sm:py-16",
          isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
        ].join(" ")}
      >
        <div className="text-center">
          <p className="text-xs font-bold tracking-[0.25em] text-primary">OUR PRESENCE</p>
          <h2 className="mt-3 font-heading text-3xl font-semibold leading-tight text-neutral-darkText sm:text-4xl">
            Expanding Across Key Real Estate Segments
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-pretty text-base leading-relaxed text-neutral-lightText sm:text-lg">
            We operate across residential, commercial, and large-scale developments, delivering
            projects that meet evolving urban demands.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div
              key={s.title}
              className="group overflow-hidden rounded-xl border border-neutral-border bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="relative h-44 overflow-hidden bg-neutral-background">
                <Image
                  src={s.image}
                  alt={s.title}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-[1500ms] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent opacity-80 transition group-hover:opacity-90" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                  <p className="text-xs font-semibold tracking-[0.2em] text-white/85">{s.title}</p>
                  <span className="material-symbols-outlined text-[18px] leading-none text-white/80 transition group-hover:text-primary">
                    arrow_forward
                  </span>
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-base font-semibold text-neutral-darkText">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-lightText">{s.description}</p>

                <div className="mt-4">
                  <Link
                    href={s.href}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-brand-softBlue transition group-hover:text-primary"
                  >
                    Learn More
                    <span className="material-symbols-outlined text-[18px] leading-none">arrow_forward</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 rounded-2xl border border-neutral-border bg-white p-6 shadow-sm sm:flex-row sm:p-8">
          <div>
            <p className="text-xs font-bold tracking-[0.25em] text-neutral-lightText">EXPLORE</p>
            <h3 className="mt-2 text-lg font-semibold text-neutral-darkText">
              Explore Our Projects
            </h3>
            <p className="mt-1 text-sm text-neutral-lightText">
              View current availability and get the latest updates.
            </p>
          </div>
          <Link
            href="/#homes"
            className="inline-flex h-11 w-full items-center justify-center rounded-md bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-sm transition hover:bg-primary-hover sm:w-auto"
          >
            View Properties
          </Link>
        </div>
      </div>
    </section>
  );
}

