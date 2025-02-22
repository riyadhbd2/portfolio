import { motion } from "framer-motion";
import { useState } from "react";

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      image: "",
      tech: [],
      title: "Project One",
      description: "",
      category: "React JS",
      liveLink: "https://example.com/live",
      githubLink: "https://github.com/example/project-one"
    },
    {
      id: 2,
      image: "",
      tech: [],
      title: "Project Two",
      description: "",
      category: "Next JS",
      liveLink: "https://example.com/live",
      githubLink: "https://github.com/example/project-one"
    },
    {
      id: 3,
      image: "",
      tech: [],
      title: "Project Three",
      description: "",
      category: "React Native",
      liveLink: "https://example.com/live",
      githubLink: "https://github.com/example/project-one",
    },
    {
      id: 4,
      image: "",
      tech: [],
      title: "Project Four",
      description: "",
      category: "React JS",
      liveLink: "https://example.com/live",
      githubLink: "https://github.com/example/project-one",
    },
    {
      id: 5,
      image: "",
      tech: [],
      title: "Project Five",
      description: "",
      category: "Next JS",
      liveLink: "https://example.com/live",
      githubLink: "https://github.com/example/project-one"
    },
    {
      id: 6,
      image: "",
      tech: [],
      title: "Project Six",
      description: "",
      category: "React Native",
      liveLink: "https://example.com/live",
      githubLink: "https://github.com/example/project-one",
    },
    {
      id: 7,
      image: "",
      tech: [],
      title: "Project Seven",
      description: "",
      category: "React JS",
      liveLink: "https://example.com/live",
      githubLink: "https://github.com/example/project-one",
    },
    {
      id: 8,
      image: "",
      tech: [],
      title: "Project Eight",
      description: "",
      category: "React Native",
      liveLink: "https://example.com/live",
      githubLink: "https://github.com/example/project-one",
    },
    {
      id: 9,
      image: "",
      tech: [],
      title: "Project Nine",
      description: "",
      category: "Next JS",
      liveLink: "https://example.com/live",
      githubLink: "https://github.com/example/project-one"
    },
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
      <div className="flex gap-1 lg:gap-2 justify-center mb-6 mt-5">
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 justify-center gap-5 w-full md:w-3/4 mx-auto text-center">
        {filteredProjects.map((project) => (
          <motion.div
            onClick={() => setSelectedProject(project)}
            key={project.id}
            className="p-5 shadow-lg border border-gray-700 rounded-lg h-96 cursor-pointer"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          >
            <img src="" alt="" />
            <p></p>
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="text-gray-500">{project.category}</p>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
            <h2 className="text-2xl font-bold mb-2">{selectedProject.title}</h2>
            <p className="text-gray-600 mb-4">{selectedProject.description}</p>

            {/* Action Buttons */}
            <div className="flex justify-between">
              <a
                href={selectedProject.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-blue-500 text-white rounded-md"
              >
                View Live
              </a>
              <a
                href={selectedProject.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gray-700 text-white rounded-md"
              >
                GitHub
              </a>
            </div>

            {/* Close Button */}
            <button
              className="mt-4 w-full py-2 bg-red-500 text-white rounded-md"
              onClick={() => setSelectedProject(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
