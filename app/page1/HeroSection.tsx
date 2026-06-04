import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="min-h-screen bg-[#fafafa] px-6 py-8 text-[#0a0a0a] md:px-12">
      <div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-6xl flex-col justify-between">
        
        <div className="flex items-center justify-between text-sm font-medium text-zinc-600">
          <p>Digital Campus</p>
          <p>IT Department</p>
        </div>

        <div className="mx-auto max-w-5xl text-center">
          <h1 className="text-5xl font-semibold tracking-tight md:text-7xl lg:text-8xl">
            Build. Create. Connect.
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-base leading-7 text-zinc-600 md:text-lg">
            A modern digital space for students, faculty, events, projects, and
            ideas from the IT Department.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="#"
              className="w-full rounded-full bg-[#0a0a0a] px-7 py-3 text-center text-sm font-medium text-white sm:w-auto"
            >
              Explore Now
            </Link>

            <Link
              href="#"
              className="w-full rounded-full border border-zinc-300 px-7 py-3 text-center text-sm font-medium text-[#0a0a0a] sm:w-auto"
            >
              View Projects
            </Link>
          </div>
        </div>
          <p className="mx-auto max-w-2xl text-center text-sm leading-6 text-zinc-500 md:text-base">
  Empowering students through technology, innovation, and collaborative
  learning experiences.
</p>
        
      </div>
    </section>
  );
}