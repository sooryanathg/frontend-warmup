"use client";

import { useState } from "react";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative md:hidden">
      <button
        onClick={() => setOpen(!open)}
        className="text-sm font-medium"
      >
        Menu
      </button>

      {open && (
        <div className="absolute right-0 top-10 rounded-lg border bg-black p-4 shadow-lg">
          <div className="flex flex-col gap-3">
            <a href="#hero">Home</a>
            <a href="#features">Features</a>
            <a href="#about">About</a>
          </div>
        </div>
      )}
    </div>
  );
}