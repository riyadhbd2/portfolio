import { motion } from "framer-motion";
import daffodil_logo from "../assets/daffodil_logo.png";
import university_logo from "../assets/university_logo.png";

const Education = () => {
  return (
    <section
      id="education"
      className="container mx-auto mt-20 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8"
    >
      <div className="text-center leading-8">
        <h1 className="theme-section-title text-4xl font-bold">Education</h1>
        <p className="theme-section-copy mx-auto max-w-lg">
          My education has been a journey of self-discovery and growth. My
          educational details are as follows.
        </p>
      </div>

      <div className="theme-section-copy mt-10 w-full lg:w-3/4">
        <ul className="timeline timeline-snap-icon timeline-vertical max-md:timeline-compact">
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
              className="theme-card timeline-start mb-8 w-full rounded-lg px-4 py-5 text-[var(--text-secondary)] md:mr-5 md:w-4/5 sm:px-6"
            >
              <time className="block text-center font-mono text-xs italic sm:text-left">
                September 2025 - Expected
              </time>
              <p className="theme-card-heading text-center text-lg font-bold sm:text-left">
                Master&apos;s in Automotive Software Engineering
              </p>
              <div className="text-md text-center sm:text-left">
                Chemnitz University of Technology
              </div>
              <p className="mt-5 text-justify text-sm sm:text-base">
                I am currently pursuing a Master&apos;s Degree in Automotive
                Software Engineering at TU Chemnitz. I have completed an
                internship on &quot;Synthetic Data Generation&quot; and am currently
                doing my thesis on &quot;Configurable, Compact, and Static Web
                Visualization of RDF Graphs&quot;.
              </p>
            </motion.div>
            <hr className="border-[var(--border-color)] bg-[var(--border-color)]" />
          </li>

          <li className="m-5">
            <div className="timeline-middle flex justify-center">
              <img
                className="w-16 sm:w-20"
                src={daffodil_logo}
                alt="Daffodil International University"
              />
            </div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="theme-card timeline-end mb-8 w-full rounded-lg px-4 py-5 text-[var(--text-secondary)] md:ml-5 md:w-4/5 sm:px-6"
            >
              <time className="block text-center font-mono text-xs italic sm:text-left">
                June 2014 - Completed
              </time>
              <div className="theme-card-heading text-center text-lg font-black sm:text-left">
                Bachelor&apos;s in Computer Science and Engineering
              </div>
              <p className="text-center sm:text-left">
                Daffodil International University
              </p>
              <p className="mt-5 text-justify text-sm sm:text-base">
                I completed my Bachelor&apos;s degree in Computer Science and
                Engineering from Daffodil International University. During my
                studies, I developed a strong foundation in software
                development, algorithms, and system design.
              </p>
            </motion.div>
            <hr className="border-[var(--border-color)] bg-[var(--border-color)]" />
          </li>
        </ul>
      </div>
    </section>
  );
};

export { Education };
