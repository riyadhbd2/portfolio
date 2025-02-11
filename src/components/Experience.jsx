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
      <div className="text-gray-400 w-2/3 mt-10">
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
          {/* Experience first */}
          <li className="">
            <hr />
            <div className="timeline-middle">
              {/* <svg
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
              </svg> */}
              <img className="w-20" src={tech_point} alt="" />
            </div>
            <div className="timeline-end mb-10">
              <time className="font-mono italic text-sm">
                {" "}
                1 April 2016 - 31 October 2017
              </time>
              <div className="text-xl font-black">Frontend Developer</div>
              <p>Tech Point Ltd. </p>
              <p className="mt-5">
                I did my first full time job in this company. There was a simple
                e-commerce website where I had to manage the Frontend part. The
                website was built by HTML, CSS and JavaScript. The Bootstap also
                used to design the website. Here I got the industry level
                application experience.
              </p>
            </div>
            <hr className="bg-white" />
          </li>
          {/* Experience last */}
          <li className="">
            <div className="timeline-middle">
              {/* <svg
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
              </svg> */}
              <img className="w-20" src={preview} alt="" />
            </div>
            <div className="timeline-start mb-10 md:text-end">
              <time className="font-mono italic text-sm">
                13 June 2014 - 31 December 2015
              </time>
              <div className="text-xl font-black">Junior Frontend Intern</div>
              <p>Preview Technologies</p>
              <p className="mt-5">
                I did my first internship in this company. Here I gained the
                professional knowledge of Frontend technology like HTML, CSS and
                JavaScript basic. With HTML and vanila CSS, I did some small
                projects. I learned the Javascript basic and DOM manipulation
                with vanila JavaScript.
              </p>
            </div>
            <hr className="bg-white" />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Experience;
