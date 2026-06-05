import Link from "next/link";

export default function Page3() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-white">
      <nav className="w-full py-4 px-16 bg-red-500 dark:bg-black shadow justify-items-center">
        <ul className="flex space-x-40">
          <li>
            <Link
              href="/"
              className="text-white dark:text-white hover:underline"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/page1"
              className="text-white dark:text-white hover:underline"
            >
              Page 1
            </Link>
          </li>
          <li>
            <Link
              href="/page2"
              className="text-white dark:text-white hover:underline"
            >
              Page 2
            </Link>
          </li>
          <li>
            <Link
              href="/page3"
              className="text-white dark:text-white hover:underline"
            >
              Page 3
            </Link>
          </li>
        </ul>
      </nav>
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-white">
        <img
          src="/deptlogo.png"
          alt="3rd Year"
          className="w-64 h-64 object-contain mb-8 rounded-full border-4 border-gray-300"
        />
        <h1 className="text-4xl font-bold text-black dark:text-black mb-6">3rd Year</h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8">
          This is Page 3. Add your content here.
        </p>
        <Link
          href="/"
          className="px-6 py-2 bg-black text-black dark:bg-black dark:text-white rounded hover:opacity-80 transition"
        >
          Back to Home
        </Link>
      </main>
    </div>
  );
}
