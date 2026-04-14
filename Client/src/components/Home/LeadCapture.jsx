"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

export default function LeadCapture() {
  const [status, setStatus] = useState("idle");
  const [form, setForm] = useState({
    name: "",
    phone: "",
    property: "",
    budget: "",
  });

  const whatsappMessage = useMemo(() => {
    const lines = [
      "Hi, I’m interested in Crescent Heights. Please share details.",
      "",
      form.name ? `Name: ${form.name}` : null,
      form.phone ? `Phone: ${form.phone}` : null,
      form.property ? `Preferred Property: ${form.property}` : null,
      form.budget ? `Budget Range: ${form.budget}` : null,
    ].filter(Boolean);
    return encodeURIComponent(lines.join("\n"));
  }, [form]);

  const whatsappHref = `https://wa.me/918017776957?text=${whatsappMessage}`;

  function onChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function onSubmit(e) {
    e.preventDefault();
    setStatus("loading");

    window.setTimeout(() => {
      setStatus("success");
      window.open(whatsappHref, "_blank", "noopener,noreferrer");
    }, 500);
  }

  return (
    <section id="lead" className="border-t border-neutral-border bg-neutral-background">
      <div className="mx-auto max-w-6xl px-6 py-14 sm:py-16">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-xs font-semibold tracking-[0.25em] text-neutral-lightText">
              GET IN TOUCH
            </p>
            <h2 className="mt-3 font-heading text-3xl font-semibold leading-tight text-neutral-darkText sm:text-4xl">
              Book a Site Visit Today
            </h2>
            <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-neutral-lightText sm:text-lg">
              Get complete project details, floor plans, and availability. Our team will assist you
              at every step.
            </p>

            <div className="mt-8 overflow-hidden rounded-2xl border border-neutral-border bg-white shadow-sm">
              <div className="relative h-[220px]">
                <Image
                  src="/assets/images/cta-bg.jpg"
                  alt="Crescent Heights assistance"
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/80 via-brand-blue/30 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-xs font-semibold tracking-[0.25em] text-white/85">
                    QUICK ACTIONS
                  </p>
                  <div className="mt-3 flex flex-col gap-3 sm:flex-row">
                    <a
                      className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-sm transition hover:bg-primary-hover"
                      href="tel:+918017776957"
                    >
                      <span className="material-symbols-outlined mr-2 text-[18px] leading-none">call</span>
                      Call Now
                    </a>
                    <a
                      className="inline-flex h-11 items-center justify-center rounded-md border border-white/25 bg-white/10 px-6 text-sm font-semibold text-white shadow-sm backdrop-blur transition hover:border-brand-green/70 hover:text-brand-green"
                      href={whatsappHref}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span className="material-symbols-outlined mr-2 text-[18px] leading-none">chat</span>
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-neutral-border bg-white p-6 shadow-sm sm:p-8">
            <form onSubmit={onSubmit} className="space-y-4">
              <div>
                <label className="text-xs font-semibold tracking-[0.14em] text-neutral-lightText">
                  YOUR NAME
                </label>
                <input
                  name="name"
                  value={form.name}
                  onChange={onChange}
                  placeholder="Your Name"
                  className="mt-2 h-11 w-full rounded-md border border-neutral-border bg-white px-4 text-sm text-neutral-darkText outline-none transition focus:border-primary/50"
                  required
                />
              </div>

              <div>
                <label className="text-xs font-semibold tracking-[0.14em] text-neutral-lightText">
                  PHONE NUMBER
                </label>
                <input
                  name="phone"
                  value={form.phone}
                  onChange={onChange}
                  placeholder="Phone Number"
                  inputMode="tel"
                  className="mt-2 h-11 w-full rounded-md border border-neutral-border bg-white px-4 text-sm text-neutral-darkText outline-none transition focus:border-primary/50"
                  required
                />
              </div>

              <div>
                <label className="text-xs font-semibold tracking-[0.14em] text-neutral-lightText">
                  PREFERRED PROPERTY
                </label>
                <select
                  name="property"
                  value={form.property}
                  onChange={onChange}
                  className="mt-2 h-11 w-full rounded-md border border-neutral-border bg-white px-4 text-sm text-neutral-darkText outline-none transition focus:border-primary/50"
                  required
                >
                  <option value="" disabled>
                    Select Property
                  </option>
                  <option value="2 BHK">2 BHK</option>
                  <option value="3 BHK">3 BHK</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-semibold tracking-[0.14em] text-neutral-lightText">
                  BUDGET RANGE (OPTIONAL)
                </label>
                <select
                  name="budget"
                  value={form.budget}
                  onChange={onChange}
                  className="mt-2 h-11 w-full rounded-md border border-neutral-border bg-white px-4 text-sm text-neutral-darkText outline-none transition focus:border-primary/50"
                >
                  <option value="">Select Budget</option>
                  <option value="₹40L – ₹60L">₹40L – ₹60L</option>
                  <option value="₹60L – ₹80L">₹60L – ₹80L</option>
                  <option value="₹80L+">₹80L+</option>
                </select>
              </div>

              <button
                type="submit"
                className="inline-flex h-11 w-full items-center justify-center rounded-md bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-sm transition hover:bg-primary-hover disabled:opacity-60"
                disabled={status === "loading"}
              >
                <span className="material-symbols-outlined mr-2 text-[18px] leading-none">
                  {status === "success" ? "check_circle" : "send"}
                </span>
                {status === "loading"
                  ? "Submitting..."
                  : status === "success"
                    ? "Request Received"
                    : "Get Details Now"}
              </button>

              <div className="pt-2">
                <p className="text-xs text-neutral-lightText">
                  ✔ Your data is 100% secure &nbsp; • &nbsp; ✔ No spam calls &nbsp; • &nbsp; ✔ Quick response within 24 hrs
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
