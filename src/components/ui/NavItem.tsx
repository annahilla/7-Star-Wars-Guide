import { ReactNode } from "react";
import { NavLink } from "react-router-dom";

interface NavItemProps {
  to: string;
  children: ReactNode;
}

const NavItem = ({ to, children}: NavItemProps) => {

  return (
    <li
      className="flex items-center font-bold h-10 uppercase text-neutral-400 relative hover:text-neutral-300 px-6"
    >
      <NavLink
        className={({ isActive }) =>
          isActive ? "text-neutral-300 rounded-sm py-2 relative after:absolute after:bottom-0 after:left-1/2 after:w-2/3 after:h-[2px] after:bg-yellow-200 after:transform after:-translate-x-1/2 after:shadow-md after:shadow-yellow-200" : ""
        }
        to={to}
      >
        {children}
      </NavLink>
    </li>
  );
};

export default NavItem;
