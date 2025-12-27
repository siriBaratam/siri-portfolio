// Header.jsx
import React from "react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-[#0B2545] shadow-md z-50">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo / Title */}
        <h1 className="text-white text-xl font-bold">Portfolio</h1>

        {/* Navigation Links */}
        <ul className="flex space-x-8 text-white font-medium">
          <li className="hover:text-blue-400 cursor-pointer">About</li>
          <li className="hover:text-blue-400 cursor-pointer">Skills</li>
          <li className="hover:text-blue-400 cursor-pointer">Projects</li>
          <li className="hover:text-blue-400 cursor-pointer">Experience</li>
          <li className="hover:text-blue-400 cursor-pointer">Education</li>
          <li className="hover:text-blue-400 cursor-pointer">Contact</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
