import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      image: "food_delivery.jpg",
      tech: ["React.js", "Express.js", "MongoDB", "Tailwind CSS"],
      title: "Food Pack",
      description:
        "A complete full-stack food-delivery application with backend and admin panel. In this project I used React.js, Express.js, MongoDB for database, and Tailwind CSS.",
      category: "React JS",
      liveLink: "https://food-kingdom-frontend.vercel.app",
      githubLink: "https://github.com/riyadhbd2/food-kingdom",
    },
    {
      id: 2,
      image: "mern_authentication.jpg",
      tech: ["React.js", "Express.js", "MongoDB", "Tailwind CSS"],
      title: "Mern Authentication",
      description:
        "MERN authentication system with email verification. OTP is used to verify email and reset password. Nodemailer is used to send email.",
      category: "React JS",
      liveLink: "https://mern-authenticatin-frontend.vercel.app",
      githubLink: "https://github.com/riyadhbd2/mern-authenticatin",
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
  ];

  const categories = ["All", ...new Set(projects.map((project) => project.category))];

  const filteredProjects =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

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

  const renderProjectPreview = (project, imageClassName) => {
    if (!project.image) {
      return (
        <div
          className={`theme-placeholder flex items-center justify-center rounded-lg text-center text-sm font-medium ${imageClassName}`}
        >
          Preview coming soon
        </div>
      );
    }

    return (
      <img
        className={imageClassName}
        src={`/${project.image}`}
        alt={`${project.title} preview`}
      />
    );
  };

  return (
    <section
      id="projects"
      className="container mx-auto mt-20 flex flex-col items-center justify-center px-4 sm:px-6"
    >
      <div className="p-5 text-center leading-8">
        <h1 className="theme-section-title text-4xl font-bold">Projects</h1>
        <p className="theme-section-copy">
          I have worked on a wide range of full stack projects. Here are some
          examples.
        </p>
      </div>

      <div className="mb-6 mt-5 flex flex-wrap justify-center gap-2">
        {categories.map((category) => (
          <button
            key={category}
            className={`theme-filter-button ${
              filter === category ? "theme-filter-button-active" : ""
            }`}
            onClick={() => setFilter(category)}
            type="button"
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid w-full max-w-[1120px] grid-cols-1 justify-center gap-5 md:grid-cols-2 xl:grid-cols-3">
        {filteredProjects.map((project) => (
          <motion.div
            layout
            onClick={() => setSelectedProject(project)}
            key={project.id}
            className="theme-card min-h-96 w-full cursor-pointer rounded-lg p-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          >
            {renderProjectPreview(project, "h-40 w-full rounded-lg object-cover")}

            <div className="mt-5 flex flex-wrap gap-2">
              {project.tech.map((item, index) => (
                <div key={index}>
                  <span className="theme-tag inline-flex min-h-8 items-center justify-center whitespace-nowrap rounded-full px-3 py-1 text-center text-[13px] font-medium">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <h3 className="theme-card-heading mt-2 text-xl font-bold">
              {project.title}
            </h3>
            <p className="theme-section-copy">{project.description}</p>
          </motion.div>
        ))}
      </div>

      {selectedProject && (
        <div
          className="theme-modal-backdrop fixed inset-0 z-30 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="theme-modal relative flex max-h-[90vh] w-full flex-col items-center overflow-y-auto rounded-lg px-5 py-10 md:w-3/5"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="theme-button-secondary absolute right-4 top-4 px-3 py-1.5 text-sm font-semibold"
              onClick={() => setSelectedProject(null)}
              type="button"
            >
              Close
            </button>

            {renderProjectPreview(
              selectedProject,
              "mt-5 max-h-[360px] w-full rounded-lg object-cover"
            )}

            <h2 className="theme-card-heading mt-5 text-center text-2xl font-bold">
              {selectedProject.title}
            </h2>
            <p className="theme-section-copy mb-4 w-full max-w-2xl text-center">
              {selectedProject.description}
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={selectedProject.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="theme-button-primary px-6 py-2"
              >
                Live App
              </a>
              <a
                href={selectedProject.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="theme-button-secondary px-4 py-2"
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
