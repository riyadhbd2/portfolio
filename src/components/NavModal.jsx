import React from "react";

const NavModal = () => {
  return (
    <div>
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
    </div>
  );
};

export default NavModal;
