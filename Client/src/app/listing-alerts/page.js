import Header from "@/components/Shared/Header";
import Footer from "@/components/Home/Footer";
import BottomNav from "@/components/Home/BottomNav";
import ListingAlertsHero from "@/components/ListingAlerts/ListingAlertsHero";
import ListingAlertsHowItWorks from "@/components/ListingAlerts/ListingAlertsHowItWorks";
import ListingAlertsBenefits from "@/components/ListingAlerts/ListingAlertsBenefits";
import ListingAlertsForm from "@/components/ListingAlerts/ListingAlertsForm";
import ListingAlertsPrivacy from "@/components/ListingAlerts/ListingAlertsPrivacy";
import ListingAlertsFinalCta from "@/components/ListingAlerts/ListingAlertsFinalCta";

export default function ListingAlertsPage() {
    return (
        <main className="min-h-screen bg-slate-50 pb-[80px]">
            <Header />
            <ListingAlertsHero />
            <ListingAlertsHowItWorks />
            <ListingAlertsBenefits />
            <ListingAlertsForm />
            <ListingAlertsPrivacy />
            <ListingAlertsFinalCta />
            <Footer />
            <BottomNav />
        </main>
    );
}

