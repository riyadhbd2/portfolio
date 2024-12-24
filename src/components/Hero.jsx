import React from "react";
import profile from "../assets/profile.png";

const Hero = () => {
  return (
    <div className="flex items-center flex-col gap-8">
      <img className="mt-28 w-80" src={profile} alt="" />
      <h1 className="text-center w-[70%] text-2xl font-bold">
        <span className="text-4xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          I am Easir Arafat,
        </span>{" "}
        Full-Stack Web Developer Based in Germany.
      </h1>
      <p className="w-[50%] text-center text-base leading-7">
        I am committed to continuous learning and delivering clean, efficient
        code to create impactful digital experiences. With a keen eye for detail
        and a collaborative mindset, I am eager to contribute to innovative
        projects and grow as a developer."
      </p>
      <div className="flex items-center gap-5">
        <div>
          <button className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-2 px-5 rounded-full hover:from-blue-700 hover:via-purple-700 hover:to-pink-600 transform hover:scale-105 transition duration-300">
            Check Resume
          </button>
        </div>
        <div>
          <button className="border border-white px-5 py-2 rounded-full hover:border-blue-500">
            Connect Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;