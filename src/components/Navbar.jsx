import React from "react";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <header className="sticky top-0 w-100 z-50 bg-black mb-4">
      <nav className="flex items-center justify-between px-6 lg:px-20 py-4 text-white">
        {/* Logo / Name */}
        <div className="flex items-center">
          <h1 className="text-2xl lg:text-3xl font-extrabold tracking-wide hover:scale-105 transition-transform">
            JASVIR <span className="text-cyan-300">SINGH</span>
          </h1>
        </div>

    

        {/* Social Links */}
        <div className="flex items-center gap-6 text-2xl">
          <a
            href="https://github.com/jasvir-vis/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-300 transition-colors"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/%E1%B4%8A%E1%B4%80%EA%9C%B1%E1%B4%A0%C9%AA%CA%80-%EA%9C%B1%C9%AA%C9%B4%C9%A2%CA%9C-050b23277/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-300 transition-colors"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.instagram.com/jasvirsingh1710?igsh=MW53aGw5eG5oN3IwNQ=="
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-300 transition-colors"
          >
            <FaInstagram />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
