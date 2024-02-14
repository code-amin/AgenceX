const Menu = ({ isMenuOpen, handleHamburger }) => {
  return (
    <>
      <nav
        className={`MENU h-screen fixed text-3xl top-16 transition-all w-3/4 py-3 bg-gray-800 shadow-2xl duration-500 ${
          isMenuOpen ? "right-0" : "-right-full"
        }  `}
      >
        <ul className="mt-2">
          <li>
            <a
              href="/#realizations"
              className="block hover:text-5xl duration-1000 hover:translate-x-1 pl-4 py-5 hover:cursor-pointer"
              onClick={handleHamburger}
            >
              Réalisations
            </a>
          </li>
          <li>
            <a
              href="/#services"
              className="block hover:text-5xl duration-1000 hover:translate-x-1 pl-4 py-5 hover:cursor-pointer"
              onClick={handleHamburger}
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="/#pricing"
              className="block hover:text-5xl duration-1000 hover:translate-x-1 pl-4 py-5 hover:cursor-pointer"
              onClick={handleHamburger}
            >
              Tarification
            </a>
          </li>{" "}
          <li>
            <a
              href="/#contact"
              className="block hover:text-5xl duration-1000 hover:translate-x-1 pl-4 py-5 hover:cursor-pointer"
              onClick={handleHamburger}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Menu;
