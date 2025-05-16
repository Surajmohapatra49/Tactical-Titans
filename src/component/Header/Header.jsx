import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo.png";

const Header = () => {
  const location = useLocation();

  const isActive = (path) =>
    location.pathname === path
      ? "text-red-500 border-b-2 border-red-500"
      : "text-gray-700 hover:text-red-500";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img
            src={logo}
            alt="Logo"
            className="h-10 w-auto drop-shadow-sm hover:scale-105 transition"
          />
          <span className="text-xl font-extrabold text-gray-800">
            Titans Gaming
          </span>
        </Link>

        {/* Navigation */}
        <nav>
          <ul className="flex space-x-6 text-md font-medium">
            <li>
              <Link
                to="/"
                className={`transition duration-200 pb-1 ${isActive("/")}`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={`transition duration-200 pb-1 ${isActive("/about")}`}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/tournaments"
                className={`transition duration-200 pb-1 ${isActive(
                  "/tournaments"
                )}`}
              >
                Tournaments
              </Link>
            </li>
            <li>
              <Link
                to="/winners"
                className={`transition duration-200 pb-1 ${isActive(
                  "/winners"
                )}`}
              >
                Winners
              </Link>
            </li>
            <li>
              <Link
                to="/footer"
                className={`transition duration-200 pb-1 ${isActive(
                  "/footer"
                )}`}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
