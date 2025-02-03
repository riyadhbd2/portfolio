import React from "react";

const Projects = () => {
  return (
    <section
      id="projects"
      className="container mx-auto mt-10 flex flex-col items-center justify-center"
    >
      <div className="text-center leading-8">
        <h1 className="text-4xl font-bold">Projects</h1>
        <p className="text-gray-400">
          I have worked on a wide range of projects. From web apps to android
          apps. Here are some of my projects.
        </p>
      </div>
      {/* filter button */}
      <div className="flex items-center justify-center mt-8">
        <button className="border-2 border-gray-400 rounded-l-md px-3 py-2  text-sm text-gray-400">
          ALL
        </button>
        <button className="border-2 border-gray-400  px-3 py-2 text-sm text-gray-400">
          REACT APP
        </button>
        <button className="border-2 border-gray-400 rounded-r-md px-3 py-2 text-sm text-gray-400">
          NEXT JS
        </button>
      </div>
      {/* Project List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-5 mt-5 w-2/3">
        {/* project one */}
        <div className="border rounded-lg border-gray-400 h-96">
          <div className="border m-5">
            <div className="flex items-center justify-center">
              <img
                className="w-60"
                src="https://cardoctor.ie/wp-content/uploads/2021/12/LogoCarDoctor_hex.png"
                alt=""
              />
            </div>

            <div>
              <p>React.js</p>
            </div>
            <h1>Car Doctor</h1>
            <p>Date: </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptatibus, quasi?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
