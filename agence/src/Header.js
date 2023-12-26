import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleHamburger = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="HEADER w-full p-4 text-2xl relative flex text-white bg-gray-900 shadow-lg transition-transform">
      <div className="flex-1 md:hidden"></div>
      <nav
        className={`MENU absolute top-16 right-0 translate-transition h-[100vh] w-5/6 bg-gray-900 drop-shadow-2xl ease-in-out duration-300 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }  `}
      >
        <ul className="pt-4">
          <li>
            <a
              href="/#realizations"
              className="block hover:text-3xl transition-transform duration-800 ease-in-out transform hover:translate-x-1 pl-4 py-3 hover:cursor-pointer"
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
      </nav>

      <a href="/" className={"flex "}>
        <div className="LOGO border-[1px] p-1 ">
          <p className="transform hover:rotate-[-360deg] transition-transform duration-700">
            🦄
          </p>
        </div>
        <div className="border-[1px] p-1 ">Licorne Labs</div>
      </a>

      <RxHamburgerMenu
        className={
          "HAMBURGER flex-0 ml-10 transform transition-transform duration-500 ease-in-out md:hidden " +
          (isMenuOpen ? "rotate-90 " : "rotate-0 ")
        }
        size="32px"
        onClick={handleHamburger}
      />
      <nav className="NAVBAR">
        <ul className="flex">
          <li>
            <a
              href="/#realizations"
              className="px-10 hover:underline hidden md:block"
            >
              {" "}
              Realizations
            </a>
          </li>
          <a
            href="/#services"
            className="px-10 hover:underline hidden md:block"
          >
            {" "}
            Services
          </a>
          <a href="/#pricing" className="px-10 hover:underline hidden md:block">
            {" "}
            Pricing
          </a>
          <a href="/Blog" className="px-10 hover:underline hidden md:block">
            {" "}
            Blog
          </a>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
