import Link from "next/link";
export default function HeroSection() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white dark:bg-white">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <img
          src="/deptlogo.png"
          alt="Hero Image"
          className="w-64 h-64 object-contain rounded-full mb-8"
        />
      <h2 className="text-4xl font-bold text-black dark:text-black">3rd year IT department</h2>
      <p className="text-lg text-gray-900 dark:text-gray-900 mt-4">
        This is the 3rd year IT department page. Here you can find information about the courses, faculty, and events related to the IT department.
      </p>
      <div className="flex mt-6 space-x-4">
        <Link 
        href="/"
        className="px-6 py-2 bg-black text-white dark:bg-black dark:text-white rounded hover:opacity-80 transition">
          Back to Home
        </Link>
        <Link 
        href="/page1"
        className="px-6 py-2 bg-black text-white dark:bg-black dark:text-white rounded hover:opacity-80 transition">
          Page 1
        </Link>
        <Link 
        href="/page2"
        className="px-6 py-2 bg-black text-white dark:bg-black dark:text-white rounded hover:opacity-80 transition">
          Page 2
        </Link>
        <Link 
        href="/page4"
        className="px-6 py-2 bg-black text-white dark:bg-black dark:text-white rounded hover:opacity-80 transition">
          Page 4
        </Link>
      </div>
      </main>
    </div>
  );
}