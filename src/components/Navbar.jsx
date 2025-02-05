import React, { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router";
import NavModal from "./NavModal";

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const gradientStyle = {
    background: "linear-gradient(267deg, #DA7C25 0.36%, #B923E1 102.06%)",
  };

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
    <div className={`flex items-center justify-around py-2 fixed top-0 z-10 transition-all duration-300 w-full ${scrolling ? "bg-gray-900 text-white shadow-lg" : "bg-transparent"} `}>
      <div>
        <Link to="/">
          {/* <img className="hidden lg:block rounded-full w-20" src={profile_logo} alt="" /> */}
          <h1 class>Easir Arafat</h1>
          <RxHamburgerMenu
            onClick={toggleModal}
            className="text-3xl lg:hidden"
          />
        </Link>
      </div>

      {/*  */}

      {isModalOpen && <NavModal></NavModal>}

      {/*  */}
      <ul className="hidden lg:flex items-center list-none gap-1 text-base">
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
      <div>
        <button
          onClick={() => window.open("https://github.com/riyadhbd2", "_blank")}
          style={gradientStyle}
          className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-2 px-5 rounded-full hover:from-blue-700 hover:via-purple-700 hover:to-pink-600 transform hover:scale-105 transition duration-300"
        >
          Github Profile
        </button>
      </div>
    </div>
  );
};

export default Navbar;
