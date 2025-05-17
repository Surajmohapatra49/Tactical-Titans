import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo.png";
import { Menu, X } from "lucide-react"; // You can use any icon library

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/tournaments", label: "Tournaments" },
  { to: "/winners", label: "Winners" },
  { to: "/contact", label: "Contact" },
];

const Header = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (path) =>
    location.pathname === path
      ? "text-red-500 after:scale-x-100"
      : "text-gray-300 hover:text-red-400 after:scale-x-0 hover:after:scale-x-100";

  return (
    <header className="fixed w-full top-0 left-0 bg-black bg-opacity-70 backdrop-blur-md border-b border-red-600 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center space-x-3"
          onClick={() => setMenuOpen(false)}
        >
          <img
            src={logo}
            alt="Logo"
            className="h-10 w-auto transition-transform duration-300 hover:scale-110"
          />
          <span className="text-3xl font-extrabold bg-gradient-to-r from-red-500 via-yellow-400 to-red-500 text-transparent bg-clip-text tracking-wide select-none">
            Titans Gaming
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-10">
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`relative font-semibold text-lg transition duration-300 ease-in-out pb-1 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[3px] after:w-full after:bg-gradient-to-r after:from-red-500 after:to-yellow-400 after:origin-left after:transition-transform after:duration-300 ${isActive(
                to
              )}`}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2 rounded-md text-gray-300 hover:text-red-400 focus:outline-none focus:ring-2 focus:ring-red-500"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden bg-black bg-opacity-90 border-t border-red-600 shadow-inner">
          <ul className="flex flex-col space-y-4 py-4 px-6 text-gray-300">
            {navLinks.map(({ to, label }) => (
              <li key={to}>
                <Link
                  to={to}
                  className={`block font-semibold text-lg transition duration-300 ease-in-out pb-1 after:content-[''] after:absolute relative after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-gradient-to-r after:from-red-500 after:to-yellow-400 after:origin-left after:transition-transform after:duration-300 ${
                    location.pathname === to
                      ? "text-red-500 after:scale-x-100"
                      : "hover:text-red-400 after:scale-x-0 hover:after:scale-x-100"
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
