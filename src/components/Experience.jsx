import { motion } from "framer-motion";
import React from "react";
import preview from "../assets/preview.png";
import tech_point from "../assets/tech_point.png";

const Experience = () => {
  return (
    <section
      id="experience"
      className="container mx-auto flex flex-col items-center justify-center mt-20"
    >
      <div className="text-center leading-8">
        <h1 className="text-4xl font-bold text-orange-400">Experience</h1>
        <p className="text-gray-400">
          My work experience as a software engineer and workiing on different
          companies and projects.
        </p>
      </div>
      <div className="text-gray-400 w-full xl:w-2/3 md:m-1 mt-10">
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
          {/* Experience first */}
          <li className="m-5">
            <hr />
            <div className="timeline-middle">
              <img className="w-20" src={tech_point} alt="" />
            </div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="timeline-start md:mr-5 mb-8 border border-gray-600 rounded-lg px-5 py-5 w-full md:w-4/5"
            >
              <time className="font-mono italic text-xs">
                {" "}
                1 April 2016 - 31 October 2017
              </time>
              <div className="text-lg font-black">Frontend Developer</div>
              <p>Tech Point Ltd. </p>
              <p className="mt-5 text-justify">
                I did my first full time job in this company. There was a simple
                e-commerce website where I had to manage the Frontend part. The
                website was built by HTML, CSS and JavaScript. The Bootstap also
                used to design the website. Here I got the industry level
                application experience.
              </p>
            </motion.div>
            <hr className="bg-white" />
          </li>
          {/* Experience last */}
          <li className="m-5">
            <div className="timeline-middle">
              <img className="w-20" src={preview} alt="" />
            </div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="timeline-end md:ml-5 mb-8 border border-gray-600 rounded-lg px-5 py-5 w-full md:w-4/5"
            >
              <time className="font-mono italic text-xs">
                13 June 2014 - 31 December 2015
              </time>
              <div className="text-lg font-black">Junior Frontend Intern</div>
              <p>Preview Technologies</p>
              <p className="mt-5 text-justify">
                I did my first internship in this company. Here I gained the
                professional knowledge of Frontend technology like HTML, CSS and
                JavaScript basic. With HTML and vanila CSS, I did some small
                projects. I learned the Javascript basic and DOM manipulation
                with vanila JavaScript.
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
