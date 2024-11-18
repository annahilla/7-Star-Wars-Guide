const Navbar = () => {

    return (
        <nav className="border-t border-b border-neutral-800">
            <ul className="flex items-center justify-center m-auto w-fit border-x border-neutral-800">
                <li className="uppercase py-3 px-6 border-r border-neutral-800 text-neutral-400 hover:text-neutral-300">
                    <a href="#">Home</a>
                </li>
                <li className="uppercase py-3 px-6 text-neutral-400 hover:text-neutral-300">
                    <a href="#">Starships</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;