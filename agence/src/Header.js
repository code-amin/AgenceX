import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {
  return (
    <div className="w-full pb-10 flex space-evenly">
      <RxHamburgerMenu size="2rem" color="" />
      <div className="py-4 text-4xl">🦄 Licorne Labs</div>
    </div>
  );
};

export default Header;
