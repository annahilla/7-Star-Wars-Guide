import NavItem from "./ui/NavItem";

const Navbar = () => {
  return (
    <nav className="border-t border-b border-neutral-800">
      <ul className="h-10 flex items-center justify-center m-auto w-fit border-x border-neutral-800">
        <NavItem to="/" hasBorder={true}>
          Home
        </NavItem>
        <NavItem to="/starships" hasBorder={false}>
          Starships
        </NavItem>
      </ul>
    </nav>
  );
};

export default Navbar;
