import HeroSection from "../../components/page1/HeroSection";
import MouseFollower from "../../components/page1/MouseFollower";

export default function Page1() {
  return (
    <main className="bg-[#fafafa] text-[#0a0a0a]">
      <MouseFollower />
      <HeroSection />
    </main>
  );
}