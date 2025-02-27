import { motion } from "framer-motion";
import { AiOutlineKubernetes } from "react-icons/ai";
import { DiMongodb, DiMysql, DiPostgresql } from "react-icons/di";
import {
  FaAws,
  FaBootstrap,
  FaDocker,
  FaGit,
  FaHtml5,
  FaNodeJs,
  FaPython,
  FaReact,
  FaGithub,
  FaFigma
} from "react-icons/fa";
import { FaFlutter } from "react-icons/fa6";
import { GrGraphQl } from "react-icons/gr";
import { IoLogoCss3, IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiDjango, SiNextdotjs, SiRedux, SiPostman } from "react-icons/si";
import { VscAzure } from "react-icons/vsc";
import { IoLogoVercel } from "react-icons/io5";
import { BiLogoNetlify } from "react-icons/bi";
import { VscVscode } from "react-icons/vsc";

const Skills = () => {
  return (
    <section id="skills" className="container mx-auto mt-20">
      <div className="text-center leading-8">
        <h1 className="text-4xl text-orange-400 font-bold">Skills</h1>
        <p className="text-gray-400">
          Here are some of my skills on which I have been working on for the
          past 5 years
        </p>
      </div>
      {/* skill cards */}
      <div className="grid grid-cols-1  md:grid-cols-1 lg:grid-cols-2 justify-center gap-5 w-full md:w-3/4 mx-auto text-center m-10">
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
            <div className="border border-gray-400 flex justify-center items-center gap-1 px-3 py-1 rounded-xl ">
              <p>
                <FaHtml5 className="text-[#E34F26] text-md hover:text-[#D03A18] transition duration-300
" />
              </p>
              <p className="text-gray-400">HTML</p>
            </div>

            <div className="border border-gray-400 flex justify-center items-center gap-1 px-3 py-1 rounded-xl ">
              <p>
                <IoLogoCss3 className="text-[#1572B6] text-md hover:text-[#12688B] transition duration-300
" />
              </p>
              <p className="text-gray-400">CSS</p>
            </div>

            <div className="border border-gray-400 flex justify-center items-center gap-1 px-3 py-1 rounded-xl ">
              <p>
                <FaReact className="text-[#61DAFB] text-md hover:text-[#21A1F1] transition duration-300
" />
              </p>
              <p className="text-gray-400">React Js</p>
            </div>
          </div>
          {/* 1st row 2nd line */}
          <div className="flex gap-2 items-center justify-center">
            <div className="border border-gray-400 flex justify-center items-center gap-1 px-3 py-1 rounded-xl ">
              <p>
                <IoLogoJavascript className="text-[#F7DF1E] text-md hover:text-[#E1C100] transition duration-300
" />
              </p>
              <p className="text-gray-400">JavaScript</p>
            </div>
            <div className="border border-gray-400 flex justify-center items-center gap-1 px-3 py-1 rounded-xl ">
              <p>
                <SiRedux className="text-[#764ABC] text-md hover:text-[#5b3d99] transition duration-300
" />
              </p>
              <p className="text-gray-400">Redux</p>
            </div>
          </div>
          {/* 1st row 3rd line */}
          <div className="flex gap-2 items-center justify-center">
            <div className="border border-gray-400 flex justify-center items-center gap-1 px-3 py-1 rounded-xl ">
              <p>
                <RiTailwindCssFill className="text-[#06B6D4] text-md hover:text-[#0196A7] transition duration-300
" />
              </p>
              <p className="text-gray-400 text-sm sm:text-lg">Tailwind</p>
            </div>
            <div className="border border-gray-400 flex justify-center items-center gap-1 px-3 py-1 rounded-xl ">
              <p>
                <FaBootstrap className="text-[#563D7C] text-md hover:text-[#4c3575] transition duration-300
" />
              </p>
              <p className="text-gray-400 text-sm sm:text-lg">Bootstrap</p>
            </div>
            <div className="border border-gray-400 flex justify-center items-center gap-1 px-3 py-1 rounded-xl ">
              <p>
                <SiNextdotjs className="text-white text-md hover:text-gray-400 transition duration-300
" />
              </p>
              <p className="text-gray-400 text-sm sm:text-lg">Next Js</p>
            </div>
          </div>
          {/* 1st row 4th line */}
          <div className="flex gap-2 items-center justify-center">
            <div className="border border-gray-400 flex justify-center items-center gap-1 px-3 py-1 rounded-xl ">
              <p>
                <img
                  src="https://mui.com/static/logo.png"
                  alt="Material UI Logo"
                  width="20"
                />
              </p>
              <p className="text-gray-400">Materrial UI</p>
            </div>

            <div className="border border-gray-400 flex justify-center items-center gap-1 px-3 py-1 rounded-xl ">
              <p>
                <FaFlutter className="text-[#02569B] text-md hover:text-[#0177B7] transition duration-300
"/>
              </p>
              <p className="text-gray-400">Flutter</p>
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
            {/* 1st row 1st line */}
            <div className="border border-gray-400 flex justify-center items-center gap-1 px-3 py-1 rounded-xl">
              <p>
                <FaNodeJs className="text-[#83CD29] text-md hover:text-[#6AAE20] transition duration-300
"/>
              </p>
              <p className="text-gray-400 text-sm sm:text-md lg:text-lg">Node Js</p>
            </div>
            <div className="border border-gray-400 flex justify-center items-center gap-1 px-3 py-1 rounded-xl ">
              <p className="bg-white font-bold text-black text-[7px] p-[1px]">
                Ex
              </p>
              <p className="text-gray-400 text-sm sm:text-md lg:text-lg">Express Js</p>
            </div>
            <div className="border border-gray-400 flex justify-center items-center gap-1 px-3 py-1 rounded-xl ">
              <p>
                <DiMongodb className="text-[#47A248] text-md hover:text-[#3B8739] transition duration-300
"/>
              </p>
              <p className="text-gray-400 text-sm sm:text-md lg:text-lg">Mongo DB</p> </div>
          </div>
          {/* 1st row 2nd line */}
          <div className="flex gap-2 items-center justify-center">
            <div className="border border-gray-400 flex justify-center items-center gap-1 px-3 py-1 rounded-xl ">
              <p>
                <DiMysql className="text-[#00758F] text-md hover:text-[#005F6B] transition duration-300
"/>
              </p>
              <p className="text-gray-400">My SQL</p>
            </div>
            <div className="border border-gray-400 flex justify-center items-center gap-1 px-4 py-1 rounded-xl ">
              <p>
                <DiPostgresql className="text-[#336791] text-lg hover:text-[#2c5d8c] transition duration-300
" />
              </p>
              <p className="text-gray-400">PostGreSQL</p>
            </div>
          </div>
          {/* 1st row 3rd line */}
          <div className="flex gap-2 items-center justify-center">
            <div className="border border-gray-400 flex justify-center items-center gap-1 px-4 py-1 rounded-xl ">
              <p className="text-xs bg-white text-black">RG</p>
              <p className="text-gray-400">RDF Graph</p>
            </div>
            <div className="border border-gray-400 flex justify-center items-center gap-1 px-4 py-1 rounded-xl ">
              <p>
                <GrGraphQl className="text-[#E10098] text-md hover:text-[#d10087] transition duration-300
"/>
              </p>
              <p className="text-gray-400">GraphQL</p>
            </div>
          </div>
          {/* 1st row 4th line */}
          <div className="flex gap-2 items-center justify-center">
            <div className="border border-gray-400 flex justify-center items-center gap-1 px-4 py-1 rounded-xl ">
              <p>
                <FaPython className="text-[#306998] text-xl hover:text-[#276a8a] transition duration-300
"/>
              </p>
              <p className="text-gray-400">Python</p>
            </div>
            <div className="border border-gray-400 flex justify-center items-center gap-1 px-4 py-1 rounded-xl ">
              <p>
                <SiDjango />
              </p>
              <p className="text-gray-400">DJango</p>
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
            {/* 1at row 1st line */}
            <div className="border border-gray-400 flex justify-center items-center gap-1 px-4 py-1 rounded-xl ">
              <p>
                <FaDocker className="text-[#2496ED] text-md hover:text-[#1F7BB6] transition duration-300
" />
              </p>
              <p className="text-gray-400">Docker</p>
            </div>
            <div className="border border-gray-400 flex justify-center items-center gap-1 px-4 py-1 rounded-xl ">
              <p>
                <AiOutlineKubernetes className="text-[#326CE5] text-md hover:text-[#2858A4] transition duration-300
" />
              </p>
              <p className="text-gray-400">Kubernetes</p>
            </div>
          </div>
          {/* 1st row 2nd line */}
          <div className="flex gap-2 items-center justify-center">
            <div className="border border-gray-400 flex justify-center items-center gap-1 px-4 py-1 rounded-xl ">
              <p>
                <FaAws className="text-[#FF9900] text-md hover:text-[#E78A00] transition duration-300
"/>
              </p>
              <p className="text-gray-400">AWS</p>
            </div>
            <div className="border border-gray-400 flex justify-center items-center gap-1 px-4 py-1 rounded-xl ">
              <p>
                <VscAzure className="text-[#0078D4] text-md hover:text-[#005A9E] transition duration-300
"/>
              </p>
              <p className="text-gray-400">Azure</p>
            </div>
          </div>
          {/* 1st row 3rd line */}
          <div className="flex gap-2 items-center justify-center"></div>
          {/* 1st row 4th line */}
          <div className="flex gap-2 items-center justify-center"></div>
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
            {/* 1st line 1st row */}
            <div className="border border-gray-400 flex justify-center items-center gap-1 px-3 py-1 rounded-xl ">
              <p>
                <FaGit className="text-[#F1502F] text-md hover:text-[#D94E26] transition duration-300
"/>
              </p>
              <p className="text-gray-400">Git</p>
            </div>
            <div className="border border-gray-400 flex justify-center items-center gap-1 px-3 py-1 rounded-xl ">
              <p>
                <SiPostman className="text-[#FF6A00] text-md hover:text-[#E65B00] transition duration-300
"/>
              </p>
              <p className="text-gray-400">Postman</p>
            </div>
          </div>
          {/* 1st row 2nd line */}
          <div className="flex gap-2 items-center justify-center">
            <div className="border border-gray-400 flex justify-center items-center gap-1 px-3 py-1 rounded-xl">
              <p>
              <FaGithub className="text-white text-lg hover:text-gray-400 transition duration-300"/>
              </p>
              <p className="text-gray-400">GitHub</p>
            </div>
            <div className="border border-gray-400 flex justify-center items-center gap-1 px-3 py-1 rounded-xl ">
              <p>
              <IoLogoVercel className="text-white text-md hover:text-gray-400 transition duration-300"/>
              </p>
              <p className="text-gray-400">Vercel</p>
            </div>
            <div className="border border-gray-400 flex justify-center items-center gap-1 px-3 py-1 rounded-xl ">
              <p>
              <BiLogoNetlify className="text-[#00C7B7] text-md hover:text-[#00A19D] transition duration-300
"/>
              </p>
              <p className="text-gray-400">Netlify</p>
            </div>
          </div>
          {/* 1st row 3rd line */}
          <div className="flex gap-2 items-center justify-center">
            <div className="border border-gray-400 flex justify-center items-center gap-1 px-4 py-1 rounded-xl ">
              <p>
              <FaFigma className="text-[#F24E1E] text-md hover:text-[#D43F18] transition duration-300
"/>
              </p>
              <p className="text-gray-400">Figma</p>
            </div>
            <div className="border border-gray-400 flex justify-center items-center gap-1 px-4 py-1 rounded-xl ">
              <p>
              <VscVscode className="text-[#007ACC] text-md hover:text-[#005A8D] transition duration-300
"/>
              </p>
              <p className="text-gray-400">VS Code</p>
            </div>
          </div>
          {/* 1st row 4th line */}
          <div className="flex gap-2 items-center justify-center">
             
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
