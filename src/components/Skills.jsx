import { motion } from "framer-motion";
import { FaBootstrap, FaHtml5, FaReact } from "react-icons/fa";
import { FaFlutter } from "react-icons/fa6";
import { IoLogoCss3, IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiRedux } from "react-icons/si";

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
        <motion.div
          className="border border-gray-600 m-5 h-72 rounded-lg flex flex-col gap-3"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
        >
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
                <IoLogoJavascript className="bg-[#F7DF1E] text-black text-sm" />
              </p>
              <p className="text-gray-400">JavaScript</p>
            </div>
            <div className="border border-gray-400 flex justify-center items-center gap-1 px-4 py-2 rounded-xl ">
              <p>
                <SiRedux />
              </p>
              <p className="text-gray-400">Redux</p>
            </div>
          </div>
          {/* 1st row 3rd line */}
          <div className="flex gap-2 items-center justify-center">
            <div className="border border-gray-400 flex justify-center items-center gap-1 px-4 py-2 rounded-xl ">
              <p>
                <RiTailwindCssFill />
              </p>
              <p className="text-gray-400">Tailwind</p>
            </div>
            <div className="border border-gray-400 flex justify-center items-center gap-1 px-4 py-2 rounded-xl ">
              <p>
                <FaBootstrap />
              </p>
              <p className="text-gray-400">Bootstrap</p>
            </div>
            <div className="border border-gray-400 flex justify-center items-center gap-1 px-4 py-2 rounded-xl ">
              <p>
                <FaFlutter />
              </p>
              <p className="text-gray-400">Flutter</p>
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
        </motion.div>
        {/* Backend */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="border border-gray-600 m-5 h-72 rounded-lg flex flex-col gap-3"
        >
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
        </motion.div>
        {/* DevOps */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="border border-gray-600 m-5 h-72 rounded-lg flex flex-col gap-3"
        >
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
        </motion.div>
        {/* Other */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="border border-gray-600 m-5 h-72 rounded-lg flex flex-col gap-3"
        >
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
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
