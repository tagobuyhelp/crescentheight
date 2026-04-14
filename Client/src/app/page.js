import Hero from "@/components/Home/Hero";
import About from "@/components/Home/About";
import Amenities from "@/components/Home/Amenities";
import Residences from "@/components/Home/Residences";
import TrustInvest from "@/components/Home/TrustInvest";
import LeadCapture from "@/components/Home/LeadCapture";
import Testimonials from "@/components/Home/Testimonials";
import Footer from "@/components/Home/Footer";
import BottomNav from "@/components/Home/BottomNav";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 pb-[80px]">
      <Hero />
      <About />
      <Amenities />
      <Residences />
      <TrustInvest />
      <Testimonials />
      <LeadCapture />
      <Footer />
      <BottomNav />
    </main>
  );
}
