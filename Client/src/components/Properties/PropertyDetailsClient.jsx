"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";

function getStatusMeta(status) {
  if (status === "sold_out") {
    return { label: "Sold Out", className: "border-red-200 bg-red-50 text-red-700", icon: "cancel" };
  }
  if (status === "limited") {
    return { label: "Limited Units", className: "border-amber-200 bg-amber-50 text-amber-800", icon: "warning" };
  }
  return { label: "Available", className: "border-emerald-200 bg-emerald-50 text-emerald-800", icon: "check_circle" };
}

export default function PropertyDetailsClient({ id }) {
  const property = useMemo(() => {
    const map = {
      "2a": {
        title: "2 BHK Apartment",
        fullTitle: "2 BHK Apartments in Crescent Heights",
        price: "₹4,200/sq.ft",
        status: "available",
        location: "Kolkata",
        bedrooms: 2,
        size: "615 – 930 sq.ft",
        parking: "Available",
        possession: "2027",
        emiHint: "EMI starting from ₹32,000/month",
        images: [
          "/assets/images/property1.jpg",
          "/assets/images/building-image-5.jpg",
          "/assets/images/plans2.jpg",
          "/assets/images/building-image-8.jpg",
          "/assets/images/building-image-6.jpg",
        ],
      },
      "3a": {
        title: "3 BHK Apartment",
        fullTitle: "3 BHK Apartments in Crescent Heights",
        price: "₹4,200/sq.ft",
        status: "limited",
        location: "Kolkata",
        bedrooms: 3,
        size: "988 – 1149 sq.ft",
        parking: "Available",
        possession: "2027",
        urgency: "Only few units left",
        emiHint: "EMI starting from ₹44,000/month",
        images: [
          "/assets/images/property4.jpg",
          "/assets/images/building-image-7.jpg",
          "/assets/images/plans2.jpg",
          "/assets/images/building-image-6.jpg",
          "/assets/images/building-image-9.jpg",
        ],
      },
      "1a": {
        title: "1 BHK Apartment",
        fullTitle: "1 BHK Apartments in Crescent Heights",
        price: "₹4,200/sq.ft",
        status: "sold_out",
        location: "Kolkata",
        bedrooms: 1,
        size: "—",
        parking: "—",
        possession: "2027",
        images: [
          "/assets/images/plans1.jpg",
          "/assets/images/building-image-3.jpg",
          "/assets/images/building-image-2.jpg",
          "/assets/images/building-image-4.jpg",
        ],
      },
    };

    return (
      map[id] || {
        title: "Residence",
        fullTitle: "Apartments in Crescent Heights",
        price: "₹4,200/sq.ft",
        status: "available",
        location: "Kolkata",
        bedrooms: 2,
        size: "615 – 930 sq.ft",
        parking: "Available",
        possession: "2027",
        images: [
          "/assets/images/property1.jpg",
          "/assets/images/building-image-8.jpg",
          "/assets/images/plans2.jpg",
          "/assets/images/building-image-6.jpg",
        ],
      }
    );
  }, [id]);

  const statusMeta = getStatusMeta(property.status);
  const defaultPlanType = property.bedrooms >= 3 ? "3" : "2";
  const defaultPlanSize = defaultPlanType === "3" ? "988" : "615";
  const [active, setActive] = useState(0);
  const [saved, setSaved] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [touchStartX, setTouchStartX] = useState(null);
  const highlightsRef = useRef(null);
  const [highlightsVisible, setHighlightsVisible] = useState(false);
  const amenitiesRef = useRef(null);
  const [amenitiesVisible, setAmenitiesVisible] = useState(false);
  const floorPlansRef = useRef(null);
  const [floorPlansVisible, setFloorPlansVisible] = useState(false);
  const locationRef = useRef(null);
  const [locationVisible, setLocationVisible] = useState(false);
  const [planType, setPlanType] = useState(defaultPlanType);
  const [planSize, setPlanSize] = useState(defaultPlanSize);
  const [planLightboxOpen, setPlanLightboxOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    preferredBhk: String(property.bedrooms || ""),
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 10);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPlanType(defaultPlanType);
      setPlanSize(defaultPlanSize);
    }, 10);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  useEffect(() => {
    const el = highlightsRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHighlightsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.18 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const el = amenitiesRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAmenitiesVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.18 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const el = floorPlansRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setFloorPlansVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.18 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const el = locationRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLocationVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.18 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!lightboxOpen) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") setLightboxOpen(false);
      if (e.key === "ArrowLeft") setActive((p) => (p - 1 + property.images.length) % property.images.length);
      if (e.key === "ArrowRight") setActive((p) => (p + 1) % property.images.length);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [lightboxOpen, property.images.length]);

  function prev() {
    setActive((p) => (p - 1 + property.images.length) % property.images.length);
  }
  function next() {
    setActive((p) => (p + 1) % property.images.length);
  }

  async function onShare() {
    const url = typeof window !== "undefined" ? window.location.href : "";
    try {
      if (navigator.share) {
        await navigator.share({ title: property.title, url });
        return;
      }
    } catch {}

    try {
      await navigator.clipboard.writeText(url);
    } catch {}
  }

  const whatsappHref =
    "https://wa.me/918017776957?text=Hi%2C%20I%20want%20to%20know%20more%20about%20this%20property%20at%20Crescent%20Heights.";

  const planPdfHref = "/assets/images/Cresent_Heights%20.pdf";
  const mapsQuery = "Crescent Heights Kolkata";
  const mapsEmbedSrc = `https://www.google.com/maps?q=${encodeURIComponent(mapsQuery)}&output=embed`;
  const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapsQuery)}`;

  const planData = useMemo(() => {
    const two = {
      type: "2 BHK",
      image: "/assets/images/plans2.jpg",
      bedrooms: 2,
      bathrooms: 2,
      sizes: [
        { key: "615", label: "615 sq.ft", range: "615 – 930 sq.ft" },
        { key: "765", label: "765 sq.ft", range: "615 – 930 sq.ft" },
        { key: "930", label: "930 sq.ft", range: "615 – 930 sq.ft" },
      ],
    };
    const three = {
      type: "3 BHK",
      image: "/assets/images/plans1.jpg",
      bedrooms: 3,
      bathrooms: 2,
      sizes: [
        { key: "988", label: "988 sq.ft", range: "988 – 1149 sq.ft" },
        { key: "1080", label: "1080 sq.ft", range: "988 – 1149 sq.ft" },
        { key: "1149", label: "1149 sq.ft", range: "988 – 1149 sq.ft" },
      ],
    };
    return planType === "2" ? two : three;
  }, [planType]);

  const selectedSize = useMemo(() => {
    return planData.sizes.find((s) => s.key === planSize) || planData.sizes[0];
  }, [planData, planSize]);

  function selectPlanType(nextType) {
    setPlanType(nextType);
    setPlanSize(nextType === "3" ? "988" : "615");
  }

  function onFormChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function buildWhatsappMessage() {
    const lines = [
      `Hi, I'm interested in Crescent Heights ${property.title}.`,
      form.name ? `Name: ${form.name}` : null,
      form.phone ? `Phone: ${form.phone}` : null,
      form.preferredBhk ? `Preferred BHK: ${form.preferredBhk}` : null,
      form.message ? `Message: ${form.message}` : null,
      "Please share details.",
    ].filter(Boolean);
    return encodeURIComponent(lines.join("\n"));
  }

  async function onSubmit(e) {
    e.preventDefault();
    if (!form.phone.trim()) return;

    setIsSubmitting(true);
    const text = buildWhatsappMessage();
    const href = `https://wa.me/918017776957?text=${text}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      try {
        window.open(href, "_blank", "noopener,noreferrer");
      } catch {}
      setTimeout(() => setIsSubmitted(false), 2500);
    }, 500);
  }

  return (
    <section className="bg-neutral-background pt-[72px]">
      <div className="mx-auto max-w-6xl px-6 py-8 sm:py-10">
        <nav className="mb-5 flex items-center gap-2 text-[11px] font-semibold tracking-[0.14em] text-neutral-lightText">
          <Link href="/" className="transition hover:text-neutral-darkText">
            Home
          </Link>
          <span>/</span>
          <Link href="/properties" className="transition hover:text-neutral-darkText">
            Properties
          </Link>
          <span>/</span>
          <span className="text-neutral-darkText">{property.title}</span>
        </nav>

        <div className="relative overflow-hidden rounded-3xl border border-neutral-border bg-white shadow-sm">
          <div className="grid gap-4 p-4 lg:grid-cols-12">
            <div className="relative overflow-hidden rounded-2xl bg-neutral-background lg:col-span-8">
              <div
                className="relative aspect-[16/10] w-full overflow-hidden"
                onTouchStart={(e) => setTouchStartX(e.touches?.[0]?.clientX ?? null)}
                onTouchEnd={(e) => {
                  const startX = touchStartX;
                  const endX = e.changedTouches?.[0]?.clientX ?? null;
                  setTouchStartX(null);
                  if (startX == null || endX == null) return;
                  const dx = endX - startX;
                  if (Math.abs(dx) < 40) return;
                  if (dx > 0) prev();
                  else next();
                }}
              >
                <div
                  className={[
                    "absolute inset-0 transition-transform duration-[1800ms] ease-out",
                    mounted ? "scale-100" : "scale-105",
                  ].join(" ")}
                >
                  <Image
                    src={property.images[active]}
                    alt={property.title}
                    fill
                    priority
                    sizes="(min-width: 1024px) 70vw, 100vw"
                    className="object-cover"
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />

                <div className="absolute left-4 top-4 flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold tracking-[0.14em] text-white backdrop-blur">
                    {property.title}
                  </span>
                  <span className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold tracking-[0.14em] text-white backdrop-blur">
                    {property.price}
                  </span>
                  <span
                    className={[
                      "inline-flex items-center gap-1 rounded-full border px-3 py-1 text-xs font-semibold tracking-[0.14em]",
                      statusMeta.className,
                    ].join(" ")}
                  >
                    <span className="material-symbols-outlined text-[16px] leading-none">
                      {statusMeta.icon}
                    </span>
                    {statusMeta.label}
                  </span>
                </div>

                <div className="absolute right-4 top-4 flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setSaved((v) => !v)}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur transition hover:border-primary/60 hover:text-primary"
                    aria-label="Save"
                  >
                    <span
                      className="material-symbols-outlined text-[20px] leading-none"
                      style={saved ? { fontVariationSettings: "'FILL' 1" } : {}}
                    >
                      favorite
                    </span>
                  </button>
                  <button
                    type="button"
                    onClick={onShare}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur transition hover:border-primary/60 hover:text-primary"
                    aria-label="Share"
                  >
                    <span className="material-symbols-outlined text-[20px] leading-none">share</span>
                  </button>
                  <a
                    href="tel:+918017776957"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur transition hover:border-primary/60 hover:text-primary"
                    aria-label="Call"
                  >
                    <span className="material-symbols-outlined text-[20px] leading-none">call</span>
                  </a>
                </div>

                <button
                  type="button"
                  onClick={prev}
                  className="absolute left-3 top-1/2 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur transition hover:border-primary/60 hover:text-primary sm:inline-flex"
                  aria-label="Previous image"
                >
                  <span className="material-symbols-outlined text-[22px] leading-none">chevron_left</span>
                </button>
                <button
                  type="button"
                  onClick={next}
                  className="absolute right-3 top-1/2 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur transition hover:border-primary/60 hover:text-primary sm:inline-flex"
                  aria-label="Next image"
                >
                  <span className="material-symbols-outlined text-[22px] leading-none">chevron_right</span>
                </button>

                <button
                  type="button"
                  onClick={() => setLightboxOpen(true)}
                  className="absolute bottom-4 left-4 inline-flex h-10 items-center justify-center rounded-md border border-white/15 bg-white/10 px-4 text-sm font-semibold text-white backdrop-blur transition hover:border-primary/60 hover:text-primary"
                >
                  <span className="material-symbols-outlined mr-2 text-[18px] leading-none">fullscreen</span>
                  View Gallery
                </button>

                <div className="absolute bottom-4 right-4 flex items-center gap-1 sm:hidden">
                  {property.images.map((_, idx) => (
                    <span
                      key={idx}
                      className={[
                        "h-1.5 w-1.5 rounded-full transition",
                        idx === active ? "bg-primary" : "bg-white/35",
                      ].join(" ")}
                    />
                  ))}
                </div>
              </div>

              <div className="mt-3 hidden gap-3 sm:grid sm:grid-cols-5">
                {property.images.slice(0, 5).map((src, idx) => {
                  const isActive = idx === active;
                  return (
                    <button
                      key={src}
                      type="button"
                      onClick={() => setActive(idx)}
                      className={[
                        "relative aspect-[4/3] overflow-hidden rounded-xl border transition",
                        isActive ? "border-primary/60" : "border-neutral-border hover:border-primary/30",
                      ].join(" ")}
                    >
                      <Image src={src} alt="" fill sizes="160px" className="object-cover" />
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="grid gap-4 lg:col-span-4 lg:grid-rows-3">
              {property.images.slice(1, 4).map((src, idx) => (
                <button
                  key={src}
                  type="button"
                  onClick={() => {
                    setActive(idx + 1);
                    setLightboxOpen(true);
                  }}
                  className="group relative aspect-[16/10] overflow-hidden rounded-2xl bg-neutral-background"
                >
                  <Image src={src} alt="" fill sizes="(min-width: 1024px) 30vw, 100vw" className="object-cover transition-transform duration-[1500ms] group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
                    <span className="material-symbols-outlined text-[16px] leading-none">photo</span>
                    View
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-neutral-border bg-white p-4 shadow-sm">
          <div className="grid gap-3 sm:grid-cols-3">
            <Link
              href="/#lead"
              className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-sm transition hover:bg-primary-hover"
            >
              <span className="material-symbols-outlined mr-2 text-[18px] leading-none">calendar_month</span>
              Book Visit
            </Link>
            <Link
              href="/#lead"
              className="inline-flex h-11 items-center justify-center rounded-md border border-neutral-border bg-white px-6 text-sm font-semibold text-neutral-darkText shadow-sm transition hover:border-primary/40 hover:text-primary"
            >
              <span className="material-symbols-outlined mr-2 text-[18px] leading-none">send</span>
              Enquire
            </Link>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-11 items-center justify-center rounded-md border border-neutral-border bg-white px-6 text-sm font-semibold text-neutral-darkText shadow-sm transition hover:border-brand-green/70 hover:text-brand-green"
            >
              <span className="material-symbols-outlined mr-2 text-[18px] leading-none">chat</span>
              WhatsApp
            </a>
          </div>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-neutral-border bg-white p-6 shadow-sm">
              <h2 className="font-heading text-2xl font-semibold text-neutral-darkText sm:text-3xl">
                {property.fullTitle}
              </h2>

              <div className="mt-4 grid gap-3 border-t border-neutral-border pt-4 sm:grid-cols-2">
                <div className="flex items-center gap-3 rounded-xl bg-neutral-background px-4 py-3">
                  <span className="material-symbols-outlined text-[20px] leading-none text-brand-softBlue">
                    location_on
                  </span>
                  <div>
                    <p className="text-[10px] font-semibold tracking-[0.14em] text-neutral-lightText">
                      LOCATION
                    </p>
                    <p className="mt-1 text-sm font-semibold text-neutral-darkText">
                      {property.location}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 rounded-xl bg-neutral-background px-4 py-3">
                  <span className="material-symbols-outlined text-[20px] leading-none text-brand-softBlue">
                    payments
                  </span>
                  <div>
                    <p className="text-[10px] font-semibold tracking-[0.14em] text-neutral-lightText">
                      PRICE
                    </p>
                    <p className="mt-1 font-sans text-sm font-bold tracking-tight text-neutral-darkText">
                      {property.price}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-5 flex flex-wrap items-center gap-2">
                <span
                  className={[
                    "inline-flex items-center gap-1 rounded-full border px-3 py-1 text-xs font-semibold tracking-[0.14em]",
                    statusMeta.className,
                    property.status === "limited" ? "animate-pulse" : "",
                  ].join(" ")}
                >
                  <span className="material-symbols-outlined text-[16px] leading-none">
                    {statusMeta.icon}
                  </span>
                  {statusMeta.label}
                </span>

                {property.urgency ? (
                  <span className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-semibold tracking-[0.12em] text-amber-800">
                    <span className="material-symbols-outlined text-[16px] leading-none">bolt</span>
                    {property.urgency}
                  </span>
                ) : null}
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4">
                {[
                  { label: "Bedrooms", value: String(property.bedrooms), icon: "bed" },
                  { label: "Size", value: property.size, icon: "straighten" },
                  { label: "Parking", value: property.parking, icon: "local_parking" },
                  { label: "Possession", value: property.possession, icon: "event" },
                ].map((item) => (
                  <div key={item.label} className="rounded-2xl border border-neutral-border bg-white p-4">
                    <div className="flex items-start gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-background text-brand-softBlue">
                        <span className="material-symbols-outlined text-[20px] leading-none">
                          {item.icon}
                        </span>
                      </div>
                      <div className="min-w-0">
                        <p className="text-[10px] font-semibold tracking-[0.14em] text-neutral-lightText">
                          {item.label.toUpperCase()}
                        </p>
                        <p className="mt-1 text-sm font-semibold text-neutral-darkText">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-[96px]">
              <div className="rounded-2xl border border-neutral-border bg-white p-6 shadow-sm">
                <p className="text-[10px] font-semibold tracking-[0.25em] text-neutral-lightText">
                  PRICE HIGHLIGHT
                </p>
                <p className="mt-2 font-heading text-2xl font-semibold text-neutral-darkText">
                  Starting {property.price}
                </p>

                <div className="mt-4 flex flex-wrap items-center gap-2">
                  <span
                    className={[
                      "inline-flex items-center gap-1 rounded-full border px-3 py-1 text-xs font-semibold tracking-[0.14em]",
                      statusMeta.className,
                      property.status === "limited" ? "animate-pulse" : "",
                    ].join(" ")}
                  >
                    <span className="material-symbols-outlined text-[16px] leading-none">
                      {statusMeta.icon}
                    </span>
                    {statusMeta.label}
                  </span>
                  {property.urgency ? (
                    <span className="text-xs font-semibold tracking-[0.12em] text-amber-700">
                      {property.urgency}
                    </span>
                  ) : null}
                </div>

                {property.emiHint ? (
                  <p className="mt-4 text-sm font-semibold text-neutral-lightText">{property.emiHint}</p>
                ) : null}

                <div className="mt-5 grid gap-3">
                  <Link
                    href="/#lead"
                    className="inline-flex h-11 w-full items-center justify-center rounded-md bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-sm transition hover:bg-primary-hover"
                  >
                    <span className="material-symbols-outlined mr-2 text-[18px] leading-none">calendar_month</span>
                    Book Site Visit
                  </Link>
                  <Link
                    href="/#lead"
                    className="inline-flex h-11 w-full items-center justify-center rounded-md border border-neutral-border bg-white px-6 text-sm font-semibold text-neutral-darkText shadow-sm transition hover:border-primary/40 hover:text-primary"
                  >
                    <span className="material-symbols-outlined mr-2 text-[18px] leading-none">send</span>
                    Enquire Now
                  </Link>
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-11 w-full items-center justify-center rounded-md border border-neutral-border bg-white px-6 text-sm font-semibold text-neutral-darkText shadow-sm transition hover:border-brand-green/70 hover:text-brand-green"
                  >
                    <span className="material-symbols-outlined mr-2 text-[18px] leading-none">chat</span>
                    WhatsApp
                  </a>
                </div>

                <div className="mt-6 rounded-2xl border border-neutral-border bg-neutral-background p-4">
                  <p className="text-[10px] font-semibold tracking-[0.25em] text-neutral-lightText">
                    CONTACT
                  </p>
                  <div className="mt-3 space-y-2">
                    <a
                      href="tel:+918017776957"
                      className="flex items-center gap-3 text-sm font-semibold text-neutral-darkText transition hover:text-primary"
                    >
                      <span className="material-symbols-outlined text-[18px] leading-none text-brand-softBlue">
                        call
                      </span>
                      +91 8017776957
                    </a>
                    <a
                      href={whatsappHref}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-3 text-sm font-semibold text-neutral-darkText transition hover:text-primary"
                    >
                      <span className="material-symbols-outlined text-[18px] leading-none text-brand-softBlue">
                        chat
                      </span>
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section
          ref={highlightsRef}
          className={[
            "mt-8 rounded-2xl border border-neutral-border bg-white p-6 shadow-sm transition duration-700 ease-out",
            highlightsVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
          ].join(" ")}
        >
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-bold tracking-[0.25em] text-primary">HIGHLIGHTS</p>
              <h2 className="mt-3 font-heading text-2xl font-semibold leading-tight text-neutral-darkText sm:text-3xl">
                Designed for Comfort, Built for Living
              </h2>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: "space_dashboard", title: "Spacious Layouts", desc: "Efficiently designed 2 & 3 BHK homes." },
              { icon: "security", title: "Secure Gated Community", desc: "24x7 security with CCTV surveillance." },
              { icon: "fitness_center", title: "Lifestyle Amenities", desc: "Gym, rooftop garden, community spaces." },
              { icon: "local_parking", title: "Dedicated Parking", desc: "Convenient and organized parking system." },
              { icon: "share_location", title: "Strategic Location", desc: "Well-connected area in Kolkata." },
              { icon: "currency_rupee", title: "Competitive Pricing", desc: "₹4,200/sq.ft with value potential." },
            ].map((h) => (
              <div
                key={h.title}
                className="group rounded-2xl border border-neutral-border bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-neutral-background text-brand-softBlue transition group-hover:text-primary">
                  <span className="material-symbols-outlined text-[22px] leading-none">{h.icon}</span>
                </div>
                <h3 className="mt-4 text-base font-semibold text-neutral-darkText">{h.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-lightText">{h.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 overflow-hidden rounded-2xl border border-primary/20 bg-[linear-gradient(135deg,rgba(30,58,95,0.06),rgba(212,168,87,0.10))] p-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-start gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/15 text-primary">
                  <span className="material-symbols-outlined text-[24px] leading-none">trending_up</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-neutral-darkText">Smart Investment Opportunity</p>
                  <p className="mt-1 text-sm text-neutral-lightText">
                    High demand location with strong appreciation potential.
                  </p>
                </div>
              </div>

              <Link
                href="/#lead"
                className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-sm transition hover:bg-primary-hover"
              >
                <span className="material-symbols-outlined mr-2 text-[18px] leading-none">support_agent</span>
                Talk to Expert
              </Link>
            </div>
          </div>
        </section>

        <section
          ref={amenitiesRef}
          className={[
            "mt-8 rounded-2xl border border-neutral-border bg-white p-6 shadow-sm transition duration-700 ease-out",
            amenitiesVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
          ].join(" ")}
        >
          <p className="text-xs font-bold tracking-[0.25em] text-primary">AMENITIES</p>
          <h2 className="mt-3 font-heading text-2xl font-semibold leading-tight text-neutral-darkText sm:text-3xl">
            Designed for Everyday Comfort &amp; Community Living
          </h2>
          <p className="mt-4 max-w-3xl text-pretty text-base leading-relaxed text-neutral-lightText sm:text-lg">
            Every space at Crescent Heights is crafted to support wellness, relaxation, and meaningful connections.
          </p>

          <div className="mt-6 overflow-hidden rounded-3xl border border-neutral-border bg-neutral-background">
            <div className="group relative aspect-[16/9] w-full overflow-hidden">
              <Image
                src="/assets/images/open-space.png"
                alt="Rooftop garden experience"
                fill
                sizes="100vw"
                className="object-cover transition-transform duration-[1500ms] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7">
                <div className="max-w-2xl rounded-2xl border border-white/15 bg-white/10 p-5 text-white backdrop-blur">
                  <p className="text-xs font-bold tracking-[0.25em] text-primary">FEATURED</p>
                  <h3 className="mt-2 font-heading text-xl font-semibold sm:text-2xl">
                    Rooftop Garden Experience
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/80 sm:text-base">
                    Enjoy peaceful evenings with scenic city views in a thoughtfully designed green space.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 space-y-8">
            {[
              {
                title: "Lifestyle",
                items: [
                  { icon: "fitness_center", name: "Gymnasium", desc: "Fully equipped fitness space.", image: "/assets/images/features-light-1.jpg" },
                  { icon: "park", name: "Rooftop Garden", desc: "Relax with open skyline views.", image: "/assets/images/open-space.png" },
                  { icon: "celebration", name: "Community Hall", desc: "Perfect for events and gatherings.", image: "/assets/images/club.png" },
                ],
              },
              {
                title: "Recreation",
                items: [
                  { icon: "pool", name: "Baby Swimming Pool", desc: "Safe and fun for children.", image: "/assets/images/features-light-2.jpg" },
                ],
              },
              {
                title: "Security",
                items: [
                  { icon: "security", name: "24x7 Security", desc: "Safe gated environment.", image: "/assets/images/building-image-6.jpg" },
                  { icon: "videocam", name: "CCTV Surveillance", desc: "Monitored common areas.", image: "/assets/images/building-image-7.jpg" },
                ],
              },
            ].map((group) => (
              <div key={group.title}>
                <div className="flex items-center justify-between">
                  <p className="text-xs font-bold tracking-[0.25em] text-neutral-lightText">
                    {group.title.toUpperCase()}
                  </p>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3">
                  {group.items.map((a) => (
                    <div
                      key={a.name}
                      className="group overflow-hidden rounded-2xl border border-neutral-border bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                    >
                      <div className="relative h-28 overflow-hidden bg-neutral-background sm:h-32">
                        <Image
                          src={a.image}
                          alt={a.name}
                          fill
                          sizes="(min-width: 768px) 33vw, 50vw"
                          className="object-cover transition-transform duration-[1500ms] group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-70 transition group-hover:opacity-90" />
                      </div>
                      <div className="p-4">
                        <div className="flex items-start gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-background text-brand-softBlue transition group-hover:text-primary">
                            <span className="material-symbols-outlined text-[20px] leading-none">{a.icon}</span>
                          </div>
                          <div className="min-w-0">
                            <p className="text-sm font-semibold text-neutral-darkText">{a.name}</p>
                            <p className="mt-1 text-xs leading-relaxed text-neutral-lightText">{a.desc}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex items-center justify-center">
            <Link
              href="/#lead"
              className="inline-flex h-11 w-full max-w-sm items-center justify-center rounded-md bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-sm transition hover:bg-primary-hover"
            >
              <span className="material-symbols-outlined mr-2 text-[18px] leading-none">calendar_month</span>
              Experience These Amenities Yourself
            </Link>
          </div>
        </section>

        <section
          ref={floorPlansRef}
          className={[
            "mt-8 rounded-2xl border border-neutral-border bg-white p-6 shadow-sm transition duration-700 ease-out",
            floorPlansVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
          ].join(" ")}
        >
          <p className="text-xs font-bold tracking-[0.25em] text-primary">FLOOR PLANS</p>
          <h2 className="mt-3 font-heading text-2xl font-semibold leading-tight text-neutral-darkText sm:text-3xl">
            Choose the Layout That Fits Your Needs
          </h2>

          <div className="mt-6 flex items-center gap-2 overflow-x-auto overscroll-x-contain pb-1 scrollbar-hide">
            {[
              { key: "2", label: "2 BHK" },
              { key: "3", label: "3 BHK" },
            ].map((t) => {
              const activeTab = planType === t.key;
              return (
                <button
                  key={t.key}
                  type="button"
                  onClick={() => selectPlanType(t.key)}
                  className={[
                    "inline-flex h-10 flex-none items-center justify-center rounded-full border px-4 text-sm font-semibold transition",
                    activeTab
                      ? "border-primary/40 bg-primary/10 text-primary"
                      : "border-neutral-border bg-white text-neutral-lightText hover:text-neutral-darkText",
                  ].join(" ")}
                >
                  {t.label}
                </button>
              );
            })}
          </div>

          <div className="mt-6 grid gap-6 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-8">
              <button
                type="button"
                onClick={() => setPlanLightboxOpen(true)}
                className="group relative w-full overflow-hidden rounded-3xl border border-neutral-border bg-neutral-background text-left"
                aria-label="Open floor plan"
              >
                <div className="relative aspect-[16/10] w-full">
                  <Image
                    src={planData.image}
                    alt={`${planData.type} floor plan`}
                    fill
                    sizes="(min-width: 1024px) 66vw, 100vw"
                    className="object-contain transition-transform duration-[1500ms] group-hover:scale-[1.02]"
                  />
                </div>
                <div className="absolute right-4 top-4 inline-flex items-center gap-2 rounded-full border border-neutral-border bg-white/90 px-3 py-1 text-xs font-semibold text-neutral-darkText shadow-sm backdrop-blur">
                  <span className="material-symbols-outlined text-[16px] leading-none">zoom_in</span>
                  Zoom
                </div>
              </button>
            </div>

            <div className="lg:col-span-4">
              <div className="rounded-2xl border border-neutral-border bg-white p-5">
                <div className="flex items-center justify-between">
                  <p className="text-[10px] font-semibold tracking-[0.25em] text-neutral-lightText">
                    PLAN DETAILS
                  </p>
                  <span className="inline-flex items-center rounded-full border border-primary/25 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                    {planData.type}
                  </span>
                </div>

                <div className="mt-4 space-y-3">
                  <div className="flex items-center justify-between rounded-xl bg-neutral-background px-4 py-3">
                    <p className="text-xs font-semibold tracking-[0.14em] text-neutral-lightText">
                      SIZE
                    </p>
                    <p className="font-sans text-sm font-bold tracking-tight text-neutral-darkText">
                      {selectedSize.range}
                    </p>
                  </div>
                  <div className="flex items-center justify-between rounded-xl bg-neutral-background px-4 py-3">
                    <p className="text-xs font-semibold tracking-[0.14em] text-neutral-lightText">
                      BEDROOMS
                    </p>
                    <p className="text-sm font-semibold text-neutral-darkText">{planData.bedrooms}</p>
                  </div>
                  <div className="flex items-center justify-between rounded-xl bg-neutral-background px-4 py-3">
                    <p className="text-xs font-semibold tracking-[0.14em] text-neutral-lightText">
                      BATHROOMS
                    </p>
                    <p className="text-sm font-semibold text-neutral-darkText">{planData.bathrooms}</p>
                  </div>
                </div>

                <div className="mt-5">
                  <p className="text-[10px] font-semibold tracking-[0.25em] text-neutral-lightText">
                    MULTIPLE SIZES
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {planData.sizes.map((s) => {
                      const activeSize = planSize === s.key;
                      return (
                        <button
                          key={s.key}
                          type="button"
                          onClick={() => setPlanSize(s.key)}
                          className={[
                            "inline-flex h-10 items-center justify-center rounded-full border px-4 text-xs font-semibold tracking-[0.14em] transition",
                            activeSize
                              ? "border-primary/40 bg-primary/10 text-primary"
                              : "border-neutral-border bg-white text-neutral-lightText hover:text-neutral-darkText",
                          ].join(" ")}
                        >
                          {s.key}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="mt-6 grid gap-3">
                  <a
                    href={planPdfHref}
                    download
                    className="inline-flex h-11 w-full items-center justify-center rounded-md border border-neutral-border bg-white px-6 text-sm font-semibold text-neutral-darkText shadow-sm transition hover:border-primary/40 hover:text-primary"
                  >
                    <span className="material-symbols-outlined mr-2 text-[18px] leading-none">download</span>
                    Download Plan PDF
                  </a>
                  <Link
                    href="/#lead"
                    className="inline-flex h-11 w-full items-center justify-center rounded-md bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-sm transition hover:bg-primary-hover"
                  >
                    <span className="material-symbols-outlined mr-2 text-[18px] leading-none">calendar_month</span>
                    Book Site Visit
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          ref={locationRef}
          className={[
            "mt-8 rounded-2xl border border-neutral-border bg-white p-6 shadow-sm transition duration-700 ease-out",
            locationVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
          ].join(" ")}
        >
          <p className="text-xs font-bold tracking-[0.25em] text-primary">LOCATION</p>
          <h2 className="mt-3 font-heading text-2xl font-semibold leading-tight text-neutral-darkText sm:text-3xl">
            Well-Connected Location in Kolkata
          </h2>
          <p className="mt-4 max-w-3xl text-pretty text-base leading-relaxed text-neutral-lightText sm:text-lg">
            Enjoy seamless connectivity to key areas including schools, hospitals, business hubs, and transport links.
          </p>

          <div className="mt-6 grid gap-6 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-7">
              <div className="group overflow-hidden rounded-3xl border border-neutral-border bg-neutral-background">
                <div className="relative aspect-[16/11] w-full">
                  <div className="absolute inset-0 transition-transform duration-[1500ms] ease-out group-hover:scale-[1.02]">
                    <iframe
                      title="Crescent Heights Location"
                      src={mapsEmbedSrc}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="h-full w-full"
                      allowFullScreen
                    />
                  </div>
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between gap-3">
                <p className="text-sm font-semibold text-neutral-darkText">
                  View exact location on Google Maps
                </p>
                <a
                  href={mapsHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-brand-softBlue transition hover:text-primary"
                >
                  View on Google Maps
                  <span className="material-symbols-outlined text-[18px] leading-none">arrow_forward</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-neutral-border bg-white p-5">
                <div className="rounded-2xl border border-primary/20 bg-[linear-gradient(135deg,rgba(30,58,95,0.06),rgba(212,168,87,0.10))] p-5">
                  <div className="flex items-start gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/15 text-primary">
                      <span className="material-symbols-outlined text-[22px] leading-none animate-pulse">
                        location_on
                      </span>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-neutral-darkText">
                        Prime location with future growth potential
                      </p>
                      <p className="mt-1 text-sm text-neutral-lightText">
                        Strong connectivity today, with long-term value appreciation.
                      </p>
                    </div>
                  </div>
                </div>

                <p className="mt-6 text-[10px] font-semibold tracking-[0.25em] text-neutral-lightText">
                  NEARBY PLACES
                </p>
                <div className="mt-4 grid grid-cols-2 gap-3">
                  {[
                    { icon: "school", title: "Schools", time: "5 mins" },
                    { icon: "local_hospital", title: "Hospitals", time: "10 mins" },
                    { icon: "shopping_bag", title: "Markets", time: "8 mins" },
                    { icon: "train", title: "Transport", time: "12 mins" },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="flex items-center gap-3 rounded-2xl border border-neutral-border bg-neutral-background px-4 py-3"
                    >
                      <span className="material-symbols-outlined text-[20px] leading-none text-brand-softBlue">
                        {item.icon}
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-neutral-darkText">{item.title}</p>
                        <p className="mt-0.5 text-xs font-semibold text-neutral-lightText">
                          {item.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6">
                  <Link
                    href="/#lead"
                    className="inline-flex h-11 w-full items-center justify-center rounded-md bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-sm transition hover:bg-primary-hover"
                  >
                    <span className="material-symbols-outlined mr-2 text-[18px] leading-none">calendar_month</span>
                    Book Site Visit
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-8 rounded-2xl border border-neutral-border bg-neutral-white p-6 shadow-sm">
          <div className="grid gap-6 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-7">
              <p className="text-xs font-bold tracking-[0.25em] text-primary">GET DETAILS</p>
              <h2 className="mt-3 font-heading text-2xl font-semibold leading-tight text-neutral-darkText sm:text-3xl">
                Not Sure Which Home is Right for You?
              </h2>
              <p className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-neutral-lightText sm:text-lg">
                Let our team help you choose the perfect home based on your needs, budget, and lifestyle.
              </p>

              <form onSubmit={onSubmit} className="mt-6 grid gap-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="text-xs font-semibold tracking-[0.14em] text-neutral-lightText">
                      NAME
                    </label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={onFormChange}
                      className="mt-2 h-11 w-full rounded-md border border-neutral-border bg-white px-4 text-sm font-semibold text-neutral-darkText outline-none transition focus:border-primary/40"
                      placeholder="Your name"
                      autoComplete="name"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold tracking-[0.14em] text-neutral-lightText">
                      PHONE NUMBER *
                    </label>
                    <input
                      name="phone"
                      value={form.phone}
                      onChange={onFormChange}
                      className="mt-2 h-11 w-full rounded-md border border-neutral-border bg-white px-4 text-sm font-semibold text-neutral-darkText outline-none transition focus:border-primary/40"
                      placeholder="Your phone number"
                      inputMode="tel"
                      autoComplete="tel"
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
                      name="preferredBhk"
                      value={form.preferredBhk}
                      onChange={onFormChange}
                      className="mt-2 h-11 w-full rounded-md border border-neutral-border bg-white px-4 text-sm font-semibold text-neutral-darkText outline-none transition focus:border-primary/40"
                    >
                      <option value="">Select</option>
                      <option value="1 BHK">1 BHK</option>
                      <option value="2 BHK">2 BHK</option>
                      <option value="3 BHK">3 BHK</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-semibold tracking-[0.14em] text-neutral-lightText">
                      MESSAGE (OPTIONAL)
                    </label>
                    <input
                      name="message"
                      value={form.message}
                      onChange={onFormChange}
                      className="mt-2 h-11 w-full rounded-md border border-neutral-border bg-white px-4 text-sm font-semibold text-neutral-darkText outline-none transition focus:border-primary/40"
                      placeholder="Any specific requirement?"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-md bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-[0_10px_24px_rgba(212,168,87,0.20)] transition hover:bg-primary-hover disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <>
                      <span className="inline-flex h-5 w-5 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <span className="material-symbols-outlined text-[18px] leading-none">bolt</span>
                      Get Details Now
                    </>
                  )}
                </button>

                {isSubmitted ? (
                  <div className="inline-flex items-center gap-2 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-800">
                    <span className="material-symbols-outlined text-[18px] leading-none">check_circle</span>
                    Request Submitted Successfully
                  </div>
                ) : null}

                <div className="mt-2 grid gap-2 sm:grid-cols-3">
                  {[
                    "100% secure data",
                    "No spam calls",
                    "Quick response within 24 hrs",
                  ].map((t) => (
                    <div
                      key={t}
                      className="flex items-center gap-2 rounded-xl border border-neutral-border bg-neutral-background px-4 py-3"
                    >
                      <span className="material-symbols-outlined text-[18px] leading-none text-brand-softBlue">
                        verified
                      </span>
                      <span className="text-sm font-semibold text-neutral-darkText">{t}</span>
                    </div>
                  ))}
                </div>
              </form>
            </div>

            <div className="lg:col-span-5">
              <div className="lg:sticky lg:top-[96px]">
                <div className="rounded-2xl border border-neutral-border bg-white p-6 shadow-sm">
                  <p className="text-[10px] font-semibold tracking-[0.25em] text-neutral-lightText">
                    QUICK ACTIONS
                  </p>
                  <p className="mt-2 font-heading text-2xl font-semibold text-neutral-darkText">
                    Starting {property.price}
                  </p>

                  <div className="mt-4 flex flex-wrap items-center gap-2">
                    <span
                      className={[
                        "inline-flex items-center gap-1 rounded-full border px-3 py-1 text-xs font-semibold tracking-[0.14em]",
                        statusMeta.className,
                        property.status === "limited" ? "animate-pulse" : "",
                      ].join(" ")}
                    >
                      <span className="material-symbols-outlined text-[16px] leading-none">
                        {statusMeta.icon}
                      </span>
                      {statusMeta.label}
                    </span>
                  </div>

                  <div className="mt-5 grid gap-3">
                    <Link
                      href="/#lead"
                      className="inline-flex h-11 w-full items-center justify-center rounded-md bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-sm transition hover:bg-primary-hover"
                    >
                      <span className="material-symbols-outlined mr-2 text-[18px] leading-none">calendar_month</span>
                      Book Site Visit
                    </Link>
                    <a
                      href={whatsappHref}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex h-11 w-full items-center justify-center rounded-md border border-neutral-border bg-white px-6 text-sm font-semibold text-neutral-darkText shadow-sm transition hover:border-brand-green/70 hover:text-brand-green"
                    >
                      <span className="material-symbols-outlined mr-2 text-[18px] leading-none">chat</span>
                      WhatsApp Now
                    </a>
                    <a
                      href="tel:+918017776957"
                      className="inline-flex h-11 w-full items-center justify-center rounded-md border border-neutral-border bg-white px-6 text-sm font-semibold text-neutral-darkText shadow-sm transition hover:border-primary/40 hover:text-primary"
                    >
                      <span className="material-symbols-outlined mr-2 text-[18px] leading-none">call</span>
                      Call Now
                    </a>
                  </div>

                  <div className="mt-6 rounded-2xl border border-neutral-border bg-neutral-background p-4">
                    <p className="text-[10px] font-semibold tracking-[0.25em] text-neutral-lightText">
                      CONTACT
                    </p>
                    <div className="mt-3 space-y-2">
                      <a
                        href="tel:+918017776957"
                        className="flex items-center gap-3 text-sm font-semibold text-neutral-darkText transition hover:text-primary"
                      >
                        <span className="material-symbols-outlined text-[18px] leading-none text-brand-softBlue">
                          call
                        </span>
                        +91 8017776957
                      </a>
                      <a
                        href={whatsappHref}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-3 text-sm font-semibold text-neutral-darkText transition hover:text-primary"
                      >
                        <span className="material-symbols-outlined text-[18px] leading-none text-brand-softBlue">
                          chat
                        </span>
                        WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="fixed inset-x-0 z-[60] bg-white/95 backdrop-blur sm:hidden bottom-[calc(env(safe-area-inset-bottom)+72px)]">
        <div className="mx-auto max-w-6xl px-4 py-3">
          <div className="grid grid-cols-3 gap-2">
            <a
              href="tel:+918017776957"
              className="inline-flex h-11 items-center justify-center rounded-md border border-neutral-border bg-white text-xs font-semibold text-neutral-darkText shadow-sm transition hover:border-primary/40 hover:text-primary"
            >
              Call
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-11 items-center justify-center rounded-md border border-neutral-border bg-white text-xs font-semibold text-neutral-darkText shadow-sm transition hover:border-brand-green/70 hover:text-brand-green"
            >
              WhatsApp
            </a>
            <Link
              href="/#lead"
              className="inline-flex h-11 items-center justify-center rounded-md bg-primary text-xs font-semibold text-primary-foreground shadow-sm transition hover:bg-primary-hover"
            >
              Book Visit
            </Link>
          </div>
        </div>
      </div>

      {lightboxOpen ? (
        <div className="fixed inset-0 z-[80] bg-black/80">
          <button
            type="button"
            className="absolute inset-0"
            onClick={() => setLightboxOpen(false)}
            aria-label="Close lightbox"
          />
          <div className="absolute inset-0 flex items-center justify-center p-4">
            <div className="relative w-full max-w-5xl overflow-hidden rounded-2xl bg-black">
              <div className="relative aspect-[16/10]">
                <Image
                  src={property.images[active]}
                  alt={property.title}
                  fill
                  sizes="100vw"
                  className="object-contain"
                />
              </div>

              <div className="absolute left-4 top-4 flex items-center gap-2">
                <span className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold tracking-[0.14em] text-white backdrop-blur">
                  {active + 1} / {property.images.length}
                </span>
              </div>

              <button
                type="button"
                onClick={() => setLightboxOpen(false)}
                className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur transition hover:border-primary/60 hover:text-primary"
                aria-label="Close"
              >
                <span className="material-symbols-outlined text-[22px] leading-none">close</span>
              </button>

              <button
                type="button"
                onClick={prev}
                className="absolute left-4 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur transition hover:border-primary/60 hover:text-primary"
                aria-label="Previous"
              >
                <span className="material-symbols-outlined text-[22px] leading-none">chevron_left</span>
              </button>
              <button
                type="button"
                onClick={next}
                className="absolute right-4 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur transition hover:border-primary/60 hover:text-primary"
                aria-label="Next"
              >
                <span className="material-symbols-outlined text-[22px] leading-none">chevron_right</span>
              </button>
            </div>
          </div>
        </div>
      ) : null}

      {planLightboxOpen ? (
        <div className="fixed inset-0 z-[85] bg-black/80">
          <button
            type="button"
            className="absolute inset-0"
            onClick={() => setPlanLightboxOpen(false)}
            aria-label="Close plan lightbox"
          />
          <div className="absolute inset-0 flex items-center justify-center p-4">
            <div className="relative w-full max-w-5xl overflow-hidden rounded-2xl bg-black">
              <div className="relative aspect-[16/10]">
                <Image
                  src={planData.image}
                  alt={`${planData.type} floor plan`}
                  fill
                  sizes="100vw"
                  className="object-contain"
                />
              </div>
              <button
                type="button"
                onClick={() => setPlanLightboxOpen(false)}
                className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur transition hover:border-primary/60 hover:text-primary"
                aria-label="Close"
              >
                <span className="material-symbols-outlined text-[22px] leading-none">close</span>
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
