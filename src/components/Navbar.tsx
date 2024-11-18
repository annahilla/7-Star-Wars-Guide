import { NavLink } from "react-router-dom";

const Navbar = () => {

    return (
        <nav className="border-t border-b border-neutral-800">
            <ul className="flex py-3 items-center justify-center m-auto w-fit border-x border-neutral-800">
                <li className="uppercase text-neutral-400 relative hover:text-neutral-300">
                    <NavLink className={({ isActive }) => isActive ? "border-b-2 border-sky-600 py-3 px-6" : "py-3 px-6"} to="/">Home</NavLink>
                </li>          
                <li className="uppercase text-neutral-400 relative hover:text-neutral-300">
                    <NavLink className={({ isActive }) => isActive ? "border-b-2 border-sky-600 py-3 px-6" : "py-3 px-6"} to="/starships">Starships</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;