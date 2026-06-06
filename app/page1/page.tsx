import HeroSection from "./HeroSection";
import MouseFollower from "./MouseFollower";

export default function Page1() {
  return (
    <main className="bg-[#fafafa] text-[#0a0a0a]">
      <MouseFollower />
      <HeroSection />
    </main>
  );
}