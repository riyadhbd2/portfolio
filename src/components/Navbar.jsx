import React from "react";
import profile_logo from "../assets/profile_logo.jpg";

const Navbar = () => {
  const gradientStyle = {
    background: "linear-gradient(267deg, #DA7C25 0.36%, #B923E1 102.06%)",
  };
  return (
    <div className="flex items-center justify-around mx-8 my-5">
      <img className="w-20" src={profile_logo} alt="" />
      <ul className="flex items-center list-none gap-14 text-sm">
        <li>About</li>
        <li>Skills</li>
        <li>Experience</li>
        <li>Projects</li>
        <li>Education</li>
      </ul>
      <div>
        <button style={gradientStyle} className="px-4 py-2 rounded-full transform hover:scale-105 transition duration-300" >Github Profile</button>
      </div>
    </div>
  );
};

export default Navbar;
