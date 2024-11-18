import logo from "../assets/logo.png"

const Header = () => {
    return (
        <header className="flex items-center relative">
            <img className="m-auto w-60" src={logo} alt="Star Wars Logo" />
            <div className="absolute login-btns flex gap-5 right-12">
                <button className="uppercase text-neutral-400 hover:text-neutral-300">Log In</button>
                <span className="text-neutral-800">//</span>
                <button className="uppercase text-neutral-400 hover:text-neutral-300">Sign Up</button>
            </div>
        </header>
    )
}

export default Header;