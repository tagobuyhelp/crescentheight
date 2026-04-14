import StoryHero from "@/components/OurStory/StoryHero";
import StoryAbout from "@/components/OurStory/StoryAbout";
import StoryJourney from "@/components/OurStory/StoryJourney";
import StoryValues from "@/components/OurStory/StoryValues";
import StoryPresence from "@/components/OurStory/StoryPresence";
import StoryFinalCta from "@/components/OurStory/StoryFinalCta";
import Header from "@/components/Shared/Header";
import Footer from "@/components/Home/Footer";
import BottomNav from "@/components/Home/BottomNav";

export default function OurStory() {
  return (
    <main className="min-h-screen bg-slate-50 pb-[80px]">
      <Header />
      <StoryHero />
      <StoryAbout />
      <StoryJourney />
      <StoryValues />
      <StoryPresence />
      <StoryFinalCta />
      <Footer />
      <BottomNav />
    </main>
  );
}
