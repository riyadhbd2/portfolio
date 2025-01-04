import React from "react";
import { FaHtml5, FaReact } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";

const Skills = () => {
  return (
    <section id="skills" className="container mx-auto mt-8">
      <div className="text-center leading-8">
        <h1 className="text-4xl font-bold">Skills</h1>
        <p className="text-gray-400">
          Here are some of my skills on which I have been working on for the
          past 3 years
        </p>
      </div>
      {/* skill cards */}
      <div className="grid grid-cols-1  md:grid-cols-1 lg:grid-cols-2 justify-center gap-5 w-3/4 mx-auto text-center m-10">
        {/* Frontend */}
        <div className="border border-gray-600 m-5 h-72 rounded-lg flex flex-col gap-3">
          <h1 className="text-3xl text-gray-400 font-bold mt-3">Frontend</h1>
          {/* 1st row 1st line */}
          <div className="flex justify-center items-center gap-2">
            {/* single skill */}
            <div className="border border-gray-400 flex justify-center items-center gap-1 px-4 py-2 rounded-xl ">
              <p>
                <FaHtml5 className="text-[#E44D26]" />
              </p>
              <p className="text-gray-400">HTML</p>
            </div>

            <div className="border border-gray-400 flex justify-center items-center gap-1 px-4 py-2 rounded-xl ">
              <p>
                <IoLogoCss3 className="text-[#264DE4]" />
              </p>
              <p className="text-gray-400">CSS</p>
            </div>

            {/* single skill */}
            <div className="border border-gray-400 flex justify-center items-center gap-1 px-4 py-2 rounded-xl ">
              <p>
                <FaReact className="text-[#61DAFB]" />
              </p>
              <p className="text-gray-400">React Js</p>
            </div>
          </div>
          {/* 1st row 2nd line */}
          <div className="flex gap-2 items-center justify-center">
            <div className="border border-gray-400 flex justify-center items-center gap-1 px-4 py-2 rounded-xl ">
              <p>
                <FaHtml5 className="text-[#E44D26]" />
              </p>
              <p className="text-gray-400">HTML</p>
            </div>
            <div className="border border-gray-400 flex justify-center items-center gap-1 px-4 py-2 rounded-xl ">
              <p>
                <FaHtml5 className="text-[#E44D26]" />
              </p>
              <p className="text-gray-400">HTML</p>
            </div>
          </div>
          {/* 1st row 3rd line */}
          <div className="flex gap-2 items-center justify-center">
            <div className="border border-gray-400 flex justify-center items-center gap-1 px-4 py-2 rounded-xl ">
              <p>
                <FaHtml5 className="text-[#E44D26]" />
              </p>
              <p className="text-gray-400">HTML</p>
            </div>
            <div className="border border-gray-400 flex justify-center items-center gap-1 px-4 py-2 rounded-xl ">
              <p>
                <FaHtml5 className="text-[#E44D26]" />
              </p>
              <p className="text-gray-400">HTML</p>
            </div>
          </div>
          {/* 1st row 4th line */}
          <div className="flex gap-2 items-center justify-center">
            <div className="border border-gray-400 flex justify-center items-center gap-1 px-4 py-2 rounded-xl ">
              <p>
                <FaHtml5 className="text-[#E44D26]" />
              </p>
              <p className="text-gray-400">HTML</p>
            </div>
            <div className="border border-gray-400 flex justify-center items-center gap-1 px-4 py-2 rounded-xl ">
              <p>
                <FaHtml5 className="text-[#E44D26]" />
              </p>
              <p className="text-gray-400">HTML</p>
            </div>
          </div>
        </div>
        {/* Backend */}
        <div className="border border-gray-600 m-5 h-72 rounded-lg flex flex-col gap-3">
        <h1 className="text-3xl text-gray-400 font-bold mt-3">Backend</h1>
        <div className="flex justify-center items-center gap-2">
            {/* single skill */}
            <div className="border border-gray-400 flex justify-center items-center gap-1 px-4 py-2 rounded-xl ">
              <p>
                <FaHtml5 className="text-[#E44D26]" />
              </p>
              <p className="text-gray-400">HTML</p>
            </div>

            <div className="border border-gray-400 flex justify-center items-center gap-1 px-4 py-2 rounded-xl ">
              <p>
                <IoLogoCss3 className="text-[#264DE4]" />
              </p>
              <p className="text-gray-400">CSS</p>
            </div>

            {/* single skill */}
            <div className="border border-gray-400 flex justify-center items-center gap-1 px-4 py-2 rounded-xl ">
              <p>
                <FaReact className="text-[#61DAFB]" />
              </p>
              <p className="text-gray-400">React Js</p>
            </div>
          </div>
          {/* 1st row 2nd line */}
          <div className="flex gap-2 items-center justify-center">
            <div className="border border-gray-400 flex justify-center items-center gap-1 px-4 py-2 rounded-xl ">
              <p>
                <FaHtml5 className="text-[#E44D26]" />
              </p>
              <p className="text-gray-400">HTML</p>
            </div>
            <div className="border border-gray-400 flex justify-center items-center gap-1 px-4 py-2 rounded-xl ">
              <p>
                <FaHtml5 className="text-[#E44D26]" />
              </p>
              <p className="text-gray-400">HTML</p>
            </div>
          </div>
          {/* 1st row 3rd line */}
          <div className="flex gap-2 items-center justify-center">
            <div className="border border-gray-400 flex justify-center items-center gap-1 px-4 py-2 rounded-xl ">
              <p>
                <FaHtml5 className="text-[#E44D26]" />
              </p>
              <p className="text-gray-400">HTML</p>
            </div>
            <div className="border border-gray-400 flex justify-center items-center gap-1 px-4 py-2 rounded-xl ">
              <p>
                <FaHtml5 className="text-[#E44D26]" />
              </p>
              <p className="text-gray-400">HTML</p>
            </div>
          </div>
          {/* 1st row 4th line */}
          <div className="flex gap-2 items-center justify-center">
            <div className="border border-gray-400 flex justify-center items-center gap-1 px-4 py-2 rounded-xl ">
              <p>
                <FaHtml5 className="text-[#E44D26]" />
              </p>
              <p className="text-gray-400">HTML</p>
            </div>
            <div className="border border-gray-400 flex justify-center items-center gap-1 px-4 py-2 rounded-xl ">
              <p>
                <FaHtml5 className="text-[#E44D26]" />
              </p>
              <p className="text-gray-400">HTML</p>
            </div>
          </div>
        </div>
        {/* DevOps */}
        <div className="border border-gray-600 m-5 h-72 rounded-lg flex flex-col gap-3">
        <h1 className="text-3xl text-gray-400 font-bold mt-3">DevOps</h1>
        <div className="flex justify-center items-center gap-2">
            {/* single skill */}
            <div className="border border-gray-400 flex justify-center items-center gap-1 px-4 py-2 rounded-xl ">
              <p>
                <FaHtml5 className="text-[#E44D26]" />
              </p>
              <p className="text-gray-400">HTML</p>
            </div>

            <div className="border border-gray-400 flex justify-center items-center gap-1 px-4 py-2 rounded-xl ">
              <p>
                <IoLogoCss3 className="text-[#264DE4]" />
              </p>
              <p className="text-gray-400">CSS</p>
            </div>

            {/* single skill */}
            <div className="border border-gray-400 flex justify-center items-center gap-1 px-4 py-2 rounded-xl ">
              <p>
                <FaReact className="text-[#61DAFB]" />
              </p>
              <p className="text-gray-400">React Js</p>
            </div>
          </div>
          {/* 1st row 2nd line */}
          <div className="flex gap-2 items-center justify-center">
            <div className="border border-gray-400 flex justify-center items-center gap-1 px-4 py-2 rounded-xl ">
              <p>
                <FaHtml5 className="text-[#E44D26]" />
              </p>
              <p className="text-gray-400">HTML</p>
            </div>
            <div className="border border-gray-400 flex justify-center items-center gap-1 px-4 py-2 rounded-xl ">
              <p>
                <FaHtml5 className="text-[#E44D26]" />
              </p>
              <p className="text-gray-400">HTML</p>
            </div>
          </div>
          {/* 1st row 3rd line */}
          <div className="flex gap-2 items-center justify-center">
            <div className="border border-gray-400 flex justify-center items-center gap-1 px-4 py-2 rounded-xl ">
              <p>
                <FaHtml5 className="text-[#E44D26]" />
              </p>
              <p className="text-gray-400">HTML</p>
            </div>
            <div className="border border-gray-400 flex justify-center items-center gap-1 px-4 py-2 rounded-xl ">
              <p>
                <FaHtml5 className="text-[#E44D26]" />
              </p>
              <p className="text-gray-400">HTML</p>
            </div>
          </div>
          {/* 1st row 4th line */}
          <div className="flex gap-2 items-center justify-center">
            <div className="border border-gray-400 flex justify-center items-center gap-1 px-4 py-2 rounded-xl ">
              <p>
                <FaHtml5 className="text-[#E44D26]" />
              </p>
              <p className="text-gray-400">HTML</p>
            </div>
            <div className="border border-gray-400 flex justify-center items-center gap-1 px-4 py-2 rounded-xl ">
              <p>
                <FaHtml5 className="text-[#E44D26]" />
              </p>
              <p className="text-gray-400">HTML</p>
            </div>
          </div>
        </div>
        {/* Other */}
        <div className="border border-gray-600 m-5 h-72 rounded-lg flex flex-col gap-3">
        <h1 className="text-3xl text-gray-400 font-bold mt-3">Others</h1>
        <div className="flex justify-center items-center gap-2">
            {/* single skill */}
            <div className="border border-gray-400 flex justify-center items-center gap-1 px-4 py-2 rounded-xl ">
              <p>
                <FaHtml5 className="text-[#E44D26]" />
              </p>
              <p className="text-gray-400">HTML</p>
            </div>

            <div className="border border-gray-400 flex justify-center items-center gap-1 px-4 py-2 rounded-xl ">
              <p>
                <IoLogoCss3 className="text-[#264DE4]" />
              </p>
              <p className="text-gray-400">CSS</p>
            </div>

            {/* single skill */}
            <div className="border border-gray-400 flex justify-center items-center gap-1 px-4 py-2 rounded-xl ">
              <p>
                <FaReact className="text-[#61DAFB]" />
              </p>
              <p className="text-gray-400">React Js</p>
            </div>
          </div>
          {/* 1st row 2nd line */}
          <div className="flex gap-2 items-center justify-center">
            <div className="border border-gray-400 flex justify-center items-center gap-1 px-4 py-2 rounded-xl ">
              <p>
                <FaHtml5 className="text-[#E44D26]" />
              </p>
              <p className="text-gray-400">HTML</p>
            </div>
            <div className="border border-gray-400 flex justify-center items-center gap-1 px-4 py-2 rounded-xl ">
              <p>
                <FaHtml5 className="text-[#E44D26]" />
              </p>
              <p className="text-gray-400">HTML</p>
            </div>
          </div>
          {/* 1st row 3rd line */}
          <div className="flex gap-2 items-center justify-center">
            <div className="border border-gray-400 flex justify-center items-center gap-1 px-4 py-2 rounded-xl ">
              <p>
                <FaHtml5 className="text-[#E44D26]" />
              </p>
              <p className="text-gray-400">HTML</p>
            </div>
            <div className="border border-gray-400 flex justify-center items-center gap-1 px-4 py-2 rounded-xl ">
              <p>
                <FaHtml5 className="text-[#E44D26]" />
              </p>
              <p className="text-gray-400">HTML</p>
            </div>
          </div>
          {/* 1st row 4th line */}
          <div className="flex gap-2 items-center justify-center">
            <div className="border border-gray-400 flex justify-center items-center gap-1 px-4 py-2 rounded-xl ">
              <p>
                <FaHtml5 className="text-[#E44D26]" />
              </p>
              <p className="text-gray-400">HTML</p>
            </div>
            <div className="border border-gray-400 flex justify-center items-center gap-1 px-4 py-2 rounded-xl ">
              <p>
                <FaHtml5 className="text-[#E44D26]" />
              </p>
              <p className="text-gray-400">HTML</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
