import React from "react";
import "./Home.css"; // or Tailwind CSS classes

function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 via-black to-gray-800"
    >
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center px-6 md:px-20 gap-10">
        <div className="intro-text text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Hello, I'm <span className="text-blue-400">Chandan S</span>
          </h1>
          <p className="text-gray-300 mb-6">
            Frontend Developer | React Enthusiast | Web Designer
          </p>
          <button className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition">
            View My Work
          </button>
        </div>
        <div className="profile-img-container">
          <img
            src="/profile.jpg"
            alt="Chandan S"
            className="w-48 h-48 md:w-64 md:h-64 rounded-full shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}

export default Home;
