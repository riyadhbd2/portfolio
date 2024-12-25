import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="text-center">
      <h1 className="text-violet-600 text-lg font-bold">Easir Arafat</h1>
      <div className="flex gap-5 justify-center mt-3">
        <p>About</p>
        <p>Skills</p>
        <p>Experience</p>
        <p>Projects</p>
        <p>Education</p>
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
