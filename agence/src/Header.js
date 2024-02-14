import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import Menu from "./Menu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleHamburger = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="HEADER font-MyFont items-center w-full py-4 md:text-2xl lg:text-3xl fixed flex z-50 bg-[#395B64] shadow-2xl transition-transform top-0 left-0 justify-between">
      <div className="flex-1 md:hidden"></div>
      <a href="/" className="flex items-center pl-[3vw] ">
        <div className="LOGO py-1 "></div>
        <div className="p-1 text-3xl lg:text-4xl">
          <span className="font-medium">Agence </span>
          <span className="font-extrabold animation:transform hover:rotate-[-360deg] transition-transform origin-center duration-700  hover:fill-current hover:text-blue-200 ">
            X
          </span>
        </div>
      </a>

      <nav className="NAVBAR pr-[3vw] ">
        <ul className="flex last:mr-[3px] ">
          <li className="hover:underline hidden md:block md:pl-8">
            <a href="/#realizations">Réalisations</a>
          </li>

          <li className="hover:underline hidden md:block pl-3 md:pl-8">
            <a href="/#services">Services</a>
          </li>

          <li className="hover:underline hidden md:block pl-3 md:pl-8">
            <a href="/#pricing">Tarification</a>
          </li>

          <li className="hover:underline hidden md:block pl-3 md:pl-8">
            <a href="/#contact">Contact</a>
          </li>
        </ul>
      </nav>
      <RxHamburgerMenu
        className={
          "HAMBURGER flex-1  ml-10 transition-all duration-500 ease-in-out  md:hidden " +
          (isMenuOpen ? "rotate-90 " : "rotate-0 ")
        }
        size="32px"
        onClick={handleHamburger}
      />
      <Menu isMenuOpen={isMenuOpen} handleHamburger={handleHamburger} />
    </header>
  );
};

export default Header;
