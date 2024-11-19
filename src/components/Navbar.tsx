import NavItem from "./ui/NavItem";

const Navbar = () => {
  return (
    <nav className="border-b border-neutral-800">
      <ul className="h-10 flex items-center justify-center m-auto w-fit">
        <NavItem to="/">
          Home
        </NavItem>
        <NavItem to="/starships">
          Starships
        </NavItem>
      </ul>
    </nav>
  );
};

export default Navbar;
