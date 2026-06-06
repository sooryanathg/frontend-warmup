import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white">
      <div className="flex justify-center px-6 py-4">
        <div className="flex items-center gap-8 bg-neutral-900 rounded-full px-10 py-3">
          <Link href="/" className="text-sm font-semibold text-white">
            Home
          </Link>
          <Link href="/about" className="text-sm text-gray-400 hover:text-white transition">
            About Us
          </Link>
          <Link href="/academics" className="text-sm text-gray-400 hover:text-white transition">
            Academics
          </Link>
          <Link href="/faculty" className="text-sm text-gray-400 hover:text-white transition">
            Faculty
          </Link>
          <Link href="/events" className="text-sm text-gray-400 hover:text-white transition">
            Events
          </Link>
          <Link href="/contact" className="text-sm text-gray-400 hover:text-white transition">
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
}