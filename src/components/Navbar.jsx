import React from "react";
import profile_logo from "../assets/profile_logo.jpg";
import { Link } from "react-router";



const Navbar = () => {
  const gradientStyle = {
    background: "linear-gradient(267deg, #DA7C25 0.36%, #B923E1 102.06%)",
  };
  return (
    <div className="flex items-center justify-around py-4 border">
      <img className="w-20" src={profile_logo} alt="" />
      <ul className="lg:flex items-center list-none gap-10 text-base">
        <li><Link to="#about">About</Link></li>
        <li><Link to="#skills">Skills</Link></li>
        <li><Link to="#projects">Projects</Link></li>
        <li><Link to="#education">Education</Link></li>
        <li><Link to="#contact">Contact</Link></li>
      </ul>
      <div>
        <button style={gradientStyle} className="px-4 py-2 rounded-full transform hover:scale-105 transition duration-300" >Github Profile</button>
      </div>

    </div>
  );
};

export default Navbar;
