import React, { useEffect, useState } from "react";
import { FaGreaterThan, FaLessThan } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router";

const Navbar = () => {

  const [scrolling, setScrolling] = useState(false);

  const [menuOpen, setMenuOpen] = useState(false);

  // scrolling bg useffect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`flex items-center justify-around py-2 fixed top-0 z-10 transition-all duration-300 w-full ${
        scrolling ? "bg-gray-900 text-white shadow-lg" : "bg-transparent"
      } `}
    >
      {/* 1st part */}
      <div>
        {/* Logo or Navbar Title */}
        <Link
          to="/"
          className="hidden lg:block text-2xl font-bold text-orange-400"
        >
          {" "}
          <p className="flex items-center justify-center">
            <FaLessThan />  <span className="text-2xl">Easir Arafat</span> <FaGreaterThan />{" "}
          </p>
        </Link>
        {/* Burger Menu Button */}
        <button className="lg:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          <RxHamburgerMenu className="w-6 h-6 text-white" />
        </button>

        {/* Small Transparent Dropdown for Mobile Menu */}
        {menuOpen && (
          <div className="absolute top-12 left-0 bg-transparent shadow-lg p-3 rounded-lg">
            <ul className="flex flex-col gap-2 text-white text-xl  bg-opacity-75 p-3 rounded-lg">
              <li className="text-white py-2 px-5 rounded-full hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                <Link to="#about">About</Link>
              </li>
              <li className="text-white py-2 px-5 rounded-full hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                <Link to="#skills">Skills</Link>
              </li>
              <li className="text-white py-2 px-5 rounded-full hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                <Link to="#projects">Projects</Link>
              </li>
              <li className="text-white py-2 px-5 rounded-full hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                <Link to="#education">Education</Link>
              </li>
              <li className="text-white py-2 px-5 rounded-full hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                <Link to="#contact">Contact</Link>
              </li>
            </ul>
          </div>
        )}
      </div>
      {/* 2nd part */}
      <ul className="hidden lg:flex items-center list-none gap-1 text-base">
        <li className="text-white py-2 px-5 rounded-full hover:bg-clip-text hover:text-transparent hover:bg-orange-400">
          <Link to="#about" className="text-lg">About</Link>
        </li>
        <li className="text-white py-2 px-5 rounded-full hover:bg-clip-text hover:text-transparent hover:bg-orange-400">
          <Link to="#skills" className="text-lg">Skills</Link>
        </li>
        <li className="text-white py-2 px-5 rounded-full hover:bg-clip-text hover:text-transparent hover:bg-orange-400">
          <Link to="#projects" className="text-lg">Projects</Link>
        </li>
        <li className="text-white py-2 px-5 rounded-full hover:bg-clip-text hover:text-transparent hover:bg-orange-400">
          <Link to="#education" className="text-lg">Education</Link>
        </li>
        <li className="text-white py-2 px-5 rounded-full hover:bg-clip-text hover:text-transparent hover:bg-orange-400">
          <Link to="#contact" className="text-lg">Contact</Link>
        </li>
      </ul>
      {/* 3rd part */}
      <div>
        <button
          onClick={() => window.open("https://github.com/riyadhbd2", "_blank")}
          className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-2 px-5 rounded-full hover:from-blue-700 hover:via-purple-700 hover:to-pink-600 transform hover:scale-105 transition duration-300"
        >
          Github Profile
        </button>
      </div>
    </div>
  );
};

export default Navbar;
