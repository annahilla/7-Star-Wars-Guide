import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <header className="h-44 flex items-center flex-col md:flex-row md:relative">
      <Link className="m-auto" to="/">
        <img
          className="w-60 h-24 object-cover"
          src={logo}
          alt="Star Wars Logo"
        />
      </Link>
      <div className=" login-btns flex gap-5 md:absolute mb-8 md:mb-0 md:right-12">
        <button className="uppercase text-neutral-400 hover:text-neutral-300">
          Log In
        </button>
        <span className="text-neutral-800">//</span>
        <button className="uppercase text-neutral-400 hover:text-neutral-300">
          Sign Up
        </button>
      </div>
    </header>
  );
};

export default Header;
