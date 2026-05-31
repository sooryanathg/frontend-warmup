import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black">
        <div className="flex flex-col items-center gap-8 text-center">
          <h1 className="text-4xl font-bold text-black dark:text-white">
            Welcome to Frontend Warmup
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-md">
            Explore our pages below to test your development skills.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-2xl">
          <Link
            href="/page1"
            className="flex items-center justify-center h-20 rounded-md border border-blue-200 bg-blue-50 hover:bg-blue-100 text-blue-700 font-medium transition-colors dark:border-blue-800 dark:bg-blue-950 dark:hover:bg-blue-900 dark:text-blue-300"
          >
            Page 1
          </Link>
          <Link
            href="/page2"
            className="flex items-center justify-center h-20 rounded-md border border-green-200 bg-green-50 hover:bg-green-100 text-green-700 font-medium transition-colors dark:border-green-800 dark:bg-green-950 dark:hover:bg-green-900 dark:text-green-300"
          >
            Page 2
          </Link>
          <Link
            href="/page3"
            className="flex items-center justify-center h-20 rounded-md border border-purple-200 bg-purple-50 hover:bg-purple-100 text-purple-700 font-medium transition-colors dark:border-purple-800 dark:bg-purple-950 dark:hover:bg-purple-900 dark:text-purple-300"
          >
            Page 3
          </Link>
          <Link
            href="/page4"
            className="flex items-center justify-center h-20 rounded-md border border-orange-200 bg-orange-50 hover:bg-orange-100 text-orange-700 font-medium transition-colors dark:border-orange-800 dark:bg-orange-950 dark:hover:bg-orange-900 dark:text-orange-300"
          >
            Page 4
          </Link>
        </div>
      </main>
    </div>
  );
}
