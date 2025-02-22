import React from "react";
import daffodil_logo from "../assets/daffodil_logo.png";
import university_logo from "../assets/university_logo.png";

export const Education = () => {
  return (
    <section
      id="education"
      className="container mx-auto flex flex-col items-center justify-center mt-20"
    >
      <div className="text-center leading-8">
        <h1 className="text-4xl font-bold text-orange-400">Education</h1>
        <p className="text-gray-400">
          My education has been a journey of self-discovery and growth. My
          educational details are as follows.
        </p>
      </div>
      <div className="text-gray-400 w-2/3 mt-10">
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
          {/* Master education */}
          <li className="">
            <div className="timeline-middle">
              <img className="w-20" src={university_logo} alt="" />
            </div>
            <div className="timeline-start mr-5 mb-10 md:text-end border border-gray-600 rounded-lg px-5 py-5 w-full md:w-4/5 ">
              <time className="font-mono text-sm italic">
                September 2025 - Expected
              </time>
              <p className="text-lg font-bold">
                Master's in Automotive Software Engineering
              </p>
              <div className="text-md">Chemnitz University of Technology</div>
              <p className="mt-5 text-justify">
                I am currently pursuing Master's Degree in Automotive Software
                Enginnering in TU CHemnitz. I have completed internship on
                "Syntheric Data generation" in my University. Curreently I am
                doing thesis on "Configurable, Compact and Static Web
                Visualization of RDF Graphs".
              </p>
            </div>
            <hr className="bg-white" />
          </li>
          {/* Bachelor Education */}
          <li className="">
            <hr />
            <div className="timeline-middle">
              <img className="w-20" src={daffodil_logo} alt="" />
            </div>
            <div className="timeline-end ml-5 mb-10 border border-gray-600 px-5 py-5 rounded-lg w-full md:w-4/5">
              <time className="font-mono italic text-sm">
                {" "}
                June 2014 - Completed
              </time>
              <p className="text-lg font-bold">
                Bachelor's in Computer Science and Engineering
              </p>
              <div className="text-md">Daffodil International University</div>
              <p className="mt-5 text-justify">
                I completed my Bachelor's degree in Computer Science and
                Engineering from Daffodil International University. During my
                studies, I developed a strong foundation in software
                development, algorithms, and system design.
              </p>
            </div>
            <hr className="bg-white" />
          </li>
        </ul>
      </div>
    </section>
  );
};
