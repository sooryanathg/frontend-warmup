import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="min-h-screen bg-[#fafafa] px-6 py-8 text-[#0a0a0a] md:px-12">
      <div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-6xl flex-col justify-between">
        
        {/* Top Bar */}
        <div className="flex items-center justify-between text-sm font-medium text-zinc-600">
          <p className="transition-all duration-300 hover:text-black hover:tracking-wide">
            Digital Campus
          </p>

          <p className="transition-all duration-300 hover:text-black hover:tracking-wide">
            IT Department
          </p>
        </div>

        {/* Hero Content */}
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-zinc-500 transition-all duration-300 hover:tracking-[0.4em]">
            Innovation starts here
          </p>

          <h1 className="text-5xl font-semibold tracking-tight transition-all duration-500 hover:scale-[1.03] hover:tracking-normal md:text-7xl lg:text-8xl">
            Build. Create. Connect.
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-base leading-7 text-zinc-600 transition-colors duration-300 hover:text-zinc-800 md:text-lg">
            A modern digital space for students, faculty, events, projects, and
            ideas from the IT Department.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="#"
              className="w-full rounded-full bg-[#0a0a0a] px-7 py-3 text-center text-sm font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-xl active:scale-95 sm:w-auto"
            >
              Explore Now
            </Link>

            <Link
              href="#"
              className="w-full rounded-full border border-zinc-300 px-7 py-3 text-center text-sm font-medium text-[#0a0a0a] transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-zinc-100 active:scale-95 sm:w-auto"
            >
              View Projects
            </Link>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="text-center">
          <p className="mx-auto max-w-2xl text-sm leading-6 text-zinc-500 transition-colors duration-300 hover:text-zinc-700 md:text-base">
            Empowering students through technology, innovation, and collaborative
            learning experiences.
          </p>
        </div>

      </div>
    </section>
  );
}