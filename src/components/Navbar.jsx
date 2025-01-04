import React from "react";
import profile_logo from "../assets/profile_logo.jpg";
import { Link } from "react-router";



const Navbar = () => {
  const gradientStyle = {
    background: "linear-gradient(267deg, #DA7C25 0.36%, #B923E1 102.06%)",
  };
  return (
    <div className="flex items-center justify-around py-2 sticky top-0 z-10 bg-black">
      <Link to="/"><img className="w-20 rounded-full" src={profile_logo} alt="" /></Link>
      <ul className="lg:flex items-center list-none gap-1 text-base">
        <li className="text-white py-2 px-5 rounded-full hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"><Link to="#about">About</Link></li>
        <li className="text-white py-2 px-5 rounded-full hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"><Link to="#skills">Skills</Link></li>
        <li className="text-white py-2 px-5 rounded-full hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"><Link to="#projects">Projects</Link></li>
        <li className="text-white py-2 px-5 rounded-full hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"><Link to="#education">Education</Link></li>
        <li className="text-white py-2 px-5 rounded-full hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"><Link to="#contact">Contact</Link></li>
      </ul>
      <div>
        <button onClick={() => window.open('https://github.com/riyadhbd2', '_blank')} style={gradientStyle} className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-2 px-5 rounded-full hover:from-blue-700 hover:via-purple-700 hover:to-pink-600 transform hover:scale-105 transition duration-300" >Github Profile</button>
      </div>

    </div>
  );
};

export default Navbar;
