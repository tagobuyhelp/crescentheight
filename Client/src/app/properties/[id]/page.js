import Header from "@/components/Shared/Header";
import Footer from "@/components/Home/Footer";
import BottomNav from "@/components/Home/BottomNav";
import PropertyDetailsClient from "@/components/Properties/PropertyDetailsClient";

export async function generateStaticParams() {
  return [
    { id: "1a" },
    { id: "2a" },
    { id: "2b" },
    { id: "2c" },
    { id: "2d" },
    { id: "2e" },
    { id: "2f" },
    { id: "3a" },
    { id: "3b" },
    { id: "3c" },
    { id: "3d" },
    { id: "3e" },
  ];
}

export default async function PropertyDetailsPage({ params }) {
  const { id } = await params;
  return (
    <main className="min-h-screen bg-slate-50 pb-[80px]">
      <Header />
      <PropertyDetailsClient id={id} />
      <Footer />
      <BottomNav />
    </main>
  );
}

