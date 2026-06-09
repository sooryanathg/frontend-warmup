"use client";

import { useState } from "react";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-50 border-b border-gray-300">
      <div className="flex items-center justify-between px-6 py-4">
        <h2 className="text-xl font-bold text-blue-600">
          IT Department 🚀
        </h2>

        <div className="hidden md:flex gap-5">
          <a href="#" className="text-gray-700 hover:text-blue-600">
            Home
          </a>

          <a href="#" className="text-gray-700 hover:text-blue-600">
            About
          </a>

          <a href="#" className="text-gray-700 hover:text-blue-600">
            Contact
          </a>
        </div>

        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {menuOpen && (
        <div className="flex flex-col gap-3 px-6 pb-4 md:hidden">
          <a href="#" className="text-gray-700 hover:text-blue-600">
            Home
          </a>

          <a href="#" className="text-gray-700 hover:text-blue-600">
            About
          </a>

          <a href="#" className="text-gray-700 hover:text-blue-600">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}
