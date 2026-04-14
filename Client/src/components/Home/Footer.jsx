"use client";

import Image from "next/image";
import { useState } from "react";

function FooterAccordion({ title, children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-xl border border-white/10 bg-white/5">
      <button
        type="button"
        className="flex w-full items-center justify-between px-4 py-4 text-left"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <span className="text-sm font-semibold tracking-[0.14em] text-white/90">{title}</span>
        <span className="material-symbols-outlined text-[20px] leading-none text-white/70">
          {open ? "remove" : "add"}
        </span>
      </button>
      {open ? <div className="px-4 pb-4">{children}</div> : null}
    </div>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "Our Story", href: "/our-story" },
    { label: "Properties", href: "/properties" },
    { label: "Categories", href: "/categories" },
    { label: "Listing Alerts", href: "/listing-alerts" },
    { label: "Contact", href: "/contact" },
  ];

  const services = [
    { label: "Residential", href: "/#homes" },
    { label: "Commercial", href: "/#homes" },
    { label: "Greenfield Development", href: "/#invest" },
    { label: "Societies", href: "/#invest" },
  ];

  return (
    <footer className="border-t border-white/10 bg-brand-blue text-white">
      <div className="mx-auto max-w-6xl px-6 py-14 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3">
              <Image
                src="/assets/images/logos/CrescentHeightLogo.png"
                alt="Crescent Heights"
                width={44}
                height={44}
                className="h-11 w-11 rounded-md bg-white object-contain p-1"
              />
              <div>
                <p className="text-sm font-semibold tracking-[0.2em] text-white">
                  CRESCENT HEIGHTS
                </p>
                <p className="mt-0.5 text-xs font-semibold tracking-[0.14em] text-white/70">
                  KOLKATA
                </p>
              </div>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-white/75">
              A residential development by Hospice Property Pvt. Ltd. Designed for modern urban living
              in Kolkata.
            </p>
          </div>

          <div className="hidden gap-10 sm:grid sm:grid-cols-2 lg:col-span-8 lg:grid-cols-3">
            <div>
              <p className="text-sm font-semibold tracking-[0.14em] text-white/90">QUICK LINKS</p>
              <ul className="mt-4 space-y-3 text-sm text-white/75">
                {quickLinks.map((l) => (
                  <li key={l.label}>
                    <a className="transition hover:text-primary" href={l.href}>
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-sm font-semibold tracking-[0.14em] text-white/90">SERVICES</p>
              <ul className="mt-4 space-y-3 text-sm text-white/75">
                {services.map((l) => (
                  <li key={l.label}>
                    <a className="transition hover:text-primary" href={l.href}>
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-sm font-semibold tracking-[0.14em] text-white/90">CONTACT</p>
              <ul className="mt-4 space-y-3 text-sm text-white/75">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined mt-0.5 text-[18px] leading-none text-primary">
                    location_on
                  </span>
                  Kolkata
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined mt-0.5 text-[18px] leading-none text-primary">
                    call
                  </span>
                  <a className="transition hover:text-primary" href="tel:+918017776957">
                    +91 8017776957
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined mt-0.5 text-[18px] leading-none text-primary">
                    mail
                  </span>
                  <a className="transition hover:text-primary" href="mailto:info@crescentheights.com">
                    info@crescentheights.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-3 sm:hidden">
            <FooterAccordion title="Quick Links">
              <ul className="space-y-3 text-sm text-white/75">
                {quickLinks.map((l) => (
                  <li key={l.label}>
                    <a className="block py-1 transition hover:text-primary" href={l.href}>
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </FooterAccordion>

            <FooterAccordion title="Services">
              <ul className="space-y-3 text-sm text-white/75">
                {services.map((l) => (
                  <li key={l.label}>
                    <a className="block py-1 transition hover:text-primary" href={l.href}>
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </FooterAccordion>

            <FooterAccordion title="Contact">
              <ul className="space-y-3 text-sm text-white/75">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined mt-0.5 text-[18px] leading-none text-primary">
                    location_on
                  </span>
                  Kolkata
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined mt-0.5 text-[18px] leading-none text-primary">
                    call
                  </span>
                  <a className="transition hover:text-primary" href="tel:+918017776957">
                    +91 8017776957
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined mt-0.5 text-[18px] leading-none text-primary">
                    mail
                  </span>
                  <a className="transition hover:text-primary" href="mailto:info@crescentheights.com">
                    info@crescentheights.com
                  </a>
                </li>
              </ul>
            </FooterAccordion>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 bg-brand-blue">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-6 text-sm text-white/70 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Crescent Heights</p>
          <div className="flex items-center gap-4">
            <a className="transition hover:text-primary" href="#">
              Privacy Policy
            </a>
            <span className="text-white/30">|</span>
            <a className="transition hover:text-primary" href="#">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
