import Header from "@/components/Shared/Header";
import Footer from "@/components/Home/Footer";
import BottomNav from "@/components/Home/BottomNav";
import PropertiesClient from "@/components/Properties/PropertiesClient";
import { Suspense } from "react";

export default function PropertiesPage() {
  return (
    <main className="min-h-screen bg-slate-50 pb-[80px]">
      <Header />
      <Suspense
        fallback={
          <section className="bg-neutral-background">
            <div className="mx-auto max-w-6xl px-6 py-16">
              <div className="h-7 w-56 rounded-md bg-black/5" />
              <div className="mt-4 h-4 w-96 max-w-full rounded-md bg-black/5" />
              <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="h-80 rounded-2xl border border-neutral-border bg-white shadow-sm" />
                ))}
              </div>
            </div>
          </section>
        }
      >
        <PropertiesClient />
      </Suspense>

      <Footer />
      <BottomNav />
    </main>
  );
}
