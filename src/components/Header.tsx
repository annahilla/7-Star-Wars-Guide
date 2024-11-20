import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import SocialMedia from "./SocialMedia";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const Header = () => {
  const isLoggedIn = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );
  const userEmail = useSelector((state: RootState) => state.auth.email);
  const username = userEmail.replace(/@.*/, "");

  return (
    <header className="my-7 flex items-center justify-between flex-col md:flex-row md:relative">
      <div className="hidden lg:flex lg:items-center lg:gap-5 lg:absolute lg:mb-10 lg:left-20">
        <SocialMedia />
      </div>
      <Link className="m-auto" to="/">
        <img className="h-24 object-cover" src={logo} alt="Star Wars Logo" />
      </Link>
      <div className="flex gap-5 text-neutral-200 font-bold mt-8 md:absolute md:mt-0 md:mb-10 md:right-20">
        {isLoggedIn ? (
          <p className="uppercase">Welcome {username}</p>
        ) : (
          <>
            <Link to="/signup" className="uppercase hover:text-neutral-100">
              Sign Up
            </Link>
            <Link
              to="/login"
              className="uppercase hover:text-neutral-100 flex gap-2"
            >
              <img
                src="https://static-mh.content.disney.io/matterhorn/assets/starwars/navigation/SW_Oneid_User-85043c6786ab.svg"
                alt="User Icon"
              />
              <span>Log In</span>
            </Link>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
