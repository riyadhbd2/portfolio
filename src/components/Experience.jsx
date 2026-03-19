import { motion } from "framer-motion";
import preview from "../assets/preview.png";
import tech_point from "../assets/tech_point.png";

const Experience = () => {
  return (
    <section
      id="experience"
      className="container mx-auto mt-20 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8"
    >
      <div className="text-center leading-8">
        <h1 className="theme-section-title text-4xl font-bold">Experience</h1>
        <p className="theme-section-copy mx-auto max-w-lg">
          My work experience as a software engineer and working on different
          companies and projects.
        </p>
      </div>

      <div className="theme-section-copy mt-10 w-full lg:w-3/4">
        <ul className="timeline timeline-snap-icon timeline-vertical max-md:timeline-compact">
          <li className="m-5">
            <hr className="border-[var(--border-color)] bg-[var(--border-color)]" />
            <div className="timeline-middle flex justify-center">
              <img className="w-16 sm:w-20" src={tech_point} alt="Tech Point" />
            </div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="theme-card timeline-start mb-8 w-full rounded-lg px-4 py-5 text-[var(--text-secondary)] md:mr-5 md:w-4/5 sm:px-6"
            >
              <time className="block text-center font-mono text-xs italic sm:text-left">
                1 April 2016 - 31 October 2017
              </time>
              <div className="theme-card-heading text-center text-lg font-black sm:text-left">
                Frontend Developer
              </div>
              <p className="text-center sm:text-left">Tech Point Ltd.</p>
              <p className="mt-5 text-justify text-sm sm:text-base">
                I did my first full-time job in this company. There was a simple
                e-commerce website where I managed the Frontend part using HTML,
                CSS, and JavaScript. Bootstrap was used for design. This gave
                me industry-level experience in web applications.
              </p>
            </motion.div>
            <hr className="border-[var(--border-color)] bg-[var(--border-color)]" />
          </li>

          <li className="m-5">
            <div className="timeline-middle flex justify-center">
              <img
                className="w-16 sm:w-20"
                src={preview}
                alt="Preview Technologies"
              />
            </div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="theme-card timeline-end mb-8 w-full rounded-lg px-4 py-5 text-[var(--text-secondary)] md:ml-5 md:w-4/5 sm:px-6"
            >
              <time className="block text-center font-mono text-xs italic sm:text-left">
                13 June 2014 - 31 December 2015
              </time>
              <div className="theme-card-heading text-center text-lg font-black sm:text-left">
                Junior Frontend Intern
              </div>
              <p className="text-center sm:text-left">Preview Technologies</p>
              <p className="mt-5 text-justify text-sm sm:text-base">
                I did my first internship in this company, gaining professional
                knowledge of Frontend technologies like HTML, CSS, and basic
                JavaScript. I worked on small projects using vanilla HTML and
                CSS, learning JavaScript basics and DOM manipulation.
              </p>
            </motion.div>
            <hr className="border-[var(--border-color)] bg-[var(--border-color)]" />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Experience;
