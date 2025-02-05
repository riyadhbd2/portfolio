import { motion } from "framer-motion";
import React from "react";
import profile from "../assets/profile.png";

const Hero = () => {
  const text = "Full- Stack Web Developer Based in Germany";
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

      {/* text */}
      <h2 className="text-center w-[70%] text-2xl font-bold mt-5">Hi I am <span className="text-orange-400">Easir Arafat,</span></h2>
      {/* animated text */}
      <h1 className="text-3xl font-bold text-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent mt-[-20px]">
        {text.split("").map((char, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 5 }}
            transition={{
              duration: 0.8, // Slow fade-in per letter
              delay: index * 0.1, // Stagger animation per letter
              repeat: Infinity, // Repeat animation indefinitely
              repeatDelay: 5, // Wait 5 seconds before restarting
            }}
            className="inline-block"
          >
            {char === " " ? "\u00A0" : char} {/* Preserve spaces */}
          </motion.span>
        ))}
      </h1>
      <p className="w-[50%] text-center text-base leading-7 text-gray-400 mt-[-10px]">
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
