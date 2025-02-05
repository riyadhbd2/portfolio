import React from "react";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router";

const Footer = () => {
  return (
    <div className="text-center mt-36">
      <h1 className="text-orange-400 text-lg font-bold">
        Easir Arafat
      </h1>
      <div className="flex gap-5 justify-center mt-3">
        <Link
          className="text-white hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r from-blue-600 via-purple-600 to-red-600"
          to="#about"
        >
          About
        </Link>
        <Link
          className="text-white hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r from-blue-600 via-purple-600 to-red-600"
          to="#skills"
        >
          Skills
        </Link>
        <Link
          className="text-white hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r from-blue-600 via-purple-600 to-red-600"
          to="#experience"
        >
          Experience
        </Link>
        <Link
          className="text-white hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r from-blue-600 via-purple-600 to-red-600"
          to="#projects"
        >
          Projects
        </Link>
        <Link
          className="text-white hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r from-blue-600 via-purple-600 to-red-600"
          to="#education"
        >
          Education
        </Link>
      </div>
      <div className="flex justify-center gap-4">
        <p className="mt-5">
          <FaFacebookF />
        </p>
        <p className="mt-5">
          <BsTwitterX />
        </p>
        <p className="mt-5">
          <FaInstagram />
        </p>
        <p className="mt-5">
          <FaLinkedin />
        </p>
      </div>
      <p className="mt-8 pb-8">© 2024 Easir Arafat. All rights reserved.</p>
    </div>
  );
};

export default Footer;
