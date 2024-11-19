import Banner from "./Banner";
import NavItem from "./ui/NavItem";

const Navbar = () => {
  return (
    <>
      <nav className="mt-4 border-b border-neutral-800 md:mt-12">
        <ul className="h-10 flex items-center justify-center m-auto w-fit">
          <NavItem to="/">Home</NavItem>
          <NavItem to="/starships">Starships</NavItem>
        </ul>
      </nav>
      <Banner />
    </>
  );
};

export default Navbar;
