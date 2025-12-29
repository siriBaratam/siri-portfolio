const Footer = () => {
  return (
    <footer className="w-full border-t border-indigo-500/10 bg-[#05050f] py-6">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-center sm:flex-row">
        
        {/* Left */}
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Siri Baratam. All rights reserved.
        </p>

        {/* Right */}
        <div className="flex gap-6 text-sm text-gray-400">
          <a href="#about" className="transition hover:text-indigo-400">
            About
          </a>
          <a href="#projects" className="transition hover:text-indigo-400">
            Projects
          </a>
          <a href="#contact" className="transition hover:text-indigo-400">
            Contact
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
