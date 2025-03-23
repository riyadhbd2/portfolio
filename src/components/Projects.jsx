import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      image: "food_delivery.jpg",
      tech: ["React js", "Express Js", "MongoDb", "Tailwind"],
      title: "Food Pack",
      description:
        "A complete full-stack food-delivery application with backend and admin panel.",
      category: "React JS",
      liveLink:
        "https://food-kingdom-client-qciw475wf-easir-arafats-projects.vercel.app",
      githubLink: "https://github.com/riyadhbd2/food-kingdom",
    },
    {
      id: 2,
      image: "",
      tech: [],
      title: "Project Two",
      description: "",
      category: "Next JS",
      liveLink: "https://example.com/live",
      githubLink: "https://github.com/example/project-one",
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
      githubLink: "https://github.com/example/project-one",
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
      githubLink: "https://github.com/example/project-one",
    },
  ];

  const categories = ["All", "React JS", "Next JS", "React Native"];

  const filteredProjects =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  //  UseEffect to disable scrolling when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [selectedProject]);

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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 justify-center gap-5 w-full md:w-3/4 mx-auto">
        {filteredProjects.map((project) => (
          <motion.div
            onClick={() => setSelectedProject(project)}
            key={project.id}
            className="p-6 shadow-lg border border-gray-700 rounded-lg h-96 cursor-pointer"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          >
            <img className="rounded-lg" src={project.image} alt="" />
            <div className="flex gap-4 mt-5">
              {project.tech.map((item, index) => {
                return (
                  <ul className="" key={index}>
                    <li className="text-violet-500 bg-slate-800 px-2 py-1 text-[13px]">
                      {item}
                    </li>
                  </ul>
                );
              })}
            </div>
            <h3 className="text-xl font-bold mt-2">{project.title}</h3>
            <p className="text-gray-400">{project.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Dark Themed Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black flex items-center justify-center p-4 z-10">
          <div className="relative bg-gray-900 py-10 rounded-lg flex flex-col items-center shadow-lg h-3/4 md:w-3/6 w-full text-white border border-gray-500">
            {/* Close Button */}
            <button
              className="absolute top-0 right-5 mt-4 py-2 flex justify-center items-center  text-white rounded-md hover:bg-red-700 transition"
              onClick={() => setSelectedProject(null)}
            >
              X
            </button>
            <img className="h-3/4 rounded-lg" src={selectedProject.image} alt="" />
            <h2 className="text-2xl font-bold mt-5">{selectedProject.title}</h2>
            <p className="text-gray-400 mb-4">{selectedProject.description}</p>

            {/* Action Buttons */}
            <div className="flex gap-5">
              <a
                href={selectedProject.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition"
              >
                Live App
              </a>
              <a
                href={selectedProject.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white hover:border-blue-700 px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition"
              >
                View Code
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
