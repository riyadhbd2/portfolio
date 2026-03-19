import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import profile from "../assets/profile.png";

const Hero = () => {
  const [showCvOptions, setShowCvOptions] = useState(false);
  const cvMenuRef = useRef(null);

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

  const text = ["Web Developer and IT Support"];

  return (
    <section
      id="about"
      className="container mx-auto mt-20 flex flex-col items-center gap-8 px-4 sm:px-6"
    >
      <motion.img
        src={profile}
        alt="Profile Photo"
        className="mt-10 h-64 w-64 rounded-full border-4 border-[var(--border-strong)] object-cover shadow-[0_24px_60px_-28px_var(--shadow-color)] sm:h-72 sm:w-72"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      />

      <h2 className="mt-5 w-full text-center text-2xl font-bold text-[var(--text-primary)] md:text-3xl">
        Hi I am <span className="theme-section-title">Easir Arafat,</span>
      </h2>

      <h1 className="theme-hero-gradient mt-[-20px] w-full bg-clip-text text-center text-3xl font-bold text-transparent md:text-5xl sm:w-3/4">
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

      <p className="theme-section-copy mt-[-10px] max-w-2xl text-center text-base leading-7">
        I am committed to continuous learning and delivering clean, efficient
        code to create impactful digital experiences. With a keen eye for detail
        and a collaborative mindset, I am eager to contribute to innovative
        projects and grow as a developer.
      </p>

      <div className="mb-5 flex flex-col items-center gap-5 md:flex-row">
        <div className="relative" ref={cvMenuRef}>
          <button
            onClick={() => setShowCvOptions((prev) => !prev)}
            className="theme-button-primary px-5 py-2"
            aria-haspopup="true"
            aria-expanded={showCvOptions}
            type="button"
          >
            Check Resume
          </button>

          {showCvOptions && (
            <div className="theme-menu absolute left-1/2 z-10 mt-3 w-44 -translate-x-1/2 rounded-xl p-1.5">
              <button
                type="button"
                onClick={() =>
                  handleDownload(
                    "/Easir_Arafat_Resume_Deutsch.pdf",
                    "Easir_Arafat_Resume_Web.pdf"
                  )
                }
                className="theme-menu-item w-full rounded-lg px-2.5 py-1.5 text-left text-xs"
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
                className="theme-menu-item mt-1 w-full rounded-lg px-2.5 py-1.5 text-left text-xs"
              >
                For IT Support
              </button>
            </div>
          )}
        </div>

        <Link
          to="#contact"
          className="theme-button-secondary px-10 py-2 font-bold"
        >
          Hire Me
        </Link>
      </div>
    </section>
  );
};

export default Hero;
