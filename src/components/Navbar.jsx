/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { FaGreaterThan, FaLessThan, FaMoon, FaSun } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

const Navbar = ({ theme, onThemeToggle }) => {
  const [scrolling, setScrolling] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = () => {
    setMenuOpen(false);
  };

  return (
    <div
      className={`fixed top-0 z-20 flex w-full items-center justify-between px-4 text-[var(--text-primary)] transition-all duration-300 sm:px-6 lg:px-12 ${
        scrolling ? "theme-navbar py-3" : "bg-transparent py-2"
      }`}
    >
      <div>
        <Link
          to="/"
          className="theme-section-title hidden text-2xl font-bold lg:block"
        >
          <p className="flex items-center justify-center">
            <FaLessThan /> <span className="text-2xl">Easir Arafat</span>{" "}
            <FaGreaterThan />
          </p>
        </Link>

        {menuOpen ? (
          <button
            className="lg:hidden"
            onClick={() => setMenuOpen(false)}
            type="button"
            aria-label="Close navigation menu"
          >
            <IoClose className="text-3xl text-[var(--text-primary)]" />
          </button>
        ) : (
          <button
            className="lg:hidden"
            onClick={() => setMenuOpen(true)}
            type="button"
            aria-label="Open navigation menu"
          >
            <RxHamburgerMenu className="text-3xl text-[var(--text-primary)]" />
          </button>
        )}

        {menuOpen && (
          <div className="theme-mobile-menu absolute left-0 top-14 rounded-2xl p-2">
            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    className="theme-nav-link block rounded-full px-4 py-2 text-sm font-medium"
                    to={link.href}
                    onClick={handleNavClick}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <ul className="mr-10 hidden list-none items-center gap-1 text-base lg:flex">
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link
              to={link.href}
              className="theme-nav-link rounded-full px-5 py-2 text-sm font-medium"
              onClick={handleNavClick}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-2 sm:gap-3">
        <button
          onClick={onThemeToggle}
          className="theme-button-secondary gap-2 px-3 py-2 text-sm font-semibold"
          type="button"
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
        >
          {theme === "dark" ? (
            <FaSun className="text-sm text-[var(--accent)]" />
          ) : (
            <FaMoon className="text-sm text-[var(--accent)]" />
          )}
          <span className="hidden sm:inline">
            {theme === "dark" ? "Light Mode" : "Dark Mode"}
          </span>
        </button>

        <button
          onClick={() => window.open("https://github.com/riyadhbd2", "_blank")}
          className="theme-button-primary px-5 py-2"
          type="button"
        >
          <span className="hidden sm:inline">Github Profile</span>
          <span className="sm:hidden">GitHub</span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
