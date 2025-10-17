import React from "react";

function Projects() {
  const projectList = [
    {
      title: "Recipe Manager",
      description: "Full-stack app to manage recipes with CRUD operations using React & PHP.",
      link: "#",
    },
    {
      title: "Startup Failure Analysis",
      description: "Data analytics project using Python & Streamlit to analyze failed startups.",
      link: "#",
    },
    {
      title: "Portfolio Website",
      description: "My personal portfolio built with React and Tailwind CSS.",
      link: "#",
    },
    {
      title: "ToneMate App",
      description: "An app for generating musical tones interactively.",
      link: "#",
    },
  ];

  return (
    <section id="projects" className="min-h-screen bg-gray-900 text-white py-20 px-6 md:px-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12 text-blue-400">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projectList.map((project, idx) => (
            <div
              key={idx}
              className="bg-gray-800 p-6 rounded-xl shadow-lg hover:scale-105 hover:bg-blue-500 transition transform duration-300"
            >
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <a
                href={project.link}
                className="text-blue-400 hover:text-white font-semibold"
                target="_blank"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
