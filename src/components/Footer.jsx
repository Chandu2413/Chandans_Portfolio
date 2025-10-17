import React from "react";

function Footer() {
  return (
    <footer className="bg-black/90 text-gray-400 py-6 text-center">
      <p>&copy; {new Date().getFullYear()} Chandan S. All rights reserved.</p>
      <div className="flex justify-center space-x-4 mt-2">
        <a href="#" className="hover:text-blue-400 transition">LinkedIn</a>
        <a href="#" className="hover:text-blue-400 transition">GitHub</a>
        <a href="#" className="hover:text-blue-400 transition">Twitter</a>
      </div>
    </footer>
  );
}

export default Footer;
