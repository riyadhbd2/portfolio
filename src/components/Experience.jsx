import { motion } from "framer-motion";
import React from "react";
import preview from "../assets/preview.png";
import tech_point from "../assets/tech_point.png";

const Experience = () => {
  return (
    <section
      id="experience"
      className="container mx-auto flex flex-col items-center justify-center mt-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="text-center leading-8">
        <h1 className="text-4xl font-bold text-orange-400">Experience</h1>
        <p className="text-gray-400 max-w-lg mx-auto">
          My work experience as a software engineer and working on different
          companies and projects.
        </p>
      </div>
      <div className="text-gray-400 w-full lg:w-3/4 mt-10">
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
          {/* Experience first */}
          <li className="m-5">
            <hr />
            <div className="timeline-middle flex justify-center">
              <img className="w-16 sm:w-20" src={tech_point} alt="Tech Point" />
            </div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="timeline-start md:mr-5 mb-8 border border-gray-600 rounded-lg px-4 sm:px-6 py-5 w-full md:w-4/5"
            >
              <time className="font-mono italic text-xs block text-center sm:text-left">
                1 April 2016 - 31 October 2017
              </time>
              <div className="text-lg font-black text-center sm:text-left">Frontend Developer</div>
              <p className="text-center sm:text-left">Tech Point Ltd.</p>
              <p className="mt-5 text-justify text-sm sm:text-base">
                I did my first full-time job in this company. There was a simple
                e-commerce website where I managed the Frontend part using HTML,
                CSS, and JavaScript. Bootstrap was used for design. This gave
                me industry-level experience in web applications.
              </p>
            </motion.div>
            <hr className="bg-white" />
          </li>
          {/* Experience last */}
          <li className="m-5">
            <div className="timeline-middle flex justify-center">
              <img className="w-16 sm:w-20" src={preview} alt="Preview Technologies" />
            </div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="timeline-end md:ml-5 mb-8 border border-gray-600 rounded-lg px-4 sm:px-6 py-5 w-full md:w-4/5"
            >
              <time className="font-mono italic text-xs block text-center sm:text-left">
                13 June 2014 - 31 December 2015
              </time>
              <div className="text-lg font-black text-center sm:text-left">Junior Frontend Intern</div>
              <p className="text-center sm:text-left">Preview Technologies</p>
              <p className="mt-5 text-justify text-sm sm:text-base">
                I did my first internship in this company, gaining professional
                knowledge of Frontend technologies like HTML, CSS, and basic
                JavaScript. I worked on small projects using vanilla HTML and
                CSS, learning JavaScript basics and DOM manipulation.
              </p>
            </motion.div>
            <hr className="bg-white" />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Experience;
