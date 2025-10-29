export default function Navbar() {
  return (
    <nav className="w-full py-4 px-8   flex justify-between items-center rounded-4xl bg-[#F5F5F5]">
      <div className="text-2xl font-bold text-black-600">MyLogo</div>

      <ul className="hidden md:flex space-x-8 text-gray-700 font-medium bg-white py-3 px-10 rounded-4xl">
        <li>
          <a href="#" className="hover:text-blue-600">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-blue-600">
            About
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-blue-600">
            Services
          </a>
        </li>
      </ul>

      <a
        href="#"
        className="bg-white border-1 text-black px-4 py-2 rounded-2xl hover:bg-blue-700 transition"
      >
        Contact Us
      </a>
    </nav>
  );
}
