import HeroSection from "../../components/page1/HeroSection";
import MouseFollower from "../../components/page1/MouseFollower";
import Navbar from "../../components/page1/Navbar";
import Footer from "../../components/page1/Footer";

export default function Page1() {
  return (
    <main className="bg-[#fafafa] text-[#0a0a0a]">
      <Navbar />
      <MouseFollower />
      <HeroSection />
      <Footer />
    </main>
  );
}