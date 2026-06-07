"use client";

export default function Card() {
  return (
    <div className="max-w-[300px] mx-5 my-5 rounded-2xl bg-white p-5 shadow-card text-center font-sans">
      <h2 className="text-2xl font-semibold text-blue-600 mb-3">
        Frontend Basics
      </h2>

      <p className="text-base text-slate-600 mb-6">
        Learn HTML, CSS, and JavaScript to kickstart your journey.
      </p>

      <button className="btn-primary">
        Explore
      </button>
    </div>
  );
}

