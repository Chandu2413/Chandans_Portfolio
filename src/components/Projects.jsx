import React from "react";
import "./Projects.css";

function Projects() {
  const projects = [
    { title: "Recipe Manager", desc: "Full-stack CRUD app using PHP and MySQL" },
    { title: "Startup Failure Analysis", desc: "Data Analytics using Python & Streamlit" },
    { title: "ToneMate", desc: "React-based music app for men’s mental wellness" }
  ];

  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <div className="project-list">
        {projects.map((proj, i) => (
          <div key={i} className="project-card">
            <h3>{proj.title}</h3>
            <p>{proj.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
