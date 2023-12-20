import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleHamburger = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="HEADER w-full p-4 text-2xl fixed flex text-white bg-gray-900 shadow-lg">
      <RxHamburgerMenu
        className={
          "HAMBURGER flex-0 mr-10 transform transition-transform duration-500 ease-in-out md:hidden " +
          (isMenuOpen ? "rotate-90 " : "rotate-0 ")
        }
        size="32px"
        onClick={handleHamburger}
      />

      {isMenuOpen && (
        <div
          className={
            "MOBILE-MENU absolute top-16 transition-transform left-0 h-[100vh] duration-500 ease-in-out w-5/6 bg-gray-900 shadow-2xl " +
            (isMenuOpen ? "visible" : "hidden")
          }
        >
          <ul className="">
            <li>
              <a
                href="/#realizations"
                className="block hover:text-3xl transition-transform duration-1000 ease-in-out transform hover:translate-x-1 pl-4 py-3 hover:cursor-pointer"
                onClick={handleHamburger}
              >
                Realizations
              </a>
            </li>
            <li>
              <a
                href="/#services"
                className="block hover:text-3xl transition-transform duration-800 ease-in-out transform hover:translate-x-1 pl-4 py-3 hover:cursor-pointer"
                onClick={handleHamburger}
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="/#pricing"
                className="block hover:text-3xl transition-transform duration-800 ease-in-out transform hover:translate-x-1 pl-4 py-3 hover:cursor-pointer"
                onClick={handleHamburger}
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="/Blog"
                className="block hover:text-3xl transition-transform duration-800 ease-in-out transform hover:translate-x-1 pl-4 py-3 hover:cursor-pointer"
                onClick={handleHamburger}
              >
                Blog
              </a>
            </li>
          </ul>
        </div>
      )}

      <a href="/" className={"flex "}>
        <div className="LOGO border-[1px] p-1 ">
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
