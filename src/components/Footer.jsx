import React from "react";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router";

const Footer = () => {
  return (
    <div className="text-center mt-36">
      <h1 className="text-orange-400 text-lg font-bold">Easir Arafat</h1>
      <div className="flex gap-5 justify-center mt-3">
        <Link
          className="text-white hover:bg-clip-text hover:text-orange-400"
          to="#about"
        >
          About
        </Link>
        <Link
          className="text-white hover:bg-clip-text hover:text-orange-400"
          to="#skills"
        >
          Skills
        </Link>
        <Link
          className="text-white hover:bg-clip-text hover:text-orange-400"
          to="#experience"
        >
          Experience
        </Link>
        <Link
          className="text-white hover:bg-clip-text hover:text-orange-400"
          to="#projects"
        >
          Projects
        </Link>
        <Link
          className="text-white hover:bg-clip-text hover:text-orange-400"
          to="#education"
        >
          Education
        </Link>
      </div>
      <div className="flex justify-center gap-4">
        <button
          onClick={() =>
            window.open("https://www.facebook.com/riyadhbd2", "_blank")
          }
          className="mt-5 text-[#1877F2] text-xl hover:text-[#0F5AB6] transition duration-300"
        >
          <FaFacebookF />
        </button>
        <button
          onClick={() => window.open("https://x.com/riyadhbdt2", "_blank")}
          className="mt-5 text-white text-md hover:text-gray-400 transition duration-300"
        >
          <BsTwitterX />
        </button>
        <button
          onClick={() =>
            window.open("https://www.instagram.com/riyadh_bd2/", "_blank")
          }
          className="mt-5"
        >
          <FaInstagram className="text-[#E4405F] text-xl hover:text-[#833AB4] transition duration-300" />
        </button>
        <button
          onClick={() =>
            window.open("https://www.linkedin.com/in/earafat/", "_blank")
          }
          className="mt-5"
        >
          <FaLinkedin className="text-[#0A66C2] text-xl hover:text-[#004182] transition duration-300" />
        </button>
      </div>
      <p className="mt-3 pb-8">© 2025 Easir Arafat. All rights reserved.</p>
    </div>
  );
};

export default Footer;
