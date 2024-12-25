import React from "react";
import { FaReact, FaHtml5  } from "react-icons/fa";

const Skills = () => {
  return (
    <div className="mt-8">
      <div className="text-center leading-8">
        <h1 className="text-4xl font-bold">Skills</h1>
        <p className="text-gray-400">
          Here are some of my skills on which I have been working on for the
          past 3 years
        </p>
      </div>
      <div className="grid grid-cols-1  md:grid-cols-2 justify-center gap-5 border w-3/4 mx-auto text-center m-10">
        {/* Frontend */}
        <div className="border m-5 h-72">
          <h1>Frontend</h1>
          {/* row-1 */}
          <div className="flex justify-center items-center gap-2">
            {/* single skill */}
            <div className="border flex justify-center items-center gap-1 px-4 py-2 rounded-xl ">
              <p>
              <FaHtml5 className="text-[#E44D26]" />
              </p>
              <p className="text-gray-400">HTML</p>
            </div>
            {/* single skill */}
            <div className="border flex justify-center items-center gap-1 px-4 py-2 rounded-xl ">
              <p>
                <FaReact />
              </p>
              <p className="text-gray-400">React</p>
            </div>
            {/* single skill */}
            <div className="border flex justify-center items-center gap-1 px-4 py-2 rounded-xl ">
              <p>
                <FaReact className="text-[#61DAFB]" />
              </p>
              <p className="text-gray-400">React Js</p>
            </div>
          </div>
          <div></div>
          <div></div>
        </div>
        {/* Backend */}
        <div className="border m-5 h-72">Backend</div>
        {/* DevOps */}
        <div className="border m-5 h-72">DevOps</div>
        {/* Other */}
        <div className="border m-5 h-72">Others</div>
      </div>
    </div>
  );
};

export default Skills;
