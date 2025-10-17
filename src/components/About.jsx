import React from "react";

function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white py-20 px-6 md:px-20"
    >
      <div className="max-w-5xl mx-auto text-center md:text-left">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-blue-400 animate-fadeIn">
          About Me
        </h2>

        <p className="text-gray-300 text-lg md:text-xl mb-6 animate-fadeIn delay-200">
          I am a passionate Frontend Developer with expertise in React, HTML, CSS, and JavaScript.
          I love creating responsive, interactive, and modern web interfaces that provide excellent
          user experiences. I am constantly learning and exploring new technologies to enhance my skills.
        </p>

        <p className="text-gray-300 text-lg md:text-xl mb-6 animate-fadeIn delay-400">
          I enjoy solving complex problems and transforming ideas into functional, user-friendly
          applications. My focus is on writing clean, maintainable code while paying attention
          to UI/UX details that make a website engaging.
        </p>

        <p className="text-gray-300 text-lg md:text-xl mb-6 animate-fadeIn delay-600">
          I have worked on multiple projects, both individually and as part of a team, which has
          strengthened my collaboration skills and adaptability. I embrace new challenges and
          continuously seek to improve my development workflow and efficiency.
        </p>

        <p className="text-gray-300 text-lg md:text-xl mb-6 animate-fadeIn delay-800">
          When I am not coding, I love exploring design trends, experimenting with animations,
          and contributing to open-source projects. My goal is to create digital experiences
          that leave a positive impact on users.
        </p>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-10">
          {["React", "JavaScript", "HTML/CSS", "Tailwind CSS"].map((skill, idx) => (
            <div
              key={idx}
              className="bg-gray-800 p-6 rounded-xl shadow-lg hover:scale-105 hover:bg-blue-500 transition transform duration-300 ease-out animate-fadeIn"
              style={{ animationDelay: `${idx * 150}ms` }}
            >
              <h3 className="font-semibold text-white text-lg md:text-xl">{skill}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
