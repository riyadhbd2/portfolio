import { motion } from "framer-motion";
import { useState } from "react";

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const projects = [
    { id: 1, title: "Project One", category: "React JS" },
    { id: 2, title: "Project Two", category: "Next JS" },
    { id: 3, title: "Project Three", category: "React Native" },
    { id: 4, title: "Project Four", category: "React JS" },
    { id: 5, title: "Project Five", category: "Next JS" },
    { id: 6, title: "Project Six", category: "React Native" },
    { id: 7, title: "Project Seven", category: "React JS" },
    { id: 8, title: "Project Eight", category: "React Native" },
    { id: 9, title: "Project Nine", category: "Next JS" },
  ];

  const categories = ["All", "React JS", "Next JS", "React Native"];

  const filteredProjects =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section
      id="projects"
      className="container mx-auto mt-20 flex flex-col items-center justify-center"
    >
      <div className="p-5 text-center leading-8">
        <h1 className="text-4xl font-bold text-orange-400">Projects</h1>
        <p className="text-gray-400">
          {" "}
          I have worked on a wide range of full stack projects. Here are some
          example.{" "}
        </p>
      </div>

      {/* Filter Buttons */}
      <div className="flex justify-center gap-4 mb-6 mt-5">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-4 py-2 rounded-md ${
              filter === category
                ? "bg-indigo-600 py-2 px-5 rounded-full text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setFilter(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-5 w-full md:w-3/4 mx-auto text-center">
        {filteredProjects.map((project) => (
          <motion.div
            key={project.id}
            className="p-5 shadow-lg border border-gray-700 rounded-lg h-96"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          >
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="text-gray-500">{project.category}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
