import React from "react";
//import Profile from "../../src/assets/profile.jpg" // Adjust the path if needed
import "./Home.css";

function Home() {
  return (
    <section id="home" className="home">
      <div className="home-content">
        {/* <img src={Profile} alt="Chandan S" className="profile-img" /> */}
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
