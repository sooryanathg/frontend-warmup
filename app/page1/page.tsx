import Link from "next/link";

export default function Page1() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black">
        <h1 className="text-4xl font-bold text-black dark:text-white mb-6">Page 1</h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8">
          This is Page 1. Add your content here.
        </p>
        <Link
          href="/"
          className="px-6 py-2 bg-black text-white dark:bg-white dark:text-black rounded hover:opacity-80 transition"
        >
          Back to Home
        </Link>
      </main>
    </div>
  );
}
