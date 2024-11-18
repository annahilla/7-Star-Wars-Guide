import { ReactNode } from "react";
import { NavLink } from "react-router-dom";

interface NavItemProps {
  to: string;
  children: ReactNode;
  hasBorder?: boolean;
}

const NavItem = ({ to, children, hasBorder = true }: NavItemProps) => {
  return (
    <li
      className={`flex items-center h-10 uppercase text-neutral-400 relative hover:text-neutral-300 ${
        hasBorder ? "border-r border-neutral-800" : ""
      }`}
    >
      <NavLink
        className={({ isActive }) =>
          isActive ? "border-b-2 border-neutral-700 px-6 py-2" : "px-6"
        }
        to={to}
      >
        {children}
      </NavLink>
    </li>
  );
};

export default NavItem;
