import { Link, NavLink, Outlet } from "react-router-dom";
import Footer from "./Footer";

export default function Header() {

  return (
    <>
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="flex items-center">
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/workflow-mark-orange-500.svg"
                  alt="Logo"
                />
                <span className="ml-2 text-xl font-semibold text-gray-900">
                  YourBrand
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-4">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `px-3 py-2 text-sm font-medium transition-colors ${
                    isActive ? "text-orange-700" : "text-gray-700"
                  }`
                }
              >
                Home
              </NavLink>
              <NavLink to="/about" className={({isActive})=>`px-3 py-2 ${isActive ? "text-orange-500" : "text-gray-700"}`}>
                About
              </NavLink>
              <NavLink to="/contact" className={({isActive})=>`px-3 py-2 ${isActive ? "text-orange-500" : "text-gray-700"}`}>
                Contact
              </NavLink>
              <NavLink to="/github" className={({isActive})=>`px-3 py-2 ${isActive ? "text-orange-500" : "text-gray-700"}`}>
                GitHub
              </NavLink>
              <NavLink to="/jokes" className={({isActive})=>`px-3 py-2 ${isActive ? "text-orange-500" : "text-gray-700"}`}>
                Jokes
              </NavLink>
            </nav>

            {/* Auth Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <Link
                to="/login"
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors"
              >
                Log in
              </Link>
              <Link
                to="/signup"
                className="px-4 py-2 rounded-md text-sm font-medium text-white bg-orange-600 hover:bg-orange-700 transition-colors shadow-sm"
              >
                Get started
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {/* Hamburger icon */}
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu (hidden by default) */}
        <div className="md:hidden hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink
              to="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900"
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900"
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900"
            >
              Contact
            </NavLink>
            <NavLink
              to="/github"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900"
            >
              GitHub
            </NavLink>
            <NavLink
              to="/jokes"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900"
            >
              Jokes
            </NavLink>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="px-5 space-y-1">
              <Link
                to="/login"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              >
                Log in
              </Link>
              <Link
                to="/signup"
                className="block w-full px-3 py-2 rounded-md text-base font-medium text-white bg-orange-600 hover:bg-orange-700 text-center"
              >
                Get started
              </Link>
            </div>
          </div>
        </div>
      </header>
      <Outlet />
      <Footer />
    </>
  );
}
