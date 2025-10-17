import React from "react";
import "./Home.css";

function Home() {
  return (
    <section id="home" className="home">
      <div className="home-content">
        <img src="/profile.jpg" alt="Chandan S" className="profile-img" />
        <div className="intro-text">
          <h1>Hello, I'm <span>Chandan S</span></h1>
          <p>Frontend Developer | React Enthusiast | Web Designer</p>
          <button>View My Work</button>
        </div>
      </div>
    </section>
  );
}

export default Home;
