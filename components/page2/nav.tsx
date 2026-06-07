export default function Nav() {
  return (
    <nav className="flex items-center justify-between px-10 py-4 bg-gray-50 border-b border-gray-300">
      <h2 className="m-0 text-xl font-bold text-blue-600">
        IT Department 🚀
      </h2>

      <div className="flex gap-5">
        <a href="#" className="text-gray-700 no-underline hover:text-blue-600">
          Home
        </a>

        <a href="#" className="text-gray-700 no-underline hover:text-blue-600">
          About
        </a>

        <a href="#" className="text-gray-700 no-underline hover:text-blue-600">
          Contact
        </a>
      </div>
    </nav>
  );
}
