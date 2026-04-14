"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={[
          "fixed inset-x-0 top-0 z-50 h-[72px] transition-colors",
          isScrolled
            ? "border-b border-white/10 bg-brand-blue/95 shadow-[0_10px_30px_rgba(0,0,0,0.18)] backdrop-blur"
            : "border-b border-transparent bg-transparent",
        ].join(" ")}
      >
        <div className="mx-auto flex h-full max-w-6xl items-center justify-between gap-3 px-6">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/assets/images/logos/CrescentHeightLogo.png"
              alt="Crescent Heights"
              width={44}
              height={44}
              priority
              className="h-10 w-10 rounded-md bg-white object-contain p-1"
            />
            <span
              className={[
                "text-sm font-semibold tracking-[0.2em] transition",
                "text-neutral-white",
              ].join(" ")}
            >
              CRESCENT HEIGHTS
            </span>
          </Link>

          <nav className="hidden items-center justify-center gap-8 text-base font-medium md:flex">
            {[
              { label: "Home", href: "/" },
              { label: "Our Story", href: "/our-story" },
            ].map((item) => (
              <Link
                key={item.label}
                className={[
                  "group relative inline-flex items-center py-2 transition",
                  "text-white/90",
                ].join(" ")}
                href={item.href}
              >
                <span className="transition group-hover:text-primary">{item.label}</span>
                <span className="absolute -bottom-0.5 left-0 h-[2px] w-0 bg-primary transition-all group-hover:w-full" />
              </Link>
            ))}

            <div className="group relative">
              <Link
                className={[
                  "group relative inline-flex items-center gap-1 py-2 transition",
                  "text-white/90",
                ].join(" ")}
                href="/properties"
              >
                <span className="transition group-hover:text-primary">Properties</span>
                <span className="material-symbols-outlined text-[18px] leading-none">expand_more</span>
                <span className="absolute -bottom-0.5 left-0 h-[2px] w-0 bg-primary transition-all group-hover:w-full" />
              </Link>

              <div className="pointer-events-none absolute left-1/2 top-full z-40 w-[520px] -translate-x-1/2 translate-y-2 opacity-0 transition-all group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100">
                <div className="mt-3 rounded-2xl border border-neutral-border bg-white p-4 shadow-[0_20px_60px_rgba(0,0,0,0.12)]">
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { title: "Residential", icon: "apartment", desc: "Homes built for everyday comfort." },
                      { title: "Commercial", icon: "storefront", desc: "Spaces for growing businesses." },
                      { title: "Greenfield", icon: "park", desc: "Future-ready sustainable development." },
                      { title: "Societies", icon: "diversity_3", desc: "Community-first planning & living." },
                    ].map((item) => (
                      <Link
                        key={item.title}
                        href="/properties"
                        className="rounded-xl border border-neutral-border bg-neutral-white p-4 transition hover:border-primary/40 hover:bg-neutral-background"
                      >
                        <div className="flex items-start gap-3">
                          <span className="material-symbols-outlined text-[22px] leading-none text-brand-softBlue">
                            {item.icon}
                          </span>
                          <div>
                            <p className="text-sm font-semibold text-neutral-darkText">{item.title}</p>
                            <p className="mt-1 text-xs text-neutral-lightText">{item.desc}</p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {[
              { label: "Categories", href: "/categories" },
              { label: "Listing Alerts", href: "/listing-alerts" },
              { label: "Contact", href: "/contact" },
            ].map((item) => (
              <Link
                key={item.label}
                className={[
                  "group relative inline-flex items-center py-2 transition",
                  "text-white/90",
                ].join(" ")}
                href={item.href}
              >
                <span className="transition group-hover:text-primary">{item.label}</span>
                <span className="absolute -bottom-0.5 left-0 h-[2px] w-0 bg-primary transition-all group-hover:w-full" />
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-2 md:flex">
            <a
              className={[
                "inline-flex h-10 w-10 items-center justify-center rounded-md border transition",
                "border-white/25 bg-white/10 text-white hover:border-primary/60 hover:text-primary",
              ].join(" ")}
              href="https://wa.me/918017776957?text=Hi%2C%20I%20want%20to%20book%20a%20site%20visit%20for%20Crescent%20Heights."
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
            >
              <span className="material-symbols-outlined text-[20px] leading-none">chat</span>
            </a>
            <Link
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 text-sm font-semibold text-primary-foreground shadow-sm transition hover:bg-primary-hover"
              href="/#lead"
            >
              <span className="material-symbols-outlined mr-2 text-[18px] leading-none">calendar_month</span>
              Book Site Visit
            </Link>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <a
              className={[
                "inline-flex h-10 w-10 items-center justify-center rounded-md border transition",
                "border-white/25 bg-white/10 text-white hover:text-primary",
              ].join(" ")}
              href="tel:+918017776957"
              aria-label="Call"
            >
              <span className="material-symbols-outlined text-[20px] leading-none">call</span>
            </a>
            <button
              type="button"
              className={[
                "inline-flex h-10 w-10 items-center justify-center rounded-md border transition",
                "border-white/25 bg-white/10 text-white hover:text-primary",
              ].join(" ")}
              onClick={() => setIsMenuOpen(true)}
              aria-label="Open menu"
            >
              <span className="material-symbols-outlined text-[22px] leading-none">menu</span>
            </button>
          </div>
        </div>
      </header>

      {isMenuOpen ? (
        <div className="fixed inset-0 z-[60] md:hidden">
          <button
            type="button"
            className="absolute inset-0 bg-black/50"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu overlay"
          />
          <aside className="absolute right-0 top-0 h-full w-[88%] max-w-sm bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b border-neutral-border px-5 py-4">
              <div className="flex items-center gap-3">
                <Image
                  src="/assets/images/logos/CrescentHeightLogo.png"
                  alt="Crescent Heights"
                  width={44}
                  height={44}
                  className="h-10 w-10 rounded-md bg-white object-contain p-1"
                />
                <span className="text-sm font-semibold tracking-[0.2em] text-neutral-darkText">
                  MENU
                </span>
              </div>
              <button
                type="button"
                className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-neutral-border bg-white text-neutral-darkText transition hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
                aria-label="Close menu"
              >
                <span className="material-symbols-outlined text-[22px] leading-none">close</span>
              </button>
            </div>

            <div className="px-5 py-5">
              <Link
                className="inline-flex h-11 w-full items-center justify-center rounded-md bg-primary text-sm font-semibold text-primary-foreground shadow-sm transition hover:bg-primary-hover"
                href="/#lead"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="material-symbols-outlined mr-2 text-[18px] leading-none">calendar_month</span>
                Book Site Visit
              </Link>

              <nav className="mt-6 space-y-1">
                {[
                  { label: "Home", icon: "home", href: "/" },
                  { label: "Our Story", icon: "menu_book", href: "/our-story" },
                  { label: "Properties", icon: "apartment", href: "/properties" },
                  { label: "Categories", icon: "category", href: "/categories" },
                  { label: "Listing Alerts", icon: "notifications", href: "/listing-alerts" },
                  { label: "Contact", icon: "mail", href: "/contact" },
                ].map((item) => (
                  <Link
                    key={item.label}
                    className="flex items-center justify-between rounded-xl px-3 py-3 text-sm font-medium text-neutral-darkText transition hover:bg-neutral-background"
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-[20px] leading-none text-brand-softBlue">
                        {item.icon}
                      </span>
                      {item.label}
                    </span>
                    <span className="material-symbols-outlined text-[18px] leading-none text-neutral-lightText">
                      chevron_right
                    </span>
                  </Link>
                ))}
              </nav>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <a
                  className="inline-flex h-11 items-center justify-center rounded-md border border-neutral-border bg-white text-sm font-semibold text-neutral-darkText transition hover:border-primary/40 hover:text-primary"
                  href="/assets/images/Cresent_Heights%20.pdf"
                  download
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="material-symbols-outlined mr-2 text-[18px] leading-none">download</span>
                  Brochure
                </a>
                <a
                  className="inline-flex h-11 items-center justify-center rounded-md bg-brand-green text-sm font-semibold text-white shadow-sm transition hover:brightness-110"
                  href="https://wa.me/918017776957?text=Hi%2C%20I%20want%20to%20book%20a%20site%20visit%20for%20Crescent%20Heights."
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="material-symbols-outlined mr-2 text-[18px] leading-none">chat</span>
                  WhatsApp
                </a>
              </div>
            </div>
          </aside>
        </div>
      ) : null}
    </>
  );
}
