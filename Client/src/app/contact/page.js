import Header from "@/components/Shared/Header";
import Footer from "@/components/Home/Footer";
import BottomNav from "@/components/Home/BottomNav";
import ContactHero from "@/components/Contact/ContactHero";
import Image from "next/image";
import Link from "next/link";

export default function ContactPage() {
  const mapsQuery = "Crescent Heights, Hospice Property Pvt. Ltd., Kolkata, West Bengal, India";
  const mapsHref =
    "https://www.google.com/maps/search/?api=1&query=Crescent%20Heights%20Kolkata";
  const mapsEmbedSrc = `https://www.google.com/maps?q=${encodeURIComponent(mapsQuery)}&output=embed`;
  const whatsappHref =
    "https://wa.me/918017776957?text=Hi%2C%20I%20want%20project%20details%20for%20Crescent%20Heights.";

  return (
    <main className="min-h-screen bg-slate-50 pb-[80px]">
      <Header />
      <ContactHero />

      <section className="border-t border-neutral-border bg-neutral-background py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold tracking-[0.25em] text-primary">GET IN TOUCH</p>
            <h2 className="mt-4 font-heading text-3xl font-semibold leading-tight text-neutral-darkText sm:text-4xl">
              Connect with Our Team Instantly
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-neutral-lightText sm:text-base">
              Available 9 AM – 8 PM
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <a
              href="tel:+918017776957"
              className={[
                "group rounded-2xl border border-neutral-border bg-white p-5 shadow-sm transition",
                "hover:-translate-y-1 hover:shadow-md",
              ].join(" ")}
            >
              <div className="flex items-start gap-3">
                <div
                  className={[
                    "flex h-11 w-11 items-center justify-center rounded-xl border transition",
                    "border-primary/25 bg-primary/10 text-primary",
                    "group-hover:border-primary/45 group-hover:bg-primary group-hover:text-primary-foreground",
                  ].join(" ")}
                >
                  <span className="material-symbols-outlined text-[22px] leading-none">call</span>
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-neutral-darkText">Call Us</p>
                  <p className="mt-1 text-sm font-semibold text-neutral-darkText">+91 8017776957</p>
                  <p className="mt-1 text-sm text-neutral-lightText">Tap to call instantly</p>
                </div>
              </div>
            </a>

            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className={[
                "group rounded-2xl border border-brand-green/25 bg-[linear-gradient(135deg,rgba(46,139,87,0.16),rgba(46,139,87,0.06))] p-6 shadow-sm ring-1 ring-brand-green/15 transition",
                "hover:-translate-y-1 hover:shadow-md",
              ].join(" ")}
            >
              <div className="flex items-start gap-3">
                <div
                  className={[
                    "flex h-11 w-11 items-center justify-center rounded-xl border transition",
                    "border-brand-green/30 bg-brand-green/10 text-brand-green",
                    "group-hover:border-brand-green/50 group-hover:bg-brand-green group-hover:text-white",
                  ].join(" ")}
                >
                  <span className="material-symbols-outlined text-[22px] leading-none">chat</span>
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-neutral-darkText">WhatsApp</p>
                  <p className="mt-1 text-sm font-semibold text-neutral-darkText">Chat with us instantly</p>
                  <p className="mt-1 text-sm text-neutral-lightText">Fastest response</p>
                </div>
              </div>
            </a>

            <a
              href="mailto:info@crescentheights.com"
              className={[
                "group rounded-2xl border border-neutral-border bg-white p-5 shadow-sm transition",
                "hover:-translate-y-1 hover:shadow-md",
              ].join(" ")}
            >
              <div className="flex items-start gap-3">
                <div
                  className={[
                    "flex h-11 w-11 items-center justify-center rounded-xl border transition",
                    "border-primary/25 bg-primary/10 text-primary",
                    "group-hover:border-primary/45 group-hover:bg-primary group-hover:text-primary-foreground",
                  ].join(" ")}
                >
                  <span className="material-symbols-outlined text-[22px] leading-none">mail</span>
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-neutral-darkText">Email</p>
                  <p className="mt-1 truncate text-sm font-semibold text-neutral-darkText">
                    info@crescentheights.com
                  </p>
                  <p className="mt-1 text-sm text-neutral-lightText">Send us your queries</p>
                </div>
              </div>
            </a>

            <a
              href={mapsHref}
              target="_blank"
              rel="noreferrer"
              className={[
                "group rounded-2xl border border-neutral-border bg-white p-5 shadow-sm transition",
                "hover:-translate-y-1 hover:shadow-md",
              ].join(" ")}
            >
              <div className="flex items-start gap-3">
                <div
                  className={[
                    "flex h-11 w-11 items-center justify-center rounded-xl border transition",
                    "border-primary/25 bg-primary/10 text-primary",
                    "group-hover:border-primary/45 group-hover:bg-primary group-hover:text-primary-foreground",
                  ].join(" ")}
                >
                  <span className="material-symbols-outlined text-[22px] leading-none">location_on</span>
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-neutral-darkText">Location</p>
                  <p className="mt-1 text-sm font-semibold text-neutral-darkText">Kolkata</p>
                  <p className="mt-1 text-sm text-neutral-lightText">View on map</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      <section className="border-t border-neutral-border bg-neutral-background py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold tracking-[0.25em] text-primary">OUR LOCATION</p>
            <h2 className="mt-4 font-heading text-3xl font-semibold leading-tight text-neutral-darkText sm:text-4xl">
              Visit Our Office
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-12 md:items-stretch">
            <a
              href={mapsHref}
              target="_blank"
              rel="noreferrer"
              className="group relative overflow-hidden rounded-2xl border border-neutral-border bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md md:col-span-7"
              aria-label="Open location in Google Maps"
            >
              <div className="absolute inset-x-5 top-5 z-10 inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/40 px-3 py-2 text-xs font-semibold tracking-[0.14em] text-white backdrop-blur">
                <span className="material-symbols-outlined text-[18px] leading-none text-primary">location_on</span>
                OPEN IN MAPS
              </div>
              <div className="relative h-[340px] w-full overflow-hidden sm:h-[380px] md:h-full">
                <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-[1.02]">
                  <iframe
                    title="Crescent Heights Location"
                    src={mapsEmbedSrc}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="h-full w-full"
                  />
                </div>
              </div>
            </a>

            <div className="rounded-2xl border border-neutral-border bg-white p-6 shadow-sm sm:p-8 md:col-span-5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-neutral-darkText">Crescent Heights</p>
                  <p className="mt-1 text-sm leading-relaxed text-neutral-lightText">
                    Hospice Property Pvt. Ltd.
                    <br />
                    Kolkata, West Bengal, India
                  </p>
                </div>
                <div className="hidden rounded-xl border border-neutral-border bg-neutral-background px-3 py-2 text-xs font-semibold tracking-[0.14em] text-neutral-lightText sm:block">
                  VERIFIED
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined mt-0.5 text-[20px] leading-none text-primary">
                    call
                  </span>
                  <div>
                    <p className="text-xs font-semibold tracking-[0.14em] text-neutral-lightText">
                      CONTACT
                    </p>
                    <a
                      href="tel:+918017776957"
                      className="mt-1 block text-sm font-semibold text-neutral-darkText transition hover:text-primary"
                    >
                      +91 8017776957
                    </a>
                    <a
                      href="mailto:info@crescentheights.com"
                      className="mt-1 block text-sm font-semibold text-neutral-darkText transition hover:text-primary"
                    >
                      info@crescentheights.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined mt-0.5 text-[20px] leading-none text-primary">
                    schedule
                  </span>
                  <div>
                    <p className="text-xs font-semibold tracking-[0.14em] text-neutral-lightText">
                      OFFICE HOURS
                    </p>
                    <p className="mt-1 text-sm text-neutral-lightText">Mon – Sat: 9:00 AM – 8:00 PM</p>
                    <p className="mt-1 text-sm text-neutral-lightText">Sunday: Closed / By Appointment</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined mt-0.5 text-[20px] leading-none text-primary">
                    near_me
                  </span>
                  <div>
                    <p className="text-xs font-semibold tracking-[0.14em] text-neutral-lightText">
                      NEARBY
                    </p>
                    <p className="mt-1 text-sm text-neutral-lightText">
                      Near key city connectors in Kolkata for easy access.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                <a
                  href={mapsHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-[0_10px_24px_rgba(212,168,87,0.20)] transition hover:bg-primary-hover hover:shadow-[0_14px_34px_rgba(212,168,87,0.28)]"
                >
                  <span className="material-symbols-outlined mr-2 text-[18px] leading-none">directions</span>
                  Get Directions
                </a>
                <a
                  href="tel:+918017776957"
                  className="inline-flex h-11 items-center justify-center rounded-md border border-neutral-border bg-white px-6 text-sm font-semibold text-neutral-darkText shadow-sm transition hover:border-primary/40 hover:text-primary"
                >
                  <span className="material-symbols-outlined mr-2 text-[18px] leading-none">call</span>
                  Call Now
                </a>
              </div>

              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-flex h-11 w-full items-center justify-center rounded-md border border-brand-green/30 bg-brand-green/10 px-6 text-sm font-semibold text-brand-green shadow-sm transition hover:bg-brand-green hover:text-white"
              >
                <span className="material-symbols-outlined mr-2 text-[18px] leading-none">chat</span>
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-neutral-border bg-neutral-white">
        <div className="relative overflow-hidden">
          <div className="group absolute inset-0">
            <div className="absolute inset-0 transition-transform duration-[2200ms] ease-out group-hover:scale-[1.03]">
              <Image
                src="/assets/images/cta-bg.jpg"
                alt="Talk to our team"
                fill
                sizes="100vw"
                className="object-cover brightness-[0.85]"
              />
            </div>
          </div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(9,23,40,0.92),rgba(30,58,95,0.78),rgba(9,23,40,0.70))]" />
          <div className="absolute inset-0 bg-[radial-gradient(900px_circle_at_25%_35%,rgba(212,168,87,0.22),transparent_55%),radial-gradient(900px_circle_at_80%_45%,rgba(74,123,167,0.25),transparent_60%)]" />

          <div className="relative mx-auto max-w-6xl px-6 py-14 sm:py-18">
            <div className="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur sm:p-10">
              <div className="animate-[fadeUp_520ms_ease-out_both]">
                <h2 className="font-heading text-3xl font-semibold leading-tight text-white sm:text-4xl">
                  Let’s Help You Find Your Perfect Home
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-pretty text-base leading-relaxed text-white/80 sm:text-lg">
                  Our team is ready to guide you through every step — from choosing the right property to
                  booking your visit.
                </p>
              </div>

              <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
                <Link
                  href="/#lead"
                  className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-sm font-semibold text-primary-foreground shadow-[0_12px_30px_rgba(212,168,87,0.22)] transition hover:bg-primary-hover hover:shadow-[0_16px_40px_rgba(212,168,87,0.30)]"
                >
                  <span className="material-symbols-outlined mr-2 text-[18px] leading-none">calendar_month</span>
                  Book Site Visit
                </Link>
                <a
                  href="tel:+918017776957"
                  className="inline-flex h-12 items-center justify-center rounded-md border border-white/20 bg-white/10 px-8 text-sm font-semibold text-white shadow-sm backdrop-blur transition hover:border-primary/60 hover:text-primary"
                >
                  <span className="material-symbols-outlined mr-2 text-[18px] leading-none">call</span>
                  Call Now
                </a>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-12 items-center justify-center rounded-md border border-brand-green/30 bg-brand-green/10 px-8 text-sm font-semibold text-brand-green shadow-sm transition hover:bg-brand-green hover:text-white"
                >
                  <span className="material-symbols-outlined mr-2 text-[18px] leading-none">chat</span>
                  WhatsApp Now
                </a>
              </div>

              <div className="mt-7 rounded-2xl border border-white/10 bg-white/5 px-5 py-4">
                <div className="flex flex-col items-center justify-center gap-3 text-sm font-semibold text-white/85 sm:flex-row sm:gap-6">
                  <a
                    href="tel:+918017776957"
                    className="inline-flex items-center gap-2 transition hover:text-primary"
                  >
                    <span className="material-symbols-outlined text-[18px] leading-none">call</span>
                    Call
                  </a>
                  <span className="hidden text-white/25 sm:inline">✦</span>
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 transition hover:text-primary"
                  >
                    <span className="material-symbols-outlined text-[18px] leading-none">chat</span>
                    WhatsApp
                  </a>
                  <span className="hidden text-white/25 sm:inline">✦</span>
                  <a
                    href="mailto:info@crescentheights.com"
                    className="inline-flex items-center gap-2 transition hover:text-primary"
                  >
                    <span className="material-symbols-outlined text-[18px] leading-none">mail</span>
                    Email
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <BottomNav />
    </main>
  );
}
