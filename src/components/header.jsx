import React, { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-[#0B2545] shadow-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <a href="#hero"><h1 className="text-xl font-bold text-white">@Siri</h1></a>

        {/* Desktop Nav */}
        <ul className="hidden space-x-8 font-medium text-white md:flex">
          <a href="#about"><li className="cursor-pointer hover:text-blue-400">About</li></a>
          <a href="#skills"><li className="cursor-pointer hover:text-blue-400">Skills</li></a>
          <a href="#projects"><li className="cursor-pointer hover:text-blue-400">Projects</li></a>
          <a href="#experience"><li className="cursor-pointer hover:text-blue-400">Experience</li></a>
          <a href="#education"><li className="cursor-pointer hover:text-blue-400">Education</li></a>
          <a href="#contact"><li className="cursor-pointer hover:text-blue-400">Contact</li></a>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="text-white md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="bg-[#0B2545] md:hidden">
          <ul className="flex flex-col space-y-4 px-6 py-4 text-white font-medium">
            <a href="#about"><li className="cursor-pointer hover:text-blue-400">About</li></a>
          <a href="#skills"><li className="cursor-pointer hover:text-blue-400">Skills</li></a>
          <a href="#projects"><li className="cursor-pointer hover:text-blue-400">Projects</li></a>
          <a href="#experience"><li className="cursor-pointer hover:text-blue-400">Experience</li></a>
          <a href="#education"><li className="cursor-pointer hover:text-blue-400">Education</li></a>
          <a href="#contact"><li className="cursor-pointer hover:text-blue-400">Contact</li></a>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
