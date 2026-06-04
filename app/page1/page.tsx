import HeroSection from "./HeroSection";

export default function Page1() {
  return (
    <main>
      <HeroSection
        eyebrow="Digital Campus"
        departmentName="IT Department"
        title="Build. Create. Connect."
        description="A modern digital space for students, faculty, events, projects, and ideas from the IT department."
        primaryAction={{
          label: "Explore Now",
          href: "#",
        }}
        secondaryAction={{
          label: "View Projects",
          href: "#",
        }}
      />
    </main>
  );
}