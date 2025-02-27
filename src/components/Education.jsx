import { motion } from "framer-motion";
import React from "react";
import daffodil_logo from "../assets/daffodil_logo.png";
import university_logo from "../assets/university_logo.png";


const Education = () => {
  return (
    <section
      id="education"
      className="container mx-auto flex flex-col items-center justify-center mt-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="text-center leading-8">
        <h1 className="text-4xl font-bold text-orange-400">Education</h1>
        <p className="text-gray-400 max-w-lg mx-auto">
          My education has been a journey of self-discovery and growth. My
          educational details are as follows.
        </p>
      </div>
      <div className="text-gray-400 w-full lg:w-3/4 mt-10">
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
          {/* Master education */}
          <li className="m-5">
            <div className="timeline-middle flex justify-center">
              <img
                className="w-16 sm:w-20"
                src={university_logo}
                alt="Chemnitz University"
              />
            </div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="timeline-start md:mr-5 mb-8 border border-gray-600 rounded-lg px-4 sm:px-6 py-5 w-full md:w-4/5"
            >
              <time className="font-mono italic text-xs block text-center sm:text-left">
                September 2025 - Expected
              </time>
              <p className="text-lg font-bold text-center sm:text-left">
                Master's in Automotive Software Engineering
              </p>
              <div className="text-md text-center sm:text-left">
                Chemnitz University of Technology
              </div>
              <p className="mt-5 text-justify text-sm sm:text-base">
                I am currently pursuing a Master's Degree in Automotive Software
                Engineering at TU Chemnitz. I have completed an internship on
                "Synthetic Data Generation" and am currently doing my thesis on
                "Configurable, Compact, and Static Web Visualization of RDF
                Graphs".
              </p>
            </motion.div>
            <hr className="bg-white" />
          </li>
          {/* Bachelor education */}
          <li className="m-5">
            <div className="timeline-middle flex justify-center">
              <img
                className="w-16 sm:w-20"
                src={daffodil_logo}
                alt="Preview Technologies"
              />
            </div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="timeline-end md:ml-5 mb-8 border border-gray-600 rounded-lg px-4 sm:px-6 py-5 w-full md:w-4/5"
            >
              <time className="font-mono italic text-xs block text-center sm:text-left">
                June 2014 - Completed
              </time>
              <div className="text-lg font-black text-center sm:text-left">
              Bachelor's in Computer Science and Engineering
              </div>
              <p className="text-center sm:text-left">Daffodil International University</p>
              <p className="mt-5 text-justify text-sm sm:text-base">
                I completed my Bachelor's degree in Computer Science and
                Engineering from Daffodil International University. During my
                studies, I developed a strong foundation in software
                development, algorithms, and system design.
              </p>
            </motion.div>
            <hr className="bg-white" />
          </li>
        </ul>
      </div>
    </section>
  );
};

export { Education };
