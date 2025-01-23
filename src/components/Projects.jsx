import React from "react";

const Projects = () => {
  return (
    <section id="projects" className="container mx-auto mt-10 flex flex-col items-center justify-center">
      <div className="text-center leading-8">
        <h1 className="text-4xl font-bold">Projects</h1>
        <p className="text-gray-400">
          I have worked on a wide range of projects. From web apps to android
          apps. Here are some of my projects.
        </p>
      </div>
      {/* filter button */}
      <div className="flex items-center justify-center mt-8">
        <button className="border-2 rounded-l-md px-3 py-2 border-violet-700 text-sm text-gray-400">
          ALL
        </button>
        <button className="border-2 border-violet-700 px-3 py-2 text-sm text-gray-400">
          REACT APP
        </button>
        <button className="border-2 rounded-r-md border-violet-700 px-3 py-2 text-sm text-gray-400">
          NEXT JS
        </button>
      </div>
      {/* Project List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-5 mt-5 w-2/3 text-center">
        <div className="border border-gray-400 h-96">Project 1</div>
        <div className="border border-gray-400 h-96">Project 2</div>
        <div className="border border-gray-400 h-96">Project 3</div>
        <div className="border border-gray-400 h-96">Project 4</div>
        <div className="border border-gray-400 h-96">Project 5</div>
        <div className="border border-gray-400 h-96">Project 6</div>
      </div>
    </section>
  );
};

export default Projects;
