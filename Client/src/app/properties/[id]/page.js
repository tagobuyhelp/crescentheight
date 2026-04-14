import Header from "@/components/Shared/Header";
import Footer from "@/components/Home/Footer";
import BottomNav from "@/components/Home/BottomNav";
import PropertyDetailsClient from "@/components/Properties/PropertyDetailsClient";

export default function PropertyDetailsPage({ params }) {
  return (
    <main className="min-h-screen bg-slate-50 pb-[80px]">
      <Header />
      <PropertyDetailsClient id={params?.id} />
      <Footer />
      <BottomNav />
    </main>
  );
}

