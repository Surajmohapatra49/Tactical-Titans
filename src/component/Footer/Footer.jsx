import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { Send } from "lucide-react";
import emailjs from "@emailjs/browser";

const Footer = () => {
  const formRef = useRef();
  const [sending, setSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();
    setSending(true);
    setError("");

    try {
      await emailjs.sendForm(
        "service_zp3xqtf",
        "template_7h6ed92",
        formRef.current,
        "yvWd1LOmDczF0qLHF"
      );
      setSubmitted(true);
      formRef.current.reset();
      setTimeout(() => setSubmitted(false), 3500);
    } catch (err) {
      console.error(err);
      setError("Oops! Something went wrong, try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <footer className="bg-gradient-to-tr from-black via-gray-900 to-gray-800 text-gray-200 py-16 px-6 border-t-4 border-red-600 shadow-lg">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Logo & Tagline */}
        <div className="flex flex-col items-center md:items-start space-y-4">
          <img
            src={logo}
            alt="Tactical Titans Logo"
            className="h-14 w-auto drop-shadow-xl"
          />
          <p className="text-gray-400 text-center md:text-left max-w-xs font-light">
            The ultimate destination for passionate gamers and competitive
            titans.
          </p>
          <div className="flex space-x-4 mt-2">
            {/* Social Icons placeholders */}
            <a
              href="#"
              className="text-red-500 hover:text-red-600 transition"
              aria-label="Twitter"
            >
              <svg
                className="w-6 h-6 fill-current"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
              </svg>
            </a>
            <a
              href="#"
              className="text-red-500 hover:text-red-600 transition"
              aria-label="Discord"
            >
              <svg
                className="w-6 h-6 fill-current"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M20 0H4a4 4 0 00-4 4v16a4 4 0 004 4h16a4 4 0 004-4V4a4 4 0 00-4-4zm-5.46 15s-.5-.6-.92-1.13c1.83-.52 2.52-1.43 2.52-1.43a4.49 4.49 0 01-2.48 2.56zm-5.07-1.32c-.42.53-.92 1.13-.92 1.13a4.49 4.49 0 01-2.48-2.56s.69.91 2.52 1.43z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Site Links */}
        <div>
          <h3 className="text-2xl font-bold text-red-600 mb-6 tracking-wide uppercase">
            Quick Links
          </h3>
          <ul className="space-y-4 font-medium text-gray-300">
            {[
              { path: "/", label: "Home" },
              { path: "/about", label: "About" },
              { path: "/tournaments", label: "Tournaments" },
              { path: "/winners", label: "Winners" },
              { path: "/contact", label: "Contact" },
            ].map(({ path, label }) => (
              <li key={path}>
                <Link
                  to={path}
                  className="hover:text-red-500 transition-colors duration-300"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-2xl font-bold text-red-600 mb-6 tracking-wide uppercase">
            Contact Us
          </h3>
          <ul className="space-y-5 text-gray-400 font-light">
            <li className="flex items-center gap-3">
              <span role="img" aria-label="email">
                📧
              </span>
              <a
                href="mailto:tacticaltitans127@gmail.com"
                className="hover:text-red-500 transition"
              >
                tacticaltitans127@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-3">
              <span role="img" aria-label="phone">
                📞
              </span>
              <a
                href="tel:+15551234567"
                className="hover:text-red-500 transition"
              >
                +1 (555) 123-4567
              </a>
            </li>
            <li className="flex items-center gap-3">
              <span role="img" aria-label="location">
                📍
              </span>
              123 Gaming Street, GameCity
            </li>
          </ul>
        </div>

        {/* Contact Form */}
        <div>
          <h3 className="text-2xl font-bold text-red-600 mb-6 tracking-wide uppercase">
            Send a Message
          </h3>
          {submitted && (
            <p className="mb-4 text-green-400 font-semibold">
              Message sent successfully!
            </p>
          )}
          {error && <p className="mb-4 text-red-400 font-semibold">{error}</p>}

          <form
            ref={formRef}
            onSubmit={sendMessage}
            className="space-y-4 text-gray-300"
          >
            <input
              type="text"
              name="from_name"
              placeholder="Your Name"
              required
              className="w-full rounded-md bg-gray-900 border border-gray-700 px-4 py-2 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-600 transition"
            />
            <input
              type="email"
              name="from_email"
              placeholder="Your Email"
              required
              className="w-full rounded-md bg-gray-900 border border-gray-700 px-4 py-2 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-600 transition"
            />
            <textarea
              name="message"
              rows="3"
              placeholder="Your Message"
              required
              className="w-full rounded-md bg-gray-900 border border-gray-700 px-4 py-2 placeholder-gray-500 resize-none focus:outline-none focus:ring-2 focus:ring-red-600 transition"
            />
            <button
              type="submit"
              disabled={sending}
              className={`w-full bg-red-600 hover:bg-red-700 py-3 rounded-md font-semibold flex justify-center items-center gap-2 transition ${
                sending ? "opacity-60 cursor-not-allowed" : ""
              }`}
            >
              <Send className="w-5 h-5" />
              {sending ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="mt-16 border-t border-gray-700 pt-6 text-center text-xs text-gray-500 font-light tracking-wide select-none">
        &copy; {new Date().getFullYear()} Tactical Titans Gaming. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
