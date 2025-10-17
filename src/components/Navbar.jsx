import React, { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-black/80 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">Chandan S</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-white font-medium">
          <li><a href="#home" className="hover:text-blue-400 transition">Home</a></li>
          <li><a href="#about" className="hover:text-blue-400 transition">About</a></li>
          <li><a href="#projects" className="hover:text-blue-400 transition">Projects</a></li>
          <li><a href="#contact" className="hover:text-blue-400 transition">Contact</a></li>
        </ul>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            {isOpen ? (
              <span className="text-2xl">&#10005;</span>
            ) : (
              <span className="text-2xl">&#9776;</span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-black/90 backdrop-blur-md text-white flex flex-col items-center space-y-4 py-4">
          <li><a href="#home" onClick={() => setIsOpen(false)}>Home</a></li>
          <li><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
          <li><a href="#projects" onClick={() => setIsOpen(false)}>Projects</a></li>
          <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
