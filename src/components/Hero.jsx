import { motion } from "framer-motion";
import React from "react";
import profile from "../assets/profile.png";

const Hero = () => {
  return (
    <section
      id="hero"
      className="container mx-auto flex items-center flex-col gap-8 mt-20"
    >
      <motion.img
        src={profile} // Replace with your actual photo path
        alt="Profile Photo"
        className="rounded-full w-72 object-cover mt-10" // Tailwind classes for styling, modify as needed
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      />

      {/*  */}
      <h1 className="text-center w-[70%] text-xl font-bold">
        <span className="text-4xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          I am Easir Arafat,
        </span>{" "}
        <motion.h1
          className="text-4xl font-bold text-center text-white mt-3"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.1, color: "#ffcc00" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Full-Stack Web Developer Based in Germany.
        </motion.h1>
      </h1>
      <p className="w-[50%] text-center text-base leading-7 text-gray-400">
        I am committed to continuous learning and delivering clean, efficient
        code to create impactful digital experiences. With a keen eye for detail
        and a collaborative mindset, I am eager to contribute to innovative
        projects and grow as a developer.
      </p>
      <div className="flex flex-col md:flex-row items-center gap-5 mb-5">
        <div>
          <button
            onClick={() =>
              window.open(
                "https://docs.google.com/document/d/1Z53LJrIQHeEkjki2OHqwlOGD7cJoXyo-_Gdn5QF-CXA/edit?usp=sharing",
                "_blank"
              )
            }
            className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-2 px-5 rounded-full hover:from-blue-700 hover:via-purple-700 hover:to-pink-600 transform hover:scale-105 transition duration-300"
          >
            Check Resume
          </button>
        </div>
        <div>
          <button className="border font-bold border-white px-10 py-2 rounded-full hover:border-blue-500">
            Hire Me
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
