import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import { Link } from "react-router";
import profile from "../assets/profile.png";

const Hero = () => {
  const [showCvOptions, setShowCvOptions] = useState(false);
  const cvMenuRef = useRef(null);

  // CV download function
  const handleDownload = (cvUrl, filename) => {
    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setShowCvOptions(false);
  };

  useEffect(() => {
    if (!showCvOptions) return;
    const handleClickOutside = (event) => {
      if (cvMenuRef.current && !cvMenuRef.current.contains(event.target)) {
        setShowCvOptions(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showCvOptions]);

  // text
  const text = ["Web Developer and IT Support"];

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
      <h2 className="text-center w-[70%] text-2xl md:text-3xl font-bold mt-5">
        Hi I am <span className="text-orange-400">Easir Arafat,</span>
      </h2>
      {/* animated text */}
      <h1 className="text-3xl md:text-5xl w-full sm:w-3/4 font-bold text-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent mt-[-20px]">
        {text[0].split("").map((char, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 5 }}
            transition={{
              duration: 0.8,
              delay: index * 0.1,
              repeat: Infinity,
              repeatDelay: 5,
            }}
            className="inline-block"
          >
            {char === " " ? "\u00A0" : char}
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
        <div className="relative" ref={cvMenuRef}>
          <button
            onClick={() => setShowCvOptions((prev) => !prev)}
            className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-2 px-5 rounded-full hover:from-blue-700 hover:via-purple-700 hover:to-pink-600 transform hover:scale-105 transition duration-300"
            aria-haspopup="true"
            aria-expanded={showCvOptions}
            type="button"
          >
            Check Resume
          </button>
          {showCvOptions && (
            <div className="absolute left-1/2 z-10 mt-3 w-44 -translate-x-1/2 rounded-xl border border-white/20 bg-white/10 p-1.5 backdrop-blur-md">
              <button
                type="button"
                onClick={() =>
                  handleDownload(
                    "/Easir_Arafat_Resume_Deutsch.pdf",
                    "Easir_Arafat_Resume_Web.pdf"
                  )
                }
                className="w-full rounded-lg px-2.5 py-1.5 text-left text-xs text-white hover:bg-white/10"
              >
                For Web Developer
              </button>
              <button
                type="button"
                onClick={() =>
                  handleDownload(
                    "/Easir_Arafat_Resume_IT_Support.pdf",
                    "Easir_Arafat_Resume_IT_Support.pdf"
                  )
                }
                className="mt-1 w-full rounded-lg px-2.5 py-1.5 text-left text-xs text-white hover:bg-white/10"
              >
                For IT Support
              </button>
            </div>
          )}
        </div>
        <div>
          <Link to="#contact">
            <button className="border font-bold border-white px-10 py-2 rounded-full hover:border-blue-500">
              Hire Me
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
