import HeroSection from "../../components/page1/HeroSection";
import MouseFollower from "../../components/page1/MouseFollower";
import Navbar from "../../components/page1/Navbar";
import Footer from "../../components/page1/Footer";
import FeatureCards from "../../components/page1/FeatureCards";
import FAQSection from "../../components/page1/FAQSection";
import TabsSection from "../../components/page1/TabsSection";
import AnnouncementBar from "../../components/page1/AnnouncementBar";

export default function Page1() {
  return (
    <main className="bg-[#fafafa] text-[#0a0a0a]">
      
      <Navbar />
      <AnnouncementBar />
      <MouseFollower />
      <HeroSection />
      <FeatureCards />
      <FAQSection />
      <TabsSection />
      <Footer />
    </main>
  );
}