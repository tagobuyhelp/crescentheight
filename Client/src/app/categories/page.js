import Header from "@/components/Shared/Header";
import Footer from "@/components/Home/Footer";
import BottomNav from "@/components/Home/BottomNav";
import CategoriesHero from "@/components/Categories/CategoriesHero";
import CategoriesGrid from "@/components/Categories/CategoriesGrid";
import CategoriesFeatured from "@/components/Categories/CategoriesFeatured";
import CategoriesFinalCta from "@/components/Categories/CategoriesFinalCta";

export default function CategoriesPage() {
  return (
    <main className="min-h-screen bg-slate-50 pb-[80px]">
      <Header />
      <CategoriesHero />
      <CategoriesGrid />
      <CategoriesFeatured />
      <CategoriesFinalCta />
      <Footer />
      <BottomNav />
    </main>
  );
}
