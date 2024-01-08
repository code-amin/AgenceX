const Menu = ({ isMenuOpen, handleHamburger }) => {
  return (
    <>
      <nav
        className={`MENU h-screen fixed top-16 transition-all w-5/6 py-3 bg-gray-800 drop-shadow-2xl duration-500 ${
          isMenuOpen ? "right-0" : "-right-full"
        }  `}
      >
        <ul className="pt-4">
          <li>
            <a
              href="/#realizations"
              className="block hover:text-3xl transition-transform duration-800 ease-in-out transform hover:translate-x-1 pl-4 py-3 hover:cursor-pointer"
              onClick={handleHamburger}
            >
              Réalisations
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
              Tarification
            </a>
          </li>{" "}
          <li>
            <a
              href="/#contact"
              className="block hover:text-3xl transition-transform duration-800 ease-in-out transform hover:translate-x-1 pl-4 py-3 hover:cursor-pointer"
              onClick={handleHamburger}
            >
              Contact
            </a>
          </li>
          {/* <li>
    <a
      href="/#footer"
      className="block hover:text-3xl transition-transform duration-800 ease-in-out transform hover:translate-x-1 pl-4 py-3 hover:cursor-pointer"
      onClick={handleHamburger}
    >
      Sitemap
    </a>
  </li> */}
          {/* <li>
    <a
      href="/Blog"
      className="block hover:text-3xl transition-transform duration-800 ease-in-out transform hover:translate-x-1 pl-4 py-3 hover:cursor-pointer"
      onClick={handleHamburger}
    >
      Blog
    </a>
  </li> */}
        </ul>
      </nav>
    </>
  );
};

export default Menu;
