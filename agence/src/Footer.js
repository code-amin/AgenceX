import React from "react";

const Footer = () => {
  return (
    <footer id="sitemap" className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex flex-col items-center">
        <div className="mb-4">
          <p>&copy; 2024 🦄 Licorne Labs </p>
        </div>
        <div className="flex space-x-4">
          <a href="#home" className="hover:text-gray-300">
            Home
          </a>
          <a href="#about" className="hover:text-gray-300">
            About
          </a>
          <a href="#services" className="hover:text-gray-300">
            Services
          </a>
          <a href="#contact" className="hover:text-gray-300">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
