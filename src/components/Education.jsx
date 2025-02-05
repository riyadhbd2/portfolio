import React from "react";

export const Education = () => {
  return (
    <section
      id="education"
      className="container mx-auto flex flex-col items-center justify-center mt-10"
    >
      <div className="text-center leading-8">
        <h1 className="text-4xl font-bold text-orange-400">Education</h1>
        <p className="text-gray-400">
          My education has been a journey of self-discovery and growth. My
          educational details are as follows.
        </p>
      </div>
      <div className="text-gray-400 w-2/3 mt-5">
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
          {/* Master education */}
          <li className="">
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-start mb-10 md:text-end">
              <time className="font-mono text-sm italic">October 2018 - Present</time>
              <p>Master's in Automotive Software Engineering</p>
              <div className="text-xl font-black">
                Chemnitz University of Technology
              </div>
              <p className="mt-5">
                I am currently pursuing Master's Degree in Automotive Software Enginnering in TU CHemnitz. I have completed internship on "Syntheric Data generation" in my University. Curreently I am doing thesis on "Configurable, Compact and Static Web Visualization of RDF Graphs". I have completed so many courses in the previous semesters. Among them "Advance Management of Data", "Multicore programming", "Software Enginnering and Programming Basics" and "Software Service Engineering" helped me to increase the deep knowledge of Programming Language. 
              </p>
            </div>
            <hr className="bg-white" />
          </li>
          {/* Bachelor Education */}
          <li className="">
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end mb-10">
              <time className="font-mono italic text-sm">
                {" "}
                January 2014 - June 2014
              </time>
              <p>Bachelor's in Computer Science and Engineering</p>
              <div className="text-xl font-black">
                Daffodil International University
              </div>
              <p className="mt-5">
                I completed my Bachelor's degree in Computer Science and Engineering from Daffodil International University. This is one of the best University in Bangladesh. During my studies, I developed a strong foundation in software development, algorithms, and system design. My academic journey equipped me with skills in programming, web development, and data structures, allowing me to build innovative tech solutions. I am passionate about coding, problem-solving, and exploring emerging technologies to drive digital transformation.
              </p>
            </div>
            <hr className="bg-white" />
          </li>
        </ul>
      </div>
    </section>
  );
};
