"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

const bhkOptions = ["Studio", "1 BHK", "2 BHK", "3 BHK", "4 BHK+"];
const budgetOptions = [
  "₹30L – ₹50L",
  "₹50L – ₹70L",
  "₹70L – ₹1Cr",
  "₹1Cr – ₹1.5Cr",
  "₹1.5Cr+",
];
const locationOptions = [
  "Crescent Heights (Kolkata)",
  "New Town",
  "Salt Lake",
  "Rajarhat",
  "EM Bypass",
  "Other (Mention in notes)",
];
const propertyTypeOptions = ["Residential", "Commercial"];

export default function ListingAlertsForm() {
  const [status, setStatus] = useState("idle");
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    bhk: "",
    budget: "",
    location: "",
    propertyType: "",
    notes: "",
  });

  const whatsappMessage = useMemo(() => {
    const lines = [
      "Hi, I want listing alerts for Crescent Heights.",
      "",
      form.fullName ? `Name: ${form.fullName}` : null,
      form.phone ? `Phone: ${form.phone}` : null,
      form.email ? `Email: ${form.email}` : null,
      form.bhk ? `Preferred BHK: ${form.bhk}` : null,
      form.budget ? `Budget Range: ${form.budget}` : null,
      form.location ? `Preferred Location: ${form.location}` : null,
      form.propertyType ? `Property Type: ${form.propertyType}` : null,
      form.notes ? `Notes: ${form.notes}` : null,
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
    if (status === "loading") return;

    setStatus("loading");

    window.setTimeout(() => {
      setStatus("success");

      try {
        window.localStorage.setItem(
          "crescent_listing_alert",
          JSON.stringify({ ...form, createdAt: new Date().toISOString() })
        );
      } catch {}

      window.open(whatsappHref, "_blank", "noopener,noreferrer");
    }, 650);
  }

  return (
    <section id="alert-form" className="border-t border-neutral-border bg-neutral-background scroll-mt-[160px]">
      <div className="mx-auto max-w-6xl px-6 py-14 sm:py-16">
        <div className="grid gap-10 md:grid-cols-2 md:items-start">
          <div>
            <p className="text-xs font-semibold tracking-[0.25em] text-neutral-lightText">
              CREATE YOUR ALERT
            </p>
            <h2 className="mt-3 font-heading text-3xl font-semibold leading-tight text-neutral-darkText sm:text-4xl">
              Tell Us What You Want. We’ll Watch the Market for You.
            </h2>
            <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-neutral-lightText sm:text-lg">
              Share your preferences once and get updates when matching properties become available.
            </p>

            <div className="mt-8 overflow-hidden rounded-2xl border border-neutral-border bg-white shadow-sm">
              <div className="relative h-[220px]">
                <Image
                  src="/assets/images/cta-bg.jpg"
                  alt="Listing alerts preview"
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/85 via-brand-blue/35 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-xs font-semibold tracking-[0.25em] text-white/85">
                    WHAT YOU’LL GET
                  </p>
                  <div className="mt-3 grid gap-2 text-sm text-white/90 sm:grid-cols-2">
                    <div className="flex items-center gap-2 rounded-xl border border-white/15 bg-white/10 px-3 py-2 backdrop-blur">
                      <span className="material-symbols-outlined text-[18px] leading-none text-primary">
                        notifications
                      </span>
                      Instant updates
                    </div>
                    <div className="flex items-center gap-2 rounded-xl border border-white/15 bg-white/10 px-3 py-2 backdrop-blur">
                      <span className="material-symbols-outlined text-[18px] leading-none text-primary">
                        target
                      </span>
                      Matched listings only
                    </div>
                    <div className="flex items-center gap-2 rounded-xl border border-white/15 bg-white/10 px-3 py-2 backdrop-blur">
                      <span className="material-symbols-outlined text-[18px] leading-none text-primary">
                        schedule
                      </span>
                      Save hours of searching
                    </div>
                    <div className="flex items-center gap-2 rounded-xl border border-white/15 bg-white/10 px-3 py-2 backdrop-blur">
                      <span className="material-symbols-outlined text-[18px] leading-none text-primary">
                        verified
                      </span>
                      Secure & private
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-neutral-border bg-white p-6 shadow-sm sm:p-8">
            {status === "success" ? (
              <div className="mb-5 rounded-xl border border-primary/20 bg-primary/10 px-4 py-3">
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined mt-0.5 text-[20px] leading-none text-primary">
                    check_circle
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-neutral-darkText">Alert Created Successfully</p>
                    <p className="mt-1 text-sm text-neutral-lightText">
                      Check your email for confirmation.
                    </p>
                  </div>
                </div>
              </div>
            ) : null}

            <form onSubmit={onSubmit} className="space-y-4">
              <div>
                <label className="text-xs font-semibold tracking-[0.14em] text-neutral-lightText">
                  FULL NAME
                </label>
                <input
                  name="fullName"
                  value={form.fullName}
                  onChange={onChange}
                  placeholder="Your Name"
                  className="mt-2 h-11 w-full rounded-md border border-neutral-border bg-white px-4 text-sm text-neutral-darkText outline-none transition focus:border-primary/60 focus:ring-4 focus:ring-primary/10"
                  required
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
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
                    className="mt-2 h-11 w-full rounded-md border border-neutral-border bg-white px-4 text-sm text-neutral-darkText outline-none transition focus:border-primary/60 focus:ring-4 focus:ring-primary/10"
                    required
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold tracking-[0.14em] text-neutral-lightText">
                    EMAIL ADDRESS
                  </label>
                  <input
                    name="email"
                    value={form.email}
                    onChange={onChange}
                    placeholder="Email Address"
                    inputMode="email"
                    type="email"
                    className="mt-2 h-11 w-full rounded-md border border-neutral-border bg-white px-4 text-sm text-neutral-darkText outline-none transition focus:border-primary/60 focus:ring-4 focus:ring-primary/10"
                    required
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-xs font-semibold tracking-[0.14em] text-neutral-lightText">
                    PREFERRED BHK
                  </label>
                  <select
                    name="bhk"
                    value={form.bhk}
                    onChange={onChange}
                    className="mt-2 h-11 w-full rounded-md border border-neutral-border bg-white px-4 text-sm text-neutral-darkText outline-none transition focus:border-primary/60 focus:ring-4 focus:ring-primary/10"
                    required
                  >
                    <option value="" disabled>
                      Select BHK
                    </option>
                    {bhkOptions.map((o) => (
                      <option key={o} value={o}>
                        {o}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-xs font-semibold tracking-[0.14em] text-neutral-lightText">
                    BUDGET RANGE
                  </label>
                  <select
                    name="budget"
                    value={form.budget}
                    onChange={onChange}
                    className="mt-2 h-11 w-full rounded-md border border-neutral-border bg-white px-4 text-sm text-neutral-darkText outline-none transition focus:border-primary/60 focus:ring-4 focus:ring-primary/10"
                    required
                  >
                    <option value="" disabled>
                      Select Budget
                    </option>
                    {budgetOptions.map((o) => (
                      <option key={o} value={o}>
                        {o}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold tracking-[0.14em] text-neutral-lightText">
                  PREFERRED LOCATION
                </label>
                <select
                  name="location"
                  value={form.location}
                  onChange={onChange}
                  className="mt-2 h-11 w-full rounded-md border border-neutral-border bg-white px-4 text-sm text-neutral-darkText outline-none transition focus:border-primary/60 focus:ring-4 focus:ring-primary/10"
                  required
                >
                  <option value="" disabled>
                    Select Location
                  </option>
                  {locationOptions.map((o) => (
                    <option key={o} value={o}>
                      {o}
                    </option>
                  ))}
                </select>
              </div>

              <button
                type="button"
                className="flex w-full items-center justify-between rounded-xl border border-neutral-border bg-neutral-background px-4 py-3 text-left text-sm font-semibold text-neutral-darkText transition hover:border-primary/30"
                onClick={() => setShowAdvanced((v) => !v)}
                aria-expanded={showAdvanced}
              >
                <span className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[18px] leading-none text-brand-softBlue">
                    tune
                  </span>
                  Advanced Filters (Optional)
                </span>
                <span className="material-symbols-outlined text-[20px] leading-none text-neutral-lightText">
                  {showAdvanced ? "expand_less" : "expand_more"}
                </span>
              </button>

              {showAdvanced ? (
                <div className="space-y-4">
                  <div>
                    <label className="text-xs font-semibold tracking-[0.14em] text-neutral-lightText">
                      PROPERTY TYPE (OPTIONAL)
                    </label>
                    <select
                      name="propertyType"
                      value={form.propertyType}
                      onChange={onChange}
                      className="mt-2 h-11 w-full rounded-md border border-neutral-border bg-white px-4 text-sm text-neutral-darkText outline-none transition focus:border-primary/60 focus:ring-4 focus:ring-primary/10"
                    >
                      <option value="">Select Type</option>
                      {propertyTypeOptions.map((o) => (
                        <option key={o} value={o}>
                          {o}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-semibold tracking-[0.14em] text-neutral-lightText">
                      ADDITIONAL NOTES (OPTIONAL)
                    </label>
                    <textarea
                      name="notes"
                      value={form.notes}
                      onChange={onChange}
                      placeholder="Any specific requirements (floor preference, facing, move-in timeline, etc.)"
                      rows={4}
                      className="mt-2 w-full resize-none rounded-md border border-neutral-border bg-white px-4 py-3 text-sm text-neutral-darkText outline-none transition focus:border-primary/60 focus:ring-4 focus:ring-primary/10"
                    />
                  </div>
                </div>
              ) : null}

              <button
                type="submit"
                className="inline-flex h-11 w-full items-center justify-center rounded-md bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-[0_12px_30px_rgba(212,168,87,0.22)] transition hover:bg-primary-hover hover:shadow-[0_16px_40px_rgba(212,168,87,0.30)] disabled:opacity-60"
                disabled={status === "loading"}
              >
                <span
                  className={[
                    "material-symbols-outlined mr-2 text-[18px] leading-none",
                    status === "loading" ? "animate-spin" : "",
                  ].join(" ")}
                >
                  {status === "success" ? "check_circle" : status === "loading" ? "progress_activity" : "notifications"}
                </span>
                {status === "loading"
                  ? "Creating..."
                  : status === "success"
                    ? "Alert Created"
                    : "Create My Alert"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
