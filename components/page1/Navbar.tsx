import MobileMenu from "./MobileMenu";
export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-black/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <div className="text-lg text-white  font-bold tracking-tight">
          GEC Palakkad
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a
            href="#hero"
            className="text-zinc-300 transition hover:text-white"
          >
            Home
          </a>

          <a
            href="#features"
            className="text-zinc-300 transition hover:text-white"
          >
            Features
          </a>

          <a
            href="#about"
            className="text-zinc-300 transition hover:text-white"
          >
            About
          </a>
        </nav>
        <MobileMenu />

        {/* CTA Button */}
        <button className="rounded-full bg-white px-9 py-2 text-sm font-medium  text-black transition hover:opacity-90">
          Get Started
        </button>

      </div>
    </header>
  );
}