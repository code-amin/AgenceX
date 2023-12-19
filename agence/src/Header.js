import { RxHamburgerMenu } from "react-icons/rx";
import { NavLink, Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleHamburger = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full p-4 text-2xl fixed flex text-white bg-gray-900 shadow-lg">
      <RxHamburgerMenu
        className={
          "flex-0 mr-10 transform transition-transform duration-500 ease-in-out md:hidden " +
          (isMenuOpen ? "rotate-90 " : "rotate-0 ")
        }
        size="2rem"
        onClick={handleHamburger}
      />

      {isMenuOpen && (
        <div
          className={
            "absolute top-16 transition-transform duration-500 ease-in-out w-5/6  bg-gray-900 shadow-2xl " +
            (isMenuOpen ? "visible" : "hidden")
          }
        >
          <ul>
            <li>
              <a
                href="/#realizations"
                className="block px-2 py-3"
                onClick={handleHamburger}
              >
                Realizations
              </a>
            </li>
            <li>
              <a
                href="/#services"
                className="block px-2 py-3"
                onClick={handleHamburger}
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="/#pricing"
                className="block px-2 py-3"
                onClick={handleHamburger}
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="/Blog"
                className="block px-2 py-3"
                onClick={handleHamburger}
              >
                Blog
              </a>
            </li>
          </ul>
        </div>
      )}

      <a href="/" className={"flex "}>
        <div className="border-[1px] p-1 ">
          <p className="transform hover:rotate-[-360deg] transition-transform duration-700">
            🦄
          </p>
        </div>
        <div className="border-[1px] p-1 ">Licorne Labs</div>
      </a>
      <div className="flex-1"></div>
    </header>
  );
};

export default Header;
