import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#2C3333] w-full text-gray-400 py-4 left-0  absolute  ">
      {/* Sitemap */}
      <div className="w-full  sm:mb-0">
        <ul className="flex flex-wrap justify-center md:flex-nowrap">
          <li className="p-4 hover:text-gray-300">
            <a href="/#">Menu</a>
          </li>
          <li className="p-4 hover:text-gray-300">
            <a href="/#realizations">Réalisations</a>
          </li>
          <li className="p-4 hover:text-gray-300">
            <a href="/#pricing">Tarification</a>
          </li>
          <li className="p-4 hover:text-gray-300">
            <a href="/#services">Services</a>
          </li>
          <li className="p-4 hover:text-gray-300">
            <a href="/#contact">Contact</a>
          </li>
        </ul>
        <div className="flex py-3 flex-wrap justify-center md:flex-nowrap">
          <p>&copy; 2024 Agence X</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;