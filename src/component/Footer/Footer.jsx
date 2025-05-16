import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-tr from-gray-950 via-black to-gray-900 text-white py-12 px-6 border-t-4 border-red-600 shadow-inner">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo and Tagline */}
        <div className="flex flex-col items-center md:items-start">
          <img src={logo} alt="Logo" className="h-12 mb-4" />
          <p className="text-gray-400 text-sm">
            Your ultimate gaming destination
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-xl font-semibold text-red-500 mb-4">
            Site Links
          </h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <Link to="/" className="hover:text-red-400">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-red-400">
                About
              </Link>
            </li>
            <li>
              <Link to="/tournaments" className="hover:text-red-400">
                Tournaments
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-red-500 mb-4">More</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <Link to="/winners" className="hover:text-red-400">
                Winners
              </Link>
            </li>
            <li>
              <Link to="/register" className="hover:text-red-400">
                Register
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-red-400">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact + Newsletter */}
        <div>
          <h3 className="text-xl font-semibold text-red-500 mb-4">
            Contact Us
          </h3>
          <ul className="space-y-3 text-sm text-gray-300">
            <li className="flex items-center">
              📧&nbsp;Tacticaltitans127@gmail.com
            </li>
            <li className="flex items-center">📞&nbsp;+1 (555) 123-4567</li>
            <li className="flex items-center">
              📍&nbsp;123 Gaming Street, City Name
            </li>
          </ul>

          <div className="mt-6">
            <h4 className="text-md font-medium mb-2">
              Subscribe to our newsletter
            </h4>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="bg-gray-800 text-white px-4 py-2 rounded-l w-full focus:outline-none focus:ring-2 focus:ring-red-600"
              />
              <button className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-r">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Tactical Titans Gaming. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
